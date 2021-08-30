export default class JavaPropertyFileBuilder {
  constructor() {
    this._properties = [];
  }

  /**
   * @param {string} key
   * @param {string} value
   * @return {JavaPropertyFileBuilder}
   */
  append(key, value) {
    this._properties.push([key, value]);
    return this;
  }

  /**
   * @param {string} comment
   * @return {JavaPropertyFileBuilder}
   */
  appendComment(comment) {
    this._properties.push(comment);
    return this;
  }

  /**
   * @param {string} section
   * @return {JavaPropertyFileBuilder}
   */
  appendCommentSection(section) {
    let border = '#'.repeat(section.length + 4);
    let sectionComment = `# ${section} #`;

    this.appendComment(border);
    this.appendComment(sectionComment);
    this.appendComment(border);

    return this;
  }

  /**
   * @return {JavaPropertyFileBuilder}
   */
  appendBlank() {
    this._properties.push('');
    return this;
  }

  /**
   * @return {string}
   */
  build() {
    return this._properties
      .map(line => this._printLine(line))
      .join('\n');
  }

  /**
   * @param {string} line
   * @return {string}
   */
  _printLine(line) {
    if (line instanceof Array) {
      let [key, value] = line;
      return this._escapeKey(key) + '=' + this._escapeValue(value);
    } else {
      return line;
    }
  }

  /**
   * @param {string} key
   * @return {string}
   */
  _escapeKey(key) {
    return key;
  }

  /**
   * @param {string} value
   * @return {string}
   */
  _escapeValue(value) {
    return value;
  }
}
