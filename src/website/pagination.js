import AbstractBuilder from '../abstract-builder';
import {identity} from '../browser-utility';
import {CX_22_0} from '../version';
import {WEBSITE} from '../design-type';
import DesignJsonProperty from '../design-json-property';

/**
 * This is the builder class for {@link Website|website} pagination.
 *
 * @example
 * .withPagination(
 *   cx.pagination
 *     .withNumDataRecordsPerPage(20)
 *     .withNumAdjacentPages(3))
 * @since BSI CX 22.0
 */
export default class Pagination extends AbstractBuilder {
  /**
   * @type {number|undefined}
   * @private
   */
  _numDataRecordsPerPage = undefined;
  /**
   * @type {number|undefined}
   * @private
   */
  _numAdjacentPages = undefined;

  /**
   * @returns {number|undefined}
   */
  get numDataRecordsPerPage() {
    return this._numDataRecordsPerPage;
  }

  /**
   * @returns {number|undefined}
   */
  get numAdjacentPages() {
    return this._numAdjacentPages;
  }

  get minVersion() {
    return CX_22_0;
  }

  get allowedTypes() {
    return [WEBSITE];
  }

  /**
   * Define how many records are to be displayed simultaneously on a page.
   *
   * @param {number} numDataRecordsPerPage - The number of data records to be displayed on a page.
   * @returns {Pagination}
   */
  withNumDataRecordsPerPage(numDataRecordsPerPage) {
    this._numDataRecordsPerPage = numDataRecordsPerPage;
    return this;
  }

  /**
   * Define how many lower and higher page numbers are to be displayed in the pagination navigation.
   *
   * @param {number} numAdjacentPages - The number of adjacent pages.
   * @returns {Pagination}
   */
  withNumAdjacentPages(numAdjacentPages) {
    this._numAdjacentPages = numAdjacentPages;
    return this;
  }

  _buildInternal() {
    let config = {};

    this._applyPropertyIfDefined(DesignJsonProperty.NUM_DATA_RECORDS_PER_PAGE, config, identity);
    this._applyPropertyIfDefined(DesignJsonProperty.NUM_ADJACENT_PAGES, config, identity);

    return config;
  }
}
