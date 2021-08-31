import AbstractPropertyPlugin from './abstract-property-plugin';

export default class BsiLessPropertyPlugin extends AbstractPropertyPlugin {
  /**
   * @returns {number[]}
   */
  get minVersion() {
    return [3, 0, 0];
  }

  /**
   * @param {*} propertyNode
   * @returns {*}
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

    let value = super.getProperty(property);

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
