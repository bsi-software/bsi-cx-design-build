import { identity } from '../../browser-utility';
import DesignJsonProperty from '../../design-json-property';
import AbstractPart from './abstract-part';
import { Part } from './part';

/** @typedef {import('./part').Part} Part */
/** @typedef {import('../../design/design').default} Design */
/** @typedef {import('../../html-editor-config/html-editor-config').default} HtmlEditorConfig */

/**
 * @since Studio 23.2
 */
export default class ConfigPart extends AbstractPart {
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
   * @param {Part} partId
   */
  constructor(partId, label, id) {
    var partObj = new Part(partId);
    super(partObj);
    /**
     * @type {Part}
     * @private
     */
    super.withLabel(label);
    super.withId(id);
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
   * @returns {ConfigPart}
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
   * @returns {ConfigPart}
   */
  withCaptionEnabled(captionEnabled) {
    this._captionEnabled = captionEnabled;
    return this.withConfig(DesignJsonProperty.CAPTION_ENABLED, captionEnabled);
  }

  withLabel(label) {
    return super.withLabel(label);
  }

  _buildInternal() {
    let config = super._buildInternal();

    this._applyPropertyIfDefined(DesignJsonProperty.PART_CONFIG, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.HTML_EDITOR_CONFIG, config, v => v.identifier, false, true);
    this._applyPropertyIfDefined(DesignJsonProperty.ALT_TEXT_MANDATORY, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.CAPTION_ENABLED, config, identity);

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {FormFieldPart}
   */
  clone(shallow) {
    return this._clone(new FormFieldPart(), shallow);
  }
}
