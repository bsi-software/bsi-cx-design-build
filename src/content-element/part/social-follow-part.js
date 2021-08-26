import {SOCIAL_FOLLOW} from './part';
import AbstractPart from './abstract-part';

/**
 * @since 1.0
 */
export default class SocialFollowPart extends AbstractPart {
  constructor() {
    super(SOCIAL_FOLLOW);
  }

  /**
   * @param {String} label
   * @return {SocialFollowPart}
   */
  withLabel(label) {
    return /** @type {SocialFollowPart} */ super.withLabel(label);
  }
}
