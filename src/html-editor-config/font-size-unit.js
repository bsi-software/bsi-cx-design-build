export default class FontSizeUnit {
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
 * @type {FontSizeUnit}
 */
export const PX = new FontSizeUnit('px');
/**
 * @type {FontSizeUnit}
 */
export const EM = new FontSizeUnit('em');
/**
 * @type {FontSizeUnit}
 */
export const REM = new FontSizeUnit('rem');
/**
 * @type {FontSizeUnit}
 */
export const PT = new FontSizeUnit('pt');
/**
 * @type {FontSizeUnit}
 */
export const CM = new FontSizeUnit('cm');
/**
 * @type {FontSizeUnit}
 */
export const MM = new FontSizeUnit('mm');
