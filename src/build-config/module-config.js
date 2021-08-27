import BuildConfig from './build-config';
import ObjectCloner from '../object-cloner';

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
   * @return {string|undefined}
   */
  get name() {
    return this._name;
  }

  /**
   * @return {string|undefined}
   */
  get path() {
    return this._path;
  }

  /**
   * @param {string} name
   * @return {ModuleConfig}
   */
  withName(name) {
    this._name = name;
    return this;
  }

  /**
   * Path to the entry module file. The path can either be an absolute one or relative to the path specified with {@link BuildConfig#withRootPath}.
   *
   * @param {string} path
   * @return {ModuleConfig}
   */
  withPath(path) {
    this._path = path;
    return this;
  }

  /**
   * @return {{}}
   */
  build() {
    let config = {};
    config[this.name] = this.path;
    return config;
  }

  /**
   * @param {boolean|undefined} [shallow=true]
   * @return {ModuleConfig}
   */
  clone(shallow) {
    return ObjectCloner.clone(this, new ModuleConfig(), shallow);
  }
}
