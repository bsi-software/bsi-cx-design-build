const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.templateElement
  .withFile(require('./template.hbs.twig'))
  .withElementId('script-1As38Ui')
  .withLabel('Script')
  .withIcon(Icon.TEXT)
  .withTemplateParts(
      cx.templatePart.Script('Script', 'script-hge8Ri', true)
  )
