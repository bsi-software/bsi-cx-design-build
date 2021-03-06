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
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {FormRadioPart}
   */
  clone(shallow) {
    return this._clone(new FormRadioPart(), shallow);
  }
}
