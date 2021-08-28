import {ModuleLoader} from './module-loader';

export default class TwigContext {
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
  _propertiesProxy = undefined;
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
    this._propertiesProxy = this._getPropertiesProxy();

    this._reloadPropertiesIfRequired();
  }

  /**
   * @return {string|undefined}
   */
  get propertiesFilePath() {
    return this._propertiesFilePath;
  }

  /**
   * @return {ModuleLoader}
   */
  get propertiesModule() {
    return this._propertiesModule;
  }

  /**
   * Get the original properties object without the proxy.
   *
   * @return {{}}
   */
  get properties() {
    return this._properties;
  }

  /**
   * Get the properties object, guarded by a proxy.
   *
   * @return {{}}
   */
  get propertiesProxy() {
    return this._propertiesProxy;
  }

  /**
   * @return {boolean}
   */
  get propertiesReloadRequired() {
    return this._propertiesReloadRequired;
  }

  forcePropertiesReload() {
    this._propertiesReloadRequired = true;
  }

  /**
   * @return {boolean}
   */
  hasPropertiesFilePath() {
    return !!this._propertiesFilePath;
  }

  /**
   * @return {{}}
   * @private
   */
  _getPropertiesProxy() {
    let handler = this._getProxyHandler();

    return new Proxy(this._properties, handler);
  }

  /**
   * @return {{}}
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
   * @return {*}
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
