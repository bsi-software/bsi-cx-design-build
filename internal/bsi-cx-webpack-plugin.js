const path = require('path');
const { createHash } = require('crypto');
const vm = require('vm');

const Handlebars = require('handlebars');
const { Compilation, sources, Compiler } = require('webpack');

const helpers = require('./helpers');
const constants = require('./constants');

class BsiCxWebpackPlugin {
  static DESIGN_JSON = /^design\.json$/;
  static DESIGN_HTML = /^design\.(html|hbs)$/;
  static PREVIEW_HTML = /^preview\.(html|hbs)$/;

  static STYLES_CSS = /^assets\/styles\-[0-9a-z]+\.css$/;

  static ELEMENT_FILE_HASH_LENGTH = 20;

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
    } catch (e) {
      this._logger.error(e);
    }
  }

  _exportDesignHtml() {
    let designHtmlPath = this._getAssetName(BsiCxWebpackPlugin.DESIGN_HTML);
    this._updateHtmlTemplate(designHtmlPath, 'design');
  }

  _exportPreviewHtml() {
    let previewFilePath = this._getAssetName(BsiCxWebpackPlugin.PREVIEW_HTML);
    let previewTemplate = this._updateHtmlTemplate(previewFilePath, 'preview');

    if (/\.hbs$/.test(previewFilePath)) {
      this._handlePreviewHandlebars(previewFilePath, previewTemplate);
    }
  }

  _handleDesignJson() {
    let designJsonPath = this._getAssetName(BsiCxWebpackPlugin.DESIGN_JSON);
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
   * @returns {string}
   */
  _getAssetName(nameRegEx) {
    return Object.keys(this._compilation.assets)
      .filter(name => nameRegEx.test(name))
      .shift();
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
    let context = {};

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

    this._updateAsset(filePath, templateStr);

    return templateStr;
  }

  /**
   * @param {string} content 
   * @returns {string}
   */
  _handleStylesheets(content) {
    let publicPath = this._compiler.options.output.publicPath.replace(/\/$/, '');
    let cssStylesFilename = this._getAssetName(BsiCxWebpackPlugin.STYLES_CSS);
    
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

    content = content.replace(new RegExp(constants.BSI_CX_CSS_INLINE, 'g'), source);
    content = content.replace(new RegExp(constants.BSI_CX_CSS_HREF, 'g'), linkStyleUrl);

    return content;
  }

  /**
   * @param {string} content 
   * @returns {string}
   */
  _createContentHash(content) {
    return createHash('sha256')
      .update(content)
      .digest('hex')
      .substr(0, BsiCxWebpackPlugin.ELEMENT_FILE_HASH_LENGTH);
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
    Object.keys(helpers).forEach(helper => {
      let name = helper.replace(/^bsi\./, '');
      let func = helpers[helper];
      helpersObj[name] = func;
    });
    return helpersObj;
  }

  /**
   * @param {string} url 
   * @returns {string}
   */
  _removeDesignBaseUrl(url) {
    return url.replace(`${constants.BSI_CX_DESIGN_BASE_URL}/`, '');
  }
}

class Plugin {
  static PLUGIN_NAME = 'BsiCxWebpackPlugin';
  apply(compiler) {
    compiler.hooks.thisCompilation.tap(Plugin.PLUGIN_NAME, compilation => {
      compilation.hooks.processAssets.tap(
        {
          name: Plugin.PLUGIN_NAME,
          stage: Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE
        },
        () => {
          const logger = compilation.getLogger(Plugin.PLUGIN_NAME);
          new BsiCxWebpackPlugin(compiler, compilation, logger).apply();
        })
    });
  }
};

module.exports = Plugin;
