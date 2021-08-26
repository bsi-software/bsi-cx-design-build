import {Part} from './part';
import AbstractBuilder from '../../abstract-builder';
import DesignJsonProperty from '../../design-json-property';
import {constantObjectValue, identity} from '../../extractor';

export default class AbstractPart extends AbstractBuilder {
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
    /**
     * @type {string|undefined}
     * @private
     */
    this._label = undefined;
  }

  /**
   * @return {Part}
   */
  get partId() {
    return this._partId;
  }

  /**
   * @return {string|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @param {string} label
   * @return {AbstractPart}
   * @since 1.0
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
