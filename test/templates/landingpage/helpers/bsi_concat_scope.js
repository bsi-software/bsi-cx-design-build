module.exports = (parentContextScope, contextScope) =>
    (parentContextScope ? parentContextScope + "." : "") + contextScope;