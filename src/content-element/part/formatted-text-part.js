import {FORMATTED_TEXT} from './part';
import AbstractPart from './abstract-part';
import HtmlEditorConfig from '../../html-editor-config/html-editor-config';
import DesignJsonProperty from '../../design-json-property';

/**
 * @since 1.0
 */
export default class FormattedTextPart extends AbstractPart {
  constructor() {
    super(FORMATTED_TEXT);
    /**
     * @type {HtmlEditorConfig|undefined}
     * @private
     */
    this._htmlEditorConfig = undefined;
  }

  /**
   * @return {HtmlEditorConfig|undefined}
   */
  get htmlEditorConfig() {
    return this._htmlEditorConfig;
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
}
