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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
  AbstractBuilder: () => (/* reexport */ AbstractBuilder),
  AbstractConstant: () => (/* reexport */ AbstractConstant),
  AbstractPart: () => (/* reexport */ AbstractPart),
  BackgroundImagePart: () => (/* reexport */ BackgroundImagePart),
  BuilderObjectNormalizer: () => (/* reexport */ BuilderObjectNormalizer),
  ContentElement: () => (/* reexport */ ContentElement),
  ContentElementGroup: () => (/* reexport */ ContentElementGroup),
  CssClass: () => (/* reexport */ CssClass),
  Design: () => (/* reexport */ Design),
  DesignJsonProperty: () => (/* reexport */ DesignJsonProperty),
  DesignType: () => (/* reexport */ design_type_namespaceObject),
  DomManipulation: () => (/* reexport */ DomManipulation),
  Dropzone: () => (/* reexport */ Dropzone),
  EnterMode: () => (/* reexport */ enter_mode_namespaceObject),
  Feature: () => (/* reexport */ feature_namespaceObject),
  FontSizeUnit: () => (/* reexport */ font_size_unit_namespaceObject),
  FormCheckboxPart: () => (/* reexport */ FormCheckboxPart),
  FormFieldPart: () => (/* reexport */ form_field_part_FormFieldPart),
  FormPart: () => (/* reexport */ FormPart),
  FormRadioPart: () => (/* reexport */ FormRadioPart),
  FormSelectPart: () => (/* reexport */ FormSelectPart),
  FormTextareaPart: () => (/* reexport */ FormTextareaPart),
  Format: () => (/* reexport */ format_namespaceObject),
  FormattedTextPart: () => (/* reexport */ FormattedTextPart),
  HtmlEditorConfig: () => (/* reexport */ HtmlEditorConfig),
  HtmlPart: () => (/* reexport */ HtmlPart),
  Icon: () => (/* reexport */ icon_namespaceObject),
  ImagePart: () => (/* reexport */ ImagePart),
  Include: () => (/* reexport */ Include),
  IteratorPart: () => (/* reexport */ IteratorPart),
  LinkPart: () => (/* reexport */ LinkPart),
  Locale: () => (/* reexport */ locale_namespaceObject),
  NLS: () => (/* reexport */ NLS),
  NewsSnippetsPart: () => (/* reexport */ NewsSnippetsPart),
  ObjectCloner: () => (/* reexport */ ObjectCloner),
  PageInclude: () => (/* reexport */ PageInclude),
  Part: () => (/* reexport */ part_namespaceObject),
  PlainTextPart: () => (/* reexport */ PlainTextPart),
  RawPart: () => (/* reexport */ RawPart),
  RawValue: () => (/* reexport */ RawValue),
  SchemaVersion: () => (/* reexport */ schema_version_namespaceObject),
  SocialFollowPart: () => (/* reexport */ SocialFollowPart),
  SocialSharePart: () => (/* reexport */ SocialSharePart),
  Style: () => (/* reexport */ Style),
  StyleOption: () => (/* reexport */ StyleOption),
  TablePart: () => (/* reexport */ TablePart),
  Translation: () => (/* reexport */ Translation),
  UrlProviderPart: () => (/* reexport */ UrlProviderPart),
  Version: () => (/* reexport */ version_namespaceObject),
  VideoPart: () => (/* reexport */ VideoPart),
  Website: () => (/* reexport */ Website),
  bsiProperty: () => (/* reexport */ bsiProperty),
  cx: () => (/* binding */ cx)
});

// NAMESPACE OBJECT: ./src/design-type.js
var design_type_namespaceObject = {};
__webpack_require__.r(design_type_namespaceObject);
__webpack_require__.d(design_type_namespaceObject, {
  ALL_TYPES: () => (ALL_TYPES),
  DesignType: () => (DesignType),
  EMAIL: () => (EMAIL),
  LANDINGPAGE: () => (LANDINGPAGE),
  LEGACY_TYPES: () => (LEGACY_TYPES),
  TARGET: () => (TARGET),
  WEBSITE: () => (WEBSITE)
});

// NAMESPACE OBJECT: ./src/version.js
var version_namespaceObject = {};
__webpack_require__.r(version_namespaceObject);
__webpack_require__.d(version_namespaceObject, {
  CX_1_3: () => (CX_1_3),
  CX_22_0: () => (CX_22_0),
  CX_23_1: () => (CX_23_1),
  CX_23_2: () => (CX_23_2),
  STUDIO_1_0: () => (STUDIO_1_0),
  STUDIO_1_1: () => (STUDIO_1_1),
  STUDIO_1_2: () => (STUDIO_1_2),
  TARGET: () => (version_TARGET),
  Version: () => (Version)
});

// NAMESPACE OBJECT: ./src/design/locale.js
var locale_namespaceObject = {};
__webpack_require__.r(locale_namespaceObject);
__webpack_require__.d(locale_namespaceObject, {
  DE: () => (DE),
  DE_CH: () => (DE_CH),
  DE_DE: () => (DE_DE),
  EN: () => (EN),
  EN_GB: () => (EN_GB),
  EN_US: () => (EN_US),
  FR: () => (FR),
  FR_CH: () => (FR_CH),
  IT: () => (IT),
  IT_CH: () => (IT_CH),
  Locale: () => (Locale),
  WILDCARD: () => (WILDCARD)
});

// NAMESPACE OBJECT: ./src/design/schema-version.js
var schema_version_namespaceObject = {};
__webpack_require__.r(schema_version_namespaceObject);
__webpack_require__.d(schema_version_namespaceObject, {
  SchemaVersion: () => (SchemaVersion),
  V_1_0: () => (V_1_0),
  V_22_0: () => (V_22_0),
  V_23_1: () => (V_23_1),
  V_23_2: () => (V_23_2)
});

// NAMESPACE OBJECT: ./src/html-editor-config/feature.js
var feature_namespaceObject = {};
__webpack_require__.r(feature_namespaceObject);
__webpack_require__.d(feature_namespaceObject, {
  ALIGN_CENTER: () => (ALIGN_CENTER),
  ALIGN_JUSTIFY: () => (ALIGN_JUSTIFY),
  ALIGN_LEFT: () => (ALIGN_LEFT),
  ALIGN_RIGHT: () => (ALIGN_RIGHT),
  BACKGROUND_COLOR: () => (BACKGROUND_COLOR),
  BOLD: () => (BOLD),
  CLEAR_FORMATTING: () => (CLEAR_FORMATTING),
  EMOTICONS: () => (EMOTICONS),
  FONT_SIZE: () => (FONT_SIZE),
  FORMAT_OL: () => (FORMAT_OL),
  FORMAT_UL: () => (FORMAT_UL),
  FULLSCREEN: () => (FULLSCREEN),
  Feature: () => (Feature),
  HELP: () => (HELP),
  HTML: () => (HTML),
  INDENT: () => (INDENT),
  INSERT_LINK: () => (INSERT_LINK),
  ITALIC: () => (ITALIC),
  LINE_HEIGHT: () => (LINE_HEIGHT),
  OUTDENT: () => (OUTDENT),
  PARAGRAPH_FORMAT: () => (PARAGRAPH_FORMAT),
  QUOTE: () => (QUOTE),
  REDO: () => (REDO),
  SELECT_ALL: () => (SELECT_ALL),
  SPECIAL_CHARACTERS: () => (SPECIAL_CHARACTERS),
  STRIKE_THROUGH: () => (STRIKE_THROUGH),
  SUBSCRIPT: () => (SUBSCRIPT),
  SUPERSCRIPT: () => (SUPERSCRIPT),
  TEXT_COLOR: () => (TEXT_COLOR),
  UNDERLINE: () => (UNDERLINE),
  UNDO: () => (UNDO)
});

// NAMESPACE OBJECT: ./src/html-editor-config/enter-mode.js
var enter_mode_namespaceObject = {};
__webpack_require__.r(enter_mode_namespaceObject);
__webpack_require__.d(enter_mode_namespaceObject, {
  BR: () => (BR),
  DIV: () => (DIV),
  EnterMode: () => (EnterMode),
  P: () => (P)
});

// NAMESPACE OBJECT: ./src/html-editor-config/font-size-unit.js
var font_size_unit_namespaceObject = {};
__webpack_require__.r(font_size_unit_namespaceObject);
__webpack_require__.d(font_size_unit_namespaceObject, {
  CM: () => (CM),
  EM: () => (EM),
  FontSizeUnit: () => (FontSizeUnit),
  MM: () => (MM),
  PT: () => (PT),
  PX: () => (PX),
  REM: () => (REM)
});

// NAMESPACE OBJECT: ./src/html-editor-config/format.js
var format_namespaceObject = {};
__webpack_require__.r(format_namespaceObject);
__webpack_require__.d(format_namespaceObject, {
  Format: () => (Format),
  H1: () => (H1),
  H2: () => (H2),
  H3: () => (H3),
  H4: () => (H4),
  H5: () => (H5),
  H6: () => (H6),
  P: () => (format_P),
  PRE: () => (PRE)
});

// NAMESPACE OBJECT: ./src/content-element/icon.js
var icon_namespaceObject = {};
__webpack_require__.r(icon_namespaceObject);
__webpack_require__.d(icon_namespaceObject, {
  ASTERISK: () => (ASTERISK),
  CALENDAR_CLOCK: () => (CALENDAR_CLOCK),
  CHAIN: () => (CHAIN),
  CHECKBOX: () => (CHECKBOX),
  COMMUNICATION: () => (COMMUNICATION),
  COMPASS: () => (COMPASS),
  DIAGRAM_AREA: () => (DIAGRAM_AREA),
  DIAGRAM_BAR: () => (DIAGRAM_BAR),
  DIAGRAM_LINE: () => (DIAGRAM_LINE),
  DIVIDER: () => (DIVIDER),
  DOCUMENT: () => (DOCUMENT),
  DROPDOWN: () => (DROPDOWN),
  ENVELOPE: () => (ENVELOPE),
  FACEBOOK: () => (FACEBOOK),
  FORMFIELD: () => (FORMFIELD),
  HANDSHAKE: () => (HANDSHAKE),
  HEADING: () => (HEADING),
  HEADSET: () => (HEADSET),
  HEART: () => (HEART),
  IMAGE: () => (IMAGE),
  INFO: () => (INFO),
  Icon: () => (Icon),
  LIST: () => (LIST),
  MEGAPHONE: () => (MEGAPHONE),
  METADATA: () => (METADATA),
  ONE_COLUMN: () => (ONE_COLUMN),
  PAPERCLIP: () => (PAPERCLIP),
  PARAMETER: () => (PARAMETER),
  PERSON_FEMALE: () => (PERSON_FEMALE),
  PERSON_MALE: () => (PERSON_MALE),
  PHONE: () => (PHONE),
  PILE: () => (PILE),
  QRCODE: () => (QRCODE),
  RADIOBUTTON: () => (RADIOBUTTON),
  SIGNPOST: () => (SIGNPOST),
  SMILEY: () => (SMILEY),
  SNIPPET: () => (SNIPPET),
  SOCIAL_FOLLOW: () => (SOCIAL_FOLLOW),
  SOCIAL_SHARE: () => (SOCIAL_SHARE),
  TABLE: () => (TABLE),
  TEXT: () => (TEXT),
  TEXTAREA: () => (TEXTAREA),
  TEXT_WITH_IMAGE: () => (TEXT_WITH_IMAGE),
  THREE_COLUMNS: () => (THREE_COLUMNS),
  TWITTER: () => (TWITTER),
  TWO_COLUMNS: () => (TWO_COLUMNS),
  VIDEO: () => (VIDEO),
  YOUTUBE: () => (YOUTUBE)
});

// NAMESPACE OBJECT: ./src/content-element/part/part.js
var part_namespaceObject = {};
__webpack_require__.r(part_namespaceObject);
__webpack_require__.d(part_namespaceObject, {
  BACKGROUND_IMAGE: () => (BACKGROUND_IMAGE),
  FORM: () => (FORM),
  FORMATTED_TEXT: () => (FORMATTED_TEXT),
  FORM_CHECKBOX: () => (FORM_CHECKBOX),
  FORM_FIELD: () => (FORM_FIELD),
  FORM_RADIO: () => (FORM_RADIO),
  FORM_SELECT: () => (FORM_SELECT),
  FORM_TEXTAREA: () => (FORM_TEXTAREA),
  HTML: () => (part_HTML),
  IMAGE: () => (part_IMAGE),
  ITERATOR: () => (ITERATOR),
  LINK: () => (LINK),
  NEWS_SNIPPETS: () => (NEWS_SNIPPETS),
  PLAIN_TEXT: () => (PLAIN_TEXT),
  Part: () => (Part),
  SOCIAL_FOLLOW: () => (part_SOCIAL_FOLLOW),
  SOCIAL_SHARE: () => (part_SOCIAL_SHARE),
  TABLE: () => (part_TABLE),
  URL_PROVIDER: () => (URL_PROVIDER),
  VIDEO: () => (part_VIDEO)
});

;// ./src/design-json-property.js
class DesignJsonProperty {
  /**
   * @type {string}
   */
  static ID = 'id';
  /**
   * @type {string}
   */
  static SCHEMA_VERSION = 'schemaVersion';
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
  static DATE = 'date';
  /**
   * @type {string}
   */
  static PREVIEW_IMAGE = 'previewImage';
  /**
   * @type {string}
   */
  static ALT_TEXT_MANDATORY = 'altTextMandatory';
  /**
   * @type {string}
   */
  static CAPTION_ENABLED = 'captionEnabled';
  /**
   * @type {string}
   */
  static DEFAULT_LOCALE = 'defaultLocale';
  /**
   * @type {string}
   */
  static LOCALES = 'locales';
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
  static PART_CONFIG = 'config';
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
  static ARCHIVED = 'archived';
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
  static STYLES = 'styles';
  /**
   * @type {string}
   */
  static STYLE_ID = 'styleId';
  /**
   * @type {string}
   */
  static DOM_MANIPULATIONS = 'domManipulations';
  /**
   * @type {string}
   */
  static SELECTOR = 'selector';
  /**
   * @type {string}
   */
  static ATTRIBUTE = 'attribute';
  /**
   * @type {string}
   */
  static VALUE = 'value';
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
  static ENTER_MODE = 'enter';
  /**
   * @type {string}
   */
  static WEBSITE = 'website';
  /**
   * @type {string}
   */
  static NLS = 'nls';
  /**
   * @type {string}
   */
  static MAX_NAVIGATION_LEVEL = 'maxNavigationLevel';
  /**
   * @type {string}
   */
  static PAGINATION = 'pagination';
  /**
   * @type {string}
   */
  static NUM_DATA_RECORDS_PER_PAGE = 'numDataRecordsPerPage';
  /**
   * @type {string}
   */
  static NUM_ADJACENT_PAGES = 'numAdjacentPages';
  /**
   * @type {string}
   */
  static INCLUDES = 'includes';
  /**
   * @type {string}
   */
  static EDITABLE = 'editable';
  /**
   * @type {string}
   */
  static CONTENT_TYPE = 'contentType';
  /**
   * @type {string}
   */
  static NAME = 'name';
  /**
   * @type {string}
   */
  static PAGE_INCLUDE = '__page__';
}

;// ./src/raw-value.js
class RawValue {
  /**
   * @param {*} value
   */
  constructor(value) {
    /**
     * @type {*}
     * @private
     */
    this._value = value;
  }

  /**
   * @returns {*}
   */
  get value() {
    return this._value;
  }
}

;// ./src/abstract-constant.js
/**
 * @abstract
 */
class AbstractConstant {
  /**
   * @type {string}
   * @private
   */
  _value = undefined;

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

  /**
   * @returns {string}
   */
  getValue() {
    return this.value;
  }

  /**
   * @return {string}
   */
  toString() {
    return this.value;
  }
}

;// ./src/object-cloner.js



class ObjectCloner {
  /**
   * @template T
   * @param {T} source
   * @param {T} target
   * @param {boolean} shallow
   * @returns {T}
   * @private
   */
  _clone(source, target, shallow) {
    for (let [propertyName, valueToClone] of Object.entries(source)) {
      target[propertyName] = shallow ? valueToClone : this._cloneValue(valueToClone);
    }

    return target;
  }

  /**
   * @template T
   * @param {T} value
   * @returns {T}
   * @private
   */
  _cloneValue(value) {
    switch (true) {
      case typeof value === 'undefined':
        return value;
      case typeof value === 'string' || value instanceof String:
        return value;
      case typeof value === 'number' || value instanceof Number:
        return value;
      case typeof value === 'boolean' || value instanceof Boolean:
        return value;
      case typeof value === 'bigint' || value instanceof BigInt:
        return value;
      case value instanceof AbstractBuilder:
        return value.clone();
      case value instanceof AbstractConstant:
        return value;
      case typeof value.clone === 'function':
        return value.clone();
      case value instanceof Array || Array.isArray(value):
        return this._cloneArray(value);
      case value instanceof Object || typeof value === 'object':
        return this._cloneObject(value);
      default:
        throw new Error('unable to clone value');
    }
  }

  /**
   * @param {[]} arr
   * @returns {[]}
   * @private
   */
  _cloneArray(arr) {
    return arr.map(item => this._cloneValue(item));
  }

  /**
   * @param {{}} obj
   * @returns {{}}
   * @private
   */
  _cloneObject(obj) {
    let cloneObj = {};
    for (let [key, value] of Object.entries(obj)) {
      cloneObj[key] = this._cloneValue(value);
    }
    return cloneObj;
  }

  /**
   * @template T
   * @param {T} source
   * @param {T} target
   * @param {boolean|undefined} [shallow=true]
   * @returns {T}
   */
  static clone(source, target, shallow) {
    let shallowOpt = shallow === undefined ? true : !!shallow;
    return new ObjectCloner()._clone(source, target, shallowOpt);
  }

  /**
   * @template T
   * @param {T} value
   * @returns {T}
   */
  static cloneValue(value) {
    return new ObjectCloner()._cloneValue(value);
  }
}

;// ./src/constant.js
class Constant {
  /**
   * @type {string}
   */
  static BSI_CX_CSS_HREF = '###BSI_CX_CSS_HREF###';
  /**
   * @type {string}
   */
  static BSI_CX_CSS_INLINE = '###BSI_CX_CSS_INLINE###';
  /**
   * @type {string}
   */
  static BSI_CX_DESIGN_BASE_URL = '{{designBaseUrl}}';
  /**
   * @type {string}
   */
  static BSI_CX_MODULE_RUNTIME_PATH = 'shared/runtime';
  /**
   * @type {string}
   */
  static BSI_CX_MODULE_RUNTIME_HREF = '###BSI_CX_MODULE_RUNTIME_HREF###';
  /**
   * @type {string}
   */
  static BSI_CX_MODULE_RUNTIME_INLINE = '###BSI_CX_MODULE_RUNTIME_INLINE###';
  /**
   * @type {string}
   */
  static BSI_CX_JS_MODULE_START = '###BSI_CX_JS_MODULE_START###';
  /**
   * @type {string}
   */
  static BSI_CX_JS_MODULE_END = '###BSI_CX_JS_MODULE_END###';
  /**
   * @type {string}
   */
  static BSI_CX_JS_PROPERTY_PLUGIN = '###BSI_CX_JS_PROPERTY_PLUGIN###';
  /**
   * @type {string}
   */
  static BSI_CX_TARGET_VERSION = '###BSI_CX_TARGET_VERSION###';
  /**
   * @type {string}
   */
  static BSI_CX_TARGET_TYPE = '###BSI_CX_TARGET_TYPE###';
  /**
   * @type {string}
   */
  static BSI_CX_DEFAULT_LOCALE = '###BSI_CX_DEFAULT_LOCALE###';
};

;// ./src/design-type.js



class DesignType extends AbstractConstant {
  valueOf() {
    return this.value;
  }
}

/**
 * @type {DesignType}
 * @since Studio 1.0
 */
const LANDINGPAGE = new DesignType('landingpage');

/**
 * @type {DesignType}
 * @since Studio 1.0
 */
const EMAIL = new DesignType('email');

/**
 * @type {DesignType}
 * @since BSI CX 1.3
 */
const WEBSITE = new DesignType('website');

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

/**
 * @type {DesignType}
 */
const TARGET = __webpack_require__.g[Constant.BSI_CX_TARGET_TYPE];

;// ./src/version.js




/** @typedef {import('./design-type').DesignType} DesignType */

class Version extends AbstractConstant {
  /**
   *
   * @param {[major:number,minor:number,patch:number]} version
   * @param {DesignType[]} allowedTypes
   * @param {boolean} legacyFormat
   * @param {string|undefined} [schemaVersion]
   */
  constructor(version, allowedTypes, legacyFormat, schemaVersion) {
    super(version.join('.'));

    this._version = version;
    this._allowedTypes = allowedTypes;
    this._legacyFormat = legacyFormat;
    this._schemaVersion = schemaVersion;
  }

  /**
   * @return {[major:number,minor:number,patch:number]}
   */
  get version() {
    return [...this._version];
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

  /**
   * @returns {string|undefined}
   */
  get schemaVersion() {
    return this._schemaVersion;
  }

  /**
   * @param {Version} version
   * @returns {number}
   */
  compareTo(version) {
    for (let i = 0; i < this._version.length; i++) {
      const left = this._version[i];
      const right = version.version?.[i] ?? 0;
      const diff = left - right;
      if (diff !== 0) {
        return diff;
      }
    }

    return 0;
  }

  /**
   * Make versions comparable by calculating an integer value.
   * @return {number}
   */
  valueOf() {
    return this._version.reduce((p, v, i, a) => p + v * Math.pow(10000, a.length - i), 0);
  }
}

/**
 * @type {Version}
 */
const STUDIO_1_0 = new Version([1, 0, 0], LEGACY_TYPES, true);

/**
 * @type {Version}
 */
const STUDIO_1_1 = new Version([1, 1, 0], LEGACY_TYPES, true);

/**
 * @type {Version}
 */
const STUDIO_1_2 = new Version([1, 2, 0], LEGACY_TYPES, true);

/**
 * @type {Version}
 */
const CX_1_3 = new Version([1, 3, 0], ALL_TYPES, true, '1.0');

/**
 * @type {Version}
 */
const CX_22_0 = new Version([22, 0, 0], ALL_TYPES, false, '22.0');

/**
 * @type {Version}
 */
const CX_23_1 = new Version([23, 1, 0], ALL_TYPES, false, '23.1');

/**
 * @type {Version}
 */
const CX_23_2 = new Version([23, 2, 0], ALL_TYPES, false, '23.2');

/**
 * @type {Version}
 */
const version_TARGET = __webpack_require__.g[Constant.BSI_CX_TARGET_VERSION];

;// ./src/abstract-builder.js







/** @typedef {import('./version').Version} Version */
/** @typedef {import('./design-type').DesignType} DesignType */

/**
 * @abstract
 */
class AbstractBuilder {
  /**
   * @type {Version|undefined}
   * @private
   */
  _minVersion = STUDIO_1_0;
  /**
   * @type {Version|undefined}
   * @private
   */
  _maxVersion = undefined;
  /**
   * @type {DesignType[]}
   * @private
   */
  _allowedTypes = ALL_TYPES;

  /**
   * @return {Version}
   */
  get minVersion() {
    return this._minVersion;
  }

  /**
   * @return {Version|undefined}
   */
  get maxVersion() {
    return this._maxVersion;
  }

  /**
   * @returns {DesignType[]}
   */
  get allowedTypes() {
    return [...this._allowedTypes];
  }

  /**
   * Define a minimum CX version. Will be excluded from builds targeting a lower version.
   *
   * @example
   * .withMinVersion(Version.CX_22_0)
   * @see {@link withMaxVersion}
   * @param {Version} minVersion
   * @returns {this}
   */
  withMinVersion(minVersion) {
    this._minVersion = minVersion;
    return this;
  }

  /**
   * Define a maximum CX version. Will be excluded from builds targeting a higher version.
   *
   * @example
   * .withMaxVersion(Version.CX_22_0)
   * @see {@link withMinVersion}
   * @param {Version} maxVersion
   * @returns {this}
   */
  withMaxVersion(maxVersion) {
    this._maxVersion = maxVersion;
    return this;
  }

  /**
   * Define allowed template types. Will be excluded from builds targeting other types.
   *
   * @example
   * .withAllowedTypes(DesignType.EMAIL,DesignType.LANDINGPAGE)
   * @param {...DesignType} types
   * @returns {this}
   */
  withAllowedTypes(...types) {
    this._allowedTypes = types;
    return this;
  }

  /**
   * Build the configuration. Normally, there is no need to invoke this method manually.
   *
   * @returns {{}|undefined}
   */
  build() {
    if (!this.isCompatible()) {
      return undefined;
    }

    return this._buildInternal();
  }

  /**
   * @abstract
   * @returns {{}}
   * @protected
   */
  _buildInternal() {
    throw new Error('not implemented');
  }

  /**
   * Check if this builder part is compatible with the defined target version.
   *
   * @returns {boolean}
   */
  isCompatible() {
    if (this.minVersion && version_TARGET < this.minVersion) {
      return false;
    }

    if (this.maxVersion && version_TARGET > this.maxVersion) {
      return false;
    }

    return this.allowedTypes !== undefined ? this.allowedTypes.findIndex(type => type.value === TARGET.value) !== -1 : true;
  }

  /**
   * @param {string} property
   * @param {{}} targetObj
   * @param {function} extractFunc
   * @param {boolean} [arrayToObject=false]
   * @param {boolean} [setMetaProperty=false]
   * @protected
   */
  _applyPropertyIfDefined(property, targetObj, extractFunc, arrayToObject, setMetaProperty) {
    if (typeof this[property] === 'undefined') {
      return;
    }

    let value = this[property];
    let computedValue;
    let isRawValue = value instanceof RawValue;

    if (property === DesignJsonProperty.NLS && typeof value[0].nlsMarker == 'undefined') {
      value = Object.values(value[0]);
    }

    switch (true) {
      case isRawValue:
        computedValue = value.value;
        break;
      case value instanceof Array:
        computedValue = value
          .filter(item => this._checkCompatibility(item))
          .map(item => extractFunc(item))
          .filter(item => item !== undefined);
        break;
      default:
        computedValue = this._checkCompatibility(value) ? extractFunc(value) : undefined;
        break;
    }

    if (typeof value.nlsMarker !== 'undefined' &&
      (property === DesignJsonProperty.LABEL || property === DesignJsonProperty.DESCRIPTION || property === DesignJsonProperty.NAME)) {
      if (version_TARGET.valueOf() >= CX_23_2.valueOf()) {
        computedValue = '${nlsKey:' + computedValue.identifier + '}';
      } else {
        for (let item of computedValue.translations) {
          if (item.locale === __webpack_require__.g[Constant.BSI_CX_DEFAULT_LOCALE] || item.locale.value === '*') {
            computedValue = item.translation;
          }
        }
      }
    }

    if (!!arrayToObject && !isRawValue) {
      computedValue = this._applyArrayToObject(computedValue);
    }

    if (!!setMetaProperty && !isRawValue) {
      this._applyMetaPropertyFromValue(property, targetObj, value);
    }

    if (computedValue === undefined) {
      return;
    }

    targetObj[property] = computedValue;
  }

  /**
   * @param {string} property
   * @param {{}} targetObj
   * @param {AbstractBuilder|AbstractBuilder[]} value
   * @private
   */
  _applyMetaPropertyFromValue(property, targetObj, value) {
    let computedValue;
    let metaProperty = `_${property}`;

    if (value instanceof Array) {
      computedValue = value.map(item => item.build()).filter(item => item !== undefined);
    } else {
      computedValue = value.build();
    }

    if (computedValue !== undefined) {
      targetObj[metaProperty] = computedValue;
    }
  }

  /**
   * @param {{}[]} arr
   * @private
   */
  _applyArrayToObject(arr) {
    let obj = {};
    for (let item of arr ?? []) {
      obj = {
        ...obj,
        ...item
      };
    }
    return obj;
  }

  /**
   * @param {*} value
   * @return {boolean}
   * @private
   */
  _checkCompatibility(value) {
    return value instanceof AbstractBuilder ? value.isCompatible() : true;
  }

  /**
   * @template T
   * @param {T} newObj
   * @param {boolean|undefined} [shallow=true]
   * @returns {T}
   * @protected
   */
  _clone(newObj, shallow) {
    return ObjectCloner.clone(this, newObj, shallow);
  }
}

;// ./src/builder-object-normalizer.js
class BuilderObjectNormalizer {
  /**
   * @param {*} obj
   * @returns {*}
   * @private
   */
  _normalize(obj) {
    switch (true) {
      case typeof obj === 'undefined':
        return obj;
      case typeof obj === 'string' || obj instanceof String:
        return obj;
      case typeof obj === 'number' || obj instanceof Number:
        return obj;
      case typeof obj === 'boolean' || obj instanceof Boolean:
        return obj;
      case typeof obj === 'bigint' || obj instanceof BigInt:
        return obj;
      case typeof obj.build === 'function':
        return obj.build();
      case typeof obj.getValue === 'function':
        return obj.getValue();
      case obj instanceof Array || Array.isArray(obj):
        return this._normalizeArray(obj);
      case obj instanceof Object || typeof obj === 'object':
        return this._normalizeObject(obj);
      default:
        throw new Error('unable to normalize input');
    }
  }

  /**
   * @param {*[]} arr
   * @returns {*[]}
   * @private
   */
  _normalizeArray(arr) {
    return arr.map(value => this._normalize(value));
  }

  /**
   * @param {{}} obj
   * @returns {{}}
   * @private
   */
  _normalizeObject(obj) {
    let targetObj = {};

    for (let [key, value] of Object.entries(obj)) {
      targetObj[key] = this._normalize(value);
    }

    return targetObj;
  }

  /**
   * Convert a builder object into a standard object by invoking the build method on a builder object or just return the provided object.
   * This method normally operates on imported values from executed JavaScript assets, see {@link _BsiCxWebpackPlugin#_loadAssets}.
   * Such values cannot be checked with instanceof.
   *
   * @param {*} obj
   * @returns {*}
   */
  static normalize(obj) {
    return new BuilderObjectNormalizer()._normalize(obj);
  }
}

;// ./src/browser-utility.js
/**
 * @param {(string|number)[]} arr
 * @returns {string}
 */
function scalarArrayToList(arr) {
  return arr.join(',');
}

/**
 * @template T
 * @param {T} v
 * @returns {T}
 */
function identity(v) {
  return v;
}

/**
 * @param {AbstractConstant} constant
 * @returns {string}
 */
function constantObjectValue(constant) {
  return constant.value;
}

/**
 * @param {AbstractBuilder} builder
 * @returns {{}}
 */
function builderObjectValue(builder) {
  return builder.build();
}

/**
 * Very simple UUID v4 generator. Don't use the <code>crypto.getRandomValues()</code> or the uuid NPM package
 * (won't work in the browser context).
 *
 * @see {@link https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid#answer-2117523}
 * @returns {string}
 */
function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

;// ./src/content-element/part/abstract-part.js




/** @typedef {import('./part').Part} Part */

/**
 * @abstract
 */
class AbstractPart extends AbstractBuilder {
  /**
   * @type {string}
   * @private
   */
  _id = undefined;
  /**
   * @type {Part}
   * @private
   */
  _partId = undefined;
  /**
   * @type {string|NLS|undefined}
   * @private
   */
  _label = undefined;

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
  }

  /**
   * @returns {string}
   */
  get id() {
    return this._id;
  }

  /**
   * @returns {Part}
   */
  get partId() {
    return this._partId;
  }

  /**
   * @returns {string|NLS|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * The ID of the part. You can apply an unique identifier to your content element part.
   * <strong>It is highly recommended to use a {@link https://duckduckgo.com/?q=uuid|UUID}.</strong>
   * This property is only for the design build and will not appear in the final build artifacts.
   * The advantage of using this property is, that you don't have to care about the order of your parts
   * in your specification. The build will reorder the part definitions in the order they appear in the
   * corresponding template. This can be very handy in large and complex elements with many parts.
   *
   * @example
   * // template.html
   * <div data-bsi-element="title">
   *   <h1 data-bsi-element-part="539a1787-7df2-43ab-9a67-e1f913ad5d7c">Lorem ipsum</h1>
   * </div>
   *
   * // title.js
   * module.exports = new ContentElement()
   *   .withElementId('title')
   *   .withLabel('Title')
   *   .withFile(require('./template.html')
   *   .withParts(
   *     new PlainTextPart()
   *       .withId('539a1787-7df2-43ab-9a67-e1f913ad5d7c')
   *       .withLabel('Title'));
   *
   * // dist/title-4026bb9f6ec6c2284775.html
   * <div data-bsi-element="title">
   *   <h1 data-bsi-element-part="plain-text">Lorem ipsum</h1>
   * </div>
   * @param {string} id - The ID to use.
   * @returns {this}
   */
  withId(id) {
    this._id = id;
    return this;
  }

  /**
   * The set content element part's label.
   *
   * @param {string|NLS} label - The label to set.
   * @returns {this}
   * @since Studio 1.0
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  _buildInternal() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.ID, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.PART_ID, config, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, identity);

    return config;
  }
}

;// ./src/design/locale.js


/** @typedef {import('./design').default} Design */

/**
 * Class to define a locale.
 */
class Locale extends AbstractConstant {
}

/**
 * This defines the fallback locale to use.
 *
 * @see {@link Design#withDefaultLocale}
 * @see {@link Design#withLocales}
 * @type {Locale}
 */
const WILDCARD = new Locale('*');
/**
 * @see {@link Design#withDefaultLocale}
 * @see {@link Design#withLocales}
 * @type {Locale}
 */
const EN = new Locale('en');
/**
 * @see {@link Design#withDefaultLocale}
 * @see {@link Design#withLocales}
 * @type {Locale}
 */
const EN_GB = new Locale('en-GB');
/**
 * @see {@link Design#withDefaultLocale}
 * @see {@link Design#withLocales}
 * @type {Locale}
 */
const EN_US = new Locale('en-US');
/**
 * @see {@link Design#withDefaultLocale}
 * @see {@link Design#withLocales}
 * @type {Locale}
 */
const DE = new Locale('de');
/**
 * @see {@link Design#withDefaultLocale}
 * @see {@link Design#withLocales}
 * @type {Locale}
 */
const DE_DE = new Locale('de-DE');
/**
 * @see {@link Design#withDefaultLocale}
 * @see {@link Design#withLocales}
 * @type {Locale}
 */
const DE_CH = new Locale('de-CH');
/**
 * @see {@link Design#withDefaultLocale}
 * @see {@link Design#withLocales}
 * @type {Locale}
 */
const FR = new Locale('fr');
/**
 * @see {@link Design#withDefaultLocale}
 * @see {@link Design#withLocales}
 * @type {Locale}
 */
const FR_CH = new Locale('fr-CH');
/**
 * @see {@link Design#withDefaultLocale}
 * @see {@link Design#withLocales}
 * @type {Locale}
 */
const IT = new Locale('it');
/**
 * @see {@link Design#withDefaultLocale}
 * @see {@link Design#withLocales}
 * @type {Locale}
 */
const IT_CH = new Locale('it-CH');

;// ./src/design/schema-version.js


/** @typedef {import('./design').default} Design */

/**
 * Class to define a schema version.
 */
class SchemaVersion extends AbstractConstant {
}

/**
 * Use this in website templates for BSI CX 1.3.
 *
 * @see {@link Design#withSchemaVersion}
 * @type {SchemaVersion}
 * @since BSI CX 1.3
 */
const V_1_0 = new SchemaVersion('1.0');
/**
 * Use this in all templates for BSI CX 22.0.
 *
 * @see {@link Design#withSchemaVersion}
 * @type {SchemaVersion}
 * @since 22.0
 */
const V_22_0 = new SchemaVersion('22.0');
/**
 * Use this in all templates for BSI CX 23.1.
 *
 * @see {@link Design#withSchemaVersion}
 * @type {SchemaVersion}
 * @since 23.1
 */
const V_23_1 = new SchemaVersion('23.1');
/**
 * Use this in all templates for BSI CX 23.2.
 *
 * @see {@link Design#withSchemaVersion}
 * @type {SchemaVersion}
 * @since 23.2
 */
const V_23_2 = new SchemaVersion('23.2');

;// ./src/design-json-property-extension.js
class DesignJsonPropertyExtension {
  /**
   * @type {string}
   */
  static DROPZONES = 'dropzones';
  /**
   * @type {string}
   */
  static DROPZONE = 'dropzone';
  /**
   * @type {string}
   */
  static ALLOWED_ELEMENTS = 'allowedElements';
  /**
   * @type {string}
   */
  static MAX_ALLOWED_ELEMENTS = 'maxAllowedElements';
  /**
   * @type {string}
   */
  static REMOVE_ALLOWED = 'removeAllowed';
  /**
   * @type {string}
   */
  static COPY_ALLOWED = 'copyAllowed';
  /**
   * @type {string}
   */
  static MOVE_ALLOWED = 'moveAllowed';
}

;// ./src/design/design.js






/** @typedef {import('./schema-version').SchemaVersion} SchemaVersion */
/** @typedef {import('./locale').Locale} Locale */
/** @typedef {import('../content-element/content-element').default} ContentElement */
/** @typedef {import('../content-element/part/formatted-text-part').default} FormattedTextPart */
/** @typedef {import('../content-element/content-element-group').default} ContentElementGroup */
/** @typedef {import('../dropzone/dropzone').default} Dropzone */
/** @typedef {import('../html-editor-config/html-editor-config').default} HtmlEditorConfig */
/** @typedef {import('../website/website').default} Website */
/** @typedef {import('../style/style').default} Style */
/** @typedef {import('../nls/nls').default} NLS */

/**
 * This is the builder class to specify a design.
 *
 * @example
 * module.exports = cx.design
 *   .withTitle('My BSI CX Design')
 *   .withAuthor('John Doe')
 *   .withDate('18.8.2021')
 *   .withPreviewImage(require('./preview.png'))
 *   .withRawDefaultLocale('en')
 *   .withContentElementGroups(
 *     cx.contentElementGroup
 *       .withGroupId('content')
 *       .withLabel('Content')
 *       .withContentElements(
 *         require('./content-elements/content/title'),
 *         require('./content-elements/content/text')));
 */
class Design extends AbstractBuilder {
  /**
   * @type {RawValue|SchemaVersion|undefined}
   * @private
   */
  _schemaVersion = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _title = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _author = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _date = undefined;
  /**
   * @type {{}|undefined}
   * @private
   */
  _previewImage = undefined;
  /**
   * @type {RawValue|Locale|undefined}
   * @private
   */
  _defaultLocale = undefined;
  /**
   * @type {RawValue|[Locale]|undefined}
   * @private
   */
  _locales = undefined;
  /**
   * @type {RawValue|[ContentElementGroup]|undefined}
   * @private
   */
  _contentElementGroups = undefined;
  /**
   * @type {Dropzone[]|undefined}
   * @private
   */
  _dropzones = undefined;
  /**
   * @type {RawValue|[Style]|undefined}
   * @private
   */
  _styleConfigs = undefined;
  /**
   * @type {RawValue|HtmlEditorConfig[]|undefined}
   * @private
   */
  _htmlEditorConfigs = undefined;
  /**
   * @type {RawValue|Website|undefined}
   * @private
   */
  _website = undefined;
  /**
   * @type {RawValue|NLS[]|undefined}
   * @private
   */
  _nls = undefined;

  /**
   * @returns {RawValue|SchemaVersion|undefined}
   */
  get schemaVersion() {
    return this._schemaVersion;
  }

  /**
   * @returns {string|undefined}
   */
  get title() {
    return this._title;
  }

  /**
   * @returns {string|undefined}
   */
  get author() {
    return this._author;
  }

  /**
   * @returns {string|undefined}
   */
  get date() {
    return this._date;
  }

  /**
   * @returns {{}|undefined}
   */
  get previewImage() {
    return this._previewImage;
  }

  /**
   * @returns {RawValue|Locale|undefined}
   */
  get defaultLocale() {
    return this._defaultLocale;
  }

  /**
   * @returns {RawValue|[Locale]|undefined}
   */
  get locales() {
    return this._locales;
  }

  /**
   * @returns {RawValue|ContentElementGroup[]|undefined}
   */
  get contentElementGroups() {
    return this._contentElementGroups;
  }

  /**
   * @returns {Dropzone[]|undefined}
   */
  get dropzones() {
    return this._dropzones;
  }

  /**
   * @returns {RawValue|[Style]|undefined}
   */
  get styleConfigs() {
    return this._styleConfigs;
  }

  /**
   * @returns {RawValue|HtmlEditorConfig[]|undefined}
   */
  get htmlEditorConfigs() {
    return this._htmlEditorConfigs;
  }

  /**
   * @returns {RawValue|Website|undefined}
   */
  get website() {
    return this._website;
  }

  /**
   * @returns {RawValue|NLS[]|undefined}
   */
  get nls() {
    return this._nls;
  }

  /**
   * The schema version to use. This is relevant for website templates and all templates for BSI CX 22.0 onwards.
   *
   * @example
   * .withSchemaVersion(SchemaVersion.V_22_0)
   * @see {@link SchemaVersion} for available versions
   * @see {@link withRawSchemaVersion} to set a raw value
   * @param {SchemaVersion} schemaVersion - The schema version to use.
   * @returns {Design}
   */
  withSchemaVersion(schemaVersion) {
    this._schemaVersion = schemaVersion;
    return this;
  }

  /**
   * Supply a raw schema version.
   *
   * @example
   * .withRawSchemaVersion('22.0')
   * @see {@link withSchemaVersion}
   * @param {string} schemaVersion - The schema version to use.
   * @returns {Design}
   */
  withRawSchemaVersion(schemaVersion) {
    this._schemaVersion = new RawValue(schemaVersion);
    return this;
  }

  /**
   * The title for your design.
   *
   * @param {string} title - The design title.
   * @returns {Design}
   */
  withTitle(title) {
    this._title = title;
    return this;
  }

  /**
   * The author of your design.
   *
   * @param {string} author - The design author.
   * @returns {Design}
   */
  withAuthor(author) {
    this._author = author;
    return this;
  }

  /**
   * The creation date of your design e.g. 18.08.2021.
   *
   * @example
   * .withDate('18.08.2021')
   * @param {string} date - The design date.
   * @returns {Design}
   */
  withDate(date) {
    this._date = date;
    return this;
  }

  /**
   * The preview image of your design. Use in combination with require.
   *
   * @example
   * .withPreviewImage(require('./preview-image.png'))
   * @param {{}} previewImage
   * @returns {Design}
   */
  withPreviewImage(previewImage) {
    this._previewImage = previewImage;
    return this;
  }

  /**
   * The default locale for your design. This is relevant for website templates and all templates for BSI CX 22.0 onwards.
   *
   * @example
   * .withDefaultLocale(Locale.EN)
   * @see {@link Locale} for available locales
   * @see {@link withRawDefaultLocale} to set a raw value
   * @param {Locale} defaultLocale - The design default locale.
   * @returns {Design}
   */
  withDefaultLocale(defaultLocale) {
    this._defaultLocale = defaultLocale;
    return this;
  }

  /**
   * Set the raw default locale as string.
   *
   * @example
   * .withRawDefaultLocale('en')
   * @see {@link withDefaultLocale}
   * @param {string} defaultLocale - The default locale.
   * @returns {Design}
   */
  withRawDefaultLocale(defaultLocale) {
    this._defaultLocale = new RawValue(defaultLocale);
    return this;
  }

  /**
   * The available locales for your design. This is relevant for website templates and all templates for BSI CX 22.0 onwards.
   *
   * @example
   * .withLocales(Locale.EN_GB,Locale.DE_CH)
   * @see {@link Locale} for available locales
   * @see {@link withRawLocales} to set a raw value
   * @param {...Locale} locales - The design locales.
   * @returns {Design}
   */
  withLocales(...locales) {
    this._locales = locales;
    return this;
  }

  /**
   * Set the raw locales as string.
   *
   * @example
   * .withRawLocales('en-GB','de-CH')
   * @see {@link withLocales}
   * @param {...string} locales - The design locales.
   * @returns {Design}
   */
  withRawLocales(...locales) {
    this._locales = new RawValue(locales);
    return this;
  }

  /**
   * Your design's content element groups.
   *
   * @see {@link withRawContentElementGroups} to set a raw value
   * @param {...ContentElementGroup} contentElementGroups - The content element groups.
   * @returns {Design}
   */
  withContentElementGroups(...contentElementGroups) {
    this._contentElementGroups = contentElementGroups;
    return this;
  }

  /**
   * Set the content element groups of your design as raw object.
   *
   * @example
   * .withRawContentElementGroups(
   *   {
   *     groupId: 'content',
   *     label: 'Content',
   *     contentElements: []
   *   },
   *   {
   *     groupId: 'advanced',
   *     label: 'Advanced',
   *     contentElements: []
   *   }
   * )
   * @see {@link withContentElementGroups}
   * @param {...{}} contentElementGroups - The content element groups.
   * @returns {Design}
   */
  withRawContentElementGroups(...contentElementGroups) {
    this._contentElementGroups = new RawValue(contentElementGroups);
    return this;
  }

  /**
   * Define the root dropzones of this template.
   *
   * @example
   * .withDropzones(
   *   cx.dropzone
   *     .withDropzone('a5142bca-448b-40c5-bdde-942f531fcd12')
   *     .withAllowedElements(
   *       require('./content-elements/basic/text'),
   *       require('./content-elements/basic/image'))
   *     .withMaxAllowedElements(1),
   *   cx.dropzone
   *     .withDropzone('3b369b8b-f1f6-4754-bb0f-e49a46c315e1')
   *     .withAllowedElements(
   *       require('./content-elements/basic/text'),
   *       require('./content-elements/basic/image'))
   *     .withMaxAllowedElements(1))
   * @param {...Dropzone} dropzones - The root dropzones.
   * @returns {Design}
   */
  withDropzones(...dropzones) {
    this._dropzones = dropzones;
    return this;
  }

  /**
   * Extend the allowed elements list of a defined dropzone. Be aware that this only works when you define your allowed
   * elements by using the provided builder class with the {@link Dropzone#withAllowedElements} method.
   *
   * @example
   * .withExtendedDropzone(
   *   'a5142bca-448b-40c5-bdde-942f531fcd12',
   *   require('./content-elements/basic/text'),
   *   require('./content-elements/basic/image'))
   * @param {string} id - The ID of the dropzone to extend (set with {@link Dropzone#withDropzone}).
   * @param {...ContentElement} elements - The elements to add to the allowed elements list.
   * @returns {Design}
   */
  withExtendedDropzone(id, ...elements) {
    let dropzone = this._dropzones?.find(dropzone => dropzone.dropzone === id);

    if (dropzone) {
      dropzone.withAllowedElements(...dropzone.allowedElements, ...elements);
    }

    return this;
  }

  /**
   * The style configurations of your design. This is only necessary if you use
   * {@link ContentElement#withRawStyleConfigs} to reference your style configurations.
   * Otherwise you don't have to register your styles here.
   *
   * @see {@link withRawStyleConfigs} to set a raw value
   * @param {...Style} styleConfigs - The style configurations.
   * @returns {Design}
   */
  withStyleConfigs(...styleConfigs) {
    this._styleConfigs = styleConfigs;
    return this;
  }

  /**
   * Set the style configurations of your design as raw object.
   *
   * @example
   * .withRawStyleConfigs({
   *   'background-color': {
   *     label: 'Background Color',
   *     cssClasses: [
   *       { cssClass: 'black-background', label: 'Black' },
   *       { cssClass: 'blue-background', label: 'Blue' }
   *     ]
   *   },
   *   'text-color': {
   *     label: 'Text Color',
   *     cssClasses: [
   *       { cssClass: 'black-text', label: 'Black' },
   *       { cssClass: 'blue-text', label: 'Blue' }
   *     ]
   *   }
   * })
   *
   * With CX 23.2 an extended style format was introduced,
   * which makes it possible to define styles using either CSS classes or DOM manipulations, or a combination of both.
   *
   * @example
   * .withRawStyleConfigs({
   *   'background-color': {
   *     label: 'Background Color',
   *     styles: [
   *       {
   *         styleId: 'darkred-background-5vLqPX',
   *         label: 'Darkred',
   *         cssClass: 'darkred-background',
   *         domManipulations: [
   *           { selector: 'div.darkred-background', attribute: 'style', value: 'background-color: darkred;' },
   *           { selector: 'div.darkred-background p', attribute: 'style', value: 'color: white;' }
   *         ]
   *       },
   *       {
   *         styleId: 'lightblue-background-9ftMNF',
   *         label: 'Lightblue',
   *         cssClass: 'lightblue-background',
   *         domManipulations: [
   *           { selector: 'div.lightblue-background', attribute: 'style', value: 'background-color: lightblue;' },
   *           { selector: 'div.lightblue-background p', attribute: 'style', value: 'color: black;' }
   *         ]
   *       }
   *     ]
   *   }
   * })
   * @see {@link withStyleConfigs}
   * @param {{}} styleConfigs - The <code>styleConfigs</code> object.
   * @returns {Design}
   */
  withRawStyleConfigs(styleConfigs) {
    this._styleConfigs = new RawValue(styleConfigs);
    return this;
  }

  /**
   * The HTML editor configurations of your design. This is only necessary if you use
   * {@link FormattedTextPart#withRawHtmlEditorConfig} to reference your HTML editor configuration.
   * Otherwise you don't have to register your configurations here.
   *
   * @see {@link withRawHtmlEditorConfigs} to set a raw value
   * @param {...HtmlEditorConfig} htmlEditorConfigs
   * @returns {Design}
   */
  withHtmlEditorConfigs(...htmlEditorConfigs) {
    this._htmlEditorConfigs = htmlEditorConfigs;
    return this;
  }

  /**
   * Set the HTML editor configurations as raw object.
   *
   * @example
   * .withRawHtmlEditorConfigs({
   *   minimal: {
   *     features: ['italic','bold','underline','strikeThrough']
   *   }
   * })
   * @see {@link withHtmlEditorConfigs}
   * @param {{}} htmlEditorConfigs - The <code>htmlEditorConfigs</code> object.
   * @returns {Design}
   */
  withRawHtmlEditorConfigs(htmlEditorConfigs) {
    this._htmlEditorConfigs = new RawValue(htmlEditorConfigs);
    return this;
  }

  /**
   * The website configuration of your design.
   *
   * @see {@link withRawWebsite} to set a raw value
   * @param {Website} website - The website object.
   * @returns {Design}
   * @since BSI CX 1.3
   */
  withWebsite(website) {
    this._website = website;
    return this;
  }

  /**
   * Set the raw website object of your design.
   *
   * @example
   * .withRawWebsite({
   *   maxNavigationLevel: 2,
   *   includes: {
   *     __page__: {
   *       editable: true,
   *       file: require('./includes/page.hbs'),
   *       name: 'Template for content pages'
   *     },
   *     footer: {
   *       editable: true,
   *       file: require('./includes/footer.html'),
   *       name: 'Footer'
   *     }
   *   }
   * })
   * @param {{}} website - The raw <code>website</code> object.
   * @returns {Design}
   * @since BSI CX 1.3
   */
  withRawWebsite(website) {
    this._website = new RawValue(website);
    return this;
  }

  /**
   * Configure you design's translation support.
   *
   * @see {@link withRawNLS} to set a raw value
   * @param {...NLS} nls
   * @returns {Design}
   */
  withNLS(...nls) {
    this._nls = nls;
    return this;
  }

  /**
   * Set the raw value of the <code>nls</code> property.
   *
   * @example
   * .withRawNLS({
   *   action: { '*': 'action', de: 'Aktion' },
   *   name: { '*': 'name', de: 'Name' }
   * })
   * @see {@link withNLS}
   * @param {{}} nls - The raw value.
   * @returns {Design}
   */
  withRawNLS(nls) {
    this._nls = new RawValue(nls);
    return this;
  }

  /**
   * @inheritDoc
   */
  _buildInternal() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.SCHEMA_VERSION, config, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.TITLE, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.AUTHOR, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.DATE, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.PREVIEW_IMAGE, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.DEFAULT_LOCALE, config, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.LOCALES, config, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.CONTENT_ELEMENT_GROUPS, config, builderObjectValue);
    this._applyPropertyIfDefined(DesignJsonPropertyExtension.DROPZONES, config, builderObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.STYLE_CONFIGS, config, builderObjectValue, true);
    this._applyPropertyIfDefined(DesignJsonProperty.HTML_EDITOR_CONFIGS, config, builderObjectValue, true);
    this._applyPropertyIfDefined(DesignJsonProperty.WEBSITE, config, builderObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.NLS, config, builderObjectValue, true);

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @example
   * let design1 = new Design().withName('my first design');
   * let design2 = design1.clone().withName('my second design');
   * design1 === design2 // false
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {Design}
   */
  clone(shallow) {
    return this._clone(new Design(), shallow);
  }
}

;// ./src/content-element/content-element-group.js





/** @typedef {import('./content-element').default} ContentElement */

/**
 * This is the builder class to specify content element groups.
 *
 * @example
 * module.exports = cx.contentElementGroup
 *   .withGroupId('content')
 *   .withLabel('Content')
 *   .withContentElements(
 *     require('./content-elements/content/title'),
 *     require('./content-elements/content/text')));
 */
class ContentElementGroup extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _groupId = uuid();
  /**
   * @type {string|NLS|undefined}
   * @private
   */
  _label = undefined;
  /**
   * @type {boolean|undefined}
   * @private
   */
  _hidden = undefined;
  /**
   * @type {RawValue|[ContentElement]|undefined}
   * @private
   */
  _contentElements = undefined;

  /**
   * @returns {string|undefined}
   */
  get groupId() {
    return this._groupId;
  }

  /**
   * @returns {string|NLS|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @returns {boolean|undefined}
   */
  get hidden() {
    return this._hidden;
  }

  /**
   * @returns {RawValue|[ContentElement]|undefined}
   */
  get contentElements() {
    return this._contentElements;
  }

  /**
   * Set an unique identifier for the content element group. If not set, a UUID v4 will be used.
   * <strong>It is recommended to set the group identifier.</strong>
   *
   * @param {string} groupId - The group ID.
   * @returns {ContentElementGroup}
   */
  withGroupId(groupId) {
    this._groupId = groupId;
    return this;
  }

  /**
   * The label for this content element group.
   *
   * @param {string|NLS} label - The group label.
   * @returns {ContentElementGroup}
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  /**
   * Declare this content element group as hidden. It is not required to set this property.
   * Groups are visible per default.
   *
   * @param {boolean} hidden - Hide this group.
   * @returns {ContentElementGroup}
   */
  withHidden(hidden) {
    this._hidden = hidden;
    return this;
  }

  /**
   * Set the content elements of your group.
   *
   * @example
   * .withContentElements(
   *   cx.contentElement
   *     .withElementId('image-with-text')
   *     .withLabel('Image with text')
   *     .withDescription('Displays an image with an optional text.')
   *     .withFile(require('./template.twig'))
   *     .withIcon(Icon.IMAGE)
   *     .withParts(
   *       cx.part.image
   *         .withLabel('Image'),
   *       cx.part.plainText
   *         .withLabel('Description')))
   * @see {@link withRawContentElements} to set a raw value
   * @see {@link ContentElement}
   * @param {...ContentElement} contentElements - The content elements to use.
   * @returns {ContentElementGroup}
   */
  withContentElements(...contentElements) {
    this._contentElements = contentElements;
    return this;
  }

  /**
   * Set the content elements of your group as raw value.
   *
   * @example
   * .withRawContentElements({
   *   elementId: 'title',
   *   file: require('./title/template.twig'),
   *   icon 'heading',
   *   label: 'Title',
   *   parts: [
   *     {
   *       partId: 'plain-text',
   *       label: 'Title'
   *     }
   *   ]
   * })
   * @see {@link withContentElements}
   * @param {...{}} contentElements - The content elements as raw value.
   * @returns {ContentElementGroup}
   */
  withRawContentElements(...contentElements) {
    this._contentElements = new RawValue(contentElements);
    return this;
  }

  _buildInternal() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.GROUP_ID, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.HIDDEN, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.CONTENT_ELEMENTS, config, builderObjectValue);

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {ContentElementGroup}
   */
  clone(shallow) {
    return this._clone(new ContentElementGroup(), shallow);
  }
}

;// ./src/html-editor-config/feature.js


/** @typedef {import('./html-editor-config').default} HtmlEditorConfig */

class Feature extends AbstractConstant {
}

/**
 * Bold formatting option.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const BOLD = new Feature('bold');
/**
 * Italic formatting option.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const ITALIC = new Feature('italic');
/**
 * Underline formatting option.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const UNDERLINE = new Feature('underline');
/**
 * Strike trough formatting option.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const STRIKE_THROUGH = new Feature('strikeThrough');
/**
 * Subscript formatting option.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const SUBSCRIPT = new Feature('subscript');
/**
 * Superscript formatting option.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const SUPERSCRIPT = new Feature('superscript');
/**
 * Set the font size in the editor.
 *
 * @see {@link HtmlEditorConfig#withFontSizes}
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const FONT_SIZE = new Feature('fontSize');
/**
 * Set the line height in the editor.
 *
 * @see {@link HtmlEditorConfig#withLineHeights}
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const LINE_HEIGHT = new Feature('lineHeight');
/**
 * Set the text color in the editor.
 *
 * @see {@link HtmlEditorConfig#withTextColors}
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const TEXT_COLOR = new Feature('textColor');
/**
 * Set the background color in the editor.
 *
 * @see {@link HtmlEditorConfig#withBackgroundColors}
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const BACKGROUND_COLOR = new Feature('backgroundColor');
/**
 * Align the text left.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const ALIGN_LEFT = new Feature('alignLeft');
/**
 * Align the text center.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const ALIGN_CENTER = new Feature('alignCenter');
/**
 * Align the text right.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const ALIGN_RIGHT = new Feature('alignRight');
/**
 * Align the text justify.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const ALIGN_JUSTIFY = new Feature('alignJustify');
/**
 * Create an ordered list.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const FORMAT_OL = new Feature('formatOL');
/**
 * Create an unordered list.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const FORMAT_UL = new Feature('formatUL');
/**
 * Outdent the text.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const OUTDENT = new Feature('outdent');
/**
 * Indent the text.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const INDENT = new Feature('indent');
/**
 * Enable paragraph format options.
 *
 * @see {@link HtmlEditorConfig#withFormats}
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const PARAGRAPH_FORMAT = new Feature('paragraphFormat');
/**
 * Quote the text.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const QUOTE = new Feature('quote');
/**
 * Insert special characters.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const SPECIAL_CHARACTERS = new Feature('specialCharacters');
/**
 * Insert emoticons.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const EMOTICONS = new Feature('emoticons');
/**
 * Insert a link.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const INSERT_LINK = new Feature('insertLink');
/**
 * Clear all applied styles and formatting.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const CLEAR_FORMATTING = new Feature('clearFormatting');
/**
 * Undo the previous action.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const UNDO = new Feature('undo');
/**
 * Redo the previous action.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const REDO = new Feature('redo');
/**
 * Show the editor in fullscreen mode.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const FULLSCREEN = new Feature('fullscreen');
/**
 * Select all text.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const SELECT_ALL = new Feature('selectAll');
/**
 * Edit the raw HTML code.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const HTML = new Feature('html');
/**
 * Show the editor help.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const HELP = new Feature('help');

;// ./src/html-editor-config/enter-mode.js


/** @typedef {import('./html-editor-config').default} HtmlEditorConfig */

class EnterMode extends AbstractConstant {
}

/**
 * Wrap paragraphs with <code>&lt;p&gt;&lt;/p&gt;</code> on a line feed in the HTML editor.
 *
 * @see {@link HtmlEditorConfig#withEnterMode}
 * @type {EnterMode}
 */
const P = new EnterMode('p');
/**
 * Add a <code>&lt;/br&gt;</code> on a line feed in the HTML editor.
 *
 * @see {@link HtmlEditorConfig#withEnterMode}
 * @type {EnterMode}
 */
const BR = new EnterMode('br');
/**
 * Wrap paragraphs with <code>&lt;div&gt;&lt;/div&gt;</code> on a line feed in the HTML editor.
 *
 * @see {@link HtmlEditorConfig#withEnterMode}
 * @type {EnterMode}
 */
const DIV = new EnterMode('div');

;// ./src/html-editor-config/font-size-unit.js


/** @typedef {import('./html-editor-config').default} HtmlEditorConfig */

class FontSizeUnit extends AbstractConstant {
}

/**
 * Font sizes as pixel values.
 *
 * @see {@link HtmlEditorConfig#withFontSizeUnit}
 * @type {FontSizeUnit}
 */
const PX = new FontSizeUnit('px');
/**
 * Font sizes as em values.
 *
 * @see {@link HtmlEditorConfig#withFontSizeUnit}
 * @type {FontSizeUnit}
 */
const EM = new FontSizeUnit('em');
/**
 * Font sizes as rem values.
 *
 * @see {@link HtmlEditorConfig#withFontSizeUnit}
 * @type {FontSizeUnit}
 */
const REM = new FontSizeUnit('rem');
/**
 * Font sizes as pt values.
 *
 * @see {@link HtmlEditorConfig#withFontSizeUnit}
 * @type {FontSizeUnit}
 */
const PT = new FontSizeUnit('pt');
/**
 * Font sizes as cm values.
 *
 * @see {@link HtmlEditorConfig#withFontSizeUnit}
 * @type {FontSizeUnit}
 */
const CM = new FontSizeUnit('cm');
/**
 * Font sizes as mm values.
 *
 * @see {@link HtmlEditorConfig#withFontSizeUnit}
 * @type {FontSizeUnit}
 */
const MM = new FontSizeUnit('mm');

;// ./src/html-editor-config/format.js


/** @typedef {import('./html-editor-config').default} HtmlEditorConfig */

class Format extends AbstractConstant {
}

/**
 * Allow <code>&lt;p&gt;</code> tags.
 *
 * @see {@link HtmlEditorConfig#withFormats}
 * @type {Format}
 */
const format_P = new Format('p');
/**
 * Allow <code>&lt;h1&gt;</code> tags.
 *
 * @see {@link HtmlEditorConfig#withFormats}
 * @type {Format}
 */
const H1 = new Format('h1');
/**
 * Allow <code>&lt;h2&gt;</code> tags.
 *
 * @see {@link HtmlEditorConfig#withFormats}
 * @type {Format}
 */
const H2 = new Format('h2');
/**
 * Allow <code>&lt;h3&gt;</code> tags.
 *
 * @see {@link HtmlEditorConfig#withFormats}
 * @type {Format}
 */
const H3 = new Format('h3');
/**
 * Allow <code>&lt;h4&gt;</code> tags.
 *
 * @see {@link HtmlEditorConfig#withFormats}
 * @type {Format}
 */
const H4 = new Format('h4');
/**
 * Allow <code>&lt;h5&gt;</code> tags.
 *
 * @see {@link HtmlEditorConfig#withFormats}
 * @type {Format}
 */
const H5 = new Format('h5');
/**
 * Allow <code>&lt;h6&gt;</code> tags.
 *
 * @see {@link HtmlEditorConfig#withFormats}
 * @type {Format}
 */
const H6 = new Format('h6');
/**
 * Allow <code>&lt;pre&gt;</code> tags.
 *
 * @see {@link HtmlEditorConfig#withFormats}
 * @type {Format}
 */
const PRE = new Format('pre');

;// ./src/dropzone/dropzone.js





/** @typedef {import('../content-element/content-element').default} ContentElement */

/**
 * This is the builder class to specify a dropzone.
 *
 * @example
 * .withDropzones(
 *   cx.dropzone
 *     .withDropzone('a5142bca-448b-40c5-bdde-942f531fcd12')
 *     .withAllowedElements(
 *       require('./content-elements/basic/text'),
 *       require('./content-elements/basic/image'))
 *     .withMaxAllowedElements(1),
 *   cx.dropzone
 *     .withDropzone('3b369b8b-f1f6-4754-bb0f-e49a46c315e1')
 *     .withAllowedElements(
 *       require('./content-elements/basic/text'),
 *       require('./content-elements/basic/image'))
 *     .withMaxAllowedElements(1))
 */
class Dropzone extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _dropzone = undefined;
  /**
   * @type {RawValue|[ContentElement]|undefined}
   * @private
   */
  _allowedElements = undefined;
  /**
   * @type {number|undefined}
   * @private
   */
  _maxAllowedElements = undefined;
  /**
   * @type {boolean|undefined}
   * @private
   */
  _removeAllowed = undefined;
  /**
   * @type {boolean|undefined}
   * @private
   */
  _copyAllowed = undefined;
  /**
   * @type {boolean|undefined}
   * @private
   */
  _moveAllowed = undefined;

  /**
   * @returns {string|undefined}
   */
  get dropzone() {
    return this._dropzone;
  }

  /**
   * @returns {RawValue|ContentElement[]|undefined}
   */
  get allowedElements() {
    return this._allowedElements;
  }

  /**
   * @returns {number|undefined}
   */
  get maxAllowedElements() {
    return this._maxAllowedElements;
  }

  /**
   * @returns {boolean|undefined}
   */
  get removeAllowed() {
    return this._removeAllowed;
  }

  /**
   * @returns {boolean|undefined}
   */
  get copyAllowed() {
    return this._copyAllowed;
  }

  /**
   * @returns {boolean|undefined}
   */
  get moveAllowed() {
    return this._moveAllowed;
  }

  /**
   * Set the identifier of this dropzone. <strong>It is highly recommended using a
   * {@link https://duckduckgo.com/?q=uuid|UUID}.</strong>
   *
   * @param {string} dropzone - The dropzone name.
   * @returns {Dropzone}
   */
  withDropzone(dropzone) {
    this._dropzone = dropzone;
    return this;
  }

  /**
   * Set the allowed elements.
   *
   * @example
   * .withAllowedElements(
   *   require('./content-elements/basic/text'),
   *   require('./content-elements/basic/image'))
   * @param {...ContentElement} allowedElements - The allowed elements.
   * @returns {Dropzone}
   */
  withAllowedElements(...allowedElements) {
    this._allowedElements = allowedElements;
    return this;
  }

  /**
   * Set the allowed elements as raw value.
   *
   * @param {...string} allowedElements - The allowed elements.
   * @returns {Dropzone}
   */
  withRawAllowedElements(...allowedElements) {
    this._allowedElements = new RawValue(allowedElements);
    return this;
  }

  /**
   * Set the number of maximum allowed elements.
   *
   * @param {number} maxAllowedElements - The number of maximum allowed elements.
   * @returns {Dropzone}
   */
  withMaxAllowedElements(maxAllowedElements) {
    this._maxAllowedElements = maxAllowedElements;
    return this;
  }

  /**
   * Enable or disable the remove button on dropzone elements.
   *
   * @param {boolean} removeAllowed - Enable or disable the remove button.
   * @returns {Dropzone}
   */
  withRemoveAllowed(removeAllowed) {
    this._removeAllowed = removeAllowed;
    return this;
  }

  /**
   * Enable or disable the copy button on dropzone elements.
   *
   * @param {boolean} copyAllowed - Enable or disable the copy button.
   * @returns {Dropzone}
   */
  withCopyAllowed(copyAllowed) {
    this._copyAllowed = copyAllowed;
    return this;
  }

  /**
   * Enable or disable the move button on dropzone elements.
   *
   * @param {boolean} moveAllowed - Enable or disable the move button.
   * @returns {Dropzone}
   */
  withMoveAllowed(moveAllowed) {
    this._moveAllowed = moveAllowed;
    return this;
  }

  _buildInternal() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonPropertyExtension.DROPZONE, config, identity);
    this._applyPropertyIfDefined(DesignJsonPropertyExtension.ALLOWED_ELEMENTS, config, v => v.elementId);
    this._applyPropertyIfDefined(DesignJsonPropertyExtension.MAX_ALLOWED_ELEMENTS, config, identity);
    this._applyPropertyIfDefined(DesignJsonPropertyExtension.REMOVE_ALLOWED, config, identity);
    this._applyPropertyIfDefined(DesignJsonPropertyExtension.COPY_ALLOWED, config, identity);
    this._applyPropertyIfDefined(DesignJsonPropertyExtension.MOVE_ALLOWED, config, identity);

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {Dropzone}
   */
  clone(shallow) {
    return this._clone(new Dropzone(), shallow);
  }
}

;// ./src/html-editor-config/html-editor-config.js





/** @typedef {import('./enter-mode').EnterMode} EnterMode */
/** @typedef {import('./feature').Feature} Feature */
/** @typedef {import('./format').Format} Format */
/** @typedef {import('./font-size-unit').FontSizeUnit} FontSizeUnit */

/**
 * This is the builder class to specify a HTML editor configuration.
 *
 * @example
 * module.exports = cx.htmlEditorConfig
 *   .withIdentifier('minimal')
 *   .withRawEnterMode('p')
 *   .withFeatures(
 *     Feature.BOLD,
 *     Feature.ITALIC,
 *     Feature.UNDERLINE);
 */
class HtmlEditorConfig extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _identifier = uuid();
  /**
   * @type {RawValue|Feature[]|undefined}
   * @private
   */
  _features = undefined;
  /**
   * @type {string[]|undefined}
   * @private
   */
  _textColors = undefined;
  /**
   * @type {string[]|undefined}
   * @private
   */
  _backgroundColors = undefined;
  /**
   * @type {RawValue|Format[]|undefined}
   * @private
   */
  _formats = undefined;
  /**
   * @type {number[]|undefined}
   * @private
   */
  _fontSizes = undefined;
  /**
   * @type {RawValue|FontSizeUnit|undefined}
   * @private
   */
  _fontSizeUnit = undefined;
  /**
   * @type {number|undefined}
   * @private
   */
  _fontSizeDefault = undefined;
  /**
   * @type {number[]|undefined}
   * @private
   */
  _lineHeights = undefined;
  /**
   * @type {RawValue|EnterMode|undefined}
   * @private
   */
  _enterMode = undefined;

  /**
   * @returns {string|undefined}
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * @returns {RawValue|Feature[]|undefined}
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
   * @returns {RawValue|Format[]|undefined}
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
   * @returns {RawValue|FontSizeUnit|undefined}
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
   * @returns {RawValue|EnterMode|undefined}
   */
  get enter() {
    return this._enterMode;
  }

  /**
   * Set an unique identifier for the editor configuration. If not set, a UUID v4 will be used.
   * It is recommended to set the identifier.
   *
   * @param {string} identifier - The unique identifier for this editor config.
   * @returns {HtmlEditorConfig}
   */
  withIdentifier(identifier) {
    this._identifier = identifier;
    return this;
  }

  /**
   * The features enable in this HTML editor configuration.
   *
   * @example
   * .withFeatures(Feature.ITALIC, Feature.BOLD, Feature.UNDERLINE)
   * @see {@link Feature} for available features
   * @see {@link withRawFeatures} to set a raw value
   * @param {...Feature} features - The features to enable.
   * @returns {HtmlEditorConfig}
   */
  withFeatures(...features) {
    this._features = features;
    return this;
  }

  /**
   * Set the raw <code>features</code> property.
   *
   * @example
   * .withRawFeatures('bold', 'italic', 'underline')
   * @see {@link withFeatures}
   * @param {...string} features - The raw features to enable.
   * @returns {HtmlEditorConfig}
   */
  withRawFeatures(...features) {
    this._features = new RawValue(features);
    return this;
  }

  /**
   * Set the available text colors. Specify the colors in the hexadecimal format.
   *
   * @example
   * .withTextColors('#ff00ff', '#ff0000', '#00ff00')
   * @see {@link TEXT_COLOR} to enable the feature
   * @param {...string} textColors - The text colors to set.
   * @returns {HtmlEditorConfig}
   */
  withTextColors(...textColors) {
    this._textColors = textColors;
    return this;
  }

  /**
   * Set the available background colors. Specify the colors in the hexadecimal format.
   *
   * @example
   * .withBackgroundColors('#ff00ff', '#ff0000', '#00ff00')
   * @see {@link BACKGROUND_COLOR} to enable the feature
   * @param {...string} backgroundColors - The background colors to set.
   * @returns {HtmlEditorConfig}
   */
  withBackgroundColors(...backgroundColors) {
    this._backgroundColors = backgroundColors;
    return this;
  }

  /**
   * Specify the available formats.
   *
   * @example
   * .withFormats(Format.P, Format.PRE)
   * @see {@link Format} for available formats
   * @see {@link withRawFormats} to set a raw value
   * @param {...Format} formats - The formats to set.
   * @returns {HtmlEditorConfig}
   */
  withFormats(...formats) {
    this._formats = formats;
    return this;
  }

  /**
   * Specify a raw value for the <code>formats</code> field.
   *
   * @example
   * .withRawFormats('p', 'pre')
   * @see {@link withFormats}
   * @param {...string} formats - The raw formats to set.
   * @returns {HtmlEditorConfig}
   */
  withRawFormats(...formats) {
    this._formats = new RawValue(formats);
    return this;
  }

  /**
   * Specify the available font sizes.
   *
   * @example
   * .withFontSizes(12, 13, 14, 15, 16)
   * @see {@link FONT_SIZE} to enable this feature
   * @param {...number} fontSizes - The font sizes to set.
   * @returns {HtmlEditorConfig}
   */
  withFontSizes(...fontSizes) {
    this._fontSizes = fontSizes;
    return this;
  }

  /**
   * Specify the font size unit to use.
   *
   * @example
   * .withFontSizeUnit(FontSizeUnit.PX)
   * @see {@link withRawFontSizeUnit} to set the raw value
   * @param {FontSizeUnit} fontSizeUnit - The font size unit to set.
   * @returns {HtmlEditorConfig}
   */
  withFontSizeUnit(fontSizeUnit) {
    this._fontSizeUnit = fontSizeUnit;
    return this;
  }

  /**
   * Set the raw value for the <code>fontSizeUnit</code> property.
   *
   * @example
   * .withRawFontSizeUnit('px')
   * @see {@link withFontSizeUnit}
   * @param {string} fontSizeUnit - The raw font size unit to set.
   * @returns {HtmlEditorConfig}
   */
  withRawFontSizeUnit(fontSizeUnit) {
    this._fontSizeUnit = new RawValue(fontSizeUnit);
    return this;
  }

  /**
   * Set the default font size to use.
   *
   * @example
   * .withFontSizeDefault(16)
   * @param {number} fontSizeDefault - The default font size to set.
   * @returns {HtmlEditorConfig}
   */
  withFontSizeDefault(fontSizeDefault) {
    this._fontSizeDefault = fontSizeDefault;
    return this;
  }

  /**
   * Set the available line heights.
   *
   * @example
   * .withLineHeights(1, 1.15 , 1.5, 2)
   * @see {@link LINE_HEIGHT} to enable this feature
   * @param {...number} lineHeights - The line heights.
   * @returns {HtmlEditorConfig}
   */
  withLineHeights(...lineHeights) {
    this._lineHeights = lineHeights;
    return this;
  }

  /**
   * Define the enter mode to use.
   *
   * @example
   * .withEnterMode(EnterMode.P)
   * @see {@link withRawEnterMode} to set the raw value
   * @param {EnterMode} enterMode - The enter mode.
   * @returns {HtmlEditorConfig}
   */
  withEnterMode(enterMode) {
    this._enterMode = enterMode;
    return this;
  }

  /**
   * Set the raw enter mode.
   *
   * @example
   * .withRawEnterMode('p')
   * @param {string} enterMode - The raw enter mode.
   * @returns {HtmlEditorConfig}
   */
  withRawEnterMode(enterMode) {
    this._enterMode = new RawValue(enterMode);
    return this;
  }

  _buildInternal() {
    let config = {};
    let editorConfig = {};

    config[this.identifier] = editorConfig;

    this._applyPropertyIfDefined(DesignJsonProperty.FEATURES, editorConfig, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.TEXT_COLORS, editorConfig, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.BACKGROUND_COLORS, editorConfig, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.FORMATS, editorConfig, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.FONT_SIZES, editorConfig, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.FONT_SIZE_UNIT, editorConfig, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.FONT_SIZE_DEFAULT, editorConfig, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.LINE_HEIGHTS, editorConfig, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.ENTER_MODE, editorConfig, constantObjectValue);

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {HtmlEditorConfig}
   */
  clone(shallow) {
    return this._clone(new HtmlEditorConfig(), shallow);
  }
}

;// ./src/style/style.js





/** @typedef {import('./css-class').default} CssClass */
/** @typedef {import('./style-option').default} StyleOption */

/**
 * This is the builder class for style configuration objects.
 *
 * @example
 * module.exports = cx.style
 *   .withIdentifier('text-color')
 *   .withLabel('Text Color')
 *   .withCssClasses(
 *     cx.cssClass
 *       .withCssClass('text-red')
 *       .withLabel('Red'),
 *     cx.cssClass
 *       .withCssClass('text-blue')
 *       .withLabel('Blue'));
 *
 * With CX 23.2 an extended style format was introduced,
 * which makes it possible to define styles using either CSS classes or DOM manipulations, or a combination of both.
 *
 * @example
 * module.exports = cx.style
 *   .withIdentifier('background-color')
 *   .withLabel('Background Color')
 *   .withStyleOptions(
 *     cx.styleOption
 *       .withStyleId('darkred-background-5vLqPX')
 *       .withLabel('Darkred')
 *       .withCssClass('darkred-background')
 *       .withDomManipulations(
 *         cx.domManipulation
 *           .withSelector('div.darkred-background')
 *           .withAttribute('style')
 *           .withValue('background-color: darkred;'),
 *         cx.domManipulation
 *           .withSelector('div.darkred-background p')
 *           .withAttribute('style')
 *           .withValue('color: white;')),
 *     cx.styleOption
 *       .withStyleId('lightblue-background-9ftMNF')
 *       .withLabel('Lightblue')
 *       .withCssClass('lightblue-background')
 *       .withDomManipulations(
 *         cx.domManipulation
 *           .withSelector('div.lightblue-background')
 *           .withAttribute('style')
 *           .withValue('background-color: lightblue;'),
 *         cx.domManipulation
 *           .withSelector('div.lightblue-background p')
 *           .withAttribute('style')
 *           .withValue('color: black;')));
 *
 * @since Studio 1.1
 */
class Style extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _identifier = uuid();
  /**
   * @type {string|NLS|undefined}
   * @private
   */
  _label = undefined;
  /**
   * @type {RawValue|CssClass[]|undefined}
   * @private
   */
  _cssClasses = undefined;
  /**
   * @type {RawValue|StyleOption[]|undefined}
   * @private
   */
  _styles = undefined;

  /**
   * @returns {string|undefined}
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * @returns {string|NLS|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @returns {RawValue|[CssClass]|undefined}
   */
  get cssClasses() {
    return this._cssClasses;
  }

  /**
   * @returns {RawValue|[StyleOption]|undefined}
   */
  get styles() {
    return this._styles;
  }

  /**
   * Set the unique identifier for this style configuration. If not specified, a UUID v4 will be used.
   * <strong>It is recommended to set this property.</strong>
   *
   * @example
   * .withIdentifier('text-color')
   * @param {string} identifier - The identifier to use.
   * @returns {Style}
   */
  withIdentifier(identifier) {
    this._identifier = identifier;
    return this;
  }

  /**
   * Set the label for this style configuration.
   *
   * @param {string|NLS} label - The label to use.
   * @returns {Style}
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  /**
   * Specify the css classes to use with this style configuration.
   *
   * @example
   * .withCssClasses(
   *   cx.cssClass
   *     .withCssClass('text-red')
   *     .withLabel('Red'),
   *   cx.cssClass
   *     .withCssClass('text-blue')
   *     .withLabel('Blue'))
   * @see {@link withRawCssClasses} to set a raw value
   * @param {...CssClass} cssClasses - The css classes to use.
   * @returns {Style}
   */
  withCssClasses(...cssClasses) {
    this._cssClasses = cssClasses;
    return this;
  }

  /**
   * Set the raw css classes to use with this style.
   *
   * @example
   * .withRawCssClasses(
   *   {
   *     cssClass: 'text-red',
   *     label: 'Red'
   *   },
   *   {
   *     cssClass: 'text-blue',
   *     label: 'Blue'
   *   }
   * )
   * @param {...{}} cssClasses
   * @returns {Style}
   */
  withRawCssClasses(...cssClasses) {
    this._cssClasses = new RawValue(cssClasses);
    return this;
  }

  /**
   * Specify the style options to use with this style configuration.
   *
   * @example
   * .withStyleOptions(
   *   cx.styleOption
   *     .withStyleId('darkred-background-5vLqPX')
   *     .withLabel('Darkred')
   *     .withCssClass('darkred-background')
   *     .withDomManipulations(
   *       cx.domManipulation
   *         .withSelector('div.darkred-background')
   *         .withAttribute('style')
   *         .withValue('background-color: darkred;'),
   *       cx.domManipulation
   *         .withSelector('div.darkred-background p')
   *         .withAttribute('style')
   *         .withValue('color: white;')),
   *   cx.styleOption
   *     .withStyleId('lightblue-background-9ftMNF')
   *     .withLabel('Lightblue')
   *     .withCssClass('lightblue-background')
   *     .withDomManipulations(
   *       cx.domManipulation
   *         .withSelector('div.lightblue-background')
   *         .withAttribute('style')
   *         .withValue('background-color: lightblue;'),
   *       cx.domManipulation
   *         .withSelector('div.lightblue-background p')
   *         .withAttribute('style')
   *         .withValue('color: black;')))
   * @see {@link withRawStyleOptions} to set a raw value
   * @param {...StyleOption} styles - The style options to use.
   * @returns {Style}
   */
  withStyleOptions(...styles) {
    this._styles = styles;
    return this;
  }

  /**
   * Set the raw style options to use with this style.
   *
   * @example
   * .withRawStyleOptions(
   *   {
   *     styleId: 'darkred-background-5vLqPX',
   *     label: 'Darkred',
   *     cssClass: 'darkred-background',
   *     domManipulations: [
   *       { selector: 'div.darkred-background', attribute: 'style', value: 'background-color: darkred;' },
   *       { selector: 'div.darkred-background p', attribute: 'style', value: 'color: white;' }
   *     ]
   *   },
   *   {
   *     styleId: 'lightblue-background-9ftMNF',
   *     label: 'Lightblue',
   *     cssClass: 'lightblue-background',
   *     domManipulations: [
   *       { selector: 'div.lightblue-background', attribute: 'style', value: 'background-color: lightblue;' },
   *       { selector: 'div.lightblue-background p', attribute: 'style', value: 'color: black;' }
   *     ]
   *   }
   * )
   * @param {...{}} styles
   * @returns {Style}
   */
  withRawStyleOptions(...styles) {
    this._styles = new RawValue(styles);
    return this;
  }

  _buildInternal() {
    let config = {};
    let style = {};

    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, style, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.CSS_CLASSES, style, builderObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.STYLES, style, builderObjectValue);

    config[this.identifier] = style;

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {Style}
   */
  clone(shallow) {
    return this._clone(new Style(), shallow);
  }
}

;// ./src/style/css-class.js




/** @typedef {import('./style').default} Style */

/**
 * This is the builder class for css class objects (required by the {@link Style|style} configuration object).
 *
 * @example
 * module.exports = cx.style
 *   .withIdentifier('text-color')
 *   .withLabel('Text Color')
 *   .withCssClasses(
 *     cx.cssClass
 *       .withCssClass('text-red')
 *       .withLabel('Red'),
 *     cx.cssClass
 *       .withCssClass('text-blue')
 *       .withLabel('Blue'));
 * @since Studio 1.1
 */
class CssClass extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _cssClass = undefined;
  /**
   * @type {string|NLS|undefined}
   * @private
   */
  _label = undefined;

  /**
   * @returns {string|undefined}
   */
  get cssClass() {
    return this._cssClass;
  }

  /**
   * @returns {string|NLS|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * Specify the CSS class to use.
   *
   * @example
   * .withCssClass('text-red')
   * @param {string} cssClass - The CSS class to use.
   * @returns {CssClass}
   */
  withCssClass(cssClass) {
    this._cssClass = cssClass;
    return this;
  }

  /**
   * Specify the label to use with this CSS class.
   *
   * @param {string|NLS} label - The label to use.
   * @returns {CssClass}
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  _buildInternal() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.CSS_CLASS, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, identity);

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {CssClass}
   */
  clone(shallow) {
    return this._clone(new CssClass(), shallow);
  }

  /**
   * Static helper method to create a new CSS class object.
   *
   * @example
   * CssClass.create('text-red','Red')
   * @param {string} cssClass - The CSS class to use.
   * @param {string} label - The label to use.
   * @returns {CssClass}
   */
  static create(cssClass, label) {
    return new CssClass()
      .withCssClass(cssClass)
      .withLabel(label);
  }
}

;// ./src/style/style-option.js





/** @typedef {import('./style').default} Style */
/** @typedef {import('./dom-manipulation').default} DomManipulation */

/**
 * This is the builder class for style option objects (required by the {@link Style|style} configuration object).
 *
 * @example
 * module.exports = cx.style
 *   .withIdentifier('background-color')
 *   .withLabel('Background Color')
 *   .withStyleOptions(
 *     cx.styleOption
 *       .withStyleId('darkred-background-5vLqPX')
 *       .withLabel('Darkred')
 *       .withCssClass('darkred-background')
 *       .withDomManipulations(
 *         cx.domManipulation
 *           .withSelector('div.darkred-background')
 *           .withAttribute('style')
 *           .withValue('background-color: darkred;'),
 *         cx.domManipulation
 *           .withSelector('div.darkred-background p')
 *           .withAttribute('style')
 *           .withValue('color: white;')),
 *     cx.styleOption
 *       .withStyleId('lightblue-background-9ftMNF')
 *       .withLabel('Lightblue')
 *       .withCssClass('lightblue-background')
 *       .withDomManipulations(
 *         cx.domManipulation
 *           .withSelector('div.lightblue-background')
 *           .withAttribute('style')
 *           .withValue('background-color: lightblue;'),
 *         cx.domManipulation
 *           .withSelector('div.lightblue-background p')
 *           .withAttribute('style')
 *           .withValue('color: black;')));
 * @since CX 23.2
 */
class StyleOption extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _styleId = undefined;
  /**
   * @type {string|NLS|undefined}
   * @private
   */
  _label = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _cssClass = undefined;
  /**
   * @type {RawValue|DomManipulation[]|undefined}
   * @private
   */
  _domManipulations = undefined;

  /**
   * @returns {string|undefined}
   */
  get styleId() {
    return this._styleId;
  }

  /**
   * @returns {string|NLS|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @returns {string|undefined}
   */
  get cssClass() {
    return this._cssClass;
  }

  /**
   * @returns {RawValue|[DomManipulation]|undefined}
   */
  get domManipulations() {
    return this._domManipulations;
  }

  /**
   * Specify the style id to use.
   *
   * @example
   * .withStyleId('text-red')
   * @param {string} styleId - The style id that identifies the style option.
   * @returns {StyleOption}
   */
  withStyleId(styleId) {
    this._styleId = styleId;
    return this;
  }

  /**
   * Specify the label to use with this style option.
   *
   * @param {string|NLS} label - The label to use.
   * @returns {StyleOption}
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  /**
   * Specify the CSS class to use.
   *
   * @example
   * .withCssClass('text-red')
   * @param {string} cssClass - The CSS class to use.
   * @returns {StyleOption}
   */
  withCssClass(cssClass) {
    this._cssClass = cssClass;
    return this;
  }

  /**
   * Specify the DOM manipulations to use with this style option.
   *
   * @example
   * .withDomManipulations(
   *   cx.domManipulation
   *     .withSelector('div.darkred-background')
   *     .withAttribute('style')
   *     .withValue('background-color: darkred;'),
   *   cx.domManipulation
   *     .withSelector('div.darkred-background p')
   *     .withAttribute('style')
   *     .withValue('color: white;'))
   * @see {@link withRawDomManipulations} to set a raw value
   * @param {...DomManipulation} domManipulations - The DOM manipulations to use.
   * @returns {StyleOption}
   */
  withDomManipulations(...domManipulations) {
    this._domManipulations = domManipulations;
    return this;
  }

  /**
   * Set the raw DOM manipulations to use with this style option.
   *
   * @example
   * .withRawDomManipulations(
   *   {
   *     selector: 'div.darkred-background',
   *     attribute: 'style',
   *     value: 'background-color: darkred;'
   *   },
   *   {
   *     selector: 'div.darkred-background p',
   *     attribute: 'style',
   *     value: 'color: white;'
   *   }
   * )
   * @param {...{}} domManipulations
   * @returns {StyleOption}
   */
  withRawDomManipulations(...domManipulations) {
    this._domManipulations = new RawValue(domManipulations);
    return this;
  }

  _buildInternal() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.STYLE_ID, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.CSS_CLASS, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.DOM_MANIPULATIONS, config, builderObjectValue)

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {StyleOption}
   */
  clone(shallow) {
    return this._clone(new StyleOption(), shallow);
  }
}

;// ./src/style/dom-manipulation.js




/** @typedef {import('./style-option').default} StyleOption */

/**
 * This is the builder class for DOM manipulation objects (required by the {@link StyleOption} configuration object).
 *
 * @example
 * module.exports = cx.style
 *   .withIdentifier('background-color')
 *   .withLabel('Background Color')
 *   .withStyleOptions(
 *     cx.styleOption
 *       .withStyleId('darkred-background-5vLqPX')
 *       .withLabel('Darkred')
 *       .withCssClass('darkred-background')
 *       .withDomManipulations(
 *         cx.domManipulation
 *           .withSelector('div.darkred-background')
 *           .withAttribute('style')
 *           .withValue('background-color: darkred;'),
 *         cx.domManipulation
 *           .withSelector('div.darkred-background p')
 *           .withAttribute('style')
 *           .withValue('color: white;')),
 *     cx.styleOption
 *       .withStyleId('lightblue-background-9ftMNF')
 *       .withLabel('Lightblue')
 *       .withCssClass('lightblue-background')
 *       .withDomManipulations(
 *         cx.domManipulation
 *           .withSelector('div.lightblue-background')
 *           .withAttribute('style')
 *           .withValue('background-color: lightblue;'),
 *         cx.domManipulation
 *           .withSelector('div.lightblue-background p')
 *           .withAttribute('style')
 *           .withValue('color: black;')));
 * @since CX 23.2
 */
class DomManipulation extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _selector = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _attribute = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _value = undefined;

  /**
   * @returns {string|undefined}
   */
  get selector() {
    return this._selector;
  }

  /**
   * @returns {string|undefined}
   */
  get attribute() {
    return this._attribute;
  }

  /**
   * @returns {string|undefined}
   */
  get value() {
    return this._value;
  }

  /**
   * Specify the selector to use with this DOM manipulation.
   * Any DOM selector can be used, e.g. tag, class, id.
   *
   * @example
   * .withSelector('div.btn-blue')
   * @param {string} selector - The selector to use.
   * @returns {DomManipulation}
   */
  withSelector(selector) {
    this._selector = selector;
    return this;
  }

  /**
   * Specify the attribute to use with this DOM manipulation.
   * Use the attribute 'style' to define CSS inline styles. Alternatively, set 'class' to specify CSS classes.
   *
   * @example
   * .withAttribute('style')
   * @param {string} attribute - The attribute to use.
   * @returns {DomManipulation}
   */
  withAttribute(attribute) {
    this._attribute = attribute;
    return this;
  }

  /**
   * Specify the value to use with this DOM manipulation.
   *
   * @example
   * .withValue('color: #16616d; border: 2px solid #16616d;')
   * @param {string} value - The value to use.
   * @returns {DomManipulation}
   */
  withValue(value) {
    this._value = value;
    return this;
  }

  _buildInternal() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.SELECTOR, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.ATTRIBUTE, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.VALUE, config, identity);

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {DomManipulation}
   */
  clone(shallow) {
    return this._clone(new DomManipulation(), shallow);
  }

  /**
   * Static helper method to create a new DOM manipulation object.
   *
   * @example
   * DomManipulation.create('div.btn-blue','style','color: #16616d; border: 2px solid #16616d;')
   * @param {string} selector - The selector to use.
   * @param {string} attribute - The attribute to use.
   * @param {string} value - The value to use.
   * @returns {DomManipulation}
   */
  static create(selector, attribute, value) {
    return new DomManipulation()
      .withSelector(selector)
      .withAttribute(attribute)
      .withValue(value);
  }
}

;// ./src/content-element/icon.js


class Icon extends AbstractConstant {
}

/**
 * @type {Icon}
 * @since Studio 1.0
 */
const HEADING = new Icon('heading');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const TEXT = new Icon('text');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const TEXT_WITH_IMAGE = new Icon('text-with-image');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const IMAGE = new Icon('image');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const TABLE = new Icon('table');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const LIST = new Icon('list');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const VIDEO = new Icon('video');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const MEGAPHONE = new Icon('megaphone');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const SOCIAL_FOLLOW = new Icon('social-follow');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const SOCIAL_SHARE = new Icon('social-share');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const SNIPPET = new Icon('snippet');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const QRCODE = new Icon('qrcode');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const PAPERCLIP = new Icon('paperclip');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const DOCUMENT = new Icon('document');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const PHONE = new Icon('phone');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const COMMUNICATION = new Icon('communication');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const HANDSHAKE = new Icon('handshake');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const HEART = new Icon('heart');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const INFO = new Icon('info');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const ENVELOPE = new Icon('envelope');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const FACEBOOK = new Icon('facebook');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const YOUTUBE = new Icon('youtube');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const PERSON_MALE = new Icon('person-male');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const PERSON_FEMALE = new Icon('person-female');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const ASTERISK = new Icon('asterisk');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const SMILEY = new Icon('smiley');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const DIVIDER = new Icon('divider');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const PARAMETER = new Icon('parameter');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const TWITTER = new Icon('twitter');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const HEADSET = new Icon('headset');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const METADATA = new Icon('metadata');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const PILE = new Icon('pile');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const CHAIN = new Icon('chain');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const SIGNPOST = new Icon('signpost');
/**
 * @type {Icon}
 * @since Studio 1.0
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
 * @since Studio 1.0
 */
const RADIOBUTTON = new Icon('radiobutton');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const CHECKBOX = new Icon('checkbox');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const TEXTAREA = new Icon('textarea');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const FORMFIELD = new Icon('formfield');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const DROPDOWN = new Icon('dropdown');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const ONE_COLUMN = new Icon('one-column');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const TWO_COLUMNS = new Icon('two-columns');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const THREE_COLUMNS = new Icon('three-columns');
/**
 * @type {Icon}
 * @since CX 23.2
 */
const CALENDAR_CLOCK = new Icon('calendar-clock');

;// ./src/content-element/content-element.js







/** @typedef {import('../design/design').default} Design */
/** @typedef {import('../style/style').default} Style */
/** @typedef {import('./icon').Icon} Icon */
/** @typedef {import('./part/abstract-part').default} AbstractPart */
/** @typedef {import('./content-element-group').default} ContentElementGroup */
/** @typedef {import('../dropzone/dropzone').default} Dropzone */

/**
 * This is the builder class for content elements. Pass objects of this class to {@link ContentElementGroup#withContentElements}.
 *
 * @example
 * .withContentElements(
 *   cx.contentElement
 *     .withElementId('image-with-text')
 *     .withLabel('Image with text')
 *     .withDescription('Displays an image with an optional text.')
 *     .withFile(require('./template.twig'))
 *     .withIcon(Icon.IMAGE)
 *     .withParts(
 *       cx.part.image
 *         .withLabel('Image'),
 *       cx.part.plainText
 *         .withLabel('Description')))
 */
class ContentElement extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _elementId = uuid();
  /**
   * @type {string|NLS|undefined}
   * @private
   */
  _label = undefined;
  /**
   * @type {string|NLS|undefined}
   * @private
   */
  _description = undefined;
  /**
   * @type {{}|undefined}
   * @private
   */
  _file = undefined;
  /**
   * @type {RawValue|Icon|undefined}
   * @private
   */
  _icon = undefined;
  /**
   * @type {boolean|undefined}
   * @private
   */
  _hidden = undefined;
  /**
   * @type {boolean|undefined}
   * @private
   */
  _archived = undefined;
  /**
   * @type {RawValue|[Style]|undefined}
   * @private
   */
  _styleConfigs = undefined;
  /**
   * @type {RawValue|[AbstractPart]|undefined}
   * @private
   */
  _parts = undefined;
  /**
   * @type {Dropzone[]|undefined}
   * @private
   */
  _dropzones = undefined;

  /**
   * @returns {string|undefined}
   */
  get elementId() {
    return this._elementId;
  }

  /**
   * @returns {string|NLS|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @returns {string|NLS|undefined}
   */
  get description() {
    return this._description;
  }

  /**
   * @returns {{}|undefined}
   */
  get file() {
    return this._file;
  }

  /**
   * @returns {RawValue|Icon|undefined}
   */
  get icon() {
    return this._icon;
  }

  /**
   * @returns {boolean|undefined}
   */
  get hidden() {
    return this._hidden;
  }

  /**
   * @returns {boolean|undefined}
   */
  get archived() {
    return this._archived;
  }

  /**
   * @returns {RawValue|Style[]|undefined}
   */
  get styleConfigs() {
    return this._styleConfigs;
  }

  /**
   * @returns {RawValue|AbstractPart[]|undefined}
   */
  get parts() {
    return this._parts;
  }

  /**
   * @returns {Dropzone[]|undefined}
   */
  get dropzones() {
    return this._dropzones;
  }

  /**
   * Set the ID of this content element.
   *
   * @param {string} elementId - The content element's ID.
   * @returns {ContentElement}
   * @since Studio 1.0
   */
  withElementId(elementId) {
    this._elementId = elementId;
    return this;
  }

  /**
   * Set the label of the content element.
   *
   * @param {string|NLS} label - The label of the content element.
   * @returns {ContentElement}
   * @since Studio 1.0
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  /**
   * Set the description of the content element.
   *
   * @param {string|NLS} description - The description of the content element.
   * @returns {ContentElement}
   * @since Studio 1.0
   */
  withDescription(description) {
    this._description = description;
    return this;
  }

  /**
   * Set the template to use for this content element. Be aware, that you have to require the template.
   *
   * @example
   * .withFile(require('./template.twig'))
   * @param {string} file - The reference to the required template.
   * @returns {ContentElement}
   * @since Studio 1.0
   */
  withFile(file) {
    this._file = file;
    return this;
  }

  /**
   * Set the icon for this content element.
   *
   * @example
   * .withIcon(Icon.IMAGE)
   * @see {@link Icon} for available icons
   * @see {@link withRawIcon} to set a raw value
   * @param {Icon} icon - The icon for this content element.
   * @returns {ContentElement}
   * @since Studio 1.0
   */
  withIcon(icon) {
    this._icon = icon;
    return this;
  }

  /**
   * Set the icon for this content element as raw value.
   *
   * @example
   * .withRawIcon('image')
   * @see {@link withIcon}
   * @param {string} icon - The raw icon for this content element.
   * @returns {ContentElement}
   */
  withRawIcon(icon) {
    this._icon = new RawValue(icon);
    return this;
  }

  /**
   * Declare this content element as hidden.
   *
   * @example
   * .withHidden(true)
   * @param {boolean} hidden - The hidden state.
   * @returns {ContentElement}
   * @since BSI CX 1.3
   */
  withHidden(hidden) {
    this._hidden = hidden;
    return this;
  }

  /**
   * Declare this content element as archived.
   *
   * @example
   * .withArchived(true)
   * @param {boolean} archived - The archived state.
   * @returns {ContentElement}
   * @since BSI CX 23.2
   */
  withArchived(archived) {
    this._archived = archived;
    return this;
  }

  /**
   * Declare this content element as archived for a minimum CX version.
   *
   * @example
   * .withArchivedMinVersion(Version.CX_23_2)
   * @param {Version} minVersion
   * @returns {ContentElement}
   * @since BSI CX 23.2
   */
  withArchivedMinVersion(minVersion) {
    if (version_TARGET >= minVersion) {
      this._archived = true;
    }
    return this;
  }

  /**
   * Declare the styles for this content element. You don't have to register the used styles in the design object
   * using {@link Design#withStyleConfigs}. This is only necessary for raw style configs.
   *
   * @example
   * let textColorStyle = cx.style
   *   .withIdentifier('text-color')
   *   .withLabel('Text Color')
   *   .withCssClasses(
   *     cx.cssClass
   *       .withCssClass('blue-text')
   *       .withLabel('Blue'),
   *     cx.cssClass
   *       .withCssClass('red-text')
   *       .withLabel('Red'))
   *  let textElement = cx.contentElement
   *    .withStyleConfigs(
   *      textColorStyle,
   *      require('./styles/background-color'))
   * @see {@link withRawStyleConfigs} to set a raw value
   * @param {...Style} styleConfigs - Styles for this content element.
   * @returns {ContentElement}
   * @since Studio 1.1
   */
  withStyleConfigs(...styleConfigs) {
    this._styleConfigs = styleConfigs;
    return this;
  }

  /**
   * Declare the styles for this content element as raw value. Be aware, that you just pass the name of the referenced
   * style rather than the style configuration itself (which is specified in the <code>styleConfigs</code> section
   * in your design specification. Use {@link Design#withStyleConfigs} to do so.
   *
   * @example
   * .withRawStyleConfigs('text-color', 'background-color')
   * @see {@link withStyleConfigs}
   * @param {...string} styleConfigs - Style config identifiers.
   * @returns {ContentElement}
   * @since Studio 1.1
   */
  withRawStyleConfigs(...styleConfigs) {
    this._styleConfigs = new RawValue(styleConfigs);
    return this;
  }

  /**
   * Specify the parts of your content element.
   *
   * @example
   * .withParts(
   *   cx.part.image
   *     .withLabel('Image'),
   *   cx.part.plainText
   *     .withLabel('Description'))
   * @see {@link withRawParts} to set a raw value
   * @param {...AbstractPart} parts - The parts to use.
   * @returns {ContentElement}
   * @since Studio 1.0
   */
  withParts(...parts) {
    this._parts = parts;
    return this;
  }

  /**
   * Set the parts of your content element as raw value.
   *
   * @example
   * .withRawParts(
   *   {
   *     partId: 'image',
   *     label: 'Image'
   *   },
   *   {
   *     partId: 'plain-text',
   *     label: 'Description'
   *   }
   * )
   * @see {@link withParts}
   * @param {...{}} parts - The parts as raw value.
   * @returns {ContentElement}
   * @since Studio 1.0
   */
  withRawParts(...parts) {
    this._parts = new RawValue(parts);
    return this;
  }

  /**
   * Define the dropzones of this content element.
   *
   * @example
   * .withDropzones(
   *   cx.dropzone
   *     .withDropzone('a5142bca-448b-40c5-bdde-942f531fcd12')
   *     .withAllowedElements(
   *       require('./content-elements/basic/text'),
   *       require('./content-elements/basic/image'))
   *     .withMaxAllowedElements(1),
   *   cx.dropzone
   *     .withDropzone('3b369b8b-f1f6-4754-bb0f-e49a46c315e1')
   *     .withAllowedElements(
   *       require('./content-elements/basic/text'),
   *       require('./content-elements/basic/image'))
   *     .withMaxAllowedElements(1))
   * @param {...Dropzone} dropzones - The dropzones of this content element.
   * @returns {ContentElement}
   */
  withDropzones(...dropzones) {
    this._dropzones = dropzones;
    return this;
  }

  /**
   * Extend the allowed elements list of a defined dropzone. Be aware that this only works when you define your allowed
   * elements by using the provided builder class with the {@link Dropzone#withAllowedElements} method.
   *
   * @example
   * .withExtendedDropzone(
   *   'a5142bca-448b-40c5-bdde-942f531fcd12',
   *   require('./content-elements/basic/text'),
   *   require('./content-elements/basic/image'))
   * @param {string} id - The ID of the dropzone to extend (set with {@link Dropzone#withDropzone}).
   * @param {...ContentElement} elements - The elements to add to the allowed elements list.
   * @returns {ContentElement}
   */
  withExtendedDropzone(id, ...elements) {
    let dropzone = this._dropzones?.find(dropzone => dropzone.dropzone === id);

    if (dropzone) {
      dropzone.withAllowedElements(...dropzone.allowedElements, ...elements);
    }

    return this;
  }

  isCompatible() {
    return super.isCompatible() && !this._hasIncompatibleParts();
  }

  _buildInternal() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.ELEMENT_ID, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.DESCRIPTION, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.ICON, config, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.HIDDEN, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.ARCHIVED, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.FILE, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.PARTS, config, builderObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.STYLE_CONFIGS, config, v => v.identifier, false, true);
    this._applyPropertyIfDefined(DesignJsonPropertyExtension.DROPZONES, config, builderObjectValue);

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {ContentElement}
   */
  clone(shallow) {
    return this._clone(new ContentElement(), shallow);
  }

  /**
   * @return {boolean}
   * @private
   */
  _hasIncompatibleParts() {
    const parts = this.parts ?? [];

    return parts.findIndex(part => part instanceof AbstractBuilder ? !part.isCompatible() : false) !== -1;
  }
}

;// ./src/content-element/part/part.js


class Part extends AbstractConstant {
}

/**
 * @type {Part}
 * @since Studio 1.0
 */
const PLAIN_TEXT = new Part('plain-text');
/**
 * @type {Part}
 * @since Studio 1.0
 */
const FORMATTED_TEXT = new Part('formatted-text');
/**
 * @type {Part}
 * @since Studio 1.0
 */
const part_HTML = new Part('html');
/**
 * @type {Part}
 * @since Studio 1.0
 */
const part_VIDEO = new Part('video');
/**
 * @type {Part}
 * @since Studio 1.0
 */
const part_IMAGE = new Part('image');
/**
 * @type {Part}
 * @since Studio 1.0
 */
const BACKGROUND_IMAGE = new Part('background-image');
/**
 * @type {Part}
 * @since Studio 1.0
 */
const part_TABLE = new Part('table');
/**
 * @type {Part}
 * @since Studio 1.0
 */
const ITERATOR = new Part('iterator');
/**
 * @type {Part}
 * @since Studio 1.0
 */
const NEWS_SNIPPETS = new Part('news-snippets');
/**
 * @type {Part}
 * @since Studio 1.0
 */
const FORM = new Part('form');
/**
 * @type {Part}
 * @since Studio 1.0
 */
const FORM_FIELD = new Part('form-field');
/**
 * @type {Part}
 * @since Studio 1.0
 */
const FORM_CHECKBOX = new Part('form-checkbox');
/**
 * @type {Part}
 * @since Studio 1.0
 */
const FORM_TEXTAREA = new Part('form-textarea');
/**
 * @type {Part}
 * @since Studio 1.0
 */
const FORM_SELECT = new Part('form-select');
/**
 * @type {Part}
 * @since Studio 1.0
 */
const FORM_RADIO = new Part('form-radio');
/**
 * @type {Part}
 * @since Studio 1.0
 */
const LINK = new Part('link');
/**
 * @type {Part}
 * @since Studio 1.0
 */
const part_SOCIAL_FOLLOW = new Part('social-follow');
/**
 * @type {Part}
 * @since Studio 1.0
 */
const part_SOCIAL_SHARE = new Part('social-share');
/**
 * @type {Part}
 * @since 22.0
 */
const URL_PROVIDER = new Part('url-provider');

;// ./src/content-element/part/plain-text-part.js



/**
 * @since Studio 1.0
 */
class PlainTextPart extends AbstractPart {
  constructor() {
    super(PLAIN_TEXT);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {PlainTextPart}
   */
  clone(shallow) {
    return this._clone(new PlainTextPart(), shallow);
  }
}

;// ./src/content-element/part/formatted-text-part.js





/** @typedef {import('../../design/design').default} Design */
/** @typedef {import('../../html-editor-config/html-editor-config').default} HtmlEditorConfig */

/**
 * @since Studio 1.0
 */
class FormattedTextPart extends AbstractPart {
  /**
   * @type {RawValue|HtmlEditorConfig|undefined}
   * @private
   */
  _htmlEditorConfig = undefined;

  constructor() {
    super(FORMATTED_TEXT);
  }

  /**
   * @returns {RawValue|HtmlEditorConfig|undefined}
   */
  get htmlEditorConfig() {
    return this._htmlEditorConfig;
  }

  /**
   * Set a HTML editor configuration to use with this part. Be aware, that you have to reference an existing
   * {@link HtmlEditorConfig} object. You don't have to register the used HTML editor config in the design object
   * using {@link Design#withHtmlEditorConfigs}. This is only necessary for raw editor configs.
   *
   * @example
   * let editorConfig = new HtmlEditorConfig()
   *   .withIdentifier('minimal')
   *   .withRawEnterMode('p')
   *   .withFeatures(
   *     Feature.BOLD,
   *     Feature.ITALIC,
   *     Feature.UNDERLINE);
   * // ...
   * let element = new ContentElement()
   *   .withElementId('element')
   *   .withParts(
   *     new FormattedTextPart()
   *       .withLabel('Text')
   *       .withHtmlEditorConfig(editorConfig))
   * @see {withRawHtmlEditorConfig} to set a raw value
   * @param {HtmlEditorConfig} htmlEditorConfig
   * @returns {FormattedTextPart}
   */
  withHtmlEditorConfig(htmlEditorConfig) {
    this._htmlEditorConfig = htmlEditorConfig;
    return this;
  }

  /**
   * Set the HTML editor config to use as raw value. You have to pass the unique ID of a HTML editor config here.
   * Be aware, that you also have to register your HTML editor configuration with {@link Design#withHtmlEditorConfigs}.
   *
   * @see {@link withHtmlEditorConfig}
   * @param {string} htmlEditorConfig
   * @returns {FormattedTextPart}
   */
  withRawHtmlEditorConfig(htmlEditorConfig) {
    this._htmlEditorConfig = new RawValue(htmlEditorConfig);
    return this;
  }

  _buildInternal() {
    let config = super._buildInternal();

    this._applyPropertyIfDefined(DesignJsonProperty.HTML_EDITOR_CONFIG, config, v => v.identifier, false, true);

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {FormattedTextPart}
   */
  clone(shallow) {
    return this._clone(new FormattedTextPart(), shallow);
  }
}

;// ./src/content-element/part/html-part.js



/**
 * @since Studio 1.0
 */
class HtmlPart extends AbstractPart {
  constructor() {
    super(part_HTML);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {HtmlPart}
   */
  clone(shallow) {
    return this._clone(new HtmlPart(), shallow);
  }
}

;// ./src/content-element/part/video-part.js



/**
 * @since Studio 1.0
 */
class VideoPart extends AbstractPart {
  constructor() {
    super(part_VIDEO);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {VideoPart}
   */
  clone(shallow) {
    return this._clone(new VideoPart(), shallow);
  }
}

;// ./src/content-element/part/image-part.js




/**
 * @since Studio 1.0
 */
class ImagePart extends AbstractPart {
  /**
   * @type {Boolean|undefined}
   * @private
   */
  _altTextMandatory = undefined;

  constructor() {
    super(part_IMAGE);
  }

  /**
   * @returns {Boolean|undefined}
   */
  get altTextMandatory() {
    return this._altTextMandatory;
  }

  /**
   * Set a Boolean to indicate if the alt-text for this image is mandatory.
   * If true users must describe the image before they can save it in the CX editor.
   *
   * @see {withAltTextMandatory}
   * @param {Boolean} altTextMandatory
   * @returns {ImagePart}
   */
  withAltTextMandatory(altTextMandatory) {
    this._altTextMandatory = altTextMandatory
    return this;
  }

  _buildInternal() {
    let config = super._buildInternal();

    this._applyPropertyIfDefined(DesignJsonProperty.ALT_TEXT_MANDATORY, config, v => Boolean(v));

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {ImagePart}
   */
  clone(shallow) {
    return this._clone(new ImagePart(), shallow);
  }
}

;// ./src/content-element/part/background-image-part.js



/**
 * @since Studio 1.0
 */
class BackgroundImagePart extends AbstractPart {
  constructor() {
    super(BACKGROUND_IMAGE);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {BackgroundImagePart}
   */
  clone(shallow) {
    return this._clone(new BackgroundImagePart(), shallow);
  }
}

;// ./src/content-element/part/table-part.js




/**
 * @since Studio 1.0
 */
class TablePart extends AbstractPart {
  /**
   * @type {Boolean|undefined}
   * @private
   */
  _captionEnabled = undefined;

  constructor() {
    super(part_TABLE);
  }

  /**
   * @returns {Boolean|undefined}
   */
  get captionEnabled() {
    return this._captionEnabled;
  }

  /**
   * Set a Boolean to indicate if caption is enabled in editor.
   * If true users can add a caption for the table in CX editor.
   *
   * @see {withCaptionEnabled}
   * @param {Boolean} captionEnabled
   * @returns {ImagePart}
   */
  withCaptionEnabled(captionEnabled) {
    this._captionEnabled = captionEnabled
    return this;
  }

  _buildInternal() {
    let config = super._buildInternal();

    this._applyPropertyIfDefined(DesignJsonProperty.CAPTION_ENABLED, config, v => Boolean(v));

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {TablePart}
   */
  clone(shallow) {
    return this._clone(new TablePart(), shallow);
  }
}

;// ./src/content-element/part/iterator-part.js



/**
 * @since Studio 1.0
 */
class IteratorPart extends AbstractPart {
  constructor() {
    super(ITERATOR);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {IteratorPart}
   */
  clone(shallow) {
    return this._clone(new IteratorPart(), shallow);
  }
}

;// ./src/content-element/part/news-snippets-part.js



/**
 * @since Studio 1.0
 */
class NewsSnippetsPart extends AbstractPart {
  constructor() {
    super(NEWS_SNIPPETS);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {NewsSnippetsPart}
   */
  clone(shallow) {
    return this._clone(new NewsSnippetsPart(), shallow);
  }
}

;// ./src/content-element/part/form-part.js



/**
 * @since Studio 1.0
 */
class FormPart extends AbstractPart {
  constructor() {
    super(FORM);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {FormPart}
   */
  clone(shallow) {
    return this._clone(new FormPart(), shallow);
  }
}

;// ./src/content-element/part/form-field-part.js



/**
 * @since Studio 1.0
 */
class form_field_part_FormFieldPart extends AbstractPart {
  constructor() {
    super(FORM_FIELD);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {FormFieldPart}
   */
  clone(shallow) {
    return this._clone(new form_field_part_FormFieldPart(), shallow);
  }
}

;// ./src/content-element/part/form-checkbox-part.js



/**
 * @since Studio 1.0
 */
class FormCheckboxPart extends AbstractPart {
  constructor() {
    super(FORM_CHECKBOX);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {FormCheckboxPart}
   */
  clone(shallow) {
    return this._clone(new FormCheckboxPart(), shallow);
  }
}

;// ./src/content-element/part/form-textarea-part.js



/**
 * @since Studio 1.0
 */
class FormTextareaPart extends AbstractPart {
  constructor() {
    super(FORM_TEXTAREA);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {FormTextareaPart}
   */
  clone(shallow) {
    return this._clone(new FormTextareaPart(), shallow);
  }
}

;// ./src/content-element/part/form-select-part.js



/**
 * @since Studio 1.0
 */
class FormSelectPart extends AbstractPart {
  constructor() {
    super(FORM_SELECT);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {FormSelectPart}
   */
  clone(shallow) {
    return this._clone(new FormSelectPart(), shallow);
  }
}

;// ./src/content-element/part/form-radio-part.js



/**
 * @since Studio 1.0
 */
class FormRadioPart extends AbstractPart {
  constructor() {
    super(FORM_RADIO);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {FormRadioPart}
   */
  clone(shallow) {
    return this._clone(new FormRadioPart(), shallow);
  }
}

;// ./src/content-element/part/link-part.js



/**
 * @since Studio 1.0
 */
class LinkPart extends AbstractPart {
  constructor() {
    super(LINK);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {LinkPart}
   */
  clone(shallow) {
    return this._clone(new LinkPart(), shallow);
  }
}

;// ./src/content-element/part/social-follow-part.js



/**
 * @since Studio 1.0
 */
class SocialFollowPart extends AbstractPart {
  constructor() {
    super(part_SOCIAL_FOLLOW);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {SocialFollowPart}
   */
  clone(shallow) {
    return this._clone(new SocialFollowPart(), shallow);
  }
}

;// ./src/content-element/part/social-share-part.js



/**
 * @since Studio 1.0
 */
class SocialSharePart extends AbstractPart {
  constructor() {
    super(part_SOCIAL_SHARE);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {SocialSharePart}
   */
  clone(shallow) {
    return this._clone(new SocialSharePart(), shallow);
  }
}

;// ./src/content-element/part/url-provider-part.js




/**
 * @since 22.0
 */
class UrlProviderPart extends AbstractPart {
  constructor() {
    super(URL_PROVIDER);
  }

  get minVersion() {
    return CX_22_0;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {UrlProviderPart}
   */
  clone(shallow) {
    return this._clone(new UrlProviderPart(), shallow);
  }
}

;// ./src/content-element/part/raw.js



/**
 * @since Studio 1.0
 */
class RawPart extends AbstractPart {
  /**
   * @type {Record<string,*>}
   * @private
   */
  _properties = undefined;

  /**
   * @param {string} partId
   */
  constructor(partId) {
    const part = new Part(partId);

    super(part);

    this._properties = {};
  }

  /**
   * @returns {Record<string, *>}
   */
  get properties() {
    return this._properties;
  }

  /**
   * Set a property for this raw part.
   *
   * @example
   * let element = new ContentElement()
   *   .withElementId('element')
   *   .withParts(
   *     new RawPart('chart')
   *       .withLabel('Chart')
   *       .withProperty('type','pie'))
   * @param {string} name
   * @param {string|array|number|boolean|Record|null} value
   * @returns {RawPart}
   */
  withProperty(name, value) {
    this._properties[name] = value;
    return this;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {RawPart}
   */
  clone(shallow) {
    return this._clone(new RawPart(this.partId), shallow);
  }

  _buildInternal() {
    let config = super._buildInternal();

    return Object.assign({}, config, this._properties);
  }
}

;// ./src/website/website.js







/**
 * This is the builder class for website objects.
 *
 * @example
 * module.exports = cx.website
 *   .withMaxNavigationLevel(2)
 *   .withPagination(
 *     cx.pagination
 *       .withNumDataRecordsPerPage(20)
 *       .withNumAdjacentPages(3))
 *   .withIncludes(
 *     cx.include
 *       .withIdentifier('header')
 *       .withEditable(true)
 *       .withFile(require('./template.twig')
 *       .withName('Template for the Homepage'),
 *     cx.include
 *       .withIdentifier('pagination-element')
 *       .withEditable(false)
 *       .withContentType('pre-defined')
 *       .withFile(require('./includes/pagination-element.hbs'))
 *       .withName('Pagination'))
 * @since BSI CX 1.3
 */
class Website extends AbstractBuilder {
  /**
   * @type {number|undefined}
   * @private
   */
  _maxNavigationLevel = undefined;
  /**
   * @type {RawValue|Pagination|undefined}
   * @private
   */
  _pagination = undefined;
  /**
   * @type {RawValue|AbstractInclude[]|undefined}
   * @private
   */
  _includes = undefined;

  /**
   * @returns {number|undefined}
   */
  get maxNavigationLevel() {
    return this._maxNavigationLevel;
  }

  /**
   * @returns {RawValue|Pagination|undefined}
   */
  get pagination() {
    return this._pagination;
  }

  /**
   * @returns {RawValue|AbstractInclude[]|undefined}
   */
  get includes() {
    return this._includes;
  }

  get minVersion() {
    return CX_1_3;
  }

  get allowedTypes() {
    return [WEBSITE];
  }

  /**
   * Define the maximum navigation level.
   *
   * @param {number} maxNavigationLevel - The maximum navigation level.
   * @returns {Website}
   */
  withMaxNavigationLevel(maxNavigationLevel) {
    this._maxNavigationLevel = maxNavigationLevel;
    return this;
  }

  /**
   * Define the pagination to be used for this website.
   *
   * @example
   * .withPagination(
   *   cx.pagination
   *     .withNumDataRecordsPerPage(20)
   *     .withNumAdjacentPages(3))
   * @param {Pagination} pagination
   * @returns {Website}
   */
  withPagination(pagination) {
    this._pagination = pagination;
    return this;
  }

  /**
   * Define the pagination to be used for this website as raw value.
   *
   * @example
   * .withRawPagination({
   *   numDataRecordsPerPage: 20,
   *   numAdjacentPages: 3
   * })
   * @param {{}} pagination - Pagination as raw value.
   * @returns {Website}
   */
  withRawPagination(pagination) {
    this._pagination = new RawValue(pagination);
    return this;
  }

  /**
   * Define the includes for this website.
   *
   * @example
   * .withIncludes(
   *   cx.include
   *     .withIdentifier('footer')
   *     .withEditable(true)
   *     .withFile(require('./template.twig'))
   *     .withName('Footer'))
   * @see {@link withRawIncludes} to set a raw value
   * @param {...AbstractInclude} includes
   * @returns {Website}
   */
  withIncludes(...includes) {
    this._includes = includes;
    return this;
  }

  /**
   * Define the includes for this website as raw value.
   *
   * @example
   * .withRawIncludes({
   *   __page__: {
   *     editable: true,
   *     file: require('./page.twig'),
   *     name: 'Template for content'
   *   },
   *   header: {
   *     editable: true,
   *     file: require('./header.html'),
   *     name: 'Header'
   *   }
   * })
   * @param {{}} includes - The includes as raw value.
   * @returns {Website}
   */
  withRawIncludes(includes) {
    this._includes = new RawValue(includes);
    return this;
  }

  _buildInternal() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.MAX_NAVIGATION_LEVEL, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.PAGINATION, config, builderObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.INCLUDES, config, builderObjectValue, true);

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {Website}
   */
  clone(shallow) {
    return this._clone(new Website(), shallow);
  }
}

;// ./src/website/abstract-include.js







/** @typedef {import('../dropzone/dropzone').default} Dropzone */

/**
 * @abstract
 * @since BSI CX 1.3
 */
class AbstractInclude extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @protected
   */
  _identifier = uuid();
  /**
   * @type {boolean|undefined}
   * @protected
   */
  _editable = undefined;
  /**
   * @type {string|undefined}
   * @protected
   */
  _contentType = undefined;
  /**
   * @type {{}|undefined}
   * @protected
   */
  _file = undefined;
  /**
   * @type {string|NLS|undefined}
   * @protected
   */
  _name = undefined;
  /**
   * @type {Dropzone[]|undefined}
   * @private
   */
  _dropzones = undefined;

  /**
   * @param {string|undefined} identifier
   */
  constructor(identifier) {
    super();
    /**
     * @type {string|undefined}
     * @protected
     */
    this._identifier = identifier;
  }

  /**
   * @returns {string|undefined}
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * @returns {boolean|undefined}
   */
  get editable() {
    return this._editable;
  }

  /**
   * @returns {string|undefined}
   */
  get contentType() {
    return this._contentType;
  }

  /**
   * @returns {{}|undefined}
   */
  get file() {
    return this._file;
  }

  /**
   * @returns {string|NLS|undefined}
   */
  get name() {
    return this._name;
  }

  /**
   * @returns {Dropzone[]|undefined}
   */
  get dropzones() {
    return this._dropzones;
  }

  get minVersion() {
    return CX_1_3;
  }

  get allowedTypes() {
    return [WEBSITE];
  }

  /**
   * Enable or disable edit mode on this include.
   *
   * @param {boolean} editable - The editable flag.
   * @returns {this}
   */
  withEditable(editable) {
    this._editable = editable;
    return this;
  }

  /**
   * Define the content type of this include.
   *
   * @example
   * .withContentType('pre-defined')
   * @param {string} contentType - The content type of this include.
   * @returns {this}
   */
  withContentType(contentType) {
    this._contentType = contentType;
    return this;
  }

  /**
   * Define the template to use with this include. Be aware, that you must <code>require</code> the corresponding
   * template file. This can either be a \*.html, \*.hbs, \*.hbs.twig or a \*.twig file.
   *
   * @example
   * .withFile(require('./footer.html'))
   * @param {{}} file - The file object. Just pass the response of your require statement.
   * @returns {this}
   */
  withFile(file) {
    this._file = file;
    return this;
  }

  /**
   * Set the name of this include. In contrast to the {@link identifier}, this property must not be unique.
   *
   * @param {string|NLS} name - The name of this include.
   * @returns {this}
   */
  withName(name) {
    this._name = name;
    return this;
  }

  /**
   * Define the dropzones of this include.
   *
   * @example
   * .withDropzones(
   *   cx.dropzone
   *     .withDropzone('a5142bca-448b-40c5-bdde-942f531fcd12')
   *     .withAllowedElements(
   *       require('./content-elements/basic/text'),
   *       require('./content-elements/basic/image'))
   *     .withMaxAllowedElements(1),
   *   cx.dropzone
   *     .withDropzone('3b369b8b-f1f6-4754-bb0f-e49a46c315e1')
   *     .withAllowedElements(
   *       require('./content-elements/basic/text'),
   *       require('./content-elements/basic/image'))
   *     .withMaxAllowedElements(1))
   * @param {...Dropzone} dropzones - The dropzones of this include.
   * @returns {this}
   */
  withDropzones(...dropzones) {
    this._dropzones = dropzones;
    return this;
  }

  /**
   * Extend the allowed elements list of a defined dropzone. Be aware that this only works when you define your allowed
   * elements by using the provided builder class with the {@link Dropzone#withAllowedElements} method.
   *
   * @example
   * .withExtendedDropzone(
   *   'a5142bca-448b-40c5-bdde-942f531fcd12',
   *   require('./content-elements/basic/text'),
   *   require('./content-elements/basic/image'))
   * @param {string} id - The ID of the dropzone to extend (set with {@link Dropzone#withDropzone}).
   * @param {...ContentElement} elements - The elements to add to the allowed elements list.
   * @returns {this}
   */
  withExtendedDropzone(id, ...elements) {
    let dropzone = this._dropzones?.find(dropzone => dropzone.dropzone === id);

    if (dropzone) {
      dropzone.withAllowedElements(...dropzone.allowedElements, ...elements);
    }

    return this;
  }

  _buildInternal() {
    let config = {};
    let include = {};

    config[this.identifier] = include;

    this._applyPropertyIfDefined(DesignJsonProperty.EDITABLE, include, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.CONTENT_TYPE, include, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.FILE, include, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.NAME, include, identity);
    this._applyPropertyIfDefined(DesignJsonPropertyExtension.DROPZONES, include, builderObjectValue);

    return config;
  }
}

;// ./src/website/page-include.js



/**
 * This is the page include builder class.
 *
 * @example
 * new PageInclude()
 *   .withEditable(true)
 *   .withFile(require('./includes/page.html'))
 *   .withName('Template for content')
 * @since BSI CX 1.3
 */
class PageInclude extends AbstractInclude {
  constructor() {
    super(DesignJsonProperty.PAGE_INCLUDE);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {PageInclude}
   */
  clone(shallow) {
    return this._clone(new PageInclude(), shallow);
  }
}

;// ./src/website/include.js


/** @typedef {import('./website').default} Website */
/** @typedef {import('../dropzone/dropzone').default} Dropzone */

/**
 * This is the builder class for {@link Website|website} includes.
 *
 * @example
 * .withIncludes(
 *   cx.pageInclude
 *     .withEditable(true)
 *     .withFile(require('./includes/page.html'))
 *     .withName('Template for new content'),
 *   cx.include
 *     .withIdentifier('header')
 *     .withEditable(true)
 *     .withFile(require('./includes/header.twig'))
 *     .withName('Header'),
 *   cx.include
 *     .withIdentifier('pagination-element')
 *     .withEditable(false)
 *     .withContentType('pre-defined')
 *     .withFile(require('./includes/pagination-element.hbs'))
 *     .withName('Pagination'))
 * @since BSI CX 1.3
 */
class Include extends AbstractInclude {
  constructor() {
    super(undefined);
  }

  /**
   * Set the unique identifier to use. A UUID v4 will be used, if you don't set this property.
   * <strong>It is recommended to define this property.</strong>
   *
   * @param {string} identifier - A unique identifier for this include.
   * @returns {Include}
   */
  withIdentifier(identifier) {
    this._identifier = identifier;
    return this;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {Include}
   */
  clone(shallow) {
    return this._clone(new Include(), shallow);
  }
}

;// ./src/nls/translation.js




/** @typedef {import('../design/locale').Locale} Locale */

/**
 * The builder class for translation objects.
 *
 * @example
 * module.exports = [
 *   // using with* methods
 *   cx.nls
 *     .withIdentifier('action')
 *     .withTranslations(
 *       cx.translation
 *         .withLocale(Locale.WILDCARD)
 *         .withTranslation('action'),
 *       cx.translation
 *         .withLocale(Locale.DE)
 *         .withTranslation('Aktion')),
 *   // using factory shortcuts
 *   cx.h.nls(
 *     'contact',
 *     cx.h.t('contact'),
 *     cx.h.t('de', 'Kontakt'),
 *     cx.h.t(Locale.DE_CH, 'Kontakt'))
 * ];
 */
class Translation extends AbstractBuilder {
  /**
   * @type {Locale|RawValue|undefined}
   * @private
   */
  _locale = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _translation = undefined;

  /**
   * @returns {Locale|RawValue|undefined}
   */
  get locale() {
    return this._locale;
  }

  /**
   * @returns {string|undefined}
   */
  get translation() {
    return this._translation;
  }

  /**
   * Set the locale to use for this translation.
   *
   * @example
   * .withLocale(Locale.EN)
   * @param {Locale} locale - The locale to use.
   * @returns {Translation}
   */
  withLocale(locale) {
    this._locale = locale;
    return this;
  }

  /**
   * Set the locale as raw value.
   *
   * @example
   * .withRawLocale('en')
   * @param {string} locale - The raw locale to use.
   * @returns {Translation}
   */
  withRawLocale(locale) {
    this._locale = new RawValue(locale);
    return this;
  }

  /**
   * Set the translated string for this translation object.
   *
   * @example
   * .withTranslation('action')
   * @param {string} translation - The translation to use.
   * @returns {Translation}
   */
  withTranslation(translation) {
    this._translation = translation;
    return this;
  }

  _buildInternal() {
    let config = {};

    config[this.locale?.value] = this.translation;

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {Translation}
   */
  clone(shallow) {
    return this._clone(new Translation(), shallow);
  }

  /**
   * Static helper to create a translation object with a given locale.
   *
   * @example
   * Translation.create(Locale.EN, 'action')
   * @param {Locale} locale - The locale to use.
   * @param {string} translation - The translation to use.
   * @returns {Translation}
   */
  static create(locale, translation) {
    return new Translation()
      .withLocale(locale)
      .withTranslation(translation);
  }

  /**
   * Static helper to create a translation object with a {@link WILDCARD|wildcard} locale.
   *
   * @example
   * Translation.wildcard('action')
   * @param {string} translation - The translation to use.
   * @returns {Translation}
   */
  static wildcard(translation) {
    return new Translation()
      .withLocale(WILDCARD)
      .withTranslation(translation);
  }
}

;// ./src/nls/nls.js




/**
 * The builder class for NLS objects.
 *
 * @example
 * module.exports = [
 *   // using with* methods
 *   cx.nls
 *     .withIdentifier('action')
 *     .withTranslations(
 *       cx.translation
 *         .withLocale(Locale.WILDCARD)
 *         .withTranslation('action'),
 *       cx.translation
 *         .withLocale(Locale.DE)
 *         .withTranslation('Aktion')),
 *   // using factory shortcuts
 *   cx.h.nls(
 *     'contact',
 *     cx.h.t('contact'),
 *     cx.h.t('de', 'Kontakt'),
 *     cx.h.t(Locale.DE_CH, 'Kontakt'))
 * ];
 */
class NLS extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _identifier = undefined;
  /**
   * @type {Translation[]|undefined}
   * @private
   */
  _translations = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _nlsMarker = uuid();

  /**
   * @returns {string|undefined}
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * @returns {Translation[]|undefined}
   */
  get translations() {
    return this._translations;
  }

  /**
   * @returns {string|undefined}
   */
  get nlsMarker() {
    return this._nlsMarker;
  }

  /**
   * @param {string} identifier
   * @returns {NLS}
   */
  withIdentifier(identifier) {
    this._identifier = identifier;
    return this;
  }

  /**
   * Add translations to this NLS object.
   *
   * @example
   * cx.nls
   *   .withIdentifier('action')
   *   .withTranslations(
   *     cx.translation
   *       .withLocale(Locale.WILDCARD)
   *       .withTranslation('action'),
   *     cx.translation
   *       .withLocale(Locale.DE)
   *       .withTranslation('Aktion'))
   * @param {...Translation} translations - The translation objects.
   * @returns {NLS}
   */
  withTranslations(...translations) {
    this._translations = translations;
    return this;
  }

  /**
   * Set the translations as raw value.
   *
   * @example
   * .withRawTranslations({
   *   '*': 'contact',
   *   'de': 'Kontakt',
   *   'de-CH': 'Kontakt'
   * })
   * @param {{}} translations
   * @returns {NLS}
   */
  withRawTranslations(translations) {
    this._translations = [];

    for (let [locale, translation] of Object.entries(translations)) {
      let translationObj = new Translation()
        .withRawLocale(locale)
        .withTranslation(translation);
      this._translations.push(translationObj);
    }

    return this;
  }

  _buildInternal() {
    let config = {};
    let translation = {};

    for (let translationObj of this.translations ?? []) {
      translation = {
        ...translation,
        ...translationObj.build()
      }
    }

    config[this.identifier] = translation;

    return config;
  }

  /**
   * Static helper method to create a NLS with some translations.
   *
   * @param {string} identifier - The identifier to use.
   * @param {...Translation} translations - The translation objects.
   * @returns {NLS}
   */
  static create(identifier, ...translations) {
    return new NLS()
      .withIdentifier(identifier)
      .withTranslations(...translations);
  }

  /**
   * @example
   * NLS.fromMap(
   *   'reset',
   *   new Map([
   *     [Locale.WILDCARD, 'Reset'],
   *     [Locale.DE, 'Zurücksetzen']
   *   ])
   * )
   * @param {string} identifier
   * @param {Map<Locale,string>} map
   */
  static fromMap(identifier, map) {
    let translations = [];

    for (let [locale, translation] of map.entries()) {
      translations.push(
        new Translation()
          .withLocale(locale)
          .withTranslation(translation));
    }

    return new NLS()
      .withIdentifier(identifier)
      .withTranslations(...translations);
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {NLS}
   */
  clone(shallow) {
    return this._clone(new NLS(), shallow);
  }
}

;// ./src/content-element/part/config-part.js





/** @typedef {import('./part').Part} Part */
/** @typedef {import('../../design/design').default} Design */
/** @typedef {import('../../html-editor-config/html-editor-config').default} HtmlEditorConfig */

/**
 * @since Studio 23.2
 */
class ConfigPart extends AbstractPart {
  /**
   * @type {{}|undefined}
   * @private
   */
  _config = undefined;

  /**
   * @type {RawValue|HtmlEditorConfig|undefined}
   * @private
   */
  _htmlEditorConfig = undefined;

  /**
   * @type {Boolean|undefined}
   * @private
   */
  _altTextMandatory = undefined;

  /**
   * @type {Boolean|undefined}
   * @private
   */
  _captionEnabled = undefined;

  /**
   * @param {Part} partId
   */
  constructor(partId, label, id) {
    var partObj = new Part(partId);
    super(partObj);
    /**
     * @type {Part}
     * @private
     */
    super.withLabel(label);
    super.withId(id);
  }

  /**
   * @returns {{}|undefined}
   */
  get config() {
    return this._config;
  }

  /**
   * @returns {RawValue|HtmlEditorConfig|undefined}
   */
  get htmlEditorConfig() {
    return this._htmlEditorConfig;
  }

  /**
   * @returns {Boolean|undefined}
   */
  get altTextMandatory() {
    return this._altTextMandatory;
  }

  /**
   * @returns {Boolean|undefined}
   */
  get captionEnabled() {
    return this._captionEnabled;
  }


  // TODO description
  withRawConfig(config) {
    this._config = config;
    return this;
  }

  // TODO description
  withConfig(key, value) {
    this._config = this.config || {};
    this._config[key] = value;
    return this;
  }

  /**
   * Set a HTML editor configuration to use with this part. Be aware, that you have to reference an existing
   * {@link HtmlEditorConfig} object. You don't have to register the used HTML editor config in the design object
   * using {@link Design#withHtmlEditorConfigs}. This is only necessary for raw editor configs.
   *
   * @example
   * let editorConfig = new HtmlEditorConfig()
   *   .withIdentifier('minimal')
   *   .withRawEnterMode('p')
   *   .withFeatures(
   *     Feature.BOLD,
   *     Feature.ITALIC,
   *     Feature.UNDERLINE);
   * // ...
   * let element = new ContentElement()
   *   .withElementId('element')
   *   .withParts(
   *     new FormattedTextPart()
   *       .withLabel('Text')
   *       .withHtmlEditorConfig(editorConfig))
   * @see {withRawHtmlEditorConfig} to set a raw value
   * @param {HtmlEditorConfig} htmlEditorConfig
   * @returns {FormattedTextPart}
   */
  withHtmlEditorConfig(htmlEditorConfig) {
    this._htmlEditorConfig = htmlEditorConfig;
    return this.withConfig(DesignJsonProperty.HTML_EDITOR_CONFIG, htmlEditorConfig.identifier);
  }

  /**
   * Set a Boolean to indicate if the alt-text for this image is mandatory.
   * If true users must describe the image before they can save it in the CX editor.
   *
   * @see {withAltTextMandatory}
   * @param {Boolean} altTextMandatory
   * @returns {ConfigPart}
   */
  withAltTextMandatory(altTextMandatory) {
    this._altTextMandatory = altTextMandatory;
    return this.withConfig(DesignJsonProperty.ALT_TEXT_MANDATORY, altTextMandatory);
  }

  /**
   * Set a Boolean to indicate if caption is enabled in editor.
   * If true users can add a caption for the table in CX editor.
   *
   * @see {withCaptionEnabled}
   * @param {Boolean} captionEnabled
   * @returns {ConfigPart}
   */
  withCaptionEnabled(captionEnabled) {
    this._captionEnabled = captionEnabled;
    return this.withConfig(DesignJsonProperty.CAPTION_ENABLED, captionEnabled);
  }

  withLabel(label) {
    return super.withLabel(label);
  }

  _buildInternal() {
    let config = super._buildInternal();

    this._applyPropertyIfDefined(DesignJsonProperty.PART_CONFIG, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.HTML_EDITOR_CONFIG, config, v => v.identifier, false, true);
    this._applyPropertyIfDefined(DesignJsonProperty.ALT_TEXT_MANDATORY, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.CAPTION_ENABLED, config, identity);

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {FormFieldPart}
   */
  clone(shallow) {
    return this._clone(new FormFieldPart(), shallow);
  }
}

;// ./src/content-element/part/config-part-factory.js





class ConfigPartFactory {
  /**
   * Get a new background content element part builder instance.
   *
   * @returns {BackgroundImagePart}
   */
  get backgroundImage() {
    return new ConfigPart('background-image');
  }

  /**
   * Get a new plain text content element part builder instance.
   *
   * @returns {PlainTextPart}
   */
  get plainText() {
    return new ConfigPart('plain-text');
  }

  /**
   * Build a new background content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  BackgroundImage(label, id) {
    return new ConfigPart('background-image', label, id);
  }

  /**
   * Build a new checkbox form field content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  formCheckbox(label, id) {
    return new ConfigPart('form-checkbox', label, id);
  }

  /**
   * Build a new form field content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  formField(label, id) {
    return new ConfigPart('form-field', label, id);
  }

  /**
   * Build a new form content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  form(label, id) {
    return new ConfigPart('form', label, id);
  }

  /**
   * Build a new radio form field content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  formRadio(label, id) {
    return new ConfigPart('form-radio', label, id);
  }

  /**
   * Build a new select form field content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  formSelect(label, id) {
    return new ConfigPart('form-select', label, id);
  }

  /**
   * Build a new textarea form field content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  formTextarea(label, id) {
    return new ConfigPart('form-textarea', label, id);
  }

  /**
   * Build a new formatted text content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @param {HtmlEditorConfig} htmlEditorConfig
   * @returns {ConfigPart}
   */
  formattedText(label, id, htmlEditorConfig) {
    var part = new ConfigPart('formatted-text', label, id)
    return htmlEditorConfig ? part.withHtmlEditorConfig(htmlEditorConfig) : part;
  }

  /**
   * Build a new HTML content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  html(label, id) {
    return new ConfigPart('html', label, id);
  }

  /**
   * Build a new image content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @param {boolean} altTextMandatory
   * @returns {ConfigPart}
   */
  image(label, id, altTextMandatory) {
    var part = new ConfigPart('image', label, id);
    return altTextMandatory !== null ? part.withAltTextMandatory(altTextMandatory) : part;
  }

  /**
   * Build a new iterator content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  iterator(label, id) {
    return new ConfigPart('iterator', label, id);
  }

  /**
   * Build a new link content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  link(label, id) {
    return new ConfigPart('link', label, id);
  }

  /**
   * Build a new news snippet content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  newsSnippet(label, id) {
    return new ConfigPart('news-snippets', label, id);
  }

  /**
   * Build a new plain text content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  PlainText(label, id) {
    return new ConfigPart('plain-text', label, id);
  }

  /**
   * Build a new social follow content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  socialFollow(label, id) {
    return new ConfigPart('social-follow', label, id);
  }

  /**
   * Build a new social share content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  socialShare(label, id) {
    return new ConfigPart('social-share', label, id);
  }

  /**
   * Build a new table content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @param {boolean} captionEnabled
   * @returns {ConfigPart}
   */
  table(label, id, captionEnabled) {
    var part = new ConfigPart('table', label, id);
    return captionEnabled !== null ? part.withCaptionEnabled(captionEnabled) : part;
  }

  /**
   * Build a new URL provider content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  urlProvider(label, id) {
    return new ConfigPart('url-provider', label, id);
  }

  /**
   * Build a new video content element part builder instance.
   *
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  video(label, id) {
    return new ConfigPart('video', label, id);
  }

  /**
   * Create a raw element part builder instance. Can be used for custom element parts.
   *
   * @param {string} partId
   * @param {string} label
   * @param {string} id
   * @returns {ConfigPart}
   */
  raw(partId, label, id) {
    return new ConfigPart(partId, label, id);
  }
}

;// ./src/content-element/part/part-factory.js





















class PartFactory {
  /**
   * Get a new background content element part builder instance.
   *
   * @returns {BackgroundImagePart}
   */
  get backgroundImage() {
    return new BackgroundImagePart();
  }

  /**
   * Get a new checkbox form field content element part builder instance.
   *
   * @returns {FormCheckboxPart}
   */
  get formCheckbox() {
    return new FormCheckboxPart();
  }

  /**
   * Get a new form field content element part builder instance.
   *
   * @returns {FormFieldPart}
   */
  get formField() {
    return new form_field_part_FormFieldPart();
  }

  /**
   * Get a new form content element part builder instance.
   *
   * @returns {FormPart}
   */
  get form() {
    return new FormPart();
  }

  /**
   * Get a new radio form field content element part builder instance.
   *
   * @returns {FormRadioPart}
   */
  get formRadio() {
    return new FormRadioPart();
  }

  /**
   * Get a new select form field content element part builder instance.
   *
   * @returns {FormSelectPart}
   */
  get formSelect() {
    return new FormSelectPart();
  }

  /**
   * Get a new textarea form field content element part builder instance.
   *
   * @returns {FormTextareaPart}
   */
  get formTextarea() {
    return new FormTextareaPart();
  }

  /**
   * Get a new formatted text content element part builder instance.
   *
   * @returns {FormattedTextPart}
   */
  get formattedText() {
    return new FormattedTextPart();
  }

  /**
   * Get a new HTML content element part builder instance.
   *
   * @returns {HtmlPart}
   */
  get html() {
    return new HtmlPart();
  }

  /**
   * Get a new image content element part builder instance.
   *
   * @returns {ImagePart}
   */
  get image() {
    return new ImagePart();
  }

  /**
   * Get a new iterator content element part builder instance.
   *
   * @returns {IteratorPart}
   */
  get iterator() {
    return new IteratorPart();
  }

  /**
   * Get a new link content element part builder instance.
   *
   * @returns {LinkPart}
   */
  get link() {
    return new LinkPart();
  }

  /**
   * Get a new news snippet content element part builder instance.
   *
   * @returns {NewsSnippetsPart}
   */
  get newsSnippet() {
    return new NewsSnippetsPart();
  }

  /**
   * Get a new plain text content element part builder instance.
   *
   * @returns {PlainTextPart}
   */
  get plainText() {
    return new PlainTextPart();
  }

  /**
   * Get a new social follow content element part builder instance.
   *
   * @returns {SocialFollowPart}
   */
  get socialFollow() {
    return new SocialFollowPart();
  }

  /**
   * Get a new social share content element part builder instance.
   *
   * @returns {SocialSharePart}
   */
  get socialShare() {
    return new SocialSharePart();
  }

  /**
   * Get a new table content element part builder instance.
   *
   * @returns {TablePart}
   */
  get table() {
    return new TablePart();
  }

  /**
   * Get a new URL provider content element part builder instance.
   *
   * @returns {UrlProviderPart}
   */
  get urlProvider() {
    return new UrlProviderPart();
  }

  /**
   * Get a new video content element part builder instance.
   *
   * @returns {VideoPart}
   */
  get video() {
    return new VideoPart();
  }

  /**
   * Create a raw element part builder instance. Can be used for custom element parts.
   *
   * @param {string} partId
   * @returns {RawPart}
   */
  raw(partId) {
    return new RawPart(partId);
  }
}

;// ./src/website/pagination.js






/**
 * This is the builder class for {@link Website|website} pagination.
 *
 * @example
 * .withPagination(
 *   cx.pagination
 *     .withNumDataRecordsPerPage(20)
 *     .withNumAdjacentPages(3))
 * @since BSI CX 22.0
 */
class Pagination extends AbstractBuilder {
  /**
   * @type {number|undefined}
   * @private
   */
  _numDataRecordsPerPage = undefined;
  /**
   * @type {number|undefined}
   * @private
   */
  _numAdjacentPages = undefined;

  /**
   * @returns {number|undefined}
   */
  get numDataRecordsPerPage() {
    return this._numDataRecordsPerPage;
  }

  /**
   * @returns {number|undefined}
   */
  get numAdjacentPages() {
    return this._numAdjacentPages;
  }

  get minVersion() {
    return CX_22_0;
  }

  get allowedTypes() {
    return [WEBSITE];
  }

  /**
   * Define how many records are to be displayed simultaneously on a page.
   *
   * @param {number} numDataRecordsPerPage - The number of data records to be displayed on a page.
   * @returns {Pagination}
   */
  withNumDataRecordsPerPage(numDataRecordsPerPage) {
    this._numDataRecordsPerPage = numDataRecordsPerPage;
    return this;
  }

  /**
   * Define how many lower and higher page numbers are to be displayed in the pagination navigation.
   *
   * @param {number} numAdjacentPages - The number of adjacent pages.
   * @returns {Pagination}
   */
  withNumAdjacentPages(numAdjacentPages) {
    this._numAdjacentPages = numAdjacentPages;
    return this;
  }

  _buildInternal() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.NUM_DATA_RECORDS_PER_PAGE, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.NUM_ADJACENT_PAGES, config, identity);

    return config;
  }
}

;// ./src/design/design-helper.js


/** @typedef {import('./design-factory').default} DesignFactory */
/** @typedef {import('../style/css-class').default} CssClass */

/**
 * A collection of various helper methods.
 *
 * @example
 * cx.h.nls(
 *   'action',
 *   cx.h.t('action'),
 *   cx.h.t('de','Aktion'))
 */
class DesignHelper {
  /**
   * @type {DesignFactory}
   * @private
   */
  _factory = undefined;

  /**
   * @param {DesignFactory} factory
   */
  constructor(factory) {
    this._factory = factory;
  }

  /**
   * @returns {DesignFactory}
   */
  get _factory() {
    return this._factory;
  }

  /**
   * Shortcut to create a new {@link Style} object. See example for usage.
   *
   * @example
   * module.exports = cx.h.style(
   *   'text-color',
   *   'Text Color',
   *   cx.h.cssClass('text-red','Red'),
   *   cx.h.cssClass('text-blue','Blue'));
   * @param {string} identifier
   * @param {string} label
   * @param {...CssClass} cssClasses
   */
  style(identifier, label, ...cssClasses) {
    return this._factory.style
      .withIdentifier(identifier)
      .withLabel(label)
      .withCssClasses(...cssClasses);
  }

  /**
   * Shortcut to create a new {@link CssClass} instance. See example for usage.
   *
   * @example
   * module.exports = cx.style
   *   .withIdentifier('text-color')
   *   .withLabel('Text Color')
   *   .withCssClasses(
   *     cx.h.cssClass('text-red','Red'),
   *     cx.h.cssClass('text-blue','Blue'));
   * @param {string} cssClass
   * @param {string} label
   * @returns {CssClass}
   */
  cssClass(cssClass, label) {
    return this._factory.cssClass
      .withCssClass(cssClass)
      .withLabel(label);
  }

  /**
   * Shortcut to create a {@link NLS} object. See example for usage.
   *
   * @example
   * module.exports = [
   *   cx.h.nls(
   *     'action',
   *     cx.h.t('action'),
   *     cx.h.t('de', 'Aktion'),
   *     cx.h.t(Locale.DE_CH, 'Aktion')),
   *   cx.h.nls(
   *     'contact',
   *     cx.h.t('contact'),
   *     cx.h.t('de', 'Kontakt'),
   *     cx.h.t(Locale.DE_CH, 'Kontakt'))
   * ];
   * @see {@link t}
   * @param {string} identifier
   * @param {Translation} translations
   * @returns {NLS}
   */
  nls(identifier, ...translations) {
    return this._factory.nls
      .withIdentifier(identifier)
      .withTranslations(...translations);
  }

  /**
   * Shortcut to create a {@link Translation} object. See example for usage.
   *
   * @example
   * cx.nls
   *   .withIdentifier('action')
   *   .withTranslations(
   *     cx.h.t('action'), // wildcard translation
   *     cx.h.t('de', 'Aktion'), // translation with raw locale
   *     cx.h.t(Locale.DE_CH, 'Ägschen')) // translation with locale as constant
   * @see {@link n}
   * @param {Locale|string} localeOrWildcardTranslation - Locale (as string or constant) or translation string.
   * @param {string|undefined} [optionalTranslation=undefined] - The translation, only required if the first parameter is a locale.
   * @returns {Translation}
   */
  t(localeOrWildcardTranslation, optionalTranslation) {
    let locale = optionalTranslation === undefined ? WILDCARD : localeOrWildcardTranslation;
    let translation = optionalTranslation ?? localeOrWildcardTranslation;
    let translationObj = this._factory.translation.withTranslation(translation);

    return locale instanceof Locale ? translationObj.withLocale(locale) : translationObj.withRawLocale(locale);
  }
}

;// ./src/design/design-factory.js



















/**
 * Use the design factory to minimize the amount of imports when specifying a design.
 * The design factory is available under the <code>cx</code> constant.
 *
 * @example
 * const {cx} = require('@bsi-cx/design-build');
 *
 * module.exports = cx.design
 *   .withTitle('My BSI CX Design')
 *   .withAuthor('John Doe')
 *   .withDate('18.8.2021')
 *   .withPreviewImage(require('./preview.png'))
 *   .withRawDefaultLocale('en')
 *   .withHtmlEditorConfigs(
 *     require('./configs/html-editor/full.js'),
 *     require('./configs/html-editor/minimal.js'))
 *   .withContentElementGroups(
 *     cx.contentElementGroup
 *       .withGroupId('content')
 *       .withLabel('Content')
 *       .withContentElements(
 *         require('./content-elements/content/title'),
 *         require('./content-elements/content/text')));
 */
class DesignFactory {
  /**
   * Get a new design builder instance.
   *
   * @example
   * cx.design
   *   .withTitle('My BSI CX Design')
   *   .withAuthor('John Doe')
   *   .withDate('18.8.2021')
   *   .withPreviewImage(require('./preview.png'))
   *   .withRawDefaultLocale('en')
   *   .withHtmlEditorConfigs(
   *     require('./configs/html-editor/full.js'),
   *     require('./configs/html-editor/minimal.js'))
   *   .withContentElementGroups(
   *     cx.contentElementGroup
   *       .withGroupId('content')
   *       .withLabel('Content')
   *       .withContentElements(
   *         require('./content-elements/content/title'),
   *         require('./content-elements/content/text')));
   * @returns {Design}
   */
  get design() {
    return new Design();
  }

  /**
   * Get a new content element group builder instance.
   *
   * @example
   * .withContentElementGroups(
   *   cx.contentElementGroup
   *     .withGroupId('content')
   *     .withLabel('Content')
   *     .withContentElements(
   *       require('./content-elements/content/title'),
   *       require('./content-elements/content/text')));
   * @returns {ContentElementGroup}
   */
  get contentElementGroup() {
    return new ContentElementGroup();
  }

  /**
   * Get a new content element builder instance.
   *
   * @example
   * .withContentElements(
   *   cx.contentElement
   *     .withElementId('image-with-text')
   *     .withLabel('Image with text')
   *     .withDescription('Displays an image with an optional text.')
   *     .withFile(require('./template.twig'))
   *     .withIcon(Icon.IMAGE)
   *     .withParts(
   *       cx.part.image
   *         .withLabel('Image'),
   *       cx.part.plainText
   *         .withLabel('Description')))
   * @returns {ContentElement}
   */
  get contentElement() {
    return new ContentElement();
  }

  /**
   * Get a new website builder instance.
   *
   * @example
   * .withWebsite(
   *   cx.website
   *     .withMaxNavigationLevel(2)
   *     .withIncludes(
   *       cx.include
   *         .withEditable(true)
   *         .withName('Header')
   *         .withFile(require('./includes/header.html')),
   *       cx.include
   *         .withEditable(true)
   *         .withName('Footer')
   *         .withFile(require('./includes/footer.html')))
   * @returns {Website}
   */
  get website() {
    return new Website();
  }

  /**
   * Get a new website include builder instance.
   *
   * @example
   * .withIncludes(
   *   cx.include
   *     .withEditable(true)
   *     .withName('Header')
   *     .withFile(require('./includes/header.html')),
   *   cx.include
   *     .withEditable(true)
   *     .withName('Footer')
   *     .withFile(require('./includes/footer.html')))
   * @returns {Include}
   */
  get include() {
    return new Include();
  }

  /**
   * Get a new dropzone builder instance.
   *
   * @example
   * .withDropzones(
   *   cx.dropzone
   *     .withDropzone('a5142bca-448b-40c5-bdde-942f531fcd12')
   *     .withAllowedElements(
   *       require('./content-elements/basic/text'),
   *       require('./content-elements/basic/image'))
   *     .withMaxAllowedElements(1),
   *   cx.dropzone
   *     .withDropzone('3b369b8b-f1f6-4754-bb0f-e49a46c315e1')
   *     .withAllowedElements(
   *       require('./content-elements/basic/text'),
   *       require('./content-elements/basic/image'))
   *     .withMaxAllowedElements(1))
   * @returns {Dropzone}
   */
  get dropzone() {
    return new Dropzone();
  }

  /**
   * Get a new website page include builder instance.
   *
   * @example
   * .withIncludes(
   *   cx.pageInclude
   *     .withEditable(true)
   *     .withName('Template for Content')
   *     .withFile(require('./includes/page.html')),
   *   cx.include
   *     .withEditable(true)
   *     .withName('Footer')
   *     .withFile(require('./includes/footer.html')))
   * @returns {PageInclude}
   */
  get pageInclude() {
    return new PageInclude();
  }

  /**
   * Get a new website pagination config builder instance.
   *
   * @example
   * .withPagination(
   *   cx.pagination
   *     .withNumDataRecordsPerPage(20)
   *     .withNumAdjacentPages(3))
   * @returns {Pagination}
   */
  get pagination() {
    return new Pagination();
  }

  /**
   * Get a new HTML editor config builder instance.
   *
   * @example
   * module.exports = cx.htmlEditorConfig
   *   .withIdentifier('minimal')
   *   .withRawEnterMode('p')
   *   .withFeatures(
   *     Feature.BOLD,
   *     Feature.ITALIC,
   *     Feature.UNDERLINE);
   * @returns {HtmlEditorConfig}
   */
  get htmlEditorConfig() {
    return new HtmlEditorConfig();
  }

  /**
   * Get a new style configuration builder instance.
   *
   * @example
   * module.exports = cx.style
   *   .withIdentifier('text-color')
   *   .withLabel('Text Color')
   *   .withCssClasses(
   *     cx.cssClass
   *       .withCssClass('text-blue')
   *       .withLabel('Blue'),
   *     cx.cssClass
   *       .withCssClass('text-red')
   *       .withLabel('Red'));
   * @returns {Style}
   */
  get style() {
    return new Style();
  }

  /**
   * Get a new css class builder instance.
   *
   * @example
   * .withCssClasses(
   *   cx.cssClass
   *     .withCssClass('text-blue')
   *     .withLabel('Blue'),
   *   cx.cssClass
   *     .withCssClass('text-red')
   *     .withLabel('Red'));
   * @returns {CssClass}
   */
  get cssClass() {
    return new CssClass();
  }

  /**
   * Get a new style option builder instance.
   *
   * @example
   * .withStyleOptions(
   *   cx.styleOption
   *     .withStyleId('darkred-background-5vLqPX')
   *     .withLabel('Darkred')
   *     .withCssClass('darkred-background')
   *     .withDomManipulations(
   *       cx.domManipulation
   *         .withSelector('div.darkred-background')
   *         .withAttribute('style')
   *         .withValue('background-color: darkred;'),
   *       cx.domManipulation
   *         .withSelector('div.darkred-background p')
   *         .withAttribute('style')
   *         .withValue('color: white;')),
   *   cx.styleOption
   *     .withStyleId('lightblue-background-9ftMNF')
   *     .withLabel('Lightblue')
   *     .withCssClass('lightblue-background')
   *     .withDomManipulations(
   *       cx.domManipulation
   *         .withSelector('div.lightblue-background')
   *         .withAttribute('style')
   *         .withValue('background-color: lightblue;'),
   *       cx.domManipulation
   *         .withSelector('div.lightblue-background p')
   *         .withAttribute('style')
   *         .withValue('color: black;')))
   * @returns {StyleOption}
   */
  get styleOption() {
    return new StyleOption();
  }

  /**
   * Get a new DOM manipulation builder instance.
   *
   * @example
   * .withDomManipulations(
   *   cx.domManipulation
   *     .withSelector('div.darkred-background')
   *     .withAttribute('style')
   *     .withValue('background-color: darkred;'),
   *   cx.domManipulation
   *     .withSelector('div.darkred-background p')
   *     .withAttribute('style')
   *     .withValue('color: white;'))
   * @returns {DomManipulation}
   */
  get domManipulation() {
    return new DomManipulation();
  }

  /**
   * Get a new NLS builder instance.
   *
   * @example
   * .withNLS(
   *   cx.nls
   *     .withIdentifier('action')
   *     .withTranslations(
   *       cx.translation
   *         .withLocale(Locale.WILDCARD)
   *         .withTranslation('action'),
   *       cx.translation
   *         .withLocale(Locale.DE)
   *         .withTranslation('Aktion')))
   * @returns {NLS}
   */
  get nls() {
    return new NLS();
  }

  /**
   * Get a new NLS translation builder instance.
   *
   * @example
   * .withTranslations(
   *   cx.translation
   *     .withLocale(Locale.WILDCARD)
   *     .withTranslation('action'),
   *   cx.translation
   *     .withLocale(Locale.DE)
   *     .withTranslation('Aktion'))
   * @returns {Translation}
   */
  get translation() {
    return new Translation();
  }

  /**
   * Get a content element part factory instance to create new content element part builder objects.
   * The content element part factory is also available under the part constant.
   *
   * @example
   * const {cx, part} = require('@bsi-cx/design-build');
   *
   * // ...
   * .withParts(
   *   cx.part.plainText
   *     .withLabel('Text'),
   *   part.image
   *     .withImage('Image'))
   * @returns {PartFactory}
   */
  get part() {
    return new PartFactory();
  }

  /**
     * Get a content element part factory instance to create new content element part builder objects.
     * The content element part factory is also available under the part constant.
     *
     * @example
     * const {cx, part2} = require('@bsi-cx/design-build');
     *
     * // ...
     * .withParts(
     *   cx.part2.plainText('Text', 'text-id'),
     *   part2.image('Image', 'image-id'))
     * @returns {ConfigPartFactory}
     */
  get part2() {
    return new ConfigPartFactory();
  }

  /**
   * Get a collection of various helper methods.
   *
   * @example
   * cx.h.nls(
   *   'action',
   *   cx.h.t('action'),
   *   cx.h.t('de','Aktion'))
   * @returns {DesignHelper}
   */
  get h() {
    return new DesignHelper(this);
  }
}

;// ./src/bsi-property.js


/**
 * @param {string} property
 * @param {*} [fallback]
 * @returns {*}
 */
function bsiProperty(property, fallback) {
  /**
   * @type {BsiJsPropertyPlugin}
   */
  const plugin = __webpack_require__.g[Constant.BSI_CX_JS_PROPERTY_PLUGIN];

  if (typeof plugin === 'undefined') {
    throw new Error('bsi property plugin not found');
  }

  return plugin.getProperty(property, fallback);
}

;// ./export/browser.js






















































/**
 * A collection of various builder factory methods.
 *
 * @type {DesignFactory}
 */
const cx = new DesignFactory();



var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=browser.js.map