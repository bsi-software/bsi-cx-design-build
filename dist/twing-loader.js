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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ twing_loader)
});

;// CONCATENATED MODULE: external "source-map-support/register"
const register_namespaceObject = require("source-map-support/register");
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "twing"
const external_twing_namespaceObject = require("twing");
;// CONCATENATED MODULE: ./src/constant.js
class constant_Constant {
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
  static BSI_CX_MODULE_RUNTIME_PATH = 'shared/runtime';
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

;// CONCATENATED MODULE: ./src/query-constant.js
class QueryConstant {
  /**
   * @type {string}
   */
  static INLINE = 'inline';
  /**
   * @type {string}
   */
  static ASSET = 'asset';
}

;// CONCATENATED MODULE: ./src/abstract-constant.js
/**
 * @abstract
 */
class AbstractConstant {
  /**
   * @type {string}
   * @private
   */
  _value = undefined;

  /**
   * @param {string} value
   */
  constructor(value) {
    /**
     * @type {string}
     * @private
     */
    this._value = value;
  }

  /**
   * @returns {string}
   */
  get value() {
    return this._value;
  }

  /**
   * @returns {string}
   */
  getValue() {
    return this.value;
  }
}

;// CONCATENATED MODULE: ./src/design-type.js


class DesignType extends AbstractConstant {
}

/**
 * @type {DesignType}
 * @since Studio 1.0
 */
const LANDINGPAGE = new DesignType('landingpage');

/**
 * @type {DesignType}
 * @since Studio 1.0
 */
const EMAIL = new DesignType('email');

/**
 * @type {DesignType}
 * @since BSI CX 1.3
 */
const design_type_WEBSITE = new DesignType('website');

;// CONCATENATED MODULE: ./src/utility.js




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

/**
 * @param {ValidatedBuildConfig} config
 * @param {string|undefined} [suffix=undefined]
 */
function buildPublicPath(config, suffix) {
  let path = '/';

  if (suffix) {
    path += suffix
      .trim()
      .replace(/^\//, '');
  }

  let pathSuffix = suffix ? path : '';

  if (config.targetVersion.legacyFormat && config.designType !== WEBSITE) {
    return '.' + pathSuffix;
  } else {
    return Constant.BSI_CX_DESIGN_BASE_URL + pathSuffix;
  }
}

/**
 * @param {*} obj
 * @returns {string}
 */
function utility_toString(obj) {
  return typeof obj === 'string' || obj instanceof String ? obj : obj.toString();
}

/**
 * @see {@link https://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript#answer-3561711}
 * @param {string} input
 * @returns {string}
 */
function escapeRegex(input) {
  let pattern = /[-\/\\^$*+?.()|[\]{}]/g
  return input.replace(pattern, '\\$&');
}

/**
 * @param {string} str
 * @returns {string}
 */
function ucfirst(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

/**
 * @param {string} mayRelativePath
 * @param {string|undefined} [basePathWhenRelative=undefined]
 * @returns {string}
 */
function getAbsolutePath(mayRelativePath, basePathWhenRelative) {
  let absolutePath = mayRelativePath;

  if (!path.isAbsolute(absolutePath)) {
    let basePath = basePathWhenRelative || process.cwd();
    absolutePath = path.resolve(basePath, mayRelativePath);
  }

  return absolutePath;
}

/**
 * @param {string} str1
 * @param {string} str2
 */
function findStringSimilarities(str1, str2) {
  let length = Math.min(str1.length, str2.length);
  let similarPart = '';

  for (let index = 0; index < length; index++) {
    let charToCheck = str1.charAt(index);
    if (charToCheck === str2.charAt(index)) {
      similarPart += charToCheck;
    }
  }

  return similarPart;
}

/**
 * @param {string} possibleWin32Path
 * @returns {string}
 */
function toPosixPath(possibleWin32Path) {
  return possibleWin32Path.replace(/\\/g, (external_path_default()).posix.sep);
}

;// CONCATENATED MODULE: ./src/twig-functions.js








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
  let placeholder = constant_Constant.BSI_CX_JS_MODULE_START + JSON.stringify(metaInfo) + constant_Constant.BSI_CX_JS_MODULE_END;
  return strToPromise(placeholder);
}

/**
 * Resolve static assets.
 */
const bsiCxAsset = new external_twing_namespaceObject.TwingFunction('bsi_cx_asset', (template, assetPath, inline) => {
  let templatePath = template.source.getResolvedName();
  let templateDirPath = external_path_default().dirname(templatePath);
  let absoluteAssetPath = toPosixPath(external_path_default().resolve(templateDirPath, assetPath));
  let assetQuery = !!inline ? QueryConstant.INLINE : '';
  let assetRequest = `${absoluteAssetPath}?${assetQuery}`.replace(/\?$/g, '');
  return strToPromise(`@ref(${assetRequest})`);
}, [], {needs_template: true});

/**
 * Get URL to the CSS asset.
 */
const bsiCxCssHref = new external_twing_namespaceObject.TwingFunction('bsi_cx_css_href', () => {
  return strToPromise(constant_Constant.BSI_CX_CSS_HREF);
}, [], {});

/**
 * Get the contents of the CSS asset.
 */
const bsiCxCssInline = new external_twing_namespaceObject.TwingFunction('bsi_cx_css_inline', () => {
  return strToPromise(constant_Constant.BSI_CX_CSS_INLINE);
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
  return strToPromise(constant_Constant.BSI_CX_MODULE_RUNTIME_HREF);
}, [], {});

/**
 * Get the contents of the JS runtime module.
 */
const bsiCxJsModuleRuntimeInline = new external_twing_namespaceObject.TwingFunction('bsi_cx_js_module_runtime_inline', () => {
  return strToPromise(constant_Constant.BSI_CX_MODULE_RUNTIME_INLINE);
}, [], {});

/**
 * Lorem ipsum generator.
 */
const bsiCxLorem = new external_twing_namespaceObject.TwingFunction('bsi_cx_lorem', (words) => {
  let numOfWords = parseInt(words, 10);
  let end = isNaN(numOfWords) ? LOREM_IPSUM.length : numOfWords;
  let phrase = LOREM_IPSUM.slice(0, end).join(' ');

  return strToPromise(phrase);
}, [], {})

;// CONCATENATED MODULE: ./src/twing-environment.js




/* harmony default export */ function twing_environment() {
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
  twing.addFunction(bsiCxLorem);

  return twing;
}

;// CONCATENATED MODULE: ./src/twing-loader.js





/**
 * Quick and dirty workaround to use slash.
 *
 * @see {@link https://www.npmjs.com/package/slash}
 * @param {string} pathToConvert
 * @returns {string}
 */
function slash(pathToConvert) {
  const isExtendedLengthPath = /^\\\\\?\\/.test(pathToConvert);
  const hasNonAscii = /[^\u0000-\u0080]+/.test(pathToConvert); // eslint-disable-line no-control-regex

  if (isExtendedLengthPath || hasNonAscii) {
    return pathToConvert;
  }

  return pathToConvert.replace(/\\/g, '/');
}

/**
 * Since the original twing-loader does not support Webpack 5 (not working property, memory leaks, ...).
 *
 * @param {string} source
 */
/* harmony default export */ function twing_loader(source) {
  let callback = this.async();
  let options = this.getOptions();
  let currentEnvironment = twing_environment();
  let renderContext = options.renderContext;
  let resourcePath = slash(this.resourcePath);

  this.cacheable(false);

  currentEnvironment.on('template', async (name, from) => {
    try {
      let sourceContext = await currentEnvironment.getLoader().getSourceContext(name, from);
      let resolvedPath = external_path_default().resolve(sourceContext.getResolvedName());
      this.addDependency(resolvedPath);
    } catch (error) {
      // NOP
    }
  });

  currentEnvironment.render(resourcePath, renderContext).then((result) => {
    callback(null, `module.exports = ${JSON.stringify(result)};`);
  }).catch((error) => {
    callback(error);
  });
};

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=twing-loader.js.map