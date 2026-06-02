require('./styles.less');

const {cx, Icon, ContentElement} = require('@bsi-cx/design-build');

/**
 * @type {ContentElement}
 */
module.exports = cx.contentElement
  .withElementId('content-title-1')
  .withIcon(Icon.HEADING)
  .withLabel('Titel')
  .withStyleConfigs(
    require('../../../styles/text-color'),
    require('../../../styles/background-color'))
  .withFile(require('./template.hbs'))
  .withParts(
    cx.part.PlainText('Titel', 'title-id'),
    cx.part.PlainText('Partial', 'text-partial-part-Fjse59'));
