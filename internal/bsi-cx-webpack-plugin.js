const path = require('path');
const { createHash } = require('crypto');
const vm = require('vm');

const { Compilation, sources, Compiler } = require('webpack');

class BsiCxWebpackPlugin {
  static DESIGN_JSON = /^design\.json$/;
  static DESIGN_HTML = /^design\.(html|hbs)$/;
  static PREVIEW_HTML = /^preview\.(html|hbs)$/;

  static STYLES_CSS = /^assets\/styles\-[0-9a-z]+\.css$/;

  static BSI_CX_TAG_CSS_STYLE = /\<bsi\:cx.*(style).*\/\>/ig;
  static BSI_CX_TAG_CSS_LINK = /\<bsi\:cx.*(link).*\/\>/ig;

  static ELEMENT_FILE_HASH_LENGTH = 20;

  constructor(compiler, compilation) {
    /**
     * @type {Compiler}
     */
    this._compiler = compiler;
    /**
     * @type {Compilation}
     */
    this._compilation = compilation;
  }

  apply() {
    this._handleDesignJson();
    this._exportDesignHtml();
    this._exportPreviewHtml();
  }

  _exportDesignHtml() {
    let designHtmlPath = this._getAssetName(BsiCxWebpackPlugin.DESIGN_HTML);
    this._updateHtmlTemplate(designHtmlPath, 'design');
  }

  _exportPreviewHtml() {
    let previewHtmlPath = this._getAssetName(BsiCxWebpackPlugin.PREVIEW_HTML);
    this._updateHtmlTemplate(previewHtmlPath, 'preview');
  }

  _handleDesignJson() {
    let designJsonPath = this._getAssetName(BsiCxWebpackPlugin.DESIGN_JSON);
    let designJsonObj = this._loadAsset(designJsonPath, 'json');

    designJsonObj.contentElementGroups
      .forEach(group => group.contentElements
        .forEach(element => this._handleElement(element)));

    let jsonStr = JSON.stringify(designJsonObj, null, 4);
    this._updateAsset(designJsonPath, jsonStr);
  }

  _handleElement(element) {
    element.file = this._handleElementFile(element.file);
  }

  /**
   * @param {{content:string,path:string}} fileObj
   * @returns {string}
   */
  _handleElementFile(fileObj) {
    let content = fileObj.content;
    let originalExtension = path.extname(fileObj.path);
    let fileName = path.basename(fileObj.path, originalExtension);
    let contentHash = this._createContentHash(content);

    let extension = this._getElementFileExtension(fileObj.path);
    let elementFilePath = `contentElements${path.posix.sep}${fileName}-${contentHash}.${extension}`;
    let source = new sources.RawSource(content);

    this._compilation.emitAsset(elementFilePath, source);

    return elementFilePath;
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
   * @param {string} name 
   * @param {string} content 
   */
  _updateAsset(filePath, content) {
    let source = new sources.RawSource(content);
    this._compilation.updateAsset(filePath, source);
  }

  /**
   * @param {string} filePath 
   * @param {string} name 
   */
  _updateHtmlTemplate(filePath, name) {
    let templateObj = this._loadAsset(filePath, name);
    let templateStr = eval(templateObj.content);

    templateStr = templateStr.trim();
    templateStr = this._handleBsiCxTags(templateStr);

    this._updateAsset(filePath, templateStr);
  }

  /**
   * @param {string} content 
   * @returns {string}
   */
  _handleBsiCxTags(content) {
    let publicPath = this._compiler.options.output.publicPath.replace(/\/$/, '');
    let cssStylesFilename = this._getAssetName(BsiCxWebpackPlugin.STYLES_CSS);
    let linkStyleUrl = publicPath.length > 0 ? `${publicPath}/${cssStylesFilename}` : `./${cssStylesFilename}`;
    let inlineSourceAssetsUrl = publicPath.length > 0 ? `${publicPath}/assets/` : './assets/';
    let asset = this._compilation.getAsset(cssStylesFilename);
    let source = asset.source.source()
      .trim()
      .replace(/\n/g, '')
      .replace(/\.\.\/assets\//g, inlineSourceAssetsUrl);

    content = content.replace(BsiCxWebpackPlugin.BSI_CX_TAG_CSS_STYLE, `<style>${source}</style>`);
    content = content.replace(BsiCxWebpackPlugin.BSI_CX_TAG_CSS_LINK, `<link rel="stylesheet" href="${linkStyleUrl}"/>`);

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
          new BsiCxWebpackPlugin(compiler, compilation).apply();
        })
    });
  }
};

module.exports = Plugin;
