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
  PlainText(label, partContextId, studioLinkEnabled = true) {
    var part = new TemplatePart('plain-text', label, partContextId);
    return part.addConfigValueIfNotNull(DesignJsonProperty.STUDIO_LINK_ENABLED, studioLinkEnabled, true);
  }

  /**
   * Build a new multiple plain text content element part builder instance.
   *
   * @param {string} label
   * @param {string} partContextId
   * @returns {TemplatePart}
   */
  MultilinePlainText(label, partContextId, fieldHeight, studioLinkEnabled = true) {
    var part = new TemplatePart('multiline-plain-text', label, partContextId);
    part = part.addConfigValueIfNotNull(DesignJsonProperty.FIELD_HEIGHT, fieldHeight);
    return part.addConfigValueIfNotNull(DesignJsonProperty.STUDIO_LINK_ENABLED, studioLinkEnabled, true);
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
    return part.addConfigValueIfNotNull(DesignJsonProperty.HTML_EDITOR_CONFIG, htmlEditorConfig.identifier);
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
   * @param {boolean} hideAccessibilityFields
   * @returns {TemplatePart}
   */
  Image(label, partContextId, altTextMandatory, srcSetSizes, hideAccessibilityFields) {
    var part = new TemplatePart('image', label, partContextId);
    part = part.addConfigValueIfNotNull(DesignJsonProperty.ALT_TEXT_MANDATORY, altTextMandatory, true);
    part = part.addConfigValueIfNotNull(DesignJsonProperty.SRC_SET_SIZES, srcSetSizes);
    part = part.addConfigValueIfNotNull(DesignJsonProperty.HIDE_ACCESSIBILITY_FIELDS, hideAccessibilityFields);
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
   * @param {options[]} options [{"text": "Ja", "value": "yes"}, {"text": "Nein", "value": "no"}] or { "yes": "Ja", "no": "Nein" }
   * @returns {TemplatePart}
   */
  Option(label, partContextId, options) {
    var part = new TemplatePart('option', label, partContextId);
    options = Array.isArray(options) ? options : Object.entries(options).map(([value, text]) => ({ "value": value, "text": text }))
    return part.addConfigValueIfNotNull(DesignJsonProperty.OPTIONS, options);
  }

  /**
   * Build a new dynamic value list content element part builder instance.
   *
   * @param {string} label
   * @param {string} partContextId
   * @returns {TemplatePart}
   */
  DynamicValueList(label, partContextId) {
    return new TemplatePart('dynamic-value-list', label, partContextId);
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
