import AbstractBuilder from "../../abstract-builder";

/** @typedef {import('../template-element').default} TemplateElement */

/**
 * Describes a template element that is used to prefill a named scope.
 *
 * A scope prefill can be assigned to a `TemplateElement` or `Dropzone`.
 * The referenced element's template-part prefills are written to the
 * corresponding scope in the context file.
 *
 * @example
 * cx.ScopePrefill('header', require('./headline'));
 *
 * @example
 * cx.templateElement
 *   .withScopePrefills(
 *     cx.ScopePrefill('header', require('./headline'))
 *   );
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
   * Values that override the referenced element's default prefills.
   *
   * @type {Object<string, string>}
   * @private
   */
  _overrideValues = {};

  /**
   * @param {string} scope - Name of the scope to prefill.
   * @param {TemplateElement} element - Template element providing the prefills.
   */
  constructor(scope, element) {
    super();
    this._scope = scope;
    this._element = element;
  }

  /**
   * Returns the name of the target scope.
   *
   * @returns {string} The scope name.
   */
  get scope() {
    return this._scope;
  }

  /**
   * Returns the template element whose prefills are used.
   *
   * @returns {TemplateElement} The prefill element.
   */
  get element() {
    return this._element;
  }

  /**
   * Returns values that override the element's default part prefills.
   *
   * @returns {Object<string, string>} Map of template-part IDs to values.
   */
  get overrideValues() {
    return this._overrideValues;
  }

  /**
   * Overrides the prefill value of a template part.
   *
   * @param {string} templatePartId - ID of the template part to override.
   * @param {string} value - Replacement value.
   * @returns {ScopePrefill} This scope prefill.
   */
  withOverrideValue(templatePartId, value) {
    this._overrideValues[templatePartId] = value;
    return this;
  }

  /**
   * Adds this prefill to the context file.
   *
   * The target scope is composed from the parent scope and this prefill's
   * scope name, separated by an underscore. The referenced element's
   * prefills are written first; configured override values are applied
   * afterwards.
   *
   * @protected
   * @param {Object} contextFile - Context file receiving the prefill.
   * @param {string} [parentScope=""] - Optional parent scope name.
   * @returns {void}
   */
  addPrefillTo(contextFile, parentScope = "") {
    let combinedScope = parentScope ? `${parentScope}_${this.scope}` : this.scope;
    this.element._loadPrefillIntoContextFile(contextFile, combinedScope);

    Object.entries(this.overrideValues).forEach(
      ([templatePartId, value]) => {
        contextFile[combinedScope][templatePartId].value = value;
      },
    );
  }
}