require('./styles.scss');

module.exports = {
  elementId: 'image',
  icon: 'image',
  label: 'Bild',
  file: require('./template.twig'),
  parts: [
    {
      partId: 'image',
      label: 'Bild'
    },
    {
      partId: 'plain-text',
      label: 'Label'
    }
  ]
};
