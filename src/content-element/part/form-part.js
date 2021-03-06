import {FORM} from './part';
import AbstractPart from './abstract-part';

/**
 * @since Studio 1.0
 */
export default class FormPart extends AbstractPart {
  constructor() {
    super(FORM);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {FormPart}
   */
  clone(shallow) {
    return this._clone(new FormPart(), shallow);
  }
}
