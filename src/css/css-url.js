import sass from 'sass';

import AbstractCssProperty from './abstract-css-property';
import QueryConstant from '../query-constant';

export default class CssUrl extends AbstractCssProperty {
  /**
   * @type {string}
   * @private
   */
  _url = undefined;
  /**
   * @type {boolean}
   * @private
   */
  _inline = undefined;

  /**
   * @param {string} url
   * @param {boolean} [inline=false]
   */
  constructor(url, inline) {
    super();
    /**
     * @type {string}
     * @private
     */
    this._url = url;
    /**
     * @type {boolean}
     * @private
     */
    this._inline = !!inline;
  }

  /**
   * @returns {string}
   */
  get rawUrl() {
    return this._url;
  }

  /**
   * @returns {string}
   */
  get externalUrl() {
    return this.rawUrl;
  }

  /**
   * @returns {string}
   */
  get inlineUrl() {
    return this._getInlineUrl();
  }

  /**
   * @returns {string}
   */
  get url() {
    return this.inline ? this.inlineUrl : this.rawUrl;
  }

  /**
   * @returns {string}
   */
  get ref() {
    return this._getRef(this.url);
  }

  /**
   * @returns {string}
   */
  get inlineRef() {
    return this._getRef(this.inlineUrl);
  }

  /**
   * @returns {string}
   */
  get externalRef() {
    return this._getRef(this.rawUrl);
  }

  /**
   * @returns {string}
   */
  get css() {
    return this._getCss(this.url);
  }

  /**
   * @returns {string}
   */
  get inlineCss() {
    return this._getCss(this.inlineUrl);
  }

  /**
   * @returns {string}
   */
  get inlineRefCss() {
    return this._getCss(this.inlineRef);
  }

  /**
   * @returns {string}
   */
  get externalCss() {
    return this._getCss(this.rawUrl);
  }

  /**
   * @returns {string}
   */
  get externalRefCss() {
    return this._getCss(this.externalRef);
  }

  /**
   * @returns {boolean}
   */
  get inline() {
    return this._inline;
  }

  /**
   * @returns {*}
   */
  getLessNode() {
    return this.css;
  }

  /**
   * @returns {*}
   */
  getSassObject() {
    return new sass.types.String(this.css);
  }

  /**
   * @returns {string}
   */
  toString() {
    return `url(${this.ref})`;
  }

  /**
   * @returns {string}
   * @private
   */
  _getInlineUrl() {
    return `${this.rawUrl}?${QueryConstant.INLINE}`; // FIXME: care about already applied query strings
  }

  /**
   * @param {string} url
   * @returns {string}
   * @private
   */
  _getRef(url) {
    return `@ref(${url})`;
  }

  /**
   * @param {string} url
   * @returns {string}
   * @private
   */
  _getCss(url) {
    return `url(${url})`;
  }

  /**
   * @param {string|number} value
   * @returns {undefined}
   */
  static getParser(value) {
    return undefined;
  }
}
