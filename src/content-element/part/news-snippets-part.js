import {NEWS_SNIPPETS} from './part';
import AbstractPart from './abstract-part';

/**
 * @since 1.0
 */
export default class NewsSnippetsPart extends AbstractPart {
  constructor() {
    super(NEWS_SNIPPETS);
  }

  /**
   * @param {String} label
   * @return {NewsSnippetsPart}
   */
  withLabel(label) {
    return /** @type {NewsSnippetsPart} */ super.withLabel(label);
  }
}
