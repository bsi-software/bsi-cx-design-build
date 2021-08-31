import {DesignType, EMAIL, LANDINGPAGE, WEBSITE} from './design-type';
import AbstractConstant from './abstract-constant';

/**
 * @type {DesignType[]}
 */
const LEGACY_TYPES = [
  LANDINGPAGE,
  EMAIL
];

/**
 * @type {DesignType[]}
 */
const ALL_TYPES = [
  LANDINGPAGE,
  EMAIL,
  WEBSITE
];

export class Version extends AbstractConstant {
  /**
   *
   * @param {string} version
   * @param {DesignType[]} allowedTypes
   * @param {boolean} legacyFormat
   */
  constructor(version, allowedTypes, legacyFormat) {
    super(version);
    this._allowedTypes = allowedTypes;
    this._legacyFormat = legacyFormat;
  }

  /**
   * @returns {DesignType[]}
   */
  get allowedTypes() {
    return this._allowedTypes;
  }

  /**
   * @returns {boolean}
   */
  get legacyFormat() {
    return this._legacyFormat;
  }
}

/**
 * @type {Version}
 */
export const STUDIO_1_0 = new Version('1.0', LEGACY_TYPES, true);

/**
 * @type {Version}
 */
export const STUDIO_1_1 = new Version('1.1', LEGACY_TYPES, true);

/**
 * @type {Version}
 */
export const STUDIO_1_2 = new Version('1.2', LEGACY_TYPES, true);

/**
 * @type {Version}
 */
export const CX_1_3 = new Version('1.3', ALL_TYPES, true);

/**
 * @type {Version}
 */
export const CX_22_0 = new Version('22.0', ALL_TYPES, false);
