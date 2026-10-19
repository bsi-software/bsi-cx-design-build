import sass from 'sass';
import Color from 'less/lib/less/tree/color.js';
import colors from 'less/lib/less/data/colors.js';

import AbstractCssProperty from './abstract-css-property';

export default class CssColor extends AbstractCssProperty {
  /**
   * @type {RegExp}
   */
  static RGBA = /^rgba?\((.*)\)$/i;
  /**
   * @type {RegExp}
   */
  static RGB_VALUES = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d*\.?\d+))?\s*$/;
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
    if (typeof str !== 'string') {
      throw new TypeError('RGB color must be a string.');
    }

    const match = CssColor.RGBA.exec(str.trim());

    if (!match) {
      throw new Error(`Invalid RGB/RGBA color: ${str}`);
    }

    const parts = match[1].trim().split(/\s*[,/]\s*|\s+/)
      .filter(Boolean);

    if (parts.length !== 3 && parts.length !== 4) {
      throw new Error(`Invalid RGB/RGBA color: ${str}`);
    }

    const [red, green, blue] = parts.slice(0, 3).map(Number);
    const alpha = parts.length === 4 ? Number(parts[3]) : 1;

    if (
      ![red, green, blue].every(
        value => Number.isInteger(value) && value >= 0 && value <= 255
      )
    ) {
      throw new Error('RGB channels must be integers between 0 and 255.');
    }

    if (!Number.isFinite(alpha) || alpha < 0 || alpha > 1) {
      throw new Error('Alpha must be between 0 and 1.');
    }

    return new CssColor(red, green, blue, alpha * 255);
  }

  /**
   * @param {string} str
   * @returns {CssColor}
   */
  static fromRGBValues(str) {
    if (typeof str !== 'string') {
      throw new TypeError('RGB values must be a string.');
    }

    const match = CssColor.RGB_VALUES.exec(str);

    if (!match) {
      throw new Error(`Invalid RGB values: ${str}`);
    }

    const [, red, green, blue, alpha] = match;

    return CssColor.fromRGB(
      Number(red),
      Number(green),
      Number(blue),
      alpha === undefined ? 1 : Number(alpha)
    );
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

    const input = value.trim();

    switch (true) {
      case CssColor.RGBA.test(input):
        return CssColor.fromRGBString;

      case CssColor.HEX.test(input):
        return CssColor.fromHex;

      case Object.hasOwn(CssColor.COLORS, input.toLowerCase()):
        return CssColor.fromKeyword;

      case CssColor.RGB_VALUES.test(input):
        return CssColor.fromRGBValues;

      default:
        return undefined;
    }
  }
}
