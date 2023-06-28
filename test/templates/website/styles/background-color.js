const {cx, Style} = require('@bsi-cx/design-build');

/**
 * @type {Style}
 */
module.exports = cx.style
  .withIdentifier('background-color')
  .withLabel('Hintergrundfarbe')
  .withCssClasses(
    cx.cssClass
      .withLabel('Schwarz')
      .withCssClass('black-background'),
    cx.cssClass
      .withLabel('Blau')
      .withCssClass('blue-background'),
    cx.cssClass
      .withLabel('Rot')
      .withCssClass('red-background'),
    cx.cssClass
      .withLabel('Weiss')
      .withCssClass('white-background'));
