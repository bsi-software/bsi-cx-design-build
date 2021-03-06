require('./styles.less');

const {cx, Version, DesignType, Icon, ContentElement} = require('@bsi-cx/design-build');

/**
 * @type {ContentElement}
 */
module.exports = cx.contentElement
  .withMinVersion(Version.CX_1_3)
  .withAllowedTypes(DesignType.WEBSITE)
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
