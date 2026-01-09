require("./styles.scss");
const { TemplateElement, Icon, cx } = require("@bsi-cx/design-build");

/**
 * @type {TemplateElement}
 */
module.exports = cx.templateElement
    .withElementId("template-button-3seC3G")
    .withIcon(Icon.ASTERISK)
    .withLabel("Template Button")
    .withFile(require("./template.hbs"))
    .withTemplateParts(
        cx.templatePart.MultilinePlainText("Multiline plain text", "multiline-plain-text-wmiRti", 5).withRawPrefill({ value: "Bennis Text" }),
        cx.templatePart.Link("Link auf Multiline Text", "link-1wfD2H").withLinkPrefill("[b4]", "ABC Text", "BFSG Descrip"),
    )
