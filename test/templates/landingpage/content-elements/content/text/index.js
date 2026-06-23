require('./styles.scss');

const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
  .withFile(require('./template.twig'))
  .withElementId('text-kkq2fq')
  .withLabel('Text')
  .withIcon(Icon.TEXT)
  .withStyleConfigs(cx.Style('Text Color', 'text-color-id', {
    'text-red': 'Red',
    'text-blue': 'Blue'
  }))
  .withParts(
    cx.part.FormattedText('Text', 'text-part-Fjse59',
      require('../../../html-editor-configs/full.js')));
