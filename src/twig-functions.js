import path from 'path';

import {TwingFunction, TwingTemplate} from 'twing';

import Constant from './constant';
import QueryConstant from './query-constant';
import {toPosixPath} from './utility';

/**
 *
 * @type {string[]}
 */
const LOREM_IPSUM = 'Vivamus dapibus lobortis risus, nec fringilla lectus consectetur at. Nam placerat elementum elit, sit amet sagittis magna efficitur at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent et congue massa, sit amet feugiat lorem. Nunc venenatis, dolor a ullamcorper cursus, lacus nibh congue arcu, vel lobortis nulla sem id nunc. Suspendisse consectetur nunc id velit scelerisque commodo eget sed tellus. Vestibulum finibus odio ex, vel lacinia ipsum rutrum in. Pellentesque vel eleifend nisl, tempus luctus lacus. Quisque rutrum neque quis eleifend imperdiet. Quisque sapien enim, pellentesque at augue at, consectetur congue mauris. Phasellus posuere nisi erat, ac condimentum odio iaculis sed.'.split(' ');

/**
 * @param {string} resolve
 * @returns {Promise<string>}
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
export const bsiCxAsset = new TwingFunction('bsi_cx_asset', (template, assetPath, inline) => {
  let templatePath = template.source.getResolvedName();
  let templateDirPath = path.dirname(templatePath);
  let absoluteAssetPath = toPosixPath(path.resolve(templateDirPath, assetPath));
  let assetQuery = !!inline ? QueryConstant.INLINE : '';
  let assetRequest = `${absoluteAssetPath}?${assetQuery}`.replace(/\?$/g, '');
  return strToPromise(`@ref(${assetRequest})`);
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

/**
 * Lorem ipsum generator.
 */
export const bsiCxLorem = new TwingFunction('bsi_cx_lorem', (words) => {
  let numOfWords = parseInt(words, 10);
  let end = isNaN(numOfWords) ? LOREM_IPSUM.length : numOfWords;
  let phrase = LOREM_IPSUM.slice(0, end).join(' ');

  return strToPromise(phrase);
}, [], {})
