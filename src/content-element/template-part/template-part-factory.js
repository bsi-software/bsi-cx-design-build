import TemplatePart from './template-part';
import DesignJsonProperty from '../../design-json-property';

export default class TemplatePartFactory {

  /**
   * Build a new plain text content element part builder instance.
   *
   * @param {string} label
   * @param {string} partContextId
   * @returns {TemplatePart}
   */
  PlainText(label, partContextId) {
    return new TemplatePart('plain-text', label, partContextId);
  }

  /**
   * Build a new multiple plain text content element part builder instance.
   *
   * @param {string} label
   * @param {string} partContextId
   * @returns {TemplatePart}
   */
  MultiplePlainText(label, partContextId) {
    return new TemplatePart('multiple-plain-text', label, partContextId)
  }

  /**
   * Build a new formatted text content element part builder instance.
   *
   * @param {string} label
   * @param {string} partContextId
   * @param {HtmlEditorConfig} htmlEditorConfig
   * @returns {TemplatePart}
   */
  FormattedText(label, partContextId, htmlEditorConfig) {
    var part = new TemplatePart('formatted-text', label, partContextId)
    return htmlEditorConfig ? part.withConfig(DesignJsonProperty.HTML_EDITOR_CONFIG, htmlEditorConfig.identifier) : part;
  }

  /**
   * Build a new link content element part builder instance.
   *
   * @param {string} label
   * @param {string} partContextId
   * @returns {TemplatePart}
   */
  Link(label, partContextId) {
    return new TemplatePart('link', label, partContextId);
  }

  /**
   * Build a new image content element part builder instance.
   *
   * @param {string} label
   * @param {string} partContextId
   * @param {boolean} altTextMandatory
   * @param {string[]} srcSetSizes ["400w", "800w", "1200w"]
   * @param {HideAccessibilityFields} hideAccessibilityFields
   * @returns {TemplatePart}
   */
  Image(label, partContextId, altTextMandatory, srcSetSizes, hideAccessibilityFields) {
    var part = new TemplatePart('image', label, partContextId);
    part = altTextMandatory != null ? part.withConfig(DesignJsonProperty.ALT_TEXT_MANDATORY, altTextMandatory) : part;
    part = srcSetSizes != null ? part.withConfig(DesignJsonProperty.SRC_SET_SIZES, srcSetSizes) : part;
    part = hideAccessibilityFields != null ? part.withConfig(DesignJsonProperty.HIDE_ACCESSIBILITY_FIELDS, hideAccessibilityFields) : part;
    return part;
  }

  /**
   * Build a new checkbox content element part builder instance.
   *
   * @param {string} label
   * @param {string} partContextId
   * @returns {TemplatePart}
   */
  Checkbox(label, partContextId) {
    return new TemplatePart('checkbox', label, partContextId);
  }

  /**
   * Build a new option content element part builder instance.
   *
   * @param {string} label
   * @param {string} partContextId
   * @param {options[]} options [{"text": "Ja", "value": "yes"}, {"text": "Nein", "value": "no"}]
   * @returns {TemplatePart}
   */
  Option(label, partContextId, options) {
    var part = new TemplatePart('option', label, partContextId);
    part = options != null ? part.withConfig(DesignJsonProperty.OPTIONS, options) : part;
    return new TemplatePart('option', label, partContextId);
  }

  /**
   * Create a raw element part builder instance. Can be used for custom element parts.
   *
   * @param {string} partId
   * @returns {TemplatePart}
   */
  raw(partId) {
    return this.Raw(partId);
  }

  /**
   * Create a raw element part builder instance. Can be used for custom element parts.
   *
   * @param {string} partId
   * @param {string} label
   * @param {string} partContextId
   * @returns {TemplatePart}
   */
  Raw(partId, label, partContextId) {
    return new TemplatePart(partId, label, partContextId);
  }
}
