import AbstractConstant from '../abstract-constant';

export class SchemaVersion extends AbstractConstant {
}

/**
 * @type {SchemaVersion}
 * @since 1.3
 */
export const V_1_0 = new SchemaVersion('1.0');
/**
 * @type {SchemaVersion}
 * @since 22.0
 */
export const V_22_0 = new SchemaVersion('22.0');
