import DesignJsonProperty from '../design-json-property';
import AbstractBuilder from '../abstract-builder';
import {constantObjectValue, identity, uuid} from '../browser-utility';
import RawValue from '../raw-value';

/** @typedef {import('./enter-mode').EnterMode} EnterMode */
/** @typedef {import('./feature').Feature} Feature */
/** @typedef {import('./format').Format} Format */
/** @typedef {import('./font-size-unit').FontSizeUnit} FontSizeUnit */

/**
 * This is the builder class to specify a HTML editor configuration.
 *
 * @example
 * module.exports = cx.htmlEditorConfig
 *   .withIdentifier('minimal')
 *   .withRawEnterMode('p')
 *   .withFeatures(
 *     Feature.BOLD,
 *     Feature.ITALIC,
 *     Feature.UNDERLINE);
 */
export default class HtmlEditorConfig extends AbstractBuilder {
  /**
   * @type {string|undefined}
   * @private
   */
  _identifier = uuid();
  /**
   * @type {RawValue|Feature[]|undefined}
   * @private
   */
  _features = undefined;
  /**
   * @type {string[]|undefined}
   * @private
   */
  _textColors = undefined;
  /**
   * @type {string[]|undefined}
   * @private
   */
  _backgroundColors = undefined;
  /**
   * @type {RawValue|Format[]|undefined}
   * @private
   */
  _formats = undefined;
  /**
   * @type {number[]|undefined}
   * @private
   */
  _fontSizes = undefined;
  /**
   * @type {RawValue|FontSizeUnit|undefined}
   * @private
   */
  _fontSizeUnit = undefined;
  /**
   * @type {number|undefined}
   * @private
   */
  _fontSizeDefault = undefined;
  /**
   * @type {number[]|undefined}
   * @private
   */
  _lineHeights = undefined;
  /**
   * @type {RawValue|EnterMode|undefined}
   * @private
   */
  _enterMode = undefined;

  /**
   * @returns {string|undefined}
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * @returns {RawValue|Feature[]|undefined}
   */
  get features() {
    return this._features;
  }

  /**
   * @returns {string[]|undefined}
   */
  get textColors() {
    return this._textColors;
  }

  /**
   * @returns {string[]|undefined}
   */
  get backgroundColors() {
    return this._backgroundColors;
  }

  /**
   * @returns {RawValue|Format[]|undefined}
   */
  get formats() {
    return this._formats;
  }

  /**
   * @returns {number[]|undefined}
   */
  get fontSizes() {
    return this._fontSizes;
  }

  /**
   * @returns {RawValue|FontSizeUnit|undefined}
   */
  get fontSizeUnit() {
    return this._fontSizeUnit;
  }

  /**
   * @returns {number|undefined}
   */
  get fontSizeDefault() {
    return this._fontSizeDefault;
  }

  /**
   * @returns {number[]|undefined}
   */
  get lineHeights() {
    return this._lineHeights;
  }

  /**
   * @returns {RawValue|EnterMode|undefined}
   */
  get enter() {
    return this._enterMode;
  }

  /**
   * Set an unique identifier for the editor configuration. If not set, a UUID v4 will be used.
   * It is recommended to set the identifier.
   *
   * @param {string} identifier - The unique identifier for this editor config.
   * @returns {HtmlEditorConfig}
   */
  withIdentifier(identifier) {
    this._identifier = identifier;
    return this;
  }

  /**
   * The features enable in this HTML editor configuration.
   *
   * @example
   * .withFeatures(Feature.ITALIC, Feature.BOLD, Feature.UNDERLINE)
   * @see {@link Feature} for available features
   * @see {@link withRawFeatures} to set a raw value
   * @param {...Feature} features - The features to enable.
   * @returns {HtmlEditorConfig}
   */
  withFeatures(...features) {
    this._features = features;
    return this;
  }

  /**
   * Set the raw <code>features</code> property.
   *
   * @example
   * .withRawFeatures('bold', 'italic', 'underline')
   * @see {@link withFeatures}
   * @param {...string} features - The raw features to enable.
   * @returns {HtmlEditorConfig}
   */
  withRawFeatures(...features) {
    this._features = new RawValue(features);
    return this;
  }

  /**
   * Set the available text colors. Specify the colors in the hexadecimal format.
   *
   * @example
   * .withTextColors('#ff00ff', '#ff0000', '#00ff00')
   * @see {@link TEXT_COLOR} to enable the feature
   * @param {...string} textColors - The text colors to set.
   * @returns {HtmlEditorConfig}
   */
  withTextColors(...textColors) {
    this._textColors = textColors;
    return this;
  }

  /**
   * Set the available background colors. Specify the colors in the hexadecimal format.
   *
   * @example
   * .withBackgroundColors('#ff00ff', '#ff0000', '#00ff00')
   * @see {@link BACKGROUND_COLOR} to enable the feature
   * @param {...string} backgroundColors - The background colors to set.
   * @returns {HtmlEditorConfig}
   */
  withBackgroundColors(...backgroundColors) {
    this._backgroundColors = backgroundColors;
    return this;
  }

  /**
   * Specify the available formats.
   *
   * @example
   * .withFormats(Format.P, Format.PRE)
   * @see {@link Format} for available formats
   * @see {@link withRawFormats} to set a raw value
   * @param {...Format} formats - The formats to set.
   * @returns {HtmlEditorConfig}
   */
  withFormats(...formats) {
    this._formats = formats;
    return this;
  }

  /**
   * Specify a raw value for the <code>formats</code> field.
   *
   * @example
   * .withRawFormats('p', 'pre')
   * @see {@link withFormats}
   * @param {...string} formats - The raw formats to set.
   * @returns {HtmlEditorConfig}
   */
  withRawFormats(...formats) {
    this._formats = new RawValue(formats);
    return this;
  }

  /**
   * Specify the available font sizes.
   *
   * @example
   * .withFontSizes(12, 13, 14, 15, 16)
   * @see {@link FONT_SIZE} to enable this feature
   * @param {...number} fontSizes - The font sizes to set.
   * @returns {HtmlEditorConfig}
   */
  withFontSizes(...fontSizes) {
    this._fontSizes = fontSizes;
    return this;
  }

  /**
   * Specify the font size unit to use.
   *
   * @example
   * .withFontSizeUnit(FontSizeUnit.PX)
   * @see {@link withRawFontSizeUnit} to set the raw value
   * @param {FontSizeUnit} fontSizeUnit - The font size unit to set.
   * @returns {HtmlEditorConfig}
   */
  withFontSizeUnit(fontSizeUnit) {
    this._fontSizeUnit = fontSizeUnit;
    return this;
  }

  /**
   * Set the raw value for the <code>fontSizeUnit</code> property.
   *
   * @example
   * .withRawFontSizeUnit('px')
   * @see {@link withFontSizeUnit}
   * @param {string} fontSizeUnit - The raw font size unit to set.
   * @returns {HtmlEditorConfig}
   */
  withRawFontSizeUnit(fontSizeUnit) {
    this._fontSizeUnit = new RawValue(fontSizeUnit);
    return this;
  }

  /**
   * Set the default font size to use.
   *
   * @example
   * .withFontSizeDefault(16)
   * @param {number} fontSizeDefault - The default font size to set.
   * @returns {HtmlEditorConfig}
   */
  withFontSizeDefault(fontSizeDefault) {
    this._fontSizeDefault = fontSizeDefault;
    return this;
  }

  /**
   * Set the available line heights.
   *
   * @example
   * .withLineHeights(1, 1.15 , 1.5, 2)
   * @see {@link LINE_HEIGHT} to enable this feature
   * @param {...number} lineHeights - The line heights.
   * @returns {HtmlEditorConfig}
   */
  withLineHeights(...lineHeights) {
    this._lineHeights = lineHeights;
    return this;
  }

  /**
   * Define the enter mode to use.
   *
   * @example
   * .withEnterMode(EnterMode.P)
   * @see {@link withRawEnterMode} to set the raw value
   * @param {EnterMode} enterMode - The enter mode.
   * @returns {HtmlEditorConfig}
   */
  withEnterMode(enterMode) {
    this._enterMode = enterMode;
    return this;
  }

  /**
   * Set the raw enter mode.
   *
   * @example
   * .withRawEnterMode('p')
   * @param {string} enterMode - The raw enter mode.
   * @returns {HtmlEditorConfig}
   */
  withRawEnterMode(enterMode) {
    this._enterMode = new RawValue(enterMode);
    return this;
  }

  _buildInternal() {
    let config = {};
    let editorConfig = {};

    config[this.identifier] = editorConfig;

    this._applyPropertyIfDefined(DesignJsonProperty.FEATURES, editorConfig, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.TEXT_COLORS, editorConfig, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.BACKGROUND_COLORS, editorConfig, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.FORMATS, editorConfig, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.FONT_SIZES, editorConfig, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.FONT_SIZE_UNIT, editorConfig, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.FONT_SIZE_DEFAULT, editorConfig, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.LINE_HEIGHTS, editorConfig, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.ENTER_MODE, editorConfig, constantObjectValue);

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {HtmlEditorConfig}
   */
  clone(shallow) {
    return this._clone(new HtmlEditorConfig(), shallow);
  }
}
