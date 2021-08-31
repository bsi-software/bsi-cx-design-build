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

export default class PartFactory {
  /**
   * @returns {BackgroundImagePart}
   */
  get backgroundImage() {
    return new BackgroundImagePart();
  }

  /**
   * @returns {FormCheckboxPart}
   */
  get formCheckbox() {
    return new FormCheckboxPart();
  }

  /**
   * @returns {FormFieldPart}
   */
  get formField() {
    return new FormFieldPart();
  }

  /**
   * @returns {FormPart}
   */
  get form() {
    return new FormPart();
  }

  /**
   * @returns {FormRadioPart}
   */
  get formRadio() {
    return new FormRadioPart();
  }

  /**
   * @returns {FormSelectPart}
   */
  get formSelect() {
    return new FormSelectPart();
  }

  /**
   * @returns {FormTextareaPart}
   */
  get formTextarea() {
    return new FormTextareaPart();
  }

  /**
   * @returns {FormattedTextPart}
   */
  get formattedText() {
    return new FormattedTextPart();
  }

  /**
   * @returns {HtmlPart}
   */
  get html() {
    return new HtmlPart();
  }

  /**
   * @returns {ImagePart}
   */
  get image() {
    return new ImagePart();
  }

  /**
   * @returns {IteratorPart}
   */
  get iterator() {
    return new IteratorPart();
  }

  /**
   * @returns {LinkPart}
   */
  get link() {
    return new LinkPart();
  }

  /**
   * @returns {NewsSnippetsPart}
   */
  get newsSnippet() {
    return new NewsSnippetsPart();
  }

  /**
   * @returns {PlainTextPart}
   */
  get plainText() {
    return new PlainTextPart();
  }

  /**
   * @returns {SocialFollowPart}
   */
  get socialFollow() {
    return new SocialFollowPart();
  }

  /**
   * @returns {SocialSharePart}
   */
  get socialShare() {
    return new SocialSharePart();
  }

  /**
   * @returns {TablePart}
   */
  get table() {
    return new TablePart();
  }

  /**
   * @returns {UrlProviderPart}
   */
  get urlProvider() {
    return new UrlProviderPart();
  }

  /**
   * @returns {VideoPart}
   */
  get video() {
    return new VideoPart();
  }
}
