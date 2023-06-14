/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 808:
/***/ ((module) => {

module.exports = require("net");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
  BuildConfig: () => (/* reexport */ BuildConfig),
  DefaultBuildConfig: () => (/* reexport */ DefaultBuildConfig),
  DesignType: () => (/* reexport */ design_type_namespaceObject),
  ModuleConfig: () => (/* reexport */ ModuleConfig),
  Version: () => (/* reexport */ version_namespaceObject),
  WebpackConfigBuilder: () => (/* reexport */ WebpackConfigBuilder),
  css: () => (/* reexport */ helper_namespaceObject)
});

// NAMESPACE OBJECT: ./src/design-type.js
var design_type_namespaceObject = {};
__webpack_require__.r(design_type_namespaceObject);
__webpack_require__.d(design_type_namespaceObject, {
  ALL_TYPES: () => (ALL_TYPES),
  DesignType: () => (DesignType),
  EMAIL: () => (EMAIL),
  LANDINGPAGE: () => (LANDINGPAGE),
  LEGACY_TYPES: () => (LEGACY_TYPES),
  TARGET: () => (TARGET),
  WEBSITE: () => (WEBSITE)
});

// NAMESPACE OBJECT: ./src/version.js
var version_namespaceObject = {};
__webpack_require__.r(version_namespaceObject);
__webpack_require__.d(version_namespaceObject, {
  CX_1_3: () => (CX_1_3),
  CX_22_0: () => (CX_22_0),
  STUDIO_1_0: () => (STUDIO_1_0),
  STUDIO_1_1: () => (STUDIO_1_1),
  STUDIO_1_2: () => (STUDIO_1_2),
  TARGET: () => (version_TARGET),
  Version: () => (Version)
});

// NAMESPACE OBJECT: ./src/css/helper.js
var helper_namespaceObject = {};
__webpack_require__.r(helper_namespaceObject);
__webpack_require__.d(helper_namespaceObject, {
  color: () => (color),
  dataUri: () => (dataUri),
  number: () => (number),
  url: () => (url)
});

;// CONCATENATED MODULE: external "source-map-support/register"
const register_namespaceObject = require("source-map-support/register");
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

  /**
   * @return {string}
   */
  toString() {
    return this.value;
  }
}

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
};

;// CONCATENATED MODULE: ./src/design-type.js



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
const LEGACY_TYPES = [
  LANDINGPAGE,
  EMAIL
];

/**
 * @type {DesignType[]}
 */
const ALL_TYPES = [
  LANDINGPAGE,
  EMAIL,
  WEBSITE
];

/**
 * @type {DesignType}
 */
const TARGET = __webpack_require__.g[Constant.BSI_CX_TARGET_TYPE];

;// CONCATENATED MODULE: ./src/version.js




/** @typedef {import('./design-type').DesignType} DesignType */

class Version extends AbstractConstant {
  /**
   *
   * @param {[major:number,minor:number,patch:number]} version
   * @param {DesignType[]} allowedTypes
   * @param {boolean} legacyFormat
   * @param {string|undefined} [schemaVersion]
   */
  constructor(version, allowedTypes, legacyFormat, schemaVersion) {
    super(version.join('.'));

    this._version = version;
    this._allowedTypes = allowedTypes;
    this._legacyFormat = legacyFormat;
    this._schemaVersion = schemaVersion;
  }

  /**
   * @return {[major:number,minor:number,patch:number]}
   */
  get version() {
    return [...this._version];
  }

  /**
   * @returns {DesignType[]}
   */
  get allowedTypes() {
    return this._allowedTypes;
  }

  /**
   * @returns {boolean}
   */
  get legacyFormat() {
    return this._legacyFormat;
  }

  /**
   * @returns {string|undefined}
   */
  get schemaVersion() {
    return this._schemaVersion;
  }

  /**
   * @param {Version} version
   * @returns {number}
   */
  compareTo(version) {
    for (let i = 0; i < this._version.length; i++) {
      const left = this._version[i];
      const right = version.version?.[i] ?? 0;
      const diff = left - right;
      if (diff !== 0) {
        return diff;
      }
    }

    return 0;
  }

  /**
   * Make versions comparable by calculating an integer value.
   * @return {number}
   */
  valueOf() {
    return this._version.reduce((p, v, i, a) => p + v * Math.pow(10000, a.length - i), 0);
  }
}

/**
 * @type {Version}
 */
const STUDIO_1_0 = new Version([1, 0, 0], LEGACY_TYPES, true);

/**
 * @type {Version}
 */
const STUDIO_1_1 = new Version([1, 1, 0], LEGACY_TYPES, true);

/**
 * @type {Version}
 */
const STUDIO_1_2 = new Version([1, 2, 0], LEGACY_TYPES, true);

/**
 * @type {Version}
 */
const CX_1_3 = new Version([1, 3, 0], ALL_TYPES, true, '1.0');

/**
 * @type {Version}
 */
const CX_22_0 = new Version([22, 0, 0], ALL_TYPES, false, '22.0');

/**
 * @type {Version}
 */
const version_TARGET = __webpack_require__.g[Constant.BSI_CX_TARGET_VERSION];

;// CONCATENATED MODULE: ./src/raw-value.js
class RawValue {
  /**
   * @param {*} value
   */
  constructor(value) {
    /**
     * @type {*}
     * @private
     */
    this._value = value;
  }

  /**
   * @returns {*}
   */
  get value() {
    return this._value;
  }
}

;// CONCATENATED MODULE: ./src/abstract-builder.js





/** @typedef {import('./version').Version} Version */
/** @typedef {import('./design-type').DesignType} DesignType */

/**
 * @abstract
 */
class AbstractBuilder {
  /**
   * @type {Version|undefined}
   * @private
   */
  _minVersion = STUDIO_1_0;
  /**
   * @type {Version|undefined}
   * @private
   */
  _maxVersion = undefined;
  /**
   * @type {DesignType[]}
   * @private
   */
  _allowedTypes = ALL_TYPES;

  /**
   * @return {Version}
   */
  get minVersion() {
    return this._minVersion;
  }

  /**
   * @return {Version|undefined}
   */
  get maxVersion() {
    return this._maxVersion;
  }

  /**
   * @returns {DesignType[]}
   */
  get allowedTypes() {
    return [...this._allowedTypes];
  }

  /**
   * Define a minimum CX version. Will be excluded from builds targeting a lower version.
   *
   * @example
   * .withMinVersion(Version.CX_22_0)
   * @see {@link withMaxVersion}
   * @param {Version} minVersion
   * @returns {this}
   */
  withMinVersion(minVersion) {
    this._minVersion = minVersion;
    return this;
  }

  /**
   * Define a maximum CX version. Will be excluded from builds targeting a higher version.
   *
   * @example
   * .withMaxVersion(Version.CX_22_0)
   * @see {@link withMinVersion}
   * @param {Version} maxVersion
   * @returns {this}
   */
  withMaxVersion(maxVersion) {
    this._maxVersion = maxVersion;
    return this;
  }

  /**
   * Define allowed template types. Will be excluded from builds targeting other types.
   *
   * @example
   * .withAllowedTypes(DesignType.EMAIL,DesignType.LANDINGPAGE)
   * @param {...DesignType} types
   * @returns {this}
   */
  withAllowedTypes(...types) {
    this._allowedTypes = types;
    return this;
  }

  /**
   * Build the configuration. Normally, there is no need to invoke this method manually.
   *
   * @returns {{}|undefined}
   */
  build() {
    if (!this.isCompatible()) {
      return undefined;
    }

    return this._buildInternal();
  }

  /**
   * @abstract
   * @returns {{}}
   * @protected
   */
  _buildInternal() {
    throw new Error('not implemented');
  }

  /**
   * Check if this builder part is compatible with the defined target version.
   *
   * @returns {boolean}
   */
  isCompatible() {
    if (this.minVersion && version_TARGET < this.minVersion) {
      return false;
    }

    if (this.maxVersion && version_TARGET > this.maxVersion) {
      return false;
    }

    return this.allowedTypes !== undefined ? this.allowedTypes.findIndex(type => type.value === TARGET.value) !== -1 : true;
  }

  /**
   * @param {string} property
   * @param {{}} targetObj
   * @param {function} extractFunc
   * @param {boolean} [arrayToObject=false]
   * @param {boolean} [setMetaProperty=false]
   * @protected
   */
  _applyPropertyIfDefined(property, targetObj, extractFunc, arrayToObject, setMetaProperty) {
    if (typeof this[property] === 'undefined') {
      return;
    }

    let value = this[property];
    let computedValue;
    let isRawValue = value instanceof RawValue;

    switch (true) {
      case isRawValue:
        computedValue = value.value;
        break;
      case value instanceof Array:
        computedValue = value
          .filter(item => this._checkCompatibility(item))
          .map(item => extractFunc(item))
          .filter(item => item !== undefined);
        break;
      default:
        computedValue = this._checkCompatibility(value) ? extractFunc(value) : undefined;
        break;
    }

    if (!!arrayToObject && !isRawValue) {
      computedValue = this._applyArrayToObject(computedValue);
    }

    if (!!setMetaProperty && !isRawValue) {
      this._applyMetaPropertyFromValue(property, targetObj, value);
    }

    if (computedValue === undefined) {
      return;
    }

    targetObj[property] = computedValue;
  }

  /**
   * @param {string} property
   * @param {{}} targetObj
   * @param {AbstractBuilder|AbstractBuilder[]} value
   * @private
   */
  _applyMetaPropertyFromValue(property, targetObj, value) {
    let computedValue;
    let metaProperty = `_${property}`;

    if (value instanceof Array) {
      computedValue = value.map(item => item.build()).filter(item => item !== undefined);
    } else {
      computedValue = value.build();
    }

    if (computedValue !== undefined) {
      targetObj[metaProperty] = computedValue;
    }
  }

  /**
   * @param {{}[]} arr
   * @private
   */
  _applyArrayToObject(arr) {
    let obj = {};
    for (let item of arr ?? []) {
      obj = {
        ...obj,
        ...item
      };
    }
    return obj;
  }

  /**
   * @param {*} value
   * @return {boolean}
   * @private
   */
  _checkCompatibility(value) {
    return value instanceof AbstractBuilder ? value.isCompatible() : true;
  }

  /**
   * @template T
   * @param {T} newObj
   * @param {boolean|undefined} [shallow=true]
   * @returns {T}
   * @protected
   */
  _clone(newObj, shallow) {
    return ObjectCloner.clone(this, newObj, shallow);
  }
}

;// CONCATENATED MODULE: ./src/object-cloner.js



class ObjectCloner {
  /**
   * @template T
   * @param {T} source
   * @param {T} target
   * @param {boolean} shallow
   * @returns {T}
   * @private
   */
  _clone(source, target, shallow) {
    for (let [propertyName, valueToClone] of Object.entries(source)) {
      target[propertyName] = shallow ? valueToClone : this._cloneValue(valueToClone);
    }

    return target;
  }

  /**
   * @template T
   * @param {T} value
   * @returns {T}
   * @private
   */
  _cloneValue(value) {
    switch (true) {
      case typeof value === 'undefined':
        return value;
      case typeof value === 'string' || value instanceof String:
        return value;
      case typeof value === 'number' || value instanceof Number:
        return value;
      case typeof value === 'boolean' || value instanceof Boolean:
        return value;
      case typeof value === 'bigint' || value instanceof BigInt:
        return value;
      case value instanceof AbstractBuilder:
        return value.clone();
      case value instanceof AbstractConstant:
        return value;
      case typeof value.clone === 'function':
        return value.clone();
      case value instanceof Array || Array.isArray(value):
        return this._cloneArray(value);
      case value instanceof Object || typeof value === 'object':
        return this._cloneObject(value);
      default:
        throw new Error('unable to clone value');
    }
  }

  /**
   * @param {[]} arr
   * @returns {[]}
   * @private
   */
  _cloneArray(arr) {
    return arr.map(item => this._cloneValue(item));
  }

  /**
   * @param {{}} obj
   * @returns {{}}
   * @private
   */
  _cloneObject(obj) {
    let cloneObj = {};
    for (let [key, value] of Object.entries(obj)) {
      cloneObj[key] = this._cloneValue(value);
    }
    return cloneObj;
  }

  /**
   * @template T
   * @param {T} source
   * @param {T} target
   * @param {boolean|undefined} [shallow=true]
   * @returns {T}
   */
  static clone(source, target, shallow) {
    let shallowOpt = shallow === undefined ? true : !!shallow;
    return new ObjectCloner()._clone(source, target, shallowOpt);
  }

  /**
   * @template T
   * @param {T} value
   * @returns {T}
   */
  static cloneValue(value) {
    return new ObjectCloner()._cloneValue(value);
  }
}

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "slugify"
const external_slugify_namespaceObject = require("slugify");
var external_slugify_default = /*#__PURE__*/__webpack_require__.n(external_slugify_namespaceObject);
;// CONCATENATED MODULE: ./src/build-config/validation-error.js
class ValidationError extends Error {
}

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

  if (config.designType === LANDINGPAGE || config.designType === EMAIL || (config.targetVersion.legacyFormat && config.designType !== WEBSITE)) {
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

  if (!external_path_default().isAbsolute(absolutePath)) {
    let basePath = basePathWhenRelative || process.cwd();
    absolutePath = external_path_default().resolve(basePath, mayRelativePath);
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
  let nodeModulesFolder = path.join(startFolder, 'node_modules');

  if (fs.existsSync(nodeModulesFolder)) {
    return nodeModulesFolder;
  }

  let parentFolder = path.dirname(startFolder);

  if (startFolder === parentFolder) {
    throw new Error('node_modules folder not found');
  }

  return findNodeModulesFolder(parentFolder);
}

;// CONCATENATED MODULE: ./src/build-config/module-config.js


/** @typedef {import('./build-config').default} BuildConfig */

/**
 * This is the builder class for JavaScript module configurations.
 * Pass objects of this class to {@link BuildConfig#withModules}.
 *
 * @example
 * .withModules(
 *   new ModuleConfig()
 *     .withName('main')
 *     .withPath('main.js'),
 *   new ModuleConfig()
 *     .withName('app')
 *     .withPath(path.resolve(__dirname,'lib','app.js')))
 */
class ModuleConfig {
  /**
   * @type {string|undefined}
   * @private
   */
  _name = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _path = undefined;

  /**
   * @param {string|undefined} [name=undefined]
   * @param {string|undefined} [path=undefined]
   */
  constructor(name, path) {
    /**
     * @type {string|undefined}
     * @private
     */
    this._name = name;
    /**
     * @type {string|undefined}
     * @private
     */
    this._path = path;
  }

  /**
   * @returns {string|undefined}
   */
  get name() {
    return this._name;
  }

  /**
   * @returns {string|undefined}
   */
  get path() {
    return this._path;
  }

  /**
   * The name for your JavaScript module. The name specified here must be unique in your build configuration.
   * This means you can't configure two modules with the same name. This will be the name of the resulting entry
   * in the Webpack configuration.
   *
   * @param {string} name - The module name.
   * @returns {ModuleConfig}
   */
  withName(name) {
    this._name = name;
    return this;
  }

  /**
   * Path to the entry module file. The path can either be an absolute one or relative to the path specified with {@link BuildConfig#withRootPath}.
   *
   * @param {string} path - The path to the module.
   * @returns {ModuleConfig}
   */
  withPath(path) {
    this._path = path;
    return this;
  }

  /**
   * @returns {{}}
   */
  build() {
    let config = {};
    config[this.name] = this.path;
    return config;
  }

  /**
   * @param {boolean|undefined} [shallow=true]
   * @returns {ModuleConfig}
   */
  clone(shallow) {
    return ObjectCloner.clone(this, new ModuleConfig(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/build-config/validated-build-config.js
/** @typedef {import('webpack').PathData} PathData */
/** @typedef {import('webpack').AssetInfo} AssetInfo */
/** @typedef {import('../version').Version} Version */
/** @typedef {import('../design-type').DesignType} DesignType */
/** @typedef {import('./module-config').default} ModuleConfig */
/** @typedef {import('./build-config-interface').default} BuildConfigInterface */

/**
 * @implements {BuildConfigInterface}
 */
class ValidatedBuildConfig {
  /**
   * @type {string}
   * @private
   */
  _name = undefined;
  /**
   * @type {string}
   * @private
   */
  _version = undefined;
  /**
   * @type {Version}
   * @private
   */
  _targetVersion = undefined;
  /**
   * @type {DesignType}
   * @private
   */
  _designType = undefined;
  /**
   * @type {string}
   * @private
   */
  _rootPath = undefined;
  /**
   * @type {string}
   * @private
   */
  _outputPath = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _propertiesFilePath = undefined;
  /**
   * @type {number}
   * @private
   */
  _devServerPort = undefined;
  /**
   * @type {boolean}
   * @private
   */
  _hashZipFiles = undefined;
  /**
   * @type {ModuleConfig[]}
   * @private
   */
  _modules = undefined;
  /**
   * @type {string}
   * @private
   */
  _modulesRootPath = undefined;
  /**
   * @type {{}[]}
   * @private
   */
  _additionalFilesToCopy = undefined;
  /**
   * @type {boolean}
   * @private
   */
  _sourceMapEnabled = undefined;
  /**
   * @type {string}
   * @private
   */
  _staticFileFolderPath = undefined;
  /**
   * @type {string}
   * @private
   */
  _copyAssetsFolderPath = undefined;
  /**
   * @type {string | ((pathData: PathData, assetInfo?: AssetInfo) => string)}
   * @private
   */
  _assetResourceRuleFilename = undefined;
  /**
   * @type {string[]}
   * @private
   */
  _additionalStaticAssetFileExtensions = undefined;
  /**
   * @type {Object[]}
   * @private
   */
  _webpackPlugins = undefined;
  /**
   * @type {{}[]}
   * @private
   */
  _webpackRules = undefined;
  /**
   * @type {boolean}
   * @private
   */
  _postcssEnabled = undefined;

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
   * @returns {Version}
   */
  get targetVersion() {
    return this._targetVersion;
  }

  /**
   * @returns {DesignType}
   */
  get designType() {
    return this._designType;
  }

  /**
   * @returns {string}
   */
  get rootPath() {
    return this._rootPath;
  }

  /**
   * @returns {string}
   */
  get outputPath() {
    return this._outputPath;
  }

  /**
   * @returns {string|undefined}
   */
  get propertiesFilePath() {
    return this._propertiesFilePath;
  }

  /**
   * @returns {number|'auto'}
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
   * @returns {ModuleConfig[]}
   */
  get modules() {
    return this._modules;
  }

  /**
   * @returns {string}
   */
  get modulesRootPath() {
    return this._modulesRootPath;
  }

  /**
   * @returns {{}[]}
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
   * @returns {string}
   */
  get staticFileFolderPath() {
    return this._staticFileFolderPath;
  }

  /**
   * @returns {string}
   */
  get copyAssetsFolderPath() {
    return this._copyAssetsFolderPath;
  }

  /**
   * @returns {string | ((pathData: PathData, assetInfo?: AssetInfo) => string)}
   */
  get assetResourceRuleFilename() {
    return this._assetResourceRuleFilename;
  }

  /**
   * @returns {string[]}
   */
  get additionalStaticAssetFileExtensions() {
    return this._additionalStaticAssetFileExtensions;
  }

  /**
   * @returns {Object[]}
   */
  get webpackPlugins() {
    return this._webpackPlugins;
  }

  /**
   * @returns {{}[]}
   */
  get webpackRules() {
    return this._webpackRules;
  }

  /**
   * @returns {boolean}
   */
  get postcssEnabled() {
    return this._postcssEnabled;
  }
}

;// CONCATENATED MODULE: ./src/dist-folder.js
class DistFolder {
  /**
   * @type {string}
   */
  static CONTENT_ELEMENTS = 'content-elements';
  /**
   * @type {string}
   */
  static INCLUDES = 'includes';
  /**
   * @type {string}
   */
  static ASSETS = 'assets';
  /**
   * @type {string}
   */
  static MODULES = 'modules';
  /**
   * @type {string}
   */
  static STATIC = 'static';
  /**
   * @type {string}
   */
  static VENDORS = 'vendors';
  /**
   * @type {string}
   */
  static SHARED = 'shared';
}

;// CONCATENATED MODULE: external "crypto"
const external_crypto_namespaceObject = require("crypto");
;// CONCATENATED MODULE: ./src/hash-utility.js



String.prototype.hashCode = function() {
  let hash = 0,
    i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

/**
 * @param {string} content
 * @returns {string}
 */
function _createContentHash(content) {
  return createHash('sha256')
    .update(content)
    .digest('hex')
    .substr(0, _BsiCxWebpackPlugin.ELEMENT_FILE_HASH_LENGTH);
}

/**
 * @param {string} filePath
 * @returns {number}
 */
function _createPathHash(filePath) {
  let pathHash = filePath;
  if (external_path_default().isAbsolute(filePath)) {
    let test = filePath.split('templates');
    pathHash = external_path_default().relative(test[0] + '\\templates\\', filePath)
  }
  let newHash = pathHash.toString().hashCode();
  if (newHash < 0) {
    newHash *= -1;
  }
  return newHash;
}

// EXTERNAL MODULE: external "net"
var external_net_ = __webpack_require__(808);
;// CONCATENATED MODULE: ./src/build-config/default-build-config.js






/** @typedef {import('./build-config-interface').default} BuildConfigInterface */

/**
 * @implements {BuildConfigInterface}
 */
class DefaultBuildConfig {
  get additionalFilesToCopy() {
    return [];
  }

  get copyAssetsFolderPath() {
    return "assets";
  }

  get assetResourceRuleFilename() {
    return `${DistFolder.STATIC}/[name]-[contenthash][ext]`;
  }

  get additionalStaticAssetFileExtensions() {
    return [];
  }

  get designType() {
    return LANDINGPAGE;
  }

  get devServerPort() {
    // return 'auto';
    let devPort = 9003; 
    //this._assignPort(devPort).then(port => devPort = port);
    //console.log("Default port is: /d", devPort);
    return devPort;
  }

  get hashZipFiles() {
    return true;
  }

  get modules() {
    return [];
  }

  get modulesRootPath() {
    return "modules";
  }

  get name() {
    return undefined;
  }

  get outputPath() {
    return "dist";
  }

  get propertiesFilePath() {
    return undefined;
  }

  get rootPath() {
    return undefined;
  }

  get sourceMapEnabled() {
    return false;
  }

  get staticFileFolderPath() {
    return "static";
  }

  get targetVersion() {
    return CX_22_0;
  }

  get version() {
    return "1.0.0";
  }

  get webpackPlugins() {
    return [];
  }

  get webpackRules() {
    return [];
  }

  get postcssEnabled() {
    return false;
  }

  async isPortReachable(port, {host, timeout = 1000} = {}) {
    if (typeof host !== 'string') {
      throw new TypeError('Specify a `host`');
    }
  
    const promise = new Promise(((resolve, reject) => {
      const socket = new external_net_.Socket();
  
      const onError = () => {
        socket.destroy();
        reject();
      };
  
      socket.setTimeout(timeout);
      socket.once('error', onError);
      socket.once('timeout', onError);
  
      socket.connect(port, host, () => {
        socket.end();
        resolve();
      });
    }));
  
    try {
      await promise;
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @param {number} port - The port to assign
   * @returns {number}
   * @private
   */
  async _assignPort(defaultPort) {
    let maxPort = 9200;
    if (defaultPort > maxPort) {
      return;
    }
    let port = defaultPort;
    const net = __webpack_require__(808);

    let usePort = false;
    
   // while (port < maxPort) {
   //   await(this.isPortReachable(port, { host: "localhost" }))
   //   .then((isUsable) => {if (isUsable) {
   //    return port; 
   //   }});
   //   console.log("Port:" + port + " , use:" + usePort);
   //   port+=1;
   // }
   // 
   // return port;
    console.log("Start listening on %d", port);

    const server = net.createServer();

    // handle connection error
    server.once("error", (err) => {
      usePort = false;
      console.log("Cannot connect to port %d. Error: " + err, port);
      // port = this._assignPort(port + 1);
    });

    // connection successful
    server.on("listening", function () {
      console.log("Connection to port %d successful", port);
      server.close();
      usePort = true;
    });
    server.on("connection", function () {
      console.log("Connection to port %d successful", port);
      server.close();
      usePort = true;
    });

  //  while (!usePort) {
  //    console.log(await isPortReachable(port, { host: "localhost" }));
  //    port+=1;
  //  }

     await(
       server.listen(port, () => {
       console.log("Actual port: %d", port);
       usePort = true;
       return port;
     })
     );

    console.log(server);
    server.close();
    // TODO: replace usePort with code to wait on listen call.
    // socket stuff is async, watch out for inf loops
    if (usePort) {
      console.log("Final portNr = &d", port);
      return port;
    }
    else {
      console.log("DEBUG: ELSE");
      port = this._assignPort(port + 1);
    }
  }
}

;// CONCATENATED MODULE: ./src/build-config/build-config-validator.js














/** @typedef {import('./build-config').default} BuildConfig */

class BuildConfigValidator {
  /**
   * @type {DefaultBuildConfig}
   * @private
   */
  _defaultBuildConfig = new DefaultBuildConfig();
  /**
   * @type {BuildConfig}
   * @private
   */
  _buildConfig = undefined;
  /**
   * @type {ValidatedBuildConfig}
   * @private
   */
  _validatedConfig = undefined;

  /**
   * @param {BuildConfig} buildConfig
   */
  constructor(buildConfig) {
    /**
     * @type {DefaultBuildConfig}
     * @private
     */
    this._defaultBuildConfig = new DefaultBuildConfig();
    /**
     * @type {BuildConfig}
     * @private
     */
    this._buildConfig = buildConfig;
    /**
     * @type {ValidatedBuildConfig}
     * @private
     */
    this._validatedConfig = new ValidatedBuildConfig();
  }

  /**
   * @returns {DefaultBuildConfig}
   */
  get defaultBuildConfig() {
    return this._defaultBuildConfig;
  }

  /**
   * @returns {BuildConfig}
   */
  get buildConfig() {
    return this._buildConfig;
  }

  /**
   * @returns {ValidatedBuildConfig}
   */
  get validatedConfig() {
    return this._validatedConfig;
  }

  /**
   * @private
   */
  _validate() {
    const StringType = v => typeof v === 'string';
    const NumberType = v => typeof v === 'number';
    const BooleanType = v => typeof v === 'boolean';
    const ArrayType = v => Array.isArray(v);
    const FunctionType = v => typeof v === 'function';

    // invocation order is relevant
    this._validateProperty('name', StringType);
    this._validateProperty('version', StringType);
    this._validateProperty('targetVersion', v => v instanceof Version);
    this._validateProperty('designType', v => v instanceof DesignType);
    this._validateProperty('rootPath', StringType);
    this._validateProperty('outputPath', StringType, false);
    this._validateProperty('propertiesFilePath', StringType);
    this._validateProperty('devServerPort', NumberType);
    this._validateProperty('hashZipFiles', BooleanType);
    this._validateProperty('modulesRootPath', StringType);
    this._validateProperty('modules', ArrayType);
    this._validateProperty('additionalFilesToCopy', ArrayType);
    this._validateProperty('sourceMapEnabled', BooleanType);
    this._validateProperty('staticFileFolderPath', StringType);
    this._validateProperty('copyAssetsFolderPath', StringType);
    this._validateProperty('assetResourceRuleFilename', v => StringType(v) || FunctionType(v), true, false);
    this._validateProperty('additionalStaticAssetFileExtensions', ArrayType);
    this._validateProperty('webpackPlugins', ArrayType, true, false);
    this._validateProperty('webpackRules', ArrayType, true, false);
  }

  /**
   * @param {string} name
   * @param {(value:any)=>boolean} type
   * @param {boolean} [applyDefaultConfig=true]
   * @param {boolean} [cloneValue=true]
   */
  _validateProperty(name, type, applyDefaultConfig, cloneValue) {
    let property = '_' + name;
    let value = this.buildConfig[name];
    let defaultValue = this.defaultBuildConfig[name];
    let required = defaultValue === undefined;

    if (value !== undefined && !type(value)) {
      throw new ValidationError(`${name} is of invalid type`);
    }

    if (required && !value) {
      throw new ValidationError(`${name} is required and can not be empty`);
    }

    if ((applyDefaultConfig === undefined || !!applyDefaultConfig) && value === undefined) {
      value = defaultValue;
    }

    let validatedValue = value;
    let propertyValidator = `_validate${ucfirst(name)}`;
    if (typeof this[propertyValidator] === 'function') {
      validatedValue = this[propertyValidator](validatedValue, name);
    }

    this.validatedConfig[property] = cloneValue ? ObjectCloner.cloneValue(validatedValue) : validatedValue;
  }

  /**
   * @param {string} name
   * @param {string} property
   * @returns {string}
   * @private
   */
  _validateName(name, property) {
    let slug = external_slugify_default()(name);

    if (slug !== name) {
      throw new ValidationError(`The configuration for ${property} contains invalid characters. Recommendation: Use ${slug} instead of "${name}"`);
    }

    return slug;
  }

  /**
   * @param {string} version
   * @param {string} property
   * @returns {string}
   * @private
   */
  _validateVersion(version, property) {
    let slug = external_slugify_default()(version);

    if (slug !== version) {
      throw new ValidationError(`The configuration for ${property} contains invalid characters. Recommendation: Use ${slug} instead of "${version}"`);
    }

    return slug;
  }

  /**
   * @param {string} rootPath
   * @param {string} property
   * @returns {string}
   * @private
   */
  _validateRootPath(rootPath, property) {
    let validatedPath = getAbsolutePath(rootPath);

    if (!external_fs_default().existsSync(validatedPath)) {
      throw new ValidationError(`The configuration for ${property} points to a unknown location: ${validatedPath}`);
    }

    if (!external_fs_default().statSync(validatedPath).isDirectory()) {
      throw new ValidationError(`The configuration for ${property} should point to a directory: ${validatedPath}`);
    }

    return validatedPath;
  }

  /**
   * @param {string|undefined} outputPath
   * @param {string} property
   * @private
   */
  _validateOutputPath(outputPath, property) {
    let defaultOutputPath = external_path_default().resolve(process.cwd(), this._defaultBuildConfig.outputPath, this.validatedConfig.name);
    let validatedPath = outputPath || defaultOutputPath;

    return getAbsolutePath(validatedPath);
  }

  /**
   * @param {string|undefined} propertiesFilePath
   * @param {string} property
   * @private
   */
  _validatePropertiesFilePath(propertiesFilePath, property) {
    if (!propertiesFilePath) {
      return undefined;
    }

    let validatedPath = getAbsolutePath(propertiesFilePath, this.validatedConfig.rootPath);

    if (!external_fs_default().existsSync(validatedPath)) {
      throw new ValidationError(`The configuration for ${property} points to a unknown location: ${validatedPath}`);
    }

    if (!external_fs_default().statSync(validatedPath).isFile()) {
      throw new ValidationError(`The configuration for ${property} should point to a file: ${validatedPath}`);
    }

    return validatedPath;
  }

  /**
   * @param {string} modulesRootPath
   * @param {string} property
   * @private
   */
  _validateModulesRootPath(modulesRootPath, property) {
    let validatedPath = getAbsolutePath(modulesRootPath, this.validatedConfig.rootPath);

    if (this._buildConfig.modulesRootPath === undefined && this._buildConfig.modules.length === 0) {
      return validatedPath;
    }

    if (!external_fs_default().existsSync(validatedPath)) {
      throw new ValidationError(`The configuration for ${property} points to a unknown location: ${validatedPath}`);
    }

    if (!external_fs_default().statSync(validatedPath).isDirectory()) {
      throw new ValidationError(`The configuration for ${property} should point to a directory: ${validatedPath}`);
    }

    return validatedPath;
  }

  /**
   * @param {ModuleConfig[]} modules
   * @param {string} property
   * @private
   */
  _validateModules(modules, property) {
    /**
     * @type {Set<string>}
     */
    let moduleNames = new Set();
    /**
     * @type {ModuleConfig[]}
     */
    let validatedModules = [];

    for (let module of modules) {
      let validatedName = module.name;
      if (moduleNames.has(validatedName)) {
        throw new ValidationError(`The configuration for ${property} contains an invalid module name: "${module.name}" is already in use for ${module.path}, use a different name.`);
      }

      moduleNames.add(validatedName);

      let validatedPath = getAbsolutePath(module.path, this.validatedConfig.modulesRootPath);
      if (!external_fs_default().existsSync(validatedPath)) {
        throw new ValidationError(`The module configuration for "${validatedName}" points to a unknown location: ${validatedPath}`);
      }

      if (!external_fs_default().statSync(validatedPath).isFile()) {
        throw new ValidationError(`The module configuration for "${validatedName}" should point to a file: ${validatedPath}`);
      }

      let validatedModule = new ModuleConfig()
        .withName(validatedName)
        .withPath(validatedPath);

      validatedModules.push(validatedModule);
    }

    return validatedModules;
  }

  /**
   * @param {string} staticFileFolderPath
   * @param {string} property
   * @private
   */
  _validateStaticFileFolderPath(staticFileFolderPath, property) {
    return this._validateRelativeOrAbsoluteFolderPath(this._buildConfig.staticFileFolderPath, staticFileFolderPath, property);
  }

  /**
   * @param {string} copyAssetsFolderPath
   * @param {string} property
   * @private
   */
  _validateCopyAssetsFolderPath(copyAssetsFolderPath, property) {
    return this._validateRelativeOrAbsoluteFolderPath(this._buildConfig.copyAssetsFolderPath, copyAssetsFolderPath, property);
  }

  /**
   * @param {string|undefined} originalPath
   * @param {string} configuredPath
   * @param {string} property
   * @returns {string}
   * @private
   */
  _validateRelativeOrAbsoluteFolderPath(originalPath, configuredPath, property) {
    let validatedPath = getAbsolutePath(configuredPath, this.validatedConfig.rootPath);

    if (originalPath === undefined) {
      return validatedPath;
    }

    if (!external_fs_default().existsSync(validatedPath)) {
      throw new ValidationError(`The configuration for ${property} points to a unknown location: ${validatedPath}`);
    }

    if (!external_fs_default().statSync(validatedPath).isDirectory()) {
      throw new ValidationError(`The configuration for ${property} should point to a directory: ${validatedPath}`);
    }

    return validatedPath;
  }

  /**
   * @param {BuildConfig} buildConfig
   * @returns {ValidatedBuildConfig}
   */
  static validate(buildConfig) {
    let validator = new BuildConfigValidator(buildConfig);

    validator._validate();

    return validator.validatedConfig;
  }
}

;// CONCATENATED MODULE: ./src/build-config/build-config.js



/** @typedef {import('webpack').PathData} PathData */
/** @typedef {import('webpack').AssetInfo} AssetInfo */
/** @typedef {import('../version').Version} Version */
/** @typedef {import('../version').CX_22_0} CX_22_0 */
/** @typedef {import('../design-type').DesignType} DesignType */
/** @typedef {import('../design-type').LANDINGPAGE} LANDINGPAGE */
/** @typedef {import('./module-config').default} ModuleConfig */
/** @typedef {import('./default-build-config').default} DefaultBuildConfig */
/** @typedef {import('./build-config-interface').default} BuildConfigInterface */
/** @typedef {import('./validated-build-config').default} ValidatedBuildConfig */

/**
 * The configuration object for the build of one template.
 *
 * @implements {BuildConfigInterface}
 */
class BuildConfig {
  /**
   * @type {string}
   * @private
   */
  _name = undefined;
  /**
   * @type {string}
   * @private
   */
  _version = undefined;
  /**
   * @type {Version}
   * @private
   */
  _targetVersion = undefined;
  /**
   * @type {DesignType}
   * @private
   */
  _designType = undefined;
  /**
   * @type {string}
   * @private
   */
  _rootPath = undefined;
  /**
   * @type {string}
   * @private
   */
  _outputPath = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _propertiesFilePath = undefined;
  /**
   * @type {number|'auto'}
   * @private
   */
  _devServerPort = undefined;
  /**
   * @type {boolean}
   * @private
   */
  _hashZipFiles = undefined;
  /**
   * @type {ModuleConfig[]}
   * @private
   */
  _modules = [];
  /**
   * @type {string}
   * @private
   */
  _modulesRootPath = undefined;
  /**
   * @type {{}[]}
   * @private
   */
  _additionalFilesToCopy = [];
  /**
   * @type {boolean}
   * @private
   */
  _sourceMapEnabled = undefined;
  /**
   * @type {string}
   * @private
   */
  _staticFileFolderPath = undefined;
  /**
   * @type {string}
   * @private
   */
  _copyAssetsFolderPath = undefined;
  /**
   * @type {string | ((pathData: PathData, assetInfo?: AssetInfo) => string)}
   * @private
   */
  _assetResourceRuleFilename = undefined;
  /**
   * @returns {string[]}
   */
  _additionalStaticAssetFileExtensions = undefined;
  /**
   * @type {{}[]}
   * @private
   */
  _webpackRules = [];
  /**
   * @type {Object[]}
   * @private
   */
  _webpackPlugins = [];
  /**
   * @type {boolean}
   * @private
   */
  _postcssEnabled = undefined;

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
   * @returns {Version}
   */
  get targetVersion() {
    return this._targetVersion;
  }

  /**
   * @returns {DesignType}
   */
  get designType() {
    return this._designType;
  }

  /**
   * @returns {string}
   */
  get rootPath() {
    return this._rootPath;
  }

  /**
   * @returns {string}
   */
  get outputPath() {
    return this._outputPath;
  }

  /**
   * @returns {string|undefined}
   */
  get propertiesFilePath() {
    return this._propertiesFilePath;
  }

  /**
   * @returns {number|'auto'}
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
   * @returns {ModuleConfig[]}
   */
  get modules() {
    return this._modules;
  }

  /**
   * @returns {string}
   */
  get modulesRootPath() {
    return this._modulesRootPath;
  }

  /**
   * @returns {{}[]}
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
   * @returns {string}
   */
  get staticFileFolderPath() {
    return this._staticFileFolderPath;
  }

  /**
   * @returns {string}
   */
  get copyAssetsFolderPath() {
    return this._copyAssetsFolderPath;
  }

  /**
   * @returns {string | ((pathData: PathData, assetInfo?: AssetInfo) => string)}
   */
  get assetResourceRuleFilename() {
    return this._assetResourceRuleFilename;
  }

  /**
   * @returns {string[]}
   */
  get additionalStaticAssetFileExtensions() {
    return this._additionalStaticAssetFileExtensions;
  }

  /**
   * @returns {{}[]}
   */
  get webpackRules() {
    return this._webpackRules;
  }

  /**
   * @returns {Object[]}
   */
  get webpackPlugins() {
    return this._webpackPlugins;
  }

  /**
   * @returns {boolean}
   */
  get postcssEnabled() {
    return this._postcssEnabled;
  }

  /**
   * The name of this template, e.g. landingpage. This will be included in the name of the resulting ZIP file in the dist folder.
   * Be aware, that you should use a normalized name without any umlauts, special chars, spaces or slashes.
   *
   * @param {string} name - The name of your template.
   * @returns {BuildConfig}
   */
  withName(name) {
    this._name = name;
    return this;
  }

  /**
   * The version of this template, e.g. 1.0.1. This will be included in the name of the resulting ZIP file in the dist folder.
   *
   * @see {@link https://semver.org/spec/v2.0.0.html}
   * @param {string} version - The version for this template. It is recommended to use a semantic version string.
   * @returns {BuildConfig}
   */
  withVersion(version) {
    this._version = version;
    return this;
  }

  /**
   * The application version of BSI CX (or BSI Studio) this design is built for.
   *
   * @see {@link Version} for available versions
   * @param {Version} version - The BSI CX version. Default will be {@link CX_22_0}
   * @returns {BuildConfig}
   */
  withTargetVersion(version) {
    this._targetVersion = version;
    return this;
  }

  /**
   * The type of this design (e.g. email or landingpage).
   *
   * @see {@link DesignType} for available types
   * @param {DesignType} type - The design type to use. Default will be {@link LANDINGPAGE}
   * @returns {BuildConfig}
   */
  withDesignType(type) {
    this._designType = type;
    return this;
  }

  /**
   * The path to the root folder of this template. This folder contains the source code of your template.
   * An absolute path is recommended. If the path is relative, it will be resolved in relation to the current working directory.
   *
   * @param {string} rootPath - The path to your template root. An absolute path is recommended.
   * @returns {BuildConfig}
   */
  withRootPath(rootPath) {
    this._rootPath = rootPath;
    return this;
  }

  /**
   * A custom output folder path to use. Default: dist/{name}. An absolute path is recommended.
   * If the path is relative, it will be resolved in relation to the current working directory.
   * The folder does not have to exist, the build will create it for you. But it is recommended
   * to ignore the folder and its content in your VCS.
   *
   * @see {@link https://git-scm.com/docs/gitignore}
   * @param {string} outputPath - The path to your output folder. An absolute path is recommended.
   * @returns {BuildConfig}
   */
  withOutputPath(outputPath) {
    this._outputPath = outputPath;
    return this;
  }

  /**
   * The data properties file for your Twig templates. This file will be required and the contents of this file will be
   * available as "properties" variable inside your Twig templates and trough the <code>bsiProperty</code> functions inside
   * your LESS and SASS files. You can use a relative path. Relative paths will be resolved in relation to your {@link withRootPath|template root}.
   *
   * @param {string} propertiesFilePath - The path to your properties file.
   * @returns {BuildConfig}
   */
  withPropertiesFilePath(propertiesFilePath) {
    this._propertiesFilePath = propertiesFilePath;
    return this;
  }

  /**
   * A TCP port number to use for the development server. The default port is 9000. Be aware,
   * that you don't have to configure a separate port for each template of your build.
   * Only the first configuration will be considered.
   *
   * @param {number|'auto'} devServerPort - The development server port number.
   * @returns {BuildConfig}
   */
  withDevServerPort(devServerPort) {
    this._devServerPort = this.assignPort();
    // this._devServerPort = devServerPort; TODO 
    return this;
  }

  /**
   * Add a unique hash value to the name of the resulting ZIP file, e.g. landingpage-1.0.0-alpha-089a9.zip.
   *
   * @param {boolean} hashZipFiles - Enable or disable this feature. Default is <code>true</code>.
   * @returns {BuildConfig}
   */
  withHashZipFiles(hashZipFiles) {
    this._hashZipFiles = !!hashZipFiles;
    return this;
  }

  /**
   * Add additional JavaScript modules. Each additional JavaScript module configuration will result in a separate
   * entry configuration. Be aware, that your modules must be placed inside the modules root path.
   * Use {@link withModulesRootPath} to set a custom modules root path.
   *
   * @param {...ModuleConfig} modules - Pass objects of the {@link BuildConfig} class.
   * @returns {BuildConfig}
   */
  withModules(...modules) {
    this._modules = modules;
    return this;
  }

  /**
   * Absolute or relative path to the modules root folder. Per default this will be the "modules" folder inside your template root.
   * Relative paths will be resolved in relation to your {@link withRootPath|template root} configuration.
   *
   * @param {string} modulesRootPath - The path to your modules root folder.
   * @returns {BuildConfig}
   */
  withModulesRootPath(modulesRootPath) {
    this._modulesRootPath = modulesRootPath;
    return this;
  }

  /**
   * Add additional files to copy to the output folder. The configuration here will be passed down to the
   * {@link https://github.com/webpack-contrib/copy-webpack-plugin|CopyWebpackPlugin}. Be aware, that you always
   * can put files inside the "assets" folder inside your template root without any configuration here.
   * You can change the path to the assets folder with the {@link withCopyAssetsFolderPath} method.
   *
   * @see {@link https://github.com/webpack-contrib/copy-webpack-plugin#patterns}
   * @param {...{}} additionalFilesToCopy - Pattern configuration object.
   * @returns {BuildConfig}
   */
  withAdditionalFilesToCopy(...additionalFilesToCopy) {
    this._additionalFilesToCopy = additionalFilesToCopy;
    return this;
  }

  /**
   * Enable or disable source map generation. If enabled, source maps will be emitted for JavaScript, LESS and SASS
   * files. Enabling this feature will also emit an additional "dev" ZIP file. The generated .map files will only be
   * contained in this ZIP file. So upload the dev ZIP file if you want to debug a design in BSI CX. The dev ZIP file
   * should not be used in production environments. Enabling source maps will also have a slight performance impact.
   *
   * @param {boolean} sourceMapEnabled - Enable or disable the feature. Enabled by default.
   * @returns {BuildConfig}
   */
  withSourceMapEnabled(sourceMapEnabled) {
    this._sourceMapEnabled = sourceMapEnabled;
    return this;
  }

  /**
   * Set the folder for static assets (e.g. images or simple JavaScript files).
   * Can either be an absolute or relative path. Relative paths will be normalized in relation to the template root folder.
   * Use {@link withRootPath} to set the template root folder.
   *
   * @param {string} staticFileFolderPath - The path to the static assets folder.
   * @returns {BuildConfig}
   */
  withStaticFileFolderPath(staticFileFolderPath) {
    this._staticFileFolderPath = staticFileFolderPath;
    return this;
  }

  /**
   * Set the root folder to copy additional assets from. Use {@link withAdditionalFilesToCopy} to configure additional
   * assets for your bundle. This can either be an absolute or relative path.
   * Relative paths will be normalized in relation to the template root folder.
   * Use {@link withRootPath} to set the template root folder.
   *
   * @param {string} copyAssetsFolderPath - The path to the copy assets folder.
   * @returns {BuildConfig}
   */
  withCopyAssetsFolderPath(copyAssetsFolderPath) {
    this._copyAssetsFolderPath = copyAssetsFolderPath;
    return this;
  }

  /**
   * Set a custom filename for asset modules. Default value is: <code>static/[name]-[contenthash][ext]</code>
   *
   * @see {@link https://webpack.js.org/configuration/module/#rulegeneratorfilename}
   * @param {string | ((pathData: PathData, assetInfo?: AssetInfo) => string)} assetResourceRuleFilename
   * @returns {BuildConfig}
   */
  withAssetResourceRuleFilename(assetResourceRuleFilename) {
    this._assetResourceRuleFilename = assetResourceRuleFilename;
    return this;
  }

  /**
   * Additional file extensions for static assets. The following file extensions are defined by default: avif, png,
   * apng, jpg, jpeg, jfif, pjpeg, pjp, webp, gif, bmp, tiff, tif, raw, svg, eot, ttf, woff, woff2, pdf, ico,
   * cur, mkv, 3gp, mp3, mp4, m4v, m4p, ogv, webm, aac, flac, mpg, mpeg, oga, ogg, wav, json5
   *
   * The extensions you define here will be added to the list.
   *
   * @param {...string} extensions
   * @returns {BuildConfig}
   */
  withAdditionalStaticAssetFileExtensions(...extensions) {
    this._additionalStaticAssetFileExtensions = extensions;
    return this;
  }

  /**
   * Configure additional rules for the Webpack configuration. Be aware, that this can clash with the existing rules.
   *
   * @see {@link https://webpack.js.org/configuration/module/#rule}
   * @param {...{}} rules - Webpack rules objects.
   * @returns {BuildConfig}
   */
  withWebpackRules(...rules) {
    this._webpackRules = rules;
    return this;
  }

  /**
   * Configure additional plugins for the Webpack configuration. Be aware, that this can clash with the existing plugins.
   *
   * @see {@link https://webpack.js.org/configuration/plugins/}
   * @param {...Object} plugins - Instances of Webpack plugins.
   * @returns {BuildConfig}
   */
  withWebpackPlugins(...plugins) {
    this._webpackPlugins = plugins;
    return this;
  }

  /**
   * Enable or disable PostCSS for the Webpack configuration.
   *
   * @param {boolean} postcssEnabled - Enable or disable PostCSS.
   * @returns {BuildConfig}
   */
  withPostcssEnabled(postcssEnabled) {
    this._postcssEnabled = postcssEnabled;
    return this;
  }

  /**
   * Create a clone of this copy. Can be useful if different templates should be created from the same sources.
   * A shallow clone will be created by default. This means nested objects will still reference the same origin.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {BuildConfig}
   */
  clone(shallow) {
    return ObjectCloner.clone(this, new BuildConfig(), shallow);
  }

  /**
   * Validate the build configuration. <strong>There is no need to call this method.</strong>
   * The {@link WebpackConfigBuilder.fromConfigs|WebpackConfigBuilder} will do this for you.
   *
   * @returns {ValidatedBuildConfig} - The validated build config with {@link DefaultBuildConfig|defaults} applied where necessary.
   */
  validate() {
    return BuildConfigValidator.validate(this);
  }

   /**
   * @param {number} port - The port to assign
   * @returns {number}
   * @private
   */
  assignPort(port) {
    let portNr = port;
    const net = __webpack_require__(808);
    const server = net.createServer().listen(port, "localhost");

    server.on("error", (err) => {
      portNr = this.assignPort(port + 1);
    });

    server.on("listening", function () {
      server.close();
    });
    return portNr;
  }
}

;// CONCATENATED MODULE: external "zip-webpack-plugin"
const external_zip_webpack_plugin_namespaceObject = require("zip-webpack-plugin");
var external_zip_webpack_plugin_default = /*#__PURE__*/__webpack_require__.n(external_zip_webpack_plugin_namespaceObject);
;// CONCATENATED MODULE: external "mini-css-extract-plugin"
const external_mini_css_extract_plugin_namespaceObject = require("mini-css-extract-plugin");
var external_mini_css_extract_plugin_default = /*#__PURE__*/__webpack_require__.n(external_mini_css_extract_plugin_namespaceObject);
;// CONCATENATED MODULE: external "copy-webpack-plugin"
const external_copy_webpack_plugin_namespaceObject = require("copy-webpack-plugin");
var external_copy_webpack_plugin_default = /*#__PURE__*/__webpack_require__.n(external_copy_webpack_plugin_namespaceObject);
;// CONCATENATED MODULE: external "terser-webpack-plugin"
const external_terser_webpack_plugin_namespaceObject = require("terser-webpack-plugin");
var external_terser_webpack_plugin_default = /*#__PURE__*/__webpack_require__.n(external_terser_webpack_plugin_namespaceObject);
;// CONCATENATED MODULE: ./package.json
const package_namespaceObject = JSON.parse('{"u2":"@bsi-cx/design-build"}');
;// CONCATENATED MODULE: external "vm"
const external_vm_namespaceObject = require("vm");
var external_vm_default = /*#__PURE__*/__webpack_require__.n(external_vm_namespaceObject);
;// CONCATENATED MODULE: external "handlebars"
const external_handlebars_namespaceObject = require("handlebars");
var external_handlebars_default = /*#__PURE__*/__webpack_require__.n(external_handlebars_namespaceObject);
;// CONCATENATED MODULE: external "webpack"
const external_webpack_namespaceObject = require("webpack");
;// CONCATENATED MODULE: external "webpack/lib"
const lib_namespaceObject = require("webpack/lib");
;// CONCATENATED MODULE: ./src/handlebars-helpers.js
/* harmony default export */ const handlebars_helpers = ({
  'bsi.nls': key => key
});

;// CONCATENATED MODULE: ./src/design-json-property.js
class DesignJsonProperty {
  /**
   * @type {string}
   */
  static ID = 'id';
  /**
   * @type {string}
   */
  static SCHEMA_VERSION = 'schemaVersion';
  /**
   * @type {string}
   */
  static TITLE = 'title';
  /**
   * @type {string}
   */
  static AUTHOR = 'author';
  /**
   * @type {string}
   */
  static DATE = 'date';
  /**
   * @type {string}
   */
  static PREVIEW_IMAGE = 'previewImage';
  /**
   * @type {string}
   */
  static DEFAULT_LOCALE = 'defaultLocale';
  /**
   * @type {string}
   */
  static LOCALES = 'locales';
  /**
   * @type {string}
   */
  static CONTENT_ELEMENT_GROUPS = 'contentElementGroups';
  /**
   * @type {string}
   */
  static GROUP_ID = 'groupId';
  /**
   * @type {string}
   */
  static CONTENT_ELEMENTS = 'contentElements';
  /**
   * @type {string}
   */
  static ELEMENT_ID = 'elementId';
  /**
   * @type {string}
   */
  static FILE = 'file';
  /**
   * @type {string}
   */
  static ICON = 'icon';
  /**
   * @type {string}
   */
  static PARTS = 'parts';
  /**
   * @type {string}
   */
  static PART_ID = 'partId';
  /**
   * @type {string}
   */
  static HTML_EDITOR_CONFIG = 'htmlEditorConfig';
  /**
   * @type {string}
   */
  static LABEL = 'label';
  /**
   * @type {string}
   */
  static DESCRIPTION = 'description';
  /**
   * @type {string}
   */
  static HIDDEN = 'hidden';
  /**
   * @type {string}
   */
  static STYLE_CONFIGS = 'styleConfigs';
  /**
   * @type {string}
   */
  static CSS_CLASSES = 'cssClasses';
  /**
   * @type {string}
   */
  static CSS_CLASS = 'cssClass';
  /**
   * @type {string}
   */
  static HTML_EDITOR_CONFIGS = 'htmlEditorConfigs';
  /**
   * @type {string}
   */
  static FEATURES = 'features';
  /**
   * @type {string}
   */
  static TEXT_COLORS = 'textColors';
  /**
   * @type {string}
   */
  static BACKGROUND_COLORS = 'backgroundColors';
  /**
   * @type {string}
   */
  static FORMATS = 'formats';
  /**
   * @type {string}
   */
  static FONT_SIZES = 'fontSizes';
  /**
   * @type {string}
   */
  static FONT_SIZE_UNIT = 'fontSizeUnit';
  /**
   * @type {string}
   */
  static FONT_SIZE_DEFAULT = 'fontSizeDefault';
  /**
   * @type {string}
   */
  static LINE_HEIGHTS = 'lineHeights';
  /**
   * @type {string}
   */
  static ENTER_MODE = 'enter';
  /**
   * @type {string}
   */
  static WEBSITE = 'website';
  /**
   * @type {string}
   */
  static NLS = 'nls';
  /**
   * @type {string}
   */
  static MAX_NAVIGATION_LEVEL = 'maxNavigationLevel';
  /**
   * @type {string}
   */
  static INCLUDES = 'includes';
  /**
   * @type {string}
   */
  static EDITABLE = 'editable';
  /**
   * @type {string}
   */
  static NAME = 'name';
  /**
   * @type {string}
   */
  static PAGE_INCLUDE = '__page__';
}

;// CONCATENATED MODULE: ./src/builder-object-normalizer.js
class BuilderObjectNormalizer {
  /**
   * @param {*} obj
   * @returns {*}
   * @private
   */
  _normalize(obj) {
    switch (true) {
      case typeof obj === 'undefined':
        return obj;
      case typeof obj === 'string' || obj instanceof String:
        return obj;
      case typeof obj === 'number' || obj instanceof Number:
        return obj;
      case typeof obj === 'boolean' || obj instanceof Boolean:
        return obj;
      case typeof obj === 'bigint' || obj instanceof BigInt:
        return obj;
      case typeof obj.build === 'function':
        return obj.build();
      case typeof obj.getValue === 'function':
        return obj.getValue();
      case obj instanceof Array || Array.isArray(obj):
        return this._normalizeArray(obj);
      case obj instanceof Object || typeof obj === 'object':
        return this._normalizeObject(obj);
      default:
        throw new Error('unable to normalize input');
    }
  }

  /**
   * @param {*[]} arr
   * @returns {*[]}
   * @private
   */
  _normalizeArray(arr) {
    return arr.map(value => this._normalize(value));
  }

  /**
   * @param {{}} obj
   * @returns {{}}
   * @private
   */
  _normalizeObject(obj) {
    let targetObj = {};

    for (let [key, value] of Object.entries(obj)) {
      targetObj[key] = this._normalize(value);
    }

    return targetObj;
  }

  /**
   * Convert a builder object into a standard object by invoking the build method on a builder object or just return the provided object.
   * This method normally operates on imported values from executed JavaScript assets, see {@link _BsiCxWebpackPlugin#_loadAssets}.
   * Such values cannot be checked with instanceof.
   *
   * @param {*} obj
   * @returns {*}
   */
  static normalize(obj) {
    return new BuilderObjectNormalizer()._normalize(obj);
  }
}

;// CONCATENATED MODULE: ./src/file.js
class File {
  /**
   * @type {string}
   */
  static DESIGN_JSON = 'design.json';
  /**
   * @type {string}
   */
  static DESIGN_JSON_CHUNK = 'design.json.chunk';
  /**
   * @type {string}
   */
  static DESIGN_JS = 'design.js';
  /**
   * @type {string}
   */
  static DESIGN_HTML = 'design.html';
  /**
   * @type {string}
   */
  static CONTENT_ELEMENTS_HTML = 'content-elements.html';
  /**
   * @type {string}
   */
  static DESIGN_PROPERTIES = 'design.properties';
}

;// CONCATENATED MODULE: ./src/browser-utility.js
/**
 * @param {(string|number)[]} arr
 * @returns {string}
 */
function scalarArrayToList(arr) {
  return arr.join(',');
}

/**
 * @template T
 * @param {T} v
 * @returns {T}
 */
function identity(v) {
  return v;
}

/**
 * @param {AbstractConstant} constant
 * @returns {string}
 */
function constantObjectValue(constant) {
  return constant.value;
}

/**
 * @param {AbstractBuilder} builder
 * @returns {{}}
 */
function builderObjectValue(builder) {
  return builder.build();
}

/**
 * Very simple UUID v4 generator. Don't use the <code>crypto.getRandomValues()</code> or the uuid NPM package
 * (won't work in the browser context).
 *
 * @see {@link https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid#answer-2117523}
 * @returns {string}
 */
function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

;// CONCATENATED MODULE: ./src/design-json-property-extension.js
class DesignJsonPropertyExtension {
  /**
   * @type {string}
   */
  static DROPZONES = 'dropzones';
  /**
   * @type {string}
   */
  static DROPZONE = 'dropzone';
  /**
   * @type {string}
   */
  static ALLOWED_ELEMENTS = 'allowedElements';
  /**
   * @type {string}
   */
  static MAX_ALLOWED_ELEMENTS = 'maxAllowedElements';
  /**
   * @type {string}
   */
  static REMOVE_ALLOWED = 'removeAllowed';
  /**
   * @type {string}
   */
  static COPY_ALLOWED = 'copyAllowed';
  /**
   * @type {string}
   */
  static MOVE_ALLOWED = 'moveAllowed';
}

;// CONCATENATED MODULE: ./src/bsi-html-attributes.js
class BsiHtmlAttributes {
  /**
   * @type {string}
   */
  static DROPZONE = 'data-bsi-dropzone';
  /**
   * @type {string}
   */
  static DROPZONE_ALLOWED_ELEMENTS = 'data-bsi-dropzone-allowed-elements';
  /**
   * @type {string}
   */
  static DROPZONE_MAX_NUMBER_OF_ELEMENTS = 'data-bsi-dropzone-max-number-of-elements';
  /**
   * @type {string}
   */
  static HIDE_MOVE_BUTTON = 'data-bsi-hide-move-button';
  /**
   * @type {string}
   */
  static HIDE_COPY_BUTTON = 'data-bsi-hide-copy-button';
  /**
   * @type {string}
   */
  static HIDE_REMOVE_BUTTON = 'data-bsi-hide-remove-button';
}

;// CONCATENATED MODULE: ./src/abstract-property-plugin.js
/**
 * @abstract
 */
class AbstractPropertyPlugin {
  /**
   * @type {CssPropertyResolver}
   * @protected
   */
  _propertyResolver = undefined;
  /**
   * @type {{}}
   * @protected
   */
  _properties = undefined;

  /**
   * @param {BuildContext} context
   */
  constructor(context) {
    /**
     * @type {{}}
     * @private
     */
    this._properties = context.properties.proxy;
    /**
     * @type {CssPropertyResolver}
     * @private
     */
    this._propertyResolver = context.cssPropertyResolver;
  }

  /**
   * @param {*} property
   * @param {*} fallback
   * @returns {*}
   */
  getProperty(property, fallback) {
    let segments = property.split('.');
    let scope = this._properties;

    for (let segment of segments) {
      scope = scope[segment];
      if (typeof scope === 'undefined') {
        return this._handleNotFoundProperty(property, fallback);
      }
    }

    return this._propertyResolver.resolve(scope);
  }

  /**
   * @param {*} property
   * @param {*} fallback
   * @returns {*}
   * @private
   */
  _handleNotFoundProperty(property, fallback) {
    if (typeof fallback === 'undefined') {
      throw new Error(`Property ${property} not found.`);
    }

    return fallback;
  }
}

;// CONCATENATED MODULE: ./src/bsi-js-property-plugin.js


class BsiJsPropertyPlugin extends AbstractPropertyPlugin {
}

;// CONCATENATED MODULE: ./src/bsi-cx-webpack-plugin.js





















class bsi_cx_webpack_plugin_BsiCxWebpackPlugin {
  /**
   * @type {RegExp}
   */
  static DESIGN_JSON = new RegExp('^' + escapeRegex(File.DESIGN_JSON) + '$');
  /**
   * @type {RegExp}
   */
  static DESIGN_JSON_CHUNK = new RegExp('^' + escapeRegex(File.DESIGN_JSON_CHUNK) + '$');
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
  static STYLES_CSS = new RegExp(`^${DistFolder.STATIC}\/styles-[0-9a-z]+\.css$`);
  /**
   * @type {RegExp}
   */
  static CSS_INLINE = new RegExp(Constant.BSI_CX_CSS_INLINE, 'g');
  /**
   * @type {RegExp}
   */
  static CSS_HREF = new RegExp(Constant.BSI_CX_CSS_HREF, 'g');

  /**
   * @type {RegExp}
   */
  static JS_MODULE = new RegExp(`${Constant.BSI_CX_JS_MODULE_START}(?<metaInfo>.+)${Constant.BSI_CX_JS_MODULE_END}`, 'g');
  /**
   * @type {RegExp}
   */
  static JS_MODULE_RUNTIME_HREF = new RegExp(Constant.BSI_CX_MODULE_RUNTIME_HREF, 'g');
  /**
   * @type {RegExp}
   */
  static JS_MODULE_RUNTIME_INLINE = new RegExp(Constant.BSI_CX_MODULE_RUNTIME_INLINE, 'g');
  /**
   * @type {RegExp}
   */
  static JS_MODULE_RUNTIME = new RegExp(`^${Constant.BSI_CX_MODULE_RUNTIME_PATH}\.js$`);

  /**
   * @type {number}
   */
  static ELEMENT_FILE_HASH_LENGTH = 20;

  /**
   * @type {ValidatedBuildConfig}
   * @private
   */
  _config = undefined;
  /**
   * @type {Compiler}
   * @private
   */
  _compiler = undefined;
  /**
   * @type {Compilation}
   * @private
   */
  _compilation = undefined;
  /**
   * @type {WebpackLogger}
   * @private
   */
  _logger = undefined;
  /**
   * @type {BsiJsPropertyPlugin}
   * @private
   */
  _propertyPlugin = undefined;

  /**
   * @param {BuildContext} context
   * @param {Compiler} compiler
   * @param {Compilation} compilation
   * @param {WebpackLogger} logger
   */
  constructor(context, compiler, compilation, logger) {
    /**
     * @type {ValidatedBuildConfig}
     */
    this._config = context.config;
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
    /**
     * @type {BsiJsPropertyPlugin}
     */
    this._propertyPlugin = new BsiJsPropertyPlugin(context);
  }

  apply() {
    try {
      let designJsonObj = this._importDesignJson();
      let replaceMap = this._createReplaceMap(designJsonObj);

      this._exportDesignJson(designJsonObj, replaceMap);
      this._exportDesignHtml(replaceMap);
      this._exportPreviewHtml(replaceMap);
    } catch (error) {
      if (error instanceof lib_namespaceObject.WebpackError) {
        this._compilation.errors.push(error);
      } else {
        this._logger.error(error);
      }
    }
  }

  /**
   * @returns {{}}
   * @private
   */
  _importDesignJson() {
    let designJsonPath = this._getAssetName(bsi_cx_webpack_plugin_BsiCxWebpackPlugin.DESIGN_JSON);
    let designJsonChunkPath = this._getAssetName(bsi_cx_webpack_plugin_BsiCxWebpackPlugin.DESIGN_JSON_CHUNK);
    /**
     * @type {*}
     */
    let designJson = this._loadAssets('json', designJsonChunkPath, designJsonPath);

    return BuilderObjectNormalizer.normalize(designJson);
  }

  /**
   *
   * @param {{}} designJsonObj
   * @returns {Map<string, function(string):string>}
   * @private
   */
  _createReplaceMap(designJsonObj) {
    /**
     * @type {Set<string>}
     */
    let knownElements = this._createSetOfKnownElements(designJsonObj);
    /**
     * @type {Map<string, function(string):string>}
     */
    let replaceMap = new Map();

    this._addDropzonesToReplaceMap(designJsonObj, replaceMap, knownElements);

    designJsonObj[DesignJsonProperty.CONTENT_ELEMENT_GROUPS]
      ?.forEach(group => group[DesignJsonProperty.CONTENT_ELEMENTS]
        ?.forEach(element => this._addElementToReplaceMap(element, replaceMap, knownElements)));

    let website = designJsonObj[DesignJsonProperty.WEBSITE] ?? {};
    Object.values(website[DesignJsonProperty.INCLUDES] ?? {})
      .forEach(include => this._addDropzonesToReplaceMap(include, replaceMap, knownElements));

    return replaceMap;
  }

  /**
   * @param {{}} designJsonObj
   * @returns {Set<string>}
   * @private
   */
  _createSetOfKnownElements(designJsonObj) {
    let knownElements = designJsonObj[DesignJsonProperty.CONTENT_ELEMENT_GROUPS]
      ?.flatMap(group => group[DesignJsonProperty.CONTENT_ELEMENTS]
        ?.map(element => element[DesignJsonProperty.ELEMENT_ID]));

    return new Set(knownElements);
  }

  /**
   * @param {{}} element
   * @param {Map<string, function(string):string>} replaceMap
   * @param {Set<string>} knownElements
   * @private
   */
  _addElementToReplaceMap(element, replaceMap, knownElements) {
    this._addDropzonesToReplaceMap(element, replaceMap, knownElements);

    element[DesignJsonProperty.PARTS]
      ?.filter(part => !!part[DesignJsonProperty.ID])
      .forEach(part => {
        /**
         * @type {string}
         */
        let id = part[DesignJsonProperty.ID];
        /**
         * @type {string}
         */
        let partId = part[DesignJsonProperty.PART_ID];
        /**
         * @type {RegExp}
         */
        let needle = new RegExp(escapeRegex(id), 'g');

        replaceMap.set(id, haystack => haystack.replace(needle, partId));
      });
  }

  /**
   * @param {{}} objScope
   * @param {Map<string, function(string):string>} replaceMap
   * @param {Set<string>} knownElements
   * @private
   */
  _addDropzonesToReplaceMap(objScope, replaceMap, knownElements) {
    /**
     * @type {{}[]}
     */
    let dropzones = objScope[DesignJsonPropertyExtension.DROPZONES] ?? [];

    dropzones.forEach(dropzone => {
      let dropzoneId = dropzone[DesignJsonPropertyExtension.DROPZONE];
      let allowedElements = dropzone[DesignJsonPropertyExtension.ALLOWED_ELEMENTS]?.filter(id => knownElements.has(id)).join(' ');
      let maxElements = dropzone[DesignJsonPropertyExtension.MAX_ALLOWED_ELEMENTS];
      let removeAllowed = dropzone[DesignJsonPropertyExtension.REMOVE_ALLOWED];
      let moveAllowed = dropzone[DesignJsonPropertyExtension.MOVE_ALLOWED];
      let copyAllowed = dropzone[DesignJsonPropertyExtension.COPY_ALLOWED];

      if (dropzoneId === undefined) {
        return;
      }

      let replacement = [
        [dropzoneId, BsiHtmlAttributes.DROPZONE, v => v !== undefined, v => v],
        [allowedElements, BsiHtmlAttributes.DROPZONE_ALLOWED_ELEMENTS, v => v !== undefined, v => v],
        [maxElements, BsiHtmlAttributes.DROPZONE_MAX_NUMBER_OF_ELEMENTS, v => v !== undefined, v => v],
        [removeAllowed, BsiHtmlAttributes.HIDE_REMOVE_BUTTON, v => v === false, () => ''],
        [moveAllowed, BsiHtmlAttributes.HIDE_MOVE_BUTTON, v => v === false, () => ''],
        [copyAllowed, BsiHtmlAttributes.HIDE_COPY_BUTTON, v => v === false, () => ''],
      ].map(prop => {
        let [value, attribute, check, converter] = prop;

        return !!check(value) ? `${attribute}="${converter(value)}"` : undefined;
      }).filter(attribute => attribute !== undefined).join(' ');

      let dropzoneAttr = `${BsiHtmlAttributes.DROPZONE}="${dropzoneId}"`;
      let needle = new RegExp(escapeRegex(dropzoneAttr), 'g');

      replaceMap.set(dropzoneId, haystack => haystack.replace(needle, replacement));
    });

    delete objScope[DesignJsonPropertyExtension.DROPZONES];
  }

  /**
   * @param {Map<string, function(string):string>} replaceMap
   * @private
   */
  _exportDesignHtml(replaceMap) {
    let designHtmlPath = this._getAssetName(bsi_cx_webpack_plugin_BsiCxWebpackPlugin.DESIGN_HTML);
    this._updateHtmlTemplate(designHtmlPath, 'design', replaceMap);
  }

  /**
   * @param {Map<string, function(string):string>} replaceMap
   * @private
   */
  _exportPreviewHtml(replaceMap) {
    let previewFilePath = this._getAssetName(bsi_cx_webpack_plugin_BsiCxWebpackPlugin.PREVIEW_HTML);
    let previewTemplate = this._updateHtmlTemplate(previewFilePath, 'preview', replaceMap);

    if (/\.hbs$/.test(previewFilePath)) {
      this._handlePreviewHandlebars(previewFilePath, previewTemplate);
    }
  }

  /**
   * @param {{}} designJsonObj
   * @param {Map<string, function(string):string>} replaceMap
   * @private
   */
  _exportDesignJson(designJsonObj, replaceMap) {
    let designJsonPath = this._getAssetName(bsi_cx_webpack_plugin_BsiCxWebpackPlugin.DESIGN_JSON);
    let designJsonChunkPath = this._getAssetName(bsi_cx_webpack_plugin_BsiCxWebpackPlugin.DESIGN_JSON_CHUNK);
    let contentElementGroups = designJsonObj[DesignJsonProperty.CONTENT_ELEMENT_GROUPS] || [];
    let website = designJsonObj[DesignJsonProperty.WEBSITE] || {};
    let websiteIncludes = website[DesignJsonProperty.INCLUDES] || {};
    let metaPropertyMap = new Map([
      [DesignJsonProperty.HTML_EDITOR_CONFIG, {}],
      [DesignJsonProperty.STYLE_CONFIGS, {}]
    ]);

    this._adjustDesignJsonSchemaVersion(designJsonObj);
    this._handleDesignPreviewImage(designJsonObj);

    contentElementGroups
      .forEach(group => group[DesignJsonProperty.CONTENT_ELEMENTS]
        .forEach(element => this._handleElement(element, replaceMap, metaPropertyMap)));

    this._applyExtractedMetaProperties(designJsonObj, metaPropertyMap);

    for (let [id, include] of Object.entries(websiteIncludes)) {
      this._handleInclude(id, include, replaceMap);
    }

    const {
      schemaVersion,
      ...rest
    } = designJsonObj;

    const json = {
      schemaVersion: schemaVersion,
      ...rest
    };

    let jsonStr = JSON.stringify(json, null, 2);
    this._updateAsset(designJsonPath, jsonStr);
    this._deleteAsset(designJsonChunkPath);
  }

  _adjustDesignJsonSchemaVersion(designJsonObj) {
    if (typeof designJsonObj[DesignJsonProperty.SCHEMA_VERSION] === 'undefined') {
      designJsonObj[DesignJsonProperty.SCHEMA_VERSION] = this._config.targetVersion.schemaVersion;
    }
  }

  _handleDesignPreviewImage(designJsonObj) {
    if (typeof designJsonObj[DesignJsonProperty.PREVIEW_IMAGE] !== 'undefined') {
      designJsonObj[DesignJsonProperty.PREVIEW_IMAGE] = this._removeDesignBaseUrl(designJsonObj[DesignJsonProperty.PREVIEW_IMAGE]);
    }
  }

  /**
   * @param {{file:{content:string,path:string},parts:[]}} element
   * @param {Map<string, function(string):string>} replaceMap
   * @param {Map<string, {}>} metaPropertyMap
   * @private
   */
  _handleElement(element, replaceMap, metaPropertyMap) {
    this._importElementFile(element);
    this._sortElementPartsById(element);
    this._handleElementFile(element, replaceMap);
    this._extractMetaConfigProperties(element, DesignJsonProperty.STYLE_CONFIGS, metaPropertyMap);
    this._extractMetaConfigPropertiesFromParts(element, metaPropertyMap);
  }

  /**
   * @param {{file:{content:string,path:string},parts:[]}} element
   * @private
   */
  _importElementFile(element) {
    let fileObj = element[DesignJsonProperty.FILE];

    fileObj.content = this._evalTemplateFile(fileObj.content);
  }

  /**
   * @param {{file:{content:string,path:string},parts:[]}} element
   * @param {Map<string, function(string):string>} replaceMap
   * @private
   */
  _handleElementFile(element, replaceMap) {
    let fileObj = element[DesignJsonProperty.FILE];
    let baseFolder = DistFolder.CONTENT_ELEMENTS;
    let filenamePrefix = element[DesignJsonProperty.ELEMENT_ID];

    element[DesignJsonProperty.FILE] = this._handleTemplateFile(fileObj, baseFolder, filenamePrefix, replaceMap, false);
  }

  /**
   * @param {{}} targetObj
   * @param {string} property
   * @param {Map<string, {}>} metaPropertyMap
   * @private
   */
  _extractMetaConfigProperties(targetObj, property, metaPropertyMap) {
    let metaProperty = `_${property}`;
    let rawMetaConfigs = targetObj[metaProperty] ?? [];
    let metaConfigs = Array.isArray(rawMetaConfigs) ? rawMetaConfigs : [rawMetaConfigs];
    let configMap = metaPropertyMap.get(property);

    metaConfigs.forEach(metaConfig => {
      let name = Object.keys(metaConfig).pop();

      configMap[name] = metaConfig[name];
    });

    delete targetObj[metaProperty];
  }

  /**
   * @param {{parts:[]}} element
   * @param {Map<string, {}>} metaPropertyMap
   * @private
   */
  _extractMetaConfigPropertiesFromParts(element, metaPropertyMap) {
    element[DesignJsonProperty.PARTS]
      .forEach(part => this._extractMetaConfigProperties(part, DesignJsonProperty.HTML_EDITOR_CONFIG, metaPropertyMap));
  }

  /**
   * @param {{}} designJsonObj
   * @param {Map<string, Map<string, {}>>} metaPropertyMap
   * @private
   */
  _applyExtractedMetaProperties(designJsonObj, metaPropertyMap) {
    let styleConfigs = metaPropertyMap.get(DesignJsonProperty.STYLE_CONFIGS);
    let htmlEditorConfigs = metaPropertyMap.get(DesignJsonProperty.HTML_EDITOR_CONFIG);

    this._applyExtractedMetaProperty(designJsonObj, DesignJsonProperty.STYLE_CONFIGS, styleConfigs);
    this._applyExtractedMetaProperty(designJsonObj, DesignJsonProperty.HTML_EDITOR_CONFIGS, htmlEditorConfigs);
  }

  /**
   * @param {{}} designJsonObj
   * @param {string} property
   * @param {{}} configs
   * @private
   */
  _applyExtractedMetaProperty(designJsonObj, property, configs) {
    designJsonObj[property] = Object.assign({}, configs, designJsonObj[property] ?? {});
  }

  /**
   * @param {{file:{content:string,path:string},parts:[{id:string}]}} element
   * @private
   */
  _sortElementPartsById(element) {
    /**
     * @type {Map<string, {id:string}>}
     */
    let idPartMap = new Map();
    let parts = element[DesignJsonProperty.PARTS] ?? [];
    parts
      .filter(part => !!part[DesignJsonProperty.ID])
      .forEach(part => {
        idPartMap.set(part[DesignJsonProperty.ID], part);
        delete part[DesignJsonProperty.ID];
      });
    // abort if not all parts have an ID
    if (idPartMap.size !== parts.length) {
      return;
    }

    let template = element[DesignJsonProperty.FILE].content;
    let orderedParts = [];
    idPartMap.forEach((part, id) => {
      let index = template.indexOf(id);
      if (index !== -1) {
        orderedParts[index] = part;
      }
    });

    // filter all the empty array slots
    orderedParts = orderedParts.filter(part => !!part);

    // abort if not all parts are mapped to the template
    if (orderedParts.length !== parts.length) {
      return;
    }

    element[DesignJsonProperty.PARTS] = orderedParts;
  }

  /**
   * @param {string} id
   * @param {{file:{}}} include
   * @param {Map<string, function(string):string>} replaceMap
   * @private
   */
  _handleInclude(id, include, replaceMap) {
    let fileObj = include[DesignJsonProperty.FILE];
    let baseFolder = DistFolder.INCLUDES;

    include[DesignJsonProperty.FILE] = this._handleTemplateFile(fileObj, baseFolder, id, replaceMap, true);
  }


  /**
   * @param {string} rawContent
   */
  _evalTemplateFile(rawContent) {
    return /^module\.exports/.test(rawContent) ? this._eval(rawContent) : rawContent;
  }

  /**
   * @param {{content:string,path:string}} fileObj
   * @param {string} baseFolder
   * @param {string} filenamePrefix
   * @param {Map<string, function(string):string>} replaceMap
   * @param {boolean} evalFirst
   * @returns {string}
   */
  _handleTemplateFile(fileObj, baseFolder, filenamePrefix, replaceMap, evalFirst) {
    let content = fileObj.content;

    if (!!evalFirst) {
      content = /^module\.exports/.test(content) ? this._eval(content) : content;
    }

    let extension = this._getTemplateFileExtension(fileObj.path);
    let prefix = external_slugify_default()(filenamePrefix ?? uuid());
    let pathHash = _createPathHash(fileObj.path);

    let filename = prefix + '-' + pathHash + '.' + extension;
    let elementFilePath = baseFolder + (external_path_default()).posix.sep + filename;

    content = this._applyReplaceMap(content, replaceMap);

    this._emitAsset(elementFilePath, content);

    return elementFilePath;
  }

  /**
   * @param {string} content
   * @param {Map<string, function(string):string>} replaceMap
   * @returns {string}
   * @private
   */
  _applyReplaceMap(content, replaceMap) {
    replaceMap.forEach(replaceFunc => content = replaceFunc(content));

    return content;
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
    switch (true) {
      case /\.hbs\.twig$/.test(fileName):
        return 'hbs';
      case /\.hbs$/.test(fileName):
        return 'hbs';
      default:
        return 'html';
    }
  }

  /**
   * @param {RegExp} nameRegEx
   * @returns {string[]}
   */
  _getAssetNames(nameRegEx) {
    /**
     * @type {string[]}
     */
    let assetNames = Object.keys(this._compilation.assets);
    return assetNames.filter(name => nameRegEx.test(name));
  }

  /**
   * @param {RegExp} nameRegEx
   * @returns {string}
   */
  _getAssetName(nameRegEx) {
    return this._getAssetNames(nameRegEx).shift();
  }

  _eval(source) {
    let script = new (external_vm_default()).Script(source);
    let context = {module: {}};
    script.runInNewContext(context);
    return context.module.exports;
  }

  /**
   * @param {string} filePath
   * @param {string} content
   */
  _updateAsset(filePath, content) {
    let source = new external_webpack_namespaceObject.sources.RawSource(content);
    this._compilation.updateAsset(filePath, source);
  }

  /**
   * @param {string} scope
   * @param {...string} assetNames
   * @returns {*}
   */
  _loadAssets(scope, ...assetNames) {
    let context = {
      self: {},
      console: console
    };

    context[Constant.BSI_CX_JS_PROPERTY_PLUGIN] = this._propertyPlugin;
    context[Constant.BSI_CX_TARGET_VERSION] = this._config.targetVersion;
    context[Constant.BSI_CX_TARGET_TYPE] = this._config.designType;

    external_vm_default().createContext(context);

    for (let assetName of assetNames) {
      let assetFilename = external_path_default().resolve(this._compiler.outputPath, assetName);
      let asset = this._compilation.getAsset(assetName);
      let source = asset.source.source();
      let code = utility_toString(source);
      let script = new (external_vm_default()).Script(code, {
        filename: assetFilename
      });

      script.runInContext(context);
    }

    return context[scope];
  }

  /**
   * @param {string} filePath
   * @param {string} content
   */
  _emitAsset(filePath, content) {
    let source = new external_webpack_namespaceObject.sources.RawSource(content);
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
   * @param {Map<string, function(string):string>} replaceMap
   * @returns {string}
   */
  _updateHtmlTemplate(filePath, name, replaceMap) {
    let templateObj = this._loadAssets(name, filePath);
    let templateStr = this._eval(templateObj.content);

    templateStr = templateStr.trim();
    templateStr = this._applyReplaceMap(templateStr, replaceMap);
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
    let cssStylesFilename = this._getAssetName(bsi_cx_webpack_plugin_BsiCxWebpackPlugin.STYLES_CSS);

    if (cssStylesFilename === undefined) {
      return content;
    }

    let linkStyleUrl = publicPath.length > 0 ? `${publicPath}/${cssStylesFilename}` : `./${cssStylesFilename}`;
    let inlineSourceAssetsUrl = publicPath.length > 0 ? `${publicPath}/${DistFolder.STATIC}/` : `./${DistFolder.STATIC}/`;
    let staticFolderUrlPattern = new RegExp(`\.\.\/${DistFolder.STATIC}\/`, 'g');
    let asset = this._compilation.getAsset(cssStylesFilename);
    let source = asset.source.source()
      .trim()
      .replace(/\n/g, '')
      .replace(staticFolderUrlPattern, inlineSourceAssetsUrl);

    content = content.replace(bsi_cx_webpack_plugin_BsiCxWebpackPlugin.CSS_INLINE, source);
    content = content.replace(bsi_cx_webpack_plugin_BsiCxWebpackPlugin.CSS_HREF, linkStyleUrl);

    return content;
  }

  /**
   * @param {string} content
   * @returns {string}
   */
  _handleJavaScriptModules(content) {
    let jsModuleMatches = content.matchAll(bsi_cx_webpack_plugin_BsiCxWebpackPlugin.JS_MODULE);
    let importedModules = [];

    for (const match of jsModuleMatches) {
      content = this._handleFoundJavaScriptModule(content, match, importedModules);
    }

    content = this._injectModuleRuntime(content);

    return content;
  }

  _injectModuleRuntime(content) {
    let publicPath = this._compiler.options.output.publicPath.replace(/\/$/, '');
    let filename = this._getAssetName(bsi_cx_webpack_plugin_BsiCxWebpackPlugin.JS_MODULE_RUNTIME);

    if (filename === undefined) {
      return content;
    }

    let url = publicPath.length > 0 ? `${publicPath}/${filename}` : `./${filename}`;
    let asset = this._compilation.getAsset(filename);
    let source = asset.source.source()
      .trim()
      .replace(/\n/g, '');

    content = content.replace(bsi_cx_webpack_plugin_BsiCxWebpackPlugin.JS_MODULE_RUNTIME_INLINE, source);
    content = content.replace(bsi_cx_webpack_plugin_BsiCxWebpackPlugin.JS_MODULE_RUNTIME_HREF, url);

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
    let moduleAssetRegex = new RegExp(`^${DistFolder.MODULES}\/${module}\-[0-9a-z]+\.js$`);
    let moduleAssetPath = this._getAssetName(moduleAssetRegex);

    if (!moduleAssetPath) {
      throw this._webpackError(
        `Module "${module}" does not exist.`,
        `The module "${module}" does not exist. You need to include it in your modules configuration.`,
        metaInfo.template
      );
    }

    let replacement;

    if (inline) {
      let asset = this._compilation.getAsset(moduleAssetPath);
      let source = asset.source.source();
      replacement = utility_toString(source);
    } else {
      replacement = buildPublicPath(this._config, moduleAssetPath);
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
    let assetRegex = new RegExp(`^(${DistFolder.MODULES}|${DistFolder.VENDORS}|${DistFolder.SHARED})\/.*\.js$`);
    let assetPaths = this._getAssetNames(assetRegex);

    return assetPaths
      .filter(assetPath => !assetPath.startsWith(Constant.BSI_CX_MODULE_RUNTIME_PATH) && importedModules.indexOf(assetPath) === -1)
      .map(assetPath => {
        importedModules.push(assetPath);
        if (inline) {
          let asset = this._compilation.getAsset(assetPath);
          let source = asset.source.source();
          let strSource = utility_toString(source);
          return `<script data-bsi-remove-if="draft">${strSource}</script>`;
        } else {
          let url = buildPublicPath(this._config, assetPath);
          return `<script src="${url}" defer="defer" data-bsi-remove-if="draft"></script>`;
        }
      }).join('');
  }

  /**
   * @param {string} message
   * @param {string} details
   * @param {string|undefined} [location=undefined]
   * @returns {WebpackError}
   */
  _webpackError(message, details, location) {
    let error = new lib_namespaceObject.WebpackError(message);
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
    let relativePath = toPosixPath(external_path_default().relative(contextPath, absolutePath));
    return '.' + (external_path_default()).posix.sep + relativePath;
  }

  /**
   * @param {string} content
   * @returns {string}
   */
  _createContentHash(content) {
    return (0,external_crypto_namespaceObject.createHash)('sha256')
      .update(content)
      .digest('hex')
      .substr(0, bsi_cx_webpack_plugin_BsiCxWebpackPlugin.ELEMENT_FILE_HASH_LENGTH);
  }

  /**
   * @returns {Handlebars}
   */
  _getHandlebarsParser() {
    return external_handlebars_default().create();
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
    return url.replace(`${Constant.BSI_CX_DESIGN_BASE_URL}/`, '');
  }
}

class BsiCxWebpackPlugin {
  /**
   * @type {string}
   */
  static PLUGIN_NAME = 'BsiCxWebpackPlugin';

  /**
   * @type {BuildContext}
   * @private
   */
  _context = undefined;

  /**
   * @param {BuildContext} context
   */
  constructor(context) {
    /**
     * @type {BuildContext}
     * @private
     */
    this._context = context;
  }

  apply(compiler) {
    compiler.hooks.thisCompilation.tap(BsiCxWebpackPlugin.PLUGIN_NAME, compilation => {
      compilation.hooks.processAssets.tap(
        {
          name: BsiCxWebpackPlugin.PLUGIN_NAME,
          stage: lib_namespaceObject.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE
        },
        () => {
          const logger = compilation.getLogger(BsiCxWebpackPlugin.PLUGIN_NAME);
          new bsi_cx_webpack_plugin_BsiCxWebpackPlugin(this._context, compiler, compilation, logger).apply();
        })
    });
  }
};

;// CONCATENATED MODULE: ./src/java-property-file-builder.js
class JavaPropertyFileBuilder {
  constructor() {
    this._properties = [];
  }

  /**
   * @param {string} key
   * @param {string} value
   * @returns {JavaPropertyFileBuilder}
   */
  append(key, value) {
    this._properties.push([key, value]);
    return this;
  }

  /**
   * @param {string} comment
   * @returns {JavaPropertyFileBuilder}
   */
  appendComment(comment) {
    this._properties.push(comment);
    return this;
  }

  /**
   * @param {string} section
   * @returns {JavaPropertyFileBuilder}
   */
  appendCommentSection(section) {
    let border = '#'.repeat(section.length + 4);
    let sectionComment = `# ${section} #`;

    this.appendComment(border);
    this.appendComment(sectionComment);
    this.appendComment(border);

    return this;
  }

  /**
   * @returns {JavaPropertyFileBuilder}
   */
  appendBlank() {
    this._properties.push('');
    return this;
  }

  /**
   * @returns {string}
   */
  build() {
    return this._properties
      .map(line => this._printLine(line))
      .join('\n');
  }

  /**
   * @param {string} line
   * @returns {string}
   */
  _printLine(line) {
    if (line instanceof Array) {
      let [key, value] = line;
      return this._escapeKey(key) + '=' + this._escapeValue(value);
    } else {
      return line;
    }
  }

  /**
   * @param {string} key
   * @returns {string}
   */
  _escapeKey(key) {
    return key;
  }

  /**
   * @param {string} value
   * @returns {string}
   */
  _escapeValue(value) {
    return value;
  }
}

;// CONCATENATED MODULE: ./src/legacy-design-property.js
class LegacyDesignProperty {
  /**
   * @type {string}
   */
  static TEMPLATE_NAME = 'template.name';
  /**
   * @type {string}
   */
  static TEMPLATE_AUTHOR = 'template.author';
  /**
   * @type {string}
   * @private
   */
  static _LABEL = 'label';
  /**
   * @type {string}
   * @private
   */
  static _DESCRIPTION = 'description';
  /**
   * @type {string}
   * @private
   */
  static _GROUP = 'group';
  /**
   * @type {string}
   * @private
   */
  static _ELEMENT = 'element';
  /**
   * @type {string}
   * @private
   */
  static _PARTS = 'parts';
  /**
   * @type {string}
   * @private
   */
  static _ICON = 'icon';
  /**
   * @type {string}
   * @private
   */
  static _STYLES = 'styles';
  /**
   * @type {string}
   * @private
   */
  static _STYLE = 'style';
  /**
   * @type {string}
   * @private
   */
  static _CLASS = 'class';
  /**
   * @type {string}
   * @private
   */
  static _HTML_EDITOR_CONFIG = 'html-editor-config';
  /**
   * @type {string}
   * @private
   */
  static _FEATURES = 'features';
  /**
   * @type {string}
   * @private
   */
  static _TEXT_COLORS = 'text-colors';
  /**
   * @type {string}
   * @private
   */
  static _BACKGROUND_COLORS = 'background-colors';
  /**
   * @type {string}
   * @private
   */
  static _FORMATS = 'formats';
  /**
   * @type {string}
   * @private
   */
  static _FONT_SIZES = 'font-sizes';
  /**
   * @type {string}
   * @private
   */
  static _FONT_SIZE_UNIT = 'font-size-unit';
  /**
   * @type {string}
   * @private
   */
  static _FONT_SIZE_DEFAULT = 'font-size-default';
  /**
   * @type {string}
   * @private
   */
  static _LINE_HEIGHTS = 'line-heights';
  /**
   * @type {string}
   * @private
   */
  static _ENTER = 'enter';

  /**
   * @param {string} group
   * @returns {string}
   */
  static getContentElementGroupLabel(group) {
    return LegacyDesignProperty._GROUP + '.' + group + '.' + LegacyDesignProperty._LABEL;
  }

  /**
   * @param {string} element
   * @returns {string}
   */
  static getContentElementLabel(element) {
    return LegacyDesignProperty._ELEMENT + '.' + element + '.' + LegacyDesignProperty._LABEL;
  }

  /**
   * @param {string} element
   * @returns {string}
   */
  static getContentElementDescription(element) {
    return LegacyDesignProperty._ELEMENT + '.' + element + '.' + LegacyDesignProperty._DESCRIPTION;
  }

  /**
   * @param {string} element
   * @returns {string}
   */
  static getContentElementIcon(element) {
    return LegacyDesignProperty._ELEMENT + '.' + element + '.' + LegacyDesignProperty._ICON;
  }

  /**
   * @param {string} element
   * @returns {string}
   */
  static getContentElementStyles(element) {
    return LegacyDesignProperty._ELEMENT + '.' + element + '.' + LegacyDesignProperty._STYLES;
  }

  /**
   * @param {string} element
   * @param {string} part
   * @param {number} index
   * @returns {string}
   */
  static getContentElementPartLabel(element, part, index) {
    return LegacyDesignProperty._getContentElementPart(element, part, index) + '.' + LegacyDesignProperty._LABEL;
  }

  /**
   * @param {string} element
   * @param {string} part
   * @param {number} index
   * @returns {string}
   */
  static getContentElementPartHtmlEditorConfig(element, part, index) {
    return LegacyDesignProperty._getContentElementPart(element, part, index) + '.' + LegacyDesignProperty._HTML_EDITOR_CONFIG;
  }

  /**
   * @param {string} element
   * @param {string} part
   * @param {number} index
   * @returns {string}
   */
  static _getContentElementPart(element, part, index) {
    return LegacyDesignProperty._ELEMENT + '.' + element + '.' + LegacyDesignProperty._PARTS + '.' + part + '[' + index + ']';
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  static getStyleLabel(name) {
    return LegacyDesignProperty._STYLE + '.' + name + '.' + LegacyDesignProperty._LABEL;
  }

  /**
   * @param {string} name
   * @param {string} cssClass
   * @returns {string}
   */
  static getStyleClassLabel(name, cssClass) {
    return LegacyDesignProperty._STYLE + '.' + name + '.' + LegacyDesignProperty._CLASS + '.' + cssClass + '.' + LegacyDesignProperty._LABEL
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  static getHtmlEditorConfigFeatures(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._FEATURES;
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  static getHtmlEditorConfigTextColors(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._TEXT_COLORS;
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  static getHtmlEditorConfigBackgroundColors(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._BACKGROUND_COLORS;
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  static getHtmlEditorConfigFormats(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._FORMATS;
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  static getHtmlEditorConfigFontSizes(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._FONT_SIZES;
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  static getHtmlEditorConfigFontSizeUnit(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._FONT_SIZE_UNIT;
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  static getHtmlEditorConfigFontSizeDefault(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._FONT_SIZE_DEFAULT;
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  static getHtmlEditorConfigLineHeights(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._LINE_HEIGHTS;
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  static getHtmlEditorConfigEnter(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._ENTER;
  }
}

;// CONCATENATED MODULE: ./src/bsi-cx-webpack-legacy-design-plugin.js











class _BsiCxWebpackLegacyDesignPlugin {
  /**
   * @type {ValidatedBuildConfig}
   * @private
   */
  _config = undefined;
  /**
   * @type {Compiler}
   * @private
   */
  _compiler = undefined;
  /**
   * @type {Compilation}
   * @private
   */
  _compilation = undefined;
  /**
   * @type {WebpackLogger}
   * @private
   */
  _logger = undefined;

  /**
   * @param {ValidatedBuildConfig} config
   * @param {Compiler} compiler
   * @param {Compilation} compilation
   * @param {WebpackLogger} logger
   */
  constructor(config, compiler, compilation, logger) {
    /**
     * @type {ValidatedBuildConfig}
     * @private
     */
    this._config = config;
    /**
     * @type {Compiler}
     * @private
     */
    this._compiler = compiler;
    /**
     * @type {Compilation}
     * @private
     */
    this._compilation = compilation;
    /**
     * @type {WebpackLogger}
     * @private
     */
    this._logger = logger;
  }

  apply() {
    try {
      this._convertToLegacyFormat();
    } catch (error) {
      if (error instanceof lib_namespaceObject.WebpackError) {
        this._compilation.errors.push(error);
      } else {
        this._logger.error(error);
      }
    }
  }

  /**
   * @private
   */
  _convertToLegacyFormat() {
    let designJson = this._getDesignJsonObject();

    this._createAndEmitContentElementsHtml(designJson);
    this._createAndEmitDesignProperties(designJson);

    if (this._mustRemoveDesignJson()) {
      this._removeDesignJson();
    }
  }

  /**
   * @returns {{}}
   * @private
   */
  _getDesignJsonObject() {
    let asset = this._compilation.getAsset(File.DESIGN_JSON);

    if (!asset) {
      throw new Error(`The asset "${File.DESIGN_JSON}" does not exist.`);
    }

    let source = asset.source.source();
    let sourceStr = utility_toString(source);
    let json = JSON.parse(sourceStr);

    if (!json) {
      throw new Error('Unable to parse JSON.');
    }

    return json;
  }

  /**
   * @param {{}} designJson
   * @returns {string}
   * @private
   */
  _createAndEmitContentElementsHtml(designJson) {
    let contentElementGroups = designJson[DesignJsonProperty.CONTENT_ELEMENT_GROUPS];
    let html = contentElementGroups
      .map(group => this._renderContentElementsGroup(group))
      .join('\n');

    let source = new external_webpack_namespaceObject.sources.RawSource(html);

    this._compilation.emitAsset(File.CONTENT_ELEMENTS_HTML, source);
  }

  /**
   * @param {{}} group
   * @returns {string}
   * @private
   */
  _renderContentElementsGroup(group) {
    let contentElements = group[DesignJsonProperty.CONTENT_ELEMENTS];
    let elements = contentElements
      .map(element => this._renderContentElement(element))
      .join('\n');
    let groupId = group[DesignJsonProperty.GROUP_ID];

    return `<div data-bsi-group="${groupId}">\n${elements}\n</div>`;
  }

  /**
   * @param {{}} element
   * @returns {string}
   * @private
   */
  _renderContentElement(element) {
    let asset = this._compilation.getAsset(element[DesignJsonProperty.FILE]);
    let source = asset.source.source();

    return source.trim();
  }

  /**
   * @param {{}} designJson
   * @private
   */
  _createAndEmitDesignProperties(designJson) {
    let properties = new JavaPropertyFileBuilder();

    this._appendMetaInfo(designJson, properties);
    this._appendStyles(designJson, properties);
    this._appendHtmlEditorConfigs(designJson, properties);
    this._appendContentElementGroups(designJson, properties);
    this._appendContentElements(designJson, properties);

    let code = properties.build();
    let source = new external_webpack_namespaceObject.sources.RawSource(code);

    this._compilation.emitAsset(File.DESIGN_PROPERTIES, source);
  }

  /**
   * @param {{}} designJson
   * @param {JavaPropertyFileBuilder} properties
   * @private
   */
  _appendMetaInfo(designJson, properties) {
    let title = designJson[DesignJsonProperty.TITLE];
    let author = designJson[DesignJsonProperty.AUTHOR];

    properties.appendCommentSection('Template');

    properties.append(LegacyDesignProperty.TEMPLATE_NAME, title);
    properties.append(LegacyDesignProperty.TEMPLATE_AUTHOR, author);

    properties.appendBlank();
  }

  /**
   * @param {{}} designJson
   * @param {JavaPropertyFileBuilder} properties
   * @private
   */
  _appendStyles(designJson, properties) {
    let styleConfigs = designJson[DesignJsonProperty.STYLE_CONFIGS] || {};

    properties.appendCommentSection('Content Element Styles');

    for (let [style, config] of Object.entries(styleConfigs)) {
      this._appendStyleConfig(style, config, properties);
    }
  }

  /**
   * @param {string} style
   * @param {{}} config
   * @param {JavaPropertyFileBuilder} properties
   * @private
   */
  _appendStyleConfig(style, config, properties) {
    /**
     * @type {{}[]}
     */
    let cssClasses = config[DesignJsonProperty.CSS_CLASSES] || [];

    this._appendStyleConfigLabel(style, config, properties);
    cssClasses.forEach(cssClass => this._appendStyleConfigCssClass(style, cssClass, properties));

    properties.appendBlank();
  }

  /**
   * @param {string} style
   * @param {{}} config
   * @param {JavaPropertyFileBuilder} properties
   * @private
   */
  _appendStyleConfigLabel(style, config, properties) {
    let key = LegacyDesignProperty.getStyleLabel(style);
    let value = config[DesignJsonProperty.LABEL];
    properties.append(key, value);
  }

  /**
   * @param {string} style
   * @param {{}} styleConfig
   * @param {JavaPropertyFileBuilder} properties
   * @private
   */
  _appendStyleConfigCssClass(style, styleConfig, properties) {
    let cssClass = styleConfig[DesignJsonProperty.CSS_CLASS];
    let key = LegacyDesignProperty.getStyleClassLabel(style, cssClass);
    let value = styleConfig[DesignJsonProperty.LABEL];
    properties.append(key, value);
  }

  /**
   * @param {{}} designJson
   * @param {JavaPropertyFileBuilder} properties
   * @private
   */
  _appendHtmlEditorConfigs(designJson, properties) {
    let editorConfigs = designJson[DesignJsonProperty.HTML_EDITOR_CONFIGS] || {};

    properties.appendCommentSection('HTML Editor Configs');

    for (let [name, config] of Object.entries(editorConfigs)) {
      this._appendHtmlEditorConfig(name, config, properties);
    }
  }

  /**
   * @param {string} name
   * @param {{}} config
   * @param {JavaPropertyFileBuilder} properties
   * @private
   */
  _appendHtmlEditorConfig(name, config, properties) {
    this._appendHtmlEditorConfigIfDefined(name, config, DesignJsonProperty.FEATURES, LegacyDesignProperty.getHtmlEditorConfigFeatures, scalarArrayToList, properties);
    this._appendHtmlEditorConfigIfDefined(name, config, DesignJsonProperty.TEXT_COLORS, LegacyDesignProperty.getHtmlEditorConfigTextColors, scalarArrayToList, properties);
    this._appendHtmlEditorConfigIfDefined(name, config, DesignJsonProperty.BACKGROUND_COLORS, LegacyDesignProperty.getHtmlEditorConfigBackgroundColors, scalarArrayToList, properties);
    this._appendHtmlEditorConfigIfDefined(name, config, DesignJsonProperty.FORMATS, LegacyDesignProperty.getHtmlEditorConfigFormats, scalarArrayToList, properties);
    this._appendHtmlEditorConfigIfDefined(name, config, DesignJsonProperty.FONT_SIZES, LegacyDesignProperty.getHtmlEditorConfigFontSizes, scalarArrayToList, properties);
    this._appendHtmlEditorConfigIfDefined(name, config, DesignJsonProperty.FONT_SIZE_UNIT, LegacyDesignProperty.getHtmlEditorConfigFontSizeUnit, identity, properties);
    this._appendHtmlEditorConfigIfDefined(name, config, DesignJsonProperty.FONT_SIZE_DEFAULT, LegacyDesignProperty.getHtmlEditorConfigFontSizeDefault, identity, properties);
    this._appendHtmlEditorConfigIfDefined(name, config, DesignJsonProperty.LINE_HEIGHTS, LegacyDesignProperty.getHtmlEditorConfigLineHeights, scalarArrayToList, properties);
    this._appendHtmlEditorConfigIfDefined(name, config, DesignJsonProperty.ENTER_MODE, LegacyDesignProperty.getHtmlEditorConfigEnter, identity, properties);

    properties.appendBlank();
  }

  /**
   * @param {string} configName
   * @param {{}} config
   * @param {string} property
   * @param {function(string):string} labelGenerator
   * @param {function(*):string|number} valueExtractor
   * @param {JavaPropertyFileBuilder} properties
   * @private
   */
  _appendHtmlEditorConfigIfDefined(configName, config, property, labelGenerator, valueExtractor, properties) {
    if (typeof config[property] === 'undefined') {
      return;
    }

    let key = labelGenerator(configName);
    let rawValue = config[property];
    let value = valueExtractor(rawValue);

    properties.append(key, value);
  }

  /**
   * @param {{}} designJson
   * @param {JavaPropertyFileBuilder} properties
   * @private
   */
  _appendContentElementGroups(designJson, properties) {
    let groups = designJson[DesignJsonProperty.CONTENT_ELEMENT_GROUPS];

    properties.appendCommentSection('Content Element Groups');

    groups.forEach(group => this._appendContentElementGroup(group, properties));

    properties.appendBlank();
  }

  /**
   * @param {{}} group
   * @param {JavaPropertyFileBuilder} properties
   * @private
   */
  _appendContentElementGroup(group, properties) {
    let groupId = group[DesignJsonProperty.GROUP_ID];
    let key = LegacyDesignProperty.getContentElementGroupLabel(groupId);
    let value = group[DesignJsonProperty.LABEL];

    properties.append(key, value);
  }

  /**
   * @param {{}} designJson
   * @param {JavaPropertyFileBuilder} properties
   * @private
   */
  _appendContentElements(designJson, properties) {
    let groups = designJson[DesignJsonProperty.CONTENT_ELEMENT_GROUPS];

    properties.appendCommentSection('Content Elements');

    groups.forEach(group => this._appendContentElementsFromGroup(group, properties));
  }

  /**
   * @param {{}} group
   * @param {JavaPropertyFileBuilder} properties
   * @private
   */
  _appendContentElementsFromGroup(group, properties) {
    let elements = group[DesignJsonProperty.CONTENT_ELEMENTS];

    elements.forEach(element => this._appendContentElement(element, properties));
  }

  /**
   * @param {{}} element
   * @param {JavaPropertyFileBuilder} properties
   * @private
   */
  _appendContentElement(element, properties) {
    let elementId = element[DesignJsonProperty.ELEMENT_ID];
    let parts = element[DesignJsonProperty.PARTS];
    let indexMap = new Map();

    this._appendContentElementPropertyIfDefined(element, elementId, DesignJsonProperty.LABEL, LegacyDesignProperty.getContentElementLabel, identity, properties);
    this._appendContentElementPropertyIfDefined(element, elementId, DesignJsonProperty.DESCRIPTION, LegacyDesignProperty.getContentElementDescription, identity, properties);
    this._appendContentElementPropertyIfDefined(element, elementId, DesignJsonProperty.ICON, LegacyDesignProperty.getContentElementIcon, identity, properties);
    this._appendContentElementPropertyIfDefined(element, elementId, DesignJsonProperty.STYLE_CONFIGS, LegacyDesignProperty.getContentElementStyles, scalarArrayToList, properties);

    parts.forEach(part => this._appendContentElementPart(part, indexMap, elementId, properties));

    properties.appendBlank();
  }

  /**
   * @param {{}} element
   * @param {string} elementId
   * @param {string} property
   * @param {function(string):string} labelGenerator
   * @param {function(*):string|number} valueExtractor
   * @param {JavaPropertyFileBuilder} properties
   * @private
   */
  _appendContentElementPropertyIfDefined(element, elementId, property, labelGenerator, valueExtractor, properties) {
    if (typeof element[property] === 'undefined') {
      return;
    }

    let key = labelGenerator(elementId);
    let rawValue = element[property];
    let value = valueExtractor(rawValue);

    properties.append(key, value);
  }

  /**
   * @param {{}} part
   * @param {Map<string,number>} indexMap
   * @param {string} elementId
   * @param {JavaPropertyFileBuilder} properties
   * @private
   */
  _appendContentElementPart(part, indexMap, elementId, properties) {
    let type = part[DesignJsonProperty.PART_ID];
    let index = indexMap.get(type) || 0;

    this._appendContentElementPartPropertyIfDefined(part, DesignJsonProperty.LABEL, elementId, type, index, LegacyDesignProperty.getContentElementPartLabel, identity, properties);
    this._appendContentElementPartPropertyIfDefined(part, DesignJsonProperty.HTML_EDITOR_CONFIG, elementId, type, index, LegacyDesignProperty.getContentElementPartHtmlEditorConfig, identity, properties);

    indexMap.set(type, index + 1);
  }

  /**
   * @param {{}} part
   * @param {string} property
   * @param {string} elementId
   * @param {string} type
   * @param {number} index
   * @param {function(string,string,number):string} labelGenerator
   * @param {function(*):string|number} valueExtractor
   * @param {JavaPropertyFileBuilder} properties
   * @private
   */
  _appendContentElementPartPropertyIfDefined(part, property, elementId, type, index, labelGenerator, valueExtractor, properties) {
    if (typeof part[property] === 'undefined') {
      return;
    }

    let key = labelGenerator(elementId, type, index);
    let rawValue = part[property];
    let value = valueExtractor(rawValue);

    properties.append(key, value);
  }

  /**
   * @returns {boolean}
   * @private
   */
  _mustRemoveDesignJson() {
    return this._config.designType !== WEBSITE;
  }

  /**
   * @private
   */
  _removeDesignJson() {
    this._compilation.deleteAsset(File.DESIGN_JSON);
  }
}

class BsiCxWebpackLegacyDesignPlugin {
  /**
   * @type {string}
   */
  static PLUGIN_NAME = 'BsiCxWebpackLegacyDesignPlugin';

  /**
   * @type {ValidatedBuildConfig}
   * @private
   */
  _config = undefined;

  /**
   * @param {ValidatedBuildConfig} config
   */
  constructor(config) {
    /**
     * @type {ValidatedBuildConfig}
     * @private
     */
    this._config = config;
  }

  apply(compiler) {
    compiler.hooks.thisCompilation.tap(BsiCxWebpackLegacyDesignPlugin.PLUGIN_NAME, compilation => {
      compilation.hooks.processAssets.tap(
        {
          name: BsiCxWebpackLegacyDesignPlugin.PLUGIN_NAME,
          stage: lib_namespaceObject.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE
        },
        () => {
          const logger = compilation.getLogger(BsiCxWebpackLegacyDesignPlugin.PLUGIN_NAME);
          new _BsiCxWebpackLegacyDesignPlugin(this._config, compiler, compilation, logger).apply();
        })
    });
  }
};

;// CONCATENATED MODULE: external "fast-glob"
const external_fast_glob_namespaceObject = require("fast-glob");
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
    /**
     * @type {string}
     * @private
     */
    this._name = name;
    /**
     * @type {string}
     * @private
     */
    this._version = version;
    /**
     * @type {boolean}
     * @private
     */
    this._enabled = !!enabled;
    /**
     * @type {string}
     * @private
     */
    this._prodZipFileName = getZipArchiveName(name, version);
    /**
     * @type {string}
     * @private
     */
    this._devZipFileName = getZipArchiveName(name, version, 'dev');
  }

  /**
   * @param {Compilation} compilation
   * @param {Asset} asset
   */
  _handleZipAsset(compilation, asset) {
    let oldAssetName = asset.name;
    let source = asset.source;
    /**
     * @type {Buffer}
     */
    let sourceBuffer = source.buffer();
    let hash = (0,external_crypto_namespaceObject.createHash)('sha256')
      .update(sourceBuffer)
      .digest('hex')
      .substr(0, 5);
    let newAssetName = oldAssetName.replace(/\.zip$/, `-${hash}.zip`);

    compilation.deleteAsset(oldAssetName);
    compilation.emitAsset(newAssetName, source);
  }

  /**
   * @param {Compiler} compiler
   * @private
   */
  _removeOldZipAssets(compiler) {
    let pattern = getZipArchiveName(this._name, this._version, '*');

    let zipFilesToRemove = (0,external_fast_glob_namespaceObject.sync)(pattern, {
      cwd: compiler.outputPath,
      absolute: true,
      onlyFiles: true
    });

    zipFilesToRemove.forEach(external_fs_namespaceObject.unlinkSync);
  }

  apply(compiler) {
    compiler.hooks.thisCompilation.tap(BsiCxWebpackZipHashPlugin.PLUGIN_NAME, compilation => {
      compilation.hooks.processAssets.tap(
        {
          name: BsiCxWebpackZipHashPlugin.PLUGIN_NAME,
          stage: lib_namespaceObject.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_TRANSFER
        },
        () => {
          if (!this._enabled) {
            return;
          }

          this._removeOldZipAssets(compiler);

          Object.keys(compilation.assets)
            .filter(name => name === this._prodZipFileName || name === this._devZipFileName)
            .map(name => compilation.getAsset(name))
            .forEach(asset => this._handleZipAsset(compilation, asset));
        })
    });
  }
};

;// CONCATENATED MODULE: ./src/bsi-cx-twig-context-webpack-plugin.js
class BsiCxTwigContextWebpackPlugin {
  /**
   * @type {string}
   */
  static PLUGIN_NAME = 'BsiCxTwigContextWebpackPlugin';

  /**
   * @type {PropertyContext}
   * @private
   */
  _propertyContext = undefined;

  /**
   * @param {PropertyContext} propertyContext
   */
  constructor(propertyContext) {
    /**
     * @type {PropertyContext}
     * @private
     */
    this._propertyContext = propertyContext;
  }

  apply(compiler) {
    compiler.hooks.thisCompilation.tap(BsiCxTwigContextWebpackPlugin.PLUGIN_NAME, compilation => {
      this._propertyContext.forcePropertiesReload();
      compilation.fileDependencies.addAll(this._propertyContext.propertiesModule.dependencies); // FIXME: add file paths from CssUrl to dependencies
    });
  }
}

;// CONCATENATED MODULE: ./src/bsi-less-property-plugin.js


class BsiLessPropertyPlugin extends AbstractPropertyPlugin {
  /**
   * @returns {number[]}
   */
  get minVersion() {
    return [3, 0, 0];
  }

  /**
   * @param {*} propertyNode
   * @param {*} fallback
   * @returns {*}
   */
  getProperty(propertyNode, fallback) {
    if (!propertyNode) {
      throw new Error('Property argument is required.');
    }

    if (typeof propertyNode.value === 'undefined') {
      throw new Error('Property must be instanceof Node and have a value attribute.');
    }

    if (typeof propertyNode.value !== 'string') {
      throw new Error('Property must be a string.');
    }

    /**
     * @type {string}
     */
    let property = propertyNode.value;

    let value = super.getProperty(property, fallback);

    return typeof value.getLessNode === 'function' ? value.getLessNode() : value;
  }

  /**
   * @param lessInstance
   * @param pluginManager
   * @param functions
   */
  install(lessInstance, pluginManager, functions) {
    functions.add('bsiProperty', (property, fallback) => this.getProperty(property, fallback));
  }
}

;// CONCATENATED MODULE: external "module"
const external_module_namespaceObject = require("module");
var external_module_default = /*#__PURE__*/__webpack_require__.n(external_module_namespaceObject);
;// CONCATENATED MODULE: ./src/module-loader.js


class ModuleLoader {
  static NODE_MODULES = /[\\/]node_modules[\\/]/;
  /**
   * @type {string}
   * @private
   */
  _modulePath = undefined;
  /**
   * @type {Set<string>}
   * @private
   */
  _dependencies = new Set();

  /**
   * @param {string} modulePath
   */
  constructor(modulePath) {
    /**
     * @type {string}
     * @private
     */
    this._modulePath = modulePath;
  }

  /**
   * @returns {string}
   */
  get modulePath() {
    return this._modulePath;
  }

  /**
   * @returns {Set<string>}
   */
  get dependencies() {
    return this._dependencies;
  }

  /**
   *
   * @returns {Module}
   */
  load() {
    let moduleRequire = external_module_default().createRequire(this.modulePath);
    let module = moduleRequire(this.modulePath);

    this._dependencies.clear();

    this._deleteRelatedModuleCache(this._dependencies, moduleRequire.cache, this.modulePath, 0);

    return module;
  }

  /**
   * @param {Set<string>} visited,
   * @param {Dict<NodeModule>} cache
   * @param {string} id
   * @param {number} level
   * @private
   */
  _deleteRelatedModuleCache(visited, cache, id, level) {
    if (ModuleLoader.NODE_MODULES.test(id) || visited.has(id)) {
      return;
    }

    /**
     * @type {NodeModule | undefined}
     */
    let module = cache[id];

    if (!!module) {
      visited.add(id);
      module.children.forEach(child => this._deleteRelatedModuleCache(visited, cache, child.id, level + 1));
      delete cache[id];
    }
  }
}

;// CONCATENATED MODULE: ./src/property-context.js


class PropertyContext {
  /**
   * @type {string|undefined}
   * @private
   */
  _propertiesFilePath = undefined;
  /**
   * @type {ModuleLoader}
   * @private
   */
  _propertiesModule = undefined;
  /**
   * @type {{}}
   * @private
   */
  _properties = {};
  /**
   * @type {{}}
   * @private
   */
  _proxy = undefined;
  /**
   * @type {boolean}
   * @private
   */
  _propertiesReloadRequired = true;

  /**
   * @param {string|undefined} propertiesFilePath
   */
  constructor(propertiesFilePath) {
    /**
     * @type {string|undefined}
     * @private
     */
    this._propertiesFilePath = propertiesFilePath;
    /**
     * @type {ModuleLoader}
     * @private
     */
    this._propertiesModule = new ModuleLoader(propertiesFilePath);
    /**
     * @type {{}}
     * @private
     */
    this._proxy = this._getPropertiesProxy();

    this._reloadPropertiesIfRequired();
  }

  /**
   * @returns {string|undefined}
   */
  get propertiesFilePath() {
    return this._propertiesFilePath;
  }

  /**
   * @returns {ModuleLoader}
   */
  get propertiesModule() {
    return this._propertiesModule;
  }

  /**
   * Get the original properties object without the proxy.
   *
   * @returns {{}}
   */
  get properties() {
    return this._properties;
  }

  /**
   * Get the properties object, guarded by a proxy.
   *
   * @returns {{}}
   */
  get proxy() {
    return this._proxy;
  }

  /**
   * @returns {boolean}
   */
  get propertiesReloadRequired() {
    return this._propertiesReloadRequired;
  }

  forcePropertiesReload() {
    this._propertiesReloadRequired = true;
  }

  /**
   * @returns {boolean}
   */
  hasPropertiesFilePath() {
    return !!this._propertiesFilePath;
  }

  /**
   * @returns {{}}
   * @private
   */
  _getPropertiesProxy() {
    let handler = this._getProxyHandler();

    return new Proxy(this._properties, handler);
  }

  /**
   * @returns {{}}
   * @private
   */
  _getProxyHandler() {
    return {
      get: this._get.bind(this),
      set: () => void (0),
      deleteProperty: () => void (0),
      defineProperty: () => void (0)
    };
  }

  /**
   * @param {{}} target
   * @param {string} property
   * @returns {*}
   * @private
   */
  _get(target, property) {
    this._reloadPropertiesIfRequired();
    return target[property];
  }

  /**
   * @private
   */
  _reloadPropertiesIfRequired() {
    if (!this._propertiesReloadRequired) {
      return;
    }

    if (this.hasPropertiesFilePath()) {
      let loadedProperties = this._propertiesModule.load();

      Object.assign(this._properties, loadedProperties);
    }

    this._propertiesReloadRequired = false;
  }
}

;// CONCATENATED MODULE: external "sass"
const external_sass_namespaceObject = require("sass");
var external_sass_default = /*#__PURE__*/__webpack_require__.n(external_sass_namespaceObject);
;// CONCATENATED MODULE: external "less/lib/less/tree/color"
const color_namespaceObject = require("less/lib/less/tree/color");
var color_default = /*#__PURE__*/__webpack_require__.n(color_namespaceObject);
;// CONCATENATED MODULE: external "less/lib/less/data/colors"
const colors_namespaceObject = require("less/lib/less/data/colors");
var colors_default = /*#__PURE__*/__webpack_require__.n(colors_namespaceObject);
;// CONCATENATED MODULE: ./src/css/abstract-css-property.js
class AbstractCssProperty {
  /**
   * @returns {*}
   * @abstract
   */
  getLessNode() {
    throw new Error('not implemented');
  }

  /**
   * @returns {*}
   * @abstract
   */
  getSassObject() {
    throw new Error('not implemented');
  }

  /**
   * Will be used in Twig files.
   *
   * @returns {string}
   * @abstract
   */
  toString() {
    throw new Error('not implemented');
  }

  /**
   * Will be used inside JS files to generate the design.json file.
   *
   * @returns {number|string|undefined}
   */
  toJSON() {
    return this.toString();
  }

  /**
   * @param {*} value
   * @returns {function(*):AbstractCssProperty|undefined}
   */
  static getParser(value) {
    throw new Error('not implemented');
  }
}

;// CONCATENATED MODULE: ./src/css/css-color.js






class CssColor extends AbstractCssProperty {
  /**
   * @type {RegExp}
   */
  static RGBA = /^rgb[a]?\(([0-9.,\W]+)\)$/i;
  /**
   * @type {RegExp}
   */
  static HEX = /^#[0-9a-f]+$/i;
  /**
   * @type {{}}
   */
  static COLORS = Object.assign({}, (colors_default()), {transparent: '#00000000'});

  /**
   * @type {number}
   * @private
   */
  _red = 0;
  /**
   * @type {number}
   * @private
   */
  _green = 0;
  /**
   * @type {number}
   * @private
   */
  _blue = 0;
  /**
   * @type {number}
   * @private
   */
  _alpha = 255;

  /**
   * @param {number} red
   * @param {number} green
   * @param {number} blue
   * @param {number} alpha
   */
  constructor(red, green, blue, alpha) {
    super();
    /**
     * @type {number}
     * @private
     */
    this._red = this._assertColor(red);
    /**
     * @type {number}
     * @private
     */
    this._green = this._assertColor(green);
    /**
     * @type {number}
     * @private
     */
    this._blue = this._assertColor(blue);
    /**
     * @type {number}
     * @private
     */
    this._alpha = this._assertColor(alpha);
  }

  /**
   * @returns {number}
   */
  get red() {
    return this._red;
  }

  /**
   * @returns {number}
   */
  get green() {
    return this._green;
  }

  /**
   * @returns {number}
   */
  get blue() {
    return this._blue;
  }

  /**
   * @returns {number}
   */
  get alpha() {
    return this._alpha;
  }

  /**
   * @returns {string}
   */
  get hex() {
    return this._toHex();
  }

  /**
   * @returns {string}
   */
  get rgb() {
    return this._toRgb();
  }

  /**
   * @returns {string}
   */
  get rgba() {
    return this._toRgba();
  }

  /**
   * @returns {Color}
   */
  getLessNode() {
    let rgb = [this.red, this.green, this.blue];
    let alpha = this.alpha / 255;

    // noinspection JSValidateTypes
    return new (color_default())(rgb, alpha);
  }

  /**
   * @returns {*}
   */
  getSassObject() {
    // noinspection JSUnresolvedVariable
    return new (external_sass_default()).types.Color(this.red, this.green, this.blue, this.alpha);
  }

  toString() {
    return this.hex;
  }

  /**
   * @param {number} color
   * @returns {number}
   * @private
   */
  _assertColor(color) {
    if (Number.isNaN(color) || color < 0 || color > 255) {
      throw new Error('Color value must be >= 0 and <= 255.');
    }

    return color;
  }

  /**
   * @param {number|undefined} [color=undefined]
   * @returns {string}
   * @private
   */
  _toHex(color) {
    if (color === undefined) {
      let channels = [
        this._toHex(this.red),
        this._toHex(this.green),
        this._toHex(this.blue)
      ];
      // hex channel is only required if alpha is lower than 255 (omit adding FF)
      if (this.alpha < 255) {
        channels.push(this._toHex(this.alpha));
      }
      return '#' + channels.join('');
    }

    return color
      .toString(16)
      .padStart(2, '0');
  }

  /**
   * @returns {string}
   * @private
   */
  _toRgb() {
    return `rgb(${this.red},${this.green},${this.blue})`;
  }

  /**
   * @returns {string}
   * @private
   */
  _toRgba() {
    return `rgba(${this.red},${this.green},${this.blue},${this.alpha / 255})`;
  }

  /**
   * @param {string} hex
   * @returns {CssColor}
   */
  static fromHex(hex) {
    let color = hex.replace(/^#/, '');
    let rgba = [255, 255, 255, 255];

    if (color.length >= 6) {
      color.match(/.{2}/g).map(function (channel, index) {
        rgba[index] = parseInt(channel, 16);
      });
    } else {
      color.split('').map(function (channel, index) {
        rgba[index] = parseInt(channel + channel, 16);
      });
    }

    return new CssColor(...rgba);
  }

  /**
   * @param {number} red
   * @param {number} green
   * @param {number} blue
   * @param {number} [alpha=1]
   */
  static fromRGB(red, green, blue, alpha) {
    return new CssColor(red, green, blue, (alpha ?? 1) * 255);
  }

  /**
   * @param {string} str
   * @returns {CssColor}
   */
  static fromRGBString(str) {
    let match = CssColor.RGBA.exec(str);
    let [red, green, blue, alpha] = match[1]
      .split(',')
      .map(channel => parseInt(channel));

    return new CssColor(red ?? 0, green ?? 0, blue ?? 0, (alpha ?? 1) * 255);
  }

  /**
   * @param {string} color
   * @returns {CssColor}
   */
  static fromKeyword(color) {
    if (CssColor.COLORS.hasOwnProperty(color)) {
      return CssColor.fromHex((colors_default())[color]);
    } else {
      throw new Error(`Unknown color keyword: ${color}`);
    }
  }

  /**
   * @param {*} value
   * @returns {function(*):CssColor|undefined}
   */
  static getParser(value) {
    switch (true) {
      case CssColor.RGBA.test(value):
        return CssColor.fromRGBString;
      case CssColor.HEX.test(value):
        return CssColor.fromHex;
      case CssColor.COLORS.hasOwnProperty(value):
        return CssColor.fromKeyword;
      default:
        return undefined;
    }
  }
}

;// CONCATENATED MODULE: external "less/lib/less/tree/dimension"
const dimension_namespaceObject = require("less/lib/less/tree/dimension");
var dimension_default = /*#__PURE__*/__webpack_require__.n(dimension_namespaceObject);
;// CONCATENATED MODULE: ./src/css/css-dimension.js





class CssDimension extends AbstractCssProperty {
  /**
   * @type {RegExp}
   */
  static VALUE_UNIT = /^([0-9,.]+)(px|em|ex|ch|rem|in|cm|mm|pc|pt|vw|vh|vmin|vmax|%)?$/i;

  /**
   * @type {number}
   * @private
   */
  _value = 0;
  /**
   * @type {string|undefined}
   * @private
   */
  _unit = undefined;

  /**
   * @param {number} value
   * @param {string|undefined} [unit=undefined]
   */
  constructor(value, unit) {
    super();
    /**
     * @type {number}
     * @private
     */
    this._value = value;
    /**
     * @type {string|undefined}
     * @private
     */
    this._unit = unit;
  }

  /**
   * @returns {number}
   */
  get value() {
    return this._value;
  }

  /**
   * @returns {string|undefined}
   */
  get unit() {
    return this._unit;
  }

  /**
   * @returns {*}
   */
  getLessNode() {
    // noinspection JSValidateTypes
    return new (dimension_default())(this.value, this.unit);
  }

  /**
   * @returns {*}
   */
  getSassObject() {
    // noinspection JSUnresolvedVariable
    return new (external_sass_default()).types.Number(this.value, this.unit);
  }

  toString() {
    return `${this.value}${this.unit}`;
  }

  static fromString(str) {
    let match = CssDimension.VALUE_UNIT.exec(str);
    let value = parseFloat(match[1]);
    let unit = match[2];

    return new CssDimension(value, unit);
  }

  /**
   * @param {number} num
   * @returns {CssDimension}
   */
  static fromNumber(num) {
    return new CssDimension(num);
  }

  /**
   * @param {*} value
   * @returns {function(*):CssDimension|undefined}
   */
  static getParser(value) {
    switch (true) {
      case CssDimension.VALUE_UNIT.test(value):
        return CssDimension.fromString;
      case typeof value === 'number':
        return CssDimension.fromNumber;
      default:
        return undefined;
    }
  }
}

;// CONCATENATED MODULE: ./src/css/css-raw.js




class CssRaw extends AbstractCssProperty {
  /**
   * @type {*}
   * @private
   */
  _value = undefined;

  /**
   * @param {*} value
   */
  constructor(value) {
    super();
    /**
     * @type {*}
     * @private
     */
    this._value = value;
  }

  /**
   * @returns {*}
   */
  get value() {
    return this._value;
  }

  /**
   * @returns {*}
   */
  getLessNode() {
    return this.value;
  }

  /**
   * @returns {*}
   */
  getSassObject() {
    // noinspection JSUnresolvedVariable
    return new (external_sass_default()).types.String(this.value);
  }

  /**
   * @returns {string}
   */
  toString() {
    return `${this.value}`;
  }

  /**
   * @param {*} value
   * @returns {CssRaw}
   */
  static fromAny(value) {
    return new CssRaw(value);
  }

  /**
   * @param {*} value
   * @returns {function(*): CssRaw}
   */
  static getParser(value) {
    return CssRaw.fromAny;
  }
}

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

;// CONCATENATED MODULE: ./src/css/css-url.js





class CssUrl extends AbstractCssProperty {
  /**
   * @type {string}
   * @private
   */
  _url = undefined;
  /**
   * @type {boolean}
   * @private
   */
  _inline = undefined;

  /**
   * @param {string} url
   * @param {boolean} [inline=false]
   */
  constructor(url, inline) {
    super();
    /**
     * @type {string}
     * @private
     */
    this._url = url;
    /**
     * @type {boolean}
     * @private
     */
    this._inline = !!inline;
  }

  /**
   * @returns {string}
   */
  get rawUrl() {
    return this._url;
  }

  /**
   * @returns {string}
   */
  get externalUrl() {
    return this.rawUrl;
  }

  /**
   * @returns {string}
   */
  get inlineUrl() {
    return this._getInlineUrl();
  }

  /**
   * @returns {string}
   */
  get url() {
    return this.inline ? this.inlineUrl : this.rawUrl;
  }

  /**
   * @returns {string}
   */
  get ref() {
    return this._getRef(this.url);
  }

  /**
   * @returns {string}
   */
  get inlineRef() {
    return this._getRef(this.inlineUrl);
  }

  /**
   * @returns {string}
   */
  get externalRef() {
    return this._getRef(this.rawUrl);
  }

  /**
   * @returns {string}
   */
  get css() {
    return this._getCss(this.url);
  }

  /**
   * @returns {string}
   */
  get inlineCss() {
    return this._getCss(this.inlineUrl);
  }

  /**
   * @returns {string}
   */
  get inlineRefCss() {
    return this._getCss(this.inlineRef);
  }

  /**
   * @returns {string}
   */
  get externalCss() {
    return this._getCss(this.rawUrl);
  }

  /**
   * @returns {string}
   */
  get externalRefCss() {
    return this._getCss(this.externalRef);
  }

  /**
   * @returns {boolean}
   */
  get inline() {
    return this._inline;
  }

  /**
   * @returns {*}
   */
  getLessNode() {
    return this.css;
  }

  /**
   * @returns {*}
   */
  getSassObject() {
    return new (external_sass_default()).types.String(this.css);
  }

  /**
   * @returns {string}
   */
  toString() {
    return `url(${this.ref})`;
  }

  /**
   * @returns {string}
   * @private
   */
  _getInlineUrl() {
    return `${this.rawUrl}?${QueryConstant.INLINE}`; // FIXME: care about already applied query strings
  }

  /**
   * @param {string} url
   * @returns {string}
   * @private
   */
  _getRef(url) {
    return `@ref(${url})`;
  }

  /**
   * @param {string} url
   * @returns {string}
   * @private
   */
  _getCss(url) {
    return `url(${url})`;
  }

  /**
   * @param {string|number} value
   * @returns {undefined}
   */
  static getParser(value) {
    return undefined;
  }
}

;// CONCATENATED MODULE: ./src/css/css-bool.js




class CssBool extends AbstractCssProperty {
  /**
   * @type {boolean}
   * @private
   */
  _value = undefined;

  /**
   * @param {boolean} value
   */
  constructor(value) {
    super();
    /**
     * @type {boolean}
     * @private
     */
    this._value = value;
  }

  /**
   * @returns {boolean}
   */
  get value() {
    return this._value;
  }

  /**
   * @returns {*}
   */
  getLessNode() {
    return this.value;
  }

  /**
   * @returns {*}
   */
  getSassObject() {
    return !!this.value ? (external_sass_default()).types.Boolean.TRUE : (external_sass_default()).types.Boolean.FALSE;
  }

  /**
   * @returns {string}
   */
  toString() {
    return JSON.stringify(this.value);
  }

  /**
   * @param {boolean} value
   * @returns {CssBool}
   */
  static fromBoolean(value) {
    return new CssBool(!!value);
  }

  /**
   * @param {*} value
   * @returns {(function(*): CssBool)|undefined}
   */
  static getParser(value) {
    switch (true) {
      case typeof value === 'boolean' || value instanceof Boolean:
        return CssBool.fromBoolean;
      default:
        return undefined;
    }
  }
}

;// CONCATENATED MODULE: ./src/css/css-property-resolver.js






/** @typedef {import('./abstract-css-property').default} AbstractCssProperty */

class CssPropertyResolver {
  /**
   * @type {Map<string|number, AbstractCssProperty>}
   * @private
   */
  _cache = new Map();

  clearCache() {
    this._cache.clear();
  }

  /**
   * @template T
   * @param {T} value
   * @returns {AbstractCssProperty|T}
   */
  resolve(value) {
    if (typeof value.getLessNode === 'function') {
      return value;
    }

    let resolvedProperty = this._cache.get(value);

    if (!resolvedProperty) {
      resolvedProperty = this._createProperty(value);

      this._cache.set(value, resolvedProperty);
    }

    return resolvedProperty;
  }

  /**
   * @param {string|number} value
   * @returns {AbstractCssProperty}
   * @private
   */
  _createProperty(value) {
    /**
     * @type {AbstractCssProperty[]}
     */
    let availablePropertyClasses = [
      CssColor,
      CssDimension,
      CssBool,
      CssUrl,
      CssRaw
    ];

    for (let propertyClass of availablePropertyClasses) {
      /**
       * @type {(function(string): AbstractCssProperty)|undefined}
       */
      let parser = propertyClass.getParser(value);
      if (!!parser) {
        return parser(value);
      }
    }

    throw new Error(`Can not create property from "${value}"`);
  }
}

;// CONCATENATED MODULE: ./src/build-context.js



class BuildContext {
  /**
   * @type {ValidatedBuildConfig}
   * @private
   */
  _config = undefined;
  /**
   * @type {PropertyContext}
   * @private
   */
  _properties = undefined;
  /**
   * @type {CssPropertyResolver}
   * @private
   */
  _cssPropertyResolver = new CssPropertyResolver();

  /**
   * @param {ValidatedBuildConfig} config
   */
  constructor(config) {
    /**
     * @type {ValidatedBuildConfig}
     * @private
     */
    this._config = config;
    /**
     * @type {PropertyContext}
     * @private
     */
    this._properties = new PropertyContext(config.propertiesFilePath);
  }

  /**
   * @returns {ValidatedBuildConfig}
   */
  get config() {
    return this._config;
  }

  /**
   * @returns {PropertyContext}
   */
  get properties() {
    return this._properties;
  }

  /**
   * @returns {CssPropertyResolver}
   */
  get cssPropertyResolver() {
    return this._cssPropertyResolver;
  }
}

;// CONCATENATED MODULE: ./src/bsi-sass-property-plugin.js


class BsiSassPropertyPlugin extends AbstractPropertyPlugin {
  /**
   * @param {*} property
   * @param {*} fallback
   * @returns {*}
   */
  getProperty(property, fallback) {
    let propertyName = property.getValue();

    let value = super.getProperty(propertyName, fallback);

    return typeof value.getSassObject === 'function' ? value.getSassObject() : value;
  }

  getFunction() {
    return {
      'bsiProperty($property, $fallback: null)': this.getProperty.bind(this)
    }
  }
}

;// CONCATENATED MODULE: external "webpack-node-externals/utils"
const utils_namespaceObject = require("webpack-node-externals/utils");
;// CONCATENATED MODULE: ./src/webpack-config-builder.js


























class WebpackConfigBuilder {
  /**
   * @type {string}
   */
  static DESIGN_LAYER = 'design';
  /**
   * @type {RegExp}
   */
  static STATIC_JS_FILE_EXTENSION = /\.js/i;
  /**
   * @type {BuildContext}
   * @private
   */
  _context = undefined;

  /**
   * @param {ValidatedBuildConfig} config
   */
  constructor(config) {
    /**
     * @type {BuildContext}
     * @private
     */
    this._context = new BuildContext(config);
  }

  /**
   * @returns {BuildContext}
   */
  get context() {
    return this._context;
  }

  /**
   * @returns {ValidatedBuildConfig}
   */
  get config() {
    return this.context.config;
  }

  /**
   * @returns {PropertyContext}
   */
  get properties() {
    return this.context.properties;
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
          ...this._getNodeModuleAssetsRule(),
          ...this._getStaticJavaScriptFileRuleConfig(),
          ...this._getRegularJavaScriptFileRuleConfig(),
          ...this._getAdditionalRules()
        ]
      },
      plugins: [
        ...this._getBsiCxTwigContextWebpackPlugin(),
        ...this._getMiniCssExtractPluginConfig(),
        ...this._getCopyPluginConfig(),
        ...this._getBsiCxWebpackPluginConfig(),
        ...this._getBsiCxWebpackLegacyDesignPluginConfig(),
        ...this._getZipPluginConfig(),
        ...this._getAdditionalPlugins()
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
          cacheGroups: {
            ...this._getOptimizationCacheGroupsConfig(),
          }
        }
      },
      output: this._getOutputConfig(),
      experiments: {
        layers: true
      }
    };
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
        import: this._getDesignJsFilePath(),
        filename: File.DESIGN_JSON,
        layer: WebpackConfigBuilder.DESIGN_LAYER,
        library: {
          type: 'var',
          name: 'json'
        }
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
    let twigFilePath = external_path_default().resolve(this.config.rootPath, `${name}.twig`);
    let hbsFilePath = external_path_default().resolve(this.config.rootPath, `${name}.hbs.twig`);
    let isTwig = external_fs_default().existsSync(twigFilePath);
    let extension = isTwig ? 'html' : 'hbs';
    return {
      import: isTwig ? twigFilePath : hbsFilePath,
      filename: `${name}.${extension}`
    };
  }

  /**
   * @returns {string}
   * @private
   */
  _getDesignJsFilePath() {
    return external_path_default().resolve(this.config.rootPath, File.DESIGN_JS);
  }

  /**
   * Get the entry configurations for the JavaScript modules.
   *
   * @returns {{}}
   */
  _getJavaScriptModuleEntries() {
    let entries = {};

    for (let config of this.config.modules) {
      let name = config.name;
      entries[name] = this._getJavaScriptModuleEntry(config);
    }

    return entries;
  }

  /**
   * @param {ModuleConfig} config
   * @returns {{filename: string, import: string, runtime: string}}
   * @private
   */
  _getJavaScriptModuleEntry(config) {
    let importPath;
    if (external_path_default().isAbsolute(config.path)) {
      importPath = external_path_default().resolve(config.path);
    } else {
      importPath = external_path_default().resolve(this.config.modulesRootPath, config.path);
    }

    if (!external_fs_default().existsSync(importPath)) {
      throw new Error(`The file ${importPath} for module ${config.name} does not exist.`);
    }

    if (!external_fs_default().statSync(importPath).isFile()) {
      throw new Error(`The path ${importPath} for module ${config.name} does not point to a file.`);
    }

    let pathHash = _createPathHash(config.path);
    return {
      import: importPath,
      filename: `${DistFolder.MODULES}/[name]-${pathHash}.js`,
      runtime: Constant.BSI_CX_MODULE_RUNTIME_PATH
    };
  }

  /**
   * Rules for Twig file handling.
   *
   * @returns {{}[]}
   */
  _getTwigRuleConfig() {
    const versions = {};
    const designs = {};

    for (const [name, version] of Object.entries(version_namespaceObject)) {
      versions[name] = name === 'TARGET' ? this.config.targetVersion : version;
    }

    for (const [name, type] of Object.entries(design_type_namespaceObject)) {
      designs[name] = name === 'TARGET' ? this.config.designType : type;
    }

    return [
      {
        test: /\.twig$/i,
        use: [
          this._getTemplateLoader(),
          'ref-loader',
          {
            loader: this._getTwingLoader(),
            options: {
              templateRoot: this.config.rootPath,
              renderContext: {
                properties: this.properties.proxy,
                designBaseUrl: buildPublicPath(this.config),
                cx: {
                  version: versions,
                  design: designs
                }
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
   * @returns {{}[]}
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
   * @returns {{}[]}
   */
  _getStyleRulesConfig() {
    return [
      {
        test: /\.less$/i,
        use: [
          ...this._getCssLoaderChain(),
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              lessOptions: {
                plugins: [
                  new BsiLessPropertyPlugin(this.context),
                ],
              }
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          ...this._getCssLoaderChain(),
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                functions: {
                  ...new BsiSassPropertyPlugin(this.context).getFunction()
                }
              }
            }
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
   * Rule for node module assets.
   *
   * @returns {{}[]}
   * @private
   */
  _getNodeModuleAssetsRule() {
    let assetQueryRegex = new RegExp(QueryConstant.ASSET);

    return [
      {
        test: /[\\/]node_modules[\\/]/,
        resourceQuery: assetQueryRegex,
        type: 'asset/resource',
        generator: {
          filename: `${DistFolder.VENDORS}/[contenthash][ext]`
        }
      }
    ];
  }

  /**
   * Get all file extensions that should be handled as static assets (e.g. images and fonts).
   *
   * @returns {string[]}
   */
  _getStaticAssetFileExtensions() {
    const defaults = [
      'avif',
      'png',
      'apng',
      'jpg',
      'jpeg',
      'jfif',
      'pjpeg',
      'pjp',
      'webp',
      'gif',
      'bmp',
      'tiff',
      'tif',
      'raw',
      'svg',
      'eot',
      'ttf',
      'woff',
      'woff2',
      'pdf',
      'ico',
      'cur',
      'mkv',
      '3gp',
      'mp3',
      'mp4',
      'm4v',
      'm4p',
      'ogv',
      'webm',
      'aac',
      'flac',
      'mpg',
      'mpeg',
      'oga',
      'ogg',
      'wav',
      'json5'
    ];

    const extensions = new Set([...defaults, ...this.config.additionalStaticAssetFileExtensions]);

    return [...extensions.values()].map(ext => ext.startsWith('.') ? ext : `.${ext}`);
  }

  /**
   * Rule for static assets handling.
   *
   * @returns {{}[]}
   */
  _getStaticAssetsRuleConfig() {
    let fileExtensions = this._getStaticAssetFileExtensions().map(escapeRegex).join('|');
    let testRegex = new RegExp(fileExtensions, 'i');
    let inlineQueryRegex = new RegExp(QueryConstant.INLINE);

    return [
      {
        test: testRegex,
        oneOf: [
          {
            resourceQuery: inlineQueryRegex,
            type: 'asset/inline'
          },
          {
            resourceQuery: {
              not: [
                inlineQueryRegex
              ]
            },
            type: 'asset/resource',
            generator: {
              filename: asset => {
                return getAssetResourceFilename(asset, this.config.designType);
              }
            },
          },
        ]
      }
    ];
  }

  /**
   * Rule for static JavaScript file handling.
   *
   * @returns {{}[]}
   */
  _getStaticJavaScriptFileRuleConfig() {
    return [
      {
        resource: (file) => this._isStaticJavaScriptFile(file),
        type: 'asset/resource',
        generator: {
          filename: asset => {
            return getAssetResourceFilename(asset, this.config.designType);
          }
        }
      }
    ];
  }

  /**
   * @param {string} fileToCheck
   * @returns {boolean}
   */
  _isStaticJavaScriptFile(fileToCheck) {
    let staticFilePath = external_path_default().resolve(this.config.staticFileFolderPath) + (external_path_default()).sep;
    let isInsideStaticFolder = fileToCheck.startsWith(staticFilePath);

    return isInsideStaticFolder && WebpackConfigBuilder.STATIC_JS_FILE_EXTENSION.test(fileToCheck);
  }

  /**
   * Rule for regular JavaScript file handling.
   *
   * @returns {{}[]}
   */
  _getRegularJavaScriptFileRuleConfig() {
    return [
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        include: this.config.modulesRootPath,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime'],
            cacheDirectory: true
          }
        }
      }
    ];
  }

  /**
   * @returns {{}[]}
   * @private
   */
  _getAdditionalRules() {
    return this.config.webpackRules;
  }

  /**
   * @returns {string}
   * @private
   */
  _getTemplateLoader() {
    return `${package_namespaceObject.u2}/dist/template-loader`;
  }

  /**
   * @returns {string}
   * @private
   */
  _getTwingLoader() {
    return `${package_namespaceObject.u2}/dist/twing-loader`;
  }

  /**
   * @returns {{}[]}
   * @private
   */
  _getCssLoaderChain() {
    let chain = [
      {
        loader: (external_mini_css_extract_plugin_default()).loader,
        options: {
          publicPath: '../'
        }
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        }
      }
    ];

    if (this.config.postcssEnabled) {
      chain.push({
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          postcssOptions: {
            plugins: [
              'postcss-preset-env',
              'cssnano'
            ]
          }
        }
      });
    }

    return chain;
  }

  /**
   * Mini CSS extract plugin configuration.
   *
   * @returns {MiniCssExtractPlugin[]}
   */
  _getMiniCssExtractPluginConfig() {
    let pathHash = _createPathHash(this.config.staticFileFolderPath + '\\styles.css');
    return [
      new (external_mini_css_extract_plugin_default())({
        filename: `${DistFolder.STATIC}/styles-${pathHash}.css`,
      })
    ];
  }

  /**
   * Copy plugin configuration.
   *
   * @returns {CopyPlugin[]}
   */
  _getCopyPluginConfig() {
    let copyAssetsFolderPath = toPosixPath(this.config.copyAssetsFolderPath);

    return [
      new (external_copy_webpack_plugin_default())({
        patterns: [
          {
            from: `${copyAssetsFolderPath}/**/*`,
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
   *
   * @returns {BsiCxTwigContextWebpackPlugin[]}
   * @private
   */
  _getBsiCxTwigContextWebpackPlugin() {
    return [
      new BsiCxTwigContextWebpackPlugin(this.properties)
    ]
  }

  /**
   * @returns {BsiCxWebpackPlugin[]}
   * @private
   */
  _getBsiCxWebpackPluginConfig() {
    return [
      new BsiCxWebpackPlugin(this.context)
    ];
  }

  /**
   * Webpack ZIP plugin configuration.
   *
   * @returns {[]}
   */
  _getZipPluginConfig() {
    /**
     * @type {[]}
     */
    let plugins = [
      new (external_zip_webpack_plugin_default())({
        filename: getZipArchiveName(this.config.name, this.config.version),
        exclude: [/\.map$/]
      })
    ];

    if (this.config.sourceMapEnabled) {
      plugins.push(
        new (external_zip_webpack_plugin_default())({
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
   * @returns {Object[]}
   * @private
   */
  _getAdditionalPlugins() {
    return this.config.webpackPlugins;
  }

  /**
   * BSI CX legacy design format plugin config.
   *
   * @returns {BsiCxWebpackLegacyDesignPlugin[]}
   */
  _getBsiCxWebpackLegacyDesignPluginConfig() {
    let plugins = [];
    if (this.config.targetVersion.legacyFormat) {
      plugins.push(
        new BsiCxWebpackLegacyDesignPlugin(this.config)
      );
    }
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
    return {
      port: this.config.devServerPort,
      magicHtml: false,
      hot: false,
      liveReload: false,
      static: {
        directory: this.config.outputPath,
      },
      client: false,
      devMiddleware: {
        writeToDisk: true,
      }
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
      File.DESIGN_JSON,
    ];
    let excludedExtensions = /\.(map|zip|html|hbs)$/;

    return {
      assetFilter: (assetFilename) => !excludedAssets.includes(assetFilename) && !excludedExtensions.test(assetFilename),
      hints: false
    };
  }

  /**
   * The minimizer configuration.
   *
   * @returns {TerserPlugin[]}
   */
  _getOptimizationMinimizerConfig() {
    return [
      new (external_terser_webpack_plugin_default())({
        extractComments: false
      })
    ];
  }

  /**
   * The chache groups configuration.
   *
   * @returns {{}}
   */
  _getOptimizationCacheGroupsConfig() {
    return {
      default: {
        priority: 0,
        minChunks: 2,
        reuseExistingChunk: true,
        filename: `${DistFolder.SHARED}/[chunkhash].js`
      },
      defaultVendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: 10,
        reuseExistingChunk: true,
        filename: `${DistFolder.VENDORS}/[chunkhash].js`
      },
      design: {
        test: module => {
          return module.layer === WebpackConfigBuilder.DESIGN_LAYER;
        },
        priority: 20,
        reuseExistingChunk: false,
        chunks: 'all',
        enforce: true,
        filename: File.DESIGN_JSON_CHUNK
      },
      styles: {
        name: 'styles',
        type: 'css/mini-extract',
        chunks: 'all',
        priority: 30,
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
      path: this.config.outputPath,
      publicPath: buildPublicPath(this.config, '/'),
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
    /**
     * @type {undefined|number}
     */
    let commonDevServerPort = undefined;
    /**
     * @type {undefined|string[]}
     */
    let commonContentBase = undefined;

    let buildConfigs = configs
      .map(config => config.validate())
      .map(config => new WebpackConfigBuilder(config))
      .map(config => config.build());

    buildConfigs.forEach((config, index) => {
      if (index === 0) {
        commonDevServerPort = config.devServer.port;
        commonContentBase = toPosixPath(config.devServer.static.directory).split((external_path_default()).posix.sep);
      } else {
        let currentStaticDirectory = toPosixPath(config.devServer.static.directory).split((external_path_default()).posix.sep);
        commonContentBase = findArraySimilarities(commonContentBase, currentStaticDirectory);
      }

      if (index > 0) {
        delete config.devServer;
      }
    });

    if ((external_path_default()).sep === (external_path_default()).posix.sep && commonContentBase.length > 0) {
      commonContentBase.unshift((external_path_default()).posix.sep);
    }

    let devServerConfig = buildConfigs[0].devServer;
    devServerConfig.port = commonDevServerPort;
    devServerConfig.static.directory = external_path_default().join(...commonContentBase);

    return buildConfigs;
  }
}

function getAssetResourceFilename(asset, designType) {
  let pathHash = _createPathHash(designType + (external_path_default()).posix.sep + asset.filename);
  return `${DistFolder.STATIC}/[name]-${pathHash}[ext]`;
}

;// CONCATENATED MODULE: ./src/css/helper.js






/**
 * Create a <code>url()</code> object. The supplied path segments will be passed to <code>path.resolve</code>
 * to get the correct path. <strong>It is recommended to pass an absolute path.</strong>
 * Use the <code>__dirname</code constant as first path segment.
 *
 * @example
 * css.url(__dirname, 'static', 'image.png')
 * @param {...string} pathSegments - The path segments.
 * @returns {CssUrl}
 */
function url(...pathSegments) {
  let resolvedPath = external_path_default().resolve(...pathSegments);
  return new CssUrl(resolvedPath);
}

/**
 * Create a <code>url()</code> containing a base64 encoded data-uri.
 *
 * @example
 * css.dataUri(__dirname, 'static', 'image.png')
 * @see {@link url} for details
 * @param {...string} pathSegments - The path segments.
 * @returns {CssUrl}
 */
function dataUri(...pathSegments) {
  let resolvedPath = external_path_default().resolve(...pathSegments);
  return new CssUrl(resolvedPath, true);
}

/**
 * Create a CSS color value. You can pass one, three or four values. Take a look at the examples to find out more
 * about the accepted input.
 *
 * @example
 * css.color('red'); // color string
 * css.color('#ff00ff'); // normal hex format
 * css.color('#ff00ff99'); // rgba as hex
 * css.color('rgb(255, 0, 255)'); // rgb format
 * css.color('rgba(255, 0, 255, 0.1)'); // rgba format
 * css.color(255, 0, 255); // pass each channel as number
 * css.color(255, 0, 255, 0.5); // pass each channel as numeric value
 * @param {...string|number} channels - The color definition in one of the allowed forms.
 * @returns {CssColor|string}
 */
function color(...channels) {
  switch (channels.length) {
    case 1:
      let color = channels.shift();
      let parser = CssColor.getParser(color);
      return !!parser ? parser(color) : color;
    case 3:
    case 4:
      return CssColor.fromRGB(...channels);
    default:
      throw new Error(`unable to parse color definition [${channels.join(',')}]`);
  }
}

/**
 * Create a CSS numeric value with a given unit. Take a look at the example to find out more about the accepted input.
 *
 * @example
 * css.number('10px');
 * css.number('10em');
 * css.number('10ex');
 * css.number('10ch');
 * css.number('10rem');
 * css.number('10in');
 * css.number('10cm');
 * css.number('10mm');
 * css.number('10pc');
 * css.number('10pt');
 * css.number('10vw');
 * css.number('10vh');
 * css.number('10vmin');
 * css.number('10vmax');
 * css.number('10%');
 * @param {string} value - The value as string.
 * @returns {CssDimension|string}
 */
function number(value) {
  let parser = CssDimension.getParser(value);
  return !!parser ? parser(value) : value;
}

;// CONCATENATED MODULE: ./export/main.js












})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map