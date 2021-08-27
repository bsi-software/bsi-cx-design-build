import path from 'path';
import {createHash} from 'crypto';
import vm from 'vm';

import Handlebars from 'handlebars';
import {sources} from 'webpack';
import {Compilation, Compiler, WebpackError, WebpackLogger} from 'webpack/lib';

import BuildConfig from './build-config';
import handlebarsHelpers from './handlebars-helpers';
import Constant from './constant';
import {buildPublicPath, escapeRegex, toString} from './utility';
import DesignJsonProperty from './design-json-property';
import BuilderObjectNormalizer from './builder-object-normalizer';
import File from './file';

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
    let originalExtension = path.extname(fileObj.path);
    let fileName = path.basename(fileObj.path, originalExtension).replace(/\.(hbs)$/, '');
    let contentHash = this._createContentHash(content);
    let extension = this._getTemplateFileExtension(fileObj.path);
    let elementFilePath = `${baseFolder}${path.posix.sep}${fileName}-${contentHash}.${extension}`;

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
    let script = new vm.Script(source);
    let context = {module: {}};
    script.runInNewContext(context);
    return context.module.exports;
  }

  /**
   * @param {string} filePath
   * @param {string} content
   */
  _updateAsset(filePath, content) {
    let source = new sources.RawSource(content);
    this._compilation.updateAsset(filePath, source);
  }

  /**
   * @param {string} scope
   * @param {...string} assetNames
   * @returns {*}
   */
  _loadAssets(scope, ...assetNames) {
    let context = {self: {}};

    for (let assetName of assetNames) {
      let assetFilename = path.resolve(this._compiler.outputPath, assetName);
      let asset = this._compilation.getAsset(assetName);
      let source = asset.source.source();
      let code = toString(source);
      let script = new vm.Script(code, {
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
      replacement = toString(source);
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
          let strSource = toString(source);
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
          stage: Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE
        },
        () => {
          const logger = compilation.getLogger(BsiCxWebpackPlugin.PLUGIN_NAME);
          new _BsiCxWebpackPlugin(this._config, compiler, compilation, logger).apply();
        })
    });
  }
};
