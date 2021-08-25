import DesignType from './design-type';

const LEGACY_TYPES = [
  DesignType.LANDINGPAGE,
  DesignType.EMAIL
];

const ALL_TYPES = [
  DesignType.LANDINGPAGE,
  DesignType.EMAIL,
  DesignType.WEBSITE
];

export default class Version {
  /**
   * @type {Version}
   */
  static STUDIO_1_0 = new Version('1.0', LEGACY_TYPES, true);
  /**
   * @type {Version}
   */
  static STUDIO_1_1 = new Version('1.1', LEGACY_TYPES, true);
  /**
   * @type {Version}
   */
  static STUDIO_1_2 = new Version('1.2', LEGACY_TYPES, true);
  /**
   * @type {Version}
   */
  static CX_1_3 = new Version('1.3', ALL_TYPES, true);
  /**
   * @type {Version}
   */
  static CX_22_0 = new Version('22.0', ALL_TYPES, false);

  /**
   * 
   * @param {string} version 
   * @param {string[]} allowedTypes 
   * @param {boolean} legacyFormat
   */
  constructor(version, allowedTypes, legacyFormat) {
    this._version = version;
    this._allowedTypes = allowedTypes;
    this._legacyFormat = legacyFormat;
  }

  /**
   * @returns {string}
   */
  get version() {
    return this._version;
  }

  /**
   * @returns {string[]}
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
