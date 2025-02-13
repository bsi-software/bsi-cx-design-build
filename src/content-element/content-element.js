import AbstractBuilder from '../abstract-builder';
import { builderObjectValue, constantObjectValue, identity, uuid } from '../browser-utility';
import DesignJsonProperty from '../design-json-property';
import DesignJsonPropertyExtension from '../design-json-property-extension';
import RawValue from '../raw-value';
import { TARGET as TARGET_VERSION } from '../version';

/** @typedef {import('../design/design').default} Design */
/** @typedef {import('../style/style').default} Style */
/** @typedef {import('./icon').Icon} Icon */
/** @typedef {import('./part/part').Part} Part */
/** @typedef {import('./content-element-group').default} ContentElementGroup */
/** @typedef {import('../dropzone/dropzone').default} Dropzone */

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
 *       cx.part.Image('Image', 'image-id'),
 *       cx.part.PlainText('Description', 'description-id')))
 */
export default class ContentElement extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _elementId = uuid();
  /**
   * @type {string|NLS|undefined}
   * @private
   */
  _label = undefined;
  /**
   * @type {string|NLS|undefined}
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
   * @type {boolean|undefined}
   * @private
   */
  _archived = undefined;
  /**
   * @type {RawValue|[Style]|undefined}
   * @private
   */
  _styleConfigs = undefined;
  /**
   * @type {RawValue|[Part]|undefined}
   * @private
   */
  _parts = undefined;
  /**
   * @type {Dropzone[]|undefined}
   * @private
   */
  _dropzones = undefined;

  /**
   * @returns {string|undefined}
   */
  get elementId() {
    return this._elementId;
  }

  /**
   * @returns {string|NLS|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @returns {string|NLS|undefined}
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
   * @returns {boolean|undefined}
   */
  get archived() {
    return this._archived;
  }

  /**
   * @returns {RawValue|Style[]|undefined}
   */
  get styleConfigs() {
    return this._styleConfigs;
  }

  /**
   * @returns {RawValue|Part[]|undefined}
   */
  get parts() {
    return this._parts;
  }

  /**
   * @returns {Dropzone[]|undefined}
   */
  get dropzones() {
    return this._dropzones;
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
   * @param {string|NLS} label - The label of the content element.
   * @returns {ContentElement}
   * @since Studio 1.0
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  /**
   * Set the description of the content element.
   *
   * @param {string|NLS} description - The description of the content element.
   * @returns {ContentElement}
   * @since Studio 1.0
   */
  withDescription(description) {
    this._description = description;
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
   * Declare this content element as archived.
   *
   * @example
   * .withArchived(true)
   * @param {boolean} archived - The archived state.
   * @returns {ContentElement}
   * @since BSI CX 23.2
   */
  withArchived(archived) {
    this._archived = archived;
    return this;
  }

  /**
   * Declare this content element as archived for a minimum CX version.
   *
   * @example
   * .withArchivedMinVersion(Version.CX_23_2)
   * @param {Version} minVersion
   * @returns {ContentElement}
   * @since BSI CX 23.2
   */
  withArchivedMinVersion(minVersion) {
    if (TARGET_VERSION >= minVersion) {
      this._archived = true;
    }
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
 * Add styles to this content element. You don't have to register the used styles in the design object
 * using {@link Design#withStyleConfigs}. This is only necessary for raw style configs.
 *
 * @example
 *  let textElement = cx.contentElement
 *    .withAddStyleConfigs(
 *      require('./styles/background-color'))
 * @see {@link withRawStyleConfigs} to set a raw value
 * @param {...Style} styleConfigs - Styles for this content element.
 * @returns {ContentElement}
 * @since Studio 1.1
 */
  withAddStyleConfigs(...styleConfigs) {
    this._styleConfigs = (this.styleConfigs || []).concat(styleConfigs);
    
    return this;
  }

  /**
 * Remove styles for this content element.
 *
 * @example
 *  let textElement = cx.contentElement
 *    .withRemoveStyleConfigs(
 *      require('./styles/background-color'))
 * @param {...Style} styleConfigs - Styles to be removed for this content element.
 * @returns {ContentElement}
 * @since Studio 1.1
 */
  withRemoveStyleConfigs(...styleConfigs) {
    var styleIds = styleConfigs.map(style => style.identifier);
    this._styleConfigs = (this.styleConfigs || []).filter(style => !styleIds.includes(style.identifier));
    
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
   * @param {...Part} parts - The parts to use.
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

  /**
   * Define the dropzones of this content element.
   *
   * @example
   * .withDropzones(
   *   cx.dropzone
   *     .withDropzone('a5142bca-448b-40c5-bdde-942f531fcd12')
   *     .withAllowedElements(
   *       require('./content-elements/basic/text'),
   *       require('./content-elements/basic/image'))
   *     .withMaxAllowedElements(1),
   *   cx.dropzone
   *     .withDropzone('3b369b8b-f1f6-4754-bb0f-e49a46c315e1')
   *     .withAllowedElements(
   *       require('./content-elements/basic/text'),
   *       require('./content-elements/basic/image'))
   *     .withMaxAllowedElements(1))
   * @param {...Dropzone} dropzones - The dropzones of this content element.
   * @returns {ContentElement}
   */
  withDropzones(...dropzones) {
    this._dropzones = dropzones;
    return this;
  }

  /**
   * Extend the allowed elements list of a defined dropzone. Be aware that this only works when you define your allowed
   * elements by using the provided builder class with the {@link Dropzone#withAllowedElements} method.
   *
   * @example
   * .withExtendedDropzone(
   *   'a5142bca-448b-40c5-bdde-942f531fcd12',
   *   require('./content-elements/basic/text'),
   *   require('./content-elements/basic/image'))
   * @param {string} id - The ID of the dropzone to extend (set with {@link Dropzone#withDropzone}).
   * @param {...ContentElement} elements - The elements to add to the allowed elements list.
   * @returns {ContentElement}
   */
  withExtendedDropzone(id, ...elements) {
    let dropzone = this._dropzones?.find(dropzone => dropzone.dropzone === id);

    if (dropzone) {
      dropzone.withAllowedElements(...dropzone.allowedElements, ...elements);
    }

    return this;
  }

  /**
   * Reduces the allowed elements list of a defined dropzone. Be aware that this only works when you define your allowed
   * elements by using the provided builder class with the {@link Dropzone#withAllowedElements} method.
   *
   * @example
   * .withReducedDropzone(
   *   'a5142bca-448b-40c5-bdde-942f531fcd12',
   *   require('./content-elements/basic/text'),
   *   require('./content-elements/basic/image'))
   * @param {string} id - The ID of the dropzone to reduce (set with {@link Dropzone#withDropzone}).
   * @param {...ContentElement} elements - The elements to remove to the allowed elements list.
   * @returns {ContentElement}
   */
  withReducedDropzone(id, ...elements) {
    let dropzone = this._dropzones?.find(dropzone => dropzone.dropzone === id);

    if (dropzone) {
      let removeIds = elements.map(el => el.elementId);
      let allowedElements = dropzone.allowedElements;
      allowedElements = allowedElements.filter(el => !removeIds.includes(el.elementId));
      dropzone.withAllowedElements(...allowedElements);
    }

    return this;
  }

  isCompatible() {
    return super.isCompatible() && !this._hasIncompatibleParts();
  }

  _buildInternal() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.ELEMENT_ID, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.DESCRIPTION, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.ICON, config, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.HIDDEN, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.ARCHIVED, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.FILE, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.PARTS, config, builderObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.STYLE_CONFIGS, config, v => v.identifier, false, true);
    this._applyPropertyIfDefined(DesignJsonPropertyExtension.DROPZONES, config, builderObjectValue);

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

  /**
   * @return {boolean}
   * @private
   */
  _hasIncompatibleParts() {
    const parts = this.parts ?? [];

    return parts.findIndex(part => part instanceof AbstractBuilder ? !part.isCompatible() : false) !== -1;
  }
}
