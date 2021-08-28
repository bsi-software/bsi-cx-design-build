import TwigContext from './twig-context';

export default class BsiCxTwigContextWebpackPlugin {
  /**
   * @type {string}
   */
  static PLUGIN_NAME = 'BsiCxTwigContextWebpackPlugin';

  /**
   * @type {TwigContext}
   * @private
   */
  _twigContext = undefined;

  /**
   * @param {TwigContext} twigContext
   */
  constructor(twigContext) {
    /**
     * @type {TwigContext}
     * @private
     */
    this._twigContext = twigContext;
  }

  apply(compiler) {
    compiler.hooks.thisCompilation.tap(BsiCxTwigContextWebpackPlugin.PLUGIN_NAME, compilation => {
      this._twigContext.forcePropertiesReload();
      compilation.fileDependencies.addAll(this._twigContext.propertiesModule.dependencies);
    });
  }
}
