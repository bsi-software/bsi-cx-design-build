const {ContentElementGroup, Design, Locale, SchemaVersion, Website, Include, PageInclude} = require('@bsi-cx/design-build');

/**
 * @type {Design}
 */
module.exports = new Design()
  .withSchemaVersion(SchemaVersion.V_22_0)
  .withTitle('Landingpage Template Test')
  .withAuthor('Oliver Fabel')
  .withDate('18.08.2021')
  .withPreviewImage(require('./thumbnail.png'))
  .withDefaultLocale(Locale.EN)
  .withLocales(
    Locale.EN,
    Locale.DE,
    Locale.DE_DE,
    Locale.DE_CH)
  .withContentElementGroups(
    new ContentElementGroup()
      .withGroupId('content')
      .withLabel('Inhalt')
      .withContentElements(
        require('./content-elements/content/title'),
        require('./content-elements/content/text')))
  .withStyleConfigs(
    require('./styles/background-color'),
    require('./styles/text-color'))
  .withHtmlEditorConfigs(
    require('./html-editor-configs/full'),
    require('./html-editor-configs/normal'))
  .withWebsite(
    new Website()
      .withMaxNavigationLevel(2)
      .withIncludes(
        new PageInclude()
          .withName('Vorlage für Inhaltsseiten')
          .withEditable(true)
          .withFile(require('./includes/page.html')),
        new Include()
          .withIdentifier('footer')
          .withName('Fusszeile')
          .withEditable(true)
          .withFile(require('./includes/footer.twig')),
        new Include()
          .withIdentifier('header')
          .withName('Kopfzeile')
          .withEditable(true)
          .withFile(require('./includes/header.twig')),
        new Include()
          .withIdentifier('navigation')
          .withName('Navigation')
          .withEditable(false)
          .withFile(require('./includes/navigation.hbs'))))
  .build();
