import {SOCIAL_SHARE} from './part';
import AbstractPart from './abstract-part';

/**
 * @since Studio 1.0
 */
export default class SocialSharePart extends AbstractPart {
  constructor() {
    super(SOCIAL_SHARE);
  }

  /**
   * @inheritDoc
   * @returns {SocialSharePart}
   */
  withLabel(label) {
    return /** @type {SocialSharePart} */ super.withLabel(label);
  }

  /**
   * @param {boolean} [shallow=true]
   * @returns {SocialSharePart}
   */
  clone(shallow) {
    return this._clone(new SocialSharePart(), shallow);
  }
}
