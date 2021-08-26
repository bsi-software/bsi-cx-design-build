import {VIDEO} from './part';
import AbstractPart from './abstract-part';

/**
 * @since 1.0
 */
export default class VideoPart extends AbstractPart {
  constructor() {
    super(VIDEO);
  }

  /**
   * @param {String} label
   * @return {VideoPart}
   */
  withLabel(label) {
    return /** @type {VideoPart} */ super.withLabel(label);
  }
}
