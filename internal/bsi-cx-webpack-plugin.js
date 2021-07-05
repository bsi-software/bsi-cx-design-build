const path = require('path');
const fs = require('fs');
const { createHash } = require('crypto');

class BsiCxWebpackPlugin {
  constructor(compiler, stats) {
    this._compiler = compiler;
    this._stats = stats;
    this._outputPath = compiler.options.output.path;
    this._designJsonPath = path.resolve(this._outputPath, 'design.json');
    this._designHtmlPath = path.resolve(this._outputPath, stats.compilation.entrypoints.get('design').options.filename.replace(/\.js$/, ''));
    this._previewHtmlPath = path.resolve(this._outputPath, stats.compilation.entrypoints.get('preview').options.filename.replace(/\.js$/, ''));
  }

  async apply() {
    this._exportDesignJson();
    this._exportDesignHtml();
    this._exportPreviewHtml();
  }

  /**
   * @returns {{}}
   */
  _loadDesignJson() {
    let designJsonPath = `${this._designJsonPath}.js`;
    let designJsonObj = require(designJsonPath);
    return designJsonObj.json;
  }

  _exportDesignJson() {
    let designJsonObj = this._loadDesignJson();
    designJsonObj.contentElementGroups
      .forEach(group => group.contentElements
        .forEach(element => this._handleElement(element)));
    fs.writeFileSync(this._designJsonPath, JSON.stringify(designJsonObj, null, 4));
  }

  _handleElement(element) {
    element.file = this._handleFile(element.file);
  }

  /**
   * @param {{content:string,path:string}} fileObj
   * @returns {string}
   */
  _handleFile(fileObj) {
    let content = fileObj.content;
    let originalExtension = path.extname(fileObj.path);
    let fileName = path.basename(fileObj.path, originalExtension);
    let contentHash = createHash('sha256').update(content).digest('hex').substr(0, 20);

    let extension = this._getElementFileExtension(fileObj.path);
    let elementFileName = `${fileName}-${contentHash}.${extension}`;
    let elementFilePath = path.resolve(this._outputPath, elementFileName);

    fs.writeFileSync(elementFilePath, content.trim());

    return elementFileName;
  }

  /**
   * @param {string} fileName
   * @returns {string}
   */
  _getElementFileExtension(fileName) {
    if (/\.hbs\.twig/.test(fileName)) {
      return 'hbs';
    }
    if (/\.hbs/.test(fileName)) {
      return 'hbs';
    }
    return 'html';
  }

  /**
   * @param {string} filePath 
   * @param {string} name 
   */
  _saveHtmlTemplate(filePath, name) {
    let templatePath = `${filePath}.js`;
    let templateObj = require(templatePath)[name];
    let templateStr = eval(templateObj.content);
    fs.writeFileSync(filePath, templateStr.trim());
  }

  _exportDesignHtml() {
    this._saveHtmlTemplate(this._designHtmlPath, 'design');
  }

  _exportPreviewHtml() {
    this._saveHtmlTemplate(this._previewHtmlPath, 'preview');
  }
}

class Plugin {
  static PLUGIN_NAME = 'BsiCxWebpackPlugin';
  apply(compiler) {
    compiler.hooks.done.tapAsync(Plugin.PLUGIN_NAME, async (stats, callback) => {
      await new BsiCxWebpackPlugin(compiler, stats).apply();
      callback();
    });
  }
};

module.exports = Plugin;
