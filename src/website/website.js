import AbstractBuilder from '../abstract-builder';
import DesignJsonProperty from '../design-json-property';
import {builderObjectValue, identity} from '../extractor';
import AbstractInclude from './abstract-include';
import RawValue from '../raw-value';

/**
 * @since 1.3
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
   * @return {number|undefined}
   */
  get maxNavigationLevel() {
    return this._maxNavigationLevel;
  }

  /**
   * @return {RawValue|AbstractInclude[]|undefined}
   */
  get includes() {
    return this._includes;
  }

  /**
   * @param {number} maxNavigationLevel
   * @return {Website}
   */
  withMaxNavigationLevel(maxNavigationLevel) {
    this._maxNavigationLevel = maxNavigationLevel;
    return this;
  }

  /**
   * @param {...AbstractInclude} includes
   * @return {Website}
   */
  withIncludes(...includes) {
    this._includes = includes;
    return this;
  }

  /**
   * @param {{}} includes
   * @return {Website}
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
}
