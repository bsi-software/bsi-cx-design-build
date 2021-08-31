import AbstractBuilder from '../abstract-builder';
import DesignJsonProperty from '../design-json-property';
import {identity, uuid} from '../browser-utility';

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
   * @param {string} name -
   * @returns {AbstractInclude}
   */
  withName(name) {
    this._name = name;
    return this;
  }

  build() {
    let config = {};
    let include = {};

    config[this.identifier] = include;

    this._applyPropertyIfDefined(DesignJsonProperty.EDITABLE, include, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.FILE, include, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.NAME, include, identity);

    return config;
  }
}
