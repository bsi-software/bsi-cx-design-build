import {FORM} from './part';
import AbstractPart from './abstract-part';

/**
 * @since Studio 1.0
 */
export default class FormPart extends AbstractPart {
  constructor() {
    super(FORM);
  }

  /**
   * @inheritDoc
   * @returns {FormPart}
   */
  withLabel(label) {
    return /** @type {FormPart} */ super.withLabel(label);
  }

  /**
   * @param {boolean} [shallow=true]
   * @returns {FormPart}
   */
  clone(shallow) {
    return this._clone(new FormPart(), shallow);
  }
}
