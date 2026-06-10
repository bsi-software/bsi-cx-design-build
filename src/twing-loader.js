import 'source-map-support/register';

import path from 'path';
import environment from './twing-environment';

/**
 * Quick and dirty workaround to use slash.
 *
 * @see {@link https://www.npmjs.com/package/slash}
 * @param {string} pathToConvert
 * @returns {string}
 */
function slash(pathToConvert) {
  const isExtendedLengthPath = /^\\\\\?\\/.test(pathToConvert);
  const hasNonAscii = /[^\u0000-\u0080]+/.test(pathToConvert); // eslint-disable-line no-control-regex

  if (isExtendedLengthPath || hasNonAscii) {
    return pathToConvert;
  }

  return pathToConvert.replace(/\\/g, '/');
}

/**
 * Since the original twing-loader does not support Webpack 5 (not working property, memory leaks, ...).
 *
 * @param {string} source
 */
export default function (source) {
  let callback = this.async();
  let options = this.getOptions();
  let templateRoot = slash(options.templateRoot);
  let renderContext = options.renderContext;
  let currentEnvironment = environment(templateRoot, renderContext);
  let resourcePath = slash(this.resourcePath);

  this.cacheable(false);
  this.addDependency(path.resolve(resourcePath));

  if (currentEnvironment.loader?.resolve) {
    const originalResolve = currentEnvironment.loader.resolve.bind(currentEnvironment.loader);

    currentEnvironment.loader.resolve = async (name, from) => {
      let resolved = await originalResolve(name, from);

      if (resolved) {
        this.addDependency(path.resolve(resolved));
      }

      return resolved;
    };
  }

  currentEnvironment.render(resourcePath, renderContext).then((result) => {
    callback(null, `module.exports = ${JSON.stringify(result)};`);
  }).catch((error) => {
    callback(error);
  });
};
