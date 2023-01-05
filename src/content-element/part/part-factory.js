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
import SocialFollowPart from './social-follow-part';
import SocialSharePart from './social-share-part';
import TablePart from './table-part';
import UrlProviderPart from './url-provider-part';
import VideoPart from './video-part';
import RawPart from './raw';

export default class PartFactory {
  /**
   * Get a new background content element part builder instance.
   *
   * @returns {BackgroundImagePart}
   */
  get backgroundImage() {
    return new BackgroundImagePart();
  }

  /**
   * Get a new checkbox form field content element part builder instance.
   *
   * @returns {FormCheckboxPart}
   */
  get formCheckbox() {
    return new FormCheckboxPart();
  }

  /**
   * Get a new form field content element part builder instance.
   *
   * @returns {FormFieldPart}
   */
  get formField() {
    return new FormFieldPart();
  }

  /**
   * Get a new form content element part builder instance.
   *
   * @returns {FormPart}
   */
  get form() {
    return new FormPart();
  }

  /**
   * Get a new radio form field content element part builder instance.
   *
   * @returns {FormRadioPart}
   */
  get formRadio() {
    return new FormRadioPart();
  }

  /**
   * Get a new select form field content element part builder instance.
   *
   * @returns {FormSelectPart}
   */
  get formSelect() {
    return new FormSelectPart();
  }

  /**
   * Get a new textarea form field content element part builder instance.
   *
   * @returns {FormTextareaPart}
   */
  get formTextarea() {
    return new FormTextareaPart();
  }

  /**
   * Get a new formatted text content element part builder instance.
   *
   * @returns {FormattedTextPart}
   */
  get formattedText() {
    return new FormattedTextPart();
  }

  /**
   * Get a new HTML content element part builder instance.
   *
   * @returns {HtmlPart}
   */
  get html() {
    return new HtmlPart();
  }

  /**
   * Get a new image content element part builder instance.
   *
   * @returns {ImagePart}
   */
  get image() {
    return new ImagePart();
  }

  /**
   * Get a new iterator content element part builder instance.
   *
   * @returns {IteratorPart}
   */
  get iterator() {
    return new IteratorPart();
  }

  /**
   * Get a new link content element part builder instance.
   *
   * @returns {LinkPart}
   */
  get link() {
    return new LinkPart();
  }

  /**
   * Get a new news snippet content element part builder instance.
   *
   * @returns {NewsSnippetsPart}
   */
  get newsSnippet() {
    return new NewsSnippetsPart();
  }

  /**
   * Get a new plain text content element part builder instance.
   *
   * @returns {PlainTextPart}
   */
  get plainText() {
    return new PlainTextPart();
  }

  /**
   * Get a new social follow content element part builder instance.
   *
   * @returns {SocialFollowPart}
   */
  get socialFollow() {
    return new SocialFollowPart();
  }

  /**
   * Get a new social share content element part builder instance.
   *
   * @returns {SocialSharePart}
   */
  get socialShare() {
    return new SocialSharePart();
  }

  /**
   * Get a new table content element part builder instance.
   *
   * @returns {TablePart}
   */
  get table() {
    return new TablePart();
  }

  /**
   * Get a new URL provider content element part builder instance.
   *
   * @returns {UrlProviderPart}
   */
  get urlProvider() {
    return new UrlProviderPart();
  }

  /**
   * Get a new video content element part builder instance.
   *
   * @returns {VideoPart}
   */
  get video() {
    return new VideoPart();
  }

  /**
   * Create a raw element part builder instance. Can be used for custom element parts.
   *
   * @param {string} partId
   * @returns {RawPart}
   */
  raw(partId) {
    return new RawPart(partId);
  }
}
