import {FORM_RADIO} from './part';
import AbstractPart from './abstract-part';

/**
 * @since 1.0
 */
export default class FormRadioPart extends AbstractPart {
  constructor() {
    super(FORM_RADIO);
  }

  /**
   * @param {String} label
   * @return {FormRadioPart}
   */
  withLabel(label) {
    return /** @type {FormRadioPart} */ super.withLabel(label);
  }
}
