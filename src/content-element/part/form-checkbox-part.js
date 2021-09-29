import {FORM_CHECKBOX} from './part';
import AbstractPart from './abstract-part';

/**
 * @since Studio 1.0
 */
export default class FormCheckboxPart extends AbstractPart {
  constructor() {
    super(FORM_CHECKBOX);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {FormCheckboxPart}
   */
  clone(shallow) {
    return this._clone(new FormCheckboxPart(), shallow);
  }
}
