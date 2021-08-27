export default class AbstractConstant {
  /**
   * @type {string}
   * @private
   */
  _value = undefined;

  /**
   * @param {string} value
   */
  constructor(value) {
    /**
     * @type {string}
     * @private
     */
    this._value = value;
  }

  /**
   * @returns {string}
   */
  get value() {
    return this._value;
  }

  /**
   * @return {string}
   */
  getValue() {
    return this.value;
  }
}
