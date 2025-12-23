import sass from 'sass';

import AbstractCssProperty from './abstract-css-property';

export default class CssStyle extends AbstractCssProperty {
  /**
   * @type {string}
   * @private
   */
  _value = undefined;

  /**
   * @param {string} value
   */
  constructor(value) {
    super();
    /**
     * @type {string}
     * @private
     */
    this._value = value;
  }

  /**
   * @returns {string}
   */
  get value() {
    return this._value;
  }

  /**
   * @returns {*}
   */
  getLessNode() {
    return this.value;
  }

  /**
   * @returns {*}
   */
  getSassObject() {
    return new sass.SassString(this.value, { quotes: false });
  }

  /**
   * @returns {string}
   */
  toString() {
    return this.value;
  }

  /**
   * @param {string} value
   * @returns {CssStyle}
   */
  static fromString(value) {
    return new CssStyle(value);
  }

  /**
   * @param {*} value
   * @returns {(function(*): CssStyle)|undefined}
   */
  static getParser(value) {
    switch (true) {
      case typeof value === 'string' || value instanceof string:
        return CssStyle.fromString;
      default:
        return undefined;
    }
  }
}
