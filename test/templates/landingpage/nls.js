const {NLS, Translation, Locale} = require('@bsi-cx/design-build');

module.exports = [
  new NLS()
    .withIdentifier('action')
    .withTranslations(
      new Translation()
        .withLocale(Locale.WILDCARD)
        .withTranslation('Action'),
      new Translation()
        .withLocale(Locale.DE)
        .withTranslation('Aktion')),
  new NLS()
    .withIdentifier('banner')
    .withTranslations(
      new Translation()
        .withLocale(Locale.WILDCARD)
        .withTranslation('Please support our friends!'),
      new Translation()
        .withLocale(Locale.DE)
        .withTranslation('Bitte unterstütze unsere Freunde!')),
  NLS.create(
    'column',
    Translation.wildcard('Column'),
    Translation.create(Locale.DE, 'Spalte')),
  NLS.create(
    'enumeration',
    Translation.wildcard('Enumeration:'),
    Translation.create(Locale.DE, 'Aufzählung:'))
];
