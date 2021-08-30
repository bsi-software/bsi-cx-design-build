import AbstractConstant from './abstract-constant';

export class DesignType extends AbstractConstant {
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
