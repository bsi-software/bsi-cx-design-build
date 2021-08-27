import {TABLE} from './part';
import AbstractPart from './abstract-part';

/**
 * @since 1.0
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
}