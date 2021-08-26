require('./styles.less');

const {ContentElement, PlainTextPart, Icon} = require('@bsi-cx/design-build');

/**
 * @type {ContentElement}
 */
module.exports = new ContentElement()
  .withElementId('content-title')
  .withIcon(Icon.HEADING)
  .withLabel('Titel')
  .withFile(require('./template.hbs.twig'))
  .withParts(
    new PlainTextPart()
      .withLabel('Titel'));
