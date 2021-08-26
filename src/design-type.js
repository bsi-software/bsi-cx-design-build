export class DesignType {
  /**
   * @param {string} type
   */
  constructor(type) {
    this._type = type;
  }

  /**
   * @returns {string}
   */
  get type() {
    return this._type;
  }
}

/**
 * @type {DesignType}
 */
export const LANDINGPAGE = new DesignType('landingpage');

/**
 * @type {DesignType}
 */
export const EMAIL = new DesignType('email');

/**
 * @type {DesignType}
 */
export const WEBSITE = new DesignType('website');
