import CssColor from './css-color';
import CssDimension from './css-dimension';
import CssRaw from './css-raw';
import CssUrl from './css-url';
import CssBool from './css-bool';

/** @typedef {import('./abstract-css-property').default} AbstractCssProperty */

export default class CssPropertyResolver {
  /**
   * @type {Map<string|number, AbstractCssProperty>}
   * @private
   */
  _cache = new Map();

  clearCache() {
    this._cache.clear();
  }

  /**
   * @template T
   * @param {T} value
   * @returns {AbstractCssProperty|T}
   */
  resolve(value) {
    if (typeof value.getLessNode === 'function') {
      return value;
    }

    let resolvedProperty = this._cache.get(value);

    if (!resolvedProperty) {
      resolvedProperty = this._createProperty(value);

      this._cache.set(value, resolvedProperty);
    }

    return resolvedProperty;
  }

  /**
   * @param {string|number} value
   * @returns {AbstractCssProperty}
   * @private
   */
  _createProperty(value) {
    /**
     * @type {AbstractCssProperty[]}
     */
    let availablePropertyClasses = [
      CssColor,
      CssDimension,
      CssBool,
      CssUrl,
      CssRaw
    ];

    for (let propertyClass of availablePropertyClasses) {
      /**
       * @type {(function(string): AbstractCssProperty)|undefined}
       */
      let parser = propertyClass.getParser(value);
      if (!!parser) {
        return parser(value);
      }
    }

    throw new Error(`Can not create property from "${value}"`);
  }
}
