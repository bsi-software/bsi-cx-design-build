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
          .withExtendAllDropzones(
            require('./content-elements/content/title'), 
            require('../website/content-elements/content/template-button')),
        require('./content-elements/content/column-2')
          .withExtendAllDropzones(require('../website/content-elements/content/template-button')),
        require('./content-elements/content/text'),
        require('../website/content-elements/content/template-button'),
      ))
  .withDropzones(
    cx.dropzone
      .withDropzone('a1683342-d4a7-4c26-924e-bce162c4399f')
      .withAllowedElements(
        require('./content-elements/content/title'),
        require('./content-elements/content/text'),
        require('./content-elements/content/column-1'),
        require('./content-elements/content/column-2'),
        require('../website/content-elements/content/template-button')))
  .withHtmlEditorConfigs(
    require('./html-editor-configs/normal'))
  .withNLS(...require('./nls'));
