import AbstractConstant from '../abstract-constant';

export class EnterMode extends AbstractConstant {
}

/**
 * Wrap paragraphs with <code>&lt;p&gt;&lt;/p&gt;</code> on a line feed in the HTML editor.
 *
 * @see {@link HtmlEditorConfig#withEnterMode}
 * @type {EnterMode}
 */
export const P = new EnterMode('p');
/**
 * Add a <code>&lt;/br&gt;</code> on a line feed in the HTML editor.
 *
 * @see {@link HtmlEditorConfig#withEnterMode}
 * @type {EnterMode}
 */
export const BR = new EnterMode('br');
/**
 * Wrap paragraphs with <code>&lt;div&gt;&lt;/div&gt;</code> on a line feed in the HTML editor.
 *
 * @see {@link HtmlEditorConfig#withEnterMode}
 * @type {EnterMode}
 */
export const DIV = new EnterMode('div');
