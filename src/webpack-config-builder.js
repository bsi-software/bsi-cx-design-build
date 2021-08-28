import fs from 'fs';
import path from 'path';

import ZipPlugin from 'zip-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

import packageJson from '../package.json';
import BsiCxWebpackPlugin from './bsi-cx-webpack-plugin';
import BsiCxWebpackLegacyDesignPlugin from './bsi-cx-webpack-legacy-design-plugin';
import BsiCxWebpackZipHashPlugin from './bsi-cx-webpack-zip-hash-plugin';
import Constant from './constant';
import File from './file';
import {buildPublicPath, findStringSimilarities, getZipArchiveName, StaticJavaScriptCondition} from './utility';
import BuildConfig from './build-config/build-config';
import ValidatedBuildConfig from './build-config/validated-build-config';
import TwigContext from './twig-context';
import BsiCxTwigContextWebpackPlugin from './bsi-cx-twig-context-webpack-plugin';


export default class WebpackConfigBuilder {
  /**
   * @type {string}
   */
  static DESIGN_LAYER = 'design';

  /**
   * @type {ValidatedBuildConfig}
   * @private
   */
  _config = undefined;
  /**
   * @type {TwigContext}
   * @private
   */
  _twigContext = undefined;

  /**
   * @param {ValidatedBuildConfig} config
   */
  constructor(config) {
    /**
     * @type {ValidatedBuildConfig}
     * @private
     */
    this._config = config;
    /**
     * @type {TwigContext}
     * @private
     */
    this._twigContext = new TwigContext(config.propertiesFilePath);
  }

  /**
   * @returns {ValidatedBuildConfig}
   */
  get config() {
    return this._config;
  }

  /**
   * @return {TwigContext}
   */
  get twigContext() {
    return this._twigContext;
  }

  build() {
    return {
      entry: this._getEntryConfig(),
      name: this.config.name,
      context: this.config.rootPath,
      target: 'web',
      module: {
        rules: [
          ...this._getTwigRuleConfig(),
          ...this._getHtmlAndHbsRuleConfig(),
          ...this._getStyleRulesConfig(),
          ...this._getStaticAssetsRuleConfig(),
          ...this._getStaticJavaScriptFileRuleConfig(),
          ...this._getRegularJavaScriptFileRuleConfig()
        ]
      },
      plugins: [
        ...this._getBsiCxTwigContextWebpackPlugin(),
        ...this._getMiniCssExtractPluginConfig(),
        ...this._getCopyPluginConfig(),
        ...this._getBsiCxWebpackPluginConfig(),
        ...this._getBsiCxWebpackLegacyDesignPluginConfig(),
        ...this._getZipPluginConfig(),
      ],
      devtool: this._getDevToolConfig(),
      devServer: this._getDevServerConfig(),
      stats: this._getStatsConfig(),
      performance: this._getPerformanceConfig(),
      optimization: {
        minimize: true,
        minimizer: this._getOptimizationMinimizerConfig(),
        splitChunks: {
          chunks: 'all',
          name: this._getOptimizationSplitChunksNameConfig(),
          cacheGroups: {
            ...this._getOptimizationCacheGroupsConfig(),
          }
        }
      },
      output: this._getOutputConfig(),
      experiments: {
        layers: true
      }
    };
  }

  /**
   * The default output path: dist/{name}
   *
   * @returns {string}
   * @private
   */
  _getDefaultOutputPath() {
    return path.resolve(process.cwd(), 'dist', this.config.name);
  }

  /**
   * The entry configuration.
   *
   * @returns {{}}
   */
  _getEntryConfig() {
    return {
      ...this._getJavaScriptModuleEntries(),
      json: {
        import: this._getDesignJsFilePath(),
        filename: File.DESIGN_JSON,
        layer: WebpackConfigBuilder.DESIGN_LAYER,
        library: {
          type: 'var',
          name: 'json'
        }
      },
      design: this._evaluateEntryTemplate('design'),
      preview: this._evaluateEntryTemplate('preview')
    };
  }

  /**
   * Get the entry configuration for a template.
   *
   * @param {string} name
   * @returns {{}}
   */
  _evaluateEntryTemplate(name) {
    let twigFilePath = path.resolve(this.config.rootPath, `${name}.twig`);
    let hbsFilePath = path.resolve(this.config.rootPath, `${name}.hbs.twig`);
    let isTwig = fs.existsSync(twigFilePath);
    let extension = isTwig ? 'html' : 'hbs';
    return {
      import: isTwig ? twigFilePath : hbsFilePath,
      filename: `${name}.${extension}`
    };
  }

  /**
   * @return {string}
   * @private
   */
  _getDesignJsFilePath() {
    return path.resolve(this.config.rootPath, File.DESIGN_JS);
  }

  /**
   * Get the entry configurations for the Java Script modules.
   *
   * @returns {[{}]}
   */
  _getJavaScriptModuleEntries() {
    let entries = {};

    for (let config of this.config.modules) {
      let name = config.name;
      entries[name] = this._getJavaScriptModuleEntry(config);
    }

    return entries;
  }

  /**
   * @param {ModuleConfig} config
   * @return {{filename: string, import: string, runtime: string}}
   * @private
   */
  _getJavaScriptModuleEntry(config) {
    let importPath;
    if (path.isAbsolute(config.path)) {
      importPath = path.resolve(config.path);
    } else {
      importPath = path.resolve(this.config.modulesRootPath, config.path);
    }

    if (!fs.existsSync(importPath)) {
      throw new Error(`The file ${importPath} for module ${config.name} does not exist.`);
    }

    if (!fs.statSync(importPath).isFile()) {
      throw new Error(`The path ${importPath} for module ${config.name} does not point to a file.`);
    }

    return {
      import: importPath,
      filename: 'modules/[name]-[contenthash].js',
      runtime: Constant.BSI_CX_MODULE_RUNTIME_PATH
    };
  }

  /**
   * Rules for Twig file handling.
   *
   * @returns {[{}]}
   */
  _getTwigRuleConfig() {
    return [
      {
        test: /\.twig$/i,
        use: [
          this._getTemplateLoader(),
          'ref-loader',
          {
            loader: 'twing-loader',
            options: {
              environmentModulePath: `${packageJson.name}/dist/twing-environment.js`,
              renderContext: {
                properties: this._twigContext.properties,
                designBaseUrl: buildPublicPath(this.config)
              }
            }
          }
        ]
      }
    ];
  }

  /**
   * Rule for HTML and Handlebars file handling.
   *
   * @returns {[{}]}
   */
  _getHtmlAndHbsRuleConfig() {
    return [
      {
        test: /\.(html|hbs)$/i,
        use: [
          this._getTemplateLoader(),
          'ref-loader',
        ]
      }
    ];
  }

  /**
   * Rules for LESS, SASS/SCSS and CSS file handling.
   *
   * @returns {[{}]}
   */
  _getStyleRulesConfig() {
    return [
      {
        test: /\.less$/i,
        use: [
          ...this._getCssLoaderChain(),
          {
            loader: 'less-loader',
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          ...this._getCssLoaderChain(),
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          ...this._getCssLoaderChain()
        ]
      }
    ];
  }

  /**
   * Get all file extensions that should be handled as static assets (e.g. images and fonts).
   *
   * @returns {[string]}
   */
  _getStaticAssetFileExtensions() {
    return [
      'png',
      'apng',
      'jpg',
      'jpeg',
      'webp',
      'gif',
      'bmp',
      'tiff',
      'raw',
      'svg',
      'eot',
      'ttf',
      'woff',
      'woff2'
    ];
  }

  /**
   * Rule for static assets handling.
   *
   * @returns {[{}]}
   */
  _getStaticAssetsRuleConfig() {
    let fileExtensions = this._getStaticAssetFileExtensions().join('|');
    let testRegex = new RegExp(`\.(${fileExtensions})$`, 'i');

    return [
      {
        test: testRegex,
        type: 'asset/resource',
        generator: {
          filename: 'static/[name]-[contenthash][ext]'
        }
      }
    ];
  }

  /**
   * Rule for static Java Script file handling.
   *
   * @returns {[{}]}
   */
  _getStaticJavaScriptFileRuleConfig() {
    return [
      {
        resource: (file) => StaticJavaScriptCondition.test(this.config.rootPath, file),
        type: 'asset/resource',
        generator: {
          filename: 'static/[name]-[contenthash][ext]'
        }
      }
    ];
  }

  /**
   * Rule for regular Java Script file handling.
   *
   * @returns {[{}]}
   */
  _getRegularJavaScriptFileRuleConfig() {
    return [
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        include: this.config.modulesRootPath,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
            cacheDirectory: true
          }
        }
      }
    ];
  }

  /**
   * @returns {string}
   */
  _getTemplateLoader() {
    return `${packageJson.name}/dist/template-loader`;
  }

  /**
   * @returns {[{}]}
   */
  _getCssLoaderChain() {
    return [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '../'
        }
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              'postcss-preset-env',
              'cssnano'
            ]
          }
        }
      }
    ];
  }

  /**
   * Mini CSS extract plugin configuration.
   *
   * @returns {[MiniCssExtractPlugin]}
   */
  _getMiniCssExtractPluginConfig() {
    return [
      new MiniCssExtractPlugin({
        filename: 'static/styles-[contenthash].css',
      })
    ];
  }

  /**
   * Copy plugin configuration.
   *
   * @returns {[CopyPlugin]}
   */
  _getCopyPluginConfig() {
    return [
      new CopyPlugin({
        patterns: [
          {
            from: 'assets/**/*',
            globOptions: {
              dot: true,
              ignore: ['**/.gitkeep', '**/.gitignore']
            },
            noErrorOnMissing: true,
            info: {
              minimized: true
            },
          },
          ...this.config.additionalFilesToCopy
        ]
      })
    ];
  }

  /**
   *
   * @return {BsiCxTwigContextWebpackPlugin[]}
   * @private
   */
  _getBsiCxTwigContextWebpackPlugin() {
    return [
      new BsiCxTwigContextWebpackPlugin(this.twigContext)
    ]
  }

  /**
   * @return {[BsiCxWebpackPlugin]}
   * @private
   */
  _getBsiCxWebpackPluginConfig() {
    return [
      new BsiCxWebpackPlugin(this.config)
    ];
  }

  /**
   * Webpack ZIP plugin configuration.
   *
   * @returns {[ZipPlugin|BsiCxWebpackZipHashPlugin]}
   */
  _getZipPluginConfig() {
    /**
     * @type {[ZipPlugin|BsiCxWebpackZipHashPlugin]}
     */
    let plugins = [
      new ZipPlugin({
        filename: getZipArchiveName(this.config.name, this.config.version),
        exclude: [/\.map$/]
      })
    ];

    if (this.config.sourceMapEnabled) {
      plugins.push(
        new ZipPlugin({
          filename: getZipArchiveName(this.config.name, this.config.version, 'dev'),
        })
      );
    }

    plugins.push(
      new BsiCxWebpackZipHashPlugin(this.config.name, this.config.version, this.config.hashZipFiles)
    );

    return plugins;
  }

  /**
   * BSI CX legacy design format plugin config.
   *
   * @returns {[BsiCxWebpackLegacyDesignPlugin]}
   */
  _getBsiCxWebpackLegacyDesignPluginConfig() {
    let plugins = [];
    if (this.config.targetVersion.legacyFormat) {
      plugins.push(
        new BsiCxWebpackLegacyDesignPlugin(this.config)
      );
    }
    return plugins;
  }

  /**
   * The dev tool configuration.
   *
   * @returns {string|boolean}
   */
  _getDevToolConfig() {
    return this.config.sourceMapEnabled ? 'source-map' : false;
  }

  /**
   * Development server configuration.
   *
   * @returns {{}}
   */
  _getDevServerConfig() {
    let zipRegEx = /\.zip$/i;

    return {
      port: this.config.devServerPort,
      contentBase: this.config.outputPath,
      publicPath: '/',
      compress: true,
      writeToDisk: filePath => zipRegEx.test(filePath),
      inline: false
    };
  }

  /**
   * The stats configuration.
   *
   * @returns {{}}
   */
  _getStatsConfig() {
    return {
      children: false,
      errorDetails: true,
    };
  }

  /**
   * The performance configuration.
   *
   * @returns {{}}
   */
  _getPerformanceConfig() {
    let excludedAssets = [
      File.DESIGN_JSON,
    ];
    let excludedExtensions = /\.(map|zip|html|hbs)$/;

    return {
      assetFilter: (assetFilename) => !excludedAssets.includes(assetFilename) && !excludedExtensions.test(assetFilename),
      hints: 'warning'
    };
  }

  /**
   * The minimizer configuration.
   *
   * @returns {[TerserPlugin]}
   */
  _getOptimizationMinimizerConfig() {
    return [
      new TerserPlugin({
        extractComments: false
      })
    ];
  }

  /**
   * The split chunks name configuration.
   *
   * @returns {function}
   */
  _getOptimizationSplitChunksNameConfig() {
    return (module, _, cacheGroupKey) => {
      return cacheGroupKey !== 'vendors' ? false : (module.rawRequest || false);
    };
  }

  /**
   * The chache groups configuration.
   *
   * @returns {{}}
   */
  _getOptimizationCacheGroupsConfig() {
    return {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: 10,
        reuseExistingChunk: true,
        filename: 'vendors/[name]-[chunkhash].js'
      },
      design: {
        test: module => {
          return module.layer === WebpackConfigBuilder.DESIGN_LAYER;
        },
        priority: 20,
        reuseExistingChunk: false,
        chunks: 'all',
        enforce: true,
        filename: File.DESIGN_JSON_CHUNK
      },
      styles: {
        name: 'styles',
        type: 'css/mini-extract',
        chunks: 'all',
        priority: 30,
        enforce: true,
      }
    };
  }

  /**
   * The output configuration.
   *
   * @returns {{}}
   */
  _getOutputConfig() {
    return {
      path: this.config.outputPath,
      publicPath: buildPublicPath(this.config, '/'),
      clean: true,
      library: {
        type: 'var',
        name: '[name]'
      }
    };
  }

  /**
   * Build the configuration for webpack from {@link BuildConfig} objects.
   *
   * @param  {...BuildConfig} configs
   */
  static fromConfigs(...configs) {
    let commonDevServerPort = undefined;
    let commonContentBase = undefined;

    let buildConfigs = configs
      .map(config => config.validate())
      .map(config => new WebpackConfigBuilder(config))
      .map(config => config.build());

    buildConfigs.forEach((config, index) => {
      if (index === 0) {
        commonDevServerPort = config.devServer.port;
        commonContentBase = config.devServer.contentBase;
      } else {
        commonContentBase = findStringSimilarities(commonContentBase, config.devServer.contentBase);
      }

      if (index > 0) {
        delete config.devServer;
      }
    });

    let devServerConfig = buildConfigs[0].devServer;
    devServerConfig.port = commonDevServerPort;
    devServerConfig.contentBase = commonContentBase;

    return buildConfigs;
  }
}
