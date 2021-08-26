import AbstractBuilder from '../abstract-builder';
import {SchemaVersion} from './schema-version';
import {Locale} from './locale';
import ContentElementGroup from '../content-element/content-element-group';
import Style from '../style/style';
import HtmlEditorConfig from '../html-editor-config/html-editor-config';
import Website from '../website/website';
import NLS from '../nls/nls';
import DesignJsonProperty from '../design-json-property';
import {builderObjectValue, constantObjectValue, identity} from '../extractor';
import RawValue from '../raw-value';

export default class Design extends AbstractBuilder {
  /**
   * @type {RawValue|SchemaVersion|undefined}
   * @private
   */
  _schemaVersion = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _title = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _author = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _date = undefined;
  /**
   * @type {{}|undefined}
   * @private
   */
  _previewImage = undefined;
  /**
   * @type {RawValue|Locale|undefined}
   * @private
   */
  _defaultLocale = undefined;
  /**
   * @type {RawValue|[Locale]|undefined}
   * @private
   */
  _locales = undefined;
  /**
   * @type {RawValue|[ContentElementGroup]|undefined}
   * @private
   */
  _contentElementGroups = undefined;
  /**
   * @type {RawValue|[Style]|undefined}
   * @private
   */
  _styleConfigs = undefined;
  /**
   * @type {RawValue|[HtmlEditorConfig]|undefined}
   * @private
   */
  _htmlEditorConfigs = undefined;
  /**
   * @type {RawValue|Website|undefined}
   * @private
   */
  _website = undefined;
  /**
   * @type {RawValue|NLS[]|undefined}
   * @private
   */
  _nls = undefined;

  /**
   * @return {RawValue|SchemaVersion|undefined}
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
   * @return {{}|undefined}
   */
  get previewImage() {
    return this._previewImage;
  }

  /**
   * @return {RawValue|Locale|undefined}
   */
  get defaultLocale() {
    return this._defaultLocale;
  }

  /**
   * @return {RawValue|[Locale]|undefined}
   */
  get locales() {
    return this._locales;
  }

  /**
   * @return {RawValue|ContentElementGroup[]|undefined}
   */
  get contentElementGroups() {
    return this._contentElementGroups;
  }

  /**
   * @return {RawValue|[Style]|undefined}
   */
  get styleConfigs() {
    return this._styleConfigs;
  }

  /**
   * @return {RawValue|[HtmlEditorConfig]|undefined}
   */
  get htmlEditorConfigs() {
    return this._htmlEditorConfigs;
  }

  /**
   * @return {RawValue|Website|undefined}
   */
  get website() {
    return this._website;
  }

  /**
   * @return {RawValue|NLS[]|undefined}
   */
  get nls() {
    return this._nls;
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
   * @param {string} schemaVersion
   * @return {Design}
   */
  withRawSchemaVersion(schemaVersion) {
    this._schemaVersion = new RawValue(schemaVersion);
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
   * @param {{}} previewImage
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
   * @param {string} defaultLocale
   * @return {Design}
   */
  withRawDefaultLocale(defaultLocale) {
    this._defaultLocale = new RawValue(defaultLocale);
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
   * @param {string} locales
   * @return {Design}
   */
  withRawLocales(...locales) {
    this._locales = new RawValue(locales);
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
   * @param {{}} contentElementGroups
   * @return {Design}
   */
  withRawContentElementGroups(...contentElementGroups) {
    this._contentElementGroups = new RawValue(contentElementGroups);
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
   * @param {{}} styleConfigs
   * @return {Design}
   */
  withRawStyleConfigs(styleConfigs) {
    this._styleConfigs = new RawValue(styleConfigs);
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
   * @param {{}} htmlEditorConfigs
   * @return {Design}
   */
  withRawHtmlEditorConfigs(htmlEditorConfigs) {
    this._htmlEditorConfigs = new RawValue(htmlEditorConfigs);
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

  /**
   * @param {{}} website
   * @return {Design}
   * @since 1.3
   */
  withRawWebsite(website) {
    this._website = new RawValue(website);
    return this;
  }

  /**
   * @param {NLS} nls
   * @return {Design}
   */
  withNLS(...nls) {
    this._nls = nls;
    return this;
  }

  /**
   * @param {{}} nls
   * @return {Design}
   */
  withRawNLS(nls) {
    this._nls = new RawValue(nls);
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
    this._applyPropertyIfDefined(DesignJsonProperty.NLS, config, builderObjectValue, true);

    return config;
  }
}
