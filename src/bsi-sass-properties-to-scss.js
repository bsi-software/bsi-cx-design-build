import PropertyContext from './property-context';

const fs = require('fs');
/**
 * PropertiesToScssConverter
 * ----------------
 * Converts a PropertyContext object into SCSS variables.
 * Supports nested structures (becomes SCSS maps).
 * 
 * Example:
 * properties.js:
 * {
 *  primary: #abc123,
 *  secondary: #123abc
 * }
 * 
 * becomes
 * $primary: #abc123
 * $secondary: #123abc;
 */
export default class PropertiesToScssConverter {

  /**
   * @type {string}
   * @protected
   */
  _scssData = '';

  /**
   * @param {BuildContext} context
   */
  constructor(context) {
    let properties = context.properties.proxy;
    this._scssData = this._toScssMap(properties);
  }

  /**
   * @returns {string}
   */
  get scssData() {
    return this._scssData;
  }

  spacer = (indent) => ' '.repeat(indent);

  _keyValueToStr(key, value, indent = 0) {
    let isTopLevel = !indent;
    let isObj = typeof value === 'object' && value !== null;
    let isSassObj = typeof value.getSassObject === 'function';
    let isPlainUrl = value.toString().startsWith('C:');
    value =
      isSassObj ? value.getSassObject() :
        isObj ? `(${this._toScssMap(value, indent + 2)})` :
          isPlainUrl ? `"${value}"` :
            value;
    return `${isTopLevel ? '$' : this.spacer(indent)}${key}: ${value}${isTopLevel ? ';' : ''}`;
  }

  /**
   * Rekursive Konvertierung eines JS-Objekts in SCSS Map
   */
  _toScssMap(obj, indent = 0) {
    let entries = Object.entries(obj)
      .map(([key, value]) => this._keyValueToStr(key, value, indent))
      .join(indent ? ',\n' : '\n');
    return `\n${entries}\n${this.spacer(indent)}`;
  }
};
