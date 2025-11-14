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
   * @returns {*}
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
    // noinspection JSUnresolvedVariable
    return new sass.SassString(this.value);
  }

  /**
   * @returns {string}
   */
  toString() {
    return `${this.value}`;
  }

  /**
   * @param {*} value
   * @returns {CssRaw}
   */
  static fromAny(value) {
    return new CssRaw(value);
  }

  /**
   * @param {*} value
   * @returns {function(*): CssRaw}
   */
  static getParser(value) {
    return CssRaw.fromAny;
  }
}
