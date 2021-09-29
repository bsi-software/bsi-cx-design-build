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
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {ImagePart}
   */
  clone(shallow) {
    return this._clone(new ImagePart(), shallow);
  }
}
