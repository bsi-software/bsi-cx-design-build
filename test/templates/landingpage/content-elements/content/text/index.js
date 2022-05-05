require('./styles.scss');

const {ContentElement, PlainTextPart, Version, Icon, cx} = require('@bsi-cx/design-build');

const full = require('../../../html-editor-configs/full');

/**
 * @type {ContentElement}
 */
module.exports = cx.contentElement
  .withMinVersion(Version.CX_22_0)
  .withMaxVersion(Version.CX_22_0)
  .withElementId('title')
  .withIcon(Icon.HEADING)
  .withLabel('Titel')
  .withStyleConfigs(
    require('../../../styles/text-color'),
    require('../../../styles/background-color'))
  .withFile(require('./template.hbs.twig'))
  .withParts(
    cx.part.formattedText
      .withId('22235837-cf9e-49e9-8918-294b22e2854d')
      .withLabel('Text')
      .withHtmlEditorConfig(full),
    new PlainTextPart()
      .withId('6849e817-c96d-42aa-a0a8-0d2f2410197e')
      .withLabel('Subtitle'),
    new PlainTextPart()
      .withId('cc246a71-e563-412b-9a7e-9c3fc0475f2e')
      .withLabel('Title'));
