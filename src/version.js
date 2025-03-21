import AbstractConstant from './abstract-constant';
import Constant from './constant';
import { ALL_TYPES, LEGACY_TYPES } from './design-type';

/** @typedef {import('./design-type').DesignType} DesignType */

export class Version extends AbstractConstant {
  /**
   *
   * @param {[major:number,minor:number,patch:number]} version
   * @param {DesignType[]} allowedTypes
   * @param {boolean} legacyFormat
   * @param {string|undefined} [schemaVersion]
   */
  constructor(version, allowedTypes, legacyFormat, schemaVersion) {
    super(version.join('.'));

    this._version = version;
    this._allowedTypes = allowedTypes;
    this._legacyFormat = legacyFormat;
    this._schemaVersion = schemaVersion;
  }

  /**
   * @return {[major:number,minor:number,patch:number]}
   */
  get version() {
    return [...this._version];
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

  /**
   * @returns {string|undefined}
   */
  get schemaVersion() {
    return this._schemaVersion;
  }

  /**
   * @param {Version} version
   * @returns {number}
   */
  compareTo(version) {
    for (let i = 0; i < this._version.length; i++) {
      const left = this._version[i];
      const right = version.version?.[i] ?? 0;
      const diff = left - right;
      if (diff !== 0) {
        return diff;
      }
    }

    return 0;
  }

  /**
   * Make versions comparable by calculating an integer value.
   * @return {number}
   */
  valueOf() {
    return this._version.reduce((p, v, i, a) => p + v * Math.pow(10000, a.length - i), 0);
  }
}

/**
 * @type {Version}
 */
export const STUDIO_1_0 = new Version([1, 0, 0], LEGACY_TYPES, true);

/**
 * @type {Version}
 */
export const STUDIO_1_1 = new Version([1, 1, 0], LEGACY_TYPES, true);

/**
 * @type {Version}
 */
export const STUDIO_1_2 = new Version([1, 2, 0], LEGACY_TYPES, true);

/**
 * @type {Version}
 */
export const CX_1_3 = new Version([1, 3, 0], ALL_TYPES, true, '1.0');

/**
 * @type {Version}
 */
export const CX_22_0 = new Version([22, 0, 0], ALL_TYPES, false, '22.0');

/**
 * @type {Version}
 */
export const CX_23_1 = new Version([23, 1, 0], ALL_TYPES, false, '23.1');

/**
 * @type {Version}
 */
export const CX_23_2 = new Version([23, 2, 0], ALL_TYPES, false, '23.2');

/**
 * @type {Version}
 */
export const CX_24_1 = new Version([24, 1, 0], ALL_TYPES, false, '24.1');

/**
 * @type {Version}
 */
export const CX_24_2 = new Version([24, 2, 0], ALL_TYPES, false, '24.2');

/**
 * @type {Version}
 */
export const CX_25_1 = new Version([25, 1, 0], ALL_TYPES, false, '25.1');

/**
 * @type {Version}
 */
export const CX_25_2 = new Version([25, 2, 0], ALL_TYPES, false, '25.2');

/**
 * @type {Version}
 */
export const TARGET = global[Constant.BSI_CX_TARGET_VERSION];
