import fs from 'fs';
import path from 'path';

import Constant from './constant';

/**
 * 
 * @param {string} rootPath 
 * @param {string} name 
 * @returns {{import:string,filename:string}}
 */
export function evaluateEntryTemplate(rootPath, name) {
  let twigFilePath = path.resolve(rootPath, `${name}.twig`);
  let hbsFilePath = path.resolve(rootPath, `${name}.hbs.twig`);
  let isTwig = fs.existsSync(twigFilePath);
  let extension = isTwig ? 'html' : 'hbs';
  return {
    import: isTwig ? twigFilePath : hbsFilePath,
    filename: `${name}.${extension}`
  };
}

/**
 * @param {{}} modules 
 * @returns {{import:string,filename:string}}
 */
export function getJavaScriptModuleEntries(modules) {
  let entries = {};
  for (const [name, filePath] of Object.entries(modules)) {
    entries[name] = {
      import: path.resolve(filePath),
      filename: 'modules/[name]-[contenthash].js',
      runtime: Constant.BSI_CX_MODULE_RUNTIME_PATH
    };
  }
  return entries;
}

/**
 * @param {{}} model 
 * @returns {{}}
 */
export function getTwingLoaderOptions(model) {
  return {
    environmentModulePath: require.resolve('./twing-environment.js'),
    renderContext: {
      properties: model,
      designBaseUrl: Constant.BSI_CX_DESIGN_BASE_URL
    }
  };
}

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
 * @param {string} assetFilename 
 * @returns {boolean}
 */
export function performanceAssetFilter(assetFilename) {
  let excludedAssets = [
    'design.json',
  ];
  let excludedExtensions = /\.(map|zip|html|hbs)$/;

  return !excludedAssets.includes(assetFilename) && !excludedExtensions.test(assetFilename);
}
