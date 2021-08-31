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
   * @inheritDoc
   * @returns {BackgroundImagePart}
   */
  withLabel(label) {
    return /** @type {BackgroundImagePart} */ super.withLabel(label);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {BackgroundImagePart}
   */
  clone(shallow) {
    return this._clone(new BackgroundImagePart(), shallow);
  }
}
