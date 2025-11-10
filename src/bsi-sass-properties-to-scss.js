

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
    let isObj = typeof value === 'object' && value !== null && !value.hex && !value.url && !value.value;
    value = isObj ? `(${this._toScssMap(value, indent + 2)})` : this.specialCharsRegex.test(value) ? `'${value}'` : value;
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
