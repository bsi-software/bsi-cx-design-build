import AbstractConstant from '../abstract-constant';

/** @typedef {import('./html-editor-config').default} HtmlEditorConfig */

export class FontSizeUnit extends AbstractConstant {
}

/**
 * Font sizes as pixel values.
 *
 * @see {@link HtmlEditorConfig#withFontSizeUnit}
 * @type {FontSizeUnit}
 */
export const PX = new FontSizeUnit('px');
/**
 * Font sizes as em values.
 *
 * @see {@link HtmlEditorConfig#withFontSizeUnit}
 * @type {FontSizeUnit}
 */
export const EM = new FontSizeUnit('em');
/**
 * Font sizes as rem values.
 *
 * @see {@link HtmlEditorConfig#withFontSizeUnit}
 * @type {FontSizeUnit}
 */
export const REM = new FontSizeUnit('rem');
/**
 * Font sizes as pt values.
 *
 * @see {@link HtmlEditorConfig#withFontSizeUnit}
 * @type {FontSizeUnit}
 */
export const PT = new FontSizeUnit('pt');
/**
 * Font sizes as cm values.
 *
 * @see {@link HtmlEditorConfig#withFontSizeUnit}
 * @type {FontSizeUnit}
 */
export const CM = new FontSizeUnit('cm');
/**
 * Font sizes as mm values.
 *
 * @see {@link HtmlEditorConfig#withFontSizeUnit}
 * @type {FontSizeUnit}
 */
export const MM = new FontSizeUnit('mm');
