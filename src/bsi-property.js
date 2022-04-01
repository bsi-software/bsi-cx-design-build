import Constant from './constant';

/**
 * @param {string} property
 * @param {*} [fallback]
 * @returns {*}
 */
export default function bsiProperty(property, fallback) {
  /**
   * @type {BsiJsPropertyPlugin}
   */
  const plugin = global[Constant.BSI_CX_JS_PROPERTY_PLUGIN];

  if (typeof plugin === 'undefined') {
    throw new Error('bsi property plugin not found');
  }

  return plugin.getProperty(property, fallback);
}
