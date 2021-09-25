import AbstractInclude from './abstract-include';
import DesignJsonProperty from '../design-json-property';

/**
 * This is the page include builder class.
 *
 * @example
 * new PageInclude()
 *   .withEditable(true)
 *   .withFile(require('./includes/page.html'))
 *   .withName('Template for content')
 * @since BSI CX 1.3
 */
export default class PageInclude extends AbstractInclude {
  constructor() {
    super(DesignJsonProperty.PAGE_INCLUDE);
  }

  /**
   * @inheritDoc
   * @param {boolean} editable
   * @returns {PageInclude}
   */
  withEditable(editable) {
    return /** @type {PageInclude} */ super.withEditable(editable);
  }

  /**
   * @inheritDoc
   * @param {{}} file
   * @returns {PageInclude}
   */
  withFile(file) {
    return /** @type {PageInclude} */ super.withFile(file);
  }

  /**
   * @param {string} name
   * @returns {PageInclude}
   */
  withName(name) {
    return /** @type {PageInclude} */ super.withName(name);
  }

  /**
   * @inheritDoc
   * @param {...Dropzone} dropzones
   * @return {PageInclude}
   */
  withDropzones(...dropzones) {
    return /** @type {PageInclude} */ super.withDropzones(...dropzones);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {PageInclude}
   */
  clone(shallow) {
    return this._clone(new PageInclude(), shallow);
  }
}
