import {HTML} from './part';
import AbstractPart from './abstract-part';

/**
 * @since 1.0
 */
export default class HtmlPart extends AbstractPart {
  constructor() {
    super(HTML);
  }

  /**
   * @param {String} label
   * @return {HtmlPart}
   */
  withLabel(label) {
    return /** @type {HtmlPart} */ super.withLabel(label);
  }
}