/**
 * PropertiesToScssConverter
 * ----------------
 * Converts a PropertyContext object into SCSS variables.
 * Supports nested structures (becomes SCSS maps).
 * 
 * Example:
 * properties.js:
 * {
 *  primary: '#abc123',
 *  secondary: '#123abc',
 *  spacer: {
 *    100: '4px',
 *    200: '8px'
 *  }
 * }
 * 
 * becomes
 * $primary: #abc123
 * $secondary: #123abc;
 * $spacer: (
 *   100: 4px,
 *   200: 8px
 * )
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
    if (!properties["disableScssVariables"]) {
      this._scssData = this._toScssMap(properties);
    }
  }

  /**
   * @returns {string}
   */
  get scssData() {
    return this._scssData;
  }

  spacer = (indent) => ' '.repeat(indent);

  /**
   * Recursive conversion of a JS object to SCSS Map
   */
  _toScssMap(obj, indent = 0) {
    let entries = Object.entries(obj)
      .map(([key, value]) => this._keyValueToStr(key, value, indent))
      .join(indent ? ',\n' : '\n');
    return `\n${entries}\n${this.spacer(indent)}`;
  }

  /**
   * Converts key, value pair to scss variable or scss map
   * @param {string} key 
   * @param {any} value 
   * @param {number} indent 
   * @returns {string} scssString
   */
  _keyValueToStr(key, value, indent = 0) {
    let isTopLevel = !indent;
    let isObj = typeof value === 'object' && value !== null;
    let isSassObj = typeof value.getSassObject === 'function';
    // following content must be escaped: http..., c:..., text with spaces
    let escapeValue = /^(http|c)|(\s)/gm.test(value.toString().toLowerCase());
    // handle empty values
    let isEmpty = value === '';
    value =
      isSassObj ? value.getSassObject() :
        isObj ? `(${this._toScssMap(value, indent + 2)})` :
          escapeValue ? `"${value}"` :
            isEmpty ? null :
              value;
    return `${isTopLevel ? '$' : this.spacer(indent)}${key}: ${value}${isTopLevel ? ';' : ''}`;
  }
};
