import path from 'path';
import fs from 'fs';
import Constant from './constant';
import {WEBSITE} from './design-type';

/**
 *
 * @param {string} name
 * @param {string} version
 * @param {string} [suffix='']
 */
export function getZipArchiveName(name, version, suffix) {
  let filename = [name, version, suffix]
    .filter(value => !!value)
    .join('-');
  return `${filename}.zip`;
}

/**
 * @param {ValidatedBuildConfig} config
 * @param {string|undefined} [suffix=undefined]
 */
export function buildPublicPath(config, suffix) {
  let path = '/';

  if (suffix) {
    path += suffix
      .trim()
      .replace(/^\//, '');
  }

  let pathSuffix = suffix ? path : '';

  if (config.targetVersion.legacyFormat && config.designType !== WEBSITE) {
    return '.' + pathSuffix;
  } else {
    return Constant.BSI_CX_DESIGN_BASE_URL + pathSuffix;
  }
}

/**
 * @param {*} obj
 * @returns {string}
 */
export function toString(obj) {
  return typeof obj === 'string' || obj instanceof String ? obj : obj.toString();
}

/**
 * @see {@link https://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript#answer-3561711}
 * @param {string} input
 * @returns {string}
 */
export function escapeRegex(input) {
  let pattern = /[-\/\\^$*+?.()|[\]{}]/g
  return input.replace(pattern, '\\$&');
}

/**
 * @param {string} str
 * @returns {string}
 */
export function ucfirst(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

/**
 * @param {string} mayRelativePath
 * @param {string|undefined} [basePathWhenRelative=undefined]
 * @returns {string}
 */
export function getAbsolutePath(mayRelativePath, basePathWhenRelative) {
  let absolutePath = mayRelativePath;

  if (!path.isAbsolute(absolutePath)) {
    let basePath = basePathWhenRelative || process.cwd();
    absolutePath = path.resolve(basePath, mayRelativePath);
  }

  return absolutePath;
}

/**
 * @param {string} str1
 * @param {string} str2
 */
export function findStringSimilarities(str1, str2) {
  let length = Math.min(str1.length, str2.length);
  let similarPart = '';

  for (let index = 0; index < length; index++) {
    let charToCheck = str1.charAt(index);
    if (charToCheck === str2.charAt(index)) {
      similarPart += charToCheck;
    }
  }

  return similarPart;
}

/**
 * @param {string} possibleWin32Path
 * @returns {string}
 */
export function toPosixPath(possibleWin32Path) {
  return possibleWin32Path.replace(/\\/g, path.posix.sep);
}

/**
 * @param {string} startFolder
 * @returns {string}
 */
export function findNodeModulesFolder(startFolder) {
  let nodeModulesFolder = path.join(startFolder, 'node_modules');

  if (fs.existsSync(nodeModulesFolder)) {
    return nodeModulesFolder;
  }

  let parentFolder = path.dirname(startFolder);

  if (startFolder === parentFolder) {
    throw new Error('node_modules folder not found');
  }

  return findNodeModulesFolder(parentFolder);
}
