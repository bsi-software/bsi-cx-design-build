import path from 'path';

import CssColor from './css-color';
import CssUrl from './css-url';
import CssDimension from './css-dimension';
import CssStyle from './css-style';

/**
 * Create a <code>url()</code> object. The supplied path segments will be passed to <code>path.resolve</code>
 * to get the correct path. <strong>It is recommended to pass an absolute path.</strong>
 * Use the <code>__dirname</code constant as first path segment.
 *
 * @example
 * css.url(__dirname, 'static', 'image.png')
 * @param {...string} pathSegments - The path segments.
 * @returns {CssUrl}
 */
export function url(...pathSegments) {
  let resolvedPath = path.resolve(...pathSegments);
  return new CssUrl(resolvedPath);
}

/**
 * Create a <code>url()</code> containing a base64 encoded data-uri.
 *
 * @example
 * css.dataUri(__dirname, 'static', 'image.png')
 * @see {@link url} for details
 * @param {...string} pathSegments - The path segments.
 * @returns {CssUrl}
 */
export function dataUri(...pathSegments) {
  let resolvedPath = path.resolve(...pathSegments);
  return new CssUrl(resolvedPath, true);
}

/**
 * Create a CSS color value. You can pass one, three or four values. Take a look at the examples to find out more
 * about the accepted input.
 *
 * @example
 * css.color('red'); // color string
 * css.color('#ff00ff'); // normal hex format
 * css.color('#ff00ff99'); // rgba as hex
 * css.color('rgb(255, 0, 255)'); // rgb format
 * css.color('rgba(255, 0, 255, 0.1)'); // rgba format
 * css.color(255, 0, 255); // pass each channel as number
 * css.color(255, 0, 255, 0.5); // pass each channel as numeric value
 * @param {...string|number} channels - The color definition in one of the allowed forms.
 * @returns {CssColor|string}
 */
export function color(...channels) {
  switch (channels.length) {
    case 1:
      let color = channels.shift();
      let parser = CssColor.getParser(color);
      return !!parser ? parser(color) : color;
    case 3:
    case 4:
      return CssColor.fromRGB(...channels);
    default:
      throw new Error(`unable to parse color definition [${channels.join(',')}]`);
  }
}

/**
 * Create a CSS numeric value with a given unit. Take a look at the example to find out more about the accepted input.
 *
 * @example
 * css.number('10px');
 * css.number('10em');
 * css.number('10ex');
 * css.number('10ch');
 * css.number('10rem');
 * css.number('10in');
 * css.number('10cm');
 * css.number('10mm');
 * css.number('10pc');
 * css.number('10pt');
 * css.number('10vw');
 * css.number('10vh');
 * css.number('10vmin');
 * css.number('10vmax');
 * css.number('10%');
 * @param {string} value - The value as string.
 * @returns {CssDimension|string}
 */
export function number(value) {
  let parser = CssDimension.getParser(value);
  return !!parser ? parser(value) : value;
}

/**
 * Create a CSS string value with no quotes. Take a look at the example to find out more about the accepted input.
 *
 * @example
 * css.style('solid');
 * 
 * @param {string} value - The value as string.
 * @returns {CssStyle|string}
 */
export function style(value) {
  let parser = CssStyle.getParser(value);
  return !!parser ? parser(value) : value;
}
