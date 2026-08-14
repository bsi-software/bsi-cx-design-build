import AbstractBuilder from "../abstract-builder";
import { builderObjectValue, constantObjectValue, identity, uuid } from '../browser-utility';
import DesignJsonProperty from "../design-json-property";
import DesignJsonPropertyExtension from '../design-json-property-extension';
import ContextScope from '../context-scope';
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
   * @type {RawValue|TemplatePart[]}
   * @private
   */
  _templateParts = [];
  /**
   * @type {Dropzone[]}
   * @private
   */
  _dropzones = [];

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
   * Extend the allowed elements list of all dropzones. Be aware that this only works when you define your allowed
   * elements by using the provided builder class with the {@link Dropzone#withAllowedElements} method.
   * 
   * In case you want to extend the allowed elements list of a specific dropzone, use {@link withExtendedDropzone} instead.
   *
   * @example
   * .withExtendAllDropzones(
   *   require('./template-elements/basic/text'),
   *   require('./template-elements/basic/image'))
   * 
   * @param {...TemplateElement} elements - The elements to add to the allowed elements list.
   * @returns {TemplateElement}
   */
  withExtendAllDropzones(...elements) {
    this._dropzones?.forEach(dropzone => {
      dropzone.withAllowedElements(...dropzone.allowedElements, ...elements);
    });

    return this;
  }

  /**
   * Extend the allowed elements list of a defined dropzone. Be aware that this only works when you define your allowed
   * elements by using the provided builder class with the {@link Dropzone#withAllowedElements} method.
   * 
   * In case you want to extend the allowed elements list of all dropzones, use {@link withExtendAllDropzones} instead.
   *
   * @example
   * .withExtendedDropzone(
   *   'a5142bca-448b-40c5-bdde-942f531fcd12',
   *   require('./template-elements/basic/text'),
   *   require('./template-elements/basic/image'))
   * 
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

  /**
   * Place a content element into one of the dropzones of this element, see
   * {@link Dropzone#withContentElement}.
   *
   * @param {string} dropzoneId - The ID of the dropzone to place the element into.
   * @param {TemplateElement} contentElement - The content element to place.
   * @param {function(TemplateElement):void} [configure] - Applied to the clone of the element.
   * @returns {TemplateElement}
   */
  addToDropzone(dropzoneId, contentElement, configure) {
    let dropzone = this._getDropzone(dropzoneId);

    dropzone.withContentElement(contentElement, configure);

    return this;
  }

  /**
   * Returns the requested template part of this element by its part context ID, if it exists.
   *
   * @param {string} partContextId - The context ID of the template part (eg 'link-1wfD2H').
   * @returns {TemplatePart|undefined}
   */
  templatePart(partContextId) {
    if (!Array.isArray(this._templateParts)) {
      return undefined;
    }

    return this._templateParts.find(templatePart => templatePart.partContextId === partContextId);
  }

  /**
   * Set the prefill of one template part of this element. Meant for a single occurrence of a nested
   * content element, see {@link Dropzone#withContentElement}.
   *
   * @param {string} partContextId - The context ID of the template part (eg 'link-1wfD2H').
   * @param {{}} prefill - The prefill of that template part.
   * @returns {TemplateElement}
   */
  withTemplatePartPrefill(partContextId, prefill) {
    let templatePart = this.templatePart(partContextId);

    if (!templatePart) {
      throw new Error(`Unknown template part "${partContextId}" on template element `
        + `"${this.elementId}". Template parts have to be defined with withTemplateParts() first.`);
    }
    templatePart.withRawPrefill(prefill);

    return this;
  }

  isCompatible() {
    return super.isCompatible() && !this._hasIncompatibleParts();
  }

  /**
   * The context scope of this element itself. A nested element is scoped by its parent, which knows
   * the dropzone and the position - so only the two cases of a root element are decided here:
   *
   * <ul>
   *   <li>own template parts <em>and</em> nested content elements: the artificial scope 'root',
   *   which keeps the own parts separable from the nested ones,</li>
   *   <li>anything else: no scope at all, the part context IDs are the top level properties of the
   *   context file and the variables of the template stay unprefixed.</li>
   * </ul>
   *
   * @returns {string|undefined}
   */
  createAbsoluteContextScope() {
    return this._hasTemplateParts() && this._hasContentElements() ? ContextScope.ROOT : undefined;
  }

  /**
   * The context scope of a content element nested in one of the dropzones of this element. The scope
   * of the element itself is the prefix, so the scope of an element nested two levels deep reads
   * 'dzl_0_template-button_dzr_0' - unique within the context file it belongs to.
   *
   * @param {string|undefined} scope - The context scope of this element.
   * @param {Dropzone} dropzone - The dropzone the nested element sits in.
   * @param {number} index - The position of the nested element within that dropzone.
   * @returns {string}
   * @private
   */
  _createNestedContextScope(scope, dropzone, index) {
    let segment = ContextScope.segment(dropzone.contextScopeName, index);

    // 'root' is the scope of the own template parts of a root element, not a path to its children.
    if (!scope || scope === ContextScope.ROOT) {
      return segment;
    }

    return `${scope}_${this.elementId}_${segment}`;
  }

  /**
   * Renders the template of this content element: the nested content elements of every dropzone are
   * rendered into it, and the context scope placeholders are replaced with the scope of the element
   * they belong to. The result is the .hbs file BSI CX renders a second time at runtime.
   *
   * @param {string|undefined} [scope] - The context scope of this element, computed by its parent.
   * @returns {string}
   */
  render(scope) {
    let content = TemplateElement._unwrapTemplateModule(this._file?.content ?? '');

    content = content.replace(ContextScope.DROPZONE,
      (placeholder, dropzoneId) => this._renderDropzone(dropzoneId, scope));

    return ContextScope.apply(content, scope);
  }

  /**
   * A required template file is the source of a webpack module ('module.exports = "..."'), the
   * plugin evaluates it while it exports the design. A nested content element is rendered into its
   * parent long before that, so the template of every element is unwrapped here instead.
   *
   * @param {string} content
   * @returns {string} the template, or the content unchanged if it is not a module of a template
   * @private
   */
  static _unwrapTemplateModule(content) {
    let templateModule = /^module\.exports\s*=\s*([\s\S]*?);?\s*$/.exec(content);

    if (!templateModule) {
      return content;
    }

    try {
      return JSON.parse(templateModule[1]);
    } catch (ignored) {
      // Not a template exported as a string literal - leave it to the plugin.
      return content;
    }
  }

  /**
   * @param {string} dropzoneId
   * @param {string|undefined} scope - The context scope of this element.
   * @returns {string}
   * @private
   */
  _renderDropzone(dropzoneId, scope) {
    let dropzone = this._getDropzone(dropzoneId);

    return dropzone.contentElements
      .map((contentElement, index) =>
        contentElement.render(this._createNestedContextScope(scope, dropzone, index)))
      .join('\n');
  }

  /**
   * The context file of this content element: the prefill of its own template parts and of all
   * nested content elements, each below its context scope.
   *
   * <pre>
   * {
   *   "root": {"link-1wfD2H": {"url": "..."}},
   *   "dzl_0": {"multiline-plain-text-wmiRti": {"value": "..."}}
   * }
   * </pre>
   *
   * @returns {{}}
   */
  exportDesignContextFile() {
    let contexts = {};

    this.collectDesignContexts(contexts, this.createAbsoluteContextScope());

    return contexts;
  }

  /**
   * Collects the prefill of this element and of all nested ones into <code>contexts</code> - one flat
   * object keyed by absolute context scope, which is exactly the path the rendered template expects.
   *
   * @param {{}} contexts - The context file being built, passed down the whole hierarchy.
   * @param {string|undefined} scope - The context scope of this element.
   */
  collectDesignContexts(contexts, scope) {
    let scopedContexts = scope ? (contexts[scope] = contexts[scope] ?? {}) : contexts;

    if (Array.isArray(this._templateParts)) {
      this._templateParts
        .filter(templatePart => Object.keys(templatePart.prefill ?? {}).length > 0)
        .forEach(templatePart => {
          // A copy: the context file must not alias the prefill of the template part.
          scopedContexts[templatePart.partContextId] =
            Object.assign(scopedContexts[templatePart.partContextId] ?? {}, templatePart.prefill);
        });
    }

    this._dropzones.forEach(dropzone => dropzone.contentElements
      .forEach((contentElement, index) => contentElement
        .collectDesignContexts(contexts, this._createNestedContextScope(scope, dropzone, index))));
  }

  /**
   * @param {string} dropzoneId
   * @returns {Dropzone}
   * @private
   */
  _getDropzone(dropzoneId) {
    let dropzone = this._dropzones?.find(dropzone => dropzone.dropzone === dropzoneId);

    if (!dropzone) {
      throw new Error(`Unknown dropzone "${dropzoneId}" on template element "${this.elementId}". `
        + 'Dropzones have to be defined with withDropzones() first.');
    }

    return dropzone;
  }

  /**
   * @returns {boolean}
   * @private
   */
  _hasTemplateParts() {
    return Array.isArray(this._templateParts) ? this._templateParts.length > 0 : !!this._templateParts;
  }

  /**
   * @returns {boolean}
   * @private
   */
  _hasContentElements() {
    return this._dropzones.some(dropzone => dropzone.contentElements.length > 0);
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
    this._applyPropertyIfDefined(DesignJsonProperty.CONTEXT_FILE, config, identity);

    this._applyRenderedTemplate(config);
    this._applyContextFile(config);

    return config;
  }

  /**
   * The template of a content element reaches the design.json as the rendered result, not as the
   * template file: the nested content elements are part of it and the context scopes are resolved.
   * A new file object, the required module is shared with every other occurrence of this element.
   *
   * @param {{}} config
   * @private
   */
  _applyRenderedTemplate(config) {
    if (!this._file) {
      return;
    }

    config[DesignJsonProperty.FILE] = {
      ...this._file,
      content: this.render(this.createAbsoluteContextScope())
    };
  }

  /**
   * @param {{}} config
   * @private
   */
  _applyContextFile(config) {
    // A raw context file provided by the design wins - it replaces the generated one entirely.
    if (Object.keys(this._contextFile ?? {}).length > 0) {
      return;
    }

    config[DesignJsonProperty.CONTEXT_FILE] = this.exportDesignContextFile();
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
