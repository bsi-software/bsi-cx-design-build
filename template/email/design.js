module.exports = {
  schemaVersion: '22.0',
  title: 'E-Mail Template',
  author: 'Oliver Fabel',
  date: '21.06.2021',
  previewImage: 'preview.png',
  defaultLocale: 'en',
  locales: [
    'en',
    'de',
    'de-DE'
  ],
  nls: require('../nls'),
  contentElementGroups: [
    {
      groupId: 'content',
      label: 'Inhalt',
      contentElements: [
        require('./content-elements/content/title')
      ]
    }
  ]
};
