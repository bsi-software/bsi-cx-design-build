/**
 * The configuration object for the build of one template.
 */
export default class BuildConfig {
  constructor() {
    /**
     * @type {string}
     */
    this._name = undefined;
    /**
     * @type {string}
     */
    this._version = '1.0.0';
    /**
     * @type {string}
     */
    this._rootPath = undefined;
    /**
     * @type {string}
     */
    this._outputPath = undefined;
    /**
     * @type {{}}
     */
    this._properties = {};
    /**
     * @type {number}
     */
    this._devServerPort = 9000;
    /**
     * @type {boolean}
     */
    this._hashZipFiles = true;
    /**
     * @type {{}}
     */
    this._modules = {};
    /**
     * @type {[{}]}
     */
    this._additionalFilesToCopy = [];
    /**
     * @type {boolean}
     */
    this._sourceMapEnabled = true;
  }

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
   * @returns {string}
   */
  get rootPath() {
    return this._rootPath;
  }

  /**
   * @returns {string|undefined}
   */
  get outputPath() {
    return this._outputPath;
  }

  /**
   * @returns {{}}
   */
  get properties() {
    return this._properties;
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
   * @returns {{}}
   */
  get modules() {
    return this._modules;
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
   * The name of this template, e.g. landingpage. This will be included in the name of the resulting ZIP file in the dist folder.
   * 
   * @param {string} name 
   * @returns {BuildConfig}
   */
  withName(name) {
    this._name = name;
    return this;
  }

  /**
   * The version of this template, e.g. 1.0.1. This will be included in the name of the resulting ZIP file in the dist folder.
   * 
   * @param {string} version 
   * @returns {BuildConfig}
   */
  withVersion(version) {
    this._version = version;
    return this;
  }

  /**
   * The path to the root folder of this template. This folder contains the source code of your template.
   * 
   * @param {string} rootPath 
   * @returns {BuildConfig}
   */
  withRootPath(rootPath) {
    this._rootPath = rootPath;
    return this;
  }

  /**
   * A custom output path to use. Default: dist/{name}.
   * 
   * @param {string} outputPath 
   * @returns {BuildConfig}
   */
  withOutputPath(outputPath) {
    this._outputPath = outputPath;
    return this;
  }

  /**
   * The data properties for your Twig templates. This object will be available as "properties" variable inside your Twig templates.
   * 
   * @param {{}} properties 
   * @returns {BuildConfig}
   */
  withProperties(properties) {
    this._properties = properties;
    return this;
  }

  /**
   * A TCP port number to use for the development server. The default port is 9000. Be aware, that you don't have to configure a seperate port for each template.
   * 
   * @param {number} devServerPort 
   * @returns {BuildConfig}
   */
  withDevServerPort(devServerPort) {
    this._devServerPort = devServerPort;
    return this;
  }

  /**
   * Add a unique hash value to the name of the resulting ZIP file.
   * 
   * @param {boolean} hashZipFiles 
   * @returns {BuildConfig}
   */
  withHashZipFiles(hashZipFiles) {
    this._hashZipFiles = !!hashZipFiles;
    return this;
  }

  /**
   * Add additional Java Script modules.
   * 
   * @param {{}} modules 
   * @returns {BuildConfig}
   */
  withModules(modules) {
    this._modules = modules;
    return this;
  }

  /**
   * Add one additional Java Script module.
   * 
   * @param {string} name 
   * @param {string} path 
   * @returns {BuildConfig}
   */
  withModule(name, path) {
    this._modules[name] = path;
    return this;
  }

  /**
   * Add additional files to copy to the output folder.
   * 
   * @param {[{}]} additionalFilesToCopy 
   * @returns {BuildConfig}
   */
  withAdditionalFilesToCopy(additionalFilesToCopy) {
    this._additionalFilesToCopy = additionalFilesToCopy;
    return this;
  }

  /**
   * Add a single configuration for additional files to copy to the output folder.
   * 
   * @param {{}} additionalFileToCopy 
   * @returns {BuildConfig}
   */
  withAdditionalFileToCopy(additionalFileToCopy) {
    this._additionalFilesToCopy.push(additionalFileToCopy);
    return this;
  }

  /**
   * Enable or disable source maps.
   * 
   * @param {boolean} sourceMapEnabled 
   * @returns {BuildConfig}
   */
  withSourceMapEnabled(sourceMapEnabled) {
    this._sourceMapEnabled = sourceMapEnabled;
    return this;
  }

  /**
   * @returns {BuildConfig}
   */
  validate() {
    this._checkInstanceofAndRequired('name', String, true);
    this._checkInstanceofAndRequired('version', String, true);
    this._checkInstanceofAndRequired('rootPath', String, true);
    this._checkInstanceofAndRequired('outputPath', String, false);
    this._checkInstanceofAndRequired('properties', Object, false);
    this._checkInstanceofAndRequired('devServerPort', Number, false);
    this._checkInstanceofAndRequired('hashZipFiles', Boolean, false);
    this._checkInstanceofAndRequired('modules', Object, false);
    this._checkInstanceofAndRequired('additionalFilesToCopy', Array, false);
    this._checkInstanceofAndRequired('sourceMapEnabled', Boolean, false);

    return this;
  }

  /**
   * @param {string} name 
   * @param {object} type 
   * @param {boolean} required 
   */
  _checkInstanceofAndRequired(name, type, required) {
    const property = this[`_${name}`];
    if (property !== undefined && !property instanceof type) {
      throw new Error(`${name} must be ${type.constructor.name}`);
    }
    if (required && !property) {
      throw new Error(`${name} is required and can not be empty`);
    }
  }
}