module.exports = {
  schemaVersion: '22.0',
  title: 'Landingpage Template',
  author: 'Oliver Fabel',
  date: '18.08.2021',
  previewImage: require('./thumbnail.png'),
  defaultLocale: 'en',
  locales: [
    'en',
    'de',
    'de-DE',
    'de-CH'
  ],
  nls: require('./nls'),
  contentElementGroups: [
    {
      groupId: 'content',
      label: 'Inhalt',
      contentElements: [
        require('./content-elements/content/title')
      ]
    }
  ],
  styleConfigs: {
    'background-color': require('./styles/background-color'),
    'text-color': require('./styles/text-color')
  },
  htmlEditorConfigs: {
    full: require('./html-editor-configs/full')
  }
};
