module.exports = function hbsVar(variableName, contextScope) {
  return "klammern" + (contextScope ? contextScope + "." : "") + variableName + "klammern";
};