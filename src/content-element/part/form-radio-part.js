import {FORM_RADIO} from './part';
import AbstractPart from './abstract-part';

/**
 * @since Studio 1.0
 */
export default class FormRadioPart extends AbstractPart {
  constructor() {
    super(FORM_RADIO);
  }

  /**
   * @param {String} label
   * @returns {FormRadioPart}
   */
  withLabel(label) {
    return /** @type {FormRadioPart} */ super.withLabel(label);
  }

  /**
   * @param {boolean} [shallow=true]
   * @returns {FormRadioPart}
   */
  clone(shallow) {
    return this._clone(new FormRadioPart(), shallow);
  }
}
