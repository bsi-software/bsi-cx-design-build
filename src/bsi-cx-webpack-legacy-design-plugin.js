import {sources} from 'webpack';
import {Compilation, Compiler, WebpackError, WebpackLogger} from 'webpack/lib';

import BuildConfig from './build-config';
import File from './file';
import JavaPropertyFileBuilder from './java-property-file-builder';
import {identity, scalarArrayToList} from './extractor';
import {toString} from './utility';
import LegacyDesignProperty from './legacy-design-property';
import DesignJsonProperty from './design-json-property';

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
      if (error instanceof WebpackError) {
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
    let sourceStr = toString(source);
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

    let source = new sources.RawSource(html);

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
    let source = new sources.RawSource(code);

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

export default class BsiCxWebpackLegacyDesignPlugin {
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
          stage: Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE
        },
        () => {
          const logger = compilation.getLogger(BsiCxWebpackLegacyDesignPlugin.PLUGIN_NAME);
          new _BsiCxWebpackLegacyDesignPlugin(this._config, compiler, compilation, logger).apply();
        })
    });
  }
};
