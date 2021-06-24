const path = require('path');

class DesignLoader {
  static CONTENT_ELEMENT_BASE_PATH = 'content-elements';
  static DESIGN_JSON_FILENAME = 'design.json';
  static TEMPLATE_TYPE_EXTENSION = new Map([
    ['.hbs', '.hbs'],
    ['.twig', '.html'],
    ['.html', '.html']
  ]);

  constructor(webpack) {
    this._webpack = webpack;
    this._callback = webpack.async();
  }

  /**
   * @returns {Promise<void>}
   */
  async load() {
    let designObj = this._loadResource();

    await Promise.all(designObj.contentElementGroups
      .map(group => group.contentElements
        .map(element => this._handleElement(element)))
      .flat());

    let designJson = JSON.stringify(designObj);
    this._webpack.emitFile(DesignLoader.DESIGN_JSON_FILENAME, designJson)
    this._callback(null, `export default ${designJson};`);
  }

  /**
   * @param {{}} element 
   * @returns {Promise<void>}
   */
  async _handleElement(element) {
    let originalFilePath = element.file;
    let templateExtension = path.extname(originalFilePath);
    let extension = this._evaluateTemplateExtension(templateExtension);
    let filePath = DesignLoader.CONTENT_ELEMENT_BASE_PATH + path.posix.sep + element.elementId + extension;

    element.file = filePath;

    this._webpack.addDependency(originalFilePath);
    this._webpack.emitFile(filePath, await this._loadTemplate(originalFilePath));
  }

  /**
   * 
   * @param {string} filePath 
   * @returns {Promise<string>}
   */
  _loadTemplate(filePath) {
    return new Promise(resolve => {
      this._webpack.loadModule(filePath, (err, source, sourceMap, module) => {
        resolve(eval(source));
      });
    });
  }

  _evaluateTemplateExtension(originalExtension) {
    let extensionToEvaluate = originalExtension.toLowerCase();
    if (!DesignLoader.TEMPLATE_TYPE_EXTENSION.has(extensionToEvaluate)) {
      throw new Error(`File '${originalExtension} can not be used as template. Only .hbs, .twig and .html are allowed.`)
    }
    return DesignLoader.TEMPLATE_TYPE_EXTENSION.get(extensionToEvaluate);
  }

  /**
   * @param {{}}} obj 
   * @returns {{}}
   */
  _deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  /**
   * @returns {{}}
   */
  _loadResource() {
    let resourcePath = this._webpack.resource.replace(/\\/g, '/');
    let designObj = eval(`require('${resourcePath}')`);
    return this._deepClone(designObj);
  }
}

module.exports = async function () {
  await new DesignLoader(this).load();
};
