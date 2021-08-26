import {LINK} from './part';
import AbstractPart from './abstract-part';

/**
 * @since 1.0
 */
export default class LinkPart extends AbstractPart {
  constructor() {
    super(LINK);
  }

  /**
   * @param {String} label
   * @return {LinkPart}
   */
  withLabel(label) {
    return /** @type {LinkPart} */ super.withLabel(label);
  }
}
