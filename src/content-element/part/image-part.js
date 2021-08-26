import {IMAGE} from './part';
import AbstractPart from './abstract-part';

/**
 * @since 1.0
 */
export default class ImagePart extends AbstractPart {
  constructor() {
    super(IMAGE);
  }

  /**
   * @param {String} label
   * @return {ImagePart}
   */
  withLabel(label) {
    return /** @type {ImagePart} */ super.withLabel(label);
  }
}
