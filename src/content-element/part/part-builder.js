import AbstractPart from './abstract-part';
import BackgroundImagePart from './background-image-part';
import FormCheckboxPart from './form-checkbox-part';
import FormFieldPart from './form-field-part';
import FormPart from './form-part';
import FormRadioPart from './form-radio-part';
import FormSelectPart from './form-select-part';
import FormTextareaPart from './form-textarea-part';
import FormattedTextPart from './formatted-text-part';
import HtmlPart from './html-part';
import ImagePart from './image-part';
import IteratorPart from './iterator-part';
import LinkPart from './link-part';
import NewsSnippetsPart from './news-snippets-part';
import PlainTextPart from './plain-text-part';
import RawPart from './raw';
import SocialFollowPart from './social-follow-part';
import SocialSharePart from './social-share-part';
import TablePart from './table-part';
import UrlProviderPart from './url-provider-part';
import VideoPart from './video-part';

export default class PartBuilder {
  /**
   * Build a new background content element part builder instance.
   *
   * @returns {BackgroundImagePart}
   */
  backgroundImage(label, id) {
    return this._initPart(new BackgroundImagePart(), label, id);
  }

  /**
   * Build a new checkbox form field content element part builder instance.
   *
   * @returns {FormCheckboxPart}
   */
  formCheckbox(label, id) {
    return this._initPart(new FormCheckboxPart(), label, id);
  }

  /**
   * Build a new form field content element part builder instance.
   *
   * @returns {FormFieldPart}
   */
  formField(label, id) {
    return this._initPart(new FormFieldPart(), label, id);
  }

  /**
   * Build a new form content element part builder instance.
   *
   * @returns {FormPart}
   */
  form(label, id) {
    return this._initPart(new FormPart(), label, id);
  }

  /**
   * Build a new radio form field content element part builder instance.
   *
   * @returns {FormRadioPart}
   */
  formRadio(label, id) {
    return this._initPart(new FormRadioPart(), label, id);
  }

  /**
   * Build a new select form field content element part builder instance.
   *
   * @returns {FormSelectPart}
   */
  formSelect(label, id) {
    return this._initPart(new FormSelectPart(), label, id);
  }

  /**
   * Build a new textarea form field content element part builder instance.
   *
   * @returns {FormTextareaPart}
   */
  formTextarea(label, id) {
    return this._initPart(new FormTextareaPart(), label, id);
  }

  /**
   * Build a new formatted text content element part builder instance.
   *
   * @returns {FormattedTextPart}
   */
  formattedText(label, id) {
    return this._initPart(new FormattedTextPart(), label, id);
  }

  /**
   * Build a new HTML content element part builder instance.
   *
   * @returns {HtmlPart}
   */
  html(label, id) {
    return this._initPart(new HtmlPart(), label, id);
  }

  /**
   * Build a new image content element part builder instance.
   *
   * @returns {ImagePart}
   */
  image(label, id) {
    return this._initPart(new ImagePart(), label, id);
  }

  /**
   * Build a new iterator content element part builder instance.
   *
   * @returns {IteratorPart}
   */
  iterator(label, id) {
    return this._initPart(new IteratorPart(), label, id);
  }

  /**
   * Build a new link content element part builder instance.
   *
   * @returns {LinkPart}
   */
  link(label, id) {
    return this._initPart(new LinkPart(), label, id);
  }

  /**
   * Build a new news snippet content element part builder instance.
   *
   * @returns {NewsSnippetsPart}
   */
  newsSnippet(label, id) {
    return this._initPart(new NewsSnippetsPart(), label, id);
  }

  /**
   * Build a new plain text content element part builder instance.
   *
   * @returns {PlainTextPart}
   */
  plainText(label, id) {
    return this._initPart(new PlainTextPart(), label, id);
  }

  /**
   * Build a new social follow content element part builder instance.
   *
   * @returns {SocialFollowPart}
   */
  socialFollow(label, id) {
    return this._initPart(new SocialFollowPart(), label, id);
  }

  /**
   * Build a new social share content element part builder instance.
   *
   * @returns {SocialSharePart}
   */
  socialShare(label, id) {
    return this._initPart(new SocialSharePart(), label, id);
  }

  /**
   * Build a new table content element part builder instance.
   *
   * @returns {TablePart}
   */
  table(label, id) {
    return this._initPart(new TablePart(), label, id);
  }

  /**
   * Build a new URL provider content element part builder instance.
   *
   * @returns {UrlProviderPart}
   */
  urlProvider(label, id) {
    return this._initPart(new UrlProviderPart(), label, id);
  }

  /**
   * Build a new video content element part builder instance.
   *
   * @returns {VideoPart}
   */
  video(label, id) {
    return this._initPart(new VideoPart(), label, id);
  }

  /**
   * Create a raw element part builder instance. Can be used for custom element parts.
   *
   * @param {string} partId
   * @param {string} label
   * @param {string} id
   * @returns {RawPart}
   */
  raw(partId, label, id) {
    return this._initPart(new RawPart(partId), label, id);
  }

  /**
   * Create a raw element part builder instance. Can be used for custom element parts.
   *
   * @param {AbstractPart} part
   * @param {string} label
   * @param {string} id
   * @returns {RawPart}
   */
  _initPart(part, label, id){
    return part.withLabel(label).withId(id);
  }
}
