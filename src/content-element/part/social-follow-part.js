import {SOCIAL_FOLLOW} from './part';
import AbstractPart from './abstract-part';

/**
 * @since Studio 1.0
 */
export default class SocialFollowPart extends AbstractPart {
  constructor() {
    super(SOCIAL_FOLLOW);
  }

  /**
   * @inheritDoc
   * @returns {SocialFollowPart}
   */
  withLabel(label) {
    return /** @type {SocialFollowPart} */ super.withLabel(label);
  }

  /**
   * @param {boolean} [shallow=true]
   * @returns {SocialFollowPart}
   */
  clone(shallow) {
    return this._clone(new SocialFollowPart(), shallow);
  }
}
