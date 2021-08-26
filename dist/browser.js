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
  "AbstractBuilder": () => (/* reexport */ AbstractBuilder),
  "AbstractPart": () => (/* reexport */ AbstractPart),
  "BackgroundImagePart": () => (/* reexport */ BackgroundImagePart),
  "ContentElement": () => (/* reexport */ ContentElement),
  "DesignType": () => (/* reexport */ design_type_namespaceObject),
  "EnterMode": () => (/* reexport */ enter_mode_namespaceObject),
  "Feature": () => (/* reexport */ feature_namespaceObject),
  "FontSizeUnit": () => (/* reexport */ font_size_unit_namespaceObject),
  "FormCheckboxPart": () => (/* reexport */ FormCheckboxPart),
  "FormFieldPart": () => (/* reexport */ FormFieldPart),
  "FormPart": () => (/* reexport */ FormPart),
  "FormRadioPart": () => (/* reexport */ FormRadioPart),
  "FormSelectPart": () => (/* reexport */ FormSelectPart),
  "FormTextareaPart": () => (/* reexport */ FormTextareaPart),
  "Format": () => (/* reexport */ format_namespaceObject),
  "FormattedTextPart": () => (/* reexport */ FormattedTextPart),
  "HtmlEditorConfig": () => (/* reexport */ HtmlEditorConfig),
  "HtmlPart": () => (/* reexport */ HtmlPart),
  "Icon": () => (/* reexport */ icon_namespaceObject),
  "ImagePart": () => (/* reexport */ ImagePart),
  "IteratorPart": () => (/* reexport */ IteratorPart),
  "LinkPart": () => (/* reexport */ LinkPart),
  "NewsSnippetsPart": () => (/* reexport */ NewsSnippetsPart),
  "Part": () => (/* reexport */ part_namespaceObject),
  "PlainTextPart": () => (/* reexport */ PlainTextPart),
  "SocialFollowPart": () => (/* reexport */ SocialFollowPart),
  "SocialSharePart": () => (/* reexport */ SocialSharePart),
  "Style": () => (/* reexport */ Style),
  "TablePart": () => (/* reexport */ TablePart),
  "UrlProviderPart": () => (/* reexport */ UrlProviderPart),
  "Version": () => (/* reexport */ version_namespaceObject),
  "VideoPart": () => (/* reexport */ VideoPart)
});

// NAMESPACE OBJECT: ./src/content-element/part/part.js
var part_namespaceObject = {};
__webpack_require__.r(part_namespaceObject);
__webpack_require__.d(part_namespaceObject, {
  "BACKGROUND_IMAGE": () => (BACKGROUND_IMAGE),
  "FORM": () => (FORM),
  "FORMATTED_TEXT": () => (FORMATTED_TEXT),
  "FORM_CHECKBOX": () => (FORM_CHECKBOX),
  "FORM_FIELD": () => (FORM_FIELD),
  "FORM_RADIO": () => (FORM_RADIO),
  "FORM_SELECT": () => (FORM_SELECT),
  "FORM_TEXTAREA": () => (FORM_TEXTAREA),
  "HTML": () => (HTML),
  "IMAGE": () => (IMAGE),
  "ITERATOR": () => (ITERATOR),
  "LINK": () => (LINK),
  "NEWS_SNIPPETS": () => (NEWS_SNIPPETS),
  "PLAIN_TEXT": () => (PLAIN_TEXT),
  "Part": () => (Part),
  "SOCIAL_FOLLOW": () => (SOCIAL_FOLLOW),
  "SOCIAL_SHARE": () => (SOCIAL_SHARE),
  "TABLE": () => (TABLE),
  "URL_PROVIDER": () => (URL_PROVIDER),
  "VIDEO": () => (VIDEO)
});

// NAMESPACE OBJECT: ./src/design-type.js
var design_type_namespaceObject = {};
__webpack_require__.r(design_type_namespaceObject);
__webpack_require__.d(design_type_namespaceObject, {
  "DesignType": () => (DesignType),
  "EMAIL": () => (EMAIL),
  "LANDINGPAGE": () => (LANDINGPAGE),
  "WEBSITE": () => (WEBSITE)
});

// NAMESPACE OBJECT: ./src/version.js
var version_namespaceObject = {};
__webpack_require__.r(version_namespaceObject);
__webpack_require__.d(version_namespaceObject, {
  "CX_1_3": () => (CX_1_3),
  "CX_22_0": () => (CX_22_0),
  "STUDIO_1_0": () => (STUDIO_1_0),
  "STUDIO_1_1": () => (STUDIO_1_1),
  "STUDIO_1_2": () => (STUDIO_1_2),
  "Version": () => (Version)
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
  "HTML": () => (feature_HTML),
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

// NAMESPACE OBJECT: ./src/content-element/icon.js
var icon_namespaceObject = {};
__webpack_require__.r(icon_namespaceObject);
__webpack_require__.d(icon_namespaceObject, {
  "ASTERISK": () => (ASTERISK),
  "CHAIN": () => (CHAIN),
  "CHECKBOX": () => (CHECKBOX),
  "COMMUNICATION": () => (COMMUNICATION),
  "COMPASS": () => (COMPASS),
  "DIAGRAM_AREA": () => (DIAGRAM_AREA),
  "DIAGRAM_BAR": () => (DIAGRAM_BAR),
  "DIAGRAM_LINE": () => (DIAGRAM_LINE),
  "DIVIDER": () => (DIVIDER),
  "DOCUMENT": () => (DOCUMENT),
  "DROPDOWN": () => (DROPDOWN),
  "ENVELOPE": () => (ENVELOPE),
  "FACEBOOK": () => (FACEBOOK),
  "FORMFIELD": () => (FORMFIELD),
  "HANDSHAKE": () => (HANDSHAKE),
  "HEADING": () => (HEADING),
  "HEADSET": () => (HEADSET),
  "HEART": () => (HEART),
  "IMAGE": () => (icon_IMAGE),
  "INFO": () => (INFO),
  "Icon": () => (Icon),
  "LIST": () => (LIST),
  "MEGAPHONE": () => (MEGAPHONE),
  "METADATA": () => (METADATA),
  "ONE_COLUMN": () => (ONE_COLUMN),
  "PAPERCLIP": () => (PAPERCLIP),
  "PARAMETER": () => (PARAMETER),
  "PERSON_FEMALE": () => (PERSON_FEMALE),
  "PERSON_MALE": () => (PERSON_MALE),
  "PHONE": () => (PHONE),
  "PILE": () => (PILE),
  "QRCODE": () => (QRCODE),
  "RADIOBUTTON": () => (RADIOBUTTON),
  "SIGNPOST": () => (SIGNPOST),
  "SMILEY": () => (SMILEY),
  "SNIPPET": () => (SNIPPET),
  "SOCIAL_FOLLOW": () => (icon_SOCIAL_FOLLOW),
  "SOCIAL_SHARE": () => (icon_SOCIAL_SHARE),
  "TABLE": () => (icon_TABLE),
  "TEXT": () => (TEXT),
  "TEXTAREA": () => (TEXTAREA),
  "TEXT_WITH_IMAGE": () => (TEXT_WITH_IMAGE),
  "THREE_COLUMNS": () => (THREE_COLUMNS),
  "TWITTER": () => (TWITTER),
  "TWO_COLUMNS": () => (TWO_COLUMNS),
  "VIDEO": () => (icon_VIDEO),
  "YOUTUBE": () => (YOUTUBE)
});

;// CONCATENATED MODULE: ./src/abstract-builder.js
class AbstractBuilder {
  /**
   * @return {{}}
   */
  build() {
    throw new Error('not implemented');
  }

  /**
   * @param {string} property
   * @param {{}} targetObj
   * @param {function} extractFunc
   * @protected
   */
  _applyPropertyIfDefined(property, targetObj, extractFunc) {
    if (typeof this[property] === 'undefined') {
      return;
    }

    let value = this[property];
    let computedValue;

    if (value instanceof Array) {
      computedValue = value.map(item => extractFunc(item));
    } else {
      computedValue = extractFunc(value);
    }

    targetObj[property] = computedValue;
  }
}

;// CONCATENATED MODULE: ./src/abstract-constant.js
class AbstractConstant {
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

;// CONCATENATED MODULE: ./src/content-element/part/part.js


class Part extends AbstractConstant {
}

/**
 * @type {Part}
 * @since 1.0
 */
const PLAIN_TEXT = new Part('plain-text');
/**
 * @type {Part}
 * @since 1.0
 */
const FORMATTED_TEXT = new Part('formatted-text');
/**
 * @type {Part}
 * @since 1.0
 */
const HTML = new Part('html');
/**
 * @type {Part}
 * @since 1.0
 */
const VIDEO = new Part('video');
/**
 * @type {Part}
 * @since 1.0
 */
const IMAGE = new Part('image');
/**
 * @type {Part}
 * @since 1.0
 */
const BACKGROUND_IMAGE = new Part('background-image');
/**
 * @type {Part}
 * @since 1.0
 */
const TABLE = new Part('table');
/**
 * @type {Part}
 * @since 1.0
 */
const ITERATOR = new Part('iterator');
/**
 * @type {Part}
 * @since 1.0
 */
const NEWS_SNIPPETS = new Part('news-snippets');
/**
 * @type {Part}
 * @since 1.0
 */
const FORM = new Part('form');
/**
 * @type {Part}
 * @since 1.0
 */
const FORM_FIELD = new Part('form-field');
/**
 * @type {Part}
 * @since 1.0
 */
const FORM_CHECKBOX = new Part('form-checkbox');
/**
 * @type {Part}
 * @since 1.0
 */
const FORM_TEXTAREA = new Part('form-textarea');
/**
 * @type {Part}
 * @since 1.0
 */
const FORM_SELECT = new Part('form-select');
/**
 * @type {Part}
 * @since 1.0
 */
const FORM_RADIO = new Part('form-radio');
/**
 * @type {Part}
 * @since 1.0
 */
const LINK = new Part('link');
/**
 * @type {Part}
 * @since 1.0
 */
const SOCIAL_FOLLOW = new Part('social-follow');
/**
 * @type {Part}
 * @since 1.0
 */
const SOCIAL_SHARE = new Part('social-share');
/**
 * @type {Part}
 * @since 22.0
 */
const URL_PROVIDER = new Part('url-provider');

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
  static ELEMENT_ID = 'elementId';
  /**
   * @type {string}
   */
  static FILE = 'file';
  /**
   * @type {string}
   */
  static ICON = 'icon';
  /**
   * @type {string}
   */
  static PARTS = 'parts';
  /**
   * @type {string}
   */
  static PART_ID = 'partId';
  /**
   * @type {string}
   */
  static HTML_EDITOR_CONFIG = 'htmlEditorConfig';
  /**
   * @type {string}
   */
  static LABEL = 'label';
  /**
   * @type {string}
   */
  static DESCRIPTION = 'description';
  /**
   * @type {string}
   */
  static HIDDEN = 'hidden';
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

;// CONCATENATED MODULE: ./src/extractor.js
/**
 * @param {[string|number]} arr
 * @return {string}
 */
function scalarArrayToList(arr) {
  return arr.join(',');
}

/**
 * @param {*} v
 * @return {*}
 */
function identity(v) {
  return v;
}

/**
 * @param {string|number|boolean} v
 * @return {string|number|boolean}
 */
function scalarIdentity(v) {
  return v;
}

/**
 * @param {AbstractConstant} constant
 * @return {string}
 */
function constantObjectValue(constant) {
  return constant.value;
}

;// CONCATENATED MODULE: ./src/content-element/part/abstract-part.js





class AbstractPart extends AbstractBuilder {
  /**
   * @param {Part} partId
   */
  constructor(partId) {
    super();
    /**
     * @type {Part}
     * @private
     */
    this._partId = partId;
    /**
     * @type {string|undefined}
     * @private
     */
    this._label = undefined;
  }

  /**
   * @return {Part}
   */
  get partId() {
    return this._partId;
  }

  /**
   * @return {string|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @param {string} label
   * @return {AbstractPart}
   * @since 1.0
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  build() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.PART_ID, config, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, scalarIdentity);

    return config;
  }
}

;// CONCATENATED MODULE: ./src/design-type.js


class DesignType extends AbstractConstant {
}

/**
 * @type {DesignType}
 * @since 1.0
 */
const LANDINGPAGE = new DesignType('landingpage');

/**
 * @type {DesignType}
 * @since 1.0
 */
const EMAIL = new DesignType('email');

/**
 * @type {DesignType}
 * @since 1.3
 */
const WEBSITE = new DesignType('website');

;// CONCATENATED MODULE: ./src/version.js



/**
 * @type {DesignType[]}
 */
const LEGACY_TYPES = [
  LANDINGPAGE,
  EMAIL
];

/**
 * @type {DesignType[]}
 */
const ALL_TYPES = [
  LANDINGPAGE,
  EMAIL,
  WEBSITE
];

class Version extends AbstractConstant {
  /**
   *
   * @param {string} version
   * @param {DesignType[]} allowedTypes
   * @param {boolean} legacyFormat
   */
  constructor(version, allowedTypes, legacyFormat) {
    super(version);
    this._allowedTypes = allowedTypes;
    this._legacyFormat = legacyFormat;
  }

  /**
   * @returns {DesignType[]}
   */
  get allowedTypes() {
    return this._allowedTypes;
  }

  /**
   * @returns {boolean}
   */
  get legacyFormat() {
    return this._legacyFormat;
  }
}

/**
 * @type {Version}
 */
const STUDIO_1_0 = new Version('1.0', LEGACY_TYPES, true);

/**
 * @type {Version}
 */
const STUDIO_1_1 = new Version('1.1', LEGACY_TYPES, true);

/**
 * @type {Version}
 */
const STUDIO_1_2 = new Version('1.2', LEGACY_TYPES, true);

/**
 * @type {Version}
 */
const CX_1_3 = new Version('1.3', ALL_TYPES, true);

/**
 * @type {Version}
 */
const CX_22_0 = new Version('22.0', ALL_TYPES, false);

;// CONCATENATED MODULE: ./src/html-editor-config/feature.js


class Feature extends AbstractConstant {
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
const feature_HTML = new Feature('html');
/**
 * @type {Feature}
 */
const HELP = new Feature('help');

;// CONCATENATED MODULE: ./src/html-editor-config/enter-mode.js


class EnterMode extends AbstractConstant {
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


class FontSizeUnit extends AbstractConstant {
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


class Format extends AbstractConstant {
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

;// CONCATENATED MODULE: ./src/html-editor-config/html-editor-config.js








class HtmlEditorConfig extends AbstractBuilder {
  constructor() {
    super();
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
   * @returns {HtmlEditorConfig}
   */
  withIdentifier(identifier) {
    this._identifier = identifier;
    return this;
  }

  /**
   * @param {Feature} features
   * @returns {HtmlEditorConfig}
   */
  withFeatures(...features) {
    this._features = features;
    return this;
  }

  /**
   * @param {string} textColors
   * @returns {HtmlEditorConfig}
   */
  withTextColors(...textColors) {
    this._textColors = textColors;
    return this;
  }

  /**
   * @param {string} backgroundColors
   * @returns {HtmlEditorConfig}
   */
  withBackgroundColors(...backgroundColors) {
    this._backgroundColors = backgroundColors;
    return this;
  }

  /**
   * @param {Format} formats
   * @returns {HtmlEditorConfig}
   */
  withFormats(...formats) {
    this._formats = formats;
    return this;
  }

  /**
   * @param {number} fontSizes
   * @returns {HtmlEditorConfig}
   */
  withFontSizes(...fontSizes) {
    this._fontSizes = fontSizes;
    return this;
  }

  /**
   * @param {FontSizeUnit} fontSizeUnit
   * @returns {HtmlEditorConfig}
   */
  withFontSizeUnit(fontSizeUnit) {
    this._fontSizeUnit = fontSizeUnit;
    return this;
  }

  /**
   * @param {number} fontSizeDefault
   * @returns {HtmlEditorConfig}
   */
  withFontSizeDefault(fontSizeDefault) {
    this._fontSizeDefault = fontSizeDefault;
    return this;
  }

  /**
   * @param {number} lineHeights
   * @returns {HtmlEditorConfig}
   */
  withLineHeights(...lineHeights) {
    this._lineHeights = lineHeights;
    return this;
  }

  /**
   * @param {EnterMode} enterMode
   * @returns {HtmlEditorConfig}
   */
  withEnterMode(enterMode) {
    this._enterMode = enterMode;
    return this;
  }

  build() {
    let editorConfig = {};
    let config = {};

    config[this.identifier] = editorConfig;

    this._applyPropertyIfDefined(DesignJsonProperty.FEATURES, editorConfig, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.TEXT_COLORS, editorConfig, scalarIdentity);
    this._applyPropertyIfDefined(DesignJsonProperty.BACKGROUND_COLORS, editorConfig, scalarIdentity);
    this._applyPropertyIfDefined(DesignJsonProperty.FORMATS, editorConfig, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.FONT_SIZES, editorConfig, scalarIdentity);
    this._applyPropertyIfDefined(DesignJsonProperty.FONT_SIZE_UNIT, editorConfig, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.FONT_SIZE_DEFAULT, editorConfig, scalarIdentity);
    this._applyPropertyIfDefined(DesignJsonProperty.LINE_HEIGHTS, editorConfig, scalarIdentity);
    this._applyPropertyIfDefined(DesignJsonProperty.ENTER_MODE, editorConfig, constantObjectValue);

    return config;
  }
}

;// CONCATENATED MODULE: ./src/style/style.js



/**
 * @since 1.1
 */
class Style extends AbstractBuilder {
  constructor() {
    super();
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
   * @returns {Style}
   */
  withIdentifier(identifier) {
    this._identifier = identifier;
    return this;
  }

  /**
   * @param {string} label
   * @returns {Style}
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  /**
   * @param {string} label
   * @param {string} cssClass
   * @returns {Style}
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

;// CONCATENATED MODULE: ./src/content-element/icon.js


class Icon extends AbstractConstant {
}

/**
 * @type {Icon}
 * @since 1.0
 */
const HEADING = new Icon('heading');
/**
 * @type {Icon}
 * @since 1.0
 */
const TEXT = new Icon('text');
/**
 * @type {Icon}
 * @since 1.0
 */
const TEXT_WITH_IMAGE = new Icon('text-with-image');
/**
 * @type {Icon}
 * @since 1.0
 */
const icon_IMAGE = new Icon('image');
/**
 * @type {Icon}
 * @since 1.0
 */
const icon_TABLE = new Icon('table');
/**
 * @type {Icon}
 * @since 1.0
 */
const LIST = new Icon('list');
/**
 * @type {Icon}
 * @since 1.0
 */
const icon_VIDEO = new Icon('video');
/**
 * @type {Icon}
 * @since 1.0
 */
const MEGAPHONE = new Icon('megaphone');
/**
 * @type {Icon}
 * @since 1.0
 */
const icon_SOCIAL_FOLLOW = new Icon('social-follow');
/**
 * @type {Icon}
 * @since 1.0
 */
const icon_SOCIAL_SHARE = new Icon('social-share');
/**
 * @type {Icon}
 * @since 1.0
 */
const SNIPPET = new Icon('snippet');
/**
 * @type {Icon}
 * @since 1.0
 */
const QRCODE = new Icon('qrcode');
/**
 * @type {Icon}
 * @since 1.0
 */
const PAPERCLIP = new Icon('paperclip');
/**
 * @type {Icon}
 * @since 1.0
 */
const DOCUMENT = new Icon('document');
/**
 * @type {Icon}
 * @since 1.0
 */
const PHONE = new Icon('phone');
/**
 * @type {Icon}
 * @since 1.0
 */
const COMMUNICATION = new Icon('communication');
/**
 * @type {Icon}
 * @since 1.0
 */
const HANDSHAKE = new Icon('handshake');
/**
 * @type {Icon}
 * @since 1.0
 */
const HEART = new Icon('heart');
/**
 * @type {Icon}
 * @since 1.0
 */
const INFO = new Icon('info');
/**
 * @type {Icon}
 * @since 1.0
 */
const ENVELOPE = new Icon('envelope');
/**
 * @type {Icon}
 * @since 1.0
 */
const FACEBOOK = new Icon('facebook');
/**
 * @type {Icon}
 * @since 1.0
 */
const YOUTUBE = new Icon('youtube');
/**
 * @type {Icon}
 * @since 1.0
 */
const PERSON_MALE = new Icon('person-male');
/**
 * @type {Icon}
 * @since 1.0
 */
const PERSON_FEMALE = new Icon('person-female');
/**
 * @type {Icon}
 * @since 1.0
 */
const ASTERISK = new Icon('asterisk');
/**
 * @type {Icon}
 * @since 1.0
 */
const SMILEY = new Icon('smiley');
/**
 * @type {Icon}
 * @since 1.0
 */
const DIVIDER = new Icon('divider');
/**
 * @type {Icon}
 * @since 1.0
 */
const PARAMETER = new Icon('parameter');
/**
 * @type {Icon}
 * @since 1.0
 */
const TWITTER = new Icon('twitter');
/**
 * @type {Icon}
 * @since 1.0
 */
const HEADSET = new Icon('headset');
/**
 * @type {Icon}
 * @since 1.0
 */
const METADATA = new Icon('metadata');
/**
 * @type {Icon}
 * @since 1.0
 */
const PILE = new Icon('pile');
/**
 * @type {Icon}
 * @since 1.0
 */
const CHAIN = new Icon('chain');
/**
 * @type {Icon}
 * @since 1.0
 */
const SIGNPOST = new Icon('signpost');
/**
 * @type {Icon}
 * @since 1.0
 */
const COMPASS = new Icon('compass');
/**
 * @type {Icon}
 * @since 22.0
 */
const DIAGRAM_LINE = new Icon('diagram-line');
/**
 * @type {Icon}
 * @since 22.0
 */
const DIAGRAM_AREA = new Icon('diagram-area');
/**
 * @type {Icon}
 * @since 22.0
 */
const DIAGRAM_BAR = new Icon('diagram-bar');
/**
 * @type {Icon}
 * @since 1.0
 */
const RADIOBUTTON = new Icon('radiobutton');
/**
 * @type {Icon}
 * @since 1.0
 */
const CHECKBOX = new Icon('checkbox');
/**
 * @type {Icon}
 * @since 1.0
 */
const TEXTAREA = new Icon('textarea');
/**
 * @type {Icon}
 * @since 1.0
 */
const FORMFIELD = new Icon('formfield');
/**
 * @type {Icon}
 * @since 1.0
 */
const DROPDOWN = new Icon('dropdown');
/**
 * @type {Icon}
 * @since 1.0
 */
const ONE_COLUMN = new Icon('one-column');
/**
 * @type {Icon}
 * @since 1.0
 */
const TWO_COLUMNS = new Icon('two-columns');
/**
 * @type {Icon}
 * @since 1.0
 */
const THREE_COLUMNS = new Icon('three-columns');

;// CONCATENATED MODULE: ./src/content-element/content-element.js







class ContentElement extends AbstractBuilder {
  constructor() {
    super();
    /**
     * @type {string|undefined}
     * @private
     */
    this._elementId = undefined;
    /**
     * @type {string|undefined}
     * @private
     */
    this._label = undefined;
    /**
     * @type {string|undefined}
     * @private
     */
    this._description = undefined;
    /**
     * @type {{}|undefined}
     * @private
     */
    this._file = undefined;
    /**
     * @type {string|undefined}
     * @private
     */
    this._icon = undefined;
    /**
     * @type {boolean|undefined}
     * @private
     */
    this._hidden = undefined;
    /**
     * @type {[Style]|undefined}
     * @private
     */
    this._styleConfigs = undefined;
    /**
     * @type {[AbstractPart]|undefined}
     * @private
     */
    this._parts = undefined;
  }

  /**
   * @return {string|undefined}
   */
  get elementId() {
    return this._elementId;
  }

  /**
   * @return {string|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @return {string|undefined}
   */
  get description() {
    return this._description;
  }

  /**
   * @return {{}|undefined}
   */
  get file() {
    return this._file;
  }

  /**
   * @return {Icon|undefined}
   */
  get icon() {
    return this._icon;
  }

  /**
   * @return {boolean|undefined}
   */
  get hidden() {
    return this._hidden;
  }

  /**
   * @return {Style[]|undefined}
   */
  get styleConfigs() {
    return this._styleConfigs;
  }

  /**
   * @return {AbstractPart[]|undefined}
   */
  get parts() {
    return this._parts;
  }

  /**
   * @param {string} elementId
   * @return {ContentElement}
   * @since 1.0
   */
  withElementId(elementId) {
    this._elementId = elementId;
    return this;
  }

  /**
   * @param {string} label
   * @return {ContentElement}
   * @since 1.0
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  /**
   * @param {string} file
   * @return {ContentElement}
   * @since 1.0
   */
  withFile(file) {
    this._file = file;
    return this;
  }

  /**
   * @param {Icon} icon
   * @return {ContentElement}
   * @since 1.0
   */
  withIcon(icon) {
    this._icon = icon;
    return this;
  }

  /**
   * @param {boolean} hidden
   * @return {ContentElement}
   * @since 1.3
   */
  withHidden(hidden) {
    this._hidden = hidden;
    return this;
  }

  /**
   * @param {Style} styleConfigs
   * @return {ContentElement}
   * @since 1.1
   */
  withStyleConfigs(...styleConfigs) {
    this._styleConfigs = styleConfigs;
    return this;
  }

  /**
   * @param {AbstractPart} parts
   * @return {ContentElement}
   * @since 1.0
   */
  withParts(...parts) {
    this._parts = parts;
    return this;
  }

  build() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.ELEMENT_ID, config, scalarIdentity);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, scalarIdentity);
    this._applyPropertyIfDefined(DesignJsonProperty.DESCRIPTION, config, scalarIdentity);
    this._applyPropertyIfDefined(DesignJsonProperty.ICON, config, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.HIDDEN, config, scalarIdentity);
    this._applyPropertyIfDefined(DesignJsonProperty.FILE, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.PARTS, config, part => part.build());
    this._applyPropertyIfDefined(DesignJsonProperty.STYLE_CONFIGS, config, style => constantObjectValue(style));

    return config;
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/plain-text-part.js



/**
 * @since 1.0
 */
class PlainTextPart extends AbstractPart {
  constructor() {
    super(PLAIN_TEXT);
  }

  /**
   * @param {String} label
   * @return {PlainTextPart}
   */
  withLabel(label) {
    return /** @type {PlainTextPart} */ super.withLabel(label);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/formatted-text-part.js





/**
 * @since 1.0
 */
class FormattedTextPart extends AbstractPart {
  constructor() {
    super(FORMATTED_TEXT);
    /**
     * @type {HtmlEditorConfig|undefined}
     * @private
     */
    this._htmlEditorConfig = undefined;
  }

  /**
   * @return {HtmlEditorConfig|undefined}
   */
  get htmlEditorConfig() {
    return this._htmlEditorConfig;
  }

  /**
   * @param {String} label
   * @return {FormattedTextPart}
   */
  withLabel(label) {
    return /** @type {FormattedTextPart} */ super.withLabel(label);
  }

  /**
   * @param {HtmlEditorConfig} htmlEditorConfig
   * @return {FormattedTextPart}
   */
  withHtmlEditorConfig(htmlEditorConfig) {
    this._htmlEditorConfig = htmlEditorConfig;
    return this;
  }

  build() {
    let config = super.build();

    this._applyPropertyIfDefined(DesignJsonProperty.HTML_EDITOR_CONFIG, config, v => v.identifier);

    return config;
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/html-part.js



/**
 * @since 1.0
 */
class HtmlPart extends AbstractPart {
  constructor() {
    super(HTML);
  }

  /**
   * @param {String} label
   * @return {HtmlPart}
   */
  withLabel(label) {
    return /** @type {HtmlPart} */ super.withLabel(label);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/video-part.js



/**
 * @since 1.0
 */
class VideoPart extends AbstractPart {
  constructor() {
    super(VIDEO);
  }

  /**
   * @param {String} label
   * @return {VideoPart}
   */
  withLabel(label) {
    return /** @type {VideoPart} */ super.withLabel(label);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/image-part.js



/**
 * @since 1.0
 */
class ImagePart extends AbstractPart {
  constructor() {
    super(IMAGE);
  }

  /**
   * @param {String} label
   * @return {ImagePart}
   */
  withLabel(label) {
    return /** @type {ImagePart} */ super.withLabel(label);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/background-image-part.js



/**
 * @since 1.0
 */
class BackgroundImagePart extends AbstractPart {
  constructor() {
    super(BACKGROUND_IMAGE);
  }

  /**
   * @param {String} label
   * @return {BackgroundImagePart}
   */
  withLabel(label) {
    return /** @type {BackgroundImagePart} */ super.withLabel(label);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/table-part.js



/**
 * @since 1.0
 */
class TablePart extends AbstractPart {
  constructor() {
    super(TABLE);
  }

  /**
   * @param {String} label
   * @return {TablePart}
   */
  withLabel(label) {
    return /** @type {TablePart} */ super.withLabel(label);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/iterator-part.js



/**
 * @since 1.0
 */
class IteratorPart extends AbstractPart {
  constructor() {
    super(ITERATOR);
  }

  /**
   * @param {String} label
   * @return {IteratorPart}
   */
  withLabel(label) {
    return /** @type {IteratorPart} */ super.withLabel(label);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/news-snippets-part.js



/**
 * @since 1.0
 */
class NewsSnippetsPart extends AbstractPart {
  constructor() {
    super(NEWS_SNIPPETS);
  }

  /**
   * @param {String} label
   * @return {NewsSnippetsPart}
   */
  withLabel(label) {
    return /** @type {NewsSnippetsPart} */ super.withLabel(label);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/form-part.js



/**
 * @since 1.0
 */
class FormPart extends AbstractPart {
  constructor() {
    super(FORM);
  }

  /**
   * @param {String} label
   * @return {FormPart}
   */
  withLabel(label) {
    return /** @type {FormPart} */ super.withLabel(label);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/form-field-part.js



/**
 * @since 1.0
 */
class FormFieldPart extends AbstractPart {
  constructor() {
    super(FORM_FIELD);
  }

  /**
   * @param {String} label
   * @return {FormFieldPart}
   */
  withLabel(label) {
    return /** @type {FormFieldPart} */ super.withLabel(label);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/form-checkbox-part.js



/**
 * @since 1.0
 */
class FormCheckboxPart extends AbstractPart {
  constructor() {
    super(FORM_CHECKBOX);
  }

  /**
   * @param {String} label
   * @return {FormCheckboxPart}
   */
  withLabel(label) {
    return /** @type {FormCheckboxPart} */ super.withLabel(label);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/form-textarea-part.js



/**
 * @since 1.0
 */
class FormTextareaPart extends AbstractPart {
  constructor() {
    super(FORM_TEXTAREA);
  }

  /**
   * @param {String} label
   * @return {FormTextareaPart}
   */
  withLabel(label) {
    return /** @type {FormTextareaPart} */ super.withLabel(label);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/form-select-part.js



/**
 * @since 1.0
 */
class FormSelectPart extends AbstractPart {
  constructor() {
    super(FORM_SELECT);
  }

  /**
   * @param {String} label
   * @return {FormSelectPart}
   */
  withLabel(label) {
    return /** @type {FormSelectPart} */ super.withLabel(label);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/form-radio-part.js



/**
 * @since 1.0
 */
class FormRadioPart extends AbstractPart {
  constructor() {
    super(FORM_RADIO);
  }

  /**
   * @param {String} label
   * @return {FormRadioPart}
   */
  withLabel(label) {
    return /** @type {FormRadioPart} */ super.withLabel(label);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/link-part.js



/**
 * @since 1.0
 */
class LinkPart extends AbstractPart {
  constructor() {
    super(LINK);
  }

  /**
   * @param {String} label
   * @return {LinkPart}
   */
  withLabel(label) {
    return /** @type {LinkPart} */ super.withLabel(label);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/social-follow-part.js



/**
 * @since 1.0
 */
class SocialFollowPart extends AbstractPart {
  constructor() {
    super(SOCIAL_FOLLOW);
  }

  /**
   * @param {String} label
   * @return {SocialFollowPart}
   */
  withLabel(label) {
    return /** @type {SocialFollowPart} */ super.withLabel(label);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/social-share-part.js



/**
 * @since 1.0
 */
class SocialSharePart extends AbstractPart {
  constructor() {
    super(SOCIAL_SHARE);
  }

  /**
   * @param {String} label
   * @return {SocialSharePart}
   */
  withLabel(label) {
    return /** @type {SocialSharePart} */ super.withLabel(label);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/url-provider-part.js



/**
 * @since 22.0
 */
class UrlProviderPart extends AbstractPart {
  constructor() {
    super(URL_PROVIDER);
  }

  /**
   * @param {String} label
   * @return {UrlProviderPart}
   */
  withLabel(label) {
    return /** @type {UrlProviderPart} */ super.withLabel(label);
  }
}

;// CONCATENATED MODULE: ./export/browser.js



































var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=browser.js.map