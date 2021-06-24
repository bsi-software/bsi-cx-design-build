const path = require('path');

module.exports = {
  elementId: 'image',
  icon: 'image',
  label: 'Bild',
  file: path.resolve(__dirname, 'template.twig'),
  parts: [
    {
      partId: 'image',
      label: 'Bild'
    }
  ]
};
