import AbstractBuilder from '../abstract-builder';
import DesignJsonProperty from '../design-json-property';
import {builderObjectValue, identity} from '../browser-utility';
import RawValue from '../raw-value';
import {CX_1_3} from '../version';
import {WEBSITE} from '../design-type';

/**
 * This is the builder class for website objects.
 *
 * @example
 * module.exports = cx.website
 *   .withMaxNavigationLevel(2)
 *   .withPagination(
 *     cx.pagination
 *       .withNumDataRecordsPerPage(20)
 *       .withNumAdjacentPages(3))
 *   .withIncludes(
 *     cx.include
 *       .withIdentifier('header')
 *       .withEditable(true)
 *       .withFile(require('./template.twig')
 *       .withName('Template for the Homepage'),
 *     cx.include
 *       .withIdentifier('pagination-element')
 *       .withEditable(false)
 *       .withContentType('pre-defined')
 *       .withFile(require('./includes/pagination-element.hbs'))
 *       .withName('Pagination'))
 * @since BSI CX 1.3
 */
export default class Website extends AbstractBuilder {
  /**
   * @type {number|undefined}
   * @private
   */
  _maxNavigationLevel = undefined;
  /**
   * @type {RawValue|Pagination|undefined}
   * @private
   */
  _pagination = undefined;
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
   * @returns {RawValue|Pagination|undefined}
   */
  get pagination() {
    return this._pagination;
  }

  /**
   * @returns {RawValue|AbstractInclude[]|undefined}
   */
  get includes() {
    return this._includes;
  }

  get minVersion() {
    return CX_1_3;
  }

  get allowedTypes() {
    return [WEBSITE];
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
   * Define the pagination to be used for this website.
   *
   * @example
   * .withPagination(
   *   cx.pagination
   *     .withNumDataRecordsPerPage(20)
   *     .withNumAdjacentPages(3))
   * @param {Pagination} pagination
   * @returns {Website}
   */
  withPagination(pagination) {
    this._pagination = pagination;
    return this;
  }

  /**
   * Define the pagination to be used for this website as raw value.
   *
   * @example
   * .withRawPagination({
   *   numDataRecordsPerPage: 20,
   *   numAdjacentPages: 3
   * })
   * @param {{}} pagination - Pagination as raw value.
   * @returns {Website}
   */
  withRawPagination(pagination) {
    this._pagination = new RawValue(pagination);
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

  _buildInternal() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.MAX_NAVIGATION_LEVEL, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.PAGINATION, config, builderObjectValue);
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
