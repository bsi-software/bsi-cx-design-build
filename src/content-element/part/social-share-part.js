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
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {SocialSharePart}
   */
  clone(shallow) {
    return this._clone(new SocialSharePart(), shallow);
  }
}
