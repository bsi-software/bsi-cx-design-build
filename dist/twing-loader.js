/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	const __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/set anonymous default export name */
/******/ 	(() => {
/******/ 		// set .name for anonymous default exports per ES spec
/******/ 		__webpack_require__.dn = (x) => {
/******/ 			(Object.getOwnPropertyDescriptor(x, "name") || {}).writable || Object.defineProperty(x, "name", { value: "default", configurable: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ twing_loader)
});

;// external "source-map-support/register"
const register_namespaceObject = require("source-map-support/register");
;// external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// external "twing"
const external_twing_namespaceObject = require("twing");
;// ./src/constant.js
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
  /**
   * @type {string}
   */
  static BSI_CX_JS_PROPERTY_PLUGIN = '###BSI_CX_JS_PROPERTY_PLUGIN###';
  /**
   * @type {string}
   */
  static BSI_CX_TARGET_VERSION = '###BSI_CX_TARGET_VERSION###';
  /**
   * @type {string}
   */
  static BSI_CX_TARGET_TYPE = '###BSI_CX_TARGET_TYPE###';
  /**
   * @type {string}
   */
  static BSI_CX_DEFAULT_LOCALE = '###BSI_CX_DEFAULT_LOCALE###';
};

;// ./src/context-scope.js
/**
 * The context scope is the first path segment of every template part variable in a rendered template
 * (.hbs) and the top level property of the context file (.json):
 *
 * <pre>
 * {{ dzl_0.link-1wfD2H.url }}   ->   {"dzl_0": {"link-1wfD2H": {"url": "..."}}}
 * </pre>
 *
 * A template never names a scope. The Twig functions emit the placeholders of this class and
 * {@link TemplateElement#render} replaces them with the scope computed from the element hierarchy.
 * The rendered template and the context file are two halves of one contract - both are built from
 * the methods below, change them together or BSI CX resolves nothing at runtime.
 */
class ContextScope {
  /**
   * Artificial scope of a root element which has own template parts *and* nested content elements:
   * its own parts need a scope of their own to stay separable from the nested ones.
   */
  static ROOT = 'root';
  /**
   * Stands for '[scope].' in a template part variable, and for nothing at all if the element has no
   * context scope.
   */
  static VARIABLE_PREFIX = '@@bsi-context-scope@@';
  /**
   * Stands for the data-bsi-context-scope attribute, and for nothing at all if the element has no
   * context scope.
   */
  static ATTRIBUTE = '@@bsi-context-scope-attribute@@';
  /**
   * Marks the position of the statically nested content elements of a dropzone.
   */
  static DROPZONE = /@@bsi-dropzone:(.*?)@@/g;

  /**
   * @param {string} dropzoneId
   * @returns {string}
   */
  static dropzone(dropzoneId) {
    return `@@bsi-dropzone:${dropzoneId}@@`;
  }

  /**
   * The scope segment of one nested content element: the name of the dropzone it sits in plus its
   * position within that dropzone.
   *
   * @param {string} dropzoneName
   * @param {number} index
   * @returns {string}
   */
  static segment(dropzoneName, index) {
    return `${ContextScope.sanitize(dropzoneName)}_${index}`;
  }

  /**
   * A scope is a path segment of a Handlebars expression, a dropzone ID is usually a UUID. Hyphens
   * and leading digits would break the expression, so they are replaced.
   *
   * @param {string} name
   * @returns {string}
   */
  static sanitize(name) {
    let sanitized = String(name).replace(/[^A-Za-z0-9_$]+/g, '_');
    return /^[0-9]/.test(sanitized) ? `dz_${sanitized}` : sanitized;
  }

  /**
   * Replaces the placeholders of a rendered template with the context scope of its content element.
   *
   * @param {string} content - rendered template of one content element
   * @param {string|undefined} scope - the absolute context scope, undefined if the element has none
   * @returns {string}
   */
  static apply(content, scope) {
    let variablePrefix = scope ? `${scope}.` : '';
    let attribute = scope ? ` data-bsi-context-scope="${scope}"` : '';

    return content
      .split(ContextScope.VARIABLE_PREFIX).join(variablePrefix)
      .split(ContextScope.ATTRIBUTE).join(attribute);
  }
}

;// ./src/query-constant.js
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

;// ./src/abstract-constant.js
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

  /**
   * @return {string}
   */
  toString() {
    return this.value;
  }
}

;// ./src/design-type.js



class DesignType extends AbstractConstant {
  valueOf() {
    return this.value;
  }
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
const WEBSITE = new DesignType('website');

/**
 * @type {DesignType[]}
 */
const LEGACY_TYPES = (/* unused pure expression or super */ null && ([
  LANDINGPAGE,
  EMAIL
]));

/**
 * @type {DesignType[]}
 */
const ALL_TYPES = (/* unused pure expression or super */ null && ([
  LANDINGPAGE,
  EMAIL,
  WEBSITE
]));

/**
 * @type {DesignType}
 */
const TARGET = __webpack_require__.g[Constant.BSI_CX_TARGET_TYPE];

;// ./src/utility.js
/* unused harmony import specifier */ var path;
/* unused harmony import specifier */ var utility_Constant;
/* unused harmony import specifier */ var utility_LANDINGPAGE;
/* unused harmony import specifier */ var utility_EMAIL;
/* unused harmony import specifier */ var utility_WEBSITE;





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

  if (config.designType === utility_LANDINGPAGE || config.designType === utility_EMAIL || (config.targetVersion.legacyFormat && config.designType !== utility_WEBSITE)) {
    return '.' + pathSuffix;
  } else {
    return utility_Constant.BSI_CX_DESIGN_BASE_URL + pathSuffix;
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
 * @returns {string}
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
 * @param {string[]} arr1
 * @param {string[]} arr2
 * @returns {string[]}
 */
function findArraySimilarities(arr1, arr2) {
  let length = Math.min(arr1.length, arr2.length);
  let similarPart = [];

  for (let index = 0; index < length; index++) {
    let itemToCheck = arr1[index];
    if (itemToCheck === arr2[index]) {
      similarPart.push(itemToCheck);
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

/**
 * @param {string} startFolder
 * @returns {string}
 */
function findNodeModulesFolder(startFolder) {
  let nodeModulesFolder = external_path_default().join(startFolder, 'node_modules');

  if (external_fs_default().existsSync(nodeModulesFolder)) {
    return nodeModulesFolder;
  }

  let parentFolder = external_path_default().dirname(startFolder);

  if (startFolder === parentFolder) {
    throw new Error('node_modules folder not found');
  }

  return findNodeModulesFolder(parentFolder);
}

;// ./src/twig-functions.js









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
const bsiCxAsset = (0,external_twing_namespaceObject.createFunction)('bsi_cx_asset', (executionContext, assetPath, inline) => {
  let templatePath = executionContext.template.source.name;
  let templateDirPath = external_path_default().dirname(templatePath);
  let absoluteAssetPath = toPosixPath(external_path_default().resolve(templateDirPath, assetPath));
  let assetQuery = !!inline ? QueryConstant.INLINE : '';
  let assetRequest = `${absoluteAssetPath}?${assetQuery}`.replace(/\?$/g, '');
  return strToPromise(`@ref(${assetRequest})`);
}, [{ name: 'assetPath' }, { name: 'inline', defaultValue: false }]);

/**
 * Get URL to the CSS asset.
 */
const bsiCxCssHref = (0,external_twing_namespaceObject.createFunction)('bsi_cx_css_href', () => {
  return strToPromise(Constant.BSI_CX_CSS_HREF);
}, []);

/**
 * Get the contents of the CSS asset.
 */
const bsiCxCssInline = (0,external_twing_namespaceObject.createFunction)('bsi_cx_css_inline', () => {
  return strToPromise(Constant.BSI_CX_CSS_INLINE);
}, []);

/**
 * Get URL to the requested JS module.
 */
const bsiCxJsModuleHref = (0,external_twing_namespaceObject.createFunction)('bsi_cx_js_module_href', async (executionContext, module) => {
  let config = {
    module: module
  };
  return (0,external_twing_namespaceObject.createMarkup)(await bsiCxJsModuleImport(executionContext, config, false));
}, [{ name: 'module' }]);

/**
 * Get the content of the requested JS module.
 */
const bsiCxJsModuleInline = (0,external_twing_namespaceObject.createFunction)('bsi_cx_js_module_inline', async (executionContext, module) => {
  let config = {
    module: module
  };
  return (0,external_twing_namespaceObject.createMarkup)(await bsiCxJsModuleImport(executionContext, config, true));
}, [{ name: 'module' }]);

/**
 * Import all missing JS module chunks.
 */
const bsiCxJsModuleMissingChunksImport = (0,external_twing_namespaceObject.createFunction)('bsi_cx_js_module_missing_chunks_import', async (executionContext, attributes) => {
  let config = {
    chunks: true,
    attributes: attributes || {}
  };
  return (0,external_twing_namespaceObject.createMarkup)(await bsiCxJsModuleImport(executionContext, config, false));
}, [{ name: 'attributes', defaultValue: {} }]);

/**
 * Inline all missing JS module chunks.
 */
const bsiCxJsModuleMissingChunksInline = (0,external_twing_namespaceObject.createFunction)('bsi_cx_js_module_missing_chunks_inline', async (executionContext, attributes) => {
  let config = {
    chunks: true,
    attributes: attributes || {}
  };
  return (0,external_twing_namespaceObject.createMarkup)(await bsiCxJsModuleImport(executionContext, config, true));
}, [{ name: 'attributes', defaultValue: {} }]);

/**
 * Get URL to the JS runtime module.
 */
const bsiCxJsModuleRuntimeHref = (0,external_twing_namespaceObject.createFunction)('bsi_cx_js_module_runtime_href', () => {
  return strToPromise(Constant.BSI_CX_MODULE_RUNTIME_HREF);
}, []);

/**
 * Get the contents of the JS runtime module.
 */
const bsiCxJsModuleRuntimeInline = (0,external_twing_namespaceObject.createFunction)('bsi_cx_js_module_runtime_inline', () => {
  return strToPromise(Constant.BSI_CX_MODULE_RUNTIME_INLINE);
}, []);

/**
 * Lorem ipsum generator.
 */
const bsiCxLorem = (0,external_twing_namespaceObject.createFunction)('bsi_cx_lorem', (words) => {
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
const bsiTemplatePart = (0,external_twing_namespaceObject.createFunction)(
  "templateElement",
  (e, elementId) => strToPromise(` data-bsi-element="${elementId}"` + ContextScope.ATTRIBUTE),
  [{ name: 'elementId' }],
  { is_safe: ["html"] },
);

/**
 * Marks the position of the content elements which are placed into the given dropzone
 * (Dropzone#withContentElements). They are rendered into this template by the design build.
 */
const bsiDropzone = (0,external_twing_namespaceObject.createFunction)(
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


const templatePartHelper = [
  (0,external_twing_namespaceObject.createFunction)(
    "textValue",
    (e, partId) => scopeVariable(partId, "value"),
    [{ name: 'partId' }],
    {},
  ),
  (0,external_twing_namespaceObject.createFunction)(
    "formattedHtml",
    (e, partId) => scopeVariable(partId, "html"),
    [{ name: 'partId' }],
    {},
  ),
  (0,external_twing_namespaceObject.createFunction)(
    "formattedLanguage",
    (e, partId) => scopeVariable(partId, "languageTag"),
    [{ name: 'partId' }],
    {},
  ),
  (0,external_twing_namespaceObject.createFunction)(
    "linkUrl",
    (e, partId) => scopeVariable(partId, "url"),
    [{ name: 'partId' }],
    {},
  ),
  (0,external_twing_namespaceObject.createFunction)(
    "linkText",
    (e, partId) => scopeVariable(partId, "text"),
    [{ name: 'partId' }],
    {},
  ),
  (0,external_twing_namespaceObject.createFunction)(
    "linkDescription",
    (e, partId) => scopeVariable(partId, "description"),
    [{ name: 'partId' }],
    {},
  ),
  (0,external_twing_namespaceObject.createFunction)(
    "ifLinkTarget",
    (e, partId, ifBlock, elseBlock) =>
      ifScopeVariable(partId, "openInNewWindow", ifBlock, elseBlock),
    [{ name: 'partId' }, { name: 'ifBlock' }, { name: 'elseBlock', defaultValue: null }],
    {},
  ),
  (0,external_twing_namespaceObject.createFunction)(
    "imageAlt",
    (e, partId) => scopeVariable(partId, "altText"),
    [{ name: 'partId' }],
    {},
  ),
  (0,external_twing_namespaceObject.createFunction)(
    "imageSrc",
    (e, partId) => scopeVariable(partId, "srcUrl"),
    [{ name: 'partId' }],
    {},
  ),
  (0,external_twing_namespaceObject.createFunction)(
    "imagePlaceholderSrc",
    (e, partId) => scopeVariable(partId, "placeholderSrcUrl"),
    [{ name: 'partId' }],
    {},
  ),
  (0,external_twing_namespaceObject.createFunction)(
    "imageSrcset",
    (e, partId) => scopeVariable(partId, "srcset"),
    [{ name: 'partId' }],
    {},
  ),
  (0,external_twing_namespaceObject.createFunction)(
    "imageDecorative",
    (e, partId) => scopeVariable(partId, "decorative"),
    [{ name: 'partId' }],
    {},
  ),
  (0,external_twing_namespaceObject.createFunction)(
    "ifCheckboxValue",
    (e, partId, ifBlock, elseBlock) =>
      ifScopeVariable(partId, "value", ifBlock, elseBlock),
    [{ name: 'partId' }, { name: 'ifBlock' }, { name: 'elseBlock', defaultValue: null }],
    {},
  ),
  (0,external_twing_namespaceObject.createFunction)(
    "optionValue",
    (e, partId) => scopeVariable(partId, "value"),
    [{ name: 'partId' }],
    {},
  ),
  // TODO: dynamic-value-list
];

;// ./src/twing-environment.js
__webpack_require__.dn(twing_environment);







/**
 * @param {string} templateRoot
 * @param {{}} [globals]
 * @returns {TwingEnvironment}
 */
/* harmony default export */ function twing_environment(templateRoot, globals) {
  let relativeFilesystemLoader = (0,external_twing_namespaceObject.createFilesystemLoader)((external_fs_default()));
  let filesystemLoader = (0,external_twing_namespaceObject.createFilesystemLoader)((external_fs_default()));
  let nodeModulesLoader = (0,external_twing_namespaceObject.createFilesystemLoader)((external_fs_default()));
  let nodeModulesPath = findNodeModulesFolder(__dirname);

  relativeFilesystemLoader.addPath('.');
  filesystemLoader.addPath(templateRoot);
  nodeModulesLoader.addPath(nodeModulesPath);

  let twing = (0,external_twing_namespaceObject.createEnvironment)(
    (0,external_twing_namespaceObject.createChainLoader)([relativeFilesystemLoader, filesystemLoader, nodeModulesLoader]),
    {globals: globals ?? {}}
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

  twing.addFunction(bsiTemplatePart);
  twing.addFunction(bsiDropzone);
  templatePartHelper.forEach(helper => twing.addFunction(helper));

  return twing;
}

;// ./src/twing-loader.js
__webpack_require__.dn(twing_loader);





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
  let templateRoot = slash(options.templateRoot);
  let renderContext = options.renderContext;
  let currentEnvironment = twing_environment(templateRoot, renderContext);
  let resourcePath = slash(this.resourcePath);

  this.cacheable(false);
  this.addDependency(external_path_default().resolve(resourcePath));

  if (currentEnvironment.loader?.resolve) {
    const originalResolve = currentEnvironment.loader.resolve.bind(currentEnvironment.loader);

    currentEnvironment.loader.resolve = async (name, from) => {
      let resolved = await originalResolve(name, from);

      if (resolved) {
        this.addDependency(external_path_default().resolve(resolved));
      }

      return resolved;
    };
  }

  currentEnvironment.render(resourcePath, renderContext).then((result) => {
    callback(null, `module.exports = ${JSON.stringify(result)};`);
  }).catch((error) => {
    callback(error);
  });
};

const __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=twing-loader.js.map