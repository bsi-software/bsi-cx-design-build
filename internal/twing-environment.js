import path from 'path';

import { TwingEnvironment, TwingLoaderRelativeFilesystem, TwingFunction } from 'twing';

import Constant from './constant';

let twing = new TwingEnvironment(
  new TwingLoaderRelativeFilesystem()
);

twing.addFunction(new TwingFunction('bsi_cx_asset', (template, assetPath) => {
  let templatePath = template.source.getResolvedName();
  let templateDirPath = path.dirname(templatePath);
  let absoluteAssetPath = path.resolve(templateDirPath, assetPath).replace(/\\/g, path.posix.sep);
  return Promise.resolve(`@ref(${absoluteAssetPath})`);
}, [], { needs_template: true }));

twing.addFunction(new TwingFunction('bsi_cx_css_href', () => {
  return Promise.resolve(Constant.BSI_CX_CSS_HREF);
}, [], {}));

twing.addFunction(new TwingFunction('bsi_cx_css_inline', () => {
  return Promise.resolve(Constant.BSI_CX_CSS_INLINE);
}, [], {}));

module.exports = twing;
