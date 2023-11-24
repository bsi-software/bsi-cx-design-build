const {cx, Style} = require('@bsi-cx/design-build');

/**
 * @type {Style}
 */

module.exports = cx.style
  .withIdentifier('background-color-oHkzMh')
  .withLabel('Background')
  .withStyleOptions(
    cx.styleOption
      .withStyleId('black-background-ew5kWs')
      .withLabel('Black')
      .withCssClass('black-background'),
    cx.styleOption
      .withStyleId('blue-background-scWZO4')
      .withLabel('Blau')
      .withDomManipulations(
        cx.domManipulation
          .withSelector('.background > div')
          .withAttribute('class')
          .withValue('blue-background')),
    cx.styleOption
      .withStyleId('red-background-9mwEve')
      .withLabel('Red')
      .withCssClass('red-background')
      .withDomManipulations(
        cx.domManipulation
          .withSelector('.background > div')
          .withAttribute('class')
          .withValue('red-background'),
        cx.domManipulation
          .withSelector('.background p')
          .withAttribute('style')
          .withValue('color: white;')));
