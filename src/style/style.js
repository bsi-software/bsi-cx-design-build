import DesignJsonProperty from '../design-json-property';
import AbstractBuilder from '../abstract-builder';
import CssClass from './css-class';
import {builderObjectValue, identity} from '../extractor';

/**
 * @since 1.1
 */
export default class Style extends AbstractBuilder {
  constructor() {
    super();
    /**
     * @type {string|undefined}
     * @private
     */
    this._identifier = undefined;
    /**
     * @type {string|undefined}
     * @private
     */
    this._label = undefined;
    /**
     * @type {CssClass[]|undefined}
     * @private
     */
    this._cssClasses = undefined;
  }

  /**
   * @return {string|undefined}
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * @return {string|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @return {[CssClass]|undefined}
   */
  get cssClasses() {
    return this._cssClasses;
  }

  /**
   * @param {string} identifier
   * @returns {Style}
   */
  withIdentifier(identifier) {
    this._identifier = identifier;
    return this;
  }

  /**
   * @param {string} label
   * @returns {Style}
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  /**
   * @param {CssClass} cssClasses
   * @returns {Style}
   */
  withCssClasses(...cssClasses) {
    this._cssClasses = cssClasses;
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
}
