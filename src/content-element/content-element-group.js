import AbstractBuilder from '../abstract-builder';
import ContentElement from './content-element';
import DesignJsonProperty from '../design-json-property';
import {builderObjectValue, identity, uuid} from '../browser-utility';
import RawValue from '../raw-value';

/**
 * This is the builder class to specify content element groups.
 *
 * @example
 * module.exports = new ContentElementGroup()
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
   * @return {string|undefined}
   */
  get groupId() {
    return this._groupId;
  }

  /**
   * @return {string|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @return {boolean|undefined}
   */
  get hidden() {
    return this._hidden;
  }

  /**
   * @return {RawValue|[ContentElement]|undefined}
   */
  get contentElements() {
    return this._contentElements;
  }

  /**
   * Set an unique identifier for the content element group. If not set, a UUID v4 will be used.
   * It is recommended to set the group identifier.
   *
   * @param {string} groupId
   * @return {ContentElementGroup}
   */
  withGroupId(groupId) {
    this._groupId = groupId;
    return this;
  }

  /**
   * @param {string} label
   * @return {ContentElementGroup}
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  /**
   * @param {boolean} hidden
   * @return {ContentElementGroup}
   */
  withHidden(hidden) {
    this._hidden = hidden;
    return this;
  }

  /**
   * @param {...ContentElement} contentElements
   * @return {ContentElementGroup}
   */
  withContentElements(...contentElements) {
    this._contentElements = contentElements;
    return this;
  }

  /**
   * @param {...{}} contentElements
   * @return {ContentElementGroup}
   */
  withRawContentElements(...contentElements) {
    this._contentElements = new RawValue(contentElements);
    return this;
  }

  build() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.GROUP_ID, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.HIDDEN, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.CONTENT_ELEMENTS, config, builderObjectValue);

    return config;
  }

  /**
   * @param {boolean} [shallow=true]
   * @return {ContentElementGroup}
   */
  clone(shallow) {
    return this._clone(new ContentElementGroup(), shallow);
  }
}
