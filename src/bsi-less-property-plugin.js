import CssPropertyResolver from './css/css-property-resolver';

export default class BsiLessPropertyPlugin {
  /**
   * @type {CssPropertyResolver}
   * @private
   */
  static _propertyResolver = new CssPropertyResolver();
  /**
   * @type {{}}
   * @private
   */
  _properties = undefined;

  /**
   * @param {{}} properties
   */
  constructor(properties) {
    /**
     * @type {{}}
     * @private
     */
    this._properties = properties;
  }

  get minVersion() {
    return [3, 0, 0];
  }

  /**
   * @param {*} propertyNode
   * @return {{}}
   */
  getProperty(propertyNode) {
    if (!propertyNode) {
      throw new Error('Property argument is required.');
    }

    if (typeof propertyNode.value === 'undefined') {
      throw new Error('Property must be instanceof Node and have a value attribute.');
    }

    if (typeof propertyNode.value !== 'string') {
      throw new Error('Property must be a string.');
    }

    /**
     * @type {string}
     */
    let property = propertyNode.value;
    let segments = property.split('.');
    let scope = this._properties;

    for (let segment of segments) {
      scope = scope[segment];
      if (typeof scope === 'undefined') {
        throw new Error(`Property ${property} not found.`);
      }
    }

    let value = BsiLessPropertyPlugin._propertyResolver.resolve(scope);

    return value.getLessNode();
  }

  /**
   * @param lessInstance
   * @param pluginManager
   * @param functions
   */
  install(lessInstance, pluginManager, functions) {
    functions.add('bsiProperty', (property) => this.getProperty(property));
  }
}
