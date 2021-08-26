import {ITERATOR} from './part';
import AbstractPart from './abstract-part';

/**
 * @since 1.0
 */
export default class IteratorPart extends AbstractPart {
  constructor() {
    super(ITERATOR);
  }

  /**
   * @param {String} label
   * @return {IteratorPart}
   */
  withLabel(label) {
    return /** @type {IteratorPart} */ super.withLabel(label);
  }
}
