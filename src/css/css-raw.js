import sass from 'sass';

import AbstractCssProperty from './abstract-css-property';

export default class CssRaw extends AbstractCssProperty {
  /**
   * @type {*}
   * @private
   */
  _value = undefined;

  /**
   * @param {*} value
   */
  constructor(value) {
    super();
    /**
     * @type {*}
     * @private
     */
    this._value = value;
  }

  /**
   * @return {*}
   */
  get value() {
    return this._value;
  }

  /**
   * @return {*}
   */
  getLessNode() {
    return this.value;
  }

  /**
   * @return {*}
   */
  getSassObject() {
    return new sass.types.String(this.value);
  }

  /**
   * @return {string}
   */
  toString() {
    return `${this.value}`;
  }

  /**
   * @param {*} value
   * @return {CssRaw}
   */
  static fromAny(value) {
    return new CssRaw(value);
  }

  /**
   * @param {*} value
   * @return {function(*): CssRaw}
   */
  static getParser(value) {
    return CssRaw.fromAny;
  }
}
