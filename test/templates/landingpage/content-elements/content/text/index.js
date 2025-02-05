const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
  .withFile(require('./template.twig'))
  .withElementId('text-kkq2fq')
  .withLabel('Text')
  .withIcon(Icon.TEXT)
  .withParts(
    cx.part2.formattedText('Text', 'text-part-Fjse59',
      require('../../../html-editor-configs/full.js')));
