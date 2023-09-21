const {cx, Locale, NLS, Translation} = require('@bsi-cx/design-build');

/**
 * @type {NLS}
 */
module.exports.title =
  cx.nls
    .withIdentifier('title')
    .withTranslations(
      cx.translation
        .withLocale(Locale.WILDCARD)
        .withTranslation('Title'),
      cx.translation
        .withLocale(Locale.DE)
        .withTranslation('Titel'));

/**
 * @type {NLS}
 */
module.exports.black =
  NLS.create(
    'black',
    Translation.wildcard('Black'),
    Translation.create(Locale.DE, 'Schwarz'));

/**
 * @type {NLS}
 */
module.exports.red =
  NLS.create(
    'red',
    Translation.create(Locale.EN, 'Red'),
    Translation.create(Locale.DE, 'Rot'));

/**
 * @type {NLS}
 */
module.exports.background =
  NLS.create(
    'background',
    Translation.create(Locale.EN, 'Background'),
    Translation.create(Locale.DE, 'Hintergrund'));

/**
 * @type {NLS}
 */
module.exports.footer =
  NLS.create(
    'footer',
    Translation.wildcard('Footer'),
    Translation.create(Locale.DE, 'Fusszeile'));

/**
 * @type {NLS}
 */
module.exports.content =
  NLS.create(
    'content',
    Translation.wildcard('Content'),
    Translation.create(Locale.DE, 'Inhalt'));

/**
 * @type {NLS}
 */
module.exports.subtitle =
  NLS.create(
    'subtitle',
    Translation.wildcard('Subtitle'),
    Translation.create(Locale.DE, 'Untertitel'));
