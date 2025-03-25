import AbstractConstant from '../abstract-constant';

/** @typedef {import('./design').default} Design */

/**
 * Class to define a WebsiteContentType.
 */
export class WebsiteContentType extends AbstractConstant {
}

/**
 * @see {@link Design#withDefaultWebsiteContentType}
 * @see {@link Design#withWebsiteContentTypes}
 * @type {WebsiteContentType}
 */
export const BLOG = new WebsiteContentType('blog');

/**
 * @see {@link Design#withDefaultWebsiteContentType}
 * @see {@link Design#withWebsiteContentTypes}
 * @type {WebsiteContentType}
 */
export const POP_UP = new WebsiteContentType('pop-up');

/**
 * @see {@link Design#withDefaultWebsiteContentType}
 * @see {@link Design#withWebsiteContentTypes}
 * @type {WebsiteContentType}
 */
export const PRESS_RELEASE = new WebsiteContentType('press-release');

/**
 * @see {@link Design#withDefaultWebsiteContentType}
 * @see {@link Design#withWebsiteContentTypes}
 * @type {WebsiteContentType}
 */
export const EVENT = new WebsiteContentType('event');
