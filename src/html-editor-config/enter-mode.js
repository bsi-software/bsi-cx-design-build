export default class EnterMode {
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
}

/**
 * @type {EnterMode}
 */
export const P = new EnterMode('p');
/**
 * @type {EnterMode}
 */
export const BR = new EnterMode('br');
/**
 * @type {EnterMode}
 */
export const DIV = new EnterMode('div');
