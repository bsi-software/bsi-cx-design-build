const { cx, Locale, bsiProperty } = require('@bsi-cx/design-build');

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
  .withDefaultLocale(Locale.DE)
  .withLocales(
    Locale.EN,
    Locale.DE,
    Locale.DE_DE,
    Locale.DE_CH)
  .withContentElementGroups(
    cx.contentElementGroup
      .withGroupId('content')
      .withLabel('Content')
      .withContentElements(
        require('./content-elements/content/title')
          .withAddStyleConfigs(require('./styles/new-text-color'))
          .withRemoveStyleConfigs(require('./styles/text-color')),
        require('./content-elements/content/column-1')
          .withExtendedDropzone(
            'b6608fe9-4815-4ef1-a118-6e945ead513f',
            require('./content-elements/content/title')),
        require('./content-elements/content/column-2')
          .withReducedDropzone('20816df1-f8c0-47d1-94a1-1cd124c2b348', require('./content-elements/content/title')),
        require('./content-elements/content/text')))
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
  .withNLS(...require('./nls'));
