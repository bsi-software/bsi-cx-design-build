const {cx, Style} = require('@bsi-cx/design-build');

/**
 * @type {Style}
 */

module.exports = cx.style
  .withIdentifier('background-color')
  .withLabel('Background')
  .withCssClasses(
    cx.cssClass
      .withLabel('Black')
      .withCssClass('black-background'),
    cx.cssClass
      .withLabel('Blau')
      .withCssClass('blue-background'),
    cx.cssClass
      .withLabel('Red')
      .withCssClass('red-background'),
    cx.cssClass
      .withLabel('Weiss')
      .withCssClass('white-background'));
