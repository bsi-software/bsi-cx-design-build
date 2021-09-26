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
  let currentEnvironment = environment();
  let renderContext = options.renderContext;
  let resourcePath = slash(this.resourcePath);

  this.cacheable(false);

  currentEnvironment.on('template', async (name, from) => {
    try {
      let sourceContext = await currentEnvironment.getLoader().getSourceContext(name, from);
      let resolvedPath = path.resolve(sourceContext.getResolvedName());
      this.addDependency(resolvedPath);
    } catch (error) {
      // NOP
    }
  });

  currentEnvironment.render(resourcePath, renderContext).then((result) => {
    callback(null, `module.exports = ${JSON.stringify(result)};`);
  }).catch((error) => {
    callback(error);
  });
};
