export default class LegacyDesignProperty {
  /**
   * @type {string}
   */
  static TEMPLATE_NAME = 'template.name';
  /**
   * @type {string}
   */
  static TEMPLATE_AUTHOR = 'template.author';
  /**
   * @type {string}
   * @private
   */
  static _LABEL = 'label';
  /**
   * @type {string}
   * @private
   */
  static _DESCRIPTION = 'description';
  /**
   * @type {string}
   * @private
   */
  static _GROUP = 'group';
  /**
   * @type {string}
   * @private
   */
  static _ELEMENT = 'element';
  /**
   * @type {string}
   * @private
   */
  static _PARTS = 'parts';
  /**
   * @type {string}
   * @private
   */
  static _ICON = 'icon';
  /**
   * @type {string}
   * @private
   */
  static _STYLES = 'styles';
  /**
   * @type {string}
   * @private
   */
  static _STYLE = 'style';
  /**
   * @type {string}
   * @private
   */
  static _CLASS = 'class';
  /**
   * @type {string}
   * @private
   */
  static _HTML_EDITOR_CONFIG = 'html-editor-config';
  /**
   * @type {string}
   * @private
   */
  static _FEATURES = 'features';
  /**
   * @type {string}
   * @private
   */
  static _TEXT_COLORS = 'text-colors';
  /**
   * @type {string}
   * @private
   */
  static _BACKGROUND_COLORS = 'background-colors';
  /**
   * @type {string}
   * @private
   */
  static _FORMATS = 'formats';
  /**
   * @type {string}
   * @private
   */
  static _FONT_SIZES = 'font-sizes';
  /**
   * @type {string}
   * @private
   */
  static _FONT_SIZE_UNIT = 'font-size-unit';
  /**
   * @type {string}
   * @private
   */
  static _FONT_SIZE_DEFAULT = 'font-size-default';
  /**
   * @type {string}
   * @private
   */
  static _LINE_HEIGHTS = 'line-heights';
  /**
   * @type {string}
   * @private
   */
  static _ENTER = 'enter';

  /**
   * @param {string} group
   * @returns {string}
   */
  static getContentElementGroupLabel(group) {
    return LegacyDesignProperty._GROUP + '.' + group + '.' + LegacyDesignProperty._LABEL;
  }

  /**
   * @param {string} element
   * @returns {string}
   */
  static getContentElementLabel(element) {
    return LegacyDesignProperty._ELEMENT + '.' + element + '.' + LegacyDesignProperty._LABEL;
  }

  /**
   * @param {string} element
   * @returns {string}
   */
  static getContentElementDescription(element) {
    return LegacyDesignProperty._ELEMENT + '.' + element + '.' + LegacyDesignProperty._DESCRIPTION;
  }

  /**
   * @param {string} element
   * @returns {string}
   */
  static getContentElementIcon(element) {
    return LegacyDesignProperty._ELEMENT + '.' + element + '.' + LegacyDesignProperty._ICON;
  }

  /**
   * @param {string} element
   * @returns {string}
   */
  static getContentElementStyles(element) {
    return LegacyDesignProperty._ELEMENT + '.' + element + '.' + LegacyDesignProperty._STYLES;
  }

  /**
   * @param {string} element
   * @param {string} part
   * @param {number} index
   * @returns {string}
   */
  static getContentElementPartLabel(element, part, index) {
    return LegacyDesignProperty._getContentElementPart(element, part, index) + '.' + LegacyDesignProperty._LABEL;
  }

  /**
   * @param {string} element
   * @param {string} part
   * @param {number} index
   * @returns {string}
   */
  static getContentElementPartHtmlEditorConfig(element, part, index) {
    return LegacyDesignProperty._getContentElementPart(element, part, index) + '.' + LegacyDesignProperty._HTML_EDITOR_CONFIG;
  }

  /**
   * @param {string} element
   * @param {string} part
   * @param {number} index
   * @returns {string}
   */
  static _getContentElementPart(element, part, index) {
    return LegacyDesignProperty._ELEMENT + '.' + element + '.' + LegacyDesignProperty._PARTS + '.' + part + '[' + index + ']';
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  static getStyleLabel(name) {
    return LegacyDesignProperty._STYLE + '.' + name + '.' + LegacyDesignProperty._LABEL;
  }

  /**
   * @param {string} name
   * @param {string} cssClass
   * @returns {string}
   */
  static getStyleClassLabel(name, cssClass) {
    return LegacyDesignProperty._STYLE + '.' + name + '.' + LegacyDesignProperty._CLASS + '.' + cssClass + '.' + LegacyDesignProperty._LABEL
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  static getHtmlEditorConfigFeatures(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._FEATURES;
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  static getHtmlEditorConfigTextColors(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._TEXT_COLORS;
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  static getHtmlEditorConfigBackgroundColors(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._BACKGROUND_COLORS;
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  static getHtmlEditorConfigFormats(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._FORMATS;
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  static getHtmlEditorConfigFontSizes(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._FONT_SIZES;
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  static getHtmlEditorConfigFontSizeUnit(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._FONT_SIZE_UNIT;
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  static getHtmlEditorConfigFontSizeDefault(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._FONT_SIZE_DEFAULT;
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  static getHtmlEditorConfigLineHeights(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._LINE_HEIGHTS;
  }

  /**
   * @param {string} name
   * @returns {string}
   */
  static getHtmlEditorConfigEnter(name) {
    return LegacyDesignProperty._HTML_EDITOR_CONFIG + '.' + name + '.' + LegacyDesignProperty._ENTER;
  }
}
