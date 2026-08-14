import path from 'path';

import { createFunction, createMarkup } from 'twing';

import Constant from './constant';
import ContextScope from './context-scope';
import QueryConstant from './query-constant';
import { toPosixPath } from './utility';

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
}, [{ name: 'assetPath' }, { name: 'inline', defaultValue: false }]);

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
}, [{ name: 'module' }]);

/**
 * Get the content of the requested JS module.
 */
export const bsiCxJsModuleInline = createFunction('bsi_cx_js_module_inline', async (executionContext, module) => {
  let config = {
    module: module
  };
  return createMarkup(await bsiCxJsModuleImport(executionContext, config, true));
}, [{ name: 'module' }]);

/**
 * Import all missing JS module chunks.
 */
export const bsiCxJsModuleMissingChunksImport = createFunction('bsi_cx_js_module_missing_chunks_import', async (executionContext, attributes) => {
  let config = {
    chunks: true,
    attributes: attributes || {}
  };
  return createMarkup(await bsiCxJsModuleImport(executionContext, config, false));
}, [{ name: 'attributes', defaultValue: {} }]);

/**
 * Inline all missing JS module chunks.
 */
export const bsiCxJsModuleMissingChunksInline = createFunction('bsi_cx_js_module_missing_chunks_inline', async (executionContext, attributes) => {
  let config = {
    chunks: true,
    attributes: attributes || {}
  };
  return createMarkup(await bsiCxJsModuleImport(executionContext, config, true));
}, [{ name: 'attributes', defaultValue: {} }]);

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
export const bsiCxLorem = createFunction('bsi_cx_lorem', (words) => {
  let numOfWords = parseInt(words, 10);
  let end = isNaN(numOfWords) ? LOREM_IPSUM.length : numOfWords;
  let phrase = LOREM_IPSUM.slice(0, end).join(' ');

  return strToPromise(phrase);
}, [{ name: 'words', defaultValue: '' }])


/**
 * Attributes of a template element: the element ID and - only if the element has one - the context
 * scope. The scope is not known while the template is rendered, it is inserted by the design build,
 * see {@link ContextScope}.
 */
export const bsiTemplatePart = createFunction(
  "templateElement",
  (e, elementId) => strToPromise(` data-bsi-element="${elementId}"` + ContextScope.ATTRIBUTE),
  [{ name: 'elementId' }],
  { is_safe: ["html"] },
);

/**
 * Marks the position of the content elements which are placed into the given dropzone
 * (Dropzone#withContentElements). They are rendered into this template by the design build.
 */
export const bsiDropzone = createFunction(
  "dropzone",
  (e, dropzoneId) => strToPromise(ContextScope.dropzone(dropzoneId)),
  [{ name: 'dropzoneId' }],
  { is_safe: ["html"] },
);

/**
 * Helper functions to create hbs variables
 */
const scopeVariable = (partId, variable) =>
  strToPromise(`{{ ${ContextScope.VARIABLE_PREFIX}${partId}.${variable} }}`);

const ifScopeVariable = (partId, variable, ifBlock, elseBlock) =>
  strToPromise(`{{#if ${ContextScope.VARIABLE_PREFIX}${partId}.${variable} }}${ifBlock}${elseBlock ? "{{else}}" + elseBlock : ""}{{/if }}`);


export const templatePartHelper = [
  createFunction(
    "textValue",
    (e, partId) => scopeVariable(partId, "value"),
    [{ name: 'partId' }],
    {},
  ),
  createFunction(
    "formattedHtml",
    (e, partId) => scopeVariable(partId, "html"),
    [{ name: 'partId' }],
    {},
  ),
  createFunction(
    "formattedLanguage",
    (e, partId) => scopeVariable(partId, "languageTag"),
    [{ name: 'partId' }],
    {},
  ),
  createFunction(
    "linkUrl",
    (e, partId) => scopeVariable(partId, "url"),
    [{ name: 'partId' }],
    {},
  ),
  createFunction(
    "linkText",
    (e, partId) => scopeVariable(partId, "text"),
    [{ name: 'partId' }],
    {},
  ),
  createFunction(
    "linkDescription",
    (e, partId) => scopeVariable(partId, "description"),
    [{ name: 'partId' }],
    {},
  ),
  createFunction(
    "ifLinkTarget",
    (e, partId, ifBlock, elseBlock) =>
      ifScopeVariable(partId, "openInNewWindow", ifBlock, elseBlock),
    [{ name: 'partId' }, { name: 'ifBlock' }, { name: 'elseBlock', defaultValue: null }],
    {},
  ),
  createFunction(
    "imageAlt",
    (e, partId) => scopeVariable(partId, "altText"),
    [{ name: 'partId' }],
    {},
  ),
  createFunction(
    "imageSrc",
    (e, partId) => scopeVariable(partId, "srcUrl"),
    [{ name: 'partId' }],
    {},
  ),
  createFunction(
    "imagePlaceholderSrc",
    (e, partId) => scopeVariable(partId, "placeholderSrcUrl"),
    [{ name: 'partId' }],
    {},
  ),
  createFunction(
    "imageSrcset",
    (e, partId) => scopeVariable(partId, "srcset"),
    [{ name: 'partId' }],
    {},
  ),
  createFunction(
    "imageDecorative",
    (e, partId) => scopeVariable(partId, "decorative"),
    [{ name: 'partId' }],
    {},
  ),
  createFunction(
    "ifCheckboxValue",
    (e, partId, ifBlock, elseBlock) =>
      ifScopeVariable(partId, "value", ifBlock, elseBlock),
    [{ name: 'partId' }, { name: 'ifBlock' }, { name: 'elseBlock', defaultValue: null }],
    {},
  ),
  createFunction(
    "optionValue",
    (e, partId) => scopeVariable(partId, "value"),
    [{ name: 'partId' }],
    {},
  ),
  // TODO: dynamic-value-list
];
