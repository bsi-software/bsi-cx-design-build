import DesignJsonProperty from '../design-json-property';
import AbstractBuilder from '../abstract-builder';
import {builderObjectValue, identity, uuid} from '../browser-utility';
import RawValue from '../raw-value';

/** @typedef {import('./css-class').default} CssClass */
/** @typedef {import('./style-option').default} StyleOption */

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
 *
 * With CX 23.2 an extended style format was introduced,
 * which makes it possible to define styles using either CSS classes or DOM manipulations, or a combination of both.
 *
 * @example
 * module.exports = cx.style
 *   .withIdentifier('background-color')
 *   .withLabel('Background Color')
 *   .withStyleOptions(
 *     cx.styleOption
 *       .withStyleId('darkred-background-5vLqPX')
 *       .withLabel('Darkred')
 *       .withCssClass('darkred-background')
 *       .withDomManipulations(
 *         cx.domManipulation
 *           .withSelector('div.darkred-background')
 *           .withAttribute('style')
 *           .withValue('background-color: darkred;'),
 *         cx.domManipulation
 *           .withSelector('div.darkred-background p')
 *           .withAttribute('style')
 *           .withValue('color: white;')),
 *     cx.styleOption
 *       .withStyleId('lightblue-background-9ftMNF')
 *       .withLabel('Lightblue')
 *       .withCssClass('lightblue-background')
 *       .withDomManipulations(
 *         cx.domManipulation
 *           .withSelector('div.lightblue-background')
 *           .withAttribute('style')
 *           .withValue('background-color: lightblue;'),
 *         cx.domManipulation
 *           .withSelector('div.lightblue-background p')
 *           .withAttribute('style')
 *           .withValue('color: black;')));
 *
 * @since Studio 1.1
 */
export default class Style extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _identifier = uuid();
  /**
   * @type {string|NLS|undefined}
   * @private
   */
  _label = undefined;
  /**
   * @type {RawValue|CssClass[]|undefined}
   * @private
   */
  _cssClasses = undefined;
  /**
   * @type {RawValue|StyleOption[]|undefined}
   * @private
   */
  _styles = undefined;

  /**
   * @returns {string|undefined}
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * @returns {string|NLS|undefined}
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
   * @returns {RawValue|[StyleOption]|undefined}
   */
  get styles() {
    return this._styles;
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
   * @param {string|NLS} label - The label to use.
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

  /**
   * Specify the style options to use with this style configuration.
   *
   * @example
   * .withStyleOptions(
   *   cx.styleOption
   *     .withStyleId('darkred-background-5vLqPX')
   *     .withLabel('Darkred')
   *     .withCssClass('darkred-background')
   *     .withDomManipulations(
   *       cx.domManipulation
   *         .withSelector('div.darkred-background')
   *         .withAttribute('style')
   *         .withValue('background-color: darkred;'),
   *       cx.domManipulation
   *         .withSelector('div.darkred-background p')
   *         .withAttribute('style')
   *         .withValue('color: white;')),
   *   cx.styleOption
   *     .withStyleId('lightblue-background-9ftMNF')
   *     .withLabel('Lightblue')
   *     .withCssClass('lightblue-background')
   *     .withDomManipulations(
   *       cx.domManipulation
   *         .withSelector('div.lightblue-background')
   *         .withAttribute('style')
   *         .withValue('background-color: lightblue;'),
   *       cx.domManipulation
   *         .withSelector('div.lightblue-background p')
   *         .withAttribute('style')
   *         .withValue('color: black;')))
   * @see {@link withRawStyleOptions} to set a raw value
   * @param {...StyleOption} styles - The style options to use.
   * @returns {Style}
   */
  withStyleOptions(...styles) {
    this._styles = styles;
    return this;
  }

  /**
   * Set the raw style options to use with this style.
   *
   * @example
   * .withRawStyleOptions(
   *   {
   *     styleId: 'darkred-background-5vLqPX',
   *     label: 'Darkred',
   *     cssClass: 'darkred-background',
   *     domManipulations: [
   *       { selector: 'div.darkred-background', attribute: 'style', value: 'background-color: darkred;' },
   *       { selector: 'div.darkred-background p', attribute: 'style', value: 'color: white;' }
   *     ]
   *   },
   *   {
   *     styleId: 'lightblue-background-9ftMNF',
   *     label: 'Lightblue',
   *     cssClass: 'lightblue-background',
   *     domManipulations: [
   *       { selector: 'div.lightblue-background', attribute: 'style', value: 'background-color: lightblue;' },
   *       { selector: 'div.lightblue-background p', attribute: 'style', value: 'color: black;' }
   *     ]
   *   }
   * )
   * @param {...{}} styles
   * @returns {Style}
   */
  withRawStyleOptions(...styles) {
    this._styles = new RawValue(styles);
    return this;
  }

  _buildInternal() {
    let config = {};
    let style = {};

    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, style, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.CSS_CLASSES, style, builderObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.STYLES, style, builderObjectValue);

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
