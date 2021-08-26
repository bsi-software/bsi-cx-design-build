import {FORM_TEXTAREA} from './part';
import AbstractPart from './abstract-part';

/**
 * @since 1.0
 */
export default class FormTextareaPart extends AbstractPart {
  constructor() {
    super(FORM_TEXTAREA);
  }

  /**
   * @param {String} label
   * @return {FormTextareaPart}
   */
  withLabel(label) {
    return /** @type {FormTextareaPart} */ super.withLabel(label);
  }
}
