const {ContentElementGroup} = require('@bsi-cx/design-build');

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
    new ContentElementGroup()
      .withGroupId('content')
      .withLabel('Inhalt')
      .withContentElements(
        require('./content-elements/content/title'),
        require('./content-elements/content/text'))
      .build()
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
