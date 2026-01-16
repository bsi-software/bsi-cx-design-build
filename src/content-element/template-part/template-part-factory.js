import TemplatePart from './template-part';
import DesignJsonProperty from '../../design-json-property';

export default class TemplatePartFactory {

  /**
   * Build a new plain text content element part builder instance.
   * All variables here define the behavior in the Content Editor.
   * The content is prefilled by the `.withTextPrefill()` function.
   * 
   * @example cx.templatePart.PlainText("Vorname", "prename-abc123").withTextPrefill(...)
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
   * All variables here define the behavior in the Content Editor.
   * The content is prefilled by the `.withTextPrefill()` function.
   * 
   * @example cx.templatePart.MultilinePlainText("Accordion Content", "accordion-content-abc123", 5, true).withTextPrefill(...)
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
   * All variables here define the behavior in the Content Editor.
   * The content is prefilled by the `.withFormattedTextPrefill()` function.
   * 
   * @example cx.templatePart.FormattedText("Accordion Content", "accordion-content-abc123").withFormattedTextPrefill(...)
   *
   * @param {string} label
   * @param {string} partContextId
   * @param {HtmlEditorConfig?} [htmlEditorConfig] - optional parameter
   * @returns {TemplatePart}
   */
  FormattedText(label, partContextId, htmlEditorConfig) {
    var part = new TemplatePart('formatted-text', label, partContextId)
    part = part.addConfigValueIfNotNull(DesignJsonProperty.HTML_EDITOR_CONFIG_ID, htmlEditorConfig.identifier);
    return part;
  }

  /**
   * Build a new link content element part builder instance.
   * All variables here define the behavior in the Content Editor.
   * The content is prefilled by the `.withLinkPrefill()` function.
   * 
   * @example cx.templatePart.Link("Button", "button-abc123").withLinkPrefill(...)
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
   * All variables here define the behavior in the Content Editor.
   * The content is prefilled by the `.withImagePrefill()` function.
   * 
   * @example cx.templatePart.Image("Bild", "image-abc123").withImagePrefill(...)
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
   * All variables here define the behavior in the Content Editor.
   * The content is prefilled by the `.withCheckboxPrefill()` function.
   * 
   * @example cx.templatePart.Checkbox("Show some content", "show-content-abc123").withCheckboxPrefill(...)
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
   * All variables here define the options for the Content Editor.
   * The content is prefilled by the `.withOptionPrefill()` function.
   * 
   * @example cx.templatePart.Option("Button Style", "button-style-abc123", ["Primär": "primary", "Sekundär Outline": "secondary-outline", "Outline dark": "outline-dark"]).withOptionPrefill(...)
   *
   * @param {string} label
   * @param {string} partContextId
   * @param {options[]} options - mandatory - [{"text": "Ja", "value": "yes"}, {"text": "Nein", "value": "no"}] or { "Ja": "Yes", "Nein": "No" }
   * @returns {TemplatePart}
   */
  Option(label, partContextId, options) {
    var part = new TemplatePart('option', label, partContextId);
    // Error handling: Validates the given array of option objects.
    // Ensures that both "text" and "value" fields are unique.
    // Duplicate "text" or "value" entries are not allowed and will throw an error.
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
   * All variables here define the behavior in the Content Editor.
   * The content can not be prefilled yet.
   * 
   * @example cx.templatePart.DynamicValueList("Load List", "list-abc123")
   *
   * @param {string} label
   * @param {string} partContextId
   * @returns {TemplatePart}
   */
  DynamicValueList(label, partContextId) {
    return new TemplatePart('dynamic-value-list', label, partContextId);
  }

  /**
   * Create a raw element part builder instance. 
   * It can be used for custom element parts.
   * All variables here define the behavior in the Content Editor.
   * The content is prefilled by the `.withRawPrefill()` function.
   * 
   * @example cx.templatePart.Raw("futurePart", "Future", "future-abc123").withRawPrefill(...)
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
