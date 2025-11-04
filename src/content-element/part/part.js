import AbstractBuilder from '../../abstract-builder';
import { identity } from '../../browser-utility';
import DesignJsonProperty from '../../design-json-property';

export default class Part extends AbstractBuilder {
  /**
   * @type {string}
   * @private
   */
  _id = undefined;
  /**
   * @type {string}
   * @private
   */
  _partId = undefined;
  /**
   * @type {string|NLS|undefined}
   * @private
   */
  _label = undefined;
  /**
   * @type {{}|undefined}
   * @private
   */
  _config = undefined;

  /**
   * @type {RawValue|HtmlEditorConfig|undefined}
   * @private
   */
  _htmlEditorConfig = undefined;

  /**
   * @type {Boolean|undefined}
   * @private
   */
  _altTextMandatory = undefined;

  /**
   * @type {Boolean|undefined}
   * @private
   */
  _captionEnabled = undefined;

  /**
   * @type {Boolean|undefined}
   * @private
   */
  _studioLinkEnabled = undefined;

  /**
   * @param {string} partId
   */
  constructor(partId, label, id) {
    super();
    /**
     * @type {string}
     * @private
     */
    this._partId = partId;
    /**
     * @type {string}
     * @private
     */
    this._label = label;
    /**
     * @type {string}
     * @private
     */
    this._id = id;
  }

  /**
   * @returns {string}
   */
  get id() {
    return this._id;
  }

  /**
   * @returns {string}
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
   * @returns {{}|undefined}
   */
  get config() {
    return this._config;
  }

  /**
   * @returns {RawValue|HtmlEditorConfig|undefined}
   */
  get htmlEditorConfig() {
    return this._htmlEditorConfig;
  }

  /**
   * @returns {Boolean|undefined}
   */
  get altTextMandatory() {
    return this._altTextMandatory;
  }

  /**
   * @returns {Boolean|undefined}
   */
  get captionEnabled() {
    return this._captionEnabled;
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
   *     cx.part.PlainText('Title', '539a1787-7df2-43ab-9a67-e1f913ad5d7c')
   *    );
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

  // TODO description
  withRawConfig(config) {
    this._config = config;
    return this;
  }

  // TODO description
  withConfig(key, value) {
    this._config = this.config || {};
    this._config[key] = value;
    return this;
  }

  /**
   * Set a HTML editor configuration to use with this part. Be aware, that you have to reference an existing
   * {@link HtmlEditorConfig} object. You don't have to register the used HTML editor config in the design object
   * using {@link Design#withHtmlEditorConfigs}. This is only necessary for raw editor configs.
   *
   * @example
   * let editorConfig = new HtmlEditorConfig()
   *   .withIdentifier('minimal')
   *   .withRawEnterMode('p')
   *   .withFeatures(
   *     Feature.BOLD,
   *     Feature.ITALIC,
   *     Feature.UNDERLINE);
   * // ...
   * let element = new ContentElement()
   *   .withElementId('element')
   *   .withParts(
   *     new FormattedTextPart()
   *       .withLabel('Text')
   *       .withHtmlEditorConfig(editorConfig))
   * @see {withRawHtmlEditorConfig} to set a raw value
   * @param {HtmlEditorConfig} htmlEditorConfig
   * @returns {FormattedTextPart}
   */
  withHtmlEditorConfig(htmlEditorConfig) {
    this._htmlEditorConfig = htmlEditorConfig;
    return this.withConfig(DesignJsonProperty.HTML_EDITOR_CONFIG, htmlEditorConfig.identifier);
  }

  /**
   * Set a Boolean to indicate if the alt-text for this image is mandatory.
   * If true users must describe the image before they can save it in the CX editor.
   *
   * @see {withAltTextMandatory}
   * @param {Boolean} altTextMandatory
   * @returns {Part}
   */
  withAltTextMandatory(altTextMandatory) {
    this._altTextMandatory = altTextMandatory;
    return this.withConfig(DesignJsonProperty.ALT_TEXT_MANDATORY, altTextMandatory);
  }

  /**
   * Set a Boolean to indicate if caption is enabled in editor.
   * If true users can add a caption for the table in CX editor.
   *
   * @see {withCaptionEnabled}
   * @param {Boolean} captionEnabled
   * @returns {Part}
   */
  withCaptionEnabled(captionEnabled) {
    this._captionEnabled = captionEnabled;
    return this.withConfig(DesignJsonProperty.CAPTION_ENABLED, captionEnabled);
  }

  /**
   * Set a Boolean to indicate if studioLink is enabled in the editor.
   * If true users can use the studioLink feature for plainTexts and multilineTexts in CX editor.
   *
   * @see {withCaptionEnabled}
   * @param {Boolean} captionEnabled
   * @returns {Part}
   */
  withStudioLinkEnabled(studioLinkEnabled) {
    this._studioLinkEnabled = studioLinkEnabled;
    return this.withConfig(DesignJsonProperty.STUDIO_LINK_ENABLED, studioLinkEnabled);
  }

  _buildInternal() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.ID, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.PART_ID, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.PART_CONFIG, config, identity);
    // Deprecated properties, only for older cx-versions
    this._applyPropertyIfDefined(DesignJsonProperty.HTML_EDITOR_CONFIG, config, v => v.identifier, false, true);
    this._applyPropertyIfDefined(DesignJsonProperty.ALT_TEXT_MANDATORY, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.CAPTION_ENABLED, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.STUDIO_LINK_ENABLED, config, identity);

    return config;
  }
}
