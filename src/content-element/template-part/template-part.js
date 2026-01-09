import AbstractBuilder from '../../abstract-builder';
import { identity } from '../../browser-utility';
import Constant from '../../constant';
import DesignJsonProperty from '../../design-json-property';
import TemplateElement from '../template-element';

export default class TemplatePart extends AbstractBuilder {
  /**
   * @type {string}
   * @private
   */
  _partContextId = undefined;
  /**
   * @type {string}
   * @private
   */
  _partId = undefined;
  /**
   * @type {string|NLS|undefined}
   * @private
   */
  _label = undefined;
  /**
   * @type {{}|undefined}
   * @private
   */
  _config = undefined;
  /**
   * This Prefill is not part of the json-data.
   * The content of this object is loaded into the context.json of the TemplateElement
   * @see {@link TemplateElement#_loadPrefillIntoContextFile}
   * 
   * @type {{}|undefined}
   * @private
   */
  _prefill = {};

  /**
   * @param {string} partId - partId (eg "plainText")
   * @param {string} label - label of the template part
   * @param {string} partContextId - contextId of part (eg "label-bjp6Z6")
   */
  constructor(partId, label, partContextId) {
    super();
    /**
     * @type {string}
     * @private
     */
    this._partId = partId;
    /**
     * @type {string}
     * @private
     */
    this._label = label;
    /**
     * @type {string}
     * @private
     */
    this._partContextId = partContextId;
  }

  /**
   * @returns {string}
   */
  get partContextId() {
    return this._partContextId;
  }

  /**
   * @returns {string}
   */
  get partId() {
    return this._partId;
  }

  /**
   * @returns {string|NLS|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @returns {{}|undefined}
   */
  get config() {
    return this._config;
  }

  /**
   * This Prefill is not part of the json-data.
   * The content of this object is loaded into the context.json of the TemplateElement
   * @see {@link TemplateElement#_loadPrefillIntoContextFile}
   * 
   * @returns {{}|undefined}
   */
  get prefill() {
    return this._prefill;
  }

  /**
   * Add new key-value pair to config object
   * No changes if value == null
   * 
   * @param {string} key 
   * @param {string} value 
   * @param {boolean?} [isBoolean=false] 
   * @returns {this}
   */
  addConfigValueIfNotNull(key, value, isBoolean = false) {
    if (value !== null) {
      this._config = this._config || {};
      this._config[key] = isBoolean ? !!value : value;
    }
    return this;
  }

  /**
   * Add new key-value pair to prefill object
   * No changes if value == null
   * 
   * @param {string} key 
   * @param {string} value 
   * @param {boolean?} [isBoolean=false] 
   * @returns {this}
   */
  addPrefillValueIfNotNull(key, value, isBoolean = false) {
    if (value || isBoolean) {
      this._prefill[key] = isBoolean ? !!value : value;
    }
    return this;
  }

  /**
   * Add new image src to prefill object
   * No changes if value == null
   * 
   * @param {string} key 
   * @param {string} value 
   * @returns {this}
   */
  addPrefillImageSrc(key, value) {
    if (value) {
      let replacedValue = value.replace(Constant.BSI_CX_DESIGN_BASE_URL, '.');
      this._prefill[key] = replacedValue;
    }
  }

  /**
   * Add new prefill object for a text template part.
   * 
   * @param {string} value 
   * @returns {this}
   */
  withTextPrefill(value) {
    this.addPrefillValueIfNotNull('value', value);
    return this;
  }

  /**
   * Add new prefill object for a checkbox template part.
   * 
   * @param {boolean?} isPreselected is checkbox selected by default
   * @returns {this}
   */
  withCheckboxPrefill(isPreselected) {
    this._prefill = { value: !!isPreselected };
    return this;
  }

  /**
   * Add new prefill object for a option template part.
   * 
   * @param {string} preselectedOption is checkbox selected by default
   * @returns {this}
   */
  withOptionPrefill(preselectedOption) {
    this.addPrefillValueIfNotNull('value', preselectedOption);
    let options = this._config[DesignJsonProperty.OPTIONS];
    if (preselectedOption && options && options.every(option => option.value !== preselectedOption)) {
      console.warn(`Option ${preselectedOption} not found in Options`);
    }
    return this;
  }

  /**
   * Add new prefill object for a formatted text template part.
   * 
   * @param {string} html HTML Text inside formatted text part 
   * @param {string?} languageTag Language tag as a string, that can be used with the lang HTML attribute to hint the language to e.g. screen readers
   * @returns {this}
   */
  withFormattedTextPrefill(html, languageTag) {
    this.addPrefillValueIfNotNull('html', html);
    this.addPrefillValueIfNotNull('languageTag', languageTag);
    return this;
  }

  /**
   * Add new prefill object for a link template part.
   * 
   * @param {string?} url The URL for the link.
   * @param {string?} text The text for the link.
   * @param {string?} description The description for the link.
   * @param {boolean?} openInNewWindow Language tag as a string, that can be used with the lang HTML attribute to hint the language to e.g. screen readers
   * @returns {this}
   */
  withLinkPrefill(url, text, description, openInNewWindow) {
    this.addPrefillValueIfNotNull('url', url);
    this.addPrefillValueIfNotNull('text', text);
    this.addPrefillValueIfNotNull('description', description);
    this.addPrefillValueIfNotNull('openInNewWindow', openInNewWindow, true);
    return this;
  }

  /**
   * Add new prefill object for a image template part.
   * 
   * @param {string?} srcUrl The URL that points to the selected image.
   * @param {string?} placeholderSrcUrl The URL pointing to a placeholder image (used for the content editor)
   * @param {string?} altText Prefilled Alt Text
   * @param {boolean?} decorative boolean indicator to set 'aria-hidden="true"' on the img-tag
   * @param {string?} srcset Srcset-String. Only relevant if sizes have been defined in the design
   * @returns {this}
   */
  withImagePrefill(srcUrl, placeholderSrcUrl, altText, decorative, srcset) {
    this.addPrefillImageSrc('srcUrl', srcUrl);
    this.addPrefillImageSrc('placeholderSrcUrl', placeholderSrcUrl);
    this.addPrefillValueIfNotNull('altText', altText);
    this.addPrefillValueIfNotNull('decorative', decorative, true);
    this.addPrefillValueIfNotNull('srcset', srcset);
    return this;
  }

  /**
   * Add new raw prefill object to template part
   * 
   * @param {prefill} prefillObj 
   * @returns {this}
   */
  withRawPrefill(prefill) {
    this._prefill = prefill;
    return this;
  }

  _buildInternal() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.PART_CONTEXT_ID, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.PART_ID, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.PART_CONFIG, config, identity);

    return config;
  }
}