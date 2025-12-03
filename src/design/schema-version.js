import AbstractConstant from '../abstract-constant';

/** @typedef {import('./design').default} Design */

/**
 * Class to define a schema version.
 */
export class SchemaVersion extends AbstractConstant {
}

/**
 * Use this in website templates for BSI CX 1.3.
 *
 * @see {@link Design#withSchemaVersion}
 * @type {SchemaVersion}
 * @since BSI CX 1.3
 */
export const V_1_0 = new SchemaVersion('1.0');
/**
 * Use this in all templates for BSI CX 22.0.
 *
 * @see {@link Design#withSchemaVersion}
 * @type {SchemaVersion}
 * @since 22.0
 */
export const V_22_0 = new SchemaVersion('22.0');
/**
 * Use this in all templates for BSI CX 25.1.
 *
 * @see {@link Design#withSchemaVersion}
 * @type {SchemaVersion}
 * @since 25.1
 */
export const V_25_1 = new SchemaVersion('25.1');
/**
 * Use this in all templates for BSI CX 26.1.
 *
 * @see {@link Design#withSchemaVersion}
 * @type {SchemaVersion}
 * @since 26.1
 */
export const V_26_1 = new SchemaVersion('26.1');
