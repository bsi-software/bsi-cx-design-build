import AbstractBuilder from '../../abstract-builder';
import { constantObjectValue, identity } from '../../browser-utility';
import DesignJsonProperty from '../../design-json-property';

/** @typedef {import('./part').Part} Part */

/**
 * @abstract
 */
export default class AbstractPart extends AbstractBuilder {
  /**
   * @type {string}
   * @private
   */
  _id = undefined;
  /**
   * @type {Part}
   * @private
   */
  _partId = undefined;
  /**
   * @type {string|NLS|undefined}
   * @private
   */
  _label = undefined;

  /**
   * @param {Part} partId
   */
  constructor(partId) {
    super();
    /**
     * @type {Part}
     * @private
     */
    this._partId = partId;
  }

  /**
   * @param {Part} partId
   * @param {string} label
   * @param {string} id
   */
  constructor(partId, label, id) {
    super();
    /**
     * @type {Part}
     * @private
     */
    this._partId = partId;
    this._label = label;
    this._id = id;
  }

  /**
   * @returns {string}
   */
  get id() {
    return this._id;
  }

  /**
   * @returns {Part}
   */
  get partId() {
    return this._partId;
  }

  /**
   * @returns {string|NLS|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * The ID of the part. You can apply an unique identifier to your content element part.
   * <strong>It is highly recommended to use a {@link https://duckduckgo.com/?q=uuid|UUID}.</strong>
   * This property is only for the design build and will not appear in the final build artifacts.
   * The advantage of using this property is, that you don't have to care about the order of your parts
   * in your specification. The build will reorder the part definitions in the order they appear in the
   * corresponding template. This can be very handy in large and complex elements with many parts.
   *
   * @example
   * // template.html
   * <div data-bsi-element="title">
   *   <h1 data-bsi-element-part="539a1787-7df2-43ab-9a67-e1f913ad5d7c">Lorem ipsum</h1>
   * </div>
   *
   * // title.js
   * module.exports = new ContentElement()
   *   .withElementId('title')
   *   .withLabel('Title')
   *   .withFile(require('./template.html')
   *   .withParts(
   *     new PlainTextPart()
   *       .withId('539a1787-7df2-43ab-9a67-e1f913ad5d7c')
   *       .withLabel('Title'));
   *
   * // dist/title-4026bb9f6ec6c2284775.html
   * <div data-bsi-element="title">
   *   <h1 data-bsi-element-part="plain-text">Lorem ipsum</h1>
   * </div>
   * @param {string} id - The ID to use.
   * @returns {this}
   */
  withId(id) {
    this._id = id;
    return this;
  }

  /**
   * The set content element part's label.
   *
   * @param {string|NLS} label - The label to set.
   * @returns {this}
   * @since Studio 1.0
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  _buildInternal() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.ID, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.PART_ID, config, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, identity);

    return config;
  }
}
