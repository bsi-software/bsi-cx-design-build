require('./styles.less');

const {cx, Icon, ContentElement} = require('@bsi-cx/design-build');

/**
 * @type {ContentElement}
 */
module.exports = cx.contentElement
  .withElementId('content-title')
  .withIcon(Icon.HEADING)
  .withLabel('Titel')
  .withStyleConfigs(
    require('../../../styles/text-color'),
    require('../../../styles/background-color'))
  .withFile(require('./template.hbs.twig'))
  .withParts(
    cx.part.plainText
      .withLabel('Titel'));
