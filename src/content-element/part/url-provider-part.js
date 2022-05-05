import {URL_PROVIDER} from './part';
import AbstractPart from './abstract-part';
import {CX_22_0} from '../../version';

/**
 * @since 22.0
 */
export default class UrlProviderPart extends AbstractPart {
  constructor() {
    super(URL_PROVIDER);
  }

  get minVersion() {
    return CX_22_0;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {UrlProviderPart}
   */
  clone(shallow) {
    return this._clone(new UrlProviderPart(), shallow);
  }
}
