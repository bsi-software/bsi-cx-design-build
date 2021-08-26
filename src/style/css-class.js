import AbstractBuilder from '../abstract-builder';
import DesignJsonProperty from '../design-json-property';
import {identity} from '../extractor';

export default class CssClass extends AbstractBuilder {
  constructor() {
    super();
    /**
     * @type {string|undefined}
     * @private
     */
    this._cssClass = undefined;
    /**
     * @type {string|undefined}
     * @private
     */
    this._label = undefined;
  }

  /**
   * @return {string|undefined}
   */
  get cssClass() {
    return this._cssClass;
  }

  /**
   * @return {string|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @param {string} cssClass
   * @return {CssClass}
   */
  withCssClass(cssClass) {
    this._cssClass = cssClass;
    return this;
  }

  /**
   * @param {string} label
   * @return {CssClass}
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  build() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.CSS_CLASS, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, identity);

    return config;
  }

  /**
   * @param {string} cssClass
   * @param {string} label
   * @return {CssClass}
   */
  static create(cssClass, label) {
    return new CssClass()
      .withCssClass(cssClass)
      .withLabel(label);
  }
}
