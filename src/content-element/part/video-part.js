import {VIDEO} from './part';
import AbstractPart from './abstract-part';

/**
 * @since Studio 1.0
 */
export default class VideoPart extends AbstractPart {
  constructor() {
    super(VIDEO);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {VideoPart}
   */
  clone(shallow) {
    return this._clone(new VideoPart(), shallow);
  }
}
