import AbstractConstant from '../abstract-constant';

export class Format extends AbstractConstant {
}

/**
 * Allow <code>&lt;p&gt;</code> tags.
 *
 * @see {@link HtmlEditorConfig#withFormats}
 * @type {Format}
 */
export const P = new Format('p');
/**
 * Allow <code>&lt;h1&gt;</code> tags.
 *
 * @see {@link HtmlEditorConfig#withFormats}
 * @type {Format}
 */
export const H1 = new Format('h1');
/**
 * Allow <code>&lt;h2&gt;</code> tags.
 *
 * @see {@link HtmlEditorConfig#withFormats}
 * @type {Format}
 */
export const H2 = new Format('h2');
/**
 * Allow <code>&lt;h3&gt;</code> tags.
 *
 * @see {@link HtmlEditorConfig#withFormats}
 * @type {Format}
 */
export const H3 = new Format('h3');
/**
 * Allow <code>&lt;h4&gt;</code> tags.
 *
 * @see {@link HtmlEditorConfig#withFormats}
 * @type {Format}
 */
export const H4 = new Format('h4');
/**
 * Allow <code>&lt;h5&gt;</code> tags.
 *
 * @see {@link HtmlEditorConfig#withFormats}
 * @type {Format}
 */
export const H5 = new Format('h5');
/**
 * Allow <code>&lt;h6&gt;</code> tags.
 *
 * @see {@link HtmlEditorConfig#withFormats}
 * @type {Format}
 */
export const H6 = new Format('h6');
/**
 * Allow <code>&lt;pre&gt;</code> tags.
 *
 * @see {@link HtmlEditorConfig#withFormats}
 * @type {Format}
 */
export const PRE = new Format('pre');
