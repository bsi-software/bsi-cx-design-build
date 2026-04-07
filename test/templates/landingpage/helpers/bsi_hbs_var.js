module.exports = (variableName, contextScope) =>
    "{{" + (contextScope ? contextScope + "." : "") + variableName + "}}";
