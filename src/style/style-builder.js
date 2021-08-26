import DesignJsonProperty from '../design-json-property';

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
    let style = {};

    style[DesignJsonProperty.LABEL] = label;
    style[DesignJsonProperty.CSS_CLASS] = cssClass;

    this._cssClasses.push(style);

    return this;
  }

  build() {
    let config = {};
    let style = {};

    style[DesignJsonProperty.LABEL] = this.label;
    style[DesignJsonProperty.CSS_CLASSES] = this.cssClasses;

    config[this.identifier] = style;

    return config;
  }
}
