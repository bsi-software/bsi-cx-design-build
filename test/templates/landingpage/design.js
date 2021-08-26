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
        require('./content-elements/content/title').build(),
        require('./content-elements/content/text').build()
      ]
    }
  ],
  styleConfigs: {
    ...require('./styles/background-color').build(),
    ...require('./styles/text-color').build()
  },
  htmlEditorConfigs: {
    ...require('./html-editor-configs/full').build(),
    ...require('./html-editor-configs/normal').build()
  }
};
