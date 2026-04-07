export default {
  'bsi.nls': key => key,
  // TODO: remove if not needed
  'bsi.hbsAttrScope': contextScope => contextScope ? "data-bsi-context-scope=\"" + contextScope + "\"" : "",
  'bsi.hbsVar': (variableName, contextScope) => "{{" + (contextScope ? contextScope + "." : "") + variableName + "}}"
};
