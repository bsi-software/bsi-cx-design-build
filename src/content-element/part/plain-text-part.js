import {PLAIN_TEXT} from './part';
import AbstractPart from './abstract-part';

/**
 * @since Studio 1.0
 */
export default class PlainTextPart extends AbstractPart {
  constructor() {
    super(PLAIN_TEXT);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {PlainTextPart}
   */
  clone(shallow) {
    return this._clone(new PlainTextPart(), shallow);
  }
}
