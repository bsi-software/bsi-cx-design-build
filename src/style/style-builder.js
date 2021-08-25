export default class StyleBuilder {
  constructor() {
    this._identifier = undefined;
    this._label = undefined;
    this._cssClasses = [];
  }

  /**
   * @returns {string|undefined}
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * @returns {string|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @returns {[{label:string,cssClass:string}]}
   */
  get cssClasses() {
    return this._cssClasses;
  }

  /**
   * @param {string} identifier
   * @returns {StyleBuilder}
   */
  withIdentifier(identifier) {
    this._identifier = identifier;
    return this;
  }

  /**
   * @param {string} label
   * @returns {StyleBuilder}
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  /**
   * @param {string} label
   * @param {string} cssClass
   * @returns {StyleBuilder}
   */
  withCssClass(label, cssClass) {
    this._cssClasses.push({
      label: label,
      cssClass: cssClass
    });
    return this;
  }

  build() {
    let config = {};

    config[this.identifier] = {
      label: this.label,
      cssClasses: this.cssClasses
    };

    return config;
  }
}
