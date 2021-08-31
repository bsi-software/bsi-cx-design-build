import {Part} from './part';
import AbstractBuilder from '../../abstract-builder';
import DesignJsonProperty from '../../design-json-property';
import {constantObjectValue, identity} from '../../browser-utility';

/**
 * @abstract
 */
export default class AbstractPart extends AbstractBuilder {
  /**
   * @type {Part}
   * @private
   */
  _partId = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _label = undefined;

  /**
   * @param {Part} partId
   */
  constructor(partId) {
    super();
    /**
     * @type {Part}
     * @private
     */
    this._partId = partId;
  }

  /**
   * @returns {Part}
   */
  get partId() {
    return this._partId;
  }

  /**
   * @returns {string|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @param {string} label
   * @returns {AbstractPart}
   * @since Studio 1.0
   */
  withLabel(label) {
    this._label = label;
    return this;
  }

  build() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.PART_ID, config, constantObjectValue);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, identity);

    return config;
  }
}
