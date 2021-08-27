/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BsiCxWebpackLegacyDesignPlugin": () => (/* reexport */ BsiCxWebpackLegacyDesignPlugin),
  "BsiCxWebpackPlugin": () => (/* reexport */ BsiCxWebpackPlugin),
  "BsiCxWebpackZipHashPlugin": () => (/* reexport */ BsiCxWebpackZipHashPlugin),
  "BuildConfig": () => (/* reexport */ BuildConfig),
  "DesignType": () => (/* reexport */ design_type_namespaceObject),
  "Version": () => (/* reexport */ version_namespaceObject),
  "WebpackConfigBuilder": () => (/* reexport */ WebpackConfigBuilder)
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

;// CONCATENATED MODULE: external "source-map-support/register"
const register_namespaceObject = require("source-map-support/register");
;// CONCATENATED MODULE: ./src/abstract-constant.js
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

;// CONCATENATED MODULE: ./src/build-config.js



/**
 * The configuration object for the build of one template.
 */
class BuildConfig {
  /**
   * @type {string}
   */
  _name = undefined;
  /**
   * @type {string}
   */
  _version = '1.0.0';
  /**
   * @type {Version}
   */
  _targetVersion = CX_22_0;
  /**
   * @type {DesignType}
   */
  _designType = LANDINGPAGE;
  /**
   * @type {string}
   */
  _rootPath = undefined;
  /**
   * @type {string}
   */
  _outputPath = undefined;
  /**
   * @type {{}}
   */
  _properties = {};
  /**
   * @type {number}
   */
  _devServerPort = 9000;
  /**
   * @type {boolean}
   */
  _hashZipFiles = true;
  /**
   * @type {{}}
   */
  _modules = {};
  /**
   * @type {string}
   */
  _modulesRootPath = undefined;
  /**
   * @type {[{}]}
   */
  _additionalFilesToCopy = [];
  /**
   * @type {boolean}
   */
  _sourceMapEnabled = true;

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
   * A TCP port number to use for the development server. The default port is 9000. Be aware, that you don't have to configure a separate port for each template.
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
    this._checkInstanceofAndRequired('targetVersion', Version, true);
    this._checkInstanceofAndRequired('designType', DesignType, true);
    this._checkInstanceofAndRequired('rootPath', String, true);
    this._checkInstanceofAndRequired('outputPath', String, false);
    this._checkInstanceofAndRequired('properties', Object, false);
    this._checkInstanceofAndRequired('devServerPort', Number, false);
    this._checkInstanceofAndRequired('hashZipFiles', Boolean, false);
    this._checkInstanceofAndRequired('modules', Object, false);
    this._checkInstanceofAndRequired('modulesRootPath', String, false);
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

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
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
    let staticFilePath = external_path_default().resolve(root, 'static') + (external_path_default()).sep;
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

/**
 * @param {BuildConfig} config
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
 * @see https://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript#answer-3561711
 * @param {string} input
 * @return {string}
 */
function escapeRegex(input) {
  let pattern = /[-\/\\^$*+?.()|[\]{}]/g
  return input.replace(pattern, '\\$&');
}

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
   * @type {BuildConfig}
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
   * @param {BuildConfig} config
   * @param {Compiler} compiler
   * @param {Compilation} compilation
   * @param {WebpackLogger} logger
   */
  constructor(config, compiler, compilation, logger) {
    /**
     * @type {BuildConfig}
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
   * @param {string} assetNames
   * @returns {*}
   */
  _loadAssets(scope, ...assetNames) {
    let context = {self: {}};

    for (let assetName of assetNames) {
      let assetFilename = external_path_default().resolve(this._compiler.outputPath, assetName);
      let asset = this._compilation.getAsset(assetName);
      let source = asset.source.source();
      let code = utility_toString(source);
      let script = new (external_vm_default()).Script(code, {
        filename: assetFilename
      });

      script.runInNewContext(context);
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
    let relativePath = external_path_default().relative(contextPath, absolutePath).replace(/\\/g, (external_path_default()).posix.sep);
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
   * @param {BuildConfig} config
   */
  constructor(config) {
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
   * @param {BuildConfig} config
   * @param {Compiler} compiler
   * @param {Compilation} compilation
   * @param {WebpackLogger} logger
   */
  constructor(config, compiler, compilation, logger) {
    /**
     * @type {BuildConfig}
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
   * @param {BuildConfig} config
   */
  constructor(config) {
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

;// CONCATENATED MODULE: ./src/webpack-config-builder.js


















class WebpackConfigBuilder {
  /**
   * @type {string}
   */
  static DESIGN_LAYER = 'design';

  /**
   * @type {BuildConfig}
   * @private
   */
  _config = undefined;

  /**
   * @param {BuildConfig} config
   */
  constructor(config) {
    /**
     * @type {BuildConfig}
     * @private
     */
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
   * The output path to use.
   *
   * @returns {string}
   */
  _getOutputPath() {
    return this.config.outputPath || this._getDefaultOutputPath();
  }

  /**
   * The default modules path: ./modules
   *
   * @returns {string}
   */
  _getDefaultModulesRootPath() {
    return external_path_default().resolve(this.config.rootPath, 'modules');
  }

  /**
   * The modules path to use.
   *
   * @returns {string}
   */
  _getModulesRootPath() {
    return this.config.modulesRootPath || this._getDefaultModulesRootPath();
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
    for (const [name, filePath] of Object.entries(this.config.modules)) {
      entries[name] = {
        import: external_path_default().resolve(filePath),
        filename: 'modules/[name]-[contenthash].js',
        runtime: Constant.BSI_CX_MODULE_RUNTIME_PATH
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
              environmentModulePath: `${package_namespaceObject.u2}/dist/twing-environment.js`,
              renderContext: {
                properties: this.config.properties,
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
        include: this._getModulesRootPath(),
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
    return [
      new (external_copy_webpack_plugin_default())({
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
    let outputPath = this._getOutputPath();
    let contentBase = outputPath === this._getDefaultOutputPath() ? external_path_default().resolve(outputPath, '..') : process.cwd();
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
      path: this._getOutputPath(),
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
/******/ 	__webpack_modules__[779](0, __webpack_exports__, __webpack_require__);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map