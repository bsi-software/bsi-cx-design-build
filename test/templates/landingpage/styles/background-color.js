const {Style} = require('@bsi-cx/design-build');

module.exports = new Style()
  .withIdentifier('background-color')
  .withLabel('Hintergrundfarbe')
  .withCssClass('Schwarz', 'black-background')
  .withCssClass('Blau', 'blue-background')
  .withCssClass('Rot', 'red-background')
  .withCssClass('', 'white-background');
