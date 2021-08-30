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
   * @returns {number}
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
   * @returns {[{}]}
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
}
