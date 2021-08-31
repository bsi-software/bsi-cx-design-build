import {ITERATOR} from './part';
import AbstractPart from './abstract-part';

/**
 * @since Studio 1.0
 */
export default class IteratorPart extends AbstractPart {
  constructor() {
    super(ITERATOR);
  }

  /**
   * @param {String} label
   * @returns {IteratorPart}
   */
  withLabel(label) {
    return /** @type {IteratorPart} */ super.withLabel(label);
  }

  /**
   * @param {boolean} [shallow=true]
   * @returns {IteratorPart}
   */
  clone(shallow) {
    return this._clone(new IteratorPart(), shallow);
  }
}
