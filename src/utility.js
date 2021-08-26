import path from 'path';

import AbstractConstant from './abstract-constant';
import BuildConfig from './build-config';
import Constant from './constant';
import {WEBSITE} from './design-type';


export class StaticJavaScriptCondition {
  /**
   * @type {RegExp}
   */
  static FILE_EXTENSION = /\.js/i;

  /**
   * @param {string} root
   * @param {string} file
   * @returns {boolean}
   */
  static isInsideStaticFolder(root, file) {
    let staticFilePath = path.resolve(root, 'static') + path.sep;
    return file.startsWith(staticFilePath);
  }

  /**
   * @param {string} root
   * @param {string} file
   * @returns {boolean}
   */
  static test(root, file) {
    return StaticJavaScriptCondition.isInsideStaticFolder(root, file)
      && StaticJavaScriptCondition.FILE_EXTENSION.test(file);
  }
}

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
 * @param {BuildConfig} config
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
 * @return {string}
 */
export function toString(obj) {
  return typeof obj === 'string' || obj instanceof String ? obj : obj.toString();
}

/**
 * @param {[string|number]} arr
 * @return {string}
 */
export function scalarArrayToList(arr) {
  return arr.join(',');
}

/**
 * @param {*} v
 * @return {*}
 */
export function identity(v) {
  return v;
}

/**
 * @param {string|number|boolean} v
 * @return {string|number|boolean}
 */
export function scalarIdentity(v) {
  return v;
}

/**
 * @param {AbstractConstant} constant
 * @return {string}
 */
export function constantObjectValue(constant) {
  return constant.value;
}
