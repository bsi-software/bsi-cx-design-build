/**
 * @abstract
 */
export default class AbstractPropertyPlugin {
  /**
   * @type {CssPropertyResolver}
   * @protected
   */
  _propertyResolver = undefined;
  /**
   * @type {{}}
   * @protected
   */
  _properties = undefined;

  /**
   * @param {BuildContext} context
   */
  constructor(context) {
    /**
     * @type {{}}
     * @private
     */
    this._properties = context.properties.propertiesProxy;
    /**
     * @type {CssPropertyResolver}
     * @private
     */
    this._propertyResolver = context.cssPropertyResolver;
  }

  /**
   * @param {*} property
   * @param {*} fallback
   * @returns {*}
   */
  getProperty(property, fallback) {
    let segments = property.split('.');
    let scope = this._properties;

    for (let segment of segments) {
      scope = scope[segment];
      if (typeof scope === 'undefined') {
        return this._handleNotFoundProperty(property, fallback);
      }
    }

    return this._propertyResolver.resolve(scope);
  }

  /**
   * @param {*} property
   * @param {*} fallback
   * @returns {*}
   * @private
   */
  _handleNotFoundProperty(property, fallback) {
    if (typeof fallback === 'undefined') {
      throw new Error(`Property ${property} not found.`);
    }

    return fallback;
  }
}
