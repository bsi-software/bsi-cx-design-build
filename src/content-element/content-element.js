import AbstractBuilder from '../abstract-builder';
import Style from '../style/style';
import {Icon} from './icon';
import AbstractPart from './part/abstract-part';
import DesignJsonProperty from '../design-json-property';
import {builderObjectValue, constantObjectValue, identity} from '../browser-utility';
import RawValue from '../raw-value';

export default class ContentElement extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _elementId = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _label = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _description = undefined;
  /**
   * @type {{}|undefined}
   * @private
   */
  _file = undefined;
  /**
   * @type {Icon|undefined}
   * @private
   */
  _icon = undefined;
  /**
   * @type {boolean|undefined}
   * @private
   */
  _hidden = undefined;
  /**
   * @type {RawValue|[Style]|undefined}
   * @private
   */
  _styleConfigs = undefined;
  /**
   * @type {RawValue|[AbstractPart]|undefined}
   * @private
   */
  _parts = undefined;

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
   * @return {RawValue|Style[]|undefined}
   */
  get styleConfigs() {
    return this._styleConfigs;
  }

  /**
   * @return {RawValue|AbstractPart[]|undefined}
   */
  get parts() {
    return this._parts;
  }

  /**
   * @param {string} elementId
   * @return {ContentElement}
   * @since Studio 1.0
   */
  withElementId(elementId) {
    this._elementId = elementId;
    return this;
  }

  /**
   * @param {string} label
   * @return {ContentElement}
   * @since Studio 1.0
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  /**
   * @param {string} file
   * @return {ContentElement}
   * @since Studio 1.0
   */
  withFile(file) {
    this._file = file;
    return this;
  }

  /**
   * @param {Icon} icon
   * @return {ContentElement}
   * @since Studio 1.0
   */
  withIcon(icon) {
    this._icon = icon;
    return this;
  }

  /**
   * @param {boolean} hidden
   * @return {ContentElement}
   * @since BSI CX 1.3
   */
  withHidden(hidden) {
    this._hidden = hidden;
    return this;
  }

  /**
   * @param {...Style} styleConfigs
   * @return {ContentElement}
   * @since Studio 1.1
   */
  withStyleConfigs(...styleConfigs) {
    this._styleConfigs = styleConfigs;
    return this;
  }

  /**
   * @param {...string} styleConfigs
   * @return {ContentElement}
   * @since Studio 1.1
   */
  withRawStyleConfigs(...styleConfigs) {
    this._styleConfigs = new RawValue(styleConfigs);
    return this;
  }

  /**
   * @param {...AbstractPart} parts
   * @return {ContentElement}
   * @since Studio 1.0
   */
  withParts(...parts) {
    this._parts = parts;
    return this;
  }

  /**
   * @param {...{}} parts
   * @return {ContentElement}
   * @since Studio 1.0
   */
  withRawParts(...parts) {
    this._parts = new RawValue(parts);
    return this;
  }

  build() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.ELEMENT_ID, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.DESCRIPTION, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.ICON, config, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.HIDDEN, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.FILE, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.PARTS, config, builderObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.STYLE_CONFIGS, config, v => v.identifier);

    return config;
  }

  /**
   * @param {boolean} [shallow=true]
   * @return {ContentElement}
   */
  clone(shallow) {
    return this._clone(new ContentElement(), shallow);
  }
}
