/**
 * The context scope is the first path segment of every template part variable in a rendered template
 * (.hbs) and the top level property of the context file (.json):
 *
 * <pre>
 * {{ dzl_0.link-1wfD2H.url }}   ->   {"dzl_0": {"link-1wfD2H": {"url": "..."}}}
 * </pre>
 *
 * A template never names a scope. The Twig functions emit the placeholders of this class and
 * {@link TemplateElement#render} replaces them with the scope computed from the element hierarchy.
 * The rendered template and the context file are two halves of one contract - both are built from
 * the methods below, change them together or BSI CX resolves nothing at runtime.
 */
export default class ContextScope {
  /**
   * Artificial scope of a root element which has own template parts *and* nested content elements:
   * its own parts need a scope of their own to stay separable from the nested ones.
   */
  static ROOT = 'root';
  /**
   * Stands for '[scope].' in a template part variable, and for nothing at all if the element has no
   * context scope.
   */
  static VARIABLE_PREFIX = '@@bsi-context-scope@@';
  /**
   * Stands for the data-bsi-context-scope attribute, and for nothing at all if the element has no
   * context scope.
   */
  static ATTRIBUTE = '@@bsi-context-scope-attribute@@';
  /**
   * Marks the position of the statically nested content elements of a dropzone.
   */
  static DROPZONE = /@@bsi-dropzone:(.*?)@@/g;

  /**
   * @param {string} dropzoneId
   * @returns {string}
   */
  static dropzone(dropzoneId) {
    return `@@bsi-dropzone:${dropzoneId}@@`;
  }

  /**
   * The scope segment of one nested content element: the name of the dropzone it sits in plus its
   * position within that dropzone.
   *
   * @param {string} dropzoneName
   * @param {number} index
   * @returns {string}
   */
  static segment(dropzoneName, index) {
    return `${ContextScope.sanitize(dropzoneName)}_${index}`;
  }

  /**
   * A scope is a path segment of a Handlebars expression, a dropzone ID is usually a UUID. Hyphens
   * and leading digits would break the expression, so they are replaced.
   *
   * @param {string} name
   * @returns {string}
   */
  static sanitize(name) {
    let sanitized = String(name).replace(/[^A-Za-z0-9_$]+/g, '_');
    return /^[0-9]/.test(sanitized) ? `dz_${sanitized}` : sanitized;
  }

  /**
   * Replaces the placeholders of a rendered template with the context scope of its content element.
   *
   * @param {string} content - rendered template of one content element
   * @param {string|undefined} scope - the absolute context scope, undefined if the element has none
   * @returns {string}
   */
  static apply(content, scope) {
    let variablePrefix = scope ? `${scope}.` : '';
    let attribute = scope ? ` data-bsi-context-scope="${scope}"` : '';

    return content
      .split(ContextScope.VARIABLE_PREFIX).join(variablePrefix)
      .split(ContextScope.ATTRIBUTE).join(attribute);
  }
}
