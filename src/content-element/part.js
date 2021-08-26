import AbstractConstant from '../abstract-constant';

export class Part extends AbstractConstant {
}

/**
 * @type {Part}
 * @since 1.0
 */
export const PLAIN_TEXT = new Part('plain-text');
/**
 * @type {Part}
 * @since 1.0
 */
export const FORMATTED_TEXT = new Part('formatted-text');
/**
 * @type {Part}
 * @since 1.0
 */
export const HTML = new Part('html');
/**
 * @type {Part}
 * @since 1.0
 */
export const VIDEO = new Part('video');
/**
 * @type {Part}
 * @since 1.0
 */
export const IMAGE = new Part('image');
/**
 * @type {Part}
 * @since 1.0
 */
export const BACKGROUND_IMAGE = new Part('background-image');
/**
 * @type {Part}
 * @since 1.0
 */
export const TABLE = new Part('table');
/**
 * @type {Part}
 * @since 1.0
 */
export const ITERATOR = new Part('iterator');
/**
 * @type {Part}
 * @since 1.0
 */
export const NEWS_SNIPPETS = new Part('news-snippets');
/**
 * @type {Part}
 * @since 1.0
 */
export const FORM = new Part('form');
/**
 * @type {Part}
 * @since 1.0
 */
export const FORM_FIELD = new Part('form-field');
/**
 * @type {Part}
 * @since 1.0
 */
export const FORM_CHECKBOX = new Part('form-checkbox');
/**
 * @type {Part}
 * @since 1.0
 */
export const FORM_TEXTAREA = new Part('form-textarea');
/**
 * @type {Part}
 * @since 1.0
 */
export const FORM_SELECT = new Part('form-select');
/**
 * @type {Part}
 * @since 1.0
 */
export const FORM_RADIO = new Part('form-radio');
/**
 * @type {Part}
 * @since 1.0
 */
export const LINK = new Part('link');
/**
 * @type {Part}
 * @since 1.0
 */
export const SOCIAL_FOLLOW = new Part('social-follow');
/**
 * @type {Part}
 * @since 1.0
 */
export const SOCIAL_SHARE = new Part('social-share');
/**
 * @type {Part}
 * @since 22.0
 */
export const URL_PROVIDER = new Part('url-provider');
