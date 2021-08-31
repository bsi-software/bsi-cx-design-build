import DesignJsonProperty from '../design-json-property';
import AbstractBuilder from '../abstract-builder';
import {builderObjectValue, identity, uuid} from '../browser-utility';
import RawValue from '../raw-value';

/** @typedef {import('./css-class').default} CssClass */

/**
 * This is the builder class for style configuration objects.
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
export default class Style extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _identifier = uuid();
  /**
   * @type {string|undefined}
   * @private
   */
  _label = undefined;
  /**
   * @type {RawValue|CssClass[]|undefined}
   * @private
   */
  _cssClasses = undefined;

  /**
   * @returns {string|undefined}
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * @returns {string|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @returns {RawValue|[CssClass]|undefined}
   */
  get cssClasses() {
    return this._cssClasses;
  }

  /**
   * Set the unique identifier for this style configuration. If not specified, a UUID v4 will be used.
   * <strong>It is recommended to set this property.</strong>
   *
   * @example
   * .withIdentifier('text-color')
   * @param {string} identifier - The identifier to use.
   * @returns {Style}
   */
  withIdentifier(identifier) {
    this._identifier = identifier;
    return this;
  }

  /**
   * Set the label for this style configuration.
   *
   * @param {string} label - The label to use.
   * @returns {Style}
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  /**
   * Specify the css classes to use with this style configuration.
   *
   * @example
   * .withCssClasses(
   *   cx.cssClass
   *     .withCssClass('text-red')
   *     .withLabel('Red'),
   *   cx.cssClass
   *     .withCssClass('text-blue')
   *     .withLabel('Blue'))
   * @see {@link withRawCssClasses} to set a raw value
   * @param {...CssClass} cssClasses - The css classes to use.
   * @returns {Style}
   */
  withCssClasses(...cssClasses) {
    this._cssClasses = cssClasses;
    return this;
  }

  /**
   * Set the raw css classes to use with this style.
   *
   * @example
   * .withRawCssClasses(
   *   {
   *     cssClass: 'text-red',
   *     label: 'Red'
   *   },
   *   {
   *     cssClass: 'text-blue',
   *     label: 'Blue'
   *   }
   * )
   * @param {...{}} cssClasses
   * @returns {Style}
   */
  withRawCssClasses(...cssClasses) {
    this._cssClasses = new RawValue(cssClasses);
    return this;
  }

  build() {
    let config = {};
    let style = {};

    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, style, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.CSS_CLASSES, style, builderObjectValue);

    config[this.identifier] = style;

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {Style}
   */
  clone(shallow) {
    return this._clone(new Style(), shallow);
  }
}
