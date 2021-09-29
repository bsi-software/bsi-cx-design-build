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
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {PageInclude}
   */
  clone(shallow) {
    return this._clone(new PageInclude(), shallow);
  }
}
