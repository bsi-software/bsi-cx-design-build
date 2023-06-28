const {cx, Style} = require('@bsi-cx/design-build');

/**
 * @type {Style}
 */
const nls = require('../nls');

module.exports = cx.style
  .withIdentifier('background-color')
  .withLabel(nls.background)
  .withCssClasses(
    cx.cssClass
      .withLabel(nls.black)
      .withCssClass('black-background'),
    cx.cssClass
      .withLabel('Blau')
      .withCssClass('blue-background'),
    cx.cssClass
      .withLabel(nls.red)
      .withCssClass('red-background'),
    cx.cssClass
      .withLabel('Weiss')
      .withCssClass('white-background'));
