import AbstractBuilder from '../abstract-builder';
import DesignJsonProperty from '../design-json-property';
import {builderObjectValue, constantObjectValue, identity} from '../browser-utility';
import RawValue from '../raw-value';
import DesignJsonPropertyExtension from '../design-json-property-extension';

/** @typedef {import('./schema-version').SchemaVersion} SchemaVersion */
/** @typedef {import('./locale').Locale} Locale */
/** @typedef {import('../content-element/content-element').default} ContentElement */
/** @typedef {import('../content-element/part/formatted-text-part').default} FormattedTextPart */
/** @typedef {import('../content-element/content-element-group').default} ContentElementGroup */
/** @typedef {import('../dropzone/dropzone').default} Dropzone */
/** @typedef {import('../html-editor-config/html-editor-config').default} HtmlEditorConfig */
/** @typedef {import('../website/website').default} Website */
/** @typedef {import('../style/style').default} Style */
/** @typedef {import('../nls/nls').default} NLS */

/**
 * This is the builder class to specify a design.
 *
 * @example
 * module.exports = cx.design
 *   .withSchemaVersion(SchemaVersion.V_22_0)
 *   .withTitle('My BSI CX Design')
 *   .withAuthor('John Doe')
 *   .withDate('18.8.2021')
 *   .withPreviewImage(require('./preview.png'))
 *   .withRawDefaultLocale('en')
 *   .withContentElementGroups(
 *     cx.contentElementGroup
 *       .withGroupId('content')
 *       .withLabel('Content')
 *       .withContentElements(
 *         require('./content-elements/content/title'),
 *         require('./content-elements/content/text')));
 */
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
   * @type {Dropzone[]|undefined}
   * @private
   */
  _dropzones = undefined;
  /**
   * @type {RawValue|[Style]|undefined}
   * @private
   */
  _styleConfigs = undefined;
  /**
   * @type {RawValue|HtmlEditorConfig[]|undefined}
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
   * @returns {RawValue|SchemaVersion|undefined}
   */
  get schemaVersion() {
    return this._schemaVersion;
  }

  /**
   * @returns {string|undefined}
   */
  get title() {
    return this._title;
  }

  /**
   * @returns {string|undefined}
   */
  get author() {
    return this._author;
  }

  /**
   * @returns {string|undefined}
   */
  get date() {
    return this._date;
  }

  /**
   * @returns {{}|undefined}
   */
  get previewImage() {
    return this._previewImage;
  }

  /**
   * @returns {RawValue|Locale|undefined}
   */
  get defaultLocale() {
    return this._defaultLocale;
  }

  /**
   * @returns {RawValue|[Locale]|undefined}
   */
  get locales() {
    return this._locales;
  }

  /**
   * @returns {RawValue|ContentElementGroup[]|undefined}
   */
  get contentElementGroups() {
    return this._contentElementGroups;
  }

  /**
   * @returns {Dropzone[]|undefined}
   */
  get dropzones() {
    return this._dropzones;
  }

  /**
   * @returns {RawValue|[Style]|undefined}
   */
  get styleConfigs() {
    return this._styleConfigs;
  }

  /**
   * @returns {RawValue|HtmlEditorConfig[]|undefined}
   */
  get htmlEditorConfigs() {
    return this._htmlEditorConfigs;
  }

  /**
   * @returns {RawValue|Website|undefined}
   */
  get website() {
    return this._website;
  }

  /**
   * @returns {RawValue|NLS[]|undefined}
   */
  get nls() {
    return this._nls;
  }

  /**
   * The schema version to use. This is relevant for website templates and all templates for BSI CX 22.0 onwards.
   *
   * @example
   * .withSchemaVersion(SchemaVersion.V_22_0)
   * @see {@link SchemaVersion} for available versions
   * @see {@link withRawSchemaVersion} to set a raw value
   * @param {SchemaVersion} schemaVersion - The schema version to use.
   * @returns {Design}
   */
  withSchemaVersion(schemaVersion) {
    this._schemaVersion = schemaVersion;
    return this;
  }

  /**
   * Supply a raw schema version.
   *
   * @example
   * .withRawSchemaVersion('22.0')
   * @see {@link withSchemaVersion}
   * @param {string} schemaVersion - The schema version to use.
   * @returns {Design}
   */
  withRawSchemaVersion(schemaVersion) {
    this._schemaVersion = new RawValue(schemaVersion);
    return this;
  }

  /**
   * The title for your design.
   *
   * @param {string} title - The design title.
   * @returns {Design}
   */
  withTitle(title) {
    this._title = title;
    return this;
  }

  /**
   * The author of your design.
   *
   * @param {string} author - The design author.
   * @returns {Design}
   */
  withAuthor(author) {
    this._author = author;
    return this;
  }

  /**
   * The creation date of your design e.g. 18.08.2021.
   *
   * @example
   * .withDate('18.08.2021')
   * @param {string} date - The design date.
   * @returns {Design}
   */
  withDate(date) {
    this._date = date;
    return this;
  }

  /**
   * The preview image of your design. Use in combination with require.
   *
   * @example
   * .withPreviewImage(require('./preview-image.png'))
   * @param {{}} previewImage
   * @returns {Design}
   */
  withPreviewImage(previewImage) {
    this._previewImage = previewImage;
    return this;
  }

  /**
   * The default locale for your design. This is relevant for website templates and all templates for BSI CX 22.0 onwards.
   *
   * @example
   * .withDefaultLocale(Locale.EN)
   * @see {@link Locale} for available locales
   * @see {@link withRawDefaultLocale} to set a raw value
   * @param {Locale} defaultLocale - The design default locale.
   * @returns {Design}
   */
  withDefaultLocale(defaultLocale) {
    this._defaultLocale = defaultLocale;
    return this;
  }

  /**
   * Set the raw default locale as string.
   *
   * @example
   * .withRawDefaultLocale('en')
   * @see {@link withDefaultLocale}
   * @param {string} defaultLocale - The default locale.
   * @returns {Design}
   */
  withRawDefaultLocale(defaultLocale) {
    this._defaultLocale = new RawValue(defaultLocale);
    return this;
  }

  /**
   * The available locales for your design. This is relevant for website templates and all templates for BSI CX 22.0 onwards.
   *
   * @example
   * .withLocales(Locale.EN_GB,Locale.DE_CH)
   * @see {@link Locale} for available locales
   * @see {@link withRawLocales} to set a raw value
   * @param {...Locale} locales - The design locales.
   * @returns {Design}
   */
  withLocales(...locales) {
    this._locales = locales;
    return this;
  }

  /**
   * Set the raw locales as string.
   *
   * @example
   * .withRawLocales('en-GB','de-CH')
   * @see {@link withLocales}
   * @param {...string} locales - The design locales.
   * @returns {Design}
   */
  withRawLocales(...locales) {
    this._locales = new RawValue(locales);
    return this;
  }

  /**
   * Your design's content element groups.
   *
   * @see {@link withRawContentElementGroups} to set a raw value
   * @param {...ContentElementGroup} contentElementGroups - The content element groups.
   * @returns {Design}
   */
  withContentElementGroups(...contentElementGroups) {
    this._contentElementGroups = contentElementGroups;
    return this;
  }

  /**
   * Set the content element groups of your design as raw object.
   *
   * @example
   * .withRawContentElementGroups(
   *   {
   *     groupId: 'content',
   *     label: 'Content',
   *     contentElements: []
   *   },
   *   {
   *     groupId: 'advanced',
   *     label: 'Advanced',
   *     contentElements: []
   *   }
   * )
   * @see {@link withContentElementGroups}
   * @param {...{}} contentElementGroups - The content element groups.
   * @returns {Design}
   */
  withRawContentElementGroups(...contentElementGroups) {
    this._contentElementGroups = new RawValue(contentElementGroups);
    return this;
  }

  /**
   * Define the root dropzones of this template.
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
   * @param {...Dropzone} dropzones - The root dropzones.
   * @returns {Design}
   */
  withDropzones(...dropzones) {
    this._dropzones = dropzones;
    return this;
  }

  /**
   * The style configurations of your design. This is only necessary if you use
   * {@link ContentElement#withRawStyleConfigs} to reference your style configurations.
   * Otherwise you don't have to register your styles here.
   *
   * @see {@link withRawStyleConfigs} to set a raw value
   * @param {...Style} styleConfigs - The style configurations.
   * @returns {Design}
   */
  withStyleConfigs(...styleConfigs) {
    this._styleConfigs = styleConfigs;
    return this;
  }

  /**
   * Set the style configurations of your design as raw object.
   *
   * @example
   * .withRawStyleConfigs({
   *   'background-color': {
   *     label: 'Background Color',
   *     cssClasses: [
   *       { cssClass: 'black-background', label: 'Black' },
   *       { cssClass: 'blue-background', label: 'Blue' }
   *     ]
   *   },
   *   'text-color': {
   *     label: 'Text Color',
   *     cssClasses: [
   *       { cssClass: 'black-text', label: 'Black' },
   *       { cssClass: 'blue-text', label: 'Blue' }
   *     ]
   *   }
   * })
   * @see {@link withStyleConfigs}
   * @param {{}} styleConfigs - The <code>styleConfigs</code> object.
   * @returns {Design}
   */
  withRawStyleConfigs(styleConfigs) {
    this._styleConfigs = new RawValue(styleConfigs);
    return this;
  }

  /**
   * The HTML editor configurations of your design. This is only necessary if you use
   * {@link FormattedTextPart#withRawHtmlEditorConfig} to reference your HTML editor configuration.
   * Otherwise you don't have to register your configurations here.
   *
   * @see {@link withRawHtmlEditorConfigs} to set a raw value
   * @param {...HtmlEditorConfig} htmlEditorConfigs
   * @returns {Design}
   */
  withHtmlEditorConfigs(...htmlEditorConfigs) {
    this._htmlEditorConfigs = htmlEditorConfigs;
    return this;
  }

  /**
   * Set the HTML editor configurations as raw object.
   *
   * @example
   * .withRawHtmlEditorConfigs({
   *   minimal: {
   *     features: ['italic','bold','underline','strikeThrough']
   *   }
   * })
   * @see {@link withHtmlEditorConfigs}
   * @param {{}} htmlEditorConfigs - The <code>htmlEditorConfigs</code> object.
   * @returns {Design}
   */
  withRawHtmlEditorConfigs(htmlEditorConfigs) {
    this._htmlEditorConfigs = new RawValue(htmlEditorConfigs);
    return this;
  }

  /**
   * The website configuration of your design.
   *
   * @see {@link withRawWebsite} to set a raw value
   * @param {Website} website - The website object.
   * @returns {Design}
   * @since BSI CX 1.3
   */
  withWebsite(website) {
    this._website = website;
    return this;
  }

  /**
   * Set the raw website object of your design.
   *
   * @example
   * .withRawWebsite({
   *   maxNavigationLevel: 2,
   *   includes: {
   *     __page__: {
   *       editable: true,
   *       file: require('./includes/page.hbs'),
   *       name: 'Template for content pages'
   *     },
   *     footer: {
   *       editable: true,
   *       file: require('./includes/footer.html'),
   *       name: 'Footer'
   *     }
   *   }
   * })
   * @param {{}} website - The raw <code>website</code> object.
   * @returns {Design}
   * @since BSI CX 1.3
   */
  withRawWebsite(website) {
    this._website = new RawValue(website);
    return this;
  }

  /**
   * Configure you design's translation support.
   *
   * @see {@link withRawNLS} to set a raw value
   * @param {...NLS} nls
   * @returns {Design}
   */
  withNLS(...nls) {
    this._nls = nls;
    return this;
  }

  /**
   * Set the raw value of the <code>nls</code> property.
   *
   * @example
   * .withRawNLS({
   *   action: { '*': 'action', de: 'Aktion' },
   *   name: { '*': 'name', de: 'Name' }
   * })
   * @see {@link withNLS}
   * @param {{}} nls - The raw value.
   * @returns {Design}
   */
  withRawNLS(nls) {
    this._nls = new RawValue(nls);
    return this;
  }

  /**
   * @inheritDoc
   */
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
    this._applyPropertyIfDefined(DesignJsonPropertyExtension.DROPZONES, config, builderObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.STYLE_CONFIGS, config, builderObjectValue, true);
    this._applyPropertyIfDefined(DesignJsonProperty.HTML_EDITOR_CONFIGS, config, builderObjectValue, true);
    this._applyPropertyIfDefined(DesignJsonProperty.WEBSITE, config, builderObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.NLS, config, builderObjectValue, true);

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @example
   * let design1 = new Design().withName('my first design');
   * let design2 = design1.clone().withName('my second design');
   * design1 === design2 // false
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {Design}
   */
  clone(shallow) {
    return this._clone(new Design(), shallow);
  }
}
