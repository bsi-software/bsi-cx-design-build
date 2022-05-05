import AbstractBuilder from '../abstract-builder';
import DesignJsonProperty from '../design-json-property';
import {builderObjectValue, identity, uuid} from '../browser-utility';
import RawValue from '../raw-value';

/** @typedef {import('./content-element').default} ContentElement */

/**
 * This is the builder class to specify content element groups.
 *
 * @example
 * module.exports = cx.contentElementGroup
 *   .withGroupId('content')
 *   .withLabel('Content')
 *   .withContentElements(
 *     require('./content-elements/content/title'),
 *     require('./content-elements/content/text')));
 */
export default class ContentElementGroup extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _groupId = uuid();
  /**
   * @type {string|undefined}
   * @private
   */
  _label = undefined;
  /**
   * @type {boolean|undefined}
   * @private
   */
  _hidden = undefined;
  /**
   * @type {RawValue|[ContentElement]|undefined}
   * @private
   */
  _contentElements = undefined;

  /**
   * @returns {string|undefined}
   */
  get groupId() {
    return this._groupId;
  }

  /**
   * @returns {string|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @returns {boolean|undefined}
   */
  get hidden() {
    return this._hidden;
  }

  /**
   * @returns {RawValue|[ContentElement]|undefined}
   */
  get contentElements() {
    return this._contentElements;
  }

  /**
   * Set an unique identifier for the content element group. If not set, a UUID v4 will be used.
   * <strong>It is recommended to set the group identifier.</strong>
   *
   * @param {string} groupId - The group ID.
   * @returns {ContentElementGroup}
   */
  withGroupId(groupId) {
    this._groupId = groupId;
    return this;
  }

  /**
   * The label for this content element group.
   *
   * @param {string} label - The group label.
   * @returns {ContentElementGroup}
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  /**
   * Declare this content element group as hidden. It is not required to set this property.
   * Groups are visible per default.
   *
   * @param {boolean} hidden - Hide this group.
   * @returns {ContentElementGroup}
   */
  withHidden(hidden) {
    this._hidden = hidden;
    return this;
  }

  /**
   * Set the content elements of your group.
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
   * @see {@link withRawContentElements} to set a raw value
   * @see {@link ContentElement}
   * @param {...ContentElement} contentElements - The content elements to use.
   * @returns {ContentElementGroup}
   */
  withContentElements(...contentElements) {
    this._contentElements = contentElements;
    return this;
  }

  /**
   * Set the content elements of your group as raw value.
   *
   * @example
   * .withRawContentElements({
   *   elementId: 'title',
   *   file: require('./title/template.twig'),
   *   icon 'heading',
   *   label: 'Title',
   *   parts: [
   *     {
   *       partId: 'plain-text',
   *       label: 'Title'
   *     }
   *   ]
   * })
   * @see {@link withContentElements}
   * @param {...{}} contentElements - The content elements as raw value.
   * @returns {ContentElementGroup}
   */
  withRawContentElements(...contentElements) {
    this._contentElements = new RawValue(contentElements);
    return this;
  }

  _buildInternal() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.GROUP_ID, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.HIDDEN, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.CONTENT_ELEMENTS, config, builderObjectValue);

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {ContentElementGroup}
   */
  clone(shallow) {
    return this._clone(new ContentElementGroup(), shallow);
  }
}
