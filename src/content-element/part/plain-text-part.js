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
   * @inheritDoc
   * @returns {PlainTextPart}
   */
  withLabel(label) {
    return /** @type {PlainTextPart} */ super.withLabel(label);
  }

  /**
   * @param {boolean} [shallow=true]
   * @returns {PlainTextPart}
   */
  clone(shallow) {
    return this._clone(new PlainTextPart(), shallow);
  }
}
