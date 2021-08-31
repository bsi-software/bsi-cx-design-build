import {Locale, WILDCARD} from './locale';

/** @typedef {import('./design-factory').default} DesignFactory */
/** @typedef {import('../style/css-class').default} CssClass */

/**
 * A collection of various helper methods.
 *
 * @example
 * cx.h.nls(
 *   'action',
 *   cx.h.t('action'),
 *   cx.h.t('de','Aktion'))
 */
export default class DesignHelper {
  /**
   * @type {DesignFactory}
   * @private
   */
  _factory = undefined;

  /**
   * @param {DesignFactory} factory
   */
  constructor(factory) {
    this._factory = factory;
  }

  /**
   * @returns {DesignFactory}
   */
  get #factory() {
    return this._factory;
  }

  /**
   * Shortcut to create a new {@link Style} object. See example for usage.
   *
   * @example
   * module.exports = cx.h.style(
   *   'text-color',
   *   'Text Color',
   *   cx.h.cssClass('text-red','Red'),
   *   cx.h.cssClass('text-blue','Blue'));
   * @param {string} identifier
   * @param {string} label
   * @param {...CssClass} cssClasses
   */
  style(identifier, label, ...cssClasses) {
    return this.#factory.style
      .withIdentifier(identifier)
      .withLabel(label)
      .withCssClasses(...cssClasses);
  }

  /**
   * Shortcut to create a new {@link CssClass} instance. See example for usage.
   *
   * @example
   * module.exports = cx.style
   *   .withIdentifier('text-color')
   *   .withLabel('Text Color')
   *   .withCssClasses(
   *     cx.h.cssClass('text-red','Red'),
   *     cx.h.cssClass('text-blue','Blue'));
   * @param {string} cssClass
   * @param {string} label
   * @returns {CssClass}
   */
  cssClass(cssClass, label) {
    return this.#factory.cssClass
      .withCssClass(cssClass)
      .withLabel(label);
  }

  /**
   * Shortcut to create a {@link NLS} object. See example for usage.
   *
   * @example
   * module.exports = [
   *   cx.h.nls(
   *     'action',
   *     cx.h.t('action'),
   *     cx.h.t('de', 'Aktion'),
   *     cx.h.t(Locale.DE_CH, 'Aktion')),
   *   cx.h.nls(
   *     'contact',
   *     cx.h.t('contact'),
   *     cx.h.t('de', 'Kontakt'),
   *     cx.h.t(Locale.DE_CH, 'Kontakt'))
   * ];
   * @see {@link t}
   * @param {string} identifier
   * @param {Translation} translations
   * @returns {NLS}
   */
  nls(identifier, ...translations) {
    return this.#factory.nls
      .withIdentifier(identifier)
      .withTranslations(...translations);
  }

  /**
   * Shortcut to create a {@link Translation} object. See example for usage.
   *
   * @example
   * cx.nls
   *   .withIdentifier('action')
   *   .withTranslations(
   *     cx.h.t('action'), // wildcard translation
   *     cx.h.t('de', 'Aktion'), // translation with raw locale
   *     cx.h.t(Locale.DE_CH, 'Aktion')) // translation with locale as constant
   * @see {@link n}
   * @param {Locale|string} localeOrWildcardTranslation - Locale (as string or constant) or translation string.
   * @param {string|undefined} [optionalTranslation=undefined] - The translation, only required if the first parameter is a locale.
   * @returns {Translation}
   */
  t(localeOrWildcardTranslation, optionalTranslation) {
    let locale = optionalTranslation === undefined ? WILDCARD : localeOrWildcardTranslation;
    let translation = optionalTranslation ?? localeOrWildcardTranslation;
    let translationObj = this.#factory.translation.withTranslation(translation);

    return locale instanceof Locale ? translationObj.withLocale(locale) : translationObj.withRawLocale(locale);
  }
}
