import path from 'path';
import CssColor from './css-color';

/**
 * @param {string} pathSegments
 * @return {string}
 */
export function url(...pathSegments) {
  let resolvedPath = path.resolve(...pathSegments);
  return `url(${resolvedPath})`;
}

/**
 * @param {...string|number} channels
 * @return {CssColor|string}
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
