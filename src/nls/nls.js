import AbstractBuilder from '../abstract-builder';
import Translation from './translation';

export default class NLS extends AbstractBuilder {
  constructor() {
    super();
    /**
     * @type {string|undefined}
     * @private
     */
    this._identifier = undefined;
    /**
     * @type {[Translation]|undefined}
     * @private
     */
    this._translations = undefined;
  }

  /**
   * @return {string|undefined}
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * @return {[Translation]|undefined}
   */
  get translations() {
    return this._translations;
  }

  /**
   * @param {string} identifier
   * @return {NLS}
   */
  withIdentifier(identifier) {
    this._identifier = identifier;
    return this;
  }

  /**
   * @param {Translation} translations
   * @return {NLS}
   */
  withTranslations(...translations) {
    this._translations = translations;
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
   * @param {string} identifier
   * @param {Translation}translations
   * @return {NLS}
   */
  static create(identifier, ...translations) {
    return new NLS()
      .withIdentifier(identifier)
      .withTranslations(...translations);
  }
}
