import {FORM_FIELD} from './part';
import AbstractPart from './abstract-part';

/**
 * @since Studio 1.0
 */
export default class FormFieldPart extends AbstractPart {
  constructor() {
    super(FORM_FIELD);
  }

  /**
   * @inheritDoc
   * @returns {FormFieldPart}
   */
  withLabel(label) {
    return /** @type {FormFieldPart} */ super.withLabel(label);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {FormFieldPart}
   */
  clone(shallow) {
    return this._clone(new FormFieldPart(), shallow);
  }
}
