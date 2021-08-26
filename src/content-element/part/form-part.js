import {FORM} from './part';
import AbstractPart from './abstract-part';

/**
 * @since 1.0
 */
export default class FormPart extends AbstractPart {
  constructor() {
    super(FORM);
  }

  /**
   * @param {String} label
   * @return {FormPart}
   */
  withLabel(label) {
    return /** @type {FormPart} */ super.withLabel(label);
  }
}
