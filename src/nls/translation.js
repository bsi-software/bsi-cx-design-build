import AbstractBuilder from '../abstract-builder';
import {WILDCARD} from '../design/locale';
import RawValue from '../raw-value';

/** @typedef {import('../design/locale').Locale} Locale */

/**
 * The builder class for translation objects.
 *
 * @example
 * module.exports = [
 *   // using with* methods
 *   cx.nls
 *     .withIdentifier('action')
 *     .withTranslations(
 *       cx.translation
 *         .withLocale(Locale.WILDCARD)
 *         .withTranslation('action'),
 *       cx.translation
 *         .withLocale(Locale.DE)
 *         .withTranslation('Aktion')),
 *   // using factory shortcuts
 *   cx.n(
 *     'contact',
 *     cx.t('contact'),
 *     cx.t('de', 'Kontakt'),
 *     cx.t(Locale.DE_CH, 'Kontakt'))
 * ];
 */
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
   * Set the locale to use for this translation.
   *
   * @example
   * .withLocale(Locale.EN)
   * @param {Locale} locale - The locale to use.
   * @returns {Translation}
   */
  withLocale(locale) {
    this._locale = locale;
    return this;
  }

  /**
   * Set the locale as raw value.
   *
   * @example
   * .withRawLocale('en')
   * @param {string} locale - The raw locale to use.
   * @returns {Translation}
   */
  withRawLocale(locale) {
    this._locale = new RawValue(locale);
    return this;
  }

  /**
   * Set the translated string for this translation object.
   *
   * @example
   * .withTranslation('action')
   * @param {string} translation - The translation to use.
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
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {Translation}
   */
  clone(shallow) {
    return this._clone(new Translation(), shallow);
  }

  /**
   * Static helper to create a translation object with a given locale.
   *
   * @example
   * Translation.create(Locale.EN, 'action')
   * @param {Locale} locale - The locale to use.
   * @param {string} translation - The translation to use.
   * @returns {Translation}
   */
  static create(locale, translation) {
    return new Translation()
      .withLocale(locale)
      .withTranslation(translation);
  }

  /**
   * Static helper to create a translation object with a {@link WILDCARD|wildcard} locale.
   *
   * @example
   * Translation.wildcard('action')
   * @param {string} translation - The translation to use.
   * @returns {Translation}
   */
  static wildcard(translation) {
    return new Translation()
      .withLocale(WILDCARD)
      .withTranslation(translation);
  }
}
