import AbstractBuilder from '../abstract-builder';
import DesignJsonProperty from '../design-json-property';
import {builderObjectValue, identity, uuid} from '../browser-utility';
import DesignJsonPropertyExtension from '../design-json-property-extension';

/** @typedef {import('../dropzone/dropzone').default} Dropzone */

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
   * @type {{}|undefined}
   * @protected
   */
  _file = undefined;
  /**
   * @type {string|undefined}
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
   * @returns {{}|undefined}
   */
  get file() {
    return this._file;
  }

  /**
   * @returns {string|undefined}
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

  /**
   * Enable or disable edit mode on this include.
   *
   * @param {boolean} editable - The editable flag.
   * @returns {AbstractInclude}
   */
  withEditable(editable) {
    this._editable = editable;
    return this;
  }

  /**
   * Define the template to use with this include. Be aware, that you must <code>require</code> the corresponding
   * template file. This can either be a \*.html, \*.hbs, \*.hbs.twig or a \*.twig file.
   *
   * @example
   * .withFile(require('./footer.html'))
   * @param {{}} file - The file object. Just pass the response of your require statement.
   * @returns {AbstractInclude}
   */
  withFile(file) {
    this._file = file;
    return this;
  }

  /**
   * Set the name of this include. In contrast to the {@link identifier}, this property must not be unique.
   *
   * @param {string} name - The name of this include.
   * @returns {AbstractInclude}
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
   * @returns {AbstractInclude}
   */
  withDropzones(...dropzones) {
    this._dropzones = dropzones;
    return this;
  }

  build() {
    let config = {};
    let include = {};

    config[this.identifier] = include;

    this._applyPropertyIfDefined(DesignJsonProperty.EDITABLE, include, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.FILE, include, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.NAME, include, identity);
    this._applyPropertyIfDefined(DesignJsonPropertyExtension.DROPZONES, include, builderObjectValue);

    return config;
  }
}
