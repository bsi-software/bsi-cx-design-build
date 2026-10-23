import sass from 'sass';
import Color from 'less/lib/less/tree/color.js';
import colors from 'less/lib/less/data/colors.js';

import AbstractCssProperty from './abstract-css-property';

export default class CssColor extends AbstractCssProperty {
  /**
   * @type {RegExp}
   */
  static RGBA = /rgb[a]?\((\d+)[\s\/,]*(\d+)[\s\/,]*(\d+)([\s\/,]+[\d\.]+)?\)/;
  /**
   * @type {RegExp}
   */
  static HEX = /^#[0-9a-f]+$/i;
  /**
   * @type {{}}
   */
  static COLORS = Object.assign({}, colors, { transparent: '#00000000' });

  /**
   * @type {number}
   * @private
   */
  _red = 0;
  /**
   * @type {number}
   * @private
   */
  _green = 0;
  /**
   * @type {number}
   * @private
   */
  _blue = 0;
  /**
   * @type {number}
   * @private
   */
  _alpha = 255;

  /**
   * @param {number} red
   * @param {number} green
   * @param {number} blue
   * @param {number} alpha
   */
  constructor(red, green, blue, alpha) {
    super();
    /**
     * @type {number}
     * @private
     */
    this._red = this._assertColor(red);
    /**
     * @type {number}
     * @private
     */
    this._green = this._assertColor(green);
    /**
     * @type {number}
     * @private
     */
    this._blue = this._assertColor(blue);
    /**
     * @type {number}
     * @private
     */
    this._alpha = this._assertColor(Math.round(alpha));
  }

  /**
   * @returns {number}
   */
  get red() {
    return this._red;
  }

  /**
   * @returns {number}
   */
  get green() {
    return this._green;
  }

  /**
   * @returns {number}
   */
  get blue() {
    return this._blue;
  }

  /**
   * @returns {number}
   */
  get alpha() {
    return this._alpha;
  }

  /**
   * @returns {string}
   */
  get hex() {
    return this._toHex();
  }

  /**
   * @returns {string}
   */
  get rgb() {
    return this._toRgb();
  }

  /**
   * @returns {string}
   */
  get rgba() {
    return this._toRgba();
  }

  /**
   * @returns {Color}
   */
  getLessNode() {
    let rgb = [this.red, this.green, this.blue];
    let alpha = this.alpha / 255;

    // noinspection JSValidateTypes
    return new Color(rgb, alpha);
  }

  /**
   * @returns {*}
   */
  getSassObject() {
    // noinspection JSUnresolvedVariable
    return new sass.SassColor({ red: this.red, green: this.green, blue: this.blue, alpha: this.alpha / 255 });
  }

  toString() {
    return this.hex;
  }

  /**
   * @param {number} color
   * @returns {number}
   * @private
   */
  _assertColor(color) {
    if (Number.isNaN(color) || color < 0 || color > 255) {
      throw new Error('Color value must be >= 0 and <= 255.');
    }

    return color;
  }

  /**
   * @param {number|undefined} [color=undefined]
   * @returns {string}
   * @private
   */
  _toHex(color) {
    if (color === undefined) {
      let channels = [
        this._toHex(this.red),
        this._toHex(this.green),
        this._toHex(this.blue)
      ];
      // hex channel is only required if alpha is lower than 255 (omit adding FF)
      if (this.alpha < 255) {
        channels.push(this._toHex(Math.round(this.alpha)));
      }
      return '#' + channels.join('');
    }

    return color
      .toString(16)
      .padStart(2, '0');
  }

  /**
   * @returns {string}
   * @private
   */
  _toRgb() {
    return `rgb(${this.red},${this.green},${this.blue})`;
  }

  /**
   * @returns {string}
   * @private
   */
  _toRgba() {
    return `rgba(${this.red},${this.green},${this.blue},${this.alpha / 255})`;
  }

  /**
   * @param {string} hex
   * @returns {CssColor}
   */
  static fromHex(hex) {
    let color = hex.replace(/^#/, '');
    let rgba = [255, 255, 255, 255];

    if (color.length >= 6) {
      color.match(/.{2}/g).map(function (channel, index) {
        rgba[index] = parseInt(channel, 16);
      });
    } else {
      color.split('').map(function (channel, index) {
        rgba[index] = parseInt(channel + channel, 16);
      });
    }

    return new CssColor(...rgba);
  }

  /**
   * @param {number} red
   * @param {number} green
   * @param {number} blue
   * @param {number} [alpha=1]
   */
  static fromRGB(red, green, blue, alpha = 1) {
    return new CssColor(red, green, blue, alpha * 255);
  }

  /**
   * @param {string} str
   * @returns {CssColor}
   */
  static fromRGBString(str) {
    // colors: [wholeString, red, green, blue, alpha]
    const colors = CssColor.RGBA.exec(str.trim());

    if (!(colors && colors.length === 5)) {
      throw new Error(`Invalid RGB/RGBA color: ${str}`);
    }

    // alpha needs special handling because the match can be ", 0.1", "/ 0.1", or empty
    // normalize the alpha channel: strip the separator, default missing values to 1, and convert the CSS 0..1 value to the internal 0..255 range
    const alphaRegex = /[^\d]*([\d\.]+)/;
    let alpha = (colors[4] || "1").match(alphaRegex)[1];
    colors[4] = Number(alpha) * 255;

    return new CssColor(...colors.slice(1).map(Number));
  }

  /**
   * @param {string} color
   * @returns {CssColor}
   */
  static fromKeyword(color) {
    if (CssColor.COLORS.hasOwnProperty(color)) {
      return CssColor.fromHex(colors[color]);
    } else {
      throw new Error(`Unknown color keyword: ${color}`);
    }
  }

  /**
   * @param {*} value
   * @returns {function(*):CssColor|undefined}
   */
  static getParser(value) {
    if (typeof value !== 'string') {
      return undefined;
    }
    value = value.trim();

    switch (true) {
      case CssColor.RGBA.test(value):
        return CssColor.fromRGBString;
      case CssColor.HEX.test(value):
        return CssColor.fromHex;
      case CssColor.COLORS.hasOwnProperty(value):
        return CssColor.fromKeyword;
      default:
        return undefined;
    }
  }
}
