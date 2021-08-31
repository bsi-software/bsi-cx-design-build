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
   * @param {String} label
   * @returns {FormCheckboxPart}
   */
  withLabel(label) {
    return /** @type {FormCheckboxPart} */ super.withLabel(label);
  }

  /**
   * @param {boolean} [shallow=true]
   * @returns {FormCheckboxPart}
   */
  clone(shallow) {
    return this._clone(new FormCheckboxPart(), shallow);
  }
}
