const {Style, CssClass} = require('@bsi-cx/design-build');

/**
 * @type {Style}
 */
module.exports = new Style()
  .withIdentifier('background-color')
  .withLabel('Hintergrundfarbe')
  .withCssClasses(
    new CssClass()
      .withLabel('Schwarz')
      .withCssClass('black-background'),
    new CssClass()
      .withLabel('Blau')
      .withCssClass('blue-background'),
    new CssClass()
      .withLabel('Rot')
      .withCssClass('red-background'),
    new CssClass()
      .withLabel('Weiss')
      .withCssClass('white-background'));
