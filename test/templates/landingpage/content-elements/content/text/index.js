const {ContentElement, FormattedTextPart, Icon} = require('@bsi-cx/design-build');

const full = require('../../../html-editor-configs/full');

/**
 * @type {ContentElement}
 */
module.exports = new ContentElement()
  .withElementId('title')
  .withIcon(Icon.HEADING)
  .withLabel('Titel')
  .withFile(require('./template.hbs.twig'))
  .withParts(
    new FormattedTextPart()
      .withLabel('Titel')
      .withHtmlEditorConfig(full));
