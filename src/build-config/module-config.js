import ObjectCloner from '../object-cloner';

/** @typedef {import('./build-config').default} BuildConfig */

/**
 * This is the builder class for JavaScript module configurations.
 * Pass objects of this class to {@link BuildConfig#withModules}.
 *
 * @example
 * .withModules(
 *   new ModuleConfig()
 *     .withName('main')
 *     .withPath('main.js'),
 *   new ModuleConfig()
 *     .withName('app')
 *     .withPath(path.resolve(__dirname,'lib','app.js')))
 */
export default class ModuleConfig {
  /**
   * @type {string|undefined}
   * @private
   */
  _name = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _path = undefined;

  /**
   * @param {string|undefined} [name=undefined]
   * @param {string|undefined} [path=undefined]
   */
  constructor(name, path) {
    /**
     * @type {string|undefined}
     * @private
     */
    this._name = name;
    /**
     * @type {string|undefined}
     * @private
     */
    this._path = path;
  }

  /**
   * @returns {string|undefined}
   */
  get name() {
    return this._name;
  }

  /**
   * @returns {string|undefined}
   */
  get path() {
    return this._path;
  }

  /**
   * The name for your JavaScript module. The name specified here must be unique in your build configuration.
   * This means you can't configure two modules with the same name. This will be the name of the resulting entry
   * in the Webpack configuration.
   *
   * @param {string} name - The module name.
   * @returns {ModuleConfig}
   */
  withName(name) {
    this._name = name;
    return this;
  }

  /**
   * Path to the entry module file. The path can either be an absolute one or relative to the path specified with {@link BuildConfig#withRootPath}.
   *
   * @param {string} path - The path to the module.
   * @returns {ModuleConfig}
   */
  withPath(path) {
    this._path = path;
    return this;
  }

  /**
   * @returns {{}}
   */
  build() {
    let config = {};
    config[this.name] = this.path;
    return config;
  }

  /**
   * @param {boolean|undefined} [shallow=true]
   * @returns {ModuleConfig}
   */
  clone(shallow) {
    return ObjectCloner.clone(this, new ModuleConfig(), shallow);
  }
}
