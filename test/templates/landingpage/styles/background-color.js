const {StyleBuilder} = require('@bsi-cx/design-build');

module.exports = new StyleBuilder()
  .withIdentifier('background-color')
  .withLabel('Hintergrundfarbe')
  .withCssClass('Schwarz', 'black-background')
  .withCssClass('Blau', 'blue-background')
  .withCssClass('Rot', 'red-background')
  .withCssClass('', 'white-background')
  .build();
