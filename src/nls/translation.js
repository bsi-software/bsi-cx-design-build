import AbstractBuilder from '../abstract-builder';
import {Locale, WILDCARD} from '../design/locale';

export default class Translation extends AbstractBuilder {
  constructor() {
    super();
    /**
     * @type {Locale|undefined}
     * @private
     */
    this._locale = undefined;
    /**
     * @type {string|undefined}
     * @private
     */
    this._translation = undefined;
  }

  /**
   * @returns {Locale|undefined}
   */
  get locale() {
    return this._locale;
  }

  /**
   * @returns {string|undefined}
   */
  get translation() {
    return this._translation;
  }

  /**
   * @param {Locale} locale
   * @returns {Translation}
   */
  withLocale(locale) {
    this._locale = locale;
    return this;
  }

  /**
   * @param {string} translation
   * @returns {Translation}
   */
  withTranslation(translation) {
    this._translation = translation;
    return this;
  }

  build() {
    let config = {};

    config[this.locale?.value] = this.translation;

    return config;
  }

  /**
   * @param {boolean} [shallow=true]
   * @returns {Translation}
   */
  clone(shallow) {
    return this._clone(new Translation(), shallow);
  }

  /**
   * @param {Locale} locale
   * @param {string} translation
   * @returns {Translation}
   */
  static create(locale, translation) {
    return new Translation()
      .withLocale(locale)
      .withTranslation(translation);
  }

  /**
   * @param {string} translation
   * @returns {Translation}
   */
  static wildcard(translation) {
    return new Translation()
      .withLocale(WILDCARD)
      .withTranslation(translation);
  }
}
