import AbstractBuilder from '../abstract-builder';
import { builderObjectValue, constantObjectValue, identity, uuid } from '../browser-utility';
import DesignJsonProperty from '../design-json-property';
import DesignJsonPropertyExtension from '../design-json-property-extension';
import { WEBSITE } from '../design-type';
import { CX_1_3 } from '../version';

/** @typedef {import('../dropzone/dropzone').default} Dropzone */
/** @typedef {import('../content-element/content-element').default} ContentElement */
/** @typedef {import('../content-element/template-element').default} TemplateElement */

/**
 * @abstract
 * @since BSI CX 1.3
 */
export default class AbstractInclude extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @protected
   */
  _identifier = uuid();
  /**
   * @type {boolean|undefined}
   * @protected
   */
  _editable = undefined;
  /**
   * @type {string|undefined}
   * @protected
   */
  _includeType = undefined;
  /**
   * @type {string|WebsiteContentType|undefined}
   * @protected
   */
  _websiteContentType = undefined;
  /**
   * @type {{}|undefined}
   * @protected
   */
  _file = undefined;
  /**
   * @type {string|NLS|undefined}
   * @protected
   */
  _name = undefined;
  /**
   * @type {Dropzone[]|undefined}
   * @private
   */
  _dropzones = undefined;

  /**
   * @param {string|undefined} identifier
   */
  constructor(identifier) {
    super();
    /**
     * @type {string|undefined}
     * @protected
     */
    this._identifier = identifier;
  }

  /**
   * @returns {string|undefined}
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * @returns {boolean|undefined}
   */
  get editable() {
    return this._editable;
  }

  /**
   * @returns {string|undefined}
   */
  get includeType() {
    return this._includeType;
  }

  /**
   * @returns {string|WebsiteContentType|undefined}
   */
  get websiteContentType() {
    return this._websiteContentType;
  }

  /**
   * @returns {{}|undefined}
   */
  get file() {
    return this._file;
  }

  /**
   * @returns {string|NLS|undefined}
   */
  get name() {
    return this._name;
  }

  /**
   * @returns {Dropzone[]|undefined}
   */
  get dropzones() {
    return this._dropzones;
  }

  get minVersion() {
    return CX_1_3;
  }

  get allowedTypes() {
    return [WEBSITE];
  }

  /**
   * Enable or disable edit mode on this include.
   *
   * @param {boolean} editable - The editable flag.
   * @returns {this}
   */
  withEditable(editable) {
    this._editable = editable;
    return this;
  }

  /**
   * Define the type of this include.
   *
   * @example
   * .withIncludeType('pre-defined')
   * @param {string} includeType - The type of this include.
   * @returns {this}
   */
  withIncludeType(includeType) {
    this._includeType = includeType;
    return this;
  }

  /**
   * Define the website content type of this include.
   * If set the choosen WebsiteContentType use this include.
   * 
   * For example: if the WebsiteContentType is BLOG, every blogpost in this Website use this include as template
   *
   * @example
   * .withWebsiteContentType(WebsiteContentType.BLOG)
   * @param {WebsiteContentType} websiteContentType - The website content type of this include.
   * @returns {this}
   */
  withWebsiteContentType(websiteContentType) {
    this._websiteContentType = websiteContentType;
    return this;
  }

  /**
   * Define the template to use with this include. Be aware, that you must <code>require</code> the corresponding
   * template file. This can either be a \*.html, \*.hbs, \*.hbs.twig or a \*.twig file.
   *
   * @example
   * .withFile(require('./footer.html'))
   * @param {{}} file - The file object. Just pass the response of your require statement.
   * @returns {this}
   */
  withFile(file) {
    this._file = file;
    return this;
  }

  /**
   * Set the name of this include. In contrast to the {@link identifier}, this property must not be unique.
   *
   * @param {string|NLS} name - The name of this include.
   * @returns {this}
   */
  withName(name) {
    this._name = name;
    return this;
  }

  /**
   * Define the dropzones of this include.
   *
   * @example
   * .withDropzones(
   *   cx.dropzone
   *     .withDropzone('a5142bca-448b-40c5-bdde-942f531fcd12')
   *     .withAllowedElements(
   *       require('./content-elements/basic/text'),
   *       require('./content-elements/basic/image'))
   *     .withMaxAllowedElements(1),
   *   cx.dropzone
   *     .withDropzone('3b369b8b-f1f6-4754-bb0f-e49a46c315e1')
   *     .withAllowedElements(
   *       require('./content-elements/basic/text'),
   *       require('./content-elements/basic/image'))
   *     .withMaxAllowedElements(1))
   * @param {...Dropzone} dropzones - The dropzones of this include.
   * @returns {this}
   */
  withDropzones(...dropzones) {
    this._dropzones = dropzones;
    return this;
  }

  /**
   * Extend the allowed elements list of a defined dropzone. Be aware that this only works when you define your allowed
   * elements by using the provided builder class with the {@link Dropzone#withAllowedElements} method.
   *
   * @example
   * .withExtendedDropzone(
   *   'a5142bca-448b-40c5-bdde-942f531fcd12',
   *   require('./content-elements/basic/text'),
   *   require('./content-elements/basic/image'))
   * @param {string} id - The ID of the dropzone to extend (set with {@link Dropzone#withDropzone}).
   * @param {...(ContentElement | TemplateElement)} elements - The elements to add to the allowed elements list.
   * @returns {this}
   */
  withExtendedDropzone(id, ...elements) {
    let dropzone = this._dropzones?.find(dropzone => dropzone.dropzone === id);

    if (dropzone) {
      dropzone.withAllowedElements(...dropzone.allowedElements, ...elements);
    }

    return this;
  }

    /**
   * Reduces the allowed elements list of a defined dropzone. Be aware that this only works when you define your allowed
   * elements by using the provided builder class with the {@link Dropzone#withAllowedElements} method.
   *
   * @example
   * .withReducedDropzone(
   *   'a5142bca-448b-40c5-bdde-942f531fcd12',
   *   require('./content-elements/basic/text'),
   *   require('./content-elements/basic/image'))
   * @param {string} id - The ID of the dropzone to reduce (set with {@link Dropzone#withDropzone}).
   * @param {...(ContentElement | TemplateElement)} elements - The elements to remove from the allowed elements list.
   * @returns {this}
   */
    withReducedDropzone(id, ...elements) {
      let dropzone = this._dropzones?.find(dropzone => dropzone.dropzone === id);
  
      if (dropzone) {
        let removeIds = elements.map(el => el.elementId);
        let allowedElements = dropzone.allowedElements;
        allowedElements = allowedElements.filter(el => !removeIds.includes(el.elementId));
        dropzone.withAllowedElements(...allowedElements);
      }
  
      return this;
    }
  
  _buildInternal() {
    let config = {};
    let include = {};

    config[this.identifier] = include;

    this._applyPropertyIfDefined(DesignJsonProperty.EDITABLE, include, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.INCLUDE_TYPE, include, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.WEBSITE_CONTENT_TYPE, include, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.FILE, include, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.NAME, include, identity);
    this._applyPropertyIfDefined(DesignJsonPropertyExtension.DROPZONES, include, builderObjectValue);

    return config;
  }
}
