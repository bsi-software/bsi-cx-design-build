import DesignJsonProperty from '../../design-json-property';
import AbstractPart from './abstract-part';
import { IMAGE } from './part';

/**
 * @since Studio 1.0
 */
export default class ImagePart extends AbstractPart {
  /**
   * @type {Boolean|undefined}
   * @private
   */
  _altTextMandatory = undefined;

  constructor() {
    super(IMAGE);
  }

  constructor(label, id) {
    super(IMAGE, label, id);
  }

  /**
   * @returns {Boolean|undefined}
   */
  get altTextMandatory() {
    return this._altTextMandatory;
  }

  /**
   * Set a Boolean to indicate if the alt-text for this image is mandatory.
   * If true users must describe the image before they can save it in the CX editor.
   *
   * @see {@link withAltTextMandatory}
   * @param {Boolean} altTextMandatory
   * @returns {ImagePart}
   */
  withAltTextMandatory(altTextMandatory) {
    this._altTextMandatory = altTextMandatory
    return this;
  }

  _buildInternal() {
    let config = super._buildInternal();

    // TODO: erweitern, dass es in config{ altTextMandatory: true/false } geschrieben wird
    this._applyPropertyIfDefined(DesignJsonProperty.ALT_TEXT_MANDATORY, config, this.altTextMandatory);

    return config;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {ImagePart}
   */
  clone(shallow) {
    return this._clone(new ImagePart(), shallow);
  }
}
