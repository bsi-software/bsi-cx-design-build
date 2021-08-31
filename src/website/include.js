import AbstractInclude from './abstract-include';

/**
 * @since BSI CX 1.3
 */
export default class Include extends AbstractInclude {
  constructor() {
    super(undefined);
  }

  /**
   * @param {string} identifier
   * @returns {Include}
   */
  withIdentifier(identifier) {
    this._identifier = identifier;
    return this;
  }

  /**
   * @param {boolean} editable
   * @returns {Include}
   */
  withEditable(editable) {
    return /** @type {Include} */ super.withEditable(editable);
  }

  /**
   * @param {{}} file
   * @returns {Include}
   */
  withFile(file) {
    return /** @type {Include} */ super.withFile(file);
  }

  /**
   * @param {string} name
   * @returns {Include}
   */
  withName(name) {
    return /** @type {Include} */ super.withName(name);
  }

  /**
   * @param {boolean} [shallow=true]
   * @returns {Include}
   */
  clone(shallow) {
    return this._clone(new Include(), shallow);
  }
}
