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
import {buildPublicPath, findArraySimilarities, getZipArchiveName, toPosixPath} from './utility';
import BsiCxTwigContextWebpackPlugin from './bsi-cx-twig-context-webpack-plugin';
import BsiLessPropertyPlugin from './bsi-less-property-plugin';
import BuildContext from './build-context';
import BsiSassPropertyPlugin from './bsi-sass-property-plugin';
import QueryConstant from './query-constant';
import DistFolder from './dist-folder';
import * as Version from './version';
import * as DesignType from './design-type';

export default class WebpackConfigBuilder {
  /**
   * @type {string}
   */
  static DESIGN_LAYER = 'design';
  /**
   * @type {RegExp}
   */
  static STATIC_JS_FILE_EXTENSION = /\.js/i;
  /**
   * @type {BuildContext}
   * @private
   */
  _context = undefined;

  /**
   * @param {ValidatedBuildConfig} config
   */
  constructor(config) {
    /**
     * @type {BuildContext}
     * @private
     */
    this._context = new BuildContext(config,);
  }

  /**
   * @returns {BuildContext}
   */
  get context() {
    return this._context;
  }

  /**
   * @returns {ValidatedBuildConfig}
   */
  get config() {
    return this.context.config;
  }

  /**
   * @returns {PropertyContext}
   */
  get properties() {
    return this.context.properties;
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
          ...this._getNodeModuleAssetsRule(),
          ...this._getStaticJavaScriptFileRuleConfig(),
          ...this._getRegularJavaScriptFileRuleConfig(),
          ...this._getAdditionalRules()
        ]
      },
      plugins: [
        ...this._getBsiCxTwigContextWebpackPlugin(),
        ...this._getMiniCssExtractPluginConfig(),
        ...this._getCopyPluginConfig(),
        ...this._getBsiCxWebpackPluginConfig(),
        ...this._getBsiCxWebpackLegacyDesignPluginConfig(),
        ...this._getZipPluginConfig(),
        ...this._getAdditionalPlugins()
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
   * @returns {string}
   * @private
   */
  _getDesignJsFilePath() {
    return path.resolve(this.config.rootPath, File.DESIGN_JS);
  }

  /**
   * Get the entry configurations for the JavaScript modules.
   *
   * @returns {{}}
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
   * @returns {{filename: string, import: string, runtime: string}}
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
      filename: `${DistFolder.MODULES}/[name]-[contenthash].js`,
      runtime: Constant.BSI_CX_MODULE_RUNTIME_PATH
    };
  }

  /**
   * Rules for Twig file handling.
   *
   * @returns {{}[]}
   */
  _getTwigRuleConfig() {
    const versions = {};
    const designs = {};

    for (const [name, version] of Object.entries(Version)) {
      versions[name] = name === 'TARGET' ? this.config.targetVersion : version;
    }

    for (const [name, type] of Object.entries(DesignType)) {
      designs[name] = name === 'TARGET' ? this.config.designType : type;
    }

    return [
      {
        test: /\.twig$/i,
        use: [
          this._getTemplateLoader(),
          'ref-loader',
          {
            loader: this._getTwingLoader(),
            options: {
              templateRoot: this.config.rootPath,
              renderContext: {
                properties: this.properties.proxy,
                designBaseUrl: buildPublicPath(this.config),
                cx: {
                  version: versions,
                  design: designs
                }
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
   * @returns {{}[]}
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
   * @returns {{}[]}
   */
  _getStyleRulesConfig() {
    return [
      {
        test: /\.less$/i,
        use: [
          ...this._getCssLoaderChain(),
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              lessOptions: {
                plugins: [
                  new BsiLessPropertyPlugin(this.context),
                ],
              }
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          ...this._getCssLoaderChain(),
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                functions: {
                  ...new BsiSassPropertyPlugin(this.context).getFunction()
                }
              }
            }
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
   * Rule for node module assets.
   *
   * @returns {{}[]}
   * @private
   */
  _getNodeModuleAssetsRule() {
    let assetQueryRegex = new RegExp(QueryConstant.ASSET);

    return [
      {
        test: /[\\/]node_modules[\\/]/,
        resourceQuery: assetQueryRegex,
        type: 'asset/resource',
        generator: {
          filename: `${DistFolder.VENDORS}/[contenthash][ext]`
        }
      }
    ];
  }

  /**
   * Get all file extensions that should be handled as static assets (e.g. images and fonts).
   *
   * @returns {string[]}
   */
  _getStaticAssetFileExtensions() {
    return [
      'avif',
      'png',
      'apng',
      'jpg',
      'jpeg',
      'jfif',
      'pjpeg',
      'pjp',
      'webp',
      'gif',
      'bmp',
      'tiff',
      'tif',
      'raw',
      'svg',
      'eot',
      'ttf',
      'woff',
      'woff2',
      'pdf',
      'ico',
      'cur',
      'mkv',
      '3gp',
      'mp3',
      'mp4',
      'm4v',
      'm4p',
      'ogv',
      'webm',
      'aac',
      'flac',
      'mpg',
      'mpeg',
      'oga',
      'ogg',
      'wav',
      'json5'
    ];
  }

  /**
   * Rule for static assets handling.
   *
   * @returns {{}[]}
   */
  _getStaticAssetsRuleConfig() {
    let fileExtensions = this._getStaticAssetFileExtensions().join('|');
    let testRegex = new RegExp(`\.(${fileExtensions})$`, 'i');
    let inlineQueryRegex = new RegExp(QueryConstant.INLINE);

    return [
      {
        test: testRegex,
        oneOf: [
          {
            resourceQuery: inlineQueryRegex,
            type: 'asset/inline'
          },
          {
            resourceQuery: {
              not: [
                inlineQueryRegex
              ]
            },
            type: 'asset/resource',
            generator: {
              filename: `${DistFolder.STATIC}/[name]-[contenthash][ext]`
            }
          },
        ]
      }
    ];
  }

  /**
   * Rule for static JavaScript file handling.
   *
   * @returns {{}[]}
   */
  _getStaticJavaScriptFileRuleConfig() {
    return [
      {
        resource: (file) => this._isStaticJavaScriptFile(file),
        type: 'asset/resource',
        generator: {
          filename: `${DistFolder.STATIC}/[name]-[contenthash][ext]`
        }
      }
    ];
  }

  /**
   * @param {string} fileToCheck
   * @returns {boolean}
   */
  _isStaticJavaScriptFile(fileToCheck) {
    let staticFilePath = path.resolve(this.config.staticFileFolderPath) + path.sep;
    let isInsideStaticFolder = fileToCheck.startsWith(staticFilePath);

    return isInsideStaticFolder && WebpackConfigBuilder.STATIC_JS_FILE_EXTENSION.test(fileToCheck);
  }

  /**
   * Rule for regular JavaScript file handling.
   *
   * @returns {{}[]}
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
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime'],
            cacheDirectory: true
          }
        }
      }
    ];
  }

  /**
   * @returns {{}[]}
   * @private
   */
  _getAdditionalRules() {
    return this.config.webpackRules;
  }

  /**
   * @returns {string}
   * @private
   */
  _getTemplateLoader() {
    return `${packageJson.name}/dist/template-loader`;
  }

  /**
   * @returns {string}
   * @private
   */
  _getTwingLoader() {
    return `${packageJson.name}/dist/twing-loader`;
  }

  /**
   * @returns {{}[]}
   * @private
   */
  _getCssLoaderChain() {
    let chain = [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '../'
        }
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        }
      }
    ];

    if (this.config.postcssEnabled) {
      chain.push({
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          postcssOptions: {
            plugins: [
              'postcss-preset-env',
              'cssnano'
            ]
          }
        }
      });
    }

    return chain;
  }

  /**
   * Mini CSS extract plugin configuration.
   *
   * @returns {MiniCssExtractPlugin[]}
   */
  _getMiniCssExtractPluginConfig() {
    return [
      new MiniCssExtractPlugin({
        filename: `${DistFolder.STATIC}/styles-[contenthash].css`,
      })
    ];
  }

  /**
   * Copy plugin configuration.
   *
   * @returns {CopyPlugin[]}
   */
  _getCopyPluginConfig() {
    let copyAssetsFolderPath = toPosixPath(this.config.copyAssetsFolderPath);

    return [
      new CopyPlugin({
        patterns: [
          {
            from: `${copyAssetsFolderPath}/**/*`,
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
   * @returns {BsiCxTwigContextWebpackPlugin[]}
   * @private
   */
  _getBsiCxTwigContextWebpackPlugin() {
    return [
      new BsiCxTwigContextWebpackPlugin(this.properties)
    ]
  }

  /**
   * @returns {BsiCxWebpackPlugin[]}
   * @private
   */
  _getBsiCxWebpackPluginConfig() {
    return [
      new BsiCxWebpackPlugin(this.context)
    ];
  }

  /**
   * Webpack ZIP plugin configuration.
   *
   * @returns {[]}
   */
  _getZipPluginConfig() {
    /**
     * @type {[]}
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
   * @returns {Object[]}
   * @private
   */
  _getAdditionalPlugins() {
    return this.config.webpackPlugins;
  }

  /**
   * BSI CX legacy design format plugin config.
   *
   * @returns {BsiCxWebpackLegacyDesignPlugin[]}
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
    return {
      port: this.config.devServerPort,
      magicHtml: false,
      hot: false,
      liveReload: false,
      static: {
        directory: this.config.outputPath,
      },
      client: false,
      devMiddleware: {
        writeToDisk: true,
      }
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
      hints: false
    };
  }

  /**
   * The minimizer configuration.
   *
   * @returns {TerserPlugin[]}
   */
  _getOptimizationMinimizerConfig() {
    return [
      new TerserPlugin({
        extractComments: false
      })
    ];
  }

  /**
   * The chache groups configuration.
   *
   * @returns {{}}
   */
  _getOptimizationCacheGroupsConfig() {
    return {
      default: {
        priority: 0,
        minChunks: 2,
        reuseExistingChunk: true,
        filename: `${DistFolder.SHARED}/[chunkhash].js`
      },
      defaultVendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: 10,
        reuseExistingChunk: true,
        filename: `${DistFolder.VENDORS}/[chunkhash].js`
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
        commonContentBase = toPosixPath(config.devServer.static.directory).split(path.posix.sep);
      } else {
        let currentStaticDirectory = toPosixPath(config.devServer.static.directory).split(path.posix.sep);
        commonContentBase = findArraySimilarities(commonContentBase, currentStaticDirectory);
      }

      if (index > 0) {
        delete config.devServer;
      }
    });

    let devServerConfig = buildConfigs[0].devServer;
    devServerConfig.port = commonDevServerPort;
    devServerConfig.static.directory = path.join(...commonContentBase);

    return buildConfigs;
  }
}
