import AbstractBuilder from '../abstract-builder';
import DesignJsonProperty from '../design-json-property';
import {identity} from '../browser-utility';

/**
 * @since Studio 1.1
 */
export default class CssClass extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _cssClass = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _label = undefined;

  /**
   * @returns {string|undefined}
   */
  get cssClass() {
    return this._cssClass;
  }

  /**
   * @returns {string|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @param {string} cssClass
   * @returns {CssClass}
   */
  withCssClass(cssClass) {
    this._cssClass = cssClass;
    return this;
  }

  /**
   * @param {string} label
   * @returns {CssClass}
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
   * @param {boolean} [shallow=true]
   * @returns {CssClass}
   */
  clone(shallow) {
    return this._clone(new CssClass(), shallow);
  }

  /**
   * @param {string} cssClass
   * @param {string} label
   * @returns {CssClass}
   */
  static create(cssClass, label) {
    return new CssClass()
      .withCssClass(cssClass)
      .withLabel(label);
  }
}
