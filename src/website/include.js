import AbstractInclude from './abstract-include';

/** @typedef {import('./website').default} Website */

/**
 * This is the builder class for {@link Website|website} includes.
 *
 * @example
 * .withIncludes(
 *   cx.pageInclude
 *     .withEditable(true)
 *     .withFile(require('./includes/page.html'))
 *     .withName('Template for new content'),
 *   cx.include
 *     .withIdentifier('header')
 *     .withEditable(true)
 *     .withFile(require('./includes/header.twig'))
 *     .withName('Header'))
 * @since BSI CX 1.3
 */
export default class Include extends AbstractInclude {
  constructor() {
    super(undefined);
  }

  /**
   * Set the unique identifier to use. A UUID v4 will be used, if you don't set this property.
   * <strong>It is recommended to define this property.</strong>
   *
   * @param {string} identifier - A unique identifier for this include.
   * @returns {Include}
   */
  withIdentifier(identifier) {
    this._identifier = identifier;
    return this;
  }

  /**
   * @inheritDoc
   * @param {boolean} editable
   * @returns {Include}
   */
  withEditable(editable) {
    return /** @type {Include} */ super.withEditable(editable);
  }

  /**
   * @inheritDoc
   * @param {{}} file
   * @returns {Include}
   */
  withFile(file) {
    return /** @type {Include} */ super.withFile(file);
  }

  /**
   * @inheritDoc
   * @param {string} name
   * @returns {Include}
   */
  withName(name) {
    return /** @type {Include} */ super.withName(name);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {Include}
   */
  clone(shallow) {
    return this._clone(new Include(), shallow);
  }
}
