require('./styles.less');

const {cx, Icon, ContentElement} = require('@bsi-cx/design-build');
const nls = require('../../../nls');

/**
 * @type {ContentElement}
 */
module.exports = cx.contentElement
  .withElementId('title')
  .withIcon(Icon.HEADING)
  .withLabel(nls.title)
  .withStyleConfigs(
    require('../../../styles/text-color'),
    require('../../../styles/background-color'))
  .withFile(require('./template.hbs.twig'))
  .withParts(
    cx.part.plainText
      .withLabel(nls.title));
