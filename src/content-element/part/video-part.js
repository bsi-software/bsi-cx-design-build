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
   * @param {String} label
   * @returns {VideoPart}
   */
  withLabel(label) {
    return /** @type {VideoPart} */ super.withLabel(label);
  }

  /**
   * @param {boolean} [shallow=true]
   * @returns {VideoPart}
   */
  clone(shallow) {
    return this._clone(new VideoPart(), shallow);
  }
}
