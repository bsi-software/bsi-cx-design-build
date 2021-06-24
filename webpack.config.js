const path = require('path');

const webpackConfigBuilder = require('./internal/webpack-config-builder');

module.exports = [
  webpackConfigBuilder('landingpage', path.resolve(__dirname, 'template', 'landingpage'))
];
