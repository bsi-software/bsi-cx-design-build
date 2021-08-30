import {FORM_SELECT} from './part';
import AbstractPart from './abstract-part';

/**
 * @since Studio 1.0
 */
export default class FormSelectPart extends AbstractPart {
  constructor() {
    super(FORM_SELECT);
  }

  /**
   * @param {String} label
   * @return {FormSelectPart}
   */
  withLabel(label) {
    return /** @type {FormSelectPart} */ super.withLabel(label);
  }

  /**
   * @param {boolean} [shallow=true]
   * @return {FormSelectPart}
   */
  clone(shallow) {
    return this._clone(new FormSelectPart(), shallow);
  }
}
