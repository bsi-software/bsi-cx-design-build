import AbstractBuilder from '../abstract-builder';
import Translation from './translation';

/**
 * The builder class for NLS objects.
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
export default class NLS extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _identifier = undefined;
  /**
   * @type {Translation[]|undefined}
   * @private
   */
  _translations = undefined;

  /**
   * @returns {string|undefined}
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * @returns {Translation[]|undefined}
   */
  get translations() {
    return this._translations;
  }

  /**
   * @param {string} identifier
   * @returns {NLS}
   */
  withIdentifier(identifier) {
    this._identifier = identifier;
    return this;
  }

  /**
   * Add translations to this NLS object.
   *
   * @example
   * cx.nls
   *   .withIdentifier('action')
   *   .withTranslations(
   *     cx.translation
   *       .withLocale(Locale.WILDCARD)
   *       .withTranslation('action'),
   *     cx.translation
   *       .withLocale(Locale.DE)
   *       .withTranslation('Aktion'))
   * @param {...Translation} translations - The translation objects.
   * @returns {NLS}
   */
  withTranslations(...translations) {
    this._translations = translations;
    return this;
  }

  /**
   * Set the translations as raw value.
   *
   * @example
   * .withRawTranslations({
   *   '*': 'contact',
   *   'de': 'Kontakt',
   *   'de-CH': 'Kontakt'
   * })
   * @param {{}} translations
   * @returns {NLS}
   */
  withRawTranslations(translations) {
    this._translations = [];

    for (let [locale, translation] of Object.entries(translations)) {
      let translationObj = new Translation()
        .withRawLocale(locale)
        .withTranslation(translation);
      this._translations.push(translationObj);
    }

    return this;
  }

  build() {
    let config = {};
    let translation = {};

    for (let translationObj of this.translations ?? []) {
      translation = {
        ...translation,
        ...translationObj.build()
      }
    }

    config[this.identifier] = translation;

    return config;
  }

  /**
   * Static helper method to create a NLS with some translations.
   *
   * @param {string} identifier - The identifier to use.
   * @param {...Translation} translations - The translation objects.
   * @returns {NLS}
   */
  static create(identifier, ...translations) {
    return new NLS()
      .withIdentifier(identifier)
      .withTranslations(...translations);
  }

  /**
   * @example
   * NLS.fromMap(
   *   'reset',
   *   new Map([
   *     [Locale.WILDCARD, 'Reset'],
   *     [Locale.DE, 'Zurücksetzen']
   *   ])
   * )
   * @param {string} identifier
   * @param {Map<Locale,string>} map
   */
  static fromMap(identifier, map) {
    let translations = [];

    for (let [locale, translation] of map.entries()) {
      translations.push(
        new Translation()
          .withLocale(locale)
          .withTranslation(translation));
    }

    return new NLS()
      .withIdentifier(identifier)
      .withTranslations(...translations);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {NLS}
   */
  clone(shallow) {
    return this._clone(new NLS(), shallow);
  }
}
