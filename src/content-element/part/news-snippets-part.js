import {NEWS_SNIPPETS} from './part';
import AbstractPart from './abstract-part';

/**
 * @since 1.0
 */
export default class NewsSnippetsPart extends AbstractPart {
  constructor() {
    super(NEWS_SNIPPETS);
  }
}
