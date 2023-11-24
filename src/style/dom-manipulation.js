import AbstractBuilder from '../abstract-builder';
import DesignJsonProperty from '../design-json-property';
import {identity} from '../browser-utility';

/** @typedef {import('./style-option').default} StyleOption */

/**
 * This is the builder class for DOM manipulation objects (required by the {@link StyleOption} configuration object).
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
export default class DomManipulation extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _selector = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _attribute = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _value = undefined;

  /**
   * @returns {string|undefined}
   */
  get selector() {
    return this._selector;
  }

  /**
   * @returns {string|undefined}
   */
  get attribute() {
    return this._attribute;
  }

  /**
   * @returns {string|undefined}
   */
  get value() {
    return this._value;
  }

  /**
   * Specify the selector to use with this DOM manipulation.
   * Any DOM selector can be used, e.g. tag, class, id.
   *
   * @example
   * .withSelector('div.btn-blue')
   * @param {string} selector - The selector to use.
   * @returns {DomManipulation}
   */
  withSelector(selector) {
    this._selector = selector;
    return this;
  }

  /**
   * Specify the attribute to use with this DOM manipulation.
   * Use the attribute 'style' to define CSS inline styles. Alternatively, set 'class' to specify CSS classes.
   *
   * @example
   * .withAttribute('style')
   * @param {string} attribute - The attribute to use.
   * @returns {DomManipulation}
   */
  withAttribute(attribute) {
    this._attribute = attribute;
    return this;
  }

  /**
   * Specify the value to use with this DOM manipulation.
   *
   * @example
   * .withValue('color: #16616d; border: 2px solid #16616d;')
   * @param {string} value - The value to use.
   * @returns {DomManipulation}
   */
  withValue(value) {
    this._value = value;
    return this;
  }

  _buildInternal() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.SELECTOR, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.ATTRIBUTE, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.VALUE, config, identity);

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {DomManipulation}
   */
  clone(shallow) {
    return this._clone(new DomManipulation(), shallow);
  }

  /**
   * Static helper method to create a new DOM manipulation object.
   *
   * @example
   * DomManipulation.create('div.btn-blue','style','color: #16616d; border: 2px solid #16616d;')
   * @param {string} selector - The selector to use.
   * @param {string} attribute - The attribute to use.
   * @param {string} value - The value to use.
   * @returns {DomManipulation}
   */
  static create(selector, attribute, value) {
    return new DomManipulation()
      .withSelector(selector)
      .withAttribute(attribute)
      .withValue(value);
  }
}
