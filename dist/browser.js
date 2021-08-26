/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "EnterMode": () => (/* reexport */ enter_mode_namespaceObject),
  "Feature": () => (/* reexport */ feature_namespaceObject),
  "FontSizeUnit": () => (/* reexport */ font_size_unit_namespaceObject),
  "Format": () => (/* reexport */ format_namespaceObject),
  "HtmlEditorConfigBuilder": () => (/* reexport */ HtmlEditorConfigBuilder),
  "StyleBuilder": () => (/* reexport */ StyleBuilder)
});

// NAMESPACE OBJECT: ./src/html-editor-config/feature.js
var feature_namespaceObject = {};
__webpack_require__.r(feature_namespaceObject);
__webpack_require__.d(feature_namespaceObject, {
  "ALIGN_CENTER": () => (ALIGN_CENTER),
  "ALIGN_JUSTIFY": () => (ALIGN_JUSTIFY),
  "ALIGN_LEFT": () => (ALIGN_LEFT),
  "ALIGN_RIGHT": () => (ALIGN_RIGHT),
  "BACKGROUND_COLOR": () => (BACKGROUND_COLOR),
  "BOLD": () => (BOLD),
  "CLEAR_FORMATTING": () => (CLEAR_FORMATTING),
  "EMOTICONS": () => (EMOTICONS),
  "FONT_SIZE": () => (FONT_SIZE),
  "FORMAT_OL": () => (FORMAT_OL),
  "FORMAT_UL": () => (FORMAT_UL),
  "FULLSCREEN": () => (FULLSCREEN),
  "Feature": () => (Feature),
  "HELP": () => (HELP),
  "HTML": () => (HTML),
  "INDENT": () => (INDENT),
  "INSERT_LINK": () => (INSERT_LINK),
  "ITALIC": () => (ITALIC),
  "LINE_HEIGHT": () => (LINE_HEIGHT),
  "OUTDENT": () => (OUTDENT),
  "PARAGRAPH_FORMAT": () => (PARAGRAPH_FORMAT),
  "QUOTE": () => (QUOTE),
  "REDO": () => (REDO),
  "SELECT_ALL": () => (SELECT_ALL),
  "SPECIAL_CHARACTERS": () => (SPECIAL_CHARACTERS),
  "STRIKE_THROUGH": () => (STRIKE_THROUGH),
  "SUBSCRIPT": () => (SUBSCRIPT),
  "SUPERSCRIPT": () => (SUPERSCRIPT),
  "TEXT_COLOR": () => (TEXT_COLOR),
  "UNDERLINE": () => (UNDERLINE),
  "UNDO": () => (UNDO)
});

// NAMESPACE OBJECT: ./src/html-editor-config/enter-mode.js
var enter_mode_namespaceObject = {};
__webpack_require__.r(enter_mode_namespaceObject);
__webpack_require__.d(enter_mode_namespaceObject, {
  "BR": () => (BR),
  "DIV": () => (DIV),
  "EnterMode": () => (EnterMode),
  "P": () => (P)
});

// NAMESPACE OBJECT: ./src/html-editor-config/font-size-unit.js
var font_size_unit_namespaceObject = {};
__webpack_require__.r(font_size_unit_namespaceObject);
__webpack_require__.d(font_size_unit_namespaceObject, {
  "CM": () => (CM),
  "EM": () => (EM),
  "FontSizeUnit": () => (FontSizeUnit),
  "MM": () => (MM),
  "PT": () => (PT),
  "PX": () => (PX),
  "REM": () => (REM)
});

// NAMESPACE OBJECT: ./src/html-editor-config/format.js
var format_namespaceObject = {};
__webpack_require__.r(format_namespaceObject);
__webpack_require__.d(format_namespaceObject, {
  "Format": () => (Format),
  "H1": () => (H1),
  "H2": () => (H2),
  "H3": () => (H3),
  "H4": () => (H4),
  "H5": () => (H5),
  "H6": () => (H6),
  "P": () => (format_P),
  "PRE": () => (PRE)
});

;// CONCATENATED MODULE: ./src/html-editor-config/feature.js
class Feature {
  /**
   * @param {string} value
   */
  constructor(value) {
    /**
     * @type {string}
     * @private
     */
    this._value = value;
  }

  /**
   * @returns {string}
   */
  get value() {
    return this._value;
  }
}

/**
 * @type {Feature}
 */
const BOLD = new Feature('bold');
/**
 * @type {Feature}
 */
const ITALIC = new Feature('italic');
/**
 * @type {Feature}
 */
const UNDERLINE = new Feature('underline');
/**
 * @type {Feature}
 */
const STRIKE_THROUGH = new Feature('strikeThrough');
/**
 * @type {Feature}
 */
const SUBSCRIPT = new Feature('subscript');
/**
 * @type {Feature}
 */
const SUPERSCRIPT = new Feature('superscript');
/**
 * @type {Feature}
 */
const FONT_SIZE = new Feature('fontSize');
/**
 * @type {Feature}
 */
const LINE_HEIGHT = new Feature('lineHeight');
/**
 * @type {Feature}
 */
const TEXT_COLOR = new Feature('textColor');
/**
 * @type {Feature}
 */
const BACKGROUND_COLOR = new Feature('backgroundColor');
/**
 * @type {Feature}
 */
const ALIGN_LEFT = new Feature('alignLeft');
/**
 * @type {Feature}
 */
const ALIGN_CENTER = new Feature('alignCenter');
/**
 * @type {Feature}
 */
const ALIGN_RIGHT = new Feature('alignRight');
/**
 * @type {Feature}
 */
const ALIGN_JUSTIFY = new Feature('alignJustify');
/**
 * @type {Feature}
 */
const FORMAT_OL = new Feature('formatOL');
/**
 * @type {Feature}
 */
const FORMAT_UL = new Feature('formatUL');
/**
 * @type {Feature}
 */
const OUTDENT = new Feature('outdent');
/**
 * @type {Feature}
 */
const INDENT = new Feature('indent');
/**
 * @type {Feature}
 */
const PARAGRAPH_FORMAT = new Feature('paragraphFormat');
/**
 * @type {Feature}
 */
const QUOTE = new Feature('quote');
/**
 * @type {Feature}
 */
const SPECIAL_CHARACTERS = new Feature('specialCharacters');
/**
 * @type {Feature}
 */
const EMOTICONS = new Feature('emoticons');
/**
 * @type {Feature}
 */
const INSERT_LINK = new Feature('insertLink');
/**
 * @type {Feature}
 */
const CLEAR_FORMATTING = new Feature('clearFormatting');
/**
 * @type {Feature}
 */
const UNDO = new Feature('undo');
/**
 * @type {Feature}
 */
const REDO = new Feature('redo');
/**
 * @type {Feature}
 */
const FULLSCREEN = new Feature('fullscreen');
/**
 * @type {Feature}
 */
const SELECT_ALL = new Feature('selectAll');
/**
 * @type {Feature}
 */
const HTML = new Feature('html');
/**
 * @type {Feature}
 */
const HELP = new Feature('help');

;// CONCATENATED MODULE: ./src/html-editor-config/enter-mode.js
class EnterMode {
  /**
   * @param {string} value
   */
  constructor(value) {
    /**
     * @type {string}
     * @private
     */
    this._value = value;
  }

  /**
   * @returns {string}
   */
  get value() {
    return this._value;
  }
}

/**
 * @type {EnterMode}
 */
const P = new EnterMode('p');
/**
 * @type {EnterMode}
 */
const BR = new EnterMode('br');
/**
 * @type {EnterMode}
 */
const DIV = new EnterMode('div');

;// CONCATENATED MODULE: ./src/html-editor-config/font-size-unit.js
class FontSizeUnit {
  /**
   * @param {string} value
   */
  constructor(value) {
    /**
     * @type {string}
     * @private
     */
    this._value = value;
  }

  /**
   * @returns {string}
   */
  get value() {
    return this._value;
  }
}

/**
 * @type {FontSizeUnit}
 */
const PX = new FontSizeUnit('px');
/**
 * @type {FontSizeUnit}
 */
const EM = new FontSizeUnit('em');
/**
 * @type {FontSizeUnit}
 */
const REM = new FontSizeUnit('rem');
/**
 * @type {FontSizeUnit}
 */
const PT = new FontSizeUnit('pt');
/**
 * @type {FontSizeUnit}
 */
const CM = new FontSizeUnit('cm');
/**
 * @type {FontSizeUnit}
 */
const MM = new FontSizeUnit('mm');

;// CONCATENATED MODULE: ./src/html-editor-config/format.js
class Format {
  /**
   * @param {string} value
   */
  constructor(value) {
    /**
     * @type {string}
     * @private
     */
    this._value = value;
  }

  /**
   * @returns {string}
   */
  get value() {
    return this._value;
  }
}

/**
 * @type {Format}
 */
const format_P = new Format('p');
/**
 * @type {Format}
 */
const H1 = new Format('h1');
/**
 * @type {Format}
 */
const H2 = new Format('h2');
/**
 * @type {Format}
 */
const H3 = new Format('h3');
/**
 * @type {Format}
 */
const H4 = new Format('h4');
/**
 * @type {Format}
 */
const H5 = new Format('h5');
/**
 * @type {Format}
 */
const H6 = new Format('h6');
/**
 * @type {Format}
 */
const PRE = new Format('pre');

;// CONCATENATED MODULE: ./src/design-json-property.js
class DesignJsonProperty {
  /**
   * @type {string}
   */
  static TITLE = 'title';
  /**
   * @type {string}
   */
  static AUTHOR = 'author';
  /**
   * @type {string}
   */
  static CONTENT_ELEMENT_GROUPS = 'contentElementGroups';
  /**
   * @type {string}
   */
  static GROUP_ID = 'groupId';
  /**
   * @type {string}
   */
  static CONTENT_ELEMENTS = 'contentElements';
  /**
   * @type {string}
   */
  static FILE = 'file';
  /**
   * @type {string}
   */
  static LABEL = 'label';
  /**
   * @type {string}
   */
  static STYLE_CONFIGS = 'styleConfigs';
  /**
   * @type {string}
   */
  static CSS_CLASSES = 'cssClasses';
  /**
   * @type {string}
   */
  static CSS_CLASS = 'cssClass';
  /**
   * @type {string}
   */
  static HTML_EDITOR_CONFIGS = 'htmlEditorConfigs';
  /**
   * @type {string}
   */
  static FEATURES = 'features';
  /**
   * @type {string}
   */
  static TEXT_COLORS = 'textColors';
  /**
   * @type {string}
   */
  static BACKGROUND_COLORS = 'backgroundColors';
  /**
   * @type {string}
   */
  static FORMATS = 'formats';
  /**
   * @type {string}
   */
  static FONT_SIZES = 'fontSizes';
  /**
   * @type {string}
   */
  static FONT_SIZE_UNIT = 'fontSizeUnit';
  /**
   * @type {string}
   */
  static FONT_SIZE_DEFAULT = 'fontSizeDefault';
  /**
   * @type {string}
   */
  static LINE_HEIGHTS = 'lineHeights';
  /**
   * @type {string}
   */
  static ENTER_MODE = 'enterMode';
}

;// CONCATENATED MODULE: ./src/html-editor-config/html-editor-config-builder.js






class HtmlEditorConfigBuilder {
  constructor() {
    /**
     * @type {string|undefined}
     * @private
     */
    this._identifier = undefined;
    /**
     * @type {Feature[]|undefined}
     * @private
     */
    this._features = undefined;
    /**
     * @type {string[]|undefined}
     * @private
     */
    this._textColors = undefined;
    /**
     * @type {string[]|undefined}
     * @private
     */
    this._backgroundColors = undefined;
    /**
     * @type {Format[]|undefined}
     * @private
     */
    this._formats = undefined;
    /**
     * @type {number[]|undefined}
     * @private
     */
    this._fontSizes = undefined;
    /**
     * @type {FontSizeUnit|undefined}
     * @private
     */
    this._fontSizeUnit = undefined;
    /**
     * @type {number|undefined}
     * @private
     */
    this._fontSizeDefault = undefined;
    /**
     * @type {number[]|undefined}
     * @private
     */
    this._lineHeights = undefined;
    /**
     * @type {EnterMode|undefined}
     * @private
     */
    this._enterMode = undefined;
  }

  /**
   * @returns {string|undefined}
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * @returns {Feature[]|undefined}
   */
  get features() {
    return this._features;
  }

  /**
   * @returns {string[]|undefined}
   */
  get textColors() {
    return this._textColors;
  }

  /**
   * @returns {string[]|undefined}
   */
  get backgroundColors() {
    return this._backgroundColors;
  }

  /**
   * @returns {Format[]|undefined}
   */
  get formats() {
    return this._formats;
  }

  /**
   * @returns {number[]|undefined}
   */
  get fontSizes() {
    return this._fontSizes;
  }

  /**
   * @returns {FontSizeUnit|undefined}
   */
  get fontSizeUnit() {
    return this._fontSizeUnit;
  }

  /**
   * @returns {number|undefined}
   */
  get fontSizeDefault() {
    return this._fontSizeDefault;
  }

  /**
   * @returns {number[]|undefined}
   */
  get lineHeights() {
    return this._lineHeights;
  }

  /**
   * @returns {EnterMode|undefined}
   */
  get enterMode() {
    return this._enterMode;
  }

  /**
   * @param {string} identifier
   * @returns {HtmlEditorConfigBuilder}
   */
  withIdentifier(identifier) {
    this._identifier = identifier;
    return this;
  }

  /**
   * @param {Feature} features
   * @returns {HtmlEditorConfigBuilder}
   */
  withFeatures(...features) {
    this._features = features;
    return this;
  }

  /**
   * @param {string} textColors
   * @returns {HtmlEditorConfigBuilder}
   */
  withTextColors(...textColors) {
    this._textColors = textColors;
    return this;
  }

  /**
   * @param {string} backgroundColors
   * @returns {HtmlEditorConfigBuilder}
   */
  withBackgroundColors(...backgroundColors) {
    this._backgroundColors = backgroundColors;
    return this;
  }

  /**
   * @param {Format} formats
   * @returns {HtmlEditorConfigBuilder}
   */
  withFormats(...formats) {
    this._formats = formats;
    return this;
  }

  /**
   * @param {number} fontSizes
   * @returns {HtmlEditorConfigBuilder}
   */
  withFontSizes(...fontSizes) {
    this._fontSizes = fontSizes;
    return this;
  }

  /**
   * @param {FontSizeUnit} fontSizeUnit
   * @returns {HtmlEditorConfigBuilder}
   */
  withFontSizeUnit(fontSizeUnit) {
    this._fontSizeUnit = fontSizeUnit;
    return this;
  }

  /**
   * @param {number} fontSizeDefault
   * @returns {HtmlEditorConfigBuilder}
   */
  withFontSizeDefault(fontSizeDefault) {
    this._fontSizeDefault = fontSizeDefault;
    return this;
  }

  /**
   * @param {number} lineHeights
   * @returns {HtmlEditorConfigBuilder}
   */
  withLineHeights(...lineHeights) {
    this._lineHeights = lineHeights;
    return this;
  }

  /**
   * @param {EnterMode} enterMode
   * @returns {HtmlEditorConfigBuilder}
   */
  withEnterMode(enterMode) {
    this._enterMode = enterMode;
    return this;
  }

  build() {
    let editorConfig = {};
    let config = {};
    config[this.identifier] = editorConfig;

    this._applyPropertyToConfig(DesignJsonProperty.FEATURES, editorConfig, item => item.value);
    this._applyPropertyToConfig(DesignJsonProperty.TEXT_COLORS, editorConfig, item => item);
    this._applyPropertyToConfig(DesignJsonProperty.BACKGROUND_COLORS, editorConfig, item => item);
    this._applyPropertyToConfig(DesignJsonProperty.FORMATS, editorConfig, item => item.value);
    this._applyPropertyToConfig(DesignJsonProperty.FONT_SIZES, editorConfig, item => item);
    this._applyPropertyToConfig(DesignJsonProperty.FONT_SIZE_UNIT, editorConfig, item => item.value);
    this._applyPropertyToConfig(DesignJsonProperty.FONT_SIZE_DEFAULT, editorConfig, item => item);
    this._applyPropertyToConfig(DesignJsonProperty.LINE_HEIGHTS, editorConfig, item => item);
    this._applyPropertyToConfig(DesignJsonProperty.ENTER_MODE, editorConfig, item => item.value);

    return config;
  }

  /**
   * @param {string} property
   * @param {{}} config
   * @param {function} extractFunc
   * @private
   */
  _applyPropertyToConfig(property, config, extractFunc) {
    let value = this[property];

    if (value === undefined) {
      return;
    }

    let computedValue;

    if (value instanceof Array) {
      computedValue = value.map(item => extractFunc(item));
    } else {
      computedValue = extractFunc(value);
    }

    config[property] = computedValue;
  }
}

;// CONCATENATED MODULE: ./src/style/style-builder.js


class StyleBuilder {
  constructor() {
    this._identifier = undefined;
    this._label = undefined;
    this._cssClasses = [];
  }

  /**
   * @returns {string|undefined}
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * @returns {string|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @returns {[{label:string,cssClass:string}]}
   */
  get cssClasses() {
    return this._cssClasses;
  }

  /**
   * @param {string} identifier
   * @returns {StyleBuilder}
   */
  withIdentifier(identifier) {
    this._identifier = identifier;
    return this;
  }

  /**
   * @param {string} label
   * @returns {StyleBuilder}
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  /**
   * @param {string} label
   * @param {string} cssClass
   * @returns {StyleBuilder}
   */
  withCssClass(label, cssClass) {
    let style = {};

    style[DesignJsonProperty.LABEL] = label;
    style[DesignJsonProperty.CSS_CLASS] = cssClass;

    this._cssClasses.push(style);

    return this;
  }

  build() {
    let config = {};
    let style = {};

    style[DesignJsonProperty.LABEL] = this.label;
    style[DesignJsonProperty.CSS_CLASSES] = this.cssClasses;

    config[this.identifier] = style;

    return config;
  }
}

;// CONCATENATED MODULE: ./export/browser.js









var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=browser.js.map