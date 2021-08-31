require('./styles.less');

const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @type {ContentElement}
 */
module.exports = cx.contentElement
  .withElementId('content-title')
  .withIcon(Icon.HEADING)
  .withLabel('Titel')
  .withFile(require('./template.hbs.twig'))
  .withParts(
    cx.part.plainText
      .withLabel('Titel'));
