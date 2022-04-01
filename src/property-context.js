import {ModuleLoader} from './module-loader';

export default class PropertyContext {
  /**
   * @type {string|undefined}
   * @private
   */
  _propertiesFilePath = undefined;
  /**
   * @type {ModuleLoader}
   * @private
   */
  _propertiesModule = undefined;
  /**
   * @type {{}}
   * @private
   */
  _properties = {};
  /**
   * @type {{}}
   * @private
   */
  _proxy = undefined;
  /**
   * @type {boolean}
   * @private
   */
  _propertiesReloadRequired = true;

  /**
   * @param {string|undefined} propertiesFilePath
   */
  constructor(propertiesFilePath) {
    /**
     * @type {string|undefined}
     * @private
     */
    this._propertiesFilePath = propertiesFilePath;
    /**
     * @type {ModuleLoader}
     * @private
     */
    this._propertiesModule = new ModuleLoader(propertiesFilePath);
    /**
     * @type {{}}
     * @private
     */
    this._proxy = this._getPropertiesProxy();

    this._reloadPropertiesIfRequired();
  }

  /**
   * @returns {string|undefined}
   */
  get propertiesFilePath() {
    return this._propertiesFilePath;
  }

  /**
   * @returns {ModuleLoader}
   */
  get propertiesModule() {
    return this._propertiesModule;
  }

  /**
   * Get the original properties object without the proxy.
   *
   * @returns {{}}
   */
  get properties() {
    return this._properties;
  }

  /**
   * Get the properties object, guarded by a proxy.
   *
   * @returns {{}}
   */
  get proxy() {
    return this._proxy;
  }

  /**
   * @returns {boolean}
   */
  get propertiesReloadRequired() {
    return this._propertiesReloadRequired;
  }

  forcePropertiesReload() {
    this._propertiesReloadRequired = true;
  }

  /**
   * @returns {boolean}
   */
  hasPropertiesFilePath() {
    return !!this._propertiesFilePath;
  }

  /**
   * @returns {{}}
   * @private
   */
  _getPropertiesProxy() {
    let handler = this._getProxyHandler();

    return new Proxy(this._properties, handler);
  }

  /**
   * @returns {{}}
   * @private
   */
  _getProxyHandler() {
    return {
      get: this._get.bind(this),
      set: () => void (0),
      deleteProperty: () => void (0),
      defineProperty: () => void (0)
    };
  }

  /**
   * @param {{}} target
   * @param {string} property
   * @returns {*}
   * @private
   */
  _get(target, property) {
    this._reloadPropertiesIfRequired();
    return target[property];
  }

  /**
   * @private
   */
  _reloadPropertiesIfRequired() {
    if (!this._propertiesReloadRequired) {
      return;
    }

    if (this.hasPropertiesFilePath()) {
      let loadedProperties = this._propertiesModule.load();

      Object.assign(this._properties, loadedProperties);
    }

    this._propertiesReloadRequired = false;
  }
}
