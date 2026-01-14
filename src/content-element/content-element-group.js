import AbstractBuilder from '../abstract-builder';
import { builderObjectValue, identity, uuid } from '../browser-utility';
import DesignJsonProperty from '../design-json-property';
import RawValue from '../raw-value';

/** @typedef {import('./content-element').default} ContentElement */
/** @typedef {import('./template-element').default} TemplateElement */

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
   * @type {string|NLS|undefined}
   * @private
   */
  _label = undefined;
  /**
   * @type {boolean|undefined}
   * @private
   */
  _hidden = undefined;
  /**
   * @type {RawValue|[ContentElement|TemplateElement]|undefined}
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
   * @returns {string|NLS|undefined}
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
   * @returns {RawValue|[ContentElement|TemplateElement]|undefined}
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
   * @param {string|NLS} label - The group label.
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
   * @see {@link ContentElement}, {@link TemplateElement}
   * @param {...(ContentElement|TemplateElement)} contentElements - The content or template elements to use.
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

  /**
   * Add new content element parts to group.
   * Replaces elements with same Element Id in exisiting group
   * 
   * @example 
   * require("@bsi-cx/design-standard-library-web/content-elements/my-group")
   *  .addOrReplaceElements(
   *    require("./my-group/new-element"), 
   *    require("./my-group/overwrite-element"))
   * 
   * @param  {...(ContentElement|TemplateElement)} newContentElements 
   */
  addOrReplaceElements(...newContentElements) {
    let newElemIds = newContentElements.map(elem => elem.elementId);
    this.removeElementsWithId(...newElemIds);
    this._contentElements = [...this._contentElements, ...newContentElements];
    return this;
  }


  /**
   * Remove content elements from group. 
   * If elementId not exists in group, nothing happens.
   * 
   * @example 
   * require("@bsi-cx/design-standard-library-web/content-elements/my-group")
   *  .removeElementsWithId("not-used-element-id")
   * 
   * @param  {...(ContentElement|TemplateElement)} contentElementIds 
   */
  removeElementsWithId(...contentElementIds) {
    this._contentElements = (this._contentElements || []).filter(elem => !contentElementIds.includes(elem.elementId));
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
