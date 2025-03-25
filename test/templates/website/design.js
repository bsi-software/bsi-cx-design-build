const {cx, Locale, bsiProperty, WebsiteContentType} = require('@bsi-cx/design-build');

/**
 * @type {string}
 */
const author = bsiProperty('author');
const nls = require('./nls');

/**
 * @type {Design}
 */
module.exports = cx.design
  .withTitle('Landingpage Template Test')
  .withAuthor(author)
  .withDate('18.08.2021')
  .withPreviewImage(require('./thumbnail.png'))
  .withDefaultLocale(Locale.DE)
  .withLocales(
    Locale.EN,
    Locale.DE,
    Locale.DE_DE,
    Locale.DE_CH)
  .withContentElementGroups(
    cx.contentElementGroup
      .withGroupId('content')
      .withLabel(nls.content)
      .withContentElements(
        require('./content-elements/content/pagination-element'),
        require('./content-elements/content/title'),
        require('./content-elements/content/text'),
        require('./content-elements/content/image'),
        require('./content-elements/content/column-1')
          .withExtendedDropzone(
            'b6608fe9-4815-4ef1-a118-6e945ead513f',
            require('./content-elements/content/title'),
            require('./content-elements/content/text')),
        require('./content-elements/content/column-2')))
  .withDropzones(
    cx.dropzone
      .withDropzone('a1683342-d4a7-4c26-924e-bce162c4399f')
      .withAllowedElements(
        require('./content-elements/content/pagination-element'),
        require('./content-elements/content/title'),
        require('./content-elements/content/text'),
        require('./content-elements/content/column-1'),
        require('./content-elements/content/column-2')))
  .withHtmlEditorConfigs(
    require('./html-editor-configs/normal'))
  .withWebsite(
    cx.website
      .withMaxNavigationLevel(2)
      .withPagination(
        cx.pagination
          .withNumDataRecordsPerPage(20)
          .withNumAdjacentPages(3))
      .withIncludes(
        cx.pageInclude
          .withName('Vorlage für Inhaltsseiten')
          .withEditable(true)
          .withFile(require('./includes/page.html')),
          cx.pageInclude
            .withName('Vorlage für Blog')
            .withEditable(true)
            .withFile(require('./includes/page.html'))
            .withWebsiteContentType(WebsiteContentType.CUSTOMER_PARTNER),
        cx.include
          .withIdentifier('pagination-element')
          .withName('Pagination')
          .withEditable(false)
          .withIncludeType('pre-defined')
          .withFile(require('./includes/pagination-element.hbs')),
        cx.include
          .withIdentifier('footer')
          .withName(nls.footer)
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
  .withNLS(Object.values(require('./nls')))
  .withWebsiteContentTypes(WebsiteContentType.BLOG, WebsiteContentType.EVENT);
