const path = require('path');
const fs = require('fs');
const { createHash } = require('crypto');

class BsiCxWebpackPlugin {
  constructor(compiler) {
    this._compiler = compiler;
    this._outputPath = compiler.options.output.path;
    this._entryPath = path.resolve(this._outputPath, 'design.json.js');
    this._designJsonPath = path.resolve(this._outputPath, 'design.json');
    this._designHtmlPath = path.resolve(this._outputPath, 'design.html');
    this._previewHtmlPath = path.resolve(this._outputPath, 'preview.html');
  }

  async apply() {
    let template = this._loadTemplate();

    this._exportDesignJson(template);
    this._exportDesignHtml();
    //this._exportPreviewHtml(template.preview);
  }

  _loadTemplate() {
    return require(this._entryPath);
  }

  _exportDesignJson(meta) {
    meta.designJson.contentElementGroups
      .forEach(group => group.contentElements
        .forEach(element => this._handleElement(element)));
    fs.writeFileSync(this._designJsonPath, JSON.stringify(meta, null, 4));
  }

  _handleElement(element) {
    element.file = this._handleFile(element.file);
  }

  _handleFile(file) {
    let content = file.content;
    let extension = path.extname(file.path);
    let filename = path.basename(file.path, extension);
    let contentHash = createHash('sha256').update(content).digest('hex').substr(0, 20);

    let elementFileName = `${filename}-${contentHash}.html`;
    let elementFilePath = path.resolve(this._outputPath, elementFileName);

    fs.writeFileSync(elementFilePath, content);

    return elementFileName;
  }

  _exportDesignHtml() {
    let template = require(`${this._designHtmlPath}.js`);
    console.info(template.designHtml);
    fs.writeFileSync(this._designHtmlPath, eval(template.designHtml));
  }

  _exportPreviewHtml(preview) {
    fs.writeFileSync(this._previewHtmlPath, preview);
  }
}

class Plugin {
  static PLUGIN_NAME = 'BsiCxWebpackPlugin';
  apply(compiler) {
    compiler.hooks.done.tapAsync(Plugin.PLUGIN_NAME, async (stats, callback) => {
      await new BsiCxWebpackPlugin(compiler).apply();
      callback();
    });
  }
};

module.exports = Plugin;
