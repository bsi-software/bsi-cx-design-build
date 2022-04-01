export default class BsiCxTwigContextWebpackPlugin {
  /**
   * @type {string}
   */
  static PLUGIN_NAME = 'BsiCxTwigContextWebpackPlugin';

  /**
   * @type {PropertyContext}
   * @private
   */
  _propertyContext = undefined;

  /**
   * @param {PropertyContext} propertyContext
   */
  constructor(propertyContext) {
    /**
     * @type {PropertyContext}
     * @private
     */
    this._propertyContext = propertyContext;
  }

  apply(compiler) {
    compiler.hooks.thisCompilation.tap(BsiCxTwigContextWebpackPlugin.PLUGIN_NAME, compilation => {
      this._propertyContext.forcePropertiesReload();
      compilation.fileDependencies.addAll(this._propertyContext.propertiesModule.dependencies); // FIXME: add file paths from CssUrl to dependencies
    });
  }
}
