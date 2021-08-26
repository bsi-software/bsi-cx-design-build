import AbstractInclude from './abstract-include';
import DesignJsonProperty from '../design-json-property';

/**
 * @since 1.3
 */
export default class PageInclude extends AbstractInclude {
  constructor() {
    super(DesignJsonProperty.PAGE_INCLUDE);
  }

  /**
   * @param {boolean} editable
   * @return {PageInclude}
   */
  withEditable(editable) {
    return /** @type {PageInclude} */ super.withEditable(editable);
  }

  /**
   * @param {{}} file
   * @return {PageInclude}
   */
  withFile(file) {
    return /** @type {PageInclude} */ super.withFile(file);
  }

  /**
   * @param {string} name
   * @return {PageInclude}
   */
  withName(name) {
    return /** @type {PageInclude} */ super.withName(name);
  }
}
