import AbstractPart from './abstract-part';
import {Part} from './part';

/**
 * @since Studio 1.0
 */
export default class RawPart extends AbstractPart {
  /**
   * @type {Record<string,*>}
   * @private
   */
  _properties = undefined;

  /**
   * @param {string} partId
   */
  constructor(partId) {
    const part = new Part(partId);

    super(part);

    this._properties = {};
  }

  /**
   * @returns {Record<string, *>}
   */
  get properties() {
    return this._properties;
  }

  /**
   * Set a property for this raw part.
   *
   * @example
   * let element = new ContentElement()
   *   .withElementId('element')
   *   .withParts(
   *     new RawPart('chart')
   *       .withLabel('Chart')
   *       .withProperty('type','pie'))
   * @param {string} name
   * @param {string|array|number|boolean|Record|null} value
   * @returns {RawPart}
   */
  withProperty(name, value) {
    this._properties[name] = value;
    return this;
  }

  /**
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {RawPart}
   */
  clone(shallow) {
    return this._clone(new RawPart(this.partId), shallow);
  }

  _buildInternal() {
    let config = super._buildInternal();

    return Object.assign({}, config, this._properties);
  }
}
