const {cx, Icon, ContentElement} = require('@bsi-cx/design-build');

/**
 * @type {ContentElement}
 */
module.exports = cx.contentElement
  .withElementId('pagination-element')
  .withIcon(Icon.TEXT)
  .withLabel('Pagination')
  .withHidden(true)
  .withFile(require('./template.hbs'));
