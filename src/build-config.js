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
     * @type {{*}}
     */
    this._properties = {};
    /**
     * @type {number}
     */
    this._devServerPort = 9000;
  }

  /**
   * @returns {string}
   */
  get name() {
    return this._name;
  }

  /**
   * @returns {rootPath}
   */
  get rootPath() {
    return this._rootPath;
  }

  /**
   * The name of this template, e.g. landingpage. This will be the name of the resulting ZIP file in the dist folder.
   * 
   * @param {string} name 
   * @returns {BuildConfig}
   */
  withName(name) {
    this._name = name;
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
   * The data properties for your Twig templates. This object will be available as "properties" variable inside your Twig templates.
   * 
   * @param {{*}} properties 
   * @returns 
   */
  withModel(properties) {
    this._properties = properties;
    return this;
  }

  /**
   * A TCP port number to use for the development server. The default port is 9000. Be aware, that you don't have to configure a seperate port for each template.
   * 
   * @param {number} devServerPort 
   * @returns 
   */
  withDevServerPort(devServerPort) {
    this._devServerPort = devServerPort;
    return this;
  }

  /**
   * @returns {BuildConfig}
   */
  validate() {
    this._checkInstanceofAndRequired('name', String);
    this._checkInstanceofAndRequired('rootPath', String);
    this._checkInstanceofAndRequired('properties', Object);
    this._checkInstanceofAndRequired('devServerPort', Number);

    return this;
  }

  /**
   * @param {string} name 
   * @param {object} type 
   */
  _checkInstanceofAndRequired(name, type) {
    const property = this[`_${name}`];
    if (!property instanceof type) {
      throw new Error(`${name} must be ${type.constructor.name}`);
    }
    if (!property) {
      throw new Error(`${name} is required and can not be empty`);
    }
  }

  /**
   * @returns {BuildConfig}
   */
  static create() {
    return new BuildConfig();
  }
}
