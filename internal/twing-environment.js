const path = require('path');

const { TwingEnvironment, TwingLoaderRelativeFilesystem, TwingFunction } = require('twing');

const constants = require('./constants');

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
  return Promise.resolve(constants.BSI_CX_CSS_HREF);
}, [], {}));

twing.addFunction(new TwingFunction('bsi_cx_css_inline', () => {
  return Promise.resolve(constants.BSI_CX_CSS_INLINE);
}, [], {}));

module.exports = twing;
