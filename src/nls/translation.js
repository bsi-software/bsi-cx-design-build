import AbstractBuilder from '../abstract-builder';
import {WILDCARD} from '../design/locale';
import RawValue from '../raw-value';

/** @typedef {import('../design/locale').Locale} Locale */

export default class Translation extends AbstractBuilder {
  /**
   * @type {Locale|RawValue|undefined}
   * @private
   */
  _locale = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _translation = undefined;

  /**
   * @returns {Locale|RawValue|undefined}
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
   * @param {string} locale
   * @returns {Translation}
   */
  withRawLocale(locale) {
    this._locale = new RawValue(locale);
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
