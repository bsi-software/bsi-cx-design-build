import AbstractConstant from './abstract-constant';
import Constant from './constant';

export class DesignType extends AbstractConstant {
  valueOf() {
    return this.value;
  }
}

/**
 * @type {DesignType}
 * @since Studio 1.0
 */
export const LANDINGPAGE = new DesignType('landingpage');

/**
 * @type {DesignType}
 * @since Studio 1.0
 */
export const EMAIL = new DesignType('email');

/**
 * @type {DesignType}
 * @since BSI CX 1.3
 */
export const WEBSITE = new DesignType('website');

/**
 * @type {DesignType[]}
 */
export const LEGACY_TYPES = [
  LANDINGPAGE,
  EMAIL
];

/**
 * @type {DesignType[]}
 */
export const ALL_TYPES = [
  LANDINGPAGE,
  EMAIL,
  WEBSITE
];

/**
 * @type {DesignType}
 */
export const TARGET = global[Constant.BSI_CX_TARGET_TYPE];
