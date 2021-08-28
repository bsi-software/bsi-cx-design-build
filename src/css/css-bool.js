import sass from 'sass';

import AbstractCssProperty from './abstract-css-property';

export default class CssBool extends AbstractCssProperty {
  /**
   * @type {boolean}
   * @private
   */
  _value = undefined;

  /**
   * @param {boolean} value
   */
  constructor(value) {
    super();
    /**
     * @type {boolean}
     * @private
     */
    this._value = value;
  }

  /**
   * @return {boolean}
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
    return !!this.value ? sass.types.Boolean.TRUE : sass.types.Boolean.FALSE;
  }

  /**
   * @return {string}
   */
  toString() {
    return JSON.stringify(this.value);
  }

  /**
   * @param {boolean} value
   * @return {CssBool}
   */
  static fromBoolean(value) {
    return new CssBool(!!value);
  }

  /**
   * @param {string|number|boolean} value
   * @return {(function(boolean): CssBool)|undefined}
   */
  static getParser(value) {
    switch (true) {
      case typeof value === 'boolean' || value instanceof Boolean:
        return CssBool.fromBoolean;
      default:
        return undefined;
    }
  }
}
