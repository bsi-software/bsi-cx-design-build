(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fs"), require("path"), require("zip-webpack-plugin"), require("mini-css-extract-plugin"), require("copy-webpack-plugin"), require("terser-webpack-plugin"), require("crypto"), require("vm"), require("handlebars"), require("webpack"), require("twing"), require("@bsi-cx/design-build/dist/template-loader"));
	else if(typeof define === 'function' && define.amd)
		define(["fs", "path", "zip-webpack-plugin", "mini-css-extract-plugin", "copy-webpack-plugin", "terser-webpack-plugin", "crypto", "vm", "handlebars", "webpack", "twing", "@bsi-cx/design-build/dist/template-loader"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("fs"), require("path"), require("zip-webpack-plugin"), require("mini-css-extract-plugin"), require("copy-webpack-plugin"), require("terser-webpack-plugin"), require("crypto"), require("vm"), require("handlebars"), require("webpack"), require("twing"), require("@bsi-cx/design-build/dist/template-loader")) : factory(root["fs"], root["path"], root["zip-webpack-plugin"], root["mini-css-extract-plugin"], root["copy-webpack-plugin"], root["terser-webpack-plugin"], root["crypto"], root["vm"], root["handlebars"], root["webpack"], root["twing"], root["@bsi-cx/design-build/dist/template-loader"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function(__WEBPACK_EXTERNAL_MODULE__790__, __WEBPACK_EXTERNAL_MODULE__281__, __WEBPACK_EXTERNAL_MODULE__18__, __WEBPACK_EXTERNAL_MODULE__68__, __WEBPACK_EXTERNAL_MODULE__432__, __WEBPACK_EXTERNAL_MODULE__239__, __WEBPACK_EXTERNAL_MODULE__703__, __WEBPACK_EXTERNAL_MODULE__714__, __WEBPACK_EXTERNAL_MODULE__350__, __WEBPACK_EXTERNAL_MODULE__373__, __WEBPACK_EXTERNAL_MODULE__317__, __WEBPACK_EXTERNAL_MODULE__85__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Constant)
/* harmony export */ });
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


/***/ }),

/***/ 115:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: external {"root":"twing","commonjs":"twing","commonjs2":"twing","amd":"twing"}
var external_root_twing_commonjs_twing_commonjs2_twing_amd_twing_ = __webpack_require__(317);
// EXTERNAL MODULE: external {"root":"path","commonjs":"path","commonjs2":"path","amd":"path"}
var external_root_path_commonjs_path_commonjs2_path_amd_path_ = __webpack_require__(281);
var external_root_path_commonjs_path_commonjs2_path_amd_path_default = /*#__PURE__*/__webpack_require__.n(external_root_path_commonjs_path_commonjs2_path_amd_path_);
// EXTERNAL MODULE: ./src/constant.js
var constant = __webpack_require__(911);
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
  let placeholder = constant/* default.BSI_CX_JS_MODULE_START */.Z.BSI_CX_JS_MODULE_START + JSON.stringify(metaInfo) + constant/* default.BSI_CX_JS_MODULE_END */.Z.BSI_CX_JS_MODULE_END;
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
  return Promise.resolve(constant/* default.BSI_CX_CSS_HREF */.Z.BSI_CX_CSS_HREF);
}, [], {});

/**
 * Get the contents of the CSS asset.
 */
const bsiCxCssInline = new external_root_twing_commonjs_twing_commonjs2_twing_amd_twing_.TwingFunction('bsi_cx_css_inline', () => {
  return Promise.resolve(constant/* default.BSI_CX_CSS_INLINE */.Z.BSI_CX_CSS_INLINE);
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
  return Promise.resolve(constant/* default.BSI_CX_MODULE_RUNTIME_HREF */.Z.BSI_CX_MODULE_RUNTIME_HREF);
}, [], {});

/**
 * Get the contents of the JS runtime module.
 */
const bsiCxJsModuleRuntimeInline = new external_root_twing_commonjs_twing_commonjs2_twing_amd_twing_.TwingFunction('bsi_cx_js_module_runtime_inline', () => {
  return Promise.resolve(constant/* default.BSI_CX_MODULE_RUNTIME_INLINE */.Z.BSI_CX_MODULE_RUNTIME_INLINE);
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

/***/ 85:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__85__;

/***/ }),

/***/ 432:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__432__;

/***/ }),

/***/ 703:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__703__;

/***/ }),

/***/ 790:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__790__;

/***/ }),

/***/ 350:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__350__;

/***/ }),

/***/ 68:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__68__;

/***/ }),

/***/ 281:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__281__;

/***/ }),

/***/ 239:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__239__;

/***/ }),

/***/ 317:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__317__;

/***/ }),

/***/ 714:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__714__;

/***/ }),

/***/ 373:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__373__;

/***/ }),

/***/ 18:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__18__;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BsiCxWebpackPlugin": () => (/* reexport */ BsiCxWebpackPlugin),
  "BsiCxWebpackZipHashPlugin": () => (/* reexport */ BsiCxWebpackZipHashPlugin),
  "BuildConfig": () => (/* reexport */ BuildConfig),
  "WebpackConfigBuilder": () => (/* reexport */ WebpackConfigBuilder)
});

;// CONCATENATED MODULE: ./src/build-config.js
/**
 * The configuration object for the build of one template.
 */
class BuildConfig {
  constructor() {
    /**
     * @type {string}
     */
    this._name = undefined;
    /**
     * @type {string}
     */
    this._version = '1.0.0';
    /**
     * @type {string}
     */
    this._rootPath = undefined;
    /**
     * @type {string}
     */
    this._outputPath = undefined;
    /**
     * @type {{}}
     */
    this._properties = {};
    /**
     * @type {number}
     */
    this._devServerPort = 9000;
    /**
     * @type {boolean}
     */
    this._hashZipFiles = true;
    /**
     * @type {{}}
     */
    this._modules = {};
    /**
     * @type {[{}]}
     */
    this._additionalFilesToCopy = [];
    /**
     * @type {boolean}
     */
    this._sourceMapEnabled = true;
  }

  /**
   * @returns {string}
   */
  get name() {
    return this._name;
  }

  /**
   * @returns {string}
   */
  get version() {
    return this._version;
  }

  /**
   * @returns {string}
   */
  get rootPath() {
    return this._rootPath;
  }

  /**
   * @returns {string|undefined}
   */
  get outputPath() {
    return this._outputPath;
  }

  /**
   * @returns {{}}
   */
  get properties() {
    return this._properties;
  }

  /**
   * @returns {number}
   */
  get devServerPort() {
    return this._devServerPort;
  }

  /**
   * @returns {boolean}
   */
  get hashZipFiles() {
    return this._hashZipFiles;
  }

  /**
   * @returns {{}}
   */
  get modules() {
    return this._modules;
  }

  /**
   * @returns {[{}]}
   */
  get additionalFilesToCopy() {
    return this._additionalFilesToCopy;
  }

  /**
   * @returns {boolean}
   */
  get sourceMapEnabled() {
    return this._sourceMapEnabled;
  }

  /**
   * The name of this template, e.g. landingpage. This will be included in the name of the resulting ZIP file in the dist folder.
   * 
   * @param {string} name 
   * @returns {BuildConfig}
   */
  withName(name) {
    this._name = name;
    return this;
  }

  /**
   * The version of this template, e.g. 1.0.1. This will be included in the name of the resulting ZIP file in the dist folder.
   * 
   * @param {string} version 
   * @returns {BuildConfig}
   */
  withVersion(version) {
    this._version = version;
    return this;
  }

  /**
   * The path to the root folder of this template. This folder contains the source code of your template.
   * 
   * @param {string} rootPath 
   * @returns {BuildConfig}
   */
  withRootPath(rootPath) {
    this._rootPath = rootPath;
    return this;
  }

  /**
   * A custom output path to use. Default: dist/{name}.
   * 
   * @param {string} outputPath 
   * @returns {BuildConfig}
   */
  withOutputPath(outputPath) {
    this._outputPath = outputPath;
    return this;
  }

  /**
   * The data properties for your Twig templates. This object will be available as "properties" variable inside your Twig templates.
   * 
   * @param {{}} properties 
   * @returns {BuildConfig}
   */
  withProperties(properties) {
    this._properties = properties;
    return this;
  }

  /**
   * A TCP port number to use for the development server. The default port is 9000. Be aware, that you don't have to configure a seperate port for each template.
   * 
   * @param {number} devServerPort 
   * @returns {BuildConfig}
   */
  withDevServerPort(devServerPort) {
    this._devServerPort = devServerPort;
    return this;
  }

  /**
   * Add a unique hash value to the name of the resulting ZIP file.
   * 
   * @param {boolean} hashZipFiles 
   * @returns {BuildConfig}
   */
  withHashZipFiles(hashZipFiles) {
    this._hashZipFiles = !!hashZipFiles;
    return this;
  }

  /**
   * Add additional Java Script modules.
   * 
   * @param {{}} modules 
   * @returns {BuildConfig}
   */
  withModules(modules) {
    this._modules = modules;
    return this;
  }

  /**
   * Add one additional Java Script module.
   * 
   * @param {string} name 
   * @param {string} path 
   * @returns {BuildConfig}
   */
  withModule(name, path) {
    this._modules[name] = path;
    return this;
  }

  /**
   * Add additional files to copy to the output folder.
   * 
   * @param {[{}]} additionalFilesToCopy 
   * @returns {BuildConfig}
   */
  withAdditionalFilesToCopy(additionalFilesToCopy) {
    this._additionalFilesToCopy = additionalFilesToCopy;
    return this;
  }

  /**
   * Add a single configuration for additional files to copy to the output folder.
   * 
   * @param {{}} additionalFileToCopy 
   * @returns {BuildConfig}
   */
  withAdditionalFileToCopy(additionalFileToCopy) {
    this._additionalFilesToCopy.push(additionalFileToCopy);
    return this;
  }

  /**
   * Enable or disable source maps.
   * 
   * @param {boolean} sourceMapEnabled 
   * @returns {BuildConfig}
   */
  withSourceMapEnabled(sourceMapEnabled) {
    this._sourceMapEnabled = sourceMapEnabled;
    return this;
  }

  /**
   * @returns {BuildConfig}
   */
  validate() {
    this._checkInstanceofAndRequired('name', String, true);
    this._checkInstanceofAndRequired('version', String, true);
    this._checkInstanceofAndRequired('rootPath', String, true);
    this._checkInstanceofAndRequired('outputPath', String, false);
    this._checkInstanceofAndRequired('properties', Object, false);
    this._checkInstanceofAndRequired('devServerPort', Number, false);
    this._checkInstanceofAndRequired('hashZipFiles', Boolean, false);
    this._checkInstanceofAndRequired('modules', Object, false);
    this._checkInstanceofAndRequired('additionalFilesToCopy', Array, false);
    this._checkInstanceofAndRequired('sourceMapEnabled', Boolean, false);

    return this;
  }

  /**
   * @param {string} name 
   * @param {object} type 
   * @param {boolean} required 
   */
  _checkInstanceofAndRequired(name, type, required) {
    const property = this[`_${name}`];
    if (property !== undefined && !property instanceof type) {
      throw new Error(`${name} must be ${type.constructor.name}`);
    }
    if (required && !property) {
      throw new Error(`${name} is required and can not be empty`);
    }
  }
}

// EXTERNAL MODULE: external {"root":"fs","commonjs":"fs","commonjs2":"fs","amd":"fs"}
var external_root_fs_commonjs_fs_commonjs2_fs_amd_fs_ = __webpack_require__(790);
var external_root_fs_commonjs_fs_commonjs2_fs_amd_fs_default = /*#__PURE__*/__webpack_require__.n(external_root_fs_commonjs_fs_commonjs2_fs_amd_fs_);
// EXTERNAL MODULE: external {"root":"path","commonjs":"path","commonjs2":"path","amd":"path"}
var external_root_path_commonjs_path_commonjs2_path_amd_path_ = __webpack_require__(281);
var external_root_path_commonjs_path_commonjs2_path_amd_path_default = /*#__PURE__*/__webpack_require__.n(external_root_path_commonjs_path_commonjs2_path_amd_path_);
// EXTERNAL MODULE: external {"root":"zip-webpack-plugin","commonjs":"zip-webpack-plugin","commonjs2":"zip-webpack-plugin","amd":"zip-webpack-plugin"}
var external_root_zip_webpack_plugin_commonjs_zip_webpack_plugin_commonjs2_zip_webpack_plugin_amd_zip_webpack_plugin_ = __webpack_require__(18);
var external_root_zip_webpack_plugin_commonjs_zip_webpack_plugin_commonjs2_zip_webpack_plugin_amd_zip_webpack_plugin_default = /*#__PURE__*/__webpack_require__.n(external_root_zip_webpack_plugin_commonjs_zip_webpack_plugin_commonjs2_zip_webpack_plugin_amd_zip_webpack_plugin_);
// EXTERNAL MODULE: external {"root":"mini-css-extract-plugin","commonjs":"mini-css-extract-plugin","commonjs2":"mini-css-extract-plugin","amd":"mini-css-extract-plugin"}
var external_root_mini_css_extract_plugin_commonjs_mini_css_extract_plugin_commonjs2_mini_css_extract_plugin_amd_mini_css_extract_plugin_ = __webpack_require__(68);
var external_root_mini_css_extract_plugin_commonjs_mini_css_extract_plugin_commonjs2_mini_css_extract_plugin_amd_mini_css_extract_plugin_default = /*#__PURE__*/__webpack_require__.n(external_root_mini_css_extract_plugin_commonjs_mini_css_extract_plugin_commonjs2_mini_css_extract_plugin_amd_mini_css_extract_plugin_);
// EXTERNAL MODULE: external {"root":"copy-webpack-plugin","commonjs":"copy-webpack-plugin","commonjs2":"copy-webpack-plugin","amd":"copy-webpack-plugin"}
var external_root_copy_webpack_plugin_commonjs_copy_webpack_plugin_commonjs2_copy_webpack_plugin_amd_copy_webpack_plugin_ = __webpack_require__(432);
var external_root_copy_webpack_plugin_commonjs_copy_webpack_plugin_commonjs2_copy_webpack_plugin_amd_copy_webpack_plugin_default = /*#__PURE__*/__webpack_require__.n(external_root_copy_webpack_plugin_commonjs_copy_webpack_plugin_commonjs2_copy_webpack_plugin_amd_copy_webpack_plugin_);
// EXTERNAL MODULE: external {"root":"terser-webpack-plugin","commonjs":"terser-webpack-plugin","commonjs2":"terser-webpack-plugin","amd":"terser-webpack-plugin"}
var external_root_terser_webpack_plugin_commonjs_terser_webpack_plugin_commonjs2_terser_webpack_plugin_amd_terser_webpack_plugin_ = __webpack_require__(239);
var external_root_terser_webpack_plugin_commonjs_terser_webpack_plugin_commonjs2_terser_webpack_plugin_amd_terser_webpack_plugin_default = /*#__PURE__*/__webpack_require__.n(external_root_terser_webpack_plugin_commonjs_terser_webpack_plugin_commonjs2_terser_webpack_plugin_amd_terser_webpack_plugin_);
// EXTERNAL MODULE: external {"root":"crypto","commonjs":"crypto","commonjs2":"crypto","amd":"crypto"}
var external_root_crypto_commonjs_crypto_commonjs2_crypto_amd_crypto_ = __webpack_require__(703);
// EXTERNAL MODULE: external {"root":"vm","commonjs":"vm","commonjs2":"vm","amd":"vm"}
var external_root_vm_commonjs_vm_commonjs2_vm_amd_vm_ = __webpack_require__(714);
var external_root_vm_commonjs_vm_commonjs2_vm_amd_vm_default = /*#__PURE__*/__webpack_require__.n(external_root_vm_commonjs_vm_commonjs2_vm_amd_vm_);
// EXTERNAL MODULE: external {"root":"handlebars","commonjs":"handlebars","commonjs2":"handlebars","amd":"handlebars"}
var external_root_handlebars_commonjs_handlebars_commonjs2_handlebars_amd_handlebars_ = __webpack_require__(350);
var external_root_handlebars_commonjs_handlebars_commonjs2_handlebars_amd_handlebars_default = /*#__PURE__*/__webpack_require__.n(external_root_handlebars_commonjs_handlebars_commonjs2_handlebars_amd_handlebars_);
// EXTERNAL MODULE: external {"root":"webpack","commonjs":"webpack","commonjs2":"webpack","amd":"webpack"}
var external_root_webpack_commonjs_webpack_commonjs2_webpack_amd_webpack_ = __webpack_require__(373);
;// CONCATENATED MODULE: ./src/handlebars-helpers.js
/* harmony default export */ const handlebars_helpers = ({
  'bsi.nls': key => key
});

// EXTERNAL MODULE: ./src/constant.js
var constant = __webpack_require__(911);
;// CONCATENATED MODULE: ./src/bsi-cx-webpack-plugin.js










class _BsiCxWebpackPlugin {
  /**
   * @type {RegExp}
   */
  static DESIGN_JSON = /^design\.json$/;
  /**
   * @type {RegExp}
   */
  static DESIGN_HTML = /^design\.(html|hbs)$/;
  /**
   * @type {RegExp}
   */
  static PREVIEW_HTML = /^preview\.(html|hbs)$/;

  /**
   * @type {RegExp}
   */
  static STYLES_CSS = /^static\/styles\-[0-9a-z]+\.css$/;
  /**
   * @type {RegExp}
   */
  static CSS_INLINE = new RegExp(constant/* default.BSI_CX_CSS_INLINE */.Z.BSI_CX_CSS_INLINE, 'g');
  /**
   * @type {RegExp}
   */
  static CSS_HREF = new RegExp(constant/* default.BSI_CX_CSS_HREF */.Z.BSI_CX_CSS_HREF, 'g');

  /**
   * @type {RegExp}
   */
  static JS_MODULE = new RegExp(`${constant/* default.BSI_CX_JS_MODULE_START */.Z.BSI_CX_JS_MODULE_START}(?<metaInfo>.+)${constant/* default.BSI_CX_JS_MODULE_END */.Z.BSI_CX_JS_MODULE_END}`, 'g');
  /**
   * @type {RegExp}
   */
  static JS_MODULE_RUNTIME_HREF = new RegExp(constant/* default.BSI_CX_MODULE_RUNTIME_HREF */.Z.BSI_CX_MODULE_RUNTIME_HREF, 'g');
  /**
   * @type {RegExp}
   */
  static JS_MODULE_RUNTIME_INLINE = new RegExp(constant/* default.BSI_CX_MODULE_RUNTIME_INLINE */.Z.BSI_CX_MODULE_RUNTIME_INLINE, 'g');
  /**
   * @type {RegExp}
   */
  static JS_MODULE_RUNTIME = new RegExp(`^${constant/* default.BSI_CX_MODULE_RUNTIME_PATH */.Z.BSI_CX_MODULE_RUNTIME_PATH}\.js$`);

  /**
   * @type {number}
   */
  static ELEMENT_FILE_HASH_LENGTH = 20;

  /**
   * @param {Compiler} compiler 
   * @param {Compilation} compilation 
   * @param {WebpackLogger} logger 
   */
  constructor(compiler, compilation, logger) {
    /**
     * @type {Compiler}
     */
    this._compiler = compiler;
    /**
     * @type {Compilation}
     */
    this._compilation = compilation;
    /**
     * @type {WebpackLogger}
     */
    this._logger = logger;
  }

  apply() {
    try {
      this._handleDesignJson();
      this._exportDesignHtml();
      this._exportPreviewHtml();
    } catch (error) {
      if (error instanceof external_root_webpack_commonjs_webpack_commonjs2_webpack_amd_webpack_.WebpackError) {
        this._compilation.errors.push(error);
      } else {
        this._logger.error(error);
      }
    }
  }

  _exportDesignHtml() {
    let designHtmlPath = this._getAssetName(_BsiCxWebpackPlugin.DESIGN_HTML);
    this._updateHtmlTemplate(designHtmlPath, 'design');
  }

  _exportPreviewHtml() {
    let previewFilePath = this._getAssetName(_BsiCxWebpackPlugin.PREVIEW_HTML);
    let previewTemplate = this._updateHtmlTemplate(previewFilePath, 'preview');

    if (/\.hbs$/.test(previewFilePath)) {
      this._handlePreviewHandlebars(previewFilePath, previewTemplate);
    }
  }

  _handleDesignJson() {
    let designJsonPath = this._getAssetName(_BsiCxWebpackPlugin.DESIGN_JSON);
    let designJsonObj = this._loadAsset(designJsonPath, 'json');
    let contentElementGroups = designJsonObj.contentElementGroups || [];
    let website = designJsonObj.website || { includes: {} };
    let websiteIncludes = website.includes || {};

    this._handleDesignPreviewImage(designJsonObj);

    contentElementGroups
      .forEach(group => group.contentElements
        .forEach(element => this._handleElement(element)));

    Object.values(websiteIncludes)
      .forEach(include => this._handleInclude(include));

    let jsonStr = JSON.stringify(designJsonObj, null, 4);
    this._updateAsset(designJsonPath, jsonStr);
  }

  _handleDesignPreviewImage(designJsonObj) {
    if (typeof designJsonObj.previewImage !== 'undefined') {
      designJsonObj.previewImage = this._removeDesignBaseUrl(designJsonObj.previewImage);
    }
  }

  _handleElement(element) {
    element.file = this._handleTemplateFile(element.file, 'contentElements');
  }

  _handleInclude(include) {
    include.file = this._handleTemplateFile(include.file, 'includes');
  }

  /**
   * @param {{content:string,path:string}} fileObj
   * @param {string} baseFolder
   * @returns {string}
   */
  _handleTemplateFile(fileObj, baseFolder) {
    let rawContent = fileObj.content;
    let content = /^module\.exports/.test(rawContent) ? this._eval(rawContent) : rawContent;
    let originalExtension = external_root_path_commonjs_path_commonjs2_path_amd_path_default().extname(fileObj.path);
    let fileName = external_root_path_commonjs_path_commonjs2_path_amd_path_default().basename(fileObj.path, originalExtension).replace(/\.(hbs)$/, '');
    let contentHash = this._createContentHash(content);
    let extension = this._getTemplateFileExtension(fileObj.path);
    let elementFilePath = `${baseFolder}${(external_root_path_commonjs_path_commonjs2_path_amd_path_default()).posix.sep}${fileName}-${contentHash}.${extension}`;

    this._emitAsset(elementFilePath, content);

    return elementFilePath;
  }

  /**
   * @param {string} previewFilePath 
   * @param {string} previewTemplate 
   */
  _handlePreviewHandlebars(previewFilePath, previewTemplate) {
    let parser = this._getHandlebarsParser();
    let template = parser.compile(previewTemplate);
    let rendered = template({
      designBaseUrl: '.',
      bsi: this._getHandlebarsHelpers()
    });
    let previewHtmlPath = previewFilePath.replace(/\.hbs$/, '.html');

    this._emitAsset(previewHtmlPath, rendered);
    this._deleteAsset(previewFilePath);
  }

  /**
   * @param {string} fileName
   * @returns {string}
   */
  _getTemplateFileExtension(fileName) {
    if (/\.hbs\.twig$/.test(fileName)) {
      return 'hbs';
    }
    if (/\.hbs$/.test(fileName)) {
      return 'hbs';
    }
    return 'html';
  }

  /**
   * @param {RegExp} nameRegEx 
   * @returns {string[]}
   */
  _getAssetNames(nameRegEx) {
    return Object.keys(this._compilation.assets)
      .filter(name => nameRegEx.test(name));
  }

  /**
   * @param {RegExp} nameRegEx 
   * @returns {string}
   */
  _getAssetName(nameRegEx) {
    return this._getAssetNames(nameRegEx).shift();
  }

  _eval(source) {
    let script = new (external_root_vm_commonjs_vm_commonjs2_vm_amd_vm_default()).Script(source);
    let context = { module: {} };
    script.runInNewContext(context);
    return context.module.exports;
  }

  /**
   * @param {string} name 
   * @param {string} content 
   */
  _updateAsset(filePath, content) {
    let source = new external_root_webpack_commonjs_webpack_commonjs2_webpack_amd_webpack_.sources.RawSource(content);
    this._compilation.updateAsset(filePath, source);
  }

  /**
   * @param {string} name 
   * @param {string} scope 
   * @returns {*}
   */
  _loadAsset(name, scope) {
    let asset = this._compilation.getAsset(name);
    let script = new (external_root_vm_commonjs_vm_commonjs2_vm_amd_vm_default()).Script(asset.source.source());
    let context = { self: {} };

    script.runInNewContext(context);

    return context[scope];
  }

  /**
   * @param {string} filePath 
   * @param {string} source 
   */
  _emitAsset(filePath, content) {
    let source = new external_root_webpack_commonjs_webpack_commonjs2_webpack_amd_webpack_.sources.RawSource(content);
    this._compilation.emitAsset(filePath, source);
  }

  /**
   * @param {string} filePath 
   */
  _deleteAsset(filePath) {
    this._compilation.deleteAsset(filePath);
  }

  /**
   * @param {string} filePath 
   * @param {string} name
   * @returns {string}
   */
  _updateHtmlTemplate(filePath, name) {
    let templateObj = this._loadAsset(filePath, name);
    let templateStr = this._eval(templateObj.content);

    templateStr = templateStr.trim();
    templateStr = this._handleStylesheets(templateStr);
    templateStr = this._handleJavaScriptModules(templateStr);

    this._updateAsset(filePath, templateStr);

    return templateStr;
  }

  /**
   * @param {string} content 
   * @returns {string}
   */
  _handleStylesheets(content) {
    let publicPath = this._compiler.options.output.publicPath.replace(/\/$/, '');
    let cssStylesFilename = this._getAssetName(_BsiCxWebpackPlugin.STYLES_CSS);

    if (cssStylesFilename === undefined) {
      return content;
    }

    let linkStyleUrl = publicPath.length > 0 ? `${publicPath}/${cssStylesFilename}` : `./${cssStylesFilename}`;
    let inlineSourceAssetsUrl = publicPath.length > 0 ? `${publicPath}/static/` : './static/';
    let asset = this._compilation.getAsset(cssStylesFilename);
    let source = asset.source.source()
      .trim()
      .replace(/\n/g, '')
      .replace(/\.\.\/static\//g, inlineSourceAssetsUrl);

    content = content.replace(_BsiCxWebpackPlugin.CSS_INLINE, source);
    content = content.replace(_BsiCxWebpackPlugin.CSS_HREF, linkStyleUrl);

    return content;
  }

  /**
   * @param {string} content 
   * @returns {string}
   */
  _handleJavaScriptModules(content) {
    let jsModuleMatches = content.matchAll(_BsiCxWebpackPlugin.JS_MODULE);
    let importedModules = [];

    for (const match of jsModuleMatches) {
      content = this._handleFoundJavaScriptModule(content, match, importedModules);
    }

    content = this._injectModuleRuntime(content);

    return content;
  }

  _injectModuleRuntime(content) {
    let publicPath = this._compiler.options.output.publicPath.replace(/\/$/, '');
    let filename = this._getAssetName(_BsiCxWebpackPlugin.JS_MODULE_RUNTIME);

    if (filename === undefined) {
      return content;
    }

    let url = publicPath.length > 0 ? `${publicPath}/${filename}` : `./${filename}`;
    let asset = this._compilation.getAsset(filename);
    let source = asset.source.source()
      .trim()
      .replace(/\n/g, '');

    content = content.replace(_BsiCxWebpackPlugin.JS_MODULE_RUNTIME_INLINE, source);
    content = content.replace(_BsiCxWebpackPlugin.JS_MODULE_RUNTIME_HREF, url);

    return content;
  }

  /**
   * @param {string} content 
   * @param {RegExpMatchArray} match 
   * @param {string[]} importedModules
   * @returns {string}
   */
  _handleFoundJavaScriptModule(content, match, importedModules) {
    /**
     * @type {{template:string,module:string,chunks:boolean|undefined,attributes:{}|undefined,inline:boolean}}
     */
    let metaInfo = JSON.parse(match.groups.metaInfo);
    let strToReplace = match[0];
    let replacement = '';

    if (typeof metaInfo.module !== 'undefined') {
      replacement = this._handleFoundJavaScriptModuleImport(metaInfo, importedModules);
    } else if (typeof metaInfo.chunks !== 'undefined') {
      replacement = this._handleFoundJavaScriptModuleChunks(metaInfo, importedModules);
    }

    return content.replace(strToReplace, replacement);
  }

  /**
   * @param {{template:string,module:string,chunks:boolean|undefined,attributes:{}|undefined,inline:boolean}} metaInfo
   * @param {string[]} importedModules
   * @returns {string}
   */
  _handleFoundJavaScriptModuleImport(metaInfo, importedModules) {
    let module = metaInfo.module;
    let inline = metaInfo.inline;
    let moduleAssetRegex = new RegExp(`^modules\/${module}\-[0-9a-z]+\.js$`);
    let moduleAssetPath = this._getAssetName(moduleAssetRegex);

    if (!moduleAssetPath) {
      throw this._webpackError(
        `Module "${module}" does not exist.`,
        `The module "${module}" does not exist. You need to include it in your modules configuration.`,
        metaInfo.template
      );
    }

    let replacement = '';

    if (inline) {
      let asset = this._compilation.getAsset(moduleAssetPath);
      replacement = asset.source();
    } else {
      replacement = constant/* default.BSI_CX_DESIGN_BASE_URL */.Z.BSI_CX_DESIGN_BASE_URL + '/' + moduleAssetPath;
    }

    importedModules.push(moduleAssetPath);

    return replacement;
  }

  /**
   * @param {{template:string,module:string,chunks:boolean|undefined,attributes:{}|undefined,inline:boolean}} metaInfo
   * @param {string[]} importedModules
   * @returns {string}
   */
  _handleFoundJavaScriptModuleChunks(metaInfo, importedModules) {
    let inline = metaInfo.inline;
    let assetRegex = new RegExp(`^(modules|vendors)\/.*\.js$`);
    let assetPaths = this._getAssetNames(assetRegex);

    let replacement = assetPaths
      .filter(assetPath => !assetPath.startsWith(constant/* default.BSI_CX_MODULE_RUNTIME_PATH */.Z.BSI_CX_MODULE_RUNTIME_PATH) && importedModules.indexOf(assetPath) === -1)
      .map(assetPath => {
        importedModules.push(assetPath);

        if (inline) {
          let asset = this._compilation.getAsset(assetPath);
          return `<script>${asset.source()}</script>`;
        } else {
          let url = constant/* default.BSI_CX_DESIGN_BASE_URL */.Z.BSI_CX_DESIGN_BASE_URL + '/' + assetPath;
          return `<script src="${url}" defer="defer"></script>`;
        }
      }).join('');

    return replacement;
  }

  /**
   * @param {string} message 
   * @param {string} details 
   * @param {string|undefined} [location=undefined]
   * @returns 
   */
  _webpackError(message, details, location) {
    let error = new external_root_webpack_commonjs_webpack_commonjs2_webpack_amd_webpack_.WebpackError(message);
    error.details = details;
    if (!!location) {
      error.loc = {
        name: this._getContextRelativePath(location)
      };
    }
    return error;
  }

  _getContextRelativePath(absolutePath) {
    let contextPath = this._compiler.context;
    let relativePath = external_root_path_commonjs_path_commonjs2_path_amd_path_default().relative(contextPath, absolutePath).replace(/\\/g, (external_root_path_commonjs_path_commonjs2_path_amd_path_default()).posix.sep);
    return '.' + (external_root_path_commonjs_path_commonjs2_path_amd_path_default()).posix.sep + relativePath;
  }

  /**
   * @param {string} content 
   * @returns {string}
   */
  _createContentHash(content) {
    return (0,external_root_crypto_commonjs_crypto_commonjs2_crypto_amd_crypto_.createHash)('sha256')
      .update(content)
      .digest('hex')
      .substr(0, _BsiCxWebpackPlugin.ELEMENT_FILE_HASH_LENGTH);
  }

  /**
   * @returns {Handlebars}
   */
  _getHandlebarsParser() {
    return external_root_handlebars_commonjs_handlebars_commonjs2_handlebars_amd_handlebars_default().create();
  }

  /**
   * @returns {{}} 
   */
  _getHandlebarsHelpers() {
    let helpersObj = {};
    for (const [name, func] of Object.entries(handlebars_helpers)) {
      let fixedName = name.replace(/^bsi\./, '');
      helpersObj[fixedName] = func;
    }
    return helpersObj;
  }

  /**
   * @param {string} url 
   * @returns {string}
   */
  _removeDesignBaseUrl(url) {
    return url.replace(`${constant/* default.BSI_CX_DESIGN_BASE_URL */.Z.BSI_CX_DESIGN_BASE_URL}/`, '');
  }
}

class BsiCxWebpackPlugin {
  /**
   * @type {string}
   */
  static PLUGIN_NAME = 'BsiCxWebpackPlugin';

  apply(compiler) {
    compiler.hooks.thisCompilation.tap(BsiCxWebpackPlugin.PLUGIN_NAME, compilation => {
      compilation.hooks.processAssets.tap(
        {
          name: BsiCxWebpackPlugin.PLUGIN_NAME,
          stage: external_root_webpack_commonjs_webpack_commonjs2_webpack_amd_webpack_.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE
        },
        () => {
          const logger = compilation.getLogger(BsiCxWebpackPlugin.PLUGIN_NAME);
          new _BsiCxWebpackPlugin(compiler, compilation, logger).apply();
        })
    });
  }
};

;// CONCATENATED MODULE: ./src/utility.js



class StaticJavaScriptCondition {
  /**
   * @type {RegExp}
   */
  static FILE_EXTENSION = /\.js/i;

  /**
   * @param {string} root 
   * @param {string} file 
   * @returns {boolean}
   */
  static isInsideStaticFolder(root, file) {
    let staticFilePath = external_root_path_commonjs_path_commonjs2_path_amd_path_default().resolve(root, 'static') + (external_root_path_commonjs_path_commonjs2_path_amd_path_default()).sep;
    return file.startsWith(staticFilePath);
  }

  /**
   * @param {string} root 
   * @param {string} file 
   * @returns {boolean}
   */
  static test(root, file) {
    return StaticJavaScriptCondition.isInsideStaticFolder(root, file)
      && StaticJavaScriptCondition.FILE_EXTENSION.test(file);
  }
}

/**
 * 
 * @param {string} name 
 * @param {string} version 
 * @param {string} [suffix='']
 */
function getZipArchiveName(name, version, suffix) {
  let filename = [name, version, suffix]
    .filter(value => !!value)
    .join('-');
  return `${filename}.zip`;
}

;// CONCATENATED MODULE: ./src/bsi-cx-webpack-zip-hash-plugin.js






class BsiCxWebpackZipHashPlugin {
  /**
   * @type {string}
   */
  static PLUGIN_NAME = 'BsiCxWebpackZipHashPlugin';

  /**
   * @param {string} name 
   * @param {string} version 
   * @param {boolean} enabled 
   */
  constructor(name, version, enabled) {
    this._name = name;
    this._version = version;
    this._enabled = !!enabled;
    this._prodZipFileName = getZipArchiveName(name, version);
    this._devZipFileName = getZipArchiveName(name, version, 'dev');
  }

  /**
   * @param {Compilation} compilation
   * @param {Asset} asset 
   */
  _handleZipAsset(compilation, asset) {
    let oldAssetName = asset.name;
    let source = asset.source;
    let hash = (0,external_root_crypto_commonjs_crypto_commonjs2_crypto_amd_crypto_.createHash)('sha256')
      .update(source.source())
      .digest('hex')
      .substr(0, 5);
    let newAssetName = oldAssetName.replace(/\.zip$/, `-${hash}.zip`);

    compilation.deleteAsset(oldAssetName);
    compilation.emitAsset(newAssetName, source);
  }

  apply(compiler) {
    compiler.hooks.thisCompilation.tap(BsiCxWebpackZipHashPlugin.PLUGIN_NAME, compilation => {
      compilation.hooks.processAssets.tap(
        {
          name: BsiCxWebpackZipHashPlugin.PLUGIN_NAME,
          stage: external_root_webpack_commonjs_webpack_commonjs2_webpack_amd_webpack_.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_TRANSFER
        },
        () => {
          if (!this._enabled) {
            return;
          }

          Object.keys(compilation.assets)
            .filter(name => name === this._prodZipFileName || name === this._devZipFileName)
            .map(name => compilation.getAsset(name))
            .forEach(asset => this._handleZipAsset(compilation, asset));
        })
    });
  }
};

;// CONCATENATED MODULE: ./src/webpack-config-builder.js















class WebpackConfigBuilder {
  /**
   * @param {BuildConfig} config 
   */
  constructor(config) {
    this._config = config;
  }

  /**
   * @returns {BuildConfig}
   */
  get config() {
    return this._config;
  }

  build() {
    return {
      entry: this._getEntryConfig(),
      name: this.config.name,
      context: this.config.rootPath,
      target: 'web',
      module: {
        rules: [
          ...this._getTwigRuleConfig(),
          ...this._getHtmlAndHbsRuleConfig(),
          ...this._getStyleRulesConfig(),
          ...this._getStaticAssetsRuleConfig(),
          ...this._getStaticJavaScriptFileRuleConfig(),
          ...this._getRegularJavaScriptFileRuleConfig()
        ]
      },
      plugins: [
        ...this._getMiniCssExtractPluginConfig(),
        ...this._getCopyPluginConfig(),
        ...this._getBsiCxWebpackPluginConfig(),
        ...this._getZipPluginConfig(),
      ],
      devtool: this._getDevToolConfig(),
      devServer: this._getDevServerConfig(),
      stats: this._getStatsConfig(),
      performance: this._getPerformanceConfig(),
      optimization: {
        minimize: true,
        minimizer: this._getOptimizationMinimizerConfig(),
        splitChunks: {
          chunks: 'all',
          name: this._getOptimizationSplitChunksNameConfig(),
          cacheGroups: {
            ...this._getOptimizationCacheGroupsConfig(),
          }
        }
      },
      output: this._getOutputConfig()
    };
  }

  /**
   * The default output path: dist/{name}
   * 
   * @returns {string}
   */
  _getDefaultOutputPath() {
    return external_root_path_commonjs_path_commonjs2_path_amd_path_default().resolve(process.cwd(), 'dist', this.config.name);
  }

  /**
   * The output path to use.
   * 
   * @returns {string}
   */
  _getOutputPath() {
    return this.config.outputPath || this._getDefaultOutputPath();
  }

  /**
   * The entry configuration.
   * 
   * @returns {{}}
   */
  _getEntryConfig() {
    return {
      ...this._getJavaScriptModuleEntries(),
      json: {
        import: external_root_path_commonjs_path_commonjs2_path_amd_path_default().resolve(this.config.rootPath, 'design.js'),
        filename: 'design.json'
      },
      design: this._evaluateEntryTemplate('design'),
      preview: this._evaluateEntryTemplate('preview')
    };
  }

  /**
   * Get the entry configuration for a template.
   * 
   * @param {string} name 
   * @returns {{}}
   */
  _evaluateEntryTemplate(name) {
    let twigFilePath = external_root_path_commonjs_path_commonjs2_path_amd_path_default().resolve(this.config.rootPath, `${name}.twig`);
    let hbsFilePath = external_root_path_commonjs_path_commonjs2_path_amd_path_default().resolve(this.config.rootPath, `${name}.hbs.twig`);
    let isTwig = external_root_fs_commonjs_fs_commonjs2_fs_amd_fs_default().existsSync(twigFilePath);
    let extension = isTwig ? 'html' : 'hbs';
    return {
      import: isTwig ? twigFilePath : hbsFilePath,
      filename: `${name}.${extension}`
    };
  }

  /**
   * Get the entry configurations for the Java Script modules.
   * 
   * @returns {[{}]}
   */
  _getJavaScriptModuleEntries() {
    let entries = {};
    for (const [name, filePath] of Object.entries(this.config.modules)) {
      entries[name] = {
        import: external_root_path_commonjs_path_commonjs2_path_amd_path_default().resolve(filePath),
        filename: 'modules/[name]-[contenthash].js',
        runtime: constant/* default.BSI_CX_MODULE_RUNTIME_PATH */.Z.BSI_CX_MODULE_RUNTIME_PATH
      };
    }
    return entries;
  }

  /**
   * Rules for Twig file handling.
   * 
   * @returns {[{}]}
   */
  _getTwigRuleConfig() {
    return [
      {
        test: /\.twig$/i,
        use: [
          this._getTemplateLoader(),
          'ref-loader',
          {
            loader: 'twing-loader',
            options: {
              environmentModulePath: /*require.resolve*/(115),
              renderContext: {
                properties: this.config.properties,
                designBaseUrl: constant/* default.BSI_CX_DESIGN_BASE_URL */.Z.BSI_CX_DESIGN_BASE_URL
              }
            }
          }
        ]
      }
    ];
  }

  /**
   * Rule for HTML and Handlebars file handling.
   * 
   * @returns {[{}]}
   */
  _getHtmlAndHbsRuleConfig() {
    return [
      {
        test: /\.(html|hbs)$/i,
        use: [
          this._getTemplateLoader(),
          'ref-loader',
        ]
      }
    ];
  }

  /**
   * Rules for LESS, SASS/SCSS and CSS file handling.
   * 
   * @returns {[{}]}
   */
  _getStyleRulesConfig() {
    return [
      {
        test: /\.less$/i,
        use: [
          ...this._getCssLoaderChain(),
          {
            loader: 'less-loader',
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          ...this._getCssLoaderChain(),
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          ...this._getCssLoaderChain()
        ]
      }
    ];
  }

  /**
   * Get all file extensions that should be handled as static assets (e.g. images and fonts).
   * 
   * @returns {[string]}
   */
  _getStaticAssetFileExtensions() {
    return [
      'png',
      'apng',
      'jpg',
      'jpeg',
      'webp',
      'gif',
      'bmp',
      'tiff',
      'raw',
      'svg',
      'eot',
      'ttf',
      'woff',
      'woff2'
    ];
  }

  /**
   * Rule for static assets handling.
   * 
   * @returns {[{}]}
   */
  _getStaticAssetsRuleConfig() {
    let fileExtensions = this._getStaticAssetFileExtensions().join('|');
    let testRegex = new RegExp(`\.(${fileExtensions})$`, 'i');

    return [
      {
        test: testRegex,
        type: 'asset/resource',
        generator: {
          filename: 'static/[name]-[contenthash][ext]'
        }
      }
    ];
  }

  /**
   * Rule for static Java Script file handling.
   * 
   * @returns {[{}]}
   */
  _getStaticJavaScriptFileRuleConfig() {
    return [
      {
        resource: (file) => StaticJavaScriptCondition.test(this.config.rootPath, file),
        type: 'asset/resource',
        generator: {
          filename: 'static/[name]-[contenthash][ext]'
        }
      }
    ];
  }

  /**
   * Rule for regular Java Script file handling.
   * 
   * @returns {[{}]}
   */
  _getRegularJavaScriptFileRuleConfig() {
    return [
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
            cacheDirectory: true
          }
        }
      }
    ];
  }

  /**
   * @returns {string}
   */
  _getTemplateLoader() {
    return /*require.resolve*/(85);
  }

  /**
   * @returns {[{}]}
   */
  _getCssLoaderChain() {
    return [
      {
        loader: (external_root_mini_css_extract_plugin_commonjs_mini_css_extract_plugin_commonjs2_mini_css_extract_plugin_amd_mini_css_extract_plugin_default()).loader,
        options: {
          publicPath: '../'
        }
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              'postcss-preset-env',
              'cssnano'
            ]
          }
        }
      }
    ];
  }

  /**
   * Mini CSS extract plugin configuration.
   * 
   * @returns {[MiniCssExtractPlugin]}
   */
  _getMiniCssExtractPluginConfig() {
    return [
      new (external_root_mini_css_extract_plugin_commonjs_mini_css_extract_plugin_commonjs2_mini_css_extract_plugin_amd_mini_css_extract_plugin_default())({
        filename: 'static/styles-[contenthash].css',
      })
    ];
  }

  /**
   * Copy plugin configuration.
   * 
   * @returns {[CopyPlugin]}
   */
  _getCopyPluginConfig() {
    return [
      new (external_root_copy_webpack_plugin_commonjs_copy_webpack_plugin_commonjs2_copy_webpack_plugin_amd_copy_webpack_plugin_default())({
        patterns: [
          {
            from: 'assets/**/*',
            globOptions: {
              dot: true,
              ignore: ['**/.gitkeep', '**/.gitignore']
            },
            noErrorOnMissing: true,
            info: {
              minimized: true
            },
          },
          ...this.config.additionalFilesToCopy
        ]
      })
    ];
  }

  /**
   * BSI CX Webpack plugin.
   * 
   * @returns {[BsiCxWebpackPlugin]}
   */
  _getBsiCxWebpackPluginConfig() {
    return [
      new BsiCxWebpackPlugin()
    ];
  }

  /**
   * Webpack ZIP plugin configuration.
   * 
   * @returns {[ZipPlugin|BsiCxWebpackZipHashPlugin]}
   */
  _getZipPluginConfig() {
    let plugins = [
      new (external_root_zip_webpack_plugin_commonjs_zip_webpack_plugin_commonjs2_zip_webpack_plugin_amd_zip_webpack_plugin_default())({
        filename: getZipArchiveName(this.config.name, this.config.version),
        exclude: [/\.map$/]
      })
    ];

    if (this.config.sourceMapEnabled) {
      plugins.push(
        new (external_root_zip_webpack_plugin_commonjs_zip_webpack_plugin_commonjs2_zip_webpack_plugin_amd_zip_webpack_plugin_default())({
          filename: getZipArchiveName(this.config.name, this.config.version, 'dev'),
        })
      );
    }

    plugins.push(
      new BsiCxWebpackZipHashPlugin(this.config.name, this.config.version, this.config.hashZipFiles)
    );

    return plugins;
  }

  /**
   * The dev tool configuration.
   * 
   * @returns {string|boolean}
   */
  _getDevToolConfig() {
    return this.config.sourceMapEnabled ? 'source-map' : false;
  }

  /**
   * Development server configuration.
   * 
   * @returns {{}}
   */
  _getDevServerConfig() {
    let outputPath = this._getOutputPath();
    let contentBase = outputPath === this._getDefaultOutputPath() ? external_root_path_commonjs_path_commonjs2_path_amd_path_default().resolve(outputPath, '..') : process.cwd();
    let zipRegEx = /\.zip$/i;

    return {
      port: this.config.devServerPort,
      contentBase: contentBase,
      publicPath: '/',
      compress: true,
      writeToDisk: filePath => zipRegEx.test(filePath),
      inline: false
    };
  }

  /**
   * The stats configuration.
   * 
   * @returns {{}}
   */
  _getStatsConfig() {
    return {
      children: false,
      errorDetails: true,
    };
  }

  /**
   * The performance configuration.
   * 
   * @returns {{}}
   */
  _getPerformanceConfig() {
    let excludedAssets = [
      'design.json',
    ];
    let excludedExtensions = /\.(map|zip|html|hbs)$/;

    return {
      assetFilter: (assetFilename) => !excludedAssets.includes(assetFilename) && !excludedExtensions.test(assetFilename),
      hints: 'warning'
    };
  }

  /**
   * The minimizer configuration.
   * 
   * @returns {[TerserPlugin]}
   */
  _getOptimizationMinimizerConfig() {
    return [
      new (external_root_terser_webpack_plugin_commonjs_terser_webpack_plugin_commonjs2_terser_webpack_plugin_amd_terser_webpack_plugin_default())({
        extractComments: false
      })
    ];
  }

  /**
   * The split chunks name configuration.
   * 
   * @returns {function}
   */
  _getOptimizationSplitChunksNameConfig() {
    return (module, _, cacheGroupKey) => {
      return cacheGroupKey !== 'vendors' ? false : (module.rawRequest || false);
    };
  }

  /**
   * The chache groups configuration.
   * 
   * @returns {{}}
   */
  _getOptimizationCacheGroupsConfig() {
    return {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: 10,
        reuseExistingChunk: true,
        filename: 'vendors/[name]-[chunkhash].js'
      },
      styles: {
        name: 'styles',
        type: 'css/mini-extract',
        chunks: 'all',
        priority: 20,
        enforce: true,
      }
    };
  }

  /**
   * The output configuration.
   * 
   * @returns {{}}
   */
  _getOutputConfig() {
    return {
      path: this._getOutputPath(),
      publicPath: `${constant/* default.BSI_CX_DESIGN_BASE_URL */.Z.BSI_CX_DESIGN_BASE_URL}/`,
      clean: true,
      library: {
        type: 'var',
        name: '[name]'
      }
    };
  }

  /**
   * Build the configuration for webpack from {@link BuildConfig} objects.
   * 
   * @param  {...BuildConfig} configs 
   */
  static fromConfigs(...configs) {
    let devServerPort = undefined;

    return configs
      .map(config => config.validate())
      .map(config => new WebpackConfigBuilder(config))
      .map(config => config.build())
      .map((config, index) => {
        if (index === 0) {
          devServerPort = config.devServer.port;
        } else if (config.devServer.port === devServerPort) {
          delete config.devServer;
        }
        return config;
      });
  }
}

;// CONCATENATED MODULE: ./index.js







})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map