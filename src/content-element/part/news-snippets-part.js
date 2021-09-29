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
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {NewsSnippetsPart}
   */
  clone(shallow) {
    return this._clone(new NewsSnippetsPart(), shallow);
  }
}
