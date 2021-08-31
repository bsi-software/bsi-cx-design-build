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
   * @param {boolean} [shallow=true]
   * @returns {TablePart}
   */
  clone(shallow) {
    return this._clone(new TablePart(), shallow);
  }
}
