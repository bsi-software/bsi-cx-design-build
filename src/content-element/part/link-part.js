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
   * @inheritDoc
   * @returns {LinkPart}
   */
  withLabel(label) {
    return /** @type {LinkPart} */ super.withLabel(label);
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
