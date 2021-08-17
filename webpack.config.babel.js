const path = require('path');

const webpackConfigBuilder = require('./src/webpack-config-builder');
const BuildConfig = require('./src/build-config');

const webpackConfigs = [
  webpackConfigBuilder('landingpage', '1.0.0', path.resolve(__dirname, 'template', 'landingpage'), {
    main: path.resolve(__dirname, 'template', 'landingpage', 'modules', 'main.js'),
    additional: path.resolve(__dirname, 'template', 'landingpage', 'modules', 'additional.js')
  }),
];

let devServerPort = undefined;

module.exports = webpackConfigs.map((config, index) => {
  if (index === 0) {
    devServerPort = config.devServer.port;
  } else if (config.devServer.port === devServerPort) {
    delete config.devServer;
  }
  return config;
});
