import {FORM_FIELD} from './part';
import AbstractPart from './abstract-part';

/**
 * @since 1.0
 */
export default class FormFieldPart extends AbstractPart {
  constructor() {
    super(FORM_FIELD);
  }

  /**
   * @param {String} label
   * @return {FormFieldPart}
   */
  withLabel(label) {
    return /** @type {FormFieldPart} */ super.withLabel(label);
  }
}
