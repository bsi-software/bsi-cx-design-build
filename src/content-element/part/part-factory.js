import Part from './part';

export default class PartFactory {
  /**
   * Get a new background content element part builder instance.
   *
   * @returns {Part}
   */
  get backgroundImage() {
    return this.BackgroundImage();
  }

  /**
   * Build a new background content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {Part}
   */
  BackgroundImage(label, id) {
    return new Part('background-image', label, id);
  }

  /**
   * Get a new form content element part builder instance.
   *
   * @returns {Part}
   */
  get form() {
    return this.Form();
  }

  /**
   * Build a new form content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {Part}
   */
  Form(label, id) {
    return new Part('form', label, id);
  }

  /**
   * Get a new checkbox form field content element part builder instance.
   *
   * @returns {Part}
   */
  get formCheckbox() {
    return this.FormCheckbox();
  }

  /**
   * Build a new checkbox form field content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {Part}
   */
  FormCheckbox(label, id) {
    return new Part('form-checkbox', label, id);
  }

  /**
   * Get a new form field content element part builder instance.
   *
   * @returns {Part}
   */
  get formField() {
    return this.FormField();
  }

  /**
   * Build a new form field content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {Part}
   */
  FormField(label, id) {
    return new Part('form-field', label, id);
  }

  /**
   * Get a new radio form field content element part builder instance.
   *
   * @returns {Part}
   */
  get formRadio() {
    return this.FormRadio();
  }

  /**
   * Build a new radio form field content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {Part}
   */
  FormRadio(label, id) {
    return new Part('form-radio', label, id);
  }

  /**
   * Get a new select form field content element part builder instance.
   *
   * @returns {Part}
   */
  get formSelect() {
    return this.FormSelect();
  }

  /**
   * Build a new select form field content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {Part}
   */
  FormSelect(label, id) {
    return new Part('form-select', label, id);
  }

  /**
   * Get a new textarea form field content element part builder instance.
   *
   * @returns {Part}
   */
  get formTextarea() {
    return this.FormTextarea();
  }

  /**
   * Build a new textarea form field content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {Part}
   */
  FormTextarea(label, id) {
    return new Part('form-textarea', label, id);
  }

  /**
   * Get a new formatted text content element part builder instance.
   *
   * @returns {Part}
   */
  get formattedText() {
    return this.FormattedText();
  }

  /**
   * Build a new formatted text content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @param {HtmlEditorConfig} htmlEditorConfig
   * @returns {Part}
   */
  FormattedText(label, id, htmlEditorConfig) {
    var part = new Part('formatted-text', label, id)
    return htmlEditorConfig ? part.withHtmlEditorConfig(htmlEditorConfig) : part;
  }

  /**
   * Get a new HTML content element part builder instance.
   *
   * @returns {Part}
   */
  get html() {
    return this.Html();
  }

  /**
   * Build a new HTML content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {Part}
   */
  Html(label, id) {
    return new Part('html', label, id);
  }

  /**
   * Get a new image content element part builder instance.
   *
   * @returns {Part}
   */
  get image() {
    return this.Image();
  }

  /**
   * Build a new image content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @param {boolean} altTextMandatory
   * @returns {Part}
   */
  Image(label, id, altTextMandatory) {
    var part = new Part('image', label, id);
    return altTextMandatory != null ? part.withAltTextMandatory(altTextMandatory) : part;
  }

  /**
   * Get a new iterator content element part builder instance.
   *
   * @returns {Part}
   */
  get iterator() {
    return this.Iterator();
  }

  /**
   * Build a new iterator content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {Part}
   */
  Iterator(label, id) {
    return new Part('iterator', label, id);
  }

  /**
   * Get a new link content element part builder instance.
   *
   * @returns {Part}
   */
  get link() {
    return this.Link();
  }

  /**
   * Build a new link content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {Part}
   */
  Link(label, id) {
    return new Part('link', label, id);
  }

  /**
   * Get a new news snippet content element part builder instance.
   *
   * @returns {Part}
   */
  get newsSnippet() {
    return this.NewsSnippet();
  }

  /**
   * Build a new news snippet content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {Part}
   */
  NewsSnippet(label, id) {
    return new Part('news-snippets', label, id);
  }

  /**
   * Get a new plain text content element part builder instance.
   *
   * @returns {Part}
   */
  get plainText() {
    return this.PlainText();
  }

  /**
   * Build a new plain text content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {Part}
   */
  PlainText(label, id, studioLinkEnabled) {
    var part = new Part('plain-text', label, id);
    return studioLinkEnabled !== null ? part.withStudioLinkEnabled(studioLinkEnabled) : part;
  }

  /**
   * Get a new social follow content element part builder instance.
   *
   * @returns {Part}
   */
  get socialFollow() {
    return this.SocialFollow();
  }

  /**
   * Build a new social follow content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {Part}
   */
  SocialFollow(label, id) {
    return new Part('social-follow', label, id);
  }

  /**
   * Get a new social share content element part builder instance.
   *
   * @returns {Part}
   */
  get socialShare() {
    return this.SocialShare();
  }

  /**
   * Build a new social share content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {Part}
   */
  SocialShare(label, id) {
    return new Part('social-share', label, id);
  }

  /**
   * Get a new table content element part builder instance.
   *
   * @returns {Part}
   */
  get table() {
    return this.Table();
  }

  /**
   * Build a new table content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @param {boolean} captionEnabled
   * @returns {Part}
   */
  Table(label, id, captionEnabled) {
    var part = new Part('table', label, id);
    return captionEnabled != null ? part.withCaptionEnabled(captionEnabled) : part;
  }

  /**
   * Get a new URL provider content element part builder instance.
   *
   * @returns {Part}
   */
  get urlProvider() {
    return this.UrlProvider();
  }

  /**
   * Build a new URL provider content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {Part}
   */
  UrlProvider(label, id) {
    return new Part('url-provider', label, id);
  }

  /**
   * Get a new video content element part builder instance.
   *
   * @returns {Part}
   */
  get video() {
    return this.Video();
  }

  /**
   * Build a new video content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {Part}
   */
  Video(label, id) {
    return new Part('video', label, id);
  }

  /**
   * Create a raw element part builder instance. Can be used for custom element parts.
   *
   * @param {string} partId
   * @returns {Part}
   */
  raw(partId) {
    return this.Raw(partId);
  }

  /**
   * Create a raw element part builder instance. Can be used for custom element parts.
   *
   * @param {string} partId
   * @param {string} label
   * @param {string} id
   * @returns {Part}
   */
  Raw(partId, label, id) {
    return new Part(partId, label, id);
  }
}
