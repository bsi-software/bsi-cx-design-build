import {sources} from 'webpack';
import {Compilation, Compiler, WebpackError, WebpackLogger} from 'webpack/lib';

import BuildConfig from './build-config';
import File from './file';
import JavaPropertyFileBuilder from './java-property-file-builder';
import {toString} from './utility';

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
      this._convertToLegacyFormat();
    } catch (error) {
      if (error instanceof WebpackError) {
        this._compilation.errors.push(error);
      } else {
        this._logger.error(error);
      }
    }
  }

  _convertToLegacyFormat() {
    let designJson = this._getDesignJsonObject();

    this._createAndEmitContentElementsHtml(designJson);
    this._createAndEmitDesignProperties(designJson);
  }

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
   */
  _createAndEmitContentElementsHtml(designJson) {
    let html = designJson
      .contentElementGroups
      .map(group => this._renderContentElementsGroup(group))
      .join('\n');

    let source = new sources.RawSource(html);

    this._compilation.emitAsset(File.CONTENT_ELEMENTS_HTML, source);
  }

  /**
   * @param {{}} group
   * @returns {string}
   */
  _renderContentElementsGroup(group) {
    let elements = group
      .contentElements
      .map(element => this._renderContentElement(element))
      .join('\n');

    return `<div data-bsi-group="${group.groupId}">\n${elements}\n</div>`;
  }

  /**
   * @param {{}} element
   * @returns {string}
   */
  _renderContentElement(element) {
    let asset = this._compilation.getAsset(element.file);
    let source = asset.source.source();

    return source.trim();
  }

  _createAndEmitDesignProperties(designJson) {
    let properties = new JavaPropertyFileBuilder();

    this._appendMetaInfo(designJson, properties);
    this._appendStyles(designJson, properties);

    let source = new sources.RawSource(properties.build());

    this._compilation.emitAsset(File.DESIGN_PROPERTIES, source);
  }

  /**
   * @param {{}} designJson
   * @param {JavaPropertyFileBuilder} properties
   */
  _appendMetaInfo(designJson, properties) {
    properties.append('template.name', designJson.title);
    properties.append('template.author', designJson.author);
    properties.appendBlank();
  }

  /**
   * @param {{}} designJson
   * @param {JavaPropertyFileBuilder} properties
   */
  _appendStyles(designJson, properties) {
    let styleConfigs = designJson.styleConfigs || {};
    for (let [style, config] of Object.entries(styleConfigs)) {
      this._appendStyleConfig(style, config, properties);
    }
  }

  /**
   * @param {string} style
   * @param {{}} config
   * @param {JavaPropertyFileBuilder} properties
   */
  _appendStyleConfig(style, config, properties) {
    let prefix = `style.${style}`;
    properties.append(`${prefix}.label`, config.label);

    let cssClasses = config.cssClasses || [];
    cssClasses.forEach(cssClass => properties.append(`${prefix}.class.${cssClass.cssClass}.label`, cssClass.label));

    properties.appendBlank();
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
