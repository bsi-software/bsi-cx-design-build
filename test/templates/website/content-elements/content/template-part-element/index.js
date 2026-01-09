require("./styles.scss");
const { TemplateElement, Icon, cx } = require("@bsi-cx/design-build");

/**
 * @type {TemplateElement}
 */
module.exports = cx.templateElement
    .withElementId("template-part-element-97112d7d")
    .withIcon(Icon.ASTERISK)
    .withLabel("TemplatePartElement")
    .withFile(require("./template.hbs"))
    .withRawContextFile(require("./context.json"))
    .withTemplateParts(
        cx.templatePart.Image("Bild", "image-part-01fb0560", true, ["400w", "800w", "1200w"], false),
        cx.templatePart.Checkbox("Hintergrund grün", "checkbox-part-95513657"),
        cx.templatePart.PlainText("Plain text", "plain-text-Y3dhVu").withRawPrefill({"value": "Peter Pfau"}),
        cx.templatePart.MultilinePlainText("Multiline plain text", "multiline-plain-text-0pQpp9", 5),
        cx.templatePart.FormattedText("Formatted text", "formatted-text-fC3iJv", require("../../../html-editor-configs/full")).withFormattedTextPrefill('<div> Some HTML </div>'),
        cx.templatePart.Link("Link auf Multiline Text", "link-1wfD2H"),
        cx.templatePart.Option("Was willst du kaufen?", "option-0CxEy6", [{"text": "Auto", "value": "car"}, {"text": "Haus", "value": "house"}, {"text": "Yacht", "value" : "yacht"}]), //{ "Auto": "car"  , "Auto" : "house", "Yacht" : "yacht" }
        // Test both ways to fill option part
        // cx.templatePart.Option("Was willst du kaufen?", "option-0CxEy6", [{ "value": "car", "text": "Auto" }, { "value": "house", "text": "Haus" }, { "value": "yacht", "text": "Yacht" }])
    )
