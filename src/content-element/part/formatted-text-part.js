import {FORMATTED_TEXT} from './part';
import AbstractPart from './abstract-part';
import DesignJsonProperty from '../../design-json-property';
import RawValue from '../../raw-value';

/** @typedef {import('../../design/design').default} Design */
/** @typedef {import('../../html-editor-config/html-editor-config').default} HtmlEditorConfig */

/**
 * @since Studio 1.0
 */
export default class FormattedTextPart extends AbstractPart {
  /**
   * @type {RawValue|HtmlEditorConfig|undefined}
   * @private
   */
  _htmlEditorConfig = undefined;

  constructor() {
    super(FORMATTED_TEXT);
  }

  /**
   * @returns {RawValue|HtmlEditorConfig|undefined}
   */
  get htmlEditorConfig() {
    return this._htmlEditorConfig;
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
    return this;
  }

  /**
   * Set the HTML editor config to use as raw value. You have to pass the unique ID of a HTML editor config here.
   * Be aware, that you also have to register your HTML editor configuration with {@link Design#withHtmlEditorConfigs}.
   *
   * @see {@link withHtmlEditorConfig}
   * @param {string} htmlEditorConfig
   * @returns {FormattedTextPart}
   */
  withRawHtmlEditorConfig(htmlEditorConfig) {
    this._htmlEditorConfig = new RawValue(htmlEditorConfig);
    return this;
  }

  build() {
    let config = super.build();

    this._applyPropertyIfDefined(DesignJsonProperty.HTML_EDITOR_CONFIG, config, v => v.identifier, false, true);

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {FormattedTextPart}
   */
  clone(shallow) {
    return this._clone(new FormattedTextPart(), shallow);
  }
}
