const path = require('path');

module.exports = {
  elementId: 'title',
  icon: 'heading',
  label: 'Titel',
  file: path.resolve(__dirname, 'template.hbs'),
  parts: [
    {
      partId: 'plain-text',
      label: 'Titel'
    }
  ]
};
