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
   * @return {UrlProviderPart}
   */
  withLabel(label) {
    return /** @type {UrlProviderPart} */ super.withLabel(label);
  }
}
