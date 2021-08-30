import AbstractConstant from '../abstract-constant';

export class Locale extends AbstractConstant {
}

/**
 * This defines the fallback locale to ues.
 *
 * @see {@link Design#withDefaultLocale}
 * @see {@link Design#withLocales}
 * @type {Locale}
 */
export const WILDCARD = new Locale('*');
/**
 * @see {@link Design#withDefaultLocale}
 * @see {@link Design#withLocales}
 * @type {Locale}
 */
export const EN = new Locale('en');
/**
 * @see {@link Design#withDefaultLocale}
 * @see {@link Design#withLocales}
 * @type {Locale}
 */
export const EN_GB = new Locale('en-GB');
/**
 * @see {@link Design#withDefaultLocale}
 * @see {@link Design#withLocales}
 * @type {Locale}
 */
export const EN_US = new Locale('en-US');
/**
 * @see {@link Design#withDefaultLocale}
 * @see {@link Design#withLocales}
 * @type {Locale}
 */
export const DE = new Locale('de');
/**
 * @see {@link Design#withDefaultLocale}
 * @see {@link Design#withLocales}
 * @type {Locale}
 */
export const DE_DE = new Locale('de-DE');
/**
 * @see {@link Design#withDefaultLocale}
 * @see {@link Design#withLocales}
 * @type {Locale}
 */
export const DE_CH = new Locale('de-CH');
/**
 * @see {@link Design#withDefaultLocale}
 * @see {@link Design#withLocales}
 * @type {Locale}
 */
export const FR = new Locale('fr');
/**
 * @see {@link Design#withDefaultLocale}
 * @see {@link Design#withLocales}
 * @type {Locale}
 */
export const FR_CH = new Locale('fr-CH');
/**
 * @see {@link Design#withDefaultLocale}
 * @see {@link Design#withLocales}
 * @type {Locale}
 */
export const IT = new Locale('it');
/**
 * @see {@link Design#withDefaultLocale}
 * @see {@link Design#withLocales}
 * @type {Locale}
 */
export const IT_CH = new Locale('it-CH');
