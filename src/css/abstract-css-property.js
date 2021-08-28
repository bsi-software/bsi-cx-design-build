import Node from 'less/lib/less/tree/node';

export default class AbstractCssProperty {
  /**
   * @return {Node}
   * @abstract
   */
  getLessNode() {
    throw new Error('not implemented');
  }

  /**
   * @return {*}
   * @abstract
   */
  getSassObject() {
    throw new Error('not implemented');
  }

  /**
   * @return {string}
   * @abstract
   */
  toString() {
    throw new Error('not implemented');
  }

  /**
   * @param {string|number} value
   * @return {function(string|number):AbstractCssProperty|undefined}
   */
  static getParser(value) {
    throw new Error('not implemented');
  }
}
