import AbstractBuilder from '../abstract-builder';
import Style from '../style/style';
import {Icon} from './icon';
import AbstractPart from './part/abstract-part';
import DesignJsonProperty from '../design-json-property';
import {constantObjectValue, identity, scalarIdentity} from '../extractor';

export default class ContentElement extends AbstractBuilder {
  constructor() {
    super();
    /**
     * @type {string|undefined}
     * @private
     */
    this._elementId = undefined;
    /**
     * @type {string|undefined}
     * @private
     */
    this._label = undefined;
    /**
     * @type {string|undefined}
     * @private
     */
    this._description = undefined;
    /**
     * @type {{}|undefined}
     * @private
     */
    this._file = undefined;
    /**
     * @type {string|undefined}
     * @private
     */
    this._icon = undefined;
    /**
     * @type {boolean|undefined}
     * @private
     */
    this._hidden = undefined;
    /**
     * @type {[Style]|undefined}
     * @private
     */
    this._styleConfigs = undefined;
    /**
     * @type {[AbstractPart]|undefined}
     * @private
     */
    this._parts = undefined;
  }

  /**
   * @return {string|undefined}
   */
  get elementId() {
    return this._elementId;
  }

  /**
   * @return {string|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @return {string|undefined}
   */
  get description() {
    return this._description;
  }

  /**
   * @return {{}|undefined}
   */
  get file() {
    return this._file;
  }

  /**
   * @return {Icon|undefined}
   */
  get icon() {
    return this._icon;
  }

  /**
   * @return {boolean|undefined}
   */
  get hidden() {
    return this._hidden;
  }

  /**
   * @return {Style[]|undefined}
   */
  get styleConfigs() {
    return this._styleConfigs;
  }

  /**
   * @return {AbstractPart[]|undefined}
   */
  get parts() {
    return this._parts;
  }

  /**
   * @param {string} elementId
   * @return {ContentElement}
   * @since 1.0
   */
  withElementId(elementId) {
    this._elementId = elementId;
    return this;
  }

  /**
   * @param {string} label
   * @return {ContentElement}
   * @since 1.0
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  /**
   * @param {string} file
   * @return {ContentElement}
   * @since 1.0
   */
  withFile(file) {
    this._file = file;
    return this;
  }

  /**
   * @param {Icon} icon
   * @return {ContentElement}
   * @since 1.0
   */
  withIcon(icon) {
    this._icon = icon;
    return this;
  }

  /**
   * @param {boolean} hidden
   * @return {ContentElement}
   * @since 1.3
   */
  withHidden(hidden) {
    this._hidden = hidden;
    return this;
  }

  /**
   * @param {Style} styleConfigs
   * @return {ContentElement}
   * @since 1.1
   */
  withStyleConfigs(...styleConfigs) {
    this._styleConfigs = styleConfigs;
    return this;
  }

  /**
   * @param {AbstractPart} parts
   * @return {ContentElement}
   * @since 1.0
   */
  withParts(...parts) {
    this._parts = parts;
    return this;
  }

  build() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.ELEMENT_ID, config, scalarIdentity);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, scalarIdentity);
    this._applyPropertyIfDefined(DesignJsonProperty.DESCRIPTION, config, scalarIdentity);
    this._applyPropertyIfDefined(DesignJsonProperty.ICON, config, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.HIDDEN, config, scalarIdentity);
    this._applyPropertyIfDefined(DesignJsonProperty.FILE, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.PARTS, config, part => part.build());
    this._applyPropertyIfDefined(DesignJsonProperty.STYLE_CONFIGS, config, style => constantObjectValue(style));

    return config;
  }
}
