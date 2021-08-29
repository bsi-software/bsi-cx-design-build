import path from 'path';

import CssColor from './css-color';
import CssUrl from './css-url';

/**
 * @param {...string} pathSegments
 * @return {CssUrl}
 */
export function url(...pathSegments) {
  let resolvedPath = path.resolve(...pathSegments);
  return new CssUrl(resolvedPath);
}

/**
 * @param {...string} pathSegments
 * @return {CssUrl}
 */
export function dataUri(...pathSegments) {
  let resolvedPath = path.resolve(...pathSegments);
  return new CssUrl(resolvedPath, true);
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
