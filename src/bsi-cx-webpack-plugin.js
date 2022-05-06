import path from 'path';
import {createHash} from 'crypto';
import vm from 'vm';

import Handlebars from 'handlebars';
import {sources} from 'webpack';
import {Compilation, Compiler, WebpackError, WebpackLogger} from 'webpack/lib';
import handlebarsHelpers from './handlebars-helpers';
import Constant from './constant';
import {buildPublicPath, escapeRegex, toPosixPath, toString} from './utility';
import DesignJsonProperty from './design-json-property';
import BuilderObjectNormalizer from './builder-object-normalizer';
import File from './file';
import DistFolder from './dist-folder';
import {uuid} from './browser-utility';
import slugify from 'slugify';
import DesignJsonPropertyExtension from './design-json-property-extension';
import BsiHtmlAttributes from './bsi-html-attributes';
import BsiJsPropertyPlugin from './bsi-js-property-plugin';

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
      if (error instanceof WebpackError) {
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
    let designJsonPath = this._getAssetName(_BsiCxWebpackPlugin.DESIGN_JSON);
    let designJsonChunkPath = this._getAssetName(_BsiCxWebpackPlugin.DESIGN_JSON_CHUNK);
    /**
     * @type {*}
     */
    let designJson = this._loadAssets('json', designJsonChunkPath, designJsonPath);

    return BuilderObjectNormalizer.normalize(designJson, this._config.targetVersion);
  }

  /**
   *
   * @param {{}} designJsonObj
   * @returns {Map<string, function(string):string>}
   * @private
   */
  _createReplaceMap(designJsonObj) {
    /**
     * @type {Map<string, function(string):string>}
     */
    let replaceMap = new Map();

    this._addDropzonesToReplaceMap(designJsonObj, replaceMap);

    designJsonObj[DesignJsonProperty.CONTENT_ELEMENT_GROUPS]
      ?.forEach(group => group[DesignJsonProperty.CONTENT_ELEMENTS]
        ?.forEach(element => this._addElementToReplaceMap(element, replaceMap)));

    let website = designJsonObj[DesignJsonProperty.WEBSITE] ?? {};
    Object.values(website[DesignJsonProperty.INCLUDES] ?? {})
      .forEach(include => this._addDropzonesToReplaceMap(include, replaceMap));

    return replaceMap;
  }

  /**
   * @param {{}} element
   * @param {Map<string, function(string):string>} replaceMap
   * @private
   */
  _addElementToReplaceMap(element, replaceMap) {
    this._addDropzonesToReplaceMap(element, replaceMap);

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
   * @private
   */
  _addDropzonesToReplaceMap(objScope, replaceMap) {
    /**
     * @type {{}[]}
     */
    let dropzones = objScope[DesignJsonPropertyExtension.DROPZONES] ?? [];

    dropzones.forEach(dropzone => {
      let dropzoneId = dropzone[DesignJsonPropertyExtension.DROPZONE];
      let allowedElements = dropzone[DesignJsonPropertyExtension.ALLOWED_ELEMENTS]?.join(' ');
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
    let designHtmlPath = this._getAssetName(_BsiCxWebpackPlugin.DESIGN_HTML);
    this._updateHtmlTemplate(designHtmlPath, 'design', replaceMap);
  }

  /**
   * @param {Map<string, function(string):string>} replaceMap
   * @private
   */
  _exportPreviewHtml(replaceMap) {
    let previewFilePath = this._getAssetName(_BsiCxWebpackPlugin.PREVIEW_HTML);
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
    let designJsonPath = this._getAssetName(_BsiCxWebpackPlugin.DESIGN_JSON);
    let designJsonChunkPath = this._getAssetName(_BsiCxWebpackPlugin.DESIGN_JSON_CHUNK);
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

    let contentHash = this._createContentHash(content);
    let extension = this._getTemplateFileExtension(fileObj.path);
    let prefix = slugify(filenamePrefix ?? uuid());
    let filename = prefix + '-' + contentHash + '.' + extension;
    let elementFilePath = baseFolder + path.posix.sep + filename;

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
    let context = {
      self: {}
    };

    context[Constant.BSI_CX_JS_PROPERTY_PLUGIN] = this._propertyPlugin;
    context[Constant.BSI_CX_TARGET_VERSION] = this._config.targetVersion;
    context[Constant.BSI_CX_TARGET_TYPE] = this._config.designType;

    vm.createContext(context);

    for (let assetName of assetNames) {
      let assetFilename = path.resolve(this._compiler.outputPath, assetName);
      let asset = this._compilation.getAsset(assetName);
      let source = asset.source.source();
      let code = toString(source);
      let script = new vm.Script(code, {
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
    let cssStylesFilename = this._getAssetName(_BsiCxWebpackPlugin.STYLES_CSS);

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
    let assetRegex = new RegExp(`^(${DistFolder.MODULES}|${DistFolder.VENDORS}|${DistFolder.SHARED})\/.*\.js$`);
    let assetPaths = this._getAssetNames(assetRegex);

    return assetPaths
      .filter(assetPath => !assetPath.startsWith(Constant.BSI_CX_MODULE_RUNTIME_PATH) && importedModules.indexOf(assetPath) === -1)
      .map(assetPath => {
        importedModules.push(assetPath);
        if (inline) {
          let asset = this._compilation.getAsset(assetPath);
          let source = asset.source.source();
          let strSource = toString(source);
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
    let relativePath = toPosixPath(path.relative(contextPath, absolutePath));
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
          stage: Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE
        },
        () => {
          const logger = compilation.getLogger(BsiCxWebpackPlugin.PLUGIN_NAME);
          new _BsiCxWebpackPlugin(this._context, compiler, compilation, logger).apply();
        })
    });
  }
};
