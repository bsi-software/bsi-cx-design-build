/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BsiCxWebpackPlugin)
});

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(622);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(417);
;// CONCATENATED MODULE: external "vm"
const external_vm_namespaceObject = require("vm");
var external_vm_default = /*#__PURE__*/__webpack_require__.n(external_vm_namespaceObject);
;// CONCATENATED MODULE: external "handlebars"
const external_handlebars_namespaceObject = require("handlebars");
var external_handlebars_default = /*#__PURE__*/__webpack_require__.n(external_handlebars_namespaceObject);
// EXTERNAL MODULE: external "webpack"
var external_webpack_ = __webpack_require__(78);
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
      if (error instanceof external_webpack_.WebpackError) {
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
    let script = new (external_vm_default()).Script(source);
    let context = { module: {} };
    script.runInNewContext(context);
    return context.module.exports;
  }

  /**
   * @param {string} name 
   * @param {string} content 
   */
  _updateAsset(filePath, content) {
    let source = new external_webpack_.sources.RawSource(content);
    this._compilation.updateAsset(filePath, source);
  }

  /**
   * @param {string} name 
   * @param {string} scope 
   * @returns {*}
   */
  _loadAsset(name, scope) {
    let asset = this._compilation.getAsset(name);
    let script = new (external_vm_default()).Script(asset.source.source());
    let context = { self: {} };

    script.runInNewContext(context);

    return context[scope];
  }

  /**
   * @param {string} filePath 
   * @param {string} source 
   */
  _emitAsset(filePath, content) {
    let source = new external_webpack_.sources.RawSource(content);
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
    let error = new external_webpack_.WebpackError(message);
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
    return (0,external_crypto_.createHash)('sha256')
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
          stage: external_webpack_.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE
        },
        () => {
          const logger = compilation.getLogger(BsiCxWebpackPlugin.PLUGIN_NAME);
          new _BsiCxWebpackPlugin(compiler, compilation, logger).apply();
        })
    });
  }
};


/***/ }),

/***/ 893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BsiCxWebpackZipHashPlugin)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(923);






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
    this._prodZipFileName = (0,_utility__WEBPACK_IMPORTED_MODULE_2__/* .getZipArchiveName */ .u)(name, version);
    this._devZipFileName = (0,_utility__WEBPACK_IMPORTED_MODULE_2__/* .getZipArchiveName */ .u)(name, version, 'dev');
  }

  /**
   * @param {Compilation} compilation
   * @param {Asset} asset 
   */
  _handleZipAsset(compilation, asset) {
    let oldAssetName = asset.name;
    let source = asset.source;
    let hash = (0,crypto__WEBPACK_IMPORTED_MODULE_0__.createHash)('sha256')
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
          stage: webpack__WEBPACK_IMPORTED_MODULE_1__.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_TRANSFER
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


/***/ }),

/***/ 492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BuildConfig)
/* harmony export */ });
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


/***/ }),

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

/***/ 923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ StaticJavaScriptCondition),
/* harmony export */   "u": () => (/* binding */ getZipArchiveName)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(622);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);



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
    let staticFilePath = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(root, 'static') + (path__WEBPACK_IMPORTED_MODULE_0___default().sep);
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


/***/ }),

/***/ 709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ WebpackConfigBuilder)
});

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(622);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
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
// EXTERNAL MODULE: ./src/bsi-cx-webpack-plugin.js + 3 modules
var bsi_cx_webpack_plugin = __webpack_require__(638);
// EXTERNAL MODULE: ./src/bsi-cx-webpack-zip-hash-plugin.js
var bsi_cx_webpack_zip_hash_plugin = __webpack_require__(893);
// EXTERNAL MODULE: ./src/constant.js
var constant = __webpack_require__(911);
// EXTERNAL MODULE: ./src/utility.js
var utility = __webpack_require__(923);
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
   * The entry configuration.
   * 
   * @returns {{}}
   */
  _getEntryConfig() {
    return {
      ...this._getJavaScriptModuleEntries(),
      json: {
        import: external_path_default().resolve(this.config.rootPath, 'design.js'),
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
              environmentModulePath: `${package_namespaceObject.u2}/dist/twing-environment.js`,
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
        resource: (file) => utility/* StaticJavaScriptCondition.test */.B.test(this.config.rootPath, file),
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
      new bsi_cx_webpack_plugin.default()
    ];
  }

  /**
   * Webpack ZIP plugin configuration.
   * 
   * @returns {[ZipPlugin|BsiCxWebpackZipHashPlugin]}
   */
  _getZipPluginConfig() {
    let plugins = [
      new (external_zip_webpack_plugin_default())({
        filename: (0,utility/* getZipArchiveName */.u)(this.config.name, this.config.version),
        exclude: [/\.map$/]
      })
    ];

    if (this.config.sourceMapEnabled) {
      plugins.push(
        new (external_zip_webpack_plugin_default())({
          filename: (0,utility/* getZipArchiveName */.u)(this.config.name, this.config.version, 'dev'),
        })
      );
    }

    plugins.push(
      new bsi_cx_webpack_zip_hash_plugin.default(this.config.name, this.config.version, this.config.hashZipFiles)
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


/***/ }),

/***/ 417:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 622:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 43:
/***/ ((module) => {

module.exports = require("source-map-support/register");

/***/ }),

/***/ 78:
/***/ ((module) => {

module.exports = require("webpack");

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
var exports = __webpack_exports__;

exports.__esModule = true;
exports.BsiCxWebpackZipHashPlugin = exports.BsiCxWebpackPlugin = exports.WebpackConfigBuilder = exports.BuildConfig = void 0;
__webpack_require__(43);
var build_config_1 = __webpack_require__(492);
exports.BuildConfig = build_config_1["default"];
var webpack_config_builder_1 = __webpack_require__(709);
exports.WebpackConfigBuilder = webpack_config_builder_1["default"];
var bsi_cx_webpack_plugin_1 = __webpack_require__(638);
exports.BsiCxWebpackPlugin = bsi_cx_webpack_plugin_1["default"];
var bsi_cx_webpack_zip_hash_plugin_1 = __webpack_require__(893);
exports.BsiCxWebpackZipHashPlugin = bsi_cx_webpack_zip_hash_plugin_1["default"];

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=bundle.js.map