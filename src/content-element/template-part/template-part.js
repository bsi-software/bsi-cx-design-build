import AbstractBuilder from '../../abstract-builder';
import { identity } from '../../browser-utility';
import DesignJsonProperty from '../../design-json-property';

export default class TemplatePart extends AbstractBuilder {
  /**
   * @type {string}
   * @private
   */
  _partContextId = undefined;
  /**
   * @type {string}
   * @private
   */
  _partId = undefined;
  /**
   * @type {string|NLS|undefined}
   * @private
   */
  _label = undefined;
  /**
   * @type {{}|undefined}
   * @private
   */
  _config = undefined;

  /**
   * @param {string} partId
   */
  constructor(partId, label, partContextId) {
    super();
    /**
     * @type {string}
     * @private
     */
    this._partId = partId;
    /**
     * @type {string}
     * @private
     */
    this._label = label;
    /**
     * @type {string}
     * @private
     */
    this._partContextId = partContextId;
  }

  /**
   * @returns {string}
   */
  get partContextId() {
    return this._partContextId;
  }

  /**
   * @returns {string}
   */
  get partId() {
    return this._partId;
  }

  /**
   * @returns {string|NLS|undefined}
   */
  get label() {
    return this._label;
  }

  /**
   * @returns {{}|undefined}
   */
  get config() {
    return this._config;
  }

  /**
   * Add new key-value pair to config object
   * No changes if value == null
   * 
   * @param {string} key 
   * @param {string} value 
   * @param {boolean?} [isBoolean=false] 
   * @returns {this}
   */
  addConfigValueIfNotNull(key, value, isBoolean = false) {
    if (value !== null) {
      this._config = this.config || {};
      this._config[key] = isBoolean ? !!value : value;
    }
    return this;
  }

  _buildInternal() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.PART_CONTEXT_ID, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.PART_ID, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.LABEL, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.PART_CONFIG, config, identity);

    return config;
  }
}