import TemplatePart from './template-part';
import DesignJsonProperty from '../../design-json-property';

export default class TemplatePartFactory {

  /**
   * Build a new plain text content element part builder instance.
   *
   * @param {string} label
   * @param {string} partContextId
   * @param {boolean?} [studioLinkEnabled=true] - optional parameter
   * @returns {TemplatePart}
   */
  PlainText(label, partContextId, studioLinkEnabled = true) {
    var part = new TemplatePart('plain-text', label, partContextId);
    part = part.addConfigValueIfNotNull(DesignJsonProperty.STUDIO_LINK_ENABLED, studioLinkEnabled, true);
    return part;
  }

  /**
   * Build a new multiple plain text content element part builder instance.
   *
   * @param {string} label
   * @param {string} partContextId
   * @param {int?} [fieldHeight] - optional parameter
   * @param {boolean?} [studioLinkEnabled=true] - optional parameter
   * @returns {TemplatePart}
   */
  MultilinePlainText(label, partContextId, fieldHeight, studioLinkEnabled = true) {
    var part = new TemplatePart('multiline-plain-text', label, partContextId);
    part = part.addConfigValueIfNotNull(DesignJsonProperty.FIELD_HEIGHT, fieldHeight);
    part = part.addConfigValueIfNotNull(DesignJsonProperty.STUDIO_LINK_ENABLED, studioLinkEnabled, true);
    return part;
  }

  /**
   * Build a new formatted text content element part builder instance.
   *
   * @param {string} label
   * @param {string} partContextId
   * @param {HtmlEditorConfig?} [htmlEditorConfig] - optional parameter
   * @returns {TemplatePart}
   */
  FormattedText(label, partContextId, htmlEditorConfig) {
    var part = new TemplatePart('formatted-text', label, partContextId)
    part = part.addConfigValueIfNotNull(DesignJsonProperty.HTML_EDITOR_CONFIG, htmlEditorConfig.identifier);
    return part;
  }

  /**
   * Build a new link content element part builder instance.
   *
   * @param {string} label
   * @param {string} partContextId
   * @param {boolean?} [descriptionEnabled=true] - optional parameter to enable / disable description property
   * @param {boolean?} [textEnabled=true] - optional parameter to enable / disable text property
   * @returns {TemplatePart}
   */
  Link(label, partContextId, descriptionEnabled=true, textEnabled=true) {
    var part = new TemplatePart('link', label, partContextId);
    part.addConfigValueIfNotNull(DesignJsonProperty.DESCRIPTION_ENABLED, descriptionEnabled);
    part.addConfigValueIfNotNull(DesignJsonProperty.TEXT_ENABLED, textEnabled);
    return part;
  }

  /**
   * Build a new image content element part builder instance.
   *
   * @param {string} label
   * @param {string} partContextId
   * @param {boolean?} [altTextMandatory=true] - optional parameter
   * @param {string[]?} [srcSetSizes] - optional parameter - example: ["400w", "800w", "1200w"]
   * @param {boolean?} [hideAccessibilityFields=false] - optional parameter
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
   * Options must not be null.
   *
   * @param {string} label
   * @param {string} partContextId
   * @param {options[]} options - mandatory - [{"text": "Ja", "value": "yes"}, {"text": "Nein", "value": "no"}] or { "Ja": "Yes", "Nein": "No" }
   * @returns {TemplatePart}
   */
  Option(label, partContextId, options) {
    var part = new TemplatePart('option', label, partContextId);
    options = Array.isArray(options) ? options : Object.entries(options).map(([text, value]) => ({  "text": text, "value": value }))
    if(new Set(options.map(option => option.text)).size !== options.length) {
      let optionString = options.map(option => `{ text: ${option.text}, value: ${option.value} }`).join(', ');
      throw new Error(`text in ${optionString} have to be unique`);
    };
    if(new Set(options.map(option => option.value)).size !== options.length) {
      let optionString = options.map(option => `{ text: ${option.text}, value: ${option.value} }`).join(', ');
      throw new Error(`value in ${optionString} have to be unique`);
    };

    part = part.addConfigValueIfNotNull(DesignJsonProperty.OPTIONS, options);
    return part;
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
