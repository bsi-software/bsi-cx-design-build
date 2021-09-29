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
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {SocialFollowPart}
   */
  clone(shallow) {
    return this._clone(new SocialFollowPart(), shallow);
  }
}
