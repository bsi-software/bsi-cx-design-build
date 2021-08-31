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
   * @inheritDoc
   * @returns {UrlProviderPart}
   */
  withLabel(label) {
    return /** @type {UrlProviderPart} */ super.withLabel(label);
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
