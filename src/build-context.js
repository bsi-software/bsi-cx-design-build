import ValidatedBuildConfig from './build-config/validated-build-config';
import TwigContext from './twig-context';
import CssPropertyResolver from './css/css-property-resolver';

export default class BuildContext {
  /**
   * @type {ValidatedBuildConfig}
   * @private
   */
  _config = undefined;
  /**
   * @type {TwigContext}
   * @private
   */
  _properties = undefined;
  /**
   * @type {CssPropertyResolver}
   * @private
   */
  _cssPropertyResolver = new CssPropertyResolver();

  /**
   * @param {ValidatedBuildConfig} config
   */
  constructor(config) {
    /**
     * @type {ValidatedBuildConfig}
     * @private
     */
    this._config = config;
    /**
     * @type {TwigContext}
     * @private
     */
    this._properties = new TwigContext(config.propertiesFilePath);
  }

  /**
   * @return {ValidatedBuildConfig}
   */
  get config() {
    return this._config;
  }

  /**
   * @return {TwigContext}
   */
  get properties() {
    return this._properties;
  }

  /**
   * @return {CssPropertyResolver}
   */
  get cssPropertyResolver() {
    return this._cssPropertyResolver;
  }
}
