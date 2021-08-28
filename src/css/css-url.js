import sass from 'sass';

import AbstractCssProperty from './abstract-css-property';

export default class CssUrl extends AbstractCssProperty {
  /**
   * @type {string}
   * @private
   */
  _url = undefined;

  /**
   * @param {string} url
   */
  constructor(url) {
    super();
    /**
     * @type {string}
     * @private
     */
    this._url = url;
  }

  /**
   * @return {string}
   */
  get url() {
    return this._url;
  }

  /**
   * @return {string}
   */
  get ref() {
    return `@ref(${this.url})`;
  }

  /**
   * @return {string}
   */
  get css() {
    return `url(${this.url})`;
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
   * @param {string|number} value
   * @return {undefined}
   */
  static getParser(value) {
    return undefined;
  }
}
