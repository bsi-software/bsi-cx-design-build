import AbstractBuilder from '../abstract-builder';
import DesignJsonProperty from '../design-json-property';
import {identity} from '../browser-utility';

/**
 * @abstract
 * @since BSI CX 1.3
 */
export default class AbstractInclude extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @protected
   */
  _identifier = undefined;
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
   * @param {string} identifier
   * @returns {AbstractInclude}
   */
  withIdentifier(identifier) {
    this._identifier = identifier;
    return this;
  }

  /**
   * @param {boolean} editable
   * @returns {AbstractInclude}
   */
  withEditable(editable) {
    this._editable = editable;
    return this;
  }

  /**
   * @param {{}} file
   * @returns {AbstractInclude}
   */
  withFile(file) {
    this._file = file;
    return this;
  }

  /**
   * @param {string} name
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
