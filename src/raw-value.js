export default class RawValue {
  /**
   * @param {*} value
   */
  constructor(value) {
    /**
     * @type {*}
     * @private
     */
    this._value = value;
  }

  /**
   * @returns {*}
   */
  get value() {
    return this._value;
  }
}
