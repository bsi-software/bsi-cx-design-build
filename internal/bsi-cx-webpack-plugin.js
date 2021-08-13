import path from 'path';
import { createHash } from 'crypto';
import vm from 'vm';

import Handlebars from 'handlebars';
import { Compilation, sources, Compiler, WebpackLogger, WebpackError } from 'webpack';

import handlebarsHelpers from './handlebars-helpers';
import Constant from './constant';

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
  static STYLES_CSS = /^assets\/styles\-[0-9a-z]+\.css$/;
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
      if (error instanceof WebpackError) {
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

    this._handleDesignPreviewImage(designJsonObj);

    designJsonObj.contentElementGroups
      .forEach(group => group.contentElements
        .forEach(element => this._handleElement(element)));

    let jsonStr = JSON.stringify(designJsonObj, null, 4);
    this._updateAsset(designJsonPath, jsonStr);
  }

  _handleDesignPreviewImage(designJsonObj) {
    if (typeof designJsonObj.previewImage !== 'undefined') {
      designJsonObj.previewImage = this._removeDesignBaseUrl(designJsonObj.previewImage);
    }
  }

  _handleElement(element) {
    element.file = this._handleElementFile(element.file);
  }

  /**
   * @param {{content:string,path:string}} fileObj
   * @returns {string}
   */
  _handleElementFile(fileObj) {
    let rawContent = fileObj.content;
    let content = /^module\.exports/.test(rawContent) ? this._eval(rawContent) : rawContent;
    let originalExtension = path.extname(fileObj.path);
    let fileName = path.basename(fileObj.path, originalExtension).replace(/\.(hbs)$/, '');
    let contentHash = this._createContentHash(content);
    let extension = this._getElementFileExtension(fileObj.path);
    let elementFilePath = `contentElements${path.posix.sep}${fileName}-${contentHash}.${extension}`;

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
  _getElementFileExtension(fileName) {
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
    let script = new vm.Script(source);
    let context = { module: {} };
    script.runInNewContext(context);
    return context.module.exports;
  }

  /**
   * @param {string} name 
   * @param {string} content 
   */
  _updateAsset(filePath, content) {
    let source = new sources.RawSource(content);
    this._compilation.updateAsset(filePath, source);
  }

  /**
   * @param {string} name 
   * @param {string} scope 
   * @returns {*}
   */
  _loadAsset(name, scope) {
    let asset = this._compilation.getAsset(name);
    let script = new vm.Script(asset.source.source());
    let context = { self: {} };

    script.runInNewContext(context);

    return context[scope];
  }

  /**
   * @param {string} filePath 
   * @param {string} source 
   */
  _emitAsset(filePath, content) {
    let source = new sources.RawSource(content);
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
    let inlineSourceAssetsUrl = publicPath.length > 0 ? `${publicPath}/assets/` : './assets/';
    let asset = this._compilation.getAsset(cssStylesFilename);
    let source = asset.source.source()
      .trim()
      .replace(/\n/g, '')
      .replace(/\.\.\/assets\//g, inlineSourceAssetsUrl);

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
      replacement = Constant.BSI_CX_DESIGN_BASE_URL + '/' + moduleAssetPath;
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
      .filter(assetPath => !assetPath.startsWith(Constant.BSI_CX_MODULE_RUNTIME_PATH) && importedModules.indexOf(assetPath) === -1)
      .map(assetPath => {
        importedModules.push(assetPath);

        if (inline) {
          let asset = this._compilation.getAsset(assetPath);
          return `<script>${asset.source()}</script>`;
        } else {
          let url = Constant.BSI_CX_DESIGN_BASE_URL + '/' + assetPath;
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
    let error = new WebpackError(message);
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
    let relativePath = path.relative(contextPath, absolutePath).replace(/\\/g, path.posix.sep);
    return '.' + path.posix.sep + relativePath;
  }

  /**
   * @param {string} content 
   * @returns {string}
   */
  _createContentHash(content) {
    return createHash('sha256')
      .update(content)
      .digest('hex')
      .substr(0, _BsiCxWebpackPlugin.ELEMENT_FILE_HASH_LENGTH);
  }

  /**
   * @returns {Handlebars}
   */
  _getHandlebarsParser() {
    return Handlebars.create();
  }

  /**
   * @returns {{}} 
   */
  _getHandlebarsHelpers() {
    let helpersObj = {};
    for (const [name, func] of Object.entries(handlebarsHelpers)) {
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

export default class BsiCxWebpackPlugin {
  static PLUGIN_NAME = 'BsiCxWebpackPlugin';
  apply(compiler) {
    compiler.hooks.thisCompilation.tap(BsiCxWebpackPlugin.PLUGIN_NAME, compilation => {
      compilation.hooks.processAssets.tap(
        {
          name: BsiCxWebpackPlugin.PLUGIN_NAME,
          stage: Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE
        },
        () => {
          const logger = compilation.getLogger(BsiCxWebpackPlugin.PLUGIN_NAME);
          new _BsiCxWebpackPlugin(compiler, compilation, logger).apply();
        })
    });
  }
};
