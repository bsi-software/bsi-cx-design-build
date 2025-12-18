import AbstractBuilder from "../abstract-builder";
import { builderObjectValue, constantObjectValue, identity, uuid } from '../browser-utility';
import DesignJsonProperty from "../design-json-property";
import DesignJsonPropertyExtension from '../design-json-property-extension';
import RawValue from '../raw-value';
import TemplatePart from "./template-part/template-part";

/** @typedef {import('./icon').Icon} Icon */
/** @typedef {import('../style/style').default} Style */
/** @typedef {import('../dropzone/dropzone').default} Dropzone */

/**
 * TODO: MinVersion 25.1
 */
export default class TemplateElement extends AbstractBuilder {
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
   * @type {{}|undefined}
   * @private
   */
  _contextFile = {};
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
  _composite = undefined;
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
   * @type {RawValue|[TemplatePart]|undefined}
   * @private
   */
  _templateParts = undefined;
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
   * @returns {{}|undefined}
   */
  get contextFile() {
    return this._contextFile;
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
   * @returns {boolean|undefined}
   */
  get composite() {
    return this._composite;
  }

  /**
   * @returns {RawValue|Style[]|undefined}
   */
  get styleConfigs() {
    return this._styleConfigs;
  }

  /**
   * @returns {RawValue|TemplatePart[]|undefined}
   */
  get templateParts() {
    return this._templateParts;
  }

  /**
   * @returns {Dropzone[]|undefined}
   */
  get dropzones() {
    return this._dropzones;
  }

  /**
   * Set the ID of this template element.
   *
   * @param {string} elementId - The template element's ID.
   * @returns {TemplateElement}
   * @since BSI CX 25.1
   */
  withElementId(elementId) {
    this._elementId = elementId;
    return this;
  }

  /**
   * Set the label of the template element.
   *
   * @param {string|NLS} label - The label of the template element.
   * @returns {TemplateElement}
   * @since BSI CX 25.1
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  /**
   * Set the description of the template element.
   *
   * @param {string|NLS} description - The description of the template element.
   * @returns {TemplateElement}
   * @since BSI CX 25.1
   */
  withDescription(description) {
    this._description = description;
    return this;
  }

  /**
   * Set the template to use for this template element. Be aware, that you have to require the template.
   *
   * @example
   * .withFile(require('./template.hbs'))
   * @param {string} file - The reference to the required template.
   * @returns {TemplateElement}
   * @since BSI CX 25.1
   */
  withFile(file) {
    this._file = file;
    return this;
  }

  /**
   * Set the raw values to use for this template element. Be aware, that you have to require the context file.
   *
   * @example
   * .withRawContextFile(require('./context.json'))
   * @param {string} contextFile - The default values for the template parts of this element.
   * @returns {TemplateElement}
   * @since BSI CX 25.1
   */
  withRawContextFile(contextFile) {
    this._contextFile = contextFile;
    return this;
  }

  /**
   * Set the icon for this template element.
   *
   * @example
   * .withIcon(Icon.IMAGE)
   * @see {@link Icon} for available icons
   * @see {@link withRawIcon} to set a raw value
   * @param {Icon} icon - The icon for this template element.
   * @returns {TemplateElement}
   * @since BSI CX 25.1
   */
  withIcon(icon) {
    this._icon = icon;
    return this;
  }

  /**
   * Set the icon for this template element as raw value.
   *
   * @example
   * .withRawIcon('image')
   * @see {@link withIcon}
   * @param {string} icon - The raw icon for this template element.
   * @returns {TemplateElement}
   */
  withRawIcon(icon) {
    this._icon = new RawValue(icon);
    return this;
  }

  /**
   * Declare this template element as hidden.
   *
   * @example
   * .withHidden(true)
   * @param {boolean} hidden - The hidden state.
   * @returns {TemplateElement}
   * @since BSI CX 25.1
   */
  withHidden(hidden) {
    this._hidden = hidden;
    return this;
  }

  /**
   * Declare this template element as composite. (Doku 2.3.1.1)
   *
   * @example
   * .withComposite(true)
   * @param {boolean} composite - The composite state.
   * @returns {TemplateElement}
   * @since BSI CX 25.1
   */
  withComposite(composite) {
    this._composite = composite;
    return this;
  }

  /**
   * Declare this template element as archived.
   *
   * @example
   * .withArchived(true)
   * @param {boolean} archived - The archived state.
   * @returns {TemplateElement}
   * @since BSI CX 25.1
   */
  withArchived(archived) {
    this._archived = archived;
    return this;
  }

  /**
   * Declare this template element as archived for a minimum CX version.
   *
   * @example
   * .withArchivedMinVersion(Version.CX_25_1)
   * @param {Version} minVersion
   * @returns {TemplateElement}
   * @since BSI CX 25.1
   */
  withArchivedMinVersion(minVersion) {
    if (TARGET_VERSION >= minVersion) {
      this._archived = true;
    }
    return this;
  }

  /**
   * Declare the styles for this template element. You don't have to register the used styles in the design object
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
   *  let textElement = cx.TemplateElement
   *    .withStyleConfigs(
   *      textColorStyle,
   *      require('./styles/background-color'))
   * @see {@link withRawStyleConfigs} to set a raw value
   * @param {...Style} styleConfigs - Styles for this template element.
   * @returns {TemplateElement}
   * @since BSI CX 25.1
   */
  withStyleConfigs(...styleConfigs) {
    this._styleConfigs = styleConfigs;
    return this;
  }

  /**
   * Declare the styles for this template element as raw value. Be aware, that you just pass the name of the referenced
   * style rather than the style configuration itself (which is specified in the <code>styleConfigs</code> section
   * in your design specification. Use {@link Design#withStyleConfigs} to do so.
   *
   * @example
   * .withRawStyleConfigs('text-color', 'background-color')
   * @see {@link withStyleConfigs}
   * @param {...string} styleConfigs - Style config identifiers.
   * @returns {TemplateElement}
   * @since BSI CX 25.1
   */
  withRawStyleConfigs(...styleConfigs) {
    this._styleConfigs = new RawValue(styleConfigs);
    return this;
  }

  /**
 * Add styles to this template element. You don't have to register the used styles in the design object
 * using {@link Design#withStyleConfigs}. This is only necessary for raw style configs.
 *
 * @example
 *  let textElement = cx.TemplateElement
 *    .withAddStyleConfigs(
 *      require('./styles/background-color'))
 * @see {@link withRawStyleConfigs} to set a raw value
 * @param {...Style} styleConfigs - Styles for this template element.
 * @returns {TemplateElement}
 * @since BSI CX 25.1
 */
  withAddStyleConfigs(...styleConfigs) {
    this._styleConfigs = (this.styleConfigs || []).concat(styleConfigs);

    return this;
  }

  /**
 * Remove styles for this template element.
 *
 * @example
 *  let textElement = cx.TemplateElement
 *    .withRemoveStyleConfigs(
 *      require('./styles/background-color'))
 * @param {...Style} styleConfigs - Styles to be removed for this template element.
 * @returns {TemplateElement}
 * @since BSI CX 25.1
 */
  withRemoveStyleConfigs(...styleConfigs) {
    var styleIds = styleConfigs.map(style => style.identifier);
    this._styleConfigs = (this.styleConfigs || []).filter(style => !styleIds.includes(style.identifier));

    return this;
  }

  /**
   * Specify the parts of your template element.
   *
   * @example
   * .withParts(
   *   cx.part.image
   *     .withLabel('Image'),
   *   cx.part.plainText
   *     .withLabel('Description'))
   * @see {@link withRawParts} to set a raw value
   * @param {...TemplatePart} templateParts - The parts to use.
   * @returns {TemplateElement}
   * @since BSI CX 25.1
   */
  withTemplateParts(...templateParts) {
    this._templateParts = templateParts;
    return this;
  }

  /**
   * Set the parts of your template element as raw value.
   *
   * @example
   * .withRawTemplateParts(
   *   {
   *     partId: 'image',
   *     partContextId: 'image',
   *     label: 'Image'
   *   },
   *   {
   *     partId: 'plain-text',
   *     partContextId: 'plain-text',
   *     label: 'Description'
   *   }
   * )
   * @see {@link withTemplateParts}
   * @param {...{}} templateParts - The template parts as raw value.
   * @returns {TemplateElement}
   * @since BSI CX 25.1
   */
  withRawTemplateParts(...templateParts) {
    this._templateParts = new RawValue(templateParts);
    return this;
  }

  /**
   * Define the dropzones of this template element.
   *
   * @example
   * .withDropzones(
   *   cx.dropzone
   *     .withDropzone('a5142bca-448b-40c5-bdde-942f531fcd12')
   *     .withAllowedElements(
   *       require('./template-elements/basic/text'),
   *       require('./template-elements/basic/image'))
   *     .withMaxAllowedElements(1),
   *   cx.dropzone
   *     .withDropzone('3b369b8b-f1f6-4754-bb0f-e49a46c315e1')
   *     .withAllowedElements(
   *       require('./template-elements/basic/text'),
   *       require('./template-elements/basic/image'))
   *     .withMaxAllowedElements(1))
   * @param {...Dropzone} dropzones - The dropzones of this template element.
   * @returns {TemplateElement}
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
   *   require('./template-elements/basic/text'),
   *   require('./template-elements/basic/image'))
   * @param {string} id - The ID of the dropzone to extend (set with {@link Dropzone#withDropzone}).
   * @param {...TemplateElement} elements - The elements to add to the allowed elements list.
   * @returns {TemplateElement}
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
   *   require('./template-elements/basic/text'),
   *   require('./template-elements/basic/image'))
   * @param {string} id - The ID of the dropzone to reduce (set with {@link Dropzone#withDropzone}).
   * @param {...TemplateElement} elements - The elements to remove from the allowed elements list.
   * @returns {TemplateElement}
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
    let config = { type: "template-element" };

    this._applyPropertyIfDefined(DesignJsonProperty.ELEMENT_ID, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.DESCRIPTION, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.ICON, config, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.HIDDEN, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.ARCHIVED, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.COMPOSITE, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.FILE, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.TEMPLATE_PARTS, config, builderObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.STYLE_CONFIGS, config, v => v.identifier, false, true);
    this._applyPropertyIfDefined(DesignJsonPropertyExtension.DROPZONES, config, builderObjectValue);

    // Merge context from context file and template contexts
    this.templateParts.forEach(templatePart => {
      let partContextId = templatePart.partContextId;
      this._contextFile[partContextId] = this._contextFile[partContextId] || {};
      Object.assign(this._contextFile[partContextId], templatePart.prefill)
    })
    this._applyPropertyIfDefined(DesignJsonProperty.CONTEXT_FILE, config, identity);

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {TemplateElement}
   */
  clone(shallow) {
    return this._clone(new TemplateElement(), shallow);
  }

  /**
   * @return {boolean}
   * @private
   */
  _hasIncompatibleParts() {
    const templateParts = this.templateParts ?? [];

    return templateParts.some(templatePart => templatePart instanceof AbstractBuilder ? !templatePart.isCompatible() : false);
  }
}
