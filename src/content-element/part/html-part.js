import {HTML} from './part';
import AbstractPart from './abstract-part';

/**
 * @since Studio 1.0
 */
export default class HtmlPart extends AbstractPart {
  constructor() {
    super(HTML);
  }

  /**
   * @inheritDoc
   * @returns {HtmlPart}
   */
  withLabel(label) {
    return /** @type {HtmlPart} */ super.withLabel(label);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {HtmlPart}
   */
  clone(shallow) {
    return this._clone(new HtmlPart(), shallow);
  }
}
