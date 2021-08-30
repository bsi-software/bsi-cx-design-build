/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BuildConfig": () => (/* reexport */ BuildConfig),
  "DesignType": () => (/* reexport */ design_type_namespaceObject),
  "ModuleConfig": () => (/* reexport */ ModuleConfig),
  "Version": () => (/* reexport */ version_namespaceObject),
  "WebpackConfigBuilder": () => (/* reexport */ WebpackConfigBuilder),
  "css": () => (/* reexport */ helper_namespaceObject)
});

// NAMESPACE OBJECT: ./src/design-type.js
var design_type_namespaceObject = {};
__webpack_require__.r(design_type_namespaceObject);
__webpack_require__.d(design_type_namespaceObject, {
  "DesignType": () => (DesignType),
  "EMAIL": () => (EMAIL),
  "LANDINGPAGE": () => (LANDINGPAGE),
  "WEBSITE": () => (WEBSITE)
});

// NAMESPACE OBJECT: ./src/version.js
var version_namespaceObject = {};
__webpack_require__.r(version_namespaceObject);
__webpack_require__.d(version_namespaceObject, {
  "CX_1_3": () => (CX_1_3),
  "CX_22_0": () => (CX_22_0),
  "STUDIO_1_0": () => (STUDIO_1_0),
  "STUDIO_1_1": () => (STUDIO_1_1),
  "STUDIO_1_2": () => (STUDIO_1_2),
  "Version": () => (Version)
});

// NAMESPACE OBJECT: ./src/css/helper.js
var helper_namespaceObject = {};
__webpack_require__.r(helper_namespaceObject);
__webpack_require__.d(helper_namespaceObject, {
  "color": () => (color),
  "dataUri": () => (dataUri),
  "url": () => (url)
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
   * @return {string}
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
 * @since 1.0
 */
const LANDINGPAGE = new DesignType('landingpage');

/**
 * @type {DesignType}
 * @since 1.0
 */
const EMAIL = new DesignType('email');

/**
 * @type {DesignType}
 * @since 1.3
 */
const WEBSITE = new DesignType('website');

;// CONCATENATED MODULE: ./src/version.js



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

class Version extends AbstractConstant {
  /**
   *
   * @param {string} version
   * @param {DesignType[]} allowedTypes
   * @param {boolean} legacyFormat
   */
  constructor(version, allowedTypes, legacyFormat) {
    super(version);
    this._allowedTypes = allowedTypes;
    this._legacyFormat = legacyFormat;
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
}

/**
 * @type {Version}
 */
const STUDIO_1_0 = new Version('1.0', LEGACY_TYPES, true);

/**
 * @type {Version}
 */
const STUDIO_1_1 = new Version('1.1', LEGACY_TYPES, true);

/**
 * @type {Version}
 */
const STUDIO_1_2 = new Version('1.2', LEGACY_TYPES, true);

/**
 * @type {Version}
 */
const CX_1_3 = new Version('1.3', ALL_TYPES, true);

/**
 * @type {Version}
 */
const CX_22_0 = new Version('22.0', ALL_TYPES, false);

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
   * @return {*}
   */
  get value() {
    return this._value;
  }
}

;// CONCATENATED MODULE: ./src/abstract-builder.js



/**
 * @abstract
 */
class AbstractBuilder {
  /**
   * @abstract
   * @return {{}}
   */
  build() {
    throw new Error('not implemented');
  }

  /**
   * @param {string} property
   * @param {{}} targetObj
   * @param {function} extractFunc
   * @param {boolean} [arrayToObject=false]
   * @protected
   */
  _applyPropertyIfDefined(property, targetObj, extractFunc, arrayToObject) {
    if (typeof this[property] === 'undefined') {
      return;
    }

    let value = this[property];
    let computedValue;

    switch (true) {
      case value instanceof RawValue:
        computedValue = value.value;
        break;
      case value instanceof Array:
        computedValue = value.map(item => extractFunc(item));
        break;
      default:
        computedValue = extractFunc(value);
        break;
    }

    if (!!arrayToObject && !(value instanceof RawValue)) {
      computedValue = this._applyArrayToObject(computedValue);
    }

    targetObj[property] = computedValue;
  }

  /**
   * @param {[{}]} arr
   * @private
   */
  _applyArrayToObject(arr) {
    let obj = {};
    for (let item of arr) {
      obj = {
        ...obj,
        ...item
      };
    }
    return obj;
  }

  /**
   * @template T
   * @param {T} newObj
   * @param {boolean|undefined} [shallow=true]
   * @return {T}
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
   * @return {T}
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
   * @return {T}
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
   * @return {[]}
   * @private
   */
  _cloneArray(arr) {
    return arr.map(item => this._cloneValue(item));
  }

  /**
   * @param {{}} obj
   * @return {{}}
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
   * @return {T}
   */
  static clone(source, target, shallow) {
    let shallowOpt = shallow === undefined ? true : !!shallow;
    return new ObjectCloner()._clone(source, target, shallowOpt);
  }

  /**
   * @template T
   * @param {T} value
   * @return {T}
   */
  static cloneValue(value) {
    return new ObjectCloner()._cloneValue(value);
  }
}

;// CONCATENATED MODULE: ./src/build-config/module-config.js



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
   * @return {string|undefined}
   */
  get name() {
    return this._name;
  }

  /**
   * @return {string|undefined}
   */
  get path() {
    return this._path;
  }

  /**
   * @param {string} name
   * @return {ModuleConfig}
   */
  withName(name) {
    this._name = name;
    return this;
  }

  /**
   * Path to the entry module file. The path can either be an absolute one or relative to the path specified with {@link BuildConfig#withRootPath}.
   *
   * @param {string} path
   * @return {ModuleConfig}
   */
  withPath(path) {
    this._path = path;
    return this;
  }

  /**
   * @return {{}}
   */
  build() {
    let config = {};
    config[this.name] = this.path;
    return config;
  }

  /**
   * @param {boolean|undefined} [shallow=true]
   * @return {ModuleConfig}
   */
  clone(shallow) {
    return ObjectCloner.clone(this, new ModuleConfig(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/build-config/validation-error.js
class ValidationError extends Error {
}

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
 * @return {string}
 */
function utility_toString(obj) {
  return typeof obj === 'string' || obj instanceof String ? obj : obj.toString();
}

/**
 * @see {@link https://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript#answer-3561711}
 * @param {string} input
 * @return {string}
 */
function escapeRegex(input) {
  let pattern = /[-\/\\^$*+?.()|[\]{}]/g
  return input.replace(pattern, '\\$&');
}

/**
 * @param {string} str
 * @return {string}
 */
function ucfirst(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

/**
 * @param {string} mayRelativePath
 * @param {string|undefined} [basePathWhenRelative=undefined]
 * @return {string}
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
 * @return {string}
 */
function toPosixPath(possibleWin32Path) {
  return possibleWin32Path.replace(/\\/g, (external_path_default()).posix.sep);
}

;// CONCATENATED MODULE: external "slugify"
const external_slugify_namespaceObject = require("slugify");
var external_slugify_default = /*#__PURE__*/__webpack_require__.n(external_slugify_namespaceObject);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: ./src/build-config/validated-build-config.js


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
   * @type {[{}]}
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
   * @return {string}
   */
  get staticFileFolderPath() {
    return this._staticFileFolderPath;
  }

  /**
   * @return {string}
   */
  get copyAssetsFolderPath() {
    return this._copyAssetsFolderPath;
  }
}

;// CONCATENATED MODULE: ./src/build-config/default-build-config.js



/**
 * @implements {BuildConfigInterface}
 */
class DefaultBuildConfig {
  get additionalFilesToCopy() {
    return [];
  }

  get copyAssetsFolderPath() {
    return 'assets';
  }

  get designType() {
    return LANDINGPAGE;
  }

  get devServerPort() {
    return 9000;
  }

  get hashZipFiles() {
    return true;
  }

  get modules() {
    return [];
  }

  get modulesRootPath() {
    return 'modules';
  }

  get name() {
    return undefined;
  }

  get outputPath() {
    return 'dist';
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
    return 'static';
  }

  get targetVersion() {
    return CX_22_0;
  }

  get version() {
    return '1.0.0';
  }
}

;// CONCATENATED MODULE: ./src/build-config/build-config-validator.js













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
   * @return {DefaultBuildConfig}
   */
  get defaultBuildConfig() {
    return this._defaultBuildConfig;
  }

  /**
   * @return {BuildConfig}
   */
  get buildConfig() {
    return this._buildConfig;
  }

  /**
   * @return {ValidatedBuildConfig}
   */
  get validatedConfig() {
    return this._validatedConfig;
  }

  /**
   * @private
   */
  _validate() {
    // invocation order is relevant
    this._validateProperty('name', String);
    this._validateProperty('version', String);
    this._validateProperty('targetVersion', Version);
    this._validateProperty('designType', DesignType);
    this._validateProperty('rootPath', String);
    this._validateProperty('outputPath', String);
    this._validateProperty('propertiesFilePath', String);
    this._validateProperty('devServerPort', Number);
    this._validateProperty('hashZipFiles', Boolean);
    this._validateProperty('modulesRootPath', String);
    this._validateProperty('modules', Array, false);
    this._validateProperty('additionalFilesToCopy', Array);
    this._validateProperty('sourceMapEnabled', Boolean);
    this._validateProperty('staticFileFolderPath', String);
    this._validateProperty('copyAssetsFolderPath', String);
  }

  /**
   * @param {string} name
   * @param {object} type
   */
  _validateProperty(name, type) {
    let property = '_' + name;
    let value = this.buildConfig[name];
    let defaultValue = this.defaultBuildConfig[name];
    let required = defaultValue === undefined;

    if (value !== undefined && !value instanceof type) {
      throw new ValidationError(`${name} must be ${type.constructor.name}`);
    }

    if (required && !value) {
      throw new ValidationError(`${name} is required and can not be empty`);
    }

    if (value === undefined) {
      value = defaultValue;
    }

    let validatedValue = value;
    let propertyValidator = `_validate${ucfirst(name)}`;
    if (typeof this[propertyValidator] === 'function') {
      validatedValue = this[propertyValidator](validatedValue, name);
    }

    this.validatedConfig[property] = ObjectCloner.cloneValue(validatedValue);
  }

  /**
   * @param {string} name
   * @param {string} property
   * @return {string}
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
   * @return {string}
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
   * @return {string}
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
   * @return {string}
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
   * @return {ValidatedBuildConfig}
   */
  static validate(buildConfig) {
    let validator = new BuildConfigValidator(buildConfig);

    validator._validate();

    return validator.validatedConfig;
  }
}

;// CONCATENATED MODULE: ./src/build-config/build-config.js








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
  _modules = [];
  /**
   * @type {string}
   * @private
   */
  _modulesRootPath = undefined;
  /**
   * @type {[{}]}
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
   * @return {string}
   */
  get staticFileFolderPath() {
    return this._staticFileFolderPath;
  }

  /**
   * @return {string}
   */
  get copyAssetsFolderPath() {
    return this._copyAssetsFolderPath;
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
   * The application version of BSI CX (or BSI Studio) this design is built for.
   *
   * @see Checkout {@link Version} for available versions.
   * @param {Version} version
   * @returns
   */
  withTargetVersion(version) {
    this._targetVersion = version;
    return this;
  }

  /**
   * The type of this design (e.g. email or landingpage).
   *
   * @see Checkout {@link DesignType} for available types.
   * @param {DesignType} type
   * @returns
   */
  withDesignType(type) {
    this._designType = type;
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
   * The data properties file for your Twig templates. This file will be required and the contents of this file will be
   * available as "properties" variable inside your Twig templates.
   *
   * @param {string} propertiesFilePath
   * @returns {BuildConfig}
   */
  withPropertiesFilePath(propertiesFilePath) {
    this._propertiesFilePath = propertiesFilePath;
    return this;
  }

  /**
   * A TCP port number to use for the development server. The default port is 9000. Be aware,
   * that you don't have to configure a separate port for each template.
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
   * @param {...ModuleConfig} modules
   * @returns {BuildConfig}
   */
  withModules(...modules) {
    this._modules = modules;
    return this;
  }

  /**
   * Absolute path to the modules folder.
   *
   * @param {string} modulesRootPath
   * @returns {BuildConfig}
   */
  withModulesRootPath(modulesRootPath) {
    this._modulesRootPath = modulesRootPath;
    return this;
  }

  /**
   * Add additional files to copy to the output folder.
   *
   * @see {@link https://github.com/webpack-contrib/copy-webpack-plugin#patterns}
   * @param {...{}} additionalFilesToCopy
   * @returns {BuildConfig}
   */
  withAdditionalFilesToCopy(...additionalFilesToCopy) {
    this._additionalFilesToCopy = additionalFilesToCopy;
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
   * Set the folder for static assets (e.g. images or simple JavaScript files).
   * Can either be an absolute or relative path. Relative paths will be normalized in relation to the template root folder.
   * Use {@link withRootPath} to set the template root folder.
   *
   * @param {string} staticFileFolderPath
   * @return {BuildConfig}
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
   * @param {string} copyAssetsFolderPath
   * @return {BuildConfig}
   */
  withCopyAssetsFolderPath(copyAssetsFolderPath) {
    this._copyAssetsFolderPath = copyAssetsFolderPath;
    return this;
  }

  /**
   * Create a clone of this copy. Can be useful if different templates should be created from the same sources.
   * A shallow clone will be created by default. This means nested objects will still reference the same origin.
   *
   * @param {boolean} [shallow=true]
   * @return {BuildConfig}
   */
  clone(shallow) {
    return ObjectCloner.clone(this, new BuildConfig(), shallow);
  }

  /**
   * @return {ValidatedBuildConfig}
   */
  validate() {
    return BuildConfigValidator.validate(this);
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
;// CONCATENATED MODULE: external "crypto"
const external_crypto_namespaceObject = require("crypto");
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
  static ENTER_MODE = 'enterMode';
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
  static PAGE_INCLUDE = '__page__';
}

;// CONCATENATED MODULE: ./src/builder-object-normalizer.js
class BuilderObjectNormalizer {
  /**
   * @param {*} obj
   * @return {*}
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
   * @param {[*]} arr
   * @return {[*]}
   * @private
   */
  _normalizeArray(arr) {
    return arr.map(value => this._normalize(value));
  }

  /**
   * @param {{}} obj
   * @return {{}}
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
   * This method normally operates on imported values from executed Java Script assets, see {@link _BsiCxWebpackPlugin#_loadAssets}.
   * Such values cannot be checked with instanceof.
   *
   * @param {*} obj
   * @return {*}
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

;// CONCATENATED MODULE: ./src/bsi-cx-webpack-plugin.js















class _BsiCxWebpackPlugin {
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
  static STYLES_CSS = /^static\/styles-[0-9a-z]+\.css$/;
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
   */
  _config = undefined;
  /**
   * @type {Compiler}
   */
  _compiler = undefined;
  /**
   * @type {Compilation}
   */
  _compilation = undefined;
  /**
   * @type {WebpackLogger}
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
     */
    this._config = config;
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
      this._exportDesignJson();
      this._exportDesignHtml();
      this._exportPreviewHtml();
    } catch (error) {
      if (error instanceof lib_namespaceObject.WebpackError) {
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

  _exportDesignJson() {
    let designJsonPath = this._getAssetName(_BsiCxWebpackPlugin.DESIGN_JSON);
    let designJsonChunkPath = this._getAssetName(_BsiCxWebpackPlugin.DESIGN_JSON_CHUNK);
    /**
     * @type {*}
     */
    let designJson = this._loadAssets('json', designJsonChunkPath, designJsonPath);
    /**
     * @type {{}}
     */
    let designJsonObj = BuilderObjectNormalizer.normalize(designJson);
    let contentElementGroups = designJsonObj[DesignJsonProperty.CONTENT_ELEMENT_GROUPS] || [];
    let website = designJsonObj[DesignJsonProperty.WEBSITE] || {};
    let websiteIncludes = website[DesignJsonProperty.INCLUDES] || {};

    this._handleDesignPreviewImage(designJsonObj);

    contentElementGroups
      .forEach(group => group[DesignJsonProperty.CONTENT_ELEMENTS]
        .forEach(element => this._handleElement(element)));

    Object.values(websiteIncludes)
      .forEach(include => this._handleInclude(include));

    let jsonStr = JSON.stringify(designJsonObj, null, 2);
    this._updateAsset(designJsonPath, jsonStr);
    this._deleteAsset(designJsonChunkPath);
  }

  _handleDesignPreviewImage(designJsonObj) {
    if (typeof designJsonObj[DesignJsonProperty.PREVIEW_IMAGE] !== 'undefined') {
      designJsonObj[DesignJsonProperty.PREVIEW_IMAGE] = this._removeDesignBaseUrl(designJsonObj[DesignJsonProperty.PREVIEW_IMAGE]);
    }
  }

  /**
   * @param {{file:{}}} element
   * @private
   */
  _handleElement(element) {
    element[DesignJsonProperty.FILE] = this._handleTemplateFile(element[DesignJsonProperty.FILE], 'contentElements');
  }

  /**
   * @param {{file:{}}} include
   * @private
   */
  _handleInclude(include) {
    include[DesignJsonProperty.FILE] = this._handleTemplateFile(include[DesignJsonProperty.FILE], 'includes');
  }

  /**
   * @param {{content:string,path:string}} fileObj
   * @param {string} baseFolder
   * @returns {string}
   */
  _handleTemplateFile(fileObj, baseFolder) {
    let rawContent = fileObj.content;
    let content = /^module\.exports/.test(rawContent) ? this._eval(rawContent) : rawContent;
    let originalExtension = external_path_default().extname(fileObj.path);
    let fileName = external_path_default().basename(fileObj.path, originalExtension).replace(/\.(hbs)$/, '');
    let contentHash = this._createContentHash(content);
    let extension = this._getTemplateFileExtension(fileObj.path);
    let elementFilePath = `${baseFolder}${(external_path_default()).posix.sep}${fileName}-${contentHash}.${extension}`;

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
      self: {}
    };

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
   * @returns {string}
   */
  _updateHtmlTemplate(filePath, name) {
    let templateObj = this._loadAssets(name, filePath);
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
    let assetRegex = new RegExp(`^(modules|vendors)\/.*\.js$`);
    let assetPaths = this._getAssetNames(assetRegex);

    return assetPaths
      .filter(assetPath => !assetPath.startsWith(Constant.BSI_CX_MODULE_RUNTIME_PATH) && importedModules.indexOf(assetPath) === -1)
      .map(assetPath => {
        importedModules.push(assetPath);
        if (inline) {
          let asset = this._compilation.getAsset(assetPath);
          let source = asset.source.source();
          let strSource = utility_toString(source);
          // noinspection JSUnresolvedVariable
          return `<script>${strSource}</script>`;
        } else {
          let url = buildPublicPath(this._config, assetPath);
          return `<script src="${url}" defer="defer"></script>`;
        }
      }).join('');
  }

  /**
   * @param {string} message
   * @param {string} details
   * @param {string|undefined} [location=undefined]
   * @returns
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
      .substr(0, _BsiCxWebpackPlugin.ELEMENT_FILE_HASH_LENGTH);
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
    compiler.hooks.thisCompilation.tap(BsiCxWebpackPlugin.PLUGIN_NAME, compilation => {
      compilation.hooks.processAssets.tap(
        {
          name: BsiCxWebpackPlugin.PLUGIN_NAME,
          stage: lib_namespaceObject.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE
        },
        () => {
          const logger = compilation.getLogger(BsiCxWebpackPlugin.PLUGIN_NAME);
          new _BsiCxWebpackPlugin(this._config, compiler, compilation, logger).apply();
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
   * @return {JavaPropertyFileBuilder}
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

;// CONCATENATED MODULE: ./src/extractor.js



/**
 * @param {[string|number]} arr
 * @return {string}
 */
function scalarArrayToList(arr) {
  return arr.join(',');
}

/**
 * @template T
 * @param {T} v
 * @return {T}
 */
function identity(v) {
  return v;
}

/**
 * @param {AbstractConstant} constant
 * @return {string}
 */
function constantObjectValue(constant) {
  return constant.value;
}

/**
 * @param {AbstractBuilder} builder
 * @return {{}}
 */
function builderObjectValue(builder) {
  return builder.build();
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
   * @return {string}
   */
  static getContentElementGroupLabel(group) {
    return LegacyDesignProperty._GROUP + '.' + group + '.' + LegacyDesignProperty._LABEL;
  }

  /**
   * @param {string} element
   * @return {string}
   */
  static getContentElementLabel(element) {
    return LegacyDesignProperty._ELEMENT + '.' + element + '.' + LegacyDesignProperty._LABEL;
  }

  /**
   * @param {string} element
   * @return {string}
   */
  static getContentElementDescription(element) {
    return LegacyDesignProperty._ELEMENT + '.' + element + '.' + LegacyDesignProperty._DESCRIPTION;
  }

  /**
   * @param {string} element
   * @return {string}
   */
  static getContentElementIcon(element) {
    return LegacyDesignProperty._ELEMENT + '.' + element + '.' + LegacyDesignProperty._ICON;
  }

  /**
   * @param {string} element
   * @return {string}
   */
  static getContentElementStyles(element) {
    return LegacyDesignProperty._ELEMENT + '.' + element + '.' + LegacyDesignProperty._STYLES;
  }

  /**
   * @param {string} element
   * @param {string} part
   * @param {number} index
   * @return {string}
   */
  static getContentElementPartLabel(element, part, index) {
    return LegacyDesignProperty._getContentElementPart(element, part, index) + '.' + LegacyDesignProperty._LABEL;
  }

  /**
   * @param {string} element
   * @param {string} part
   * @param {number} index
   * @return {string}
   */
  static getContentElementPartHtmlEditorConfig(element, part, index) {
    return LegacyDesignProperty._getContentElementPart(element, part, index) + '.' + LegacyDesignProperty._HTML_EDITOR_CONFIG;
  }

  /**
   * @param {string} element
   * @param {string} part
   * @param {number} index
   * @return {string}
   */
  static _getContentElementPart(element, part, index) {
    return LegacyDesignProperty._ELEMENT + '.' + element + '.' + LegacyDesignProperty._PARTS + '.' + part + '[' + index + ']';
  }

  /**
   * @param {string} name
   * @return {string}
   */
  static getStyleLabel(name) {
    return LegacyDesignProperty._STYLE + '.' + name + '.' + LegacyDesignProperty._LABEL;
  }

  /**
   * @param {string} name
   * @param {string} cssClass
   * @return {string}
   */
  static getStyleClassLabel(name, cssClass) {
    return LegacyDesignProperty._STYLE + '.' + name + '.' + LegacyDesignProperty._CLASS + '.' + cssClass + '.' + LegacyDesignProperty._LABEL
  }

  /**
   * @param {string} name
   * @return {string}
   */
  static getHtmlEditorConfigFeatures(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._FEATURES;
  }

  /**
   * @param {string} name
   * @return {string}
   */
  static getHtmlEditorConfigTextColors(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._TEXT_COLORS;
  }

  /**
   * @param {string} name
   * @return {string}
   */
  static getHtmlEditorConfigBackgroundColors(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._BACKGROUND_COLORS;
  }

  /**
   * @param {string} name
   * @return {string}
   */
  static getHtmlEditorConfigFormats(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._FORMATS;
  }

  /**
   * @param {string} name
   * @return {string}
   */
  static getHtmlEditorConfigFontSizes(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._FONT_SIZES;
  }

  /**
   * @param {string} name
   * @return {string}
   */
  static getHtmlEditorConfigFontSizeUnit(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._FONT_SIZE_UNIT;
  }

  /**
   * @param {string} name
   * @return {string}
   */
  static getHtmlEditorConfigFontSizeDefault(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._FONT_SIZE_DEFAULT;
  }

  /**
   * @param {string} name
   * @return {string}
   */
  static getHtmlEditorConfigLineHeights(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._LINE_HEIGHTS;
  }

  /**
   * @param {string} name
   * @return {string}
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
  }

  /**
   * @return {{}}
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
     * @type {[{}]}
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
   * @return {string}
   */
  get modulePath() {
    return this._modulePath;
  }

  /**
   * @return {Set<string>}
   */
  get dependencies() {
    return this._dependencies;
  }

  /**
   *
   * @return {Module}
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

;// CONCATENATED MODULE: ./src/twig-context.js


class TwigContext {
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
  _propertiesProxy = undefined;
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
    this._propertiesProxy = this._getPropertiesProxy();

    this._reloadPropertiesIfRequired();
  }

  /**
   * @return {string|undefined}
   */
  get propertiesFilePath() {
    return this._propertiesFilePath;
  }

  /**
   * @return {ModuleLoader}
   */
  get propertiesModule() {
    return this._propertiesModule;
  }

  /**
   * Get the original properties object without the proxy.
   *
   * @return {{}}
   */
  get properties() {
    return this._properties;
  }

  /**
   * Get the properties object, guarded by a proxy.
   *
   * @return {{}}
   */
  get propertiesProxy() {
    return this._propertiesProxy;
  }

  /**
   * @return {boolean}
   */
  get propertiesReloadRequired() {
    return this._propertiesReloadRequired;
  }

  forcePropertiesReload() {
    this._propertiesReloadRequired = true;
  }

  /**
   * @return {boolean}
   */
  hasPropertiesFilePath() {
    return !!this._propertiesFilePath;
  }

  /**
   * @return {{}}
   * @private
   */
  _getPropertiesProxy() {
    let handler = this._getProxyHandler();

    return new Proxy(this._properties, handler);
  }

  /**
   * @return {{}}
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
   * @return {*}
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

;// CONCATENATED MODULE: ./src/bsi-cx-twig-context-webpack-plugin.js


class BsiCxTwigContextWebpackPlugin {
  /**
   * @type {string}
   */
  static PLUGIN_NAME = 'BsiCxTwigContextWebpackPlugin';

  /**
   * @type {TwigContext}
   * @private
   */
  _twigContext = undefined;

  /**
   * @param {TwigContext} twigContext
   */
  constructor(twigContext) {
    /**
     * @type {TwigContext}
     * @private
     */
    this._twigContext = twigContext;
  }

  apply(compiler) {
    compiler.hooks.thisCompilation.tap(BsiCxTwigContextWebpackPlugin.PLUGIN_NAME, compilation => {
      this._twigContext.forcePropertiesReload();
      compilation.fileDependencies.addAll(this._twigContext.propertiesModule.dependencies); // FIXME: add file paths from CssUrl to dependencies
    });
  }
}

;// CONCATENATED MODULE: external "less/lib/less/tree/node"
const node_namespaceObject = require("less/lib/less/tree/node");
;// CONCATENATED MODULE: ./src/css/abstract-css-property.js


class AbstractCssProperty {
  /**
   * @return {Node}
   * @abstract
   */
  getLessNode() {
    throw new Error('not implemented');
  }

  /**
   * @return {*}
   * @abstract
   */
  getSassObject() {
    throw new Error('not implemented');
  }

  /**
   * Will be used in Twig files.
   *
   * @return {string}
   * @abstract
   */
  toString() {
    throw new Error('not implemented');
  }

  /**
   * @param {string|number} value
   * @return {function(string|number):AbstractCssProperty|undefined}
   */
  static getParser(value) {
    throw new Error('not implemented');
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
  _alpha = 1;

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
   * @return {number}
   */
  get red() {
    return this._red;
  }

  /**
   * @return {number}
   */
  get green() {
    return this._green;
  }

  /**
   * @return {number}
   */
  get blue() {
    return this._blue;
  }

  /**
   * @return {number}
   */
  get alpha() {
    return this._alpha;
  }

  /**
   * @return {string}
   */
  get hex() {
    return this._toHex();
  }

  /**
   * @return {string}
   */
  get rgb() {
    return this._toRgb();
  }

  /**
   * @return {string}
   */
  get rgba() {
    return this._toRgba();
  }

  /**
   * @return {Node}
   */
  getLessNode() {
    let rgb = [this.red, this.green, this.blue];
    let alpha = this.alpha / 255;

    return new (color_default())(rgb, alpha);
  }

  /**
   * @return {*}
   */
  getSassObject() {
    return new (external_sass_default()).types.Color(this.red, this.green, this.blue, this.alpha);
  }

  toString() {
    return this.hex;
  }

  /**
   * @param {number} color
   * @return {number}
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
   * @return {string}
   * @private
   */
  _toHex(color) {
    if (color === undefined) {
      let channels = [
        this._toHex(this.red),
        this._toHex(this.green),
        this._toHex(this.blue)
      ];
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
   * @return {string}
   * @private
   */
  _toRgb() {
    return `rgb(${this.red},${this.green},${this.blue})`;
  }

  /**
   * @return {string}
   * @private
   */
  _toRgba() {
    return `rgba(${this.red},${this.green},${this.blue},${this.alpha})`;
  }

  /**
   * @param {string} hex
   * @return {CssColor}
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
   * @param {number} [alpha=255]
   */
  static fromRGB(red, green, blue, alpha) {
    return new CssColor(red, green, blue, alpha ?? 255);
  }

  /**
   * @param {string} str
   * @return {CssColor}
   */
  static fromRGBString(str) {
    let match = CssColor.RGBA.exec(str);
    let [red, green, blue, alpha] = match[1]
      .split(',')
      .map(channel => parseInt(channel));

    return new CssColor(red ?? 0, green ?? 0, blue ?? 0, alpha ?? 0);
  }

  /**
   * @param {string} color
   * @return {CssColor}
   */
  static fromKeyword(color) {
    if (CssColor.COLORS.hasOwnProperty(color)) {
      return CssColor.fromHex((colors_default())[color]);
    } else {
      throw new Error(`Unknown color keyword: ${color}`);
    }
  }

  /**
   * @param {string|number} value
   * @return {function(string|number):CssColor|undefined}
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
   * @return {number}
   */
  get value() {
    return this._value;
  }

  /**
   * @return {string|undefined}
   */
  get unit() {
    return this._unit;
  }

  /**
   * @return {Node}
   */
  getLessNode() {
    return new (dimension_default())(this.value, this.unit);
  }

  /**
   * @return {*}
   */
  getSassObject() {
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
   * @return {CssDimension}
   */
  static fromNumber(num) {
    return new CssDimension(num);
  }

  /**
   * @param {string|number} value
   * @return {function(string|number):CssDimension|undefined}
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
   * @return {*}
   */
  get value() {
    return this._value;
  }

  /**
   * @return {*}
   */
  getLessNode() {
    return this.value;
  }

  /**
   * @return {*}
   */
  getSassObject() {
    return new (external_sass_default()).types.String(this.value);
  }

  /**
   * @return {string}
   */
  toString() {
    return `${this.value}`;
  }

  /**
   * @param {*} value
   * @return {CssRaw}
   */
  static fromAny(value) {
    return new CssRaw(value);
  }

  /**
   * @param {*} value
   * @return {function(*): CssRaw}
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
   * @return {string}
   */
  get rawUrl() {
    return this._url;
  }

  /**
   * @return {string}
   */
  get externalUrl() {
    return this.rawUrl;
  }

  /**
   * @return {string}
   */
  get inlineUrl() {
    return this._getInlineUrl();
  }

  /**
   * @return {string}
   */
  get url() {
    return this.inline ? this.inlineUrl : this.rawUrl;
  }

  /**
   * @return {string}
   */
  get ref() {
    return this._getRef(this.url);
  }

  /**
   * @return {string}
   */
  get inlineRef() {
    return this._getRef(this.inlineUrl);
  }

  /**
   * @return {string}
   */
  get externalRef() {
    return this._getRef(this.rawUrl);
  }

  /**
   * @return {string}
   */
  get css() {
    return this._getCss(this.url);
  }

  /**
   * @return {string}
   */
  get inlineCss() {
    return this._getCss(this.inlineUrl);
  }

  /**
   * @return {string}
   */
  get inlineRefCss() {
    return this._getCss(this.inlineRef);
  }

  /**
   * @return {string}
   */
  get externalCss() {
    return this._getCss(this.rawUrl);
  }

  /**
   * @return {string}
   */
  get externalRefCss() {
    return this._getCss(this.externalRef);
  }

  /**
   * @return {boolean}
   */
  get inline() {
    return this._inline;
  }

  /**
   * @return {*}
   */
  getLessNode() {
    return this.css;
  }

  /**
   * @return {*}
   */
  getSassObject() {
    return new (external_sass_default()).types.String(this.css);
  }

  /**
   * @return {string}
   */
  toString() {
    return `url(${this.ref})`;
  }

  /**
   * @return {string}
   * @private
   */
  _getInlineUrl() {
    return `${this.rawUrl}?${QueryConstant.INLINE}`; // FIXME: care about already applied query strings
  }

  /**
   * @param {string} url
   * @return {string}
   * @private
   */
  _getRef(url) {
    return `@ref(${url})`;
  }

  /**
   * @param {string} url
   * @return {string}
   * @private
   */
  _getCss(url) {
    return `url(${url})`;
  }

  /**
   * @param {string|number} value
   * @return {undefined}
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
   * @return {boolean}
   */
  get value() {
    return this._value;
  }

  /**
   * @return {*}
   */
  getLessNode() {
    return this.value;
  }

  /**
   * @return {*}
   */
  getSassObject() {
    return !!this.value ? (external_sass_default()).types.Boolean.TRUE : (external_sass_default()).types.Boolean.FALSE;
  }

  /**
   * @return {string}
   */
  toString() {
    return JSON.stringify(this.value);
  }

  /**
   * @param {boolean} value
   * @return {CssBool}
   */
  static fromBoolean(value) {
    return new CssBool(!!value);
  }

  /**
   * @param {string|number|boolean} value
   * @return {(function(boolean): CssBool)|undefined}
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
   * @return {AbstractCssProperty|T}
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
   * @return {AbstractCssProperty}
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
   * @type {TwigContext}
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
     * @type {TwigContext}
     * @private
     */
    this._properties = new TwigContext(config.propertiesFilePath);
  }

  /**
   * @return {ValidatedBuildConfig}
   */
  get config() {
    return this._config;
  }

  /**
   * @return {TwigContext}
   */
  get properties() {
    return this._properties;
  }

  /**
   * @return {CssPropertyResolver}
   */
  get cssPropertyResolver() {
    return this._cssPropertyResolver;
  }
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
    this._properties = context.properties.propertiesProxy;
    /**
     * @type {CssPropertyResolver}
     * @private
     */
    this._propertyResolver = context.cssPropertyResolver;
  }

  /**
   * @template T
   * @param {T} property
   * @return {AbstractCssProperty|T}
   */
  getProperty(property) {
    let segments = property.split('.');
    let scope = this._properties;

    for (let segment of segments) {
      scope = scope[segment];
      if (typeof scope === 'undefined') {
        throw new Error(`Property ${property} not found.`);
      }
    }

    return this._propertyResolver.resolve(scope);
  }
}

;// CONCATENATED MODULE: ./src/bsi-less-property-plugin.js


class BsiLessPropertyPlugin extends AbstractPropertyPlugin {
  /**
   * @return {number[]}
   */
  get minVersion() {
    return [3, 0, 0];
  }

  /**
   * @param {*} propertyNode
   * @return {*}
   */
  getProperty(propertyNode) {
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

    let value = super.getProperty(property);

    return value.getLessNode();
  }

  /**
   * @param lessInstance
   * @param pluginManager
   * @param functions
   */
  install(lessInstance, pluginManager, functions) {
    functions.add('bsiProperty', (property) => this.getProperty(property));
  }
}

;// CONCATENATED MODULE: ./src/bsi-sass-property-plugin.js




class BsiSassPropertyPlugin extends AbstractPropertyPlugin {
  /**
   * @param {sass.types.String} property
   * @return {AbstractCssProperty|T}
   */
  getProperty(property) {
    let propertyName = property.getValue();

    let value = super.getProperty(propertyName);

    return value.getSassObject();
  }

  getFunction() {
    return {
      'bsiProperty($property)': this.getProperty.bind(this)
    }
  }
}

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
    this._context = new BuildContext(config,);
  }

  /**
   * @return {BuildContext}
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
   * @return {TwigContext}
   */
  get twigContext() {
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
          ...this._getStaticJavaScriptFileRuleConfig(),
          ...this._getRegularJavaScriptFileRuleConfig()
        ]
      },
      plugins: [
        ...this._getBsiCxTwigContextWebpackPlugin(),
        ...this._getMiniCssExtractPluginConfig(),
        ...this._getCopyPluginConfig(),
        ...this._getBsiCxWebpackPluginConfig(),
        ...this._getBsiCxWebpackLegacyDesignPluginConfig(),
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
      output: this._getOutputConfig(),
      experiments: {
        layers: true
      }
    };
  }

  /**
   * The default output path: dist/{name}
   *
   * @returns {string}
   * @private
   */
  _getDefaultOutputPath() {
    return external_path_default().resolve(process.cwd(), 'dist', this.config.name);
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
   * @return {string}
   * @private
   */
  _getDesignJsFilePath() {
    return external_path_default().resolve(this.config.rootPath, File.DESIGN_JS);
  }

  /**
   * Get the entry configurations for the Java Script modules.
   *
   * @returns {[{}]}
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
   * @return {{filename: string, import: string, runtime: string}}
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

    return {
      import: importPath,
      filename: 'modules/[name]-[contenthash].js',
      runtime: Constant.BSI_CX_MODULE_RUNTIME_PATH
    };
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
              environmentModulePath: `${package_namespaceObject.u2}/dist/twing-environment.js`,
              renderContext: {
                properties: this.twigContext.propertiesProxy,
                designBaseUrl: buildPublicPath(this.config)
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
    let inlineQueryRegex = new RegExp(QueryConstant.INLINE);

    return [
      {
        test: testRegex,
        oneOf: [
          {
            resourceQuery: /inline/,
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
              filename: 'static/[name]-[contenthash][ext]'
            }
          },
        ]
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
        resource: (file) => this._isStaticJavaScriptFile(file),
        type: 'asset/resource',
        generator: {
          filename: 'static/[name]-[contenthash][ext]'
        }
      }
    ];
  }

  /**
   * @param {string} fileToCheck
   * @return {boolean}
   */
  _isStaticJavaScriptFile(fileToCheck) {
    let staticFilePath = external_path_default().resolve(this.config.staticFileFolderPath) + (external_path_default()).sep;
    let isInsideStaticFolder = fileToCheck.startsWith(staticFilePath);

    return isInsideStaticFolder && WebpackConfigBuilder.STATIC_JS_FILE_EXTENSION.test(fileToCheck);
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
        include: this.config.modulesRootPath,
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
    return `${package_namespaceObject.u2}/dist/template-loader`;
  }

  /**
   * @returns {[{}]}
   */
  _getCssLoaderChain() {
    return [
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
      },
      {
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
      new (external_mini_css_extract_plugin_default())({
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
   * @return {BsiCxTwigContextWebpackPlugin[]}
   * @private
   */
  _getBsiCxTwigContextWebpackPlugin() {
    return [
      new BsiCxTwigContextWebpackPlugin(this.twigContext)
    ]
  }

  /**
   * @return {[BsiCxWebpackPlugin]}
   * @private
   */
  _getBsiCxWebpackPluginConfig() {
    return [
      new BsiCxWebpackPlugin(this.config)
    ];
  }

  /**
   * Webpack ZIP plugin configuration.
   *
   * @returns {[ZipPlugin|BsiCxWebpackZipHashPlugin]}
   */
  _getZipPluginConfig() {
    /**
     * @type {[ZipPlugin|BsiCxWebpackZipHashPlugin]}
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
   * BSI CX legacy design format plugin config.
   *
   * @returns {[BsiCxWebpackLegacyDesignPlugin]}
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
    let zipRegEx = /\.zip$/i;

    return {
      port: this.config.devServerPort,
      contentBase: this.config.outputPath,
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
      File.DESIGN_JSON,
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
      new (external_terser_webpack_plugin_default())({
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
    let commonDevServerPort = undefined;
    let commonContentBase = undefined;

    let buildConfigs = configs
      .map(config => config.validate())
      .map(config => new WebpackConfigBuilder(config))
      .map(config => config.build());

    buildConfigs.forEach((config, index) => {
      if (index === 0) {
        commonDevServerPort = config.devServer.port;
        commonContentBase = config.devServer.contentBase;
      } else {
        commonContentBase = findStringSimilarities(commonContentBase, config.devServer.contentBase);
      }

      if (index > 0) {
        delete config.devServer;
      }
    });

    let devServerConfig = buildConfigs[0].devServer;
    devServerConfig.port = commonDevServerPort;
    devServerConfig.contentBase = commonContentBase;

    return buildConfigs;
  }
}

;// CONCATENATED MODULE: ./src/css/helper.js





/**
 * @param {...string} pathSegments
 * @return {CssUrl}
 */
function url(...pathSegments) {
  let resolvedPath = external_path_default().resolve(...pathSegments);
  return new CssUrl(resolvedPath);
}

/**
 * @param {...string} pathSegments
 * @return {CssUrl}
 */
function dataUri(...pathSegments) {
  let resolvedPath = external_path_default().resolve(...pathSegments);
  return new CssUrl(resolvedPath, true);
}

/**
 * @param {...string|number} channels
 * @return {CssColor|string}
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

;// CONCATENATED MODULE: ./export/main.js












/***/ })

/******/ 	});
/************************************************************************/
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__[114](0, __webpack_exports__, __webpack_require__);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map