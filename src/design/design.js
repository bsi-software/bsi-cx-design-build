import AbstractBuilder from '../abstract-builder';
import {SchemaVersion} from './schema-version';
import {Locale} from './locale';
import ContentElementGroup from '../content-element/content-element-group';
import Style from '../style/style';
import HtmlEditorConfig from '../html-editor-config/html-editor-config';
import Website from '../website/website';
import DesignJsonProperty from '../design-json-property';
import {builderObjectValue, constantObjectValue, identity} from '../extractor';

export default class Design extends AbstractBuilder {
  constructor() {
    super();
    /**
     * @type {SchemaVersion|undefined}
     * @private
     */
    this._schemaVersion = undefined;
    /**
     * @type {string|undefined}
     * @private
     */
    this._title = undefined;
    /**
     * @type {string|undefined}
     * @private
     */
    this._author = undefined;
    /**
     * @type {string|undefined}
     * @private
     */
    this._date = undefined;
    /**
     * @type {string|undefined}
     * @private
     */
    this._previewImage = undefined;
    /**
     * @type {Locale|undefined}
     * @private
     */
    this._defaultLocale = undefined;
    /**
     * @type {[Locale]|undefined}
     * @private
     */
    this._locales = undefined;
    /**
     * @type {[ContentElementGroup]|undefined}
     * @private
     */
    this._contentElementGroups = undefined;
    /**
     * @type {[Style]|undefined}
     * @private
     */
    this._styleConfigs = undefined;
    /**
     * @type {[HtmlEditorConfig]|undefined}
     * @private
     */
    this._htmlEditorConfigs = undefined;
    /**
     * @type {Website|undefined}
     * @private
     */
    this._website = undefined;
  }

  /**
   * @return {SchemaVersion|undefined}
   */
  get schemaVersion() {
    return this._schemaVersion;
  }

  /**
   * @return {string|undefined}
   */
  get title() {
    return this._title;
  }

  /**
   * @return {string|undefined}
   */
  get author() {
    return this._author;
  }

  /**
   * @return {string|undefined}
   */
  get date() {
    return this._date;
  }

  /**
   * @return {string|undefined}
   */
  get previewImage() {
    return this._previewImage;
  }

  /**
   * @return {Locale|undefined}
   */
  get defaultLocale() {
    return this._defaultLocale;
  }

  /**
   * @return {[Locale]|undefined}
   */
  get locales() {
    return this._locales;
  }

  /**
   * @return {ContentElementGroup[]|undefined}
   */
  get contentElementGroups() {
    return this._contentElementGroups;
  }

  /**
   * @return {{}|undefined}
   */
  get styleConfigs() {
    return this._styleConfigs;
  }

  /**
   * @return {{}|undefined}
   */
  get htmlEditorConfigs() {
    return this._htmlEditorConfigs;
  }

  /**
   * @return {Website|undefined}
   */
  get website() {
    return this._website;
  }

  /**
   * @param {SchemaVersion} schemaVersion
   * @return {Design}
   */
  withSchemaVersion(schemaVersion) {
    this._schemaVersion = schemaVersion;
    return this;
  }

  /**
   * @param {string} title
   * @return {Design}
   */
  withTitle(title) {
    this._title = title;
    return this;
  }

  /**
   * @param {string} author
   * @return {Design}
   */
  withAuthor(author) {
    this._author = author;
    return this;
  }

  /**
   * @param {string} date
   * @return {Design}
   */
  withDate(date) {
    this._date = date;
    return this;
  }

  /**
   * @param {string} previewImage
   * @return {Design}
   */
  withPreviewImage(previewImage) {
    this._previewImage = previewImage;
    return this;
  }

  /**
   * @param {Locale} defaultLocale
   * @return {Design}
   */
  withDefaultLocale(defaultLocale) {
    this._defaultLocale = defaultLocale;
    return this;
  }

  /**
   * @param {Locale} locales
   * @return {Design}
   */
  withLocales(...locales) {
    this._locales = locales;
    return this;
  }

  /**
   * @param {ContentElementGroup} contentElementGroups
   * @return {Design}
   */
  withContentElementGroups(...contentElementGroups) {
    this._contentElementGroups = contentElementGroups;
    return this;
  }

  /**
   * @param {Style} styleConfigs
   * @return {Design}
   */
  withStyleConfigs(...styleConfigs) {
    this._styleConfigs = styleConfigs;
    return this;
  }

  /**
   * @param {HtmlEditorConfig} htmlEditorConfigs
   * @return {Design}
   */
  withHtmlEditorConfigs(...htmlEditorConfigs) {
    this._htmlEditorConfigs = htmlEditorConfigs;
    return this;
  }

  /**
   * @param {Website} website
   * @return {Design}
   * @since 1.3
   */
  withWebsite(website) {
    this._website = website;
    return this;
  }

  build() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.SCHEMA_VERSION, config, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.TITLE, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.AUTHOR, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.DATE, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.PREVIEW_IMAGE, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.DEFAULT_LOCALE, config, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.LOCALES, config, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.CONTENT_ELEMENT_GROUPS, config, builderObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.STYLE_CONFIGS, config, builderObjectValue, true);
    this._applyPropertyIfDefined(DesignJsonProperty.HTML_EDITOR_CONFIGS, config, builderObjectValue, true);
    this._applyPropertyIfDefined(DesignJsonProperty.WEBSITE, config, builderObjectValue);

    return config;
  }
}
