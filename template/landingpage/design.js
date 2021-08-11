require('bootstrap/dist/css/bootstrap.min.css');
require('./static/styles.less');

module.exports = {
  schemaVersion: '22.0',
  title: 'Landingpage Template',
  author: 'Oliver Fabel',
  date: '21.06.2021',
  previewImage: require('./design-preview.png'),
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
        require('./content-elements/content/title'),
        require('./content-elements/content/image'),
        require('./content-elements/content/header')
      ]
    }
  ]
};
