import {LINK} from './part';
import AbstractPart from './abstract-part';

/**
 * @since Studio 1.0
 */
export default class LinkPart extends AbstractPart {
  constructor() {
    super(LINK);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {LinkPart}
   */
  clone(shallow) {
    return this._clone(new LinkPart(), shallow);
  }
}
