require('./styles.less');

module.exports = {
  elementId: 'header',
  icon: 'heading',
  label: 'Header',
  file: require('./template.html'),
  parts: [
    {
      partId: 'plain-text',
      label: 'Titel'
    }
  ]
};
