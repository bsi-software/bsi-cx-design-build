const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx
  .templateElement
  .withFile(require('./template.hbs'))
  .withElementId('image-9gq2eo')
  .withIcon(Icon.IMAGE)
  .withLabel('Hero (nur Bild)')
  .withDescription('')
  .withTemplateParts(
    cx.templatePart.Image('Bild', 'image-f6zquy').withImagePrefill(require('../../../static/image.png'))
  );
