export default class Format {
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
 * @type {Format}
 */
export const P = new Format('p');
/**
 * @type {Format}
 */
export const H1 = new Format('h1');
/**
 * @type {Format}
 */
export const H2 = new Format('h2');
/**
 * @type {Format}
 */
export const H3 = new Format('h3');
/**
 * @type {Format}
 */
export const H4 = new Format('h4');
/**
 * @type {Format}
 */
export const H5 = new Format('h5');
/**
 * @type {Format}
 */
export const H6 = new Format('h6');
/**
 * @type {Format}
 */
export const PRE = new Format('pre');
