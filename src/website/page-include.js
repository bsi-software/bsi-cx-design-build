import AbstractInclude from './abstract-include';
import DesignJsonProperty from '../design-json-property';

/**
 * @since BSI CX 1.3
 */
export default class PageInclude extends AbstractInclude {
  constructor() {
    super(DesignJsonProperty.PAGE_INCLUDE);
  }

  /**
   * @param {boolean} editable
   * @returns {PageInclude}
   */
  withEditable(editable) {
    return /** @type {PageInclude} */ super.withEditable(editable);
  }

  /**
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
   * @param {boolean} [shallow=true]
   * @returns {PageInclude}
   */
  clone(shallow) {
    return this._clone(new PageInclude(), shallow);
  }
}
