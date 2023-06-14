const {Style, CssClass} = require('@bsi-cx/design-build');

/**
 * @type {Style}
 */
module.exports = new Style()
  .withIdentifier('text-color')
  .withLabel('Textfarbe')
  .withCssClasses(
    CssClass.create('black-text', 'Schwarz'),
    CssClass.create('blue-text', 'Blau'),
    CssClass.create('red-text', 'Rot'),
    CssClass.create('white-text', ''));
