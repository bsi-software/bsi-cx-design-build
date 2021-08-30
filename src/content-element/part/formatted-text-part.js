import {FORMATTED_TEXT} from './part';
import AbstractPart from './abstract-part';
import HtmlEditorConfig from '../../html-editor-config/html-editor-config';
import DesignJsonProperty from '../../design-json-property';

/**
 * @since Studio 1.0
 */
export default class FormattedTextPart extends AbstractPart {
  /**
   * @type {HtmlEditorConfig|undefined}
   * @private
   */
  _htmlEditorConfig = undefined;

  constructor() {
    super(FORMATTED_TEXT);
  }

  /**
   * @return {HtmlEditorConfig|undefined}
   */
  get htmlEditorConfig() {
    return this._htmlEditorConfig;
  }

  /**
   * @param {String} label
   * @return {FormattedTextPart}
   */
  withLabel(label) {
    return /** @type {FormattedTextPart} */ super.withLabel(label);
  }

  /**
   * @param {HtmlEditorConfig} htmlEditorConfig
   * @return {FormattedTextPart}
   */
  withHtmlEditorConfig(htmlEditorConfig) {
    this._htmlEditorConfig = htmlEditorConfig;
    return this;
  }

  build() {
    let config = super.build();

    this._applyPropertyIfDefined(DesignJsonProperty.HTML_EDITOR_CONFIG, config, v => v.identifier);

    return config;
  }

  /**
   * @param {boolean} [shallow=true]
   * @return {FormattedTextPart}
   */
  clone(shallow) {
    return this._clone(new FormattedTextPart(), shallow);
  }
}
