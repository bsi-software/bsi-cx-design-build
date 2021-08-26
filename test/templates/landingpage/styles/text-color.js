const {Style} = require('@bsi-cx/design-build');

/**
 * @type {Style}
 */
module.exports = new Style()
  .withIdentifier('text-color')
  .withLabel('Textfarbe')
  .withCssClass('Schwarz', 'black-text')
  .withCssClass('Blau', 'blue-text')
  .withCssClass('Rot', 'red-text')
  .withCssClass('', 'white-text');
