export default class AbstractCssProperty {
  /**
   * @returns {*}
   * @abstract
   */
  getLessNode() {
    throw new Error('not implemented');
  }

  /**
   * @returns {*}
   * @abstract
   */
  getSassObject() {
    throw new Error('not implemented');
  }

  /**
   * Will be used in Twig files.
   *
   * @returns {string}
   * @abstract
   */
  toString() {
    throw new Error('not implemented');
  }

  /**
   * @param {*} value
   * @returns {function(*):AbstractCssProperty|undefined}
   */
  static getParser(value) {
    throw new Error('not implemented');
  }
}
