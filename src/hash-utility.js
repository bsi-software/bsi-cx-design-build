import {createHash} from 'crypto';
import path from 'path';

String.prototype.hashCode = function() {
  let hash = 0,
    i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

/**
 * @param {string} content
 * @returns {string}
 */
export function _createContentHash(content) {
  return createHash('sha256')
    .update(content)
    .digest('hex')
    .substr(0, _BsiCxWebpackPlugin.ELEMENT_FILE_HASH_LENGTH);
}

/**
 * @param {string} filePath
 * @returns {number}
 */
export function _createPathHash(filePath) {
  let pathHash = filePath;
  if (path.isAbsolute(filePath)) {
    let test = filePath.split('templates');
    pathHash = path.relative(test[0] + '\\templates\\', filePath)
  }
  let newHash = pathHash.toString().hashCode();
  if (newHash < 0) {
    newHash *= -1;
  }
  return newHash;
}
