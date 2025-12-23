export default class AbstractCssProperty {
  /**
   * @returns {*}
   * @abstract
   */
  getLessNode() {
    throw new Error('not implemented');
  }

  /**
   * Will be used in Scss files.
   * 
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
   * Will be used inside JS files to generate the design.json file.
   *
   * @returns {number|string|undefined}
   */
  toJSON() {
    return this.toString();
  }

  /**
   * @param {*} value
   * @returns {function(*):AbstractCssProperty|undefined}
   */
  static getParser(value) {
    throw new Error('not implemented');
  }
}
