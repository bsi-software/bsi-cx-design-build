import AbstractBuilder from '../abstract-builder';
import DesignJsonProperty from '../design-json-property';
import {identity} from '../browser-utility';

/** @typedef {import('./style').default} Style */

/**
 * This is the builder class for css class objects (required by the {@link Style|style} configuration object).
 *
 * @example
 * module.exports = cx.style
 *   .withIdentifier('text-color')
 *   .withLabel('Text Color')
 *   .withCssClasses(
 *     cx.cssClass
 *       .withCssClass('text-red')
 *       .withLabel('Red'),
 *     cx.cssClass
 *       .withCssClass('text-blue')
 *       .withLabel('Blue'));
 * @since Studio 1.1
 */
export default class CssClass extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _cssClass = undefined;
  /**
   * @type {string|NLS|undefined}
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
   * @returns {string|NLS|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * Specify the CSS class to use.
   *
   * @example
   * .withCssClass('text-red')
   * @param {string} cssClass - The CSS class to use.
   * @returns {CssClass}
   */
  withCssClass(cssClass) {
    this._cssClass = cssClass;
    return this;
  }

  /**
   * Specify the label to use with this CSS class.
   *
   * @param {string|NLS} label - The label to use.
   * @returns {CssClass}
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  _buildInternal() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.CSS_CLASS, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, identity);

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {CssClass}
   */
  clone(shallow) {
    return this._clone(new CssClass(), shallow);
  }

  /**
   * Static helper method to create a new CSS class object.
   *
   * @example
   * CssClass.create('text-red','Red')
   * @param {string} cssClass - The CSS class to use.
   * @param {string} label - The label to use.
   * @returns {CssClass}
   */
  static create(cssClass, label) {
    return new CssClass()
      .withCssClass(cssClass)
      .withLabel(label);
  }
}
