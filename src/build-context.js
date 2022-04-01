import PropertyContext from './property-context';
import CssPropertyResolver from './css/css-property-resolver';

export default class BuildContext {
  /**
   * @type {ValidatedBuildConfig}
   * @private
   */
  _config = undefined;
  /**
   * @type {PropertyContext}
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
     * @type {PropertyContext}
     * @private
     */
    this._properties = new PropertyContext(config.propertiesFilePath);
  }

  /**
   * @returns {ValidatedBuildConfig}
   */
  get config() {
    return this._config;
  }

  /**
   * @returns {PropertyContext}
   */
  get properties() {
    return this._properties;
  }

  /**
   * @returns {CssPropertyResolver}
   */
  get cssPropertyResolver() {
    return this._cssPropertyResolver;
  }
}
