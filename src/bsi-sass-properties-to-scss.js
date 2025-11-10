

import { space } from 'postcss/lib/list';
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
  _scssData = '';
  specialCharsRegex = /[!@$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  // _propertiesIdentifier = 'bsiProperty'
  /**
   * @param {PropertyContext} propertyContext
   */
  constructor(propertyContext) {
    // console.warn('B4');
    // console.log(propertyContext.properties)
    let properties = propertyContext.properties;
    /**
     * @type {CssPropertyResolver}
     * @private
     */
    this._propertyResolver = propertyContext.cssPropertyResolver;

    // this._scssData = `$bsiProperty: (${this._toScssMap(properties, 2)});`;
    this._scssData = this._toScssMap(properties);
    console.log(this._scssData)
  }

  /**
   * @returns {string|undefined}
   */
  get scssData() {
    return this._scssData;
  }

  spacer = (indent) => ' '.repeat(indent);
  _keyValueToStr(key, value, indent = 0) {
    let isTopLevel = !indent;
    let isObj = typeof value === 'object' && value !== null;
    let isSassObj = isObj && typeof value.getSassObject === 'function';
    console.log(`${key}: ${value}`)
    console.log('A4: ' + value)
    // let isSassUrl = value.getSassObject().assertString();
    // value = isSassObj ? value.getSassObject().text : value;
    // value = (isObj && !isSassObj) ? `(${this._toScssMap(value, indent + 2)})` : this.specialCharsRegex.test(value) ? `'${value}'` : value;
    value = isSassObj ? value.getSassObject().text
      : isObj ? `(${this._toScssMap(value, indent + 2)})`
        : value;

    // value = (!isObj && this.specialCharsRegex.test(value)) ? `'${value}'` : value;
    console.log('B4: ' + value)
    // value = (!isObj && value.toString().includes('\\')) ? `'${value}'` : value;
    value = !isObj ? this._propertyResolver.resolve(value) : value;
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
