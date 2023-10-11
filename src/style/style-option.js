import AbstractBuilder from '../abstract-builder';
import DesignJsonProperty from '../design-json-property';
import {builderObjectValue, identity} from '../browser-utility';
import RawValue from '../raw-value';

/** @typedef {import('./style').default} Style */
/** @typedef {import('./dom-manipulation').default} DomManipulation */

/**
 * This is the builder class for style option objects (required by the {@link Style|style} configuration object).
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
 * @since CX 23.2
 */
export default class StyleOption extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _styleId = undefined;
  /**
   * @type {string|NLS|undefined}
   * @private
   */
  _label = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _cssClass = undefined;
  /**
   * @type {RawValue|DomManipulation[]|undefined}
   * @private
   */
  _domManipulations = undefined;

  /**
   * @returns {string|undefined}
   */
  get styleId() {
    return this._styleId;
  }

  /**
   * @returns {string|NLS|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @returns {string|undefined}
   */
  get cssClass() {
    return this._cssClass;
  }

  /**
   * @returns {RawValue|[DomManipulation]|undefined}
   */
  get domManipulations() {
    return this._domManipulations;
  }

  /**
   * Specify the style id to use.
   *
   * @example
   * .withStyleId('text-red')
   * @param {string} styleId - The style id that identifies the style option.
   * @returns {StyleOption}
   */
  withStyleId(styleId) {
    this._styleId = styleId;
    return this;
  }

  /**
   * Specify the label to use with this style option.
   *
   * @param {string|NLS} label - The label to use.
   * @returns {StyleOption}
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  /**
   * Specify the CSS class to use.
   *
   * @example
   * .withCssClass('text-red')
   * @param {string} cssClass - The CSS class to use.
   * @returns {StyleOption}
   */
  withCssClass(cssClass) {
    this._cssClass = cssClass;
    return this;
  }

  /**
   * Specify the DOM manipulations to use with this style option.
   *
   * @example
   * .withDomManipulations(
   *   cx.domManipulation
   *     .withSelector('div.darkred-background')
   *     .withAttribute('style')
   *     .withValue('background-color: darkred;'),
   *   cx.domManipulation
   *     .withSelector('div.darkred-background p')
   *     .withAttribute('style')
   *     .withValue('color: white;'))
   * @see {@link withRawDomManipulations} to set a raw value
   * @param {...DomManipulation} domManipulations - The DOM manipulations to use.
   * @returns {StyleOption}
   */
  withDomManipulations(...domManipulations) {
    this._domManipulations = domManipulations;
    return this;
  }

  /**
   * Set the raw DOM manipulations to use with this style option.
   *
   * @example
   * .withRawDomManipulations(
   *   {
   *     selector: 'div.darkred-background',
   *     attribute: 'style',
   *     value: 'background-color: darkred;'
   *   },
   *   {
   *     selector: 'div.darkred-background p',
   *     attribute: 'style',
   *     value: 'color: white;'
   *   }
   * )
   * @param {...{}} domManipulations
   * @returns {StyleOption}
   */
  withRawDomManipulations(...domManipulations) {
    this._domManipulations = new RawValue(domManipulations);
    return this;
  }

  _buildInternal() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.STYLE_ID, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.CSS_CLASS, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.DOM_MANIPULATIONS, config, builderObjectValue)

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {StyleOption}
   */
  clone(shallow) {
    return this._clone(new StyleOption(), shallow);
  }
}
