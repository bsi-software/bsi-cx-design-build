import fs from 'fs';
import path from 'path';

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
