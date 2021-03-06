const {cx, Locale, bsiProperty} = require('@bsi-cx/design-build');

/**
 * @type {string}
 */
const author = bsiProperty('author');

/**
 * @type {Design}
 */
module.exports = cx.design
  .withTitle('Landingpage Template Test')
  .withAuthor(author)
  .withDate('18.08.2021')
  .withPreviewImage(require('./thumbnail.png'))
  .withDefaultLocale(Locale.EN)
  .withLocales(
    Locale.EN,
    Locale.DE,
    Locale.DE_DE,
    Locale.DE_CH)
  .withContentElementGroups(
    cx.contentElementGroup
      .withGroupId('content')
      .withLabel('Inhalt')
      .withContentElements(
        require('./content-elements/content/title'),
        require('./content-elements/content/text'),
        require('./content-elements/content/column-1'),
        require('./content-elements/content/column-2')))
  .withDropzones(
    cx.dropzone
      .withDropzone('a1683342-d4a7-4c26-924e-bce162c4399f')
      .withAllowedElements(
        require('./content-elements/content/title'),
        require('./content-elements/content/text'),
        require('./content-elements/content/column-1'),
        require('./content-elements/content/column-2')))
  .withHtmlEditorConfigs(
    require('./html-editor-configs/normal'))
  .withWebsite(
    cx.website
      .withMaxNavigationLevel(2)
      .withIncludes(
        cx.pageInclude
          .withName('Vorlage für Inhaltsseiten')
          .withEditable(true)
          .withFile(require('./includes/page.html')),
        cx.include
          .withIdentifier('footer')
          .withName('Fusszeile')
          .withEditable(true)
          .withFile(require('./includes/footer.twig')),
        cx.include
          .withIdentifier('header')
          .withName('Kopfzeile')
          .withEditable(true)
          .withFile(require('./includes/header.twig')),
        cx.include
          .withIdentifier('navigation')
          .withName('Navigation')
          .withEditable(false)
          .withFile(require('./includes/navigation.hbs'))))
  .withNLS(...require('./nls'));
