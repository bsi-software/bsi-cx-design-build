import HtmlEditorConfig from '../../html-editor-config/html-editor-config';
import ConfigPart from './config-part';

export default class ConfigPartFactory {
  /**
   * Get a new background content element part builder instance.
   *
   * @returns {ConfigPart}
   */
  get backgroundImage() {
    return new ConfigPart('background-image');
  }

  /**
   * Get a new plain text content element part builder instance.
   *
   * @returns {ConfigPart}
   */
  get plainText() {
    return new ConfigPart('plain-text');
  }

  /**
   * Build a new background content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  BackgroundImage(label, id) {
    return new ConfigPart('background-image', label, id);
  }

  /**
   * Build a new checkbox form field content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  formCheckbox(label, id) {
    return new ConfigPart('form-checkbox', label, id);
  }

  /**
   * Build a new form field content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  formField(label, id) {
    return new ConfigPart('form-field', label, id);
  }

  /**
   * Build a new form content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  form(label, id) {
    return new ConfigPart('form', label, id);
  }

  /**
   * Build a new radio form field content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  formRadio(label, id) {
    return new ConfigPart('form-radio', label, id);
  }

  /**
   * Build a new select form field content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  formSelect(label, id) {
    return new ConfigPart('form-select', label, id);
  }

  /**
   * Build a new textarea form field content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  formTextarea(label, id) {
    return new ConfigPart('form-textarea', label, id);
  }

  /**
   * Build a new formatted text content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @param {HtmlEditorConfig} htmlEditorConfig
   * @returns {ConfigPart}
   */
  formattedText(label, id, htmlEditorConfig) {
    var part = new ConfigPart('formatted-text', label, id)
    return htmlEditorConfig ? part.withHtmlEditorConfig(htmlEditorConfig) : part;
  }

  /**
   * Build a new HTML content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  html(label, id) {
    return new ConfigPart('html', label, id);
  }

  /**
   * Build a new image content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @param {boolean} altTextMandatory
   * @returns {ConfigPart}
   */
  image(label, id, altTextMandatory) {
    var part = new ConfigPart('image', label, id);
    return altTextMandatory !== null ? part.withAltTextMandatory(altTextMandatory) : part;
  }

  /**
   * Build a new iterator content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  iterator(label, id) {
    return new ConfigPart('iterator', label, id);
  }

  /**
   * Build a new link content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  link(label, id) {
    return new ConfigPart('link', label, id);
  }

  /**
   * Build a new news snippet content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  newsSnippet(label, id) {
    return new ConfigPart('news-snippets', label, id);
  }

  /**
   * Build a new plain text content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  PlainText(label, id) {
    return new ConfigPart('plain-text', label, id);
  }

  /**
   * Build a new social follow content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  socialFollow(label, id) {
    return new ConfigPart('social-follow', label, id);
  }

  /**
   * Build a new social share content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  socialShare(label, id) {
    return new ConfigPart('social-share', label, id);
  }

  /**
   * Build a new table content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @param {boolean} captionEnabled
   * @returns {ConfigPart}
   */
  table(label, id, captionEnabled) {
    var part = new ConfigPart('table', label, id);
    return captionEnabled !== null ? part.withCaptionEnabled(captionEnabled) : part;
  }

  /**
   * Build a new URL provider content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  urlProvider(label, id) {
    return new ConfigPart('url-provider', label, id);
  }

  /**
   * Build a new video content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  video(label, id) {
    return new ConfigPart('video', label, id);
  }

  /**
   * Create a raw element part builder instance. Can be used for custom element parts.
   *
   * @param {string} partId
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  raw(partId, label, id) {
    return new ConfigPart(partId, label, id);
  }
}
