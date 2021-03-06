import {FORM_TEXTAREA} from './part';
import AbstractPart from './abstract-part';

/**
 * @since Studio 1.0
 */
export default class FormTextareaPart extends AbstractPart {
  constructor() {
    super(FORM_TEXTAREA);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {FormTextareaPart}
   */
  clone(shallow) {
    return this._clone(new FormTextareaPart(), shallow);
  }
}
