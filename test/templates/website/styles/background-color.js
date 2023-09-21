const {cx, Style} = require('@bsi-cx/design-build');
const nls = require('../nls');

/**
 * @type {Style}
 */
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
