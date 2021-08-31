import Module from 'module';

export class ModuleLoader {
  static NODE_MODULES = /[\\/]node_modules[\\/]/;
  /**
   * @type {string}
   * @private
   */
  _modulePath = undefined;
  /**
   * @type {Set<string>}
   * @private
   */
  _dependencies = new Set();

  /**
   * @param {string} modulePath
   */
  constructor(modulePath) {
    /**
     * @type {string}
     * @private
     */
    this._modulePath = modulePath;
  }

  /**
   * @returns {string}
   */
  get modulePath() {
    return this._modulePath;
  }

  /**
   * @returns {Set<string>}
   */
  get dependencies() {
    return this._dependencies;
  }

  /**
   *
   * @returns {Module}
   */
  load() {
    let moduleRequire = Module.createRequire(this.modulePath);
    let module = moduleRequire(this.modulePath);

    this._dependencies.clear();

    this._deleteRelatedModuleCache(this._dependencies, moduleRequire.cache, this.modulePath, 0);

    return module;
  }

  /**
   * @param {Set<string>} visited,
   * @param {Dict<NodeModule>} cache
   * @param {string} id
   * @param {number} level
   * @private
   */
  _deleteRelatedModuleCache(visited, cache, id, level) {
    if (ModuleLoader.NODE_MODULES.test(id) || visited.has(id)) {
      return;
    }

    /**
     * @type {NodeModule | undefined}
     */
    let module = cache[id];

    if (!!module) {
      visited.add(id);
      module.children.forEach(child => this._deleteRelatedModuleCache(visited, cache, child.id, level + 1));
      delete cache[id];
    }
  }
}
