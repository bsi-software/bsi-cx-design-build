import {TABLE} from './part';
import AbstractPart from './abstract-part';

/**
 * @since Studio 1.0
 */
export default class TablePart extends AbstractPart {
  constructor() {
    super(TABLE);
  }

  /**
   * @inheritDoc
   * @returns {TablePart}
   */
  withLabel(label) {
    return /** @type {TablePart} */ super.withLabel(label);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {TablePart}
   */
  clone(shallow) {
    return this._clone(new TablePart(), shallow);
  }
}
