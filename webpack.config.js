const path = require('path');

const webpackConfigBuilder = require('./internal/webpack-config-builder');

const webpackConfigs = [
  webpackConfigBuilder('landingpage', path.resolve(__dirname, 'template', 'landingpage')),
  webpackConfigBuilder('email', path.resolve(__dirname, 'template', 'email')),
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
