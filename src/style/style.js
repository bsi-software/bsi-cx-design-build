import DesignJsonProperty from '../design-json-property';
import AbstractBuilder from '../abstract-builder';
import {builderObjectValue, identity, uuid} from '../browser-utility';
import RawValue from '../raw-value';

/** @typedef {import('./css-class').default} CssClass */

/**
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
   * @param {...CssClass} cssClasses
   * @returns {Style}
   */
  withCssClasses(...cssClasses) {
    this._cssClasses = cssClasses;
    return this;
  }

  /**
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
   * @param {boolean} [shallow=true]
   * @returns {Style}
   */
  clone(shallow) {
    return this._clone(new Style(), shallow);
  }
}
