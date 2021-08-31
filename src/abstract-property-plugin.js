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
   * @returns {*}
   */
  getProperty(property) {
    let segments = property.split('.');
    let scope = this._properties;

    for (let segment of segments) {
      scope = scope[segment];
      if (typeof scope === 'undefined') {
        throw new Error(`Property ${property} not found.`);
      }
    }

    return this._propertyResolver.resolve(scope);
  }
}
