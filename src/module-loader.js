import fs from 'fs';
import path from 'path';
import Module from 'module';

const parentModule = module;

export class ModuleLoader {
  /**
   * @type {string}
   * @private
   */
  _modulePath = undefined;
  /**
   * @type {string}
   * @private
   */
  _code = undefined;

  /**
   * @param {string} modulePath
   */
  constructor(modulePath) {
    /**
     * @type {string}
     * @private
     */
    this._modulePath = modulePath;
    /**
     * @type {string}
     * @private
     */
    this._context = path.dirname(modulePath);
    /**
     * @type {string}
     * @private
     */
    this._code = fs.readFileSync(modulePath).toString();
  }

  /**
   * @return {string}
   */
  get modulePath() {
    return this._modulePath;
  }

  /**
   * @return {string}
   */
  get context() {
    return this._context;
  }

  /**
   * @return {string}
   */
  get code() {
    return this._code;
  }

  /**
   *
   * @return {Module}
   */
  load() {
    let module = new Module(this.modulePath, parentModule);

    module.paths = Module._nodeModulePaths(this.context);
    module.filename = this.modulePath;

    module._compile(this.code, this.modulePath);

    // TODO resolve and reload children to bust cache

    return module;
  }
}
