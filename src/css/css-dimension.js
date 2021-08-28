import sass from 'sass';
import Node from 'less/lib/less/tree/node';
import Dimension from 'less/lib/less/tree/dimension';

import AbstractCssProperty from './abstract-css-property';

export default class CssDimension extends AbstractCssProperty {
  /**
   * @type {RegExp}
   */
  static VALUE_UNIT = /^([0-9,.]+)(px|em|ex|ch|rem|in|cm|mm|pc|pt|vw|vh|vmin|vmax|%)?$/i;

  /**
   * @type {number}
   * @private
   */
  _value = 0;
  /**
   * @type {string|undefined}
   * @private
   */
  _unit = undefined;

  /**
   * @param {number} value
   * @param {string|undefined} [unit=undefined]
   */
  constructor(value, unit) {
    super();
    /**
     * @type {number}
     * @private
     */
    this._value = value;
    /**
     * @type {string|undefined}
     * @private
     */
    this._unit = unit;
  }

  /**
   * @return {number}
   */
  get value() {
    return this._value;
  }

  /**
   * @return {string|undefined}
   */
  get unit() {
    return this._unit;
  }

  /**
   * @return {Node}
   */
  getLessNode() {
    return new Dimension(this.value, this.unit);
  }

  /**
   * @return {*}
   */
  getSassObject() {
    return new sass.types.Number(this.value, this.unit);
  }

  toString() {
    return `${this.value}${this.unit}`;
  }

  static fromString(str) {
    let match = CssDimension.VALUE_UNIT.exec(str);
    let value = parseFloat(match[1]);
    let unit = match[2];

    return new CssDimension(value, unit);
  }

  /**
   * @param {number} num
   * @return {CssDimension}
   */
  static fromNumber(num) {
    return new CssDimension(num);
  }

  /**
   * @param {string|number} value
   * @return {function(string|number):CssDimension|undefined}
   */
  static getParser(value) {
    switch (true) {
      case CssDimension.VALUE_UNIT.test(value):
        return CssDimension.fromString;
      case typeof value === 'number':
        return CssDimension.fromNumber;
      default:
        return undefined;
    }
  }
}
