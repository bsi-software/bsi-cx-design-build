require('./styles.less');

module.exports = {
  elementId: 'image',
  icon: 'image',
  label: 'Bild',
  file: require('./template.twig'),
  parts: [
    {
      partId: 'image',
      label: 'Bild'
    }
  ]
};
