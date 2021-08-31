import {IMAGE} from './part';
import AbstractPart from './abstract-part';

/**
 * @since Studio 1.0
 */
export default class ImagePart extends AbstractPart {
  constructor() {
    super(IMAGE);
  }

  /**
   * @param {String} label
   * @returns {ImagePart}
   */
  withLabel(label) {
    return /** @type {ImagePart} */ super.withLabel(label);
  }

  /**
   * @param {boolean} [shallow=true]
   * @returns {ImagePart}
   */
  clone(shallow) {
    return this._clone(new ImagePart(), shallow);
  }
}
