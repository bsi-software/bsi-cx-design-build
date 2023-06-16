import ObjectCloner from '../object-cloner';
import BuildConfigValidator from './build-config-validator';

/** @typedef {import('webpack').PathData} PathData */
/** @typedef {import('webpack').AssetInfo} AssetInfo */
/** @typedef {import('../version').Version} Version */
/** @typedef {import('../version').CX_22_0} CX_22_0 */
/** @typedef {import('../design-type').DesignType} DesignType */
/** @typedef {import('../design-type').LANDINGPAGE} LANDINGPAGE */
/** @typedef {import('./module-config').default} ModuleConfig */
/** @typedef {import('./default-build-config').default} DefaultBuildConfig */
/** @typedef {import('./build-config-interface').default} BuildConfigInterface */
/** @typedef {import('./validated-build-config').default} ValidatedBuildConfig */

/**
 * The configuration object for the build of one template.
 *
 * @implements {BuildConfigInterface}
 */
export default class BuildConfig {
  /**
   * @type {string}
   * @private
   */
  _name = undefined;
  /**
   * @type {string}
   * @private
   */
  _version = undefined;
  /**
   * @type {Version}
   * @private
   */
  _targetVersion = undefined;
  /**
   * @type {DesignType}
   * @private
   */
  _designType = undefined;
  /**
   * @type {string}
   * @private
   */
  _rootPath = undefined;
  /**
   * @type {string}
   * @private
   */
  _outputPath = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _propertiesFilePath = undefined;
  /**
   * @type {number|'auto'}
   * @private
   */
  _devServerPort = undefined;
  /**
   * @type {boolean}
   * @private
   */
  _hashZipFiles = undefined;
  /**
   * @type {ModuleConfig[]}
   * @private
   */
  _modules = [];
  /**
   * @type {string}
   * @private
   */
  _modulesRootPath = undefined;
  /**
   * @type {{}[]}
   * @private
   */
  _additionalFilesToCopy = [];
  /**
   * @type {boolean}
   * @private
   */
  _sourceMapEnabled = undefined;
  /**
   * @type {string}
   * @private
   */
  _staticFileFolderPath = undefined;
  /**
   * @type {string}
   * @private
   */
  _copyAssetsFolderPath = undefined;
  /**
   * @type {string | ((pathData: PathData, assetInfo?: AssetInfo) => string)}
   * @private
   */
  _assetResourceRuleFilename = undefined;
  /**
   * @returns {string[]}
   */
  _additionalStaticAssetFileExtensions = undefined;
  /**
   * @type {{}[]}
   * @private
   */
  _webpackRules = [];
  /**
   * @type {Object[]}
   * @private
   */
  _webpackPlugins = [];
  /**
   * @type {boolean}
   * @private
   */
  _postcssEnabled = undefined;

  /**
   * @returns {string}
   */
  get name() {
    return this._name;
  }

  /**
   * @returns {string}
   */
  get version() {
    return this._version;
  }

  /**
   * @returns {Version}
   */
  get targetVersion() {
    return this._targetVersion;
  }

  /**
   * @returns {DesignType}
   */
  get designType() {
    return this._designType;
  }

  /**
   * @returns {string}
   */
  get rootPath() {
    return this._rootPath;
  }

  /**
   * @returns {string}
   */
  get outputPath() {
    return this._outputPath;
  }

  /**
   * @returns {string|undefined}
   */
  get propertiesFilePath() {
    return this._propertiesFilePath;
  }

  /**
   * @returns {number|'auto'}
   */
  get devServerPort() {
    return this._devServerPort;
  }

  /**
   * @returns {boolean}
   */
  get hashZipFiles() {
    return this._hashZipFiles;
  }

  /**
   * @returns {ModuleConfig[]}
   */
  get modules() {
    return this._modules;
  }

  /**
   * @returns {string}
   */
  get modulesRootPath() {
    return this._modulesRootPath;
  }

  /**
   * @returns {{}[]}
   */
  get additionalFilesToCopy() {
    return this._additionalFilesToCopy;
  }

  /**
   * @returns {boolean}
   */
  get sourceMapEnabled() {
    return this._sourceMapEnabled;
  }

  /**
   * @returns {string}
   */
  get staticFileFolderPath() {
    return this._staticFileFolderPath;
  }

  /**
   * @returns {string}
   */
  get copyAssetsFolderPath() {
    return this._copyAssetsFolderPath;
  }

  /**
   * @returns {string | ((pathData: PathData, assetInfo?: AssetInfo) => string)}
   */
  get assetResourceRuleFilename() {
    return this._assetResourceRuleFilename;
  }

  /**
   * @returns {string[]}
   */
  get additionalStaticAssetFileExtensions() {
    return this._additionalStaticAssetFileExtensions;
  }

  /**
   * @returns {{}[]}
   */
  get webpackRules() {
    return this._webpackRules;
  }

  /**
   * @returns {Object[]}
   */
  get webpackPlugins() {
    return this._webpackPlugins;
  }

  /**
   * @returns {boolean}
   */
  get postcssEnabled() {
    return this._postcssEnabled;
  }

  /**
   * The name of this template, e.g. landingpage. This will be included in the name of the resulting ZIP file in the dist folder.
   * Be aware, that you should use a normalized name without any umlauts, special chars, spaces or slashes.
   *
   * @param {string} name - The name of your template.
   * @returns {BuildConfig}
   */
  withName(name) {
    this._name = name;
    return this;
  }

  /**
   * The version of this template, e.g. 1.0.1. This will be included in the name of the resulting ZIP file in the dist folder.
   *
   * @see {@link https://semver.org/spec/v2.0.0.html}
   * @param {string} version - The version for this template. It is recommended to use a semantic version string.
   * @returns {BuildConfig}
   */
  withVersion(version) {
    this._version = version;
    return this;
  }

  /**
   * The application version of BSI CX (or BSI Studio) this design is built for.
   *
   * @see {@link Version} for available versions
   * @param {Version} version - The BSI CX version. Default will be {@link CX_22_0}
   * @returns {BuildConfig}
   */
  withTargetVersion(version) {
    this._targetVersion = version;
    return this;
  }

  /**
   * The type of this design (e.g. email or landingpage).
   *
   * @see {@link DesignType} for available types
   * @param {DesignType} type - The design type to use. Default will be {@link LANDINGPAGE}
   * @returns {BuildConfig}
   */
  withDesignType(type) {
    this._designType = type;
    return this;
  }

  /**
   * The path to the root folder of this template. This folder contains the source code of your template.
   * An absolute path is recommended. If the path is relative, it will be resolved in relation to the current working directory.
   *
   * @param {string} rootPath - The path to your template root. An absolute path is recommended.
   * @returns {BuildConfig}
   */
  withRootPath(rootPath) {
    this._rootPath = rootPath;
    return this;
  }

  /**
   * A custom output folder path to use. Default: dist/{name}. An absolute path is recommended.
   * If the path is relative, it will be resolved in relation to the current working directory.
   * The folder does not have to exist, the build will create it for you. But it is recommended
   * to ignore the folder and its content in your VCS.
   *
   * @see {@link https://git-scm.com/docs/gitignore}
   * @param {string} outputPath - The path to your output folder. An absolute path is recommended.
   * @returns {BuildConfig}
   */
  withOutputPath(outputPath) {
    this._outputPath = outputPath;
    return this;
  }

  /**
   * The data properties file for your Twig templates. This file will be required and the contents of this file will be
   * available as "properties" variable inside your Twig templates and trough the <code>bsiProperty</code> functions inside
   * your LESS and SASS files. You can use a relative path. Relative paths will be resolved in relation to your {@link withRootPath|template root}.
   *
   * @param {string} propertiesFilePath - The path to your properties file.
   * @returns {BuildConfig}
   */
  withPropertiesFilePath(propertiesFilePath) {
    this._propertiesFilePath = propertiesFilePath;
    return this;
  }

  /**
   * A TCP port number to use for the development server. The default port is 8081. Be aware,
   * that you don't have to configure a separate port for each template of your build.
   * Only the first configuration will be considered.
   *
   * @param {number|'auto'} devServerPort - The development server port number.
   * @returns {BuildConfig}
   */
  withDevServerPort(devServerPort) {
    this._devServerPort = devServerPort;
    return this;
  }

  /**
   * Add a unique hash value to the name of the resulting ZIP file, e.g. landingpage-1.0.0-alpha-089a9.zip.
   *
   * @param {boolean} hashZipFiles - Enable or disable this feature. Default is <code>true</code>.
   * @returns {BuildConfig}
   */
  withHashZipFiles(hashZipFiles) {
    this._hashZipFiles = !!hashZipFiles;
    return this;
  }

  /**
   * Add additional JavaScript modules. Each additional JavaScript module configuration will result in a separate
   * entry configuration. Be aware, that your modules must be placed inside the modules root path.
   * Use {@link withModulesRootPath} to set a custom modules root path.
   *
   * @param {...ModuleConfig} modules - Pass objects of the {@link BuildConfig} class.
   * @returns {BuildConfig}
   */
  withModules(...modules) {
    this._modules = modules;
    return this;
  }

  /**
   * Absolute or relative path to the modules root folder. Per default this will be the "modules" folder inside your template root.
   * Relative paths will be resolved in relation to your {@link withRootPath|template root} configuration.
   *
   * @param {string} modulesRootPath - The path to your modules root folder.
   * @returns {BuildConfig}
   */
  withModulesRootPath(modulesRootPath) {
    this._modulesRootPath = modulesRootPath;
    return this;
  }

  /**
   * Add additional files to copy to the output folder. The configuration here will be passed down to the
   * {@link https://github.com/webpack-contrib/copy-webpack-plugin|CopyWebpackPlugin}. Be aware, that you always
   * can put files inside the "assets" folder inside your template root without any configuration here.
   * You can change the path to the assets folder with the {@link withCopyAssetsFolderPath} method.
   *
   * @see {@link https://github.com/webpack-contrib/copy-webpack-plugin#patterns}
   * @param {...{}} additionalFilesToCopy - Pattern configuration object.
   * @returns {BuildConfig}
   */
  withAdditionalFilesToCopy(...additionalFilesToCopy) {
    this._additionalFilesToCopy = additionalFilesToCopy;
    return this;
  }

  /**
   * Enable or disable source map generation. If enabled, source maps will be emitted for JavaScript, LESS and SASS
   * files. Enabling this feature will also emit an additional "dev" ZIP file. The generated .map files will only be
   * contained in this ZIP file. So upload the dev ZIP file if you want to debug a design in BSI CX. The dev ZIP file
   * should not be used in production environments. Enabling source maps will also have a slight performance impact.
   *
   * @param {boolean} sourceMapEnabled - Enable or disable the feature. Enabled by default.
   * @returns {BuildConfig}
   */
  withSourceMapEnabled(sourceMapEnabled) {
    this._sourceMapEnabled = sourceMapEnabled;
    return this;
  }

  /**
   * Set the folder for static assets (e.g. images or simple JavaScript files).
   * Can either be an absolute or relative path. Relative paths will be normalized in relation to the template root folder.
   * Use {@link withRootPath} to set the template root folder.
   *
   * @param {string} staticFileFolderPath - The path to the static assets folder.
   * @returns {BuildConfig}
   */
  withStaticFileFolderPath(staticFileFolderPath) {
    this._staticFileFolderPath = staticFileFolderPath;
    return this;
  }

  /**
   * Set the root folder to copy additional assets from. Use {@link withAdditionalFilesToCopy} to configure additional
   * assets for your bundle. This can either be an absolute or relative path.
   * Relative paths will be normalized in relation to the template root folder.
   * Use {@link withRootPath} to set the template root folder.
   *
   * @param {string} copyAssetsFolderPath - The path to the copy assets folder.
   * @returns {BuildConfig}
   */
  withCopyAssetsFolderPath(copyAssetsFolderPath) {
    this._copyAssetsFolderPath = copyAssetsFolderPath;
    return this;
  }

  /**
   * Set a custom filename for asset modules. Default value is: <code>static/[name]-[contenthash][ext]</code>
   *
   * @see {@link https://webpack.js.org/configuration/module/#rulegeneratorfilename}
   * @param {string | ((pathData: PathData, assetInfo?: AssetInfo) => string)} assetResourceRuleFilename
   * @returns {BuildConfig}
   */
  withAssetResourceRuleFilename(assetResourceRuleFilename) {
    this._assetResourceRuleFilename = assetResourceRuleFilename;
    return this;
  }

  /**
   * Additional file extensions for static assets. The following file extensions are defined by default: avif, png,
   * apng, jpg, jpeg, jfif, pjpeg, pjp, webp, gif, bmp, tiff, tif, raw, svg, eot, ttf, woff, woff2, pdf, ico,
   * cur, mkv, 3gp, mp3, mp4, m4v, m4p, ogv, webm, aac, flac, mpg, mpeg, oga, ogg, wav, json5
   *
   * The extensions you define here will be added to the list.
   *
   * @param {...string} extensions
   * @returns {BuildConfig}
   */
  withAdditionalStaticAssetFileExtensions(...extensions) {
    this._additionalStaticAssetFileExtensions = extensions;
    return this;
  }

  /**
   * Configure additional rules for the Webpack configuration. Be aware, that this can clash with the existing rules.
   *
   * @see {@link https://webpack.js.org/configuration/module/#rule}
   * @param {...{}} rules - Webpack rules objects.
   * @returns {BuildConfig}
   */
  withWebpackRules(...rules) {
    this._webpackRules = rules;
    return this;
  }

  /**
   * Configure additional plugins for the Webpack configuration. Be aware, that this can clash with the existing plugins.
   *
   * @see {@link https://webpack.js.org/configuration/plugins/}
   * @param {...Object} plugins - Instances of Webpack plugins.
   * @returns {BuildConfig}
   */
  withWebpackPlugins(...plugins) {
    this._webpackPlugins = plugins;
    return this;
  }

  /**
   * Enable or disable PostCSS for the Webpack configuration.
   *
   * @param {boolean} postcssEnabled - Enable or disable PostCSS.
   * @returns {BuildConfig}
   */
  withPostcssEnabled(postcssEnabled) {
    this._postcssEnabled = postcssEnabled;
    return this;
  }

  /**
   * Create a clone of this copy. Can be useful if different templates should be created from the same sources.
   * A shallow clone will be created by default. This means nested objects will still reference the same origin.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {BuildConfig}
   */
  clone(shallow) {
    return ObjectCloner.clone(this, new BuildConfig(), shallow);
  }

  /**
   * Validate the build configuration. <strong>There is no need to call this method.</strong>
   * The {@link WebpackConfigBuilder.fromConfigs|WebpackConfigBuilder} will do this for you.
   *
   * @returns {ValidatedBuildConfig} - The validated build config with {@link DefaultBuildConfig|defaults} applied where necessary.
   */
  validate() {
    return BuildConfigValidator.validate(this);
  }
}
