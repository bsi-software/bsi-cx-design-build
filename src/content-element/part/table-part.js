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
   * @param {String} label
   * @return {TablePart}
   */
  withLabel(label) {
    return /** @type {TablePart} */ super.withLabel(label);
  }

  /**
   * @param {boolean} [shallow=true]
   * @return {TablePart}
   */
  clone(shallow) {
    return this._clone(new TablePart(), shallow);
  }
}
