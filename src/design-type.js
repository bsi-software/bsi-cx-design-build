import AbstractConstant from './abstract-constant';

export class DesignType extends AbstractConstant {
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
