module.exports = function hbsAttrScope(contextScope) {
  return contextScope ? "data-bsi-context-scope=\"" + contextScope + "\"" : "";
};