require('./styles.less');

const {ContentElement, PlainTextPart, Icon} = require('@bsi-cx/design-build');

module.exports = new ContentElement()
  .withElementId('title')
  .withIcon(Icon.HEADING)
  .withLabel('Titel')
  .withFile(require('./template.hbs.twig'))
  .withParts(new PlainTextPart().withLabel('Titel'))
  .build();
