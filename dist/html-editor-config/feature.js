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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Feature),
/* harmony export */   "BOLD": () => (/* binding */ BOLD),
/* harmony export */   "ITALIC": () => (/* binding */ ITALIC),
/* harmony export */   "UNDERLINE": () => (/* binding */ UNDERLINE),
/* harmony export */   "STRIKE_THROUGH": () => (/* binding */ STRIKE_THROUGH),
/* harmony export */   "SUBSCRIPT": () => (/* binding */ SUBSCRIPT),
/* harmony export */   "SUPERSCRIPT": () => (/* binding */ SUPERSCRIPT),
/* harmony export */   "FONT_SIZE": () => (/* binding */ FONT_SIZE),
/* harmony export */   "LINE_HEIGHT": () => (/* binding */ LINE_HEIGHT),
/* harmony export */   "TEXT_COLOR": () => (/* binding */ TEXT_COLOR),
/* harmony export */   "BACKGROUND_COLOR": () => (/* binding */ BACKGROUND_COLOR),
/* harmony export */   "ALIGN_LEFT": () => (/* binding */ ALIGN_LEFT),
/* harmony export */   "ALIGN_CENTER": () => (/* binding */ ALIGN_CENTER),
/* harmony export */   "ALIGN_RIGHT": () => (/* binding */ ALIGN_RIGHT),
/* harmony export */   "ALIGN_JUSTIFY": () => (/* binding */ ALIGN_JUSTIFY),
/* harmony export */   "FORMAT_OL": () => (/* binding */ FORMAT_OL),
/* harmony export */   "FORMAT_UL": () => (/* binding */ FORMAT_UL),
/* harmony export */   "OUTDENT": () => (/* binding */ OUTDENT),
/* harmony export */   "INDENT": () => (/* binding */ INDENT),
/* harmony export */   "PARAGRAPH_FORMAT": () => (/* binding */ PARAGRAPH_FORMAT),
/* harmony export */   "QUOTE": () => (/* binding */ QUOTE),
/* harmony export */   "SPECIAL_CHARACTERS": () => (/* binding */ SPECIAL_CHARACTERS),
/* harmony export */   "EMOTICONS": () => (/* binding */ EMOTICONS),
/* harmony export */   "INSERT_LINK": () => (/* binding */ INSERT_LINK),
/* harmony export */   "CLEAR_FORMATTING": () => (/* binding */ CLEAR_FORMATTING),
/* harmony export */   "UNDO": () => (/* binding */ UNDO),
/* harmony export */   "REDO": () => (/* binding */ REDO),
/* harmony export */   "FULLSCREEN": () => (/* binding */ FULLSCREEN),
/* harmony export */   "SELECT_ALL": () => (/* binding */ SELECT_ALL),
/* harmony export */   "HTML": () => (/* binding */ HTML),
/* harmony export */   "HELP": () => (/* binding */ HELP)
/* harmony export */ });
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

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=feature.js.map