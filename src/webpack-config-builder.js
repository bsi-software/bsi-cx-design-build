import fs from 'fs';
import path from 'path';

import ZipPlugin from 'zip-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

import BsiCxWebpackPlugin from './bsi-cx-webpack-plugin';
import BsiCxWebpackZipHashPlugin from './bsi-cx-webpack-zip-hash-plugin';
import Constant from './constant';
import { getZipArchiveName, StaticJavaScriptCondition } from './utility';
import BuildConfig from './build-config';


export default class WebpackConfigBuilder {
  /**
   * @param {BuildConfig} config 
   */
  constructor(config) {
    this._config = config;
  }

  /**
   * @returns {BuildConfig}
   */
  get config() {
    return this._config;
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
        ...this._getMiniCssExtractPluginConfig(),
        ...this._getCopyPluginConfig(),
        ...this._getBsiCxWebpackPluginConfig(),
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
      output: this._getOutputConfig()
    };
  }

  /**
   * The default output path: dist/{name}
   * 
   * @returns {string}
   */
  _getDefaultOutputPath() {
    return path.resolve(process.cwd(), 'dist', this.config.name);
  }

  /**
   * The output path to use.
   * 
   * @returns {string}
   */
  _getOutputPath() {
    return this.config.outputPath || this._getDefaultOutputPath();
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
        import: path.resolve(this.config.rootPath, 'design.js'),
        filename: 'design.json'
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
   * Get the entry configurations for the Java Script modules.
   * 
   * @returns {[{}]}
   */
  _getJavaScriptModuleEntries() {
    let entries = {};
    for (const [name, filePath] of Object.entries(this.config.modules)) {
      entries[name] = {
        import: path.resolve(filePath),
        filename: 'modules/[name]-[contenthash].js',
        runtime: Constant.BSI_CX_MODULE_RUNTIME_PATH
      };
    }
    return entries;
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
              environmentModulePath: require.resolve('./twing-environment.js'),
              renderContext: {
                properties: this.config.properties,
                designBaseUrl: Constant.BSI_CX_DESIGN_BASE_URL
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
    return path.resolve(__dirname, 'template-loader.js');
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
   * BSI CX Webpack plugin.
   * 
   * @returns {[BsiCxWebpackPlugin]}
   */
  _getBsiCxWebpackPluginConfig() {
    return [
      new BsiCxWebpackPlugin()
    ];
  }

  /**
   * Webpack ZIP plugin configuration.
   * 
   * @returns {[ZipPlugin|BsiCxWebpackZipHashPlugin]}
   */
  _getZipPluginConfig() {
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
    let outputPath = this._getOutputPath();
    let contentBase = outputPath === this._getDefaultOutputPath() ? path.resolve(outputPath, '..') : process.cwd();
    let zipRegEx = /\.zip$/i;

    return {
      port: this.config.devServerPort,
      contentBase: contentBase,
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
      'design.json',
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
      styles: {
        name: 'styles',
        type: 'css/mini-extract',
        chunks: 'all',
        priority: 20,
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
      path: this._getOutputPath(),
      publicPath: `${Constant.BSI_CX_DESIGN_BASE_URL}/`,
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
    let devServerPort = undefined;

    return configs
      .map(config => config.validate())
      .map(config => new WebpackConfigBuilder(config))
      .map(config => config.build())
      .map((config, index) => {
        if (index === 0) {
          devServerPort = config.devServer.port;
        } else if (config.devServer.port === devServerPort) {
          delete config.devServer;
        }
        return config;
      });
  }
}