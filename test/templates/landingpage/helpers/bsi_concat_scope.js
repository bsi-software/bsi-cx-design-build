module.exports = (parentContextScope, contextScope) =>
    (parentContextScope ? parentContextScope + "_" : "") + contextScope;