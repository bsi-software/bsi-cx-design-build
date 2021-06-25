const { resolve } = require('path');
const path = require('path');

const { TwingEnvironment, TwingLoaderRelativeFilesystem, TwingFunction } = require('twing');

let twing = new TwingEnvironment(
  new TwingLoaderRelativeFilesystem()
);
twing.addFunction(new TwingFunction('asset', (template, assetPath) => {
  let templatePath = template.source.getResolvedName();
  let templateDirPath = path.dirname(templatePath);
  let absoluteAssetPath = path.resolve(templateDirPath, assetPath).replace(/\\/g, path.posix.sep);
  return Promise.resolve(absoluteAssetPath);
}, [], { needs_template: true }));

module.exports = twing;
