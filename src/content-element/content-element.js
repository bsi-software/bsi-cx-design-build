import AbstractBuilder from '../abstract-builder';
import DesignJsonProperty from '../design-json-property';
import {builderObjectValue, constantObjectValue, identity, uuid} from '../browser-utility';
import RawValue from '../raw-value';

/** @typedef {import('../design/design').default} Design */
/** @typedef {import('../style/style').default} Style */
/** @typedef {import('./icon').Icon} Icon */
/** @typedef {import('./part/abstract-part').default} AbstractPart */
/** @typedef {import('./content-element-group').default} ContentElementGroup */

/**
 * This is the builder class for content elements. Pass objects of this class to {@link ContentElementGroup#withContentElements}.
 *
 * @example
 * .withContentElements(
 *   cx.contentElement
 *     .withElementId('image-with-text')
 *     .withLabel('Image with text')
 *     .withDescription('Displays an image with an optional text.')
 *     .withFile(require('./template.twig'))
 *     .withIcon(Icon.IMAGE)
 *     .withParts(
 *       cx.part.image
 *         .withLabel('Image'),
 *       cx.part.plainText
 *         .withLabel('Description')))
 */
export default class ContentElement extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _elementId = uuid();
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
   * @type {RawValue|Icon|undefined}
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
   * @returns {string|undefined}
   */
  get elementId() {
    return this._elementId;
  }

  /**
   * @returns {string|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @returns {string|undefined}
   */
  get description() {
    return this._description;
  }

  /**
   * @returns {{}|undefined}
   */
  get file() {
    return this._file;
  }

  /**
   * @returns {RawValue|Icon|undefined}
   */
  get icon() {
    return this._icon;
  }

  /**
   * @returns {boolean|undefined}
   */
  get hidden() {
    return this._hidden;
  }

  /**
   * @returns {RawValue|Style[]|undefined}
   */
  get styleConfigs() {
    return this._styleConfigs;
  }

  /**
   * @returns {RawValue|AbstractPart[]|undefined}
   */
  get parts() {
    return this._parts;
  }

  /**
   * Set the ID of this content element.
   *
   * @param {string} elementId - The content element's ID.
   * @returns {ContentElement}
   * @since Studio 1.0
   */
  withElementId(elementId) {
    this._elementId = elementId;
    return this;
  }

  /**
   * Set the label of the content element.
   *
   * @param {string} label - The label of the content element.
   * @returns {ContentElement}
   * @since Studio 1.0
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  /**
   * Set the template to use for this content element. Be aware, that you have to require the template.
   *
   * @example
   * .withFile(require('./template.twig'))
   * @param {string} file - The reference to the required template.
   * @returns {ContentElement}
   * @since Studio 1.0
   */
  withFile(file) {
    this._file = file;
    return this;
  }

  /**
   * Set the icon for this content element.
   *
   * @example
   * .withIcon(Icon.IMAGE)
   * @see {@link Icon} for available icons
   * @see {@link withRawIcon} to set a raw value
   * @param {Icon} icon - The icon for this content element.
   * @returns {ContentElement}
   * @since Studio 1.0
   */
  withIcon(icon) {
    this._icon = icon;
    return this;
  }

  /**
   * Set the icon for this content element as raw value.
   *
   * @example
   * .withRawIcon('image')
   * @see {@link withIcon}
   * @param {string} icon - The raw icon for this content element.
   * @returns {ContentElement}
   */
  withRawIcon(icon) {
    this._icon = new RawValue(icon);
    return this;
  }

  /**
   * Declare this content element as hidden.
   *
   * @example
   * .withHidden(true)
   * @param {boolean} hidden - The hidden state.
   * @returns {ContentElement}
   * @since BSI CX 1.3
   */
  withHidden(hidden) {
    this._hidden = hidden;
    return this;
  }

  /**
   * Declare the styles for this content element. You don't have to register the used styles in the design object
   * using {@link Design#withStyleConfigs}. This is only necessary for raw style configs.
   *
   * @example
   * let textColorStyle = cx.style
   *   .withIdentifier('text-color')
   *   .withLabel('Text Color')
   *   .withCssClasses(
   *     cx.cssClass
   *       .withCssClass('blue-text')
   *       .withLabel('Blue'),
   *     cx.cssClass
   *       .withCssClass('red-text')
   *       .withLabel('Red'))
   *  let textElement = cx.contentElement
   *    .withStyleConfigs(
   *      textColorStyle,
   *      require('./styles/background-color'))
   * @see {@link withRawStyleConfigs} to set a raw value
   * @param {...Style} styleConfigs - Styles for this content element.
   * @returns {ContentElement}
   * @since Studio 1.1
   */
  withStyleConfigs(...styleConfigs) {
    this._styleConfigs = styleConfigs;
    return this;
  }

  /**
   * Declare the styles for this content element as raw value. Be aware, that you just pass the name of the referenced
   * style rather than the style configuration itself (which is specified in the <code>styleConfigs</code> section
   * in your design specification. Use {@link Design#withStyleConfigs} to do so.
   *
   * @example
   * .withRawStyleConfigs('text-color', 'background-color')
   * @see {@link withStyleConfigs}
   * @param {...string} styleConfigs - Style config identifiers.
   * @returns {ContentElement}
   * @since Studio 1.1
   */
  withRawStyleConfigs(...styleConfigs) {
    this._styleConfigs = new RawValue(styleConfigs);
    return this;
  }

  /**
   * Specify the parts of your content element.
   *
   * @example
   * .withParts(
   *   cx.part.image
   *     .withLabel('Image'),
   *   cx.part.plainText
   *     .withLabel('Description'))
   * @see {@link withRawParts} to set a raw value
   * @param {...AbstractPart} parts - The parts to use.
   * @returns {ContentElement}
   * @since Studio 1.0
   */
  withParts(...parts) {
    this._parts = parts;
    return this;
  }

  /**
   * Set the parts of your content element as raw value.
   *
   * @example
   * .withRawParts(
   *   {
   *     partId: 'image',
   *     label: 'Image'
   *   },
   *   {
   *     partId: 'plain-text',
   *     label: 'Description'
   *   }
   * )
   * @see {@link withParts}
   * @param {...{}} parts - The parts as raw value.
   * @returns {ContentElement}
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
    this._applyPropertyIfDefined(DesignJsonProperty.STYLE_CONFIGS, config, v => v.identifier, false, true);

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {ContentElement}
   */
  clone(shallow) {
    return this._clone(new ContentElement(), shallow);
  }
}
