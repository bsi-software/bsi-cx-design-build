import AbstractConstant from '../abstract-constant';

export class FontSizeUnit extends AbstractConstant {
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
