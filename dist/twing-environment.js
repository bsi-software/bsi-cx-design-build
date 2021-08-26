/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ twing_environment)
});

;// CONCATENATED MODULE: external "source-map-support/register"
const register_namespaceObject = require("source-map-support/register");
;// CONCATENATED MODULE: external "twing"
const external_twing_namespaceObject = require("twing");
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./src/constant.js
class Constant {
  /**
   * @type {string}
   */
  static BSI_CX_CSS_HREF = '###BSI_CX_CSS_HREF###';
  /**
   * @type {string}
   */
  static BSI_CX_CSS_INLINE = '###BSI_CX_CSS_INLINE###';
  /**
   * @type {string}
   */
  static BSI_CX_DESIGN_BASE_URL = '{{designBaseUrl}}';
  /**
   * @type {string}
   */
  static BSI_CX_MODULE_RUNTIME_PATH = 'modules/runtime';
  /**
   * @type {string}
   */
  static BSI_CX_MODULE_RUNTIME_HREF = '###BSI_CX_MODULE_RUNTIME_HREF###';
  /**
   * @type {string}
   */
  static BSI_CX_MODULE_RUNTIME_INLINE = '###BSI_CX_MODULE_RUNTIME_INLINE###';
  /**
   * @type {string}
   */
  static BSI_CX_JS_MODULE_START = '###BSI_CX_JS_MODULE_START###';
  /**
   * @type {string}
   */
  static BSI_CX_JS_MODULE_END = '###BSI_CX_JS_MODULE_END###';
};

;// CONCATENATED MODULE: ./src/twig-functions.js






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
const bsiCxAsset = new external_twing_namespaceObject.TwingFunction('bsi_cx_asset', (template, assetPath) => {
  let templatePath = template.source.getResolvedName();
  let templateDirPath = external_path_default().dirname(templatePath);
  let absoluteAssetPath = external_path_default().resolve(templateDirPath, assetPath).replace(/\\/g, (external_path_default()).posix.sep);
  return strToPromise(`@ref(${absoluteAssetPath})`);
}, [], {needs_template: true});

/**
 * Get URL to the CSS asset.
 */
const bsiCxCssHref = new external_twing_namespaceObject.TwingFunction('bsi_cx_css_href', () => {
  return strToPromise(Constant.BSI_CX_CSS_HREF);
}, [], {});

/**
 * Get the contents of the CSS asset.
 */
const bsiCxCssInline = new external_twing_namespaceObject.TwingFunction('bsi_cx_css_inline', () => {
  return strToPromise(Constant.BSI_CX_CSS_INLINE);
}, [], {});

/**
 * Get URL to the requested JS module.
 */
const bsiCxJsModuleHref = new external_twing_namespaceObject.TwingFunction('bsi_cx_js_module_href', (template, module) => {
  let config = {
    module: module
  };
  return bsiCxJsModuleImport(template, config, false);
}, [], {needs_template: true, is_safe: ['html']});

/**
 * Get the content of the requested JS module.
 */
const bsiCxJsModuleInline = new external_twing_namespaceObject.TwingFunction('bsi_cx_js_module_inline', (template, module) => {
  let config = {
    module: module
  };
  return bsiCxJsModuleImport(template, config, true);
}, [], {needs_template: true, is_safe: ['html']});

/**
 * Import all missing JS module chunks.
 */
const bsiCxJsModuleMissingChunksImport = new external_twing_namespaceObject.TwingFunction('bsi_cx_js_module_missing_chunks_import', (template, attributes) => {
  let config = {
    chunks: true,
    attributes: attributes || {}
  };
  return bsiCxJsModuleImport(template, config, false);
}, [], {needs_template: true, is_safe: ['html']});

/**
 * Inline all missing JS module chunks.
 */
const bsiCxJsModuleMissingChunksInline = new external_twing_namespaceObject.TwingFunction('bsi_cx_js_module_missing_chunks_inline', (template, attributes) => {
  let config = {
    chunks: true,
    attributes: attributes || {}
  };
  return bsiCxJsModuleImport(template, config, true);
}, [], {needs_template: true, is_safe: ['html']});

/**
 * Get URL to the JS runtime module.
 */
const bsiCxJsModuleRuntimeHref = new external_twing_namespaceObject.TwingFunction('bsi_cx_js_module_runtime_href', () => {
  return strToPromise(Constant.BSI_CX_MODULE_RUNTIME_HREF);
}, [], {});

/**
 * Get the contents of the JS runtime module.
 */
const bsiCxJsModuleRuntimeInline = new external_twing_namespaceObject.TwingFunction('bsi_cx_js_module_runtime_inline', () => {
  return strToPromise(Constant.BSI_CX_MODULE_RUNTIME_INLINE);
}, [], {});

;// CONCATENATED MODULE: ./src/twing-environment.js






let twing = new external_twing_namespaceObject.TwingEnvironment(
  new external_twing_namespaceObject.TwingLoaderRelativeFilesystem()
);

twing.addFunction(bsiCxAsset);
twing.addFunction(bsiCxCssHref);
twing.addFunction(bsiCxCssInline);
twing.addFunction(bsiCxJsModuleHref);
twing.addFunction(bsiCxJsModuleInline);
twing.addFunction(bsiCxJsModuleMissingChunksImport);
twing.addFunction(bsiCxJsModuleMissingChunksInline);
twing.addFunction(bsiCxJsModuleRuntimeHref);
twing.addFunction(bsiCxJsModuleRuntimeInline);

/* harmony default export */ const twing_environment = (twing);

module.exports = __webpack_exports__.default;
/******/ })()
;
//# sourceMappingURL=twing-environment.js.map