import path from 'path';

import {TwingFunction, TwingTemplate} from 'twing';

import Constant from './constant';

/**
 * @param {string} resolve
 * @return {Promise<string>}
 */
function strToPromise(resolve) {
  return Promise.resolve(resolve);
}

/**
 * @param {TwingTemplate} template
 * @param {{module:string|undefined,chunks:boolean|undefined,attributes:{}|undefined}} config
 * @param {boolean} inline
 * @returns {Promise<string>}
 */
function bsiCxJsModuleImport(template, config, inline) {
  let templatePath = template.source.getResolvedName();
  let metaInfo = {
    ...config,
    template: templatePath,
    inline: inline
  };
  let placeholder = Constant.BSI_CX_JS_MODULE_START + JSON.stringify(metaInfo) + Constant.BSI_CX_JS_MODULE_END;
  return strToPromise(placeholder);
}

/**
 * Resolve static assets.
 */
export const bsiCxAsset = new TwingFunction('bsi_cx_asset', (template, assetPath) => {
  let templatePath = template.source.getResolvedName();
  let templateDirPath = path.dirname(templatePath);
  let absoluteAssetPath = path.resolve(templateDirPath, assetPath).replace(/\\/g, path.posix.sep);
  return strToPromise(`@ref(${absoluteAssetPath})`);
}, [], {needs_template: true});

/**
 * Get URL to the CSS asset.
 */
export const bsiCxCssHref = new TwingFunction('bsi_cx_css_href', () => {
  return strToPromise(Constant.BSI_CX_CSS_HREF);
}, [], {});

/**
 * Get the contents of the CSS asset.
 */
export const bsiCxCssInline = new TwingFunction('bsi_cx_css_inline', () => {
  return strToPromise(Constant.BSI_CX_CSS_INLINE);
}, [], {});

/**
 * Get URL to the requested JS module.
 */
export const bsiCxJsModuleHref = new TwingFunction('bsi_cx_js_module_href', (template, module) => {
  let config = {
    module: module
  };
  return bsiCxJsModuleImport(template, config, false);
}, [], {needs_template: true, is_safe: ['html']});

/**
 * Get the content of the requested JS module.
 */
export const bsiCxJsModuleInline = new TwingFunction('bsi_cx_js_module_inline', (template, module) => {
  let config = {
    module: module
  };
  return bsiCxJsModuleImport(template, config, true);
}, [], {needs_template: true, is_safe: ['html']});

/**
 * Import all missing JS module chunks.
 */
export const bsiCxJsModuleMissingChunksImport = new TwingFunction('bsi_cx_js_module_missing_chunks_import', (template, attributes) => {
  let config = {
    chunks: true,
    attributes: attributes || {}
  };
  return bsiCxJsModuleImport(template, config, false);
}, [], {needs_template: true, is_safe: ['html']});

/**
 * Inline all missing JS module chunks.
 */
export const bsiCxJsModuleMissingChunksInline = new TwingFunction('bsi_cx_js_module_missing_chunks_inline', (template, attributes) => {
  let config = {
    chunks: true,
    attributes: attributes || {}
  };
  return bsiCxJsModuleImport(template, config, true);
}, [], {needs_template: true, is_safe: ['html']});

/**
 * Get URL to the JS runtime module.
 */
export const bsiCxJsModuleRuntimeHref = new TwingFunction('bsi_cx_js_module_runtime_href', () => {
  return strToPromise(Constant.BSI_CX_MODULE_RUNTIME_HREF);
}, [], {});

/**
 * Get the contents of the JS runtime module.
 */
export const bsiCxJsModuleRuntimeInline = new TwingFunction('bsi_cx_js_module_runtime_inline', () => {
  return strToPromise(Constant.BSI_CX_MODULE_RUNTIME_INLINE);
}, [], {});
