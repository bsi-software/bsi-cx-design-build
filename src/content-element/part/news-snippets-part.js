import {NEWS_SNIPPETS} from './part';
import AbstractPart from './abstract-part';

/**
 * @since Studio 1.0
 */
export default class NewsSnippetsPart extends AbstractPart {
  constructor() {
    super(NEWS_SNIPPETS);
  }

  /**
   * @inheritDoc
   * @returns {NewsSnippetsPart}
   */
  withLabel(label) {
    return /** @type {NewsSnippetsPart} */ super.withLabel(label);
  }

  /**
   * @param {boolean} [shallow=true]
   * @returns {NewsSnippetsPart}
   */
  clone(shallow) {
    return this._clone(new NewsSnippetsPart(), shallow);
  }
}
