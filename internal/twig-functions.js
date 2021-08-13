import fs from 'fs';
import path from 'path';

import { TwingFunction } from 'twing';

import Constant from './constant';

/**
 * Resolve static assets.
 */
export const bsiCxAsset = new TwingFunction('bsi_cx_asset', (template, assetPath) => {
  let templatePath = template.source.getResolvedName();
  let templateDirPath = path.dirname(templatePath);
  let absoluteAssetPath = path.resolve(templateDirPath, assetPath).replace(/\\/g, path.posix.sep);
  return Promise.resolve(`@ref(${absoluteAssetPath})`);
}, [], { needs_template: true });

/**
 * Get URL to the CSS asset.
 */
export const bsiCxCssHref = new TwingFunction('bsi_cx_css_href', () => {
  return Promise.resolve(Constant.BSI_CX_CSS_HREF);
}, [], {});

/**
 * Get the contents of the CSS asset.
 */
export const bsiCxCssInline = new TwingFunction('bsi_cx_css_inline', () => {
  return Promise.resolve(Constant.BSI_CX_CSS_INLINE);
}, [], {});

/**
 * 
 */
export const bsiCxJsModuleHref = new TwingFunction('bsi_cx_js_module_href', (template, module) => {
  let templatePath = template.source.getResolvedName();
  let metaInfo = {
    template: templatePath,
    module: module
  };
  let placeholder = Constant.BSI_CX_JS_MODULE_START + JSON.stringify(metaInfo) + Constant.BSI_CX_JS_MODULE_END;
  return Promise.resolve(placeholder)
}, [], { needs_template: true, is_safe: ['html'] });

/**
 * Get URL to the JS runtime module.
 */
export const bsiCxJsModuleRuntimeHref = new TwingFunction('bsi_cx_js_module_runtime_href', () => {
  return Promise.resolve(Constant.BSI_CX_MODULE_RUNTIME_HREF);
}, [], {});

/**
 * Get the contents of the JS runtime module.
 */
export const bsiCxJsModuleRuntimeInline = new TwingFunction('bsi_cx_js_module_runtime_inline', () => {
  return Promise.resolve(Constant.BSI_CX_MODULE_RUNTIME_INLINE);
}, [], {});
