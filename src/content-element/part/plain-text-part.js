import {PLAIN_TEXT} from './part';
import AbstractPart from './abstract-part';

/**
 * @since 1.0
 */
export default class PlainTextPart extends AbstractPart {
  constructor() {
    super(PLAIN_TEXT);
  }

  /**
   * @param {String} label
   * @return {PlainTextPart}
   */
  withLabel(label) {
    return /** @type {PlainTextPart} */ super.withLabel(label);
  }
}
