import BuildConfigInterface from './build-config-interface';

/**
 * @implements {BuildConfigInterface}
 */
export default class ValidatedBuildConfig {
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
   * @type {number}
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
  _modules = undefined;
  /**
   * @type {string}
   * @private
   */
  _modulesRootPath = undefined;
  /**
   * @type {[{}]}
   * @private
   */
  _additionalFilesToCopy = undefined;
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
   * @type {Object[]}
   * @private
   */
  _webpackPlugins = undefined;
  /**
   * @type {{}[]}
   * @private
   */
  _webpackRules = undefined;

  /**
   * @return {string}
   */
  get name() {
    return this._name;
  }

  /**
   * @return {string}
   */
  get version() {
    return this._version;
  }

  /**
   * @return {Version}
   */
  get targetVersion() {
    return this._targetVersion;
  }

  /**
   * @return {DesignType}
   */
  get designType() {
    return this._designType;
  }

  /**
   * @return {string}
   */
  get rootPath() {
    return this._rootPath;
  }

  /**
   * @return {string}
   */
  get outputPath() {
    return this._outputPath;
  }

  /**
   * @return {string|undefined}
   */
  get propertiesFilePath() {
    return this._propertiesFilePath;
  }

  /**
   * @return {number}
   */
  get devServerPort() {
    return this._devServerPort;
  }

  /**
   * @return {boolean}
   */
  get hashZipFiles() {
    return this._hashZipFiles;
  }

  /**
   * @return {ModuleConfig[]}
   */
  get modules() {
    return this._modules;
  }

  /**
   * @return {string}
   */
  get modulesRootPath() {
    return this._modulesRootPath;
  }

  /**
   * @return {[{}]}
   */
  get additionalFilesToCopy() {
    return this._additionalFilesToCopy;
  }

  /**
   * @return {boolean}
   */
  get sourceMapEnabled() {
    return this._sourceMapEnabled;
  }

  /**
   * @return {string}
   */
  get staticFileFolderPath() {
    return this._staticFileFolderPath;
  }

  /**
   * @return {string}
   */
  get copyAssetsFolderPath() {
    return this._copyAssetsFolderPath;
  }

  /**
   * @return {Object[]}
   */
  get webpackPlugins() {
    return this._webpackPlugins;
  }

  /**
   * @return {{}[]}
   */
  get webpackRules() {
    return this._webpackRules;
  }
}
