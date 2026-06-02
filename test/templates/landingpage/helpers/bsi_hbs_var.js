module.exports = (variableName, contextScope, options) => {
    let resolvedScope = contextScope;
    let helperOptions = options;

    if (
        resolvedScope &&
        typeof resolvedScope === "object" &&
        typeof helperOptions === "undefined"
    ) {
        helperOptions = resolvedScope;
        resolvedScope = undefined;
    }

    if (!resolvedScope) {
        resolvedScope =
            helperOptions?.hash?.contextScope ||
            helperOptions?.data?.contextScope ||
            helperOptions?.data?.root?.contextScope ||
            "";
    }

    return "{{" + (resolvedScope ? resolvedScope + "." : "") + variableName + "}}";
};
