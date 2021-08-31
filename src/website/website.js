import AbstractBuilder from '../abstract-builder';
import DesignJsonProperty from '../design-json-property';
import {builderObjectValue, identity} from '../browser-utility';
import RawValue from '../raw-value';

/**
 * This is the builder class for website objects.
 *
 * @example
 * module.exports = cx.website
 *   .withMaxNavigationLevel(2)
 *   .withIncludes(
 *     cx.include
 *       .withIdentifier('header')
 *       .withEditable(true)
 *       .withFile(require('./template.twig')
 *       .withName('Template for the Homepage'))
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
   * Define the maximum navigation level.
   *
   * @param {number} maxNavigationLevel - The maximum navigation level.
   * @returns {Website}
   */
  withMaxNavigationLevel(maxNavigationLevel) {
    this._maxNavigationLevel = maxNavigationLevel;
    return this;
  }

  /**
   * Define the includes for this website.
   *
   * @example
   * .withIncludes(
   *   cx.include
   *     .withIdentifier('footer')
   *     .withEditable(true)
   *     .withFile(require('./template.twig'))
   *     .withName('Footer'))
   * @see {@link withRawIncludes} to set a raw value
   * @param {...AbstractInclude} includes
   * @returns {Website}
   */
  withIncludes(...includes) {
    this._includes = includes;
    return this;
  }

  /**
   * Define the includes for this website as raw value.
   *
   * @example
   * .withRawIncludes({
   *   __page__: {
   *     editable: true,
   *     file: require('./page.twig'),
   *     name: 'Template for content'
   *   },
   *   header: {
   *     editable: true,
   *     file: require('./header.html'),
   *     name: 'Header'
   *   }
   * })
   * @param {{}} includes - The includes as raw value.
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
   * Clone the configuration.
   *
   * @param {boolean} [shallow=true] - Create a shallow clone.
   * @returns {Website}
   */
  clone(shallow) {
    return this._clone(new Website(), shallow);
  }
}
