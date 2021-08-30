import AbstractConstant from '../abstract-constant';

export class Feature extends AbstractConstant {
}

/**
 * Bold formatting option.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const BOLD = new Feature('bold');
/**
 * Italic formatting option.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const ITALIC = new Feature('italic');
/**
 * Underline formatting option.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const UNDERLINE = new Feature('underline');
/**
 * Strike trough formatting option.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const STRIKE_THROUGH = new Feature('strikeThrough');
/**
 * Subscript formatting option.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const SUBSCRIPT = new Feature('subscript');
/**
 * Superscript formatting option.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const SUPERSCRIPT = new Feature('superscript');
/**
 * Set the font size in the editor.
 *
 * @see {@link HtmlEditorConfig#withFontSizes}
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const FONT_SIZE = new Feature('fontSize');
/**
 * Set the line height in the editor.
 *
 * @see {@link HtmlEditorConfig#withLineHeights}
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const LINE_HEIGHT = new Feature('lineHeight');
/**
 * Set the text color in the editor.
 *
 * @see {@link HtmlEditorConfig#withTextColors}
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const TEXT_COLOR = new Feature('textColor');
/**
 * Set the background color in the editor.
 *
 * @see {@link HtmlEditorConfig#withBackgroundColors}
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const BACKGROUND_COLOR = new Feature('backgroundColor');
/**
 * Align the text left.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const ALIGN_LEFT = new Feature('alignLeft');
/**
 * Align the text center.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const ALIGN_CENTER = new Feature('alignCenter');
/**
 * Align the text right.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const ALIGN_RIGHT = new Feature('alignRight');
/**
 * Align the text justify.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const ALIGN_JUSTIFY = new Feature('alignJustify');
/**
 * Create an ordered list.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const FORMAT_OL = new Feature('formatOL');
/**
 * Create an unordered list.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const FORMAT_UL = new Feature('formatUL');
/**
 * Outdent the text.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const OUTDENT = new Feature('outdent');
/**
 * Indent the text.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const INDENT = new Feature('indent');
/**
 * Enable paragraph format options.
 *
 * @see {@link HtmlEditorConfig#withFormats}
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const PARAGRAPH_FORMAT = new Feature('paragraphFormat');
/**
 * Quote the text.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const QUOTE = new Feature('quote');
/**
 * Insert special characters.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const SPECIAL_CHARACTERS = new Feature('specialCharacters');
/**
 * Insert emoticons.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const EMOTICONS = new Feature('emoticons');
/**
 * Insert a link.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const INSERT_LINK = new Feature('insertLink');
/**
 * Clear all applied styles and formatting.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const CLEAR_FORMATTING = new Feature('clearFormatting');
/**
 * Undo the previous action.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const UNDO = new Feature('undo');
/**
 * Redo the previous action.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const REDO = new Feature('redo');
/**
 * Show the editor in fullscreen mode.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const FULLSCREEN = new Feature('fullscreen');
/**
 * Select all text.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const SELECT_ALL = new Feature('selectAll');
/**
 * Edit the raw HTML code.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const HTML = new Feature('html');
/**
 * Show the editor help.
 *
 * @see {@link HtmlEditorConfig#withFeatures}
 * @type {Feature}
 */
export const HELP = new Feature('help');
