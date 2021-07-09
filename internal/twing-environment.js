const path = require('path');

const { TwingEnvironment, TwingLoaderRelativeFilesystem, TwingFunction } = require('twing');

const placeholders = require('./placeholders');

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
  return Promise.resolve(placeholders.bsiCxCssHref);
}, [], {}));

twing.addFunction(new TwingFunction('bsi_cx_css_inline', () => {
  return Promise.resolve(placeholders.bsiCxCssInline);
}, [], {}));

module.exports = twing;
