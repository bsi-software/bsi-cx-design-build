import {URL_PROVIDER} from './part';
import AbstractPart from './abstract-part';

/**
 * @since 22.0
 */
export default class UrlProviderPart extends AbstractPart {
  constructor() {
    super(URL_PROVIDER);
  }

  /**
   * @param {String} label
   * @returns {UrlProviderPart}
   */
  withLabel(label) {
    return /** @type {UrlProviderPart} */ super.withLabel(label);
  }

  /**
   * @param {boolean} [shallow=true]
   * @returns {UrlProviderPart}
   */
  clone(shallow) {
    return this._clone(new UrlProviderPart(), shallow);
  }
}
