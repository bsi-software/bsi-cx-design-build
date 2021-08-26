import {SOCIAL_SHARE} from './part';
import AbstractPart from './abstract-part';

/**
 * @since 1.0
 */
export default class SocialSharePart extends AbstractPart {
  constructor() {
    super(SOCIAL_SHARE);
  }

  /**
   * @param {String} label
   * @return {SocialSharePart}
   */
  withLabel(label) {
    return /** @type {SocialSharePart} */ super.withLabel(label);
  }
}
