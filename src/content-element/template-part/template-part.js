import AbstractBuilder from '../../abstract-builder';
import { identity } from '../../browser-utility';
import DesignJsonProperty from '../../design-json-property';

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
   * @type {{}|undefined}
   * @private
   */
  _context = {};

  /**
   * @param {string} partId
   */
  constructor(partId, label, partContextId, context) {
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
   * @returns {{}|undefined}
   */
  get context() {
    return this._context;
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
   * Add new key-value pair to context object
   * No changes if value == null
   * 
   * @param {string} key 
   * @param {string} value 
   * @param {boolean?} [isBoolean=false] 
   * @returns {this}
   */
  addContextValueIfNotNull(key, value, isBoolean = false) {
    if (value !== null) {
      this._context = this._context || {};
      this._context[key] = isBoolean ? !!value : value;
    }
    return this;
  }

  /**
   * Add new context object for a text template part.
   * 
   * @param {string} value 
   * @returns {this}
   */
  withTextContext(value) {
    this.addContextValueIfNotNull('value', value);
    return this;
  }

  /**
   * Add new context object for a checkbox template part.
   * 
   * @param {boolean?} isPreselected is checkbox selected by default
   * @returns {this}
   */
  withCheckboxContext(isPreselected) {
    this._context = { value: !!isPreselected };
    return this;
  }

  /**
   * Add new context object for a option template part.
   * 
   * @param {string} preselectedOption is checkbox selected by default
   * @returns {this}
   */
  withOptionContext(preselectedOption) {
    this.addContextValueIfNotNull('value', preselectedOption);
    let options = this._config[DesignJsonProperty.OPTIONS];
    if (preselectedOption && options && options.every(option => option.value !== preselectedOption)) {
      console.warn(`Option ${preselectedOption} not found in Options`);
    }
    return this;
  }

  /**
   * Add new context object for a formatted text template part.
   * 
   * @param {string} html HTML Text inside formatted text part 
   * @param {string?} languageTag Language tag as a string, that can be used with the lang HTML attribute to hint the language to e.g. screen readers
   * @returns {this}
   */
  withFormattedTextContext(html, languageTag) {
    this.addContextValueIfNotNull('html', html);
    this.addContextValueIfNotNull('languageTag', languageTag);
    return this;
  }

  /**
   * Add new context object for a link template part.
   * 
   * @param {string?} url The URL for the link.
   * @param {string?} text The text for the link.
   * @param {string?} description The description for the link.
   * @param {boolean?} openInNewWindow Language tag as a string, that can be used with the lang HTML attribute to hint the language to e.g. screen readers
   * @returns {this}
   */
  withLinkContext(url, text, description, openInNewWindow) {
    this.addContextValueIfNotNull('url', url);
    this.addContextValueIfNotNull('text', text);
    this.addContextValueIfNotNull('description', description);
    this.addContextValueIfNotNull('openInNewWindow', openInNewWindow, true);
    return this;
  }

  /**
   * Add new context object for a image template part.
   * 
   * @param {string?} placeholderSrcUrl The URL pointing to a placeholder image (used for the content editor)
   * @param {string?} srcUrl The URL that points to the selected image.
   * @param {string?} altText Prefilled Alt Text
   * @param {boolean?} decorative boolean indicator to set 'aria-hidden="true"' on the img-tag
   * @param {string?} srcset Srcset-String. Only relevant if sizes have been defined in the design
   * @returns {this}
   */
  withImageContext(srcUrl, placeholderSrcUrl, altText, decorative, srcset) {
    this.addContextValueIfNotNull('srcUrl', srcUrl);
    this.addContextValueIfNotNull('placeholderSrcUrl', placeholderSrcUrl);
    this.addContextValueIfNotNull('altText', altText);
    this.addContextValueIfNotNull('decorative', decorative, true);
    this.addContextValueIfNotNull('srcset', srcset);
    return this;
  }

  /**
   * Add new raw context object to template part
   * 
   * @param {context} contextObj 
   * @returns {this}
   */
  withRawContext(context) {
    this._context = context;
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