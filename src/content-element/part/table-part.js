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
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {TablePart}
   */
  clone(shallow) {
    return this._clone(new TablePart(), shallow);
  }
}
