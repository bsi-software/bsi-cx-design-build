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
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {IteratorPart}
   */
  clone(shallow) {
    return this._clone(new IteratorPart(), shallow);
  }
}
