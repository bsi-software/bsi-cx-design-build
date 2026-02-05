const { cx, Style } = require("@bsi-cx/design-build");
const nls = require("../nls");

/**
 * @type {Style}
 */
module.exports = cx.style
  .withIdentifier("background-color")
  .withLabel(nls.background)
  .withCssClassObject({
    "black-background": nls.black,
    "blue-background": "Blau",
    "red-background": nls.red,
    "white-background": "Weiß",
  });
