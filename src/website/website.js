import AbstractBuilder from '../abstract-builder';
import DesignJsonProperty from '../design-json-property';
import {builderObjectValue, identity} from '../browser-utility';
import RawValue from '../raw-value';

/**
 * @since BSI CX 1.3
 */
export default class Website extends AbstractBuilder {
  /**
   * @type {number|undefined}
   * @private
   */
  _maxNavigationLevel = undefined;
  /**
   * @type {RawValue|AbstractInclude[]|undefined}
   * @private
   */
  _includes = undefined;

  /**
   * @returns {number|undefined}
   */
  get maxNavigationLevel() {
    return this._maxNavigationLevel;
  }

  /**
   * @returns {RawValue|AbstractInclude[]|undefined}
   */
  get includes() {
    return this._includes;
  }

  /**
   * @param {number} maxNavigationLevel
   * @returns {Website}
   */
  withMaxNavigationLevel(maxNavigationLevel) {
    this._maxNavigationLevel = maxNavigationLevel;
    return this;
  }

  /**
   * @param {...AbstractInclude} includes
   * @returns {Website}
   */
  withIncludes(...includes) {
    this._includes = includes;
    return this;
  }

  /**
   * @param {{}} includes
   * @returns {Website}
   */
  withRawIncludes(includes) {
    this._includes = new RawValue(includes);
    return this;
  }

  build() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.MAX_NAVIGATION_LEVEL, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.INCLUDES, config, builderObjectValue, true);

    return config;
  }

  /**
   * @param {boolean} [shallow=true]
   * @returns {Website}
   */
  clone(shallow) {
    return this._clone(new Website(), shallow);
  }
}
