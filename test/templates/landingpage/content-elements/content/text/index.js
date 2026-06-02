const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
  .withFile(require('./template.hbs'))
  .withElementId('text-kkq2fq')
  .withLabel('Text')
  .withIcon(Icon.TEXT)
  .withRawTemplateParts([{
    partId: "multiline-plain-text",
    partContextId: "text",
    label: "Text",
  }])
  // TODO: in konstante auslagern
  .withType("template-element");
