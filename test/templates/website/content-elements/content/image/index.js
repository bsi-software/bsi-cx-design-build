const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx
  .contentElement
  .withFile(require('./template.twig'))
  .withElementId('image-9gq2eo')
  .withIcon(Icon.IMAGE)
  .withLabel('Hero (nur Bild)')
  .withDescription('')
  .withParts(
    cx.part.Image('Bild', 'image-f6zquy'),
    cx.part.table
      .withLabel('Table')
      .withId('table-yuqz6f')
      .withCaptionEnabled(true)
  );
