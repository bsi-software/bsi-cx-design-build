import path from 'path';


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
