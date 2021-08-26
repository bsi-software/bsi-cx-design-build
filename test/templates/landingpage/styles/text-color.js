const {StyleBuilder} = require('@bsi-cx/design-build');

module.exports = new StyleBuilder()
  .withIdentifier('text-color')
  .withLabel('Textfarbe')
  .withCssClass('Schwarz', 'black-text')
  .withCssClass('Blau', 'blue-text')
  .withCssClass('Rot', 'red-text')
  .withCssClass('', 'white-text')
  .build();