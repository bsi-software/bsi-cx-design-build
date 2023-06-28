const {cx, Locale, NLS, Translation} = require('@bsi-cx/design-build');

/**
 * @type {NLS}
 */
module.exports.action =
  cx.nls
    .withIdentifier('action')
    .withTranslations(
      cx.translation
        .withLocale(Locale.WILDCARD)
        .withTranslation('Action'),
      cx.translation
        .withLocale(Locale.DE)
        .withTranslation('Aktion'));

/**
 * @type {NLS}
 */
module.exports.banner =
  cx.nls
    .withIdentifier('banner')
    .withTranslations(
      cx.translation
        .withLocale(Locale.WILDCARD)
        .withTranslation('Please support our friends!'),
      cx.translation
        .withLocale(Locale.DE)
        .withTranslation('Bitte unterstütze unsere Freunde!'));

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
        .withTranslation('Überschrift'));

/**
 * @type {NLS}
 */
module.exports.column =
  NLS.create(
    'column',
    Translation.wildcard('Column'),
    Translation.create(Locale.DE, 'Spalte'));

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

/*module.exports = [
  cx.nls
    .withIdentifier('action')
    .withTranslations(
      cx.translation
        .withLocale(Locale.WILDCARD)
        .withTranslation('Action'),
      cx.translation
        .withLocale(Locale.DE)
        .withTranslation('Aktion')),
  cx.nls
    .withIdentifier('banner')
    .withTranslations(
      cx.translation
        .withLocale(Locale.WILDCARD)
        .withTranslation('Please support our friends!'),
      cx.translation
        .withLocale(Locale.DE)
        .withTranslation('Bitte unterstütze unsere Freunde!'),
      cx.h.t(Locale.DE_CH, 'Unterstütz üsi fründe!')),
  NLS.create(
    'column',
    Translation.wildcard('Column'),
    Translation.create(Locale.DE, 'Spalte')),
  NLS.create(
    'enumeration',
    Translation.wildcard('Enumeration:'),
    Translation.create(Locale.DE, 'Aufzählung:')),
  NLS.fromMap(
    'reset',
    new Map([
      [Locale.WILDCARD, 'Reset'],
      [Locale.DE, 'Zurücksetzen']
    ]))
];*/
