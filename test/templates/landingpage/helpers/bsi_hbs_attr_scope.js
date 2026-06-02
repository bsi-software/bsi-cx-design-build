const Handlebars = require("handlebars");

module.exports = (contextScope) =>
    contextScope
        ? new Handlebars.SafeString(
                ` data-bsi-context-scope="${Handlebars.escapeExpression(contextScope)}"`,
            )
        : "";