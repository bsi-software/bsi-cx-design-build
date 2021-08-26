export class Feature {
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
export const BOLD = new Feature('bold');
/**
 * @type {Feature}
 */
export const ITALIC = new Feature('italic');
/**
 * @type {Feature}
 */
export const UNDERLINE = new Feature('underline');
/**
 * @type {Feature}
 */
export const STRIKE_THROUGH = new Feature('strikeThrough');
/**
 * @type {Feature}
 */
export const SUBSCRIPT = new Feature('subscript');
/**
 * @type {Feature}
 */
export const SUPERSCRIPT = new Feature('superscript');
/**
 * @type {Feature}
 */
export const FONT_SIZE = new Feature('fontSize');
/**
 * @type {Feature}
 */
export const LINE_HEIGHT = new Feature('lineHeight');
/**
 * @type {Feature}
 */
export const TEXT_COLOR = new Feature('textColor');
/**
 * @type {Feature}
 */
export const BACKGROUND_COLOR = new Feature('backgroundColor');
/**
 * @type {Feature}
 */
export const ALIGN_LEFT = new Feature('alignLeft');
/**
 * @type {Feature}
 */
export const ALIGN_CENTER = new Feature('alignCenter');
/**
 * @type {Feature}
 */
export const ALIGN_RIGHT = new Feature('alignRight');
/**
 * @type {Feature}
 */
export const ALIGN_JUSTIFY = new Feature('alignJustify');
/**
 * @type {Feature}
 */
export const FORMAT_OL = new Feature('formatOL');
/**
 * @type {Feature}
 */
export const FORMAT_UL = new Feature('formatUL');
/**
 * @type {Feature}
 */
export const OUTDENT = new Feature('outdent');
/**
 * @type {Feature}
 */
export const INDENT = new Feature('indent');
/**
 * @type {Feature}
 */
export const PARAGRAPH_FORMAT = new Feature('paragraphFormat');
/**
 * @type {Feature}
 */
export const QUOTE = new Feature('quote');
/**
 * @type {Feature}
 */
export const SPECIAL_CHARACTERS = new Feature('specialCharacters');
/**
 * @type {Feature}
 */
export const EMOTICONS = new Feature('emoticons');
/**
 * @type {Feature}
 */
export const INSERT_LINK = new Feature('insertLink');
/**
 * @type {Feature}
 */
export const CLEAR_FORMATTING = new Feature('clearFormatting');
/**
 * @type {Feature}
 */
export const UNDO = new Feature('undo');
/**
 * @type {Feature}
 */
export const REDO = new Feature('redo');
/**
 * @type {Feature}
 */
export const FULLSCREEN = new Feature('fullscreen');
/**
 * @type {Feature}
 */
export const SELECT_ALL = new Feature('selectAll');
/**
 * @type {Feature}
 */
export const HTML = new Feature('html');
/**
 * @type {Feature}
 */
export const HELP = new Feature('help');
