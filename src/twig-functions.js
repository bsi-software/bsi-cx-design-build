import path from 'path';

import {createFunction, createMarkup} from 'twing';

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
 * @param {{template:{source:{name:string}}}} executionContext
 * @param {{module:string|undefined,chunks:boolean|undefined,attributes:{}|undefined}} config
 * @param {boolean} inline
 * @returns {Promise<string>}
 */
function bsiCxJsModuleImport(executionContext, config, inline) {
  let templatePath = executionContext.template.source.name;
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
export const bsiCxAsset = createFunction('bsi_cx_asset', (executionContext, assetPath, inline) => {
  let templatePath = executionContext.template.source.name;
  let templateDirPath = path.dirname(templatePath);
  let absoluteAssetPath = toPosixPath(path.resolve(templateDirPath, assetPath));
  let assetQuery = !!inline ? QueryConstant.INLINE : '';
  let assetRequest = `${absoluteAssetPath}?${assetQuery}`.replace(/\?$/g, '');
  return strToPromise(`@ref(${assetRequest})`);
}, [{name: 'assetPath'}, {name: 'inline', defaultValue: false}]);

/**
 * Get URL to the CSS asset.
 */
export const bsiCxCssHref = createFunction('bsi_cx_css_href', () => {
  return strToPromise(Constant.BSI_CX_CSS_HREF);
}, []);

/**
 * Get the contents of the CSS asset.
 */
export const bsiCxCssInline = createFunction('bsi_cx_css_inline', () => {
  return strToPromise(Constant.BSI_CX_CSS_INLINE);
}, []);

/**
 * Get URL to the requested JS module.
 */
export const bsiCxJsModuleHref = createFunction('bsi_cx_js_module_href', async (executionContext, module) => {
  let config = {
    module: module
  };
  return createMarkup(await bsiCxJsModuleImport(executionContext, config, false));
}, [{name: 'module'}]);

/**
 * Get the content of the requested JS module.
 */
export const bsiCxJsModuleInline = createFunction('bsi_cx_js_module_inline', async (executionContext, module) => {
  let config = {
    module: module
  };
  return createMarkup(await bsiCxJsModuleImport(executionContext, config, true));
}, [{name: 'module'}]);

/**
 * Import all missing JS module chunks.
 */
export const bsiCxJsModuleMissingChunksImport = createFunction('bsi_cx_js_module_missing_chunks_import', async (executionContext, attributes) => {
  let config = {
    chunks: true,
    attributes: attributes || {}
  };
  return createMarkup(await bsiCxJsModuleImport(executionContext, config, false));
}, [{name: 'attributes', defaultValue: {}}]);

/**
 * Inline all missing JS module chunks.
 */
export const bsiCxJsModuleMissingChunksInline = createFunction('bsi_cx_js_module_missing_chunks_inline', async (executionContext, attributes) => {
  let config = {
    chunks: true,
    attributes: attributes || {}
  };
  return createMarkup(await bsiCxJsModuleImport(executionContext, config, true));
}, [{name: 'attributes', defaultValue: {}}]);

/**
 * Get URL to the JS runtime module.
 */
export const bsiCxJsModuleRuntimeHref = createFunction('bsi_cx_js_module_runtime_href', () => {
  return strToPromise(Constant.BSI_CX_MODULE_RUNTIME_HREF);
}, []);

/**
 * Get the contents of the JS runtime module.
 */
export const bsiCxJsModuleRuntimeInline = createFunction('bsi_cx_js_module_runtime_inline', () => {
  return strToPromise(Constant.BSI_CX_MODULE_RUNTIME_INLINE);
}, []);

/**
 * Lorem ipsum generator.
 */
export const bsiCxLorem = createFunction('bsi_cx_lorem', (executionContext, words) => {
  let numOfWords = parseInt(words, 10);
  let end = isNaN(numOfWords) ? LOREM_IPSUM.length : numOfWords;
  let phrase = LOREM_IPSUM.slice(0, end).join(' ');

  return strToPromise(phrase);
}, [{name: 'words', defaultValue: ''}])


/**
 * Helper function to create scoped template element
 */
export const bsiTemplatePart = createFunction(
  "template_element",
  (elementId, scope) =>
  strToPromise(` data-bsi-element="${elementId}" ${scope ? `data-bsi-context-scope="${scope}" ` : ""}`),
  [{name: 'elementId'}, {name: 'scope', defaultValue: null}],
  { is_safe: ["html"] },
);

/**
 * Helper functions to create hbs variables
 */
const scopeVariable = (scope, partId, variable) =>
  strToPromise(`{{ ${scope ? scope + "." : ""}${partId}.${variable} }}`);

const ifScopeVariable = (scope, partId, variable, ifBlock, elseBlock) =>
  strToPromise(`{{#if ${scope ? scope + "." : ""}${partId}.${variable} }} ${ifBlock} ${elseBlock ? "{{else}} " + elseBlock : ""} {{/if }}`);


export const templatePartHelper = [
  createFunction(
    "text_value",
    (partId, scope) =>  scopeVariable(scope, partId, "value"),
    [{name: 'partId'}, {name: 'scope', defaultValue: null}],
    {},
  ),
  createFunction(
    "formatted_html",
    (partId, scope) => scopeVariable(scope, partId, "html"),
    [{name: 'partId'}, {name: 'scope', defaultValue: null}],
    {},
  ),
  createFunction(
    "formatted_language",
    (partId, scope) => scopeVariable(scope, partId, "languageTag"),
    [{name: 'partId'}, {name: 'scope', defaultValue: null}],
    {},
  ),
  createFunction(
    "link_url",
    (partId, scope) => scopeVariable(scope, partId, "url"),
    [{name: 'partId'}, {name: 'scope', defaultValue: null}],
    {},
  ),
  createFunction(
    "link_text",
    (partId, scope) => scopeVariable(scope, partId, "text"),
    [{name: 'partId'}, {name: 'scope', defaultValue: null}],
    {},
  ),
  createFunction(
    "link_description",
    (partId, scope) => scopeVariable(scope, partId, "description"),
    [{name: 'partId'}, {name: 'scope', defaultValue: null}],
    {},
  ),
  createFunction(
    "if_link_target",
    (partId, scope, ifBlock, elseBlock) =>
      ifScopeVariable(scope, partId, "openInNewWindow", ifBlock, elseBlock),
    [{name: 'partId'}, {name: 'scope', defaultValue: null}, {name: 'ifBlock'}, {name: 'elseBlock', defaultValue: null}],
    {},
  ),
  createFunction(
    "image_alt",
    (partId, scope) => scopeVariable(scope, partId, "altText"),
    [{name: 'partId'}, {name: 'scope', defaultValue: null}],
    {},
  ),
  createFunction(
    "image_src",
    (partId, scope) => scopeVariable(scope, partId, "srcUrl"),
    [{name: 'partId'}, {name: 'scope', defaultValue: null}],
    {},
  ),
  createFunction(
    "image_placeholder_src",
    (partId, scope) => scopeVariable(scope, partId, "placeholderSrcUrl"),
    [{name: 'partId'}, {name: 'scope', defaultValue: null}],
    {},
  ),
  createFunction(
    "image_srcset",
    (partId, scope) => scopeVariable(scope, partId, "srcset"),
    [{name: 'partId'}, {name: 'scope', defaultValue: null}],
    {},
  ),
  createFunction(
    "image_decorative",
    (partId, scope) => scopeVariable(scope, partId, "decorative"),
    [{name: 'partId'}, {name: 'scope', defaultValue: null}],
    {},
  ),
  createFunction(
    "if_checkbox_value",
    (partId, scope, ifBlock, elseBlock) =>
      ifScopeVariable(scope, partId, "value", ifBlock, elseBlock),
    [{name: 'partId'}, {name: 'scope', defaultValue: null}, {name: 'ifBlock'}, {name: 'elseBlock', defaultValue: null}],
    {},
  ),
  createFunction(
    "option_value",
    (partId, scope) => scopeVariable(scope, partId, "value"),
    [{name: 'partId'}, {name: 'scope', defaultValue: null}],
    {},
  ),
  // TODO: dynamic-value-list
];
