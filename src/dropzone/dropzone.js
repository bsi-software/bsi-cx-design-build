import AbstractBuilder from '../abstract-builder';
import RawValue from '../raw-value';
import {identity} from '../browser-utility';
import DesignJsonPropertyExtension from '../design-json-property-extension';

/** @typedef {import('../content-element/content-element').default} ContentElement */

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
   * @type {RawValue|[ContentElement]|undefined}
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
   * @returns {string|undefined}
   */
  get dropzone() {
    return this._dropzone;
  }

  /**
   * @returns {RawValue|ContentElement[]|undefined}
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
   * Set the identifier of this dropzone. <strong>It is highly recommended to use a
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
   * Set the allowed elements.
   *
   * @example
   * .withAllowedElements(
   *   require('./content-elements/basic/text'),
   *   require('./content-elements/basic/image'))
   * @param {...ContentElement} allowedElements - The allowed elements.
   * @returns {Dropzone}
   */
  withAllowedElements(...allowedElements) {
    this._allowedElements = allowedElements;
    return this;
  }

  /**
   * Set the allowed elements as raw value.
   *
   * @param {...string} allowedElements - The allowed elements.
   * @return {Dropzone}
   */
  withRawAllowedElements(...allowedElements) {
    this._allowedElements = new RawValue(allowedElements);
    return this;
  }

  /**
   * Set the number of maximum allowed elements.
   *
   * @param {number} maxAllowedElements - The number of maximum allowed elements.
   * @return {Dropzone}
   */
  withMaxAllowedElements(maxAllowedElements) {
    this._maxAllowedElements = maxAllowedElements;
    return this;
  }

  /**
   * Enable or disable the remove button on dropzone elements.
   *
   * @param {boolean} removeAllowed - Enable or disable the remove button.
   * @return {Dropzone}
   */
  withRemoveAllowed(removeAllowed) {
    this._removeAllowed = removeAllowed;
    return this;
  }

  /**
   * Enable or disable the copy button on dropzone elements.
   *
   * @param {boolean} copyAllowed - Enable or disable the copy button.
   * @return {Dropzone}
   */
  withCopyAllowed(copyAllowed) {
    this._copyAllowed = copyAllowed;
    return this;
  }

  /**
   * Enable or disable the move button on dropzone elements.
   *
   * @param {boolean} moveAllowed - Enable or disable the move button.
   * @return {Dropzone}
   */
  withMoveAllowed(moveAllowed) {
    this._moveAllowed = moveAllowed;
    return this;
  }

  build() {
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
