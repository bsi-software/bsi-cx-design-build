import {BACKGROUND_IMAGE} from './part';
import AbstractPart from './abstract-part';

/**
 * @since Studio 1.0
 */
export default class BackgroundImagePart extends AbstractPart {
  constructor() {
    super(BACKGROUND_IMAGE);
  }

  /**
   * @param {String} label
   * @return {BackgroundImagePart}
   */
  withLabel(label) {
    return /** @type {BackgroundImagePart} */ super.withLabel(label);
  }

  /**
   * @param {boolean} [shallow=true]
   * @return {BackgroundImagePart}
   */
  clone(shallow) {
    return this._clone(new BackgroundImagePart(), shallow);
  }
}
