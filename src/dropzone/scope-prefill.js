import AbstractBuilder from "../abstract-builder";
import TemplateElement from "../content-element/template-element";

/** @typedef {import('../content-element/template-element').default} TemplateElement */

/**
 * This is the builder class to specify a scope prefill for a dropzone.
 *
 * @example cx.ScopePrefill('scopeA', require('./my-element'));
 *
 * use it within the Dropzone to define the prefill
 *
 * @example cx.Dropzone(..)
 *   .withScopePrefills(cx.ScopePrefill('scopeA', require('./my-element')));
 *
 */
export default class ScopePrefill extends AbstractBuilder {
  /**
   * @type {string}
   * @private
   */
  _scope;
  /**
   * @type {TemplateElement}
   * @private
   */
  _element;
  /**
   * @type {Object}
   * @private
   */
  _overrideValues = {};

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
  /**
   * @returns {Object}
   */
  get overrideValues() {
    return this._overrideValues;
  }

  /**
   * Shorthand to overwrite prefill values within the element.
   *
   * @example
   * cx.scopePrefill('scope', require('element'))
   *   .withOverwriteValue('part-id', 'different-text')
   *
   * @param {string} templatePartId
   * @param {string} value
   * @returns {ScopePrefill}
   */
  withOverrideValue(templatePartId, value) {
    this._overrideValues[templatePartId] = value;
    return this;
  }

  /**
   * Add scope with element to contextFile
   * 
   * @protected
   * @param {Object} contextFile 
   */
  addPrefillTo(contextFile) {
    this.element._loadPrefillIntoContextFile();
    const context = this.element.contextFile;
    let override = Object.entries(this.overrideValues);
    override.forEach(
      ([templatePartId, value]) =>
        (context[templatePartId].value = value),
    );
    contextFile[this.scope] = context;
  }
}
