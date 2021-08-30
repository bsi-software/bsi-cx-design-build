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
   * @return {string|undefined}
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * @return {boolean|undefined}
   */
  get editable() {
    return this._editable;
  }

  /**
   * @return {{}|undefined}
   */
  get file() {
    return this._file;
  }

  /**
   * @return {string|undefined}
   */
  get name() {
    return this._name;
  }

  /**
   * @param {string} identifier
   * @return {AbstractInclude}
   */
  withIdentifier(identifier) {
    this._identifier = identifier;
    return this;
  }

  /**
   * @param {boolean} editable
   * @return {AbstractInclude}
   */
  withEditable(editable) {
    this._editable = editable;
    return this;
  }

  /**
   * @param {{}} file
   * @return {AbstractInclude}
   */
  withFile(file) {
    this._file = file;
    return this;
  }

  /**
   * @param {string} name
   * @return {AbstractInclude}
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
