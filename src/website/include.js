import AbstractInclude from './abstract-include';

/**
 * @since 1.3
 */
export default class Include extends AbstractInclude {
  constructor() {
    super(undefined);
  }

  /**
   * @param {string} identifier
   * @return {Include}
   */
  withIdentifier(identifier) {
    this._identifier = identifier;
    return this;
  }

  /**
   * @param {boolean} editable
   * @return {Include}
   */
  withEditable(editable) {
    return /** @type {Include} */ super.withEditable(editable);
  }

  /**
   * @param {{}} file
   * @return {Include}
   */
  withFile(file) {
    return /** @type {Include} */ super.withFile(file);
  }

  /**
   * @param {string} name
   * @return {Include}
   */
  withName(name) {
    return /** @type {Include} */ super.withName(name);
  }

  /**
   * @param {boolean} [shallow=true]
   * @return {Include}
   */
  clone(shallow) {
    return this._clone(new Include(), shallow);
  }
}
