import AbstractBuilder from '../abstract-builder';
import { identity } from '../browser-utility';
import TemplateElement from '../content-element/template-element';
import DesignJsonPropertyExtension from '../design-json-property-extension';
import RawValue from '../raw-value';

/** @typedef {import('../content-element/content-element').default} ContentElement */
/** @typedef {import('../content-element/template-element').default} TemplateElement */

/**
 * This is the builder class to specify a dropzone.
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
 */
export default class Dropzone extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _dropzone = undefined;
  /**
   * @type {RawValue|ContentElement[]|TemplateElement[]|undefined}
   * @private
   */
  _allowedElements = undefined;
  /**
   * @type {number|undefined}
   * @private
   */
  _maxAllowedElements = undefined;
  /**
   * @type {boolean|undefined}
   * @private
   */
  _removeAllowed = undefined;
  /**
   * @type {boolean|undefined}
   * @private
   */
  _copyAllowed = undefined;
  /**
   * @type {boolean|undefined}
   * @private
   */
  _moveAllowed = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _name = undefined;
  /**
   * Content elements which are part of this dropzone from the start. Not part of the design.json:
   * they are rendered into the template of the surrounding element, and their prefill is written to
   * its context file.
   *
   * @type {TemplateElement[]}
   * @private
   */
  _contentElements = [];

  /**
   * @returns {string|undefined}
   */
  get dropzone() {
    return this._dropzone;
  }

  /**
   * @returns {string|undefined}
   */
  get name() {
    return this._name;
  }

  /**
   * @returns {TemplateElement[]}
   */
  get contentElements() {
    return this._contentElements;
  }

  /**
   * Name of this dropzone in the context scope of its nested content elements, see
   * {@link ContextScope#segment}. The dropzone ID is the fallback, {@link withName} exists because
   * that ID is usually a UUID and makes for an unreadable context file.
   *
   * @returns {string}
   */
  get contextScopeName() {
    return this._name || this._dropzone;
  }

  /**
   * @returns {RawValue|ContentElement[]|TemplateElement[]|undefined}
   */
  get allowedElements() {
    return this._allowedElements;
  }

  /**
   * @returns {number|undefined}
   */
  get maxAllowedElements() {
    return this._maxAllowedElements;
  }

  /**
   * @returns {boolean|undefined}
   */
  get removeAllowed() {
    return this._removeAllowed;
  }

  /**
   * @returns {boolean|undefined}
   */
  get copyAllowed() {
    return this._copyAllowed;
  }

  /**
   * @returns {boolean|undefined}
   */
  get moveAllowed() {
    return this._moveAllowed;
  }

  /**
   * Constructor for Dropzone.
   * 
   * @param {string?} dropzoneId 
   * @param {TemplateElement[]?} allowedElements 
   * @param {number?} maxAllowedElements 
   */
  constructor (dropzoneId="", allowedElements=[], maxAllowedElements=undefined) {
    super();
    this._dropzone = dropzoneId;
    this._allowedElements = allowedElements;
    this._maxAllowedElements = maxAllowedElements;
  }

  /**
   * Set the identifier of this dropzone. <strong>It is highly recommended using a
   * {@link https://duckduckgo.com/?q=uuid|UUID}.</strong>
   *
   * @param {string} dropzone - The dropzone name.
   * @returns {Dropzone}
   */
  withDropzone(dropzone) {
    this._dropzone = dropzone;
    return this;
  }

  /**
   * Set a short name for this dropzone, used as the context scope of its nested content elements
   * ('dzl' + position -> 'dzl_0'). Without a name the dropzone ID is used, which is usually a UUID.
   * The name never appears in a template - the scope is computed and inserted by the build.
   *
   * @example
   * cx.dropzone
   *   .withDropzone('20816df1-f8c0-47d1-94a1-1cd124c2b348')
   *   .withName('dzl')
   * @param {string} name - The name of this dropzone.
   * @returns {Dropzone}
   */
  withName(name) {
    this._name = name;
    return this;
  }

  /**
   * Place content elements into this dropzone. They are rendered into the template of the
   * surrounding element at the position of its <code>dropzone()</code> function, and their prefill
   * is written to its context file under an automatically computed context scope.
   *
   * @example
   * cx.dropzone
   *   .withDropzone('20816df1-f8c0-47d1-94a1-1cd124c2b348')
   *   .withName('dzl')
   *   .withContentElements(require('./content-elements/content/template-button'))
   * @see {@link withContentElement} to change the prefill of one occurrence
   * @param {...TemplateElement} contentElements - The content elements to place.
   * @returns {Dropzone}
   */
  withContentElements(...contentElements) {
    contentElements.forEach(contentElement => this.withContentElement(contentElement));
    return this;
  }

  /**
   * Place a single content element into this dropzone and configure this occurrence of it.
   *
   * The element is cloned, so the same required element can be placed more than once with different
   * values - and the module the design required stays untouched.
   *
   * @example
   * cx.dropzone
   *   .withDropzone('20816df1-f8c0-47d1-94a1-1cd124c2b348')
   *   .withName('dzl')
   *   .withContentElement(
   *     require('./content-elements/content/template-button'),
   *     button => button.withTemplatePartPrefill('multiline-plain-text-wmiRti', {value: 'Andere Info'}))
   * @param {TemplateElement} contentElement - The content element to place.
   * @param {function(TemplateElement):void} [configure] - Applied to the clone of the element.
   * @returns {Dropzone}
   */
  withContentElement(contentElement, configure) {
    let clone = contentElement.clone(false);

    if (typeof configure === 'function') {
      configure(clone);
    }
    this.addContentElement(clone);

    return this;
  }

  /**
   * @param {TemplateElement} contentElement - The content element to add as it is, without cloning.
   * @returns {number} the position of the content element in this dropzone
   */
  addContentElement(contentElement) {
    this._contentElements.push(contentElement);

    return this._contentElements.length - 1;
  }

  /**
   * Set the allowed elements.
   * They should be of the same Type (ContentElement or Template Element)
   *
   * @example
   * .withAllowedElements(
   *   require('./content-elements/basic/text'),
   *   require('./content-elements/basic/image'))
   * @param {...(ContentElement|TemplateElement)} allowedElements - The allowed elements.
   * @returns {Dropzone}
   */
  withAllowedElements(...allowedElements) {
    this._allowedElements = [...new Set(allowedElements)];
    return this;
  }

  /**
   * Set the allowed elements as raw value.
   *
   * @param {...string} allowedElements - The allowed elements.
   * @returns {Dropzone}
   */
  withRawAllowedElements(...allowedElements) {
    this._allowedElements = new RawValue(allowedElements);
    return this;
  }

  /**
   * Set the number of maximum allowed elements.
   *
   * @param {number} maxAllowedElements - The number of maximum allowed elements.
   * @returns {Dropzone}
   */
  withMaxAllowedElements(maxAllowedElements) {
    this._maxAllowedElements = maxAllowedElements;
    return this;
  }

  /**
   * Enable or disable the remove button on dropzone elements.
   *
   * @param {boolean} removeAllowed - Enable or disable the remove button.
   * @returns {Dropzone}
   */
  withRemoveAllowed(removeAllowed) {
    this._removeAllowed = removeAllowed;
    return this;
  }

  /**
   * Enable or disable the copy button on dropzone elements.
   *
   * @param {boolean} copyAllowed - Enable or disable the copy button.
   * @returns {Dropzone}
   */
  withCopyAllowed(copyAllowed) {
    this._copyAllowed = copyAllowed;
    return this;
  }

  /**
   * Enable or disable the move button on dropzone elements.
   *
   * @param {boolean} moveAllowed - Enable or disable the move button.
   * @returns {Dropzone}
   */
  withMoveAllowed(moveAllowed) {
    this._moveAllowed = moveAllowed;
    return this;
  }

  _buildInternal() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonPropertyExtension.DROPZONE, config, identity);
    this._applyPropertyIfDefined(DesignJsonPropertyExtension.ALLOWED_ELEMENTS, config, v => v.elementId);
    this._applyPropertyIfDefined(DesignJsonPropertyExtension.MAX_ALLOWED_ELEMENTS, config, identity);
    this._applyPropertyIfDefined(DesignJsonPropertyExtension.REMOVE_ALLOWED, config, identity);
    this._applyPropertyIfDefined(DesignJsonPropertyExtension.COPY_ALLOWED, config, identity);
    this._applyPropertyIfDefined(DesignJsonPropertyExtension.MOVE_ALLOWED, config, identity);

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {Dropzone}
   */
  clone(shallow) {
    return this._clone(new Dropzone(), shallow);
  }
}
