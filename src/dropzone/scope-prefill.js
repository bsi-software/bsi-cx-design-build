import AbstractBuilder from "../abstract-builder";
import { identity } from "../browser-utility";
import TemplateElement from "../content-element/template-element";
import DesignJsonPropertyExtension from "../design-json-property-extension";
import RawValue from "../raw-value";

/** @typedef {import('../content-element/content-element').default} ContentElement */
/** @typedef {import('../content-element/template-element').default} TemplateElement */

/**
 * This is the builder class to specify a scope prefill for a dropzone.
 *
 * @example
 * .withDropzones(
 *   cx.dropzone
 *     .withDropzone('a5142bca-448b-40c5-bdde-942f531fcd12')
 *     .withAllowedElements(
 *       require('./content-elements/basic/text'),
 *       require('./content-elements/basic/image'))
 *     .withMaxAllowedElements(1),
 *   cx.dropzone
 *     .withDropzone('3b369b8b-f1f6-4754-bb0f-e49a46c315e1')
 *     .withAllowedElements(
 *       require('./content-elements/basic/text'),
 *       require('./content-elements/basic/image'))
 *     .withMaxAllowedElements(1))
 */
export default class ScopePrefill extends AbstractBuilder {
  _scope = undefined;
  _element = undefined;

  constructor(scope, element) {
    super();
    this._scope = scope;
    this._element = element;
  }

  /**
   * @returns {string}
   */
  get scope() {
    return this._scope;
  }
  /**
   * @returns {TemplateElement}
   */
  get element() {
    return this._element;
  }
}
