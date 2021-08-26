import {sources} from 'webpack';
import {Compilation, Compiler, WebpackError, WebpackLogger} from 'webpack/lib';

import BuildConfig from './build-config';
import File from './file';
import JavaPropertyFileBuilder from './java-property-file-builder';
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
   * @return {{title:string,author:string,contentElementGroups:[{}]}}
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
   * @param {{contentElementGroups:[{}]}} designJson
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
   * @param {{contentElements:[{}]}} group
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
   * @param {{title:string,author:string,contentElementGroups:[{}]}} designJson
   * @private
   */
  _createAndEmitDesignProperties(designJson) {
    let properties = new JavaPropertyFileBuilder();

    this._appendMetaInfo(designJson, properties);
    this._appendStyles(designJson, properties);
    this._appendHtmlEditorConfigs(designJson, properties);
    this._appendContentElementGroups(designJson, properties);

    let code = properties.build();
    let source = new sources.RawSource(code);

    this._compilation.emitAsset(File.DESIGN_PROPERTIES, source);
  }

  /**
   * @param {{title:string,author:string}} designJson
   * @param {JavaPropertyFileBuilder} properties
   * @private
   */
  _appendMetaInfo(designJson, properties) {
    let title = designJson[DesignJsonProperty.TITLE];
    let author = designJson[DesignJsonProperty.AUTHOR];

    properties.append(LegacyDesignProperty.TEMPLATE_NAME, title);
    properties.append(LegacyDesignProperty.TEMPLATE_AUTHOR, author);

    properties.appendBlank();
  }

  /**
   * @param {{styleConfigs:{}|undefined}} designJson
   * @param {JavaPropertyFileBuilder} properties
   * @private
   */
  _appendStyles(designJson, properties) {
    let styleConfigs = designJson[DesignJsonProperty.STYLE_CONFIGS] || {};
    for (let [style, config] of Object.entries(styleConfigs)) {
      this._appendStyleConfig(style, config, properties);
    }
  }

  /**
   * @param {string} style
   * @param {{cssClasses:[]|undefined}} config
   * @param {JavaPropertyFileBuilder} properties
   * @private
   */
  _appendStyleConfig(style, config, properties) {
    /**
     * @type {{label: string, cssClass: string}[]}
     */
    let cssClasses = config.cssClasses || [];

    this._appendStyleConfigLabel(style, config, properties);
    cssClasses.forEach(cssClass => this._appendStyleConfigCssClass(style, cssClass, properties));

    properties.appendBlank();
  }

  /**
   * @param {string} style
   * @param {{label:string}} config
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
   * @param {{cssClass:string,label:string}} cssClass
   * @param {JavaPropertyFileBuilder} properties
   * @private
   */
  _appendStyleConfigCssClass(style, cssClass, properties) {
    let key = LegacyDesignProperty.getStyleClassLabel(style, cssClass.cssClass);
    let value = cssClass[DesignJsonProperty.LABEL];
    properties.append(key, value);
  }

  /**
   * @param {{}} designJson
   * @param {JavaPropertyFileBuilder} properties
   * @private
   */
  _appendHtmlEditorConfigs(designJson, properties) {
    let editorConfigs = designJson[DesignJsonProperty.HTML_EDITOR_CONFIGS] || {};
    for (let [name, config] of Object.entries(editorConfigs)) {
      this._appendHtmlEditorConfig(name, config, properties);
    }
  }

  /**
   * @param {string} name
   * @param {{features:[]|undefined}} config
   * @param {JavaPropertyFileBuilder} properties
   * @private
   */
  _appendHtmlEditorConfig(name, config, properties) {
    /**
     * @param {[string|number]} arr
     * @return {string}
     */
    let arrayValueExtractor = arr => arr.join(',');
    /**
     * @param {string|number} v
     * @return {string|number}
     */
    let scalarValueExtractor = v => v;

    this._appendHtmlEditorConfigIfNotUndefined(name, config, DesignJsonProperty.FEATURES, LegacyDesignProperty.getHtmlEditorConfigFeatures, arrayValueExtractor, properties);
    this._appendHtmlEditorConfigIfNotUndefined(name, config, DesignJsonProperty.TEXT_COLORS, LegacyDesignProperty.getHtmlEditorConfigTextColors, arrayValueExtractor, properties);
    this._appendHtmlEditorConfigIfNotUndefined(name, config, DesignJsonProperty.BACKGROUND_COLORS, LegacyDesignProperty.getHtmlEditorConfigBackgroundColors, arrayValueExtractor, properties);
    this._appendHtmlEditorConfigIfNotUndefined(name, config, DesignJsonProperty.FORMATS, LegacyDesignProperty.getHtmlEditorConfigFormats, arrayValueExtractor, properties);
    this._appendHtmlEditorConfigIfNotUndefined(name, config, DesignJsonProperty.FONT_SIZES, LegacyDesignProperty.getHtmlEditorConfigFontSizes, arrayValueExtractor, properties);
    this._appendHtmlEditorConfigIfNotUndefined(name, config, DesignJsonProperty.FONT_SIZE_UNIT, LegacyDesignProperty.getHtmlEditorConfigFontSizeUnit, scalarValueExtractor, properties);
    this._appendHtmlEditorConfigIfNotUndefined(name, config, DesignJsonProperty.FONT_SIZE_DEFAULT, LegacyDesignProperty.getHtmlEditorConfigFontSizeDefault, scalarValueExtractor, properties);
    this._appendHtmlEditorConfigIfNotUndefined(name, config, DesignJsonProperty.LINE_HEIGHTS, LegacyDesignProperty.getHtmlEditorConfigLineHeights, arrayValueExtractor, properties);
    this._appendHtmlEditorConfigIfNotUndefined(name, config, DesignJsonProperty.ENTER_MODE, LegacyDesignProperty.getHtmlEditorConfigEnter, scalarValueExtractor, properties);

    properties.appendBlank();
  }

  /**
   * @param {string} configName
   * @param {{}} config
   * @param {string} property
   * @param {function(string):string} labelGenerator
   * @param {function(*):string} valueExtractor
   * @param {JavaPropertyFileBuilder} properties
   * @private
   */
  _appendHtmlEditorConfigIfNotUndefined(configName, config, property, labelGenerator, valueExtractor, properties) {
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
