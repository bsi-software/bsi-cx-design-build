(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("twing"), require("path"));
	else if(typeof define === 'function' && define.amd)
		define(["twing", "path"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("twing"), require("path")) : factory(root["twing"], root["path"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function(__WEBPACK_EXTERNAL_MODULE__317__, __WEBPACK_EXTERNAL_MODULE__281__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 863:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"twing","commonjs":"twing","commonjs2":"twing","amd":"twing"}
var external_root_twing_commonjs_twing_commonjs2_twing_amd_twing_ = __webpack_require__(317);
// EXTERNAL MODULE: external {"root":"path","commonjs":"path","commonjs2":"path","amd":"path"}
var external_root_path_commonjs_path_commonjs2_path_amd_path_ = __webpack_require__(281);
var external_root_path_commonjs_path_commonjs2_path_amd_path_default = /*#__PURE__*/__webpack_require__.n(external_root_path_commonjs_path_commonjs2_path_amd_path_);
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
 * 
 * @param {TwingTemplate} template 
 * @param {{module:string|undefined,chunks:boolean|undefined,attributes:{}|undefined}} config
 * @param {boolean} chunks 
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
  return Promise.resolve(placeholder);
}

/**
 * Resolve static assets.
 */
const bsiCxAsset = new external_root_twing_commonjs_twing_commonjs2_twing_amd_twing_.TwingFunction('bsi_cx_asset', (template, assetPath) => {
  let templatePath = template.source.getResolvedName();
  let templateDirPath = external_root_path_commonjs_path_commonjs2_path_amd_path_default().dirname(templatePath);
  let absoluteAssetPath = external_root_path_commonjs_path_commonjs2_path_amd_path_default().resolve(templateDirPath, assetPath).replace(/\\/g, (external_root_path_commonjs_path_commonjs2_path_amd_path_default()).posix.sep);
  return Promise.resolve(`@ref(${absoluteAssetPath})`);
}, [], { needs_template: true });

/**
 * Get URL to the CSS asset.
 */
const bsiCxCssHref = new external_root_twing_commonjs_twing_commonjs2_twing_amd_twing_.TwingFunction('bsi_cx_css_href', () => {
  return Promise.resolve(Constant.BSI_CX_CSS_HREF);
}, [], {});

/**
 * Get the contents of the CSS asset.
 */
const bsiCxCssInline = new external_root_twing_commonjs_twing_commonjs2_twing_amd_twing_.TwingFunction('bsi_cx_css_inline', () => {
  return Promise.resolve(Constant.BSI_CX_CSS_INLINE);
}, [], {});

/**
 * Get URL to the requested JS module.
 */
const bsiCxJsModuleHref = new external_root_twing_commonjs_twing_commonjs2_twing_amd_twing_.TwingFunction('bsi_cx_js_module_href', (template, module) => {
  let config = {
    module: module
  };
  return bsiCxJsModuleImport(template, config, false);
}, [], { needs_template: true, is_safe: ['html'] });

/**
 * Get the content of the requested JS module.
 */
const bsiCxJsModuleInline = new external_root_twing_commonjs_twing_commonjs2_twing_amd_twing_.TwingFunction('bsi_cx_js_module_inline', (template, module) => {
  let config = {
    module: module
  };
  return bsiCxJsModuleImport(template, config, true);
}, [], { needs_template: true, is_safe: ['html'] });

/**
 * Import all missing JS module chunks.
 */
const bsiCxJsModuleMissingChunksImport = new external_root_twing_commonjs_twing_commonjs2_twing_amd_twing_.TwingFunction('bsi_cx_js_module_missing_chunks_import', (template, attributes) => {
  let config = {
    chunks: true,
    attributes: attributes || {}
  };
  return bsiCxJsModuleImport(template, config, false);
}, [], { needs_template: true, is_safe: ['html'] });

/**
 * Inline all missing JS module chunks.
 */
const bsiCxJsModuleMissingChunksInline = new external_root_twing_commonjs_twing_commonjs2_twing_amd_twing_.TwingFunction('bsi_cx_js_module_missing_chunks_inline', (template, attributes) => {
  let config = {
    chunks: true,
    attributes: attributes || {}
  };
  return bsiCxJsModuleImport(template, config, true);
}, [], { needs_template: true, is_safe: ['html'] });

/**
 * Get URL to the JS runtime module.
 */
const bsiCxJsModuleRuntimeHref = new external_root_twing_commonjs_twing_commonjs2_twing_amd_twing_.TwingFunction('bsi_cx_js_module_runtime_href', () => {
  return Promise.resolve(Constant.BSI_CX_MODULE_RUNTIME_HREF);
}, [], {});

/**
 * Get the contents of the JS runtime module.
 */
const bsiCxJsModuleRuntimeInline = new external_root_twing_commonjs_twing_commonjs2_twing_amd_twing_.TwingFunction('bsi_cx_js_module_runtime_inline', () => {
  return Promise.resolve(Constant.BSI_CX_MODULE_RUNTIME_INLINE);
}, [], {});

;// CONCATENATED MODULE: ./src/twing-environment.js
/* module decorator */ module = __webpack_require__.hmd(module);




let twing = new external_root_twing_commonjs_twing_commonjs2_twing_amd_twing_.TwingEnvironment(
  new external_root_twing_commonjs_twing_commonjs2_twing_amd_twing_.TwingLoaderRelativeFilesystem()
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

module.exports = twing;


/***/ }),

/***/ 281:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__281__;

/***/ }),

/***/ 317:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__317__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(863);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=twing-environment.js.map