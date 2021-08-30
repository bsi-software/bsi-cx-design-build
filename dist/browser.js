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
  "AbstractConstant": () => (/* reexport */ AbstractConstant),
  "AbstractPart": () => (/* reexport */ AbstractPart),
  "BackgroundImagePart": () => (/* reexport */ BackgroundImagePart),
  "BuilderObjectNormalizer": () => (/* reexport */ BuilderObjectNormalizer),
  "ContentElement": () => (/* reexport */ ContentElement),
  "ContentElementGroup": () => (/* reexport */ ContentElementGroup),
  "CssClass": () => (/* reexport */ CssClass),
  "Design": () => (/* reexport */ Design),
  "DesignJsonProperty": () => (/* reexport */ DesignJsonProperty),
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
  "Include": () => (/* reexport */ Include),
  "IteratorPart": () => (/* reexport */ IteratorPart),
  "LinkPart": () => (/* reexport */ LinkPart),
  "Locale": () => (/* reexport */ locale_namespaceObject),
  "NLS": () => (/* reexport */ NLS),
  "NewsSnippetsPart": () => (/* reexport */ NewsSnippetsPart),
  "ObjectCloner": () => (/* reexport */ ObjectCloner),
  "PageInclude": () => (/* reexport */ PageInclude),
  "Part": () => (/* reexport */ part_namespaceObject),
  "PlainTextPart": () => (/* reexport */ PlainTextPart),
  "RawValue": () => (/* reexport */ RawValue),
  "SchemaVersion": () => (/* reexport */ schema_version_namespaceObject),
  "SocialFollowPart": () => (/* reexport */ SocialFollowPart),
  "SocialSharePart": () => (/* reexport */ SocialSharePart),
  "Style": () => (/* reexport */ Style),
  "TablePart": () => (/* reexport */ TablePart),
  "Translation": () => (/* reexport */ Translation),
  "UrlProviderPart": () => (/* reexport */ UrlProviderPart),
  "Version": () => (/* reexport */ version_namespaceObject),
  "VideoPart": () => (/* reexport */ VideoPart),
  "Website": () => (/* reexport */ Website)
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

// NAMESPACE OBJECT: ./src/design/locale.js
var locale_namespaceObject = {};
__webpack_require__.r(locale_namespaceObject);
__webpack_require__.d(locale_namespaceObject, {
  "DE": () => (DE),
  "DE_CH": () => (DE_CH),
  "DE_DE": () => (DE_DE),
  "EN": () => (EN),
  "EN_GB": () => (EN_GB),
  "EN_US": () => (EN_US),
  "FR": () => (FR),
  "FR_CH": () => (FR_CH),
  "IT": () => (IT),
  "IT_CH": () => (IT_CH),
  "Locale": () => (Locale),
  "WILDCARD": () => (WILDCARD)
});

// NAMESPACE OBJECT: ./src/design/schema-version.js
var schema_version_namespaceObject = {};
__webpack_require__.r(schema_version_namespaceObject);
__webpack_require__.d(schema_version_namespaceObject, {
  "SchemaVersion": () => (SchemaVersion),
  "V_1_0": () => (V_1_0),
  "V_22_0": () => (V_22_0)
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

// NAMESPACE OBJECT: ./src/html-editor-config/enter-mode.js
var enter_mode_namespaceObject = {};
__webpack_require__.r(enter_mode_namespaceObject);
__webpack_require__.d(enter_mode_namespaceObject, {
  "BR": () => (BR),
  "DIV": () => (DIV),
  "EnterMode": () => (EnterMode),
  "P": () => (P)
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

;// CONCATENATED MODULE: ./src/design-json-property.js
class DesignJsonProperty {
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
  static INCLUDES = 'includes';
  /**
   * @type {string}
   */
  static EDITABLE = 'editable';
  /**
   * @type {string}
   */
  static PAGE_INCLUDE = '__page__';
}

;// CONCATENATED MODULE: ./src/raw-value.js
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
   * @return {*}
   */
  get value() {
    return this._value;
  }
}

;// CONCATENATED MODULE: ./src/abstract-constant.js
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
   * @return {string}
   */
  get value() {
    return this._value;
  }

  /**
   * @return {string}
   */
  getValue() {
    return this.value;
  }
}

;// CONCATENATED MODULE: ./src/object-cloner.js



class ObjectCloner {
  /**
   * @template T
   * @param {T} source
   * @param {T} target
   * @param {boolean} shallow
   * @return {T}
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
   * @return {T}
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
   * @return {[]}
   * @private
   */
  _cloneArray(arr) {
    return arr.map(item => this._cloneValue(item));
  }

  /**
   * @param {{}} obj
   * @return {{}}
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
   * @return {T}
   */
  static clone(source, target, shallow) {
    let shallowOpt = shallow === undefined ? true : !!shallow;
    return new ObjectCloner()._clone(source, target, shallowOpt);
  }

  /**
   * @template T
   * @param {T} value
   * @return {T}
   */
  static cloneValue(value) {
    return new ObjectCloner()._cloneValue(value);
  }
}

;// CONCATENATED MODULE: ./src/abstract-builder.js



/**
 * @abstract
 */
class AbstractBuilder {
  /**
   * Build the configuration.
   *
   * @abstract
   * @return {{}}
   */
  build() {
    throw new Error('not implemented');
  }

  /**
   * @param {string} property
   * @param {{}} targetObj
   * @param {function} extractFunc
   * @param {boolean} [arrayToObject=false]
   * @protected
   */
  _applyPropertyIfDefined(property, targetObj, extractFunc, arrayToObject) {
    if (typeof this[property] === 'undefined') {
      return;
    }

    let value = this[property];
    let computedValue;

    switch (true) {
      case value instanceof RawValue:
        computedValue = value.value;
        break;
      case value instanceof Array:
        computedValue = value.map(item => extractFunc(item));
        break;
      default:
        computedValue = extractFunc(value);
        break;
    }

    if (!!arrayToObject && !(value instanceof RawValue)) {
      computedValue = this._applyArrayToObject(computedValue);
    }

    targetObj[property] = computedValue;
  }

  /**
   * @param {[{}]} arr
   * @private
   */
  _applyArrayToObject(arr) {
    let obj = {};
    for (let item of arr) {
      obj = {
        ...obj,
        ...item
      };
    }
    return obj;
  }

  /**
   * @template T
   * @param {T} newObj
   * @param {boolean|undefined} [shallow=true]
   * @return {T}
   * @protected
   */
  _clone(newObj, shallow) {
    return ObjectCloner.clone(this, newObj, shallow);
  }
}

;// CONCATENATED MODULE: ./src/builder-object-normalizer.js
class BuilderObjectNormalizer {
  /**
   * @param {*} obj
   * @return {*}
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
   * @param {[*]} arr
   * @return {[*]}
   * @private
   */
  _normalizeArray(arr) {
    return arr.map(value => this._normalize(value));
  }

  /**
   * @param {{}} obj
   * @return {{}}
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
   * This method normally operates on imported values from executed Java Script assets, see {@link _BsiCxWebpackPlugin#_loadAssets}.
   * Such values cannot be checked with instanceof.
   *
   * @param {*} obj
   * @return {*}
   */
  static normalize(obj) {
    return new BuilderObjectNormalizer()._normalize(obj);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/part.js


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
const HTML = new Part('html');
/**
 * @type {Part}
 * @since Studio 1.0
 */
const VIDEO = new Part('video');
/**
 * @type {Part}
 * @since Studio 1.0
 */
const IMAGE = new Part('image');
/**
 * @type {Part}
 * @since Studio 1.0
 */
const BACKGROUND_IMAGE = new Part('background-image');
/**
 * @type {Part}
 * @since Studio 1.0
 */
const TABLE = new Part('table');
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
const SOCIAL_FOLLOW = new Part('social-follow');
/**
 * @type {Part}
 * @since Studio 1.0
 */
const SOCIAL_SHARE = new Part('social-share');
/**
 * @type {Part}
 * @since 22.0
 */
const URL_PROVIDER = new Part('url-provider');

;// CONCATENATED MODULE: ./src/browser-utility.js



/**
 * @param {[string|number]} arr
 * @return {string}
 */
function scalarArrayToList(arr) {
  return arr.join(',');
}

/**
 * @template T
 * @param {T} v
 * @return {T}
 */
function identity(v) {
  return v;
}

/**
 * @param {AbstractConstant} constant
 * @return {string}
 */
function constantObjectValue(constant) {
  return constant.value;
}

/**
 * @param {AbstractBuilder} builder
 * @return {{}}
 */
function builderObjectValue(builder) {
  return builder.build();
}

/**
 * Very simple UUID v4 generator. Don't use the <code>crypto.getRandomValues()</code> or the uuid NPM package
 * (won't work in the browser context).
 *
 * @see {@link https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid#answer-2117523}
 * @return {string}
 */
function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

;// CONCATENATED MODULE: ./src/content-element/part/abstract-part.js





/**
 * @abstract
 */
class AbstractPart extends AbstractBuilder {
  /**
   * @type {Part}
   * @private
   */
  _partId = undefined;
  /**
   * @type {string|undefined}
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
   * @since Studio 1.0
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  build() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.PART_ID, config, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, identity);

    return config;
  }
}

;// CONCATENATED MODULE: ./src/design/locale.js


class Locale extends AbstractConstant {
}

/**
 * This defines the fallback locale to ues.
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

;// CONCATENATED MODULE: ./src/design/schema-version.js


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

;// CONCATENATED MODULE: ./src/content-element/icon.js


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
const icon_IMAGE = new Icon('image');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const icon_TABLE = new Icon('table');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const LIST = new Icon('list');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const icon_VIDEO = new Icon('video');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const MEGAPHONE = new Icon('megaphone');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const icon_SOCIAL_FOLLOW = new Icon('social-follow');
/**
 * @type {Icon}
 * @since Studio 1.0
 */
const icon_SOCIAL_SHARE = new Icon('social-share');
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

;// CONCATENATED MODULE: ./src/content-element/content-element.js








class ContentElement extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _elementId = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _label = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _description = undefined;
  /**
   * @type {{}|undefined}
   * @private
   */
  _file = undefined;
  /**
   * @type {Icon|undefined}
   * @private
   */
  _icon = undefined;
  /**
   * @type {boolean|undefined}
   * @private
   */
  _hidden = undefined;
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
   * @return {RawValue|Style[]|undefined}
   */
  get styleConfigs() {
    return this._styleConfigs;
  }

  /**
   * @return {RawValue|AbstractPart[]|undefined}
   */
  get parts() {
    return this._parts;
  }

  /**
   * @param {string} elementId
   * @return {ContentElement}
   * @since Studio 1.0
   */
  withElementId(elementId) {
    this._elementId = elementId;
    return this;
  }

  /**
   * @param {string} label
   * @return {ContentElement}
   * @since Studio 1.0
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  /**
   * @param {string} file
   * @return {ContentElement}
   * @since Studio 1.0
   */
  withFile(file) {
    this._file = file;
    return this;
  }

  /**
   * @param {Icon} icon
   * @return {ContentElement}
   * @since Studio 1.0
   */
  withIcon(icon) {
    this._icon = icon;
    return this;
  }

  /**
   * @param {boolean} hidden
   * @return {ContentElement}
   * @since BSI CX 1.3
   */
  withHidden(hidden) {
    this._hidden = hidden;
    return this;
  }

  /**
   * @param {...Style} styleConfigs
   * @return {ContentElement}
   * @since Studio 1.1
   */
  withStyleConfigs(...styleConfigs) {
    this._styleConfigs = styleConfigs;
    return this;
  }

  /**
   * @param {...string} styleConfigs
   * @return {ContentElement}
   * @since Studio 1.1
   */
  withRawStyleConfigs(...styleConfigs) {
    this._styleConfigs = new RawValue(styleConfigs);
    return this;
  }

  /**
   * @param {...AbstractPart} parts
   * @return {ContentElement}
   * @since Studio 1.0
   */
  withParts(...parts) {
    this._parts = parts;
    return this;
  }

  /**
   * @param {...{}} parts
   * @return {ContentElement}
   * @since Studio 1.0
   */
  withRawParts(...parts) {
    this._parts = new RawValue(parts);
    return this;
  }

  build() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.ELEMENT_ID, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.DESCRIPTION, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.ICON, config, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.HIDDEN, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.FILE, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.PARTS, config, builderObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.STYLE_CONFIGS, config, v => v.identifier);

    return config;
  }

  /**
   * @param {boolean} [shallow=true]
   * @return {ContentElement}
   */
  clone(shallow) {
    return this._clone(new ContentElement(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/content-element/content-element-group.js






/**
 * This is the builder class to specify content element groups.
 *
 * @example
 * module.exports = new ContentElementGroup()
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
   * @type {string|undefined}
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
   * @return {string|undefined}
   */
  get groupId() {
    return this._groupId;
  }

  /**
   * @return {string|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @return {boolean|undefined}
   */
  get hidden() {
    return this._hidden;
  }

  /**
   * @return {RawValue|[ContentElement]|undefined}
   */
  get contentElements() {
    return this._contentElements;
  }

  /**
   * Set an unique identifier for the content element group. If not set, a UUID v4 will be used.
   * It is recommended to set the group identifier.
   *
   * @param {string} groupId
   * @return {ContentElementGroup}
   */
  withGroupId(groupId) {
    this._groupId = groupId;
    return this;
  }

  /**
   * @param {string} label
   * @return {ContentElementGroup}
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  /**
   * @param {boolean} hidden
   * @return {ContentElementGroup}
   */
  withHidden(hidden) {
    this._hidden = hidden;
    return this;
  }

  /**
   * @param {...ContentElement} contentElements
   * @return {ContentElementGroup}
   */
  withContentElements(...contentElements) {
    this._contentElements = contentElements;
    return this;
  }

  /**
   * @param {...{}} contentElements
   * @return {ContentElementGroup}
   */
  withRawContentElements(...contentElements) {
    this._contentElements = new RawValue(contentElements);
    return this;
  }

  build() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.GROUP_ID, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.HIDDEN, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.CONTENT_ELEMENTS, config, builderObjectValue);

    return config;
  }

  /**
   * @param {boolean} [shallow=true]
   * @return {ContentElementGroup}
   */
  clone(shallow) {
    return this._clone(new ContentElementGroup(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/html-editor-config/enter-mode.js


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

;// CONCATENATED MODULE: ./src/html-editor-config/feature.js


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
const feature_HTML = new Feature('html');
/**
 * Show the editor help.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
const HELP = new Feature('help');

;// CONCATENATED MODULE: ./src/html-editor-config/format.js


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

;// CONCATENATED MODULE: ./src/html-editor-config/font-size-unit.js


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

;// CONCATENATED MODULE: ./src/html-editor-config/html-editor-config.js









/**
 * This is the builder class to specify a HTML editor configuration.
 *
 * @example
 * module.exports = new HtmlEditorConfig()
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
   * @return {string|undefined}
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * @return {RawValue|Feature[]|undefined}
   */
  get features() {
    return this._features;
  }

  /**
   * @return {string[]|undefined}
   */
  get textColors() {
    return this._textColors;
  }

  /**
   * @return {string[]|undefined}
   */
  get backgroundColors() {
    return this._backgroundColors;
  }

  /**
   * @return {RawValue|Format[]|undefined}
   */
  get formats() {
    return this._formats;
  }

  /**
   * @return {number[]|undefined}
   */
  get fontSizes() {
    return this._fontSizes;
  }

  /**
   * @return {RawValue|FontSizeUnit|undefined}
   */
  get fontSizeUnit() {
    return this._fontSizeUnit;
  }

  /**
   * @return {number|undefined}
   */
  get fontSizeDefault() {
    return this._fontSizeDefault;
  }

  /**
   * @return {number[]|undefined}
   */
  get lineHeights() {
    return this._lineHeights;
  }

  /**
   * @return {RawValue|EnterMode|undefined}
   */
  get enterMode() {
    return this._enterMode;
  }

  /**
   * Set an unique identifier for the editor configuration. If not set, a UUID v4 will be used.
   * It is recommended to set the identifier.
   *
   * @param {string} identifier - The unique identifier for this editor config.
   * @return {HtmlEditorConfig}
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
   * @return {HtmlEditorConfig}
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
   * @return {HtmlEditorConfig}
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
   * @return {HtmlEditorConfig}
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
   * @return {HtmlEditorConfig}
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
   * @return {HtmlEditorConfig}
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
   * @return {HtmlEditorConfig}
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
   * @return {HtmlEditorConfig}
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
   * @return {HtmlEditorConfig}
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
   * @return {HtmlEditorConfig}
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
   * @return {HtmlEditorConfig}
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
   * @return {HtmlEditorConfig}
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
   * @return {HtmlEditorConfig}
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
   * @return {HtmlEditorConfig}
   */
  withRawEnterMode(enterMode) {
    this._enterMode = new RawValue(enterMode);
    return this;
  }

  build() {
    let editorConfig = {};
    let config = {};

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
   * @param {boolean} [shallow=true]
   * @return {HtmlEditorConfig}
   */
  clone(shallow) {
    return this._clone(new HtmlEditorConfig(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/nls/translation.js



class Translation extends AbstractBuilder {
  constructor() {
    super();
    /**
     * @type {Locale|undefined}
     * @private
     */
    this._locale = undefined;
    /**
     * @type {string|undefined}
     * @private
     */
    this._translation = undefined;
  }

  /**
   * @return {Locale|undefined}
   */
  get locale() {
    return this._locale;
  }

  /**
   * @return {string|undefined}
   */
  get translation() {
    return this._translation;
  }

  /**
   * @param {Locale} locale
   * @return {Translation}
   */
  withLocale(locale) {
    this._locale = locale;
    return this;
  }

  /**
   * @param {string} translation
   * @return {Translation}
   */
  withTranslation(translation) {
    this._translation = translation;
    return this;
  }

  build() {
    let config = {};

    config[this.locale?.value] = this.translation;

    return config;
  }

  /**
   * @param {boolean} [shallow=true]
   * @return {Translation}
   */
  clone(shallow) {
    return this._clone(new Translation(), shallow);
  }

  /**
   * @param {Locale} locale
   * @param {string} translation
   * @return {Translation}
   */
  static create(locale, translation) {
    return new Translation()
      .withLocale(locale)
      .withTranslation(translation);
  }

  /**
   * @param {string} translation
   * @return {Translation}
   */
  static wildcard(translation) {
    return new Translation()
      .withLocale(WILDCARD)
      .withTranslation(translation);
  }
}

;// CONCATENATED MODULE: ./src/nls/nls.js



class NLS extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _identifier = undefined;
  /**
   * @type {[Translation]|undefined}
   * @private
   */
  _translations = undefined;

  /**
   * @return {string|undefined}
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * @return {[Translation]|undefined}
   */
  get translations() {
    return this._translations;
  }

  /**
   * @param {string} identifier
   * @return {NLS}
   */
  withIdentifier(identifier) {
    this._identifier = identifier;
    return this;
  }

  /**
   * @param {...Translation} translations
   * @return {NLS}
   */
  withTranslations(...translations) {
    this._translations = translations;
    return this;
  }

  build() {
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
   * @param {string} identifier
   * @param {...Translation}translations
   * @return {NLS}
   */
  static create(identifier, ...translations) {
    return new NLS()
      .withIdentifier(identifier)
      .withTranslations(...translations);
  }

  /**
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
   * @param {boolean} [shallow=true]
   * @return {NLS}
   */
  clone(shallow) {
    return this._clone(new NLS(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/design/design.js












/**
 * This is the builder class to specify a design.
 *
 * @example
 * module.exports = new Design()
 *   .withSchemaVersion(SchemaVersion.V_22_0)
 *   .withTitle('My BSI CX Design')
 *   .withAuthor('John Doe')
 *   .withDate('18.8.2021')
 *   .withPreviewImage(require('./preview.png'))
 *   .withRawDefaultLocale('en')
 *   withHtmlEditorConfigs(
 *     require('./configs/html-editor/full.js'),
 *     require('./configs/html-editor/minimal.js'))
 *   .withContentElementGroups(
 *     new ContentElementGroup()
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
   * @type {RawValue|[Style]|undefined}
   * @private
   */
  _styleConfigs = undefined;
  /**
   * @type {RawValue|[HtmlEditorConfig]|undefined}
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
   * @return {RawValue|SchemaVersion|undefined}
   */
  get schemaVersion() {
    return this._schemaVersion;
  }

  /**
   * @return {string|undefined}
   */
  get title() {
    return this._title;
  }

  /**
   * @return {string|undefined}
   */
  get author() {
    return this._author;
  }

  /**
   * @return {string|undefined}
   */
  get date() {
    return this._date;
  }

  /**
   * @return {{}|undefined}
   */
  get previewImage() {
    return this._previewImage;
  }

  /**
   * @return {RawValue|Locale|undefined}
   */
  get defaultLocale() {
    return this._defaultLocale;
  }

  /**
   * @return {RawValue|[Locale]|undefined}
   */
  get locales() {
    return this._locales;
  }

  /**
   * @return {RawValue|ContentElementGroup[]|undefined}
   */
  get contentElementGroups() {
    return this._contentElementGroups;
  }

  /**
   * @return {RawValue|[Style]|undefined}
   */
  get styleConfigs() {
    return this._styleConfigs;
  }

  /**
   * @return {RawValue|[HtmlEditorConfig]|undefined}
   */
  get htmlEditorConfigs() {
    return this._htmlEditorConfigs;
  }

  /**
   * @return {RawValue|Website|undefined}
   */
  get website() {
    return this._website;
  }

  /**
   * @return {RawValue|NLS[]|undefined}
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
   * @return {Design}
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
   * @return {Design}
   */
  withRawSchemaVersion(schemaVersion) {
    this._schemaVersion = new RawValue(schemaVersion);
    return this;
  }

  /**
   * The title for your design.
   *
   * @param {string} title - The design title.
   * @return {Design}
   */
  withTitle(title) {
    this._title = title;
    return this;
  }

  /**
   * The author of your design.
   *
   * @param {string} author - The design author.
   * @return {Design}
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
   * @return {Design}
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
   * @return {Design}
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
   * @return {Design}
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
   * @return {Design}
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
   * @return {Design}
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
   * @return {Design}
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
   * @return {Design}
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
   * @return {Design}
   */
  withRawContentElementGroups(...contentElementGroups) {
    this._contentElementGroups = new RawValue(contentElementGroups);
    return this;
  }

  /**
   * The style configurations of your design.
   *
   * @see {@link withRawStyleConfigs} to set a raw value
   * @param {...Style} styleConfigs - The style configurations.
   * @return {Design}
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
   * @see {@link withStyleConfigs}
   * @param {{}} styleConfigs - The <code>styleConfigs</code> object.
   * @return {Design}
   */
  withRawStyleConfigs(styleConfigs) {
    this._styleConfigs = new RawValue(styleConfigs);
    return this;
  }

  /**
   * The HTML editor configurations of your design.
   *
   * @see {@link withRawHtmlEditorConfigs} to set a raw value
   * @param {...HtmlEditorConfig} htmlEditorConfigs
   * @return {Design}
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
   * @return {Design}
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
   * @return {Design}
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
   * @return {Design}
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
   * @return {Design}
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
   * @return {Design}
   */
  withRawNLS(nls) {
    this._nls = new RawValue(nls);
    return this;
  }

  /**
   * @inheritDoc
   */
  build() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.SCHEMA_VERSION, config, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.TITLE, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.AUTHOR, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.DATE, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.PREVIEW_IMAGE, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.DEFAULT_LOCALE, config, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.LOCALES, config, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.CONTENT_ELEMENT_GROUPS, config, builderObjectValue);
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
   * @return {Design}
   */
  clone(shallow) {
    return this._clone(new Design(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/design-type.js


class DesignType extends AbstractConstant {
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
   * @return {DesignType[]}
   */
  get allowedTypes() {
    return this._allowedTypes;
  }

  /**
   * @return {boolean}
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

;// CONCATENATED MODULE: ./src/style/style.js






/**
 * @since Studio 1.1
 */
class Style extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _identifier = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _label = undefined;
  /**
   * @type {RawValue|CssClass[]|undefined}
   * @private
   */
  _cssClasses = undefined;

  /**
   * @return {string|undefined}
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * @return {string|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @return {RawValue|[CssClass]|undefined}
   */
  get cssClasses() {
    return this._cssClasses;
  }

  /**
   * @param {string} identifier
   * @return {Style}
   */
  withIdentifier(identifier) {
    this._identifier = identifier;
    return this;
  }

  /**
   * @param {string} label
   * @return {Style}
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  /**
   * @param {...CssClass} cssClasses
   * @return {Style}
   */
  withCssClasses(...cssClasses) {
    this._cssClasses = cssClasses;
    return this;
  }

  /**
   * @param {...{}} cssClasses
   * @return {Style}
   */
  withRawCssClasses(...cssClasses) {
    this._cssClasses = new RawValue(cssClasses);
    return this;
  }

  build() {
    let config = {};
    let style = {};

    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, style, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.CSS_CLASSES, style, builderObjectValue);

    config[this.identifier] = style;

    return config;
  }

  /**
   * @param {boolean} [shallow=true]
   * @return {Style}
   */
  clone(shallow) {
    return this._clone(new Style(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/style/css-class.js




class CssClass extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _cssClass = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _label = undefined;

  /**
   * @return {string|undefined}
   */
  get cssClass() {
    return this._cssClass;
  }

  /**
   * @return {string|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @param {string} cssClass
   * @return {CssClass}
   */
  withCssClass(cssClass) {
    this._cssClass = cssClass;
    return this;
  }

  /**
   * @param {string} label
   * @return {CssClass}
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  build() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.CSS_CLASS, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, identity);

    return config;
  }

  /**
   * @param {boolean} [shallow=true]
   * @return {CssClass}
   */
  clone(shallow) {
    return this._clone(new CssClass(), shallow);
  }

  /**
   * @param {string} cssClass
   * @param {string} label
   * @return {CssClass}
   */
  static create(cssClass, label) {
    return new CssClass()
      .withCssClass(cssClass)
      .withLabel(label);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/plain-text-part.js



/**
 * @since Studio 1.0
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

  /**
   * @param {boolean} [shallow=true]
   * @return {PlainTextPart}
   */
  clone(shallow) {
    return this._clone(new PlainTextPart(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/formatted-text-part.js





/**
 * @since Studio 1.0
 */
class FormattedTextPart extends AbstractPart {
  /**
   * @type {HtmlEditorConfig|undefined}
   * @private
   */
  _htmlEditorConfig = undefined;

  constructor() {
    super(FORMATTED_TEXT);
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

  /**
   * @param {boolean} [shallow=true]
   * @return {FormattedTextPart}
   */
  clone(shallow) {
    return this._clone(new FormattedTextPart(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/html-part.js



/**
 * @since Studio 1.0
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

  /**
   * @param {boolean} [shallow=true]
   * @return {HtmlPart}
   */
  clone(shallow) {
    return this._clone(new HtmlPart(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/video-part.js



/**
 * @since Studio 1.0
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

  /**
   * @param {boolean} [shallow=true]
   * @return {VideoPart}
   */
  clone(shallow) {
    return this._clone(new VideoPart(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/image-part.js



/**
 * @since Studio 1.0
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

  /**
   * @param {boolean} [shallow=true]
   * @return {ImagePart}
   */
  clone(shallow) {
    return this._clone(new ImagePart(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/background-image-part.js



/**
 * @since Studio 1.0
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

  /**
   * @param {boolean} [shallow=true]
   * @return {BackgroundImagePart}
   */
  clone(shallow) {
    return this._clone(new BackgroundImagePart(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/table-part.js



/**
 * @since Studio 1.0
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

  /**
   * @param {boolean} [shallow=true]
   * @return {TablePart}
   */
  clone(shallow) {
    return this._clone(new TablePart(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/iterator-part.js



/**
 * @since Studio 1.0
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

  /**
   * @param {boolean} [shallow=true]
   * @return {IteratorPart}
   */
  clone(shallow) {
    return this._clone(new IteratorPart(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/news-snippets-part.js



/**
 * @since Studio 1.0
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

  /**
   * @param {boolean} [shallow=true]
   * @return {NewsSnippetsPart}
   */
  clone(shallow) {
    return this._clone(new NewsSnippetsPart(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/form-part.js



/**
 * @since Studio 1.0
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

  /**
   * @param {boolean} [shallow=true]
   * @return {FormPart}
   */
  clone(shallow) {
    return this._clone(new FormPart(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/form-field-part.js



/**
 * @since Studio 1.0
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

  /**
   * @param {boolean} [shallow=true]
   * @return {FormFieldPart}
   */
  clone(shallow) {
    return this._clone(new FormFieldPart(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/form-checkbox-part.js



/**
 * @since Studio 1.0
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

  /**
   * @param {boolean} [shallow=true]
   * @return {FormCheckboxPart}
   */
  clone(shallow) {
    return this._clone(new FormCheckboxPart(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/form-textarea-part.js



/**
 * @since Studio 1.0
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

  /**
   * @param {boolean} [shallow=true]
   * @return {FormTextareaPart}
   */
  clone(shallow) {
    return this._clone(new FormTextareaPart(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/form-select-part.js



/**
 * @since Studio 1.0
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

  /**
   * @param {boolean} [shallow=true]
   * @return {FormSelectPart}
   */
  clone(shallow) {
    return this._clone(new FormSelectPart(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/form-radio-part.js



/**
 * @since Studio 1.0
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

  /**
   * @param {boolean} [shallow=true]
   * @return {FormRadioPart}
   */
  clone(shallow) {
    return this._clone(new FormRadioPart(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/link-part.js



/**
 * @since Studio 1.0
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

  /**
   * @param {boolean} [shallow=true]
   * @return {LinkPart}
   */
  clone(shallow) {
    return this._clone(new LinkPart(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/social-follow-part.js



/**
 * @since Studio 1.0
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

  /**
   * @param {boolean} [shallow=true]
   * @return {SocialFollowPart}
   */
  clone(shallow) {
    return this._clone(new SocialFollowPart(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/content-element/part/social-share-part.js



/**
 * @since Studio 1.0
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

  /**
   * @param {boolean} [shallow=true]
   * @return {SocialSharePart}
   */
  clone(shallow) {
    return this._clone(new SocialSharePart(), shallow);
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

  /**
   * @param {boolean} [shallow=true]
   * @return {UrlProviderPart}
   */
  clone(shallow) {
    return this._clone(new UrlProviderPart(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/website/website.js






/**
 * @since BSI CX 1.3
 */
class Website extends AbstractBuilder {
  /**
   * @type {number|undefined}
   * @private
   */
  _maxNavigationLevel = undefined;
  /**
   * @type {RawValue|AbstractInclude[]|undefined}
   * @private
   */
  _includes = undefined;

  /**
   * @return {number|undefined}
   */
  get maxNavigationLevel() {
    return this._maxNavigationLevel;
  }

  /**
   * @return {RawValue|AbstractInclude[]|undefined}
   */
  get includes() {
    return this._includes;
  }

  /**
   * @param {number} maxNavigationLevel
   * @return {Website}
   */
  withMaxNavigationLevel(maxNavigationLevel) {
    this._maxNavigationLevel = maxNavigationLevel;
    return this;
  }

  /**
   * @param {...AbstractInclude} includes
   * @return {Website}
   */
  withIncludes(...includes) {
    this._includes = includes;
    return this;
  }

  /**
   * @param {{}} includes
   * @return {Website}
   */
  withRawIncludes(includes) {
    this._includes = new RawValue(includes);
    return this;
  }

  build() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.MAX_NAVIGATION_LEVEL, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.INCLUDES, config, builderObjectValue, true);

    return config;
  }

  /**
   * @param {boolean} [shallow=true]
   * @return {Website}
   */
  clone(shallow) {
    return this._clone(new Website(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/website/abstract-include.js




/**
 * @abstract
 * @since BSI CX 1.3
 */
class AbstractInclude extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @protected
   */
  _identifier = undefined;
  /**
   * @type {boolean|undefined}
   * @protected
   */
  _editable = undefined;
  /**
   * @type {{}|undefined}
   * @protected
   */
  _file = undefined;
  /**
   * @type {string|undefined}
   * @protected
   */
  _name = undefined;

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
   * @return {string|undefined}
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * @return {boolean|undefined}
   */
  get editable() {
    return this._editable;
  }

  /**
   * @return {{}|undefined}
   */
  get file() {
    return this._file;
  }

  /**
   * @return {string|undefined}
   */
  get name() {
    return this._name;
  }

  /**
   * @param {string} identifier
   * @return {AbstractInclude}
   */
  withIdentifier(identifier) {
    this._identifier = identifier;
    return this;
  }

  /**
   * @param {boolean} editable
   * @return {AbstractInclude}
   */
  withEditable(editable) {
    this._editable = editable;
    return this;
  }

  /**
   * @param {{}} file
   * @return {AbstractInclude}
   */
  withFile(file) {
    this._file = file;
    return this;
  }

  /**
   * @param {string} name
   * @return {AbstractInclude}
   */
  withName(name) {
    this._name = name;
    return this;
  }

  build() {
    let config = {};
    let include = {};

    config[this.identifier] = include;

    this._applyPropertyIfDefined(DesignJsonProperty.EDITABLE, include, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.FILE, include, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.NAME, include, identity);

    return config;
  }
}

;// CONCATENATED MODULE: ./src/website/page-include.js



/**
 * @since BSI CX 1.3
 */
class PageInclude extends AbstractInclude {
  constructor() {
    super(DesignJsonProperty.PAGE_INCLUDE);
  }

  /**
   * @param {boolean} editable
   * @return {PageInclude}
   */
  withEditable(editable) {
    return /** @type {PageInclude} */ super.withEditable(editable);
  }

  /**
   * @param {{}} file
   * @return {PageInclude}
   */
  withFile(file) {
    return /** @type {PageInclude} */ super.withFile(file);
  }

  /**
   * @param {string} name
   * @return {PageInclude}
   */
  withName(name) {
    return /** @type {PageInclude} */ super.withName(name);
  }

  /**
   * @param {boolean} [shallow=true]
   * @return {PageInclude}
   */
  clone(shallow) {
    return this._clone(new PageInclude(), shallow);
  }
}

;// CONCATENATED MODULE: ./src/website/include.js


/**
 * @since BSI CX 1.3
 */
class Include extends AbstractInclude {
  constructor() {
    super(undefined);
  }

  /**
   * @param {string} identifier
   * @return {Include}
   */
  withIdentifier(identifier) {
    this._identifier = identifier;
    return this;
  }

  /**
   * @param {boolean} editable
   * @return {Include}
   */
  withEditable(editable) {
    return /** @type {Include} */ super.withEditable(editable);
  }

  /**
   * @param {{}} file
   * @return {Include}
   */
  withFile(file) {
    return /** @type {Include} */ super.withFile(file);
  }

  /**
   * @param {string} name
   * @return {Include}
   */
  withName(name) {
    return /** @type {Include} */ super.withName(name);
  }

  /**
   * @param {boolean} [shallow=true]
   * @return {Include}
   */
  clone(shallow) {
    return this._clone(new Include(), shallow);
  }
}

;// CONCATENATED MODULE: ./export/browser.js


















































var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=browser.js.map