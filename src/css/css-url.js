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
   * @return {string}
   */
  get rawUrl() {
    return this._url;
  }

  /**
   * @return {string}
   */
  get externalUrl() {
    return this.rawUrl;
  }

  /**
   * @return {string}
   */
  get inlineUrl() {
    return this._getInlineUrl();
  }

  /**
   * @return {string}
   */
  get url() {
    return this.inline ? this.inlineUrl : this.rawUrl;
  }

  /**
   * @return {string}
   */
  get ref() {
    return this._getRef(this.url);
  }

  /**
   * @return {string}
   */
  get inlineRef() {
    return this._getRef(this.inlineUrl);
  }

  /**
   * @return {string}
   */
  get externalRef() {
    return this._getRef(this.rawUrl);
  }

  /**
   * @return {string}
   */
  get css() {
    return this._getCss(this.url);
  }

  /**
   * @return {string}
   */
  get inlineCss() {
    return this._getCss(this.inlineUrl);
  }

  /**
   * @return {string}
   */
  get inlineRefCss() {
    return this._getCss(this.inlineRef);
  }

  /**
   * @return {string}
   */
  get externalCss() {
    return this._getCss(this.rawUrl);
  }

  /**
   * @return {string}
   */
  get externalRefCss() {
    return this._getCss(this.externalRef);
  }

  /**
   * @return {boolean}
   */
  get inline() {
    return this._inline;
  }

  /**
   * @return {*}
   */
  getLessNode() {
    return this.css;
  }

  /**
   * @return {*}
   */
  getSassObject() {
    return new sass.types.String(this.css);
  }

  /**
   * @return {string}
   */
  toString() {
    return `url(${this.ref})`;
  }

  /**
   * @return {string}
   * @private
   */
  _getInlineUrl() {
    return `${this.rawUrl}?${QueryConstant.INLINE}`; // FIXME: care about already applied query strings
  }

  /**
   * @param {string} url
   * @return {string}
   * @private
   */
  _getRef(url) {
    return `@ref(${url})`;
  }

  /**
   * @param {string} url
   * @return {string}
   * @private
   */
  _getCss(url) {
    return `url(${url})`;
  }

  /**
   * @param {string|number} value
   * @return {undefined}
   */
  static getParser(value) {
    return undefined;
  }
}
