require('./styles.scss');
const { TemplateElement, Icon, cx } = require('@bsi-cx/design-build');

// import { context } from "./context.json";

/**
 * @type {TemplateElement}
 */
module.exports = cx.templateElement
    .withElementId("template-part-element-97112d7d")
    .withIcon(Icon.ASTERISK)
    .withLabel("TemplatePartElement")
    .withFile(require("./template.hbs"))
    // .withFile(require("./context.json"))
    .withContextFile(require("./context.json"))
    // .withContextFile(context)
    .withTemplateParts(
        cx.templatePart.Image("Bild", "image-part-01fb0560", "alt-Text", ["400w", "800w", "1200w"], false),
        cx.templatePart.Checkbox("Checkbox", "checkbox-part-95513657")
    )