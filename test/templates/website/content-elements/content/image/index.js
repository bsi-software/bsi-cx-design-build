const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx
  .contentElement
  .withFile(require('./template.twig'))
  .withElementId('hero-image-9gq2eo')
  .withIcon(Icon.IMAGE)
  .withLabel('Hero (nur Bild)')
  .withDescription('')
  .withParts(
    cx.part.Image('Bild', 'hero-image-f6zquy'),
    cx.part.table
      .withLabel('Table')
      .withId('hero-image-f6zquy')
      .withCaptionEnabled(true)
  );
