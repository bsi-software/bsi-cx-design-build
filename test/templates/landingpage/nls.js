const {cx, Locale, NLS, Translation} = require('@bsi-cx/design-build');

/**
 * @type {NLS[]}
 */
module.exports = [
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
      cx.t(Locale.DE_CH, 'Unterstütz üsi fründe!')),
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
];
