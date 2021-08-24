const path = require('path');

const { BuildConfig, WebpackConfigBuilder } = require('@bsi-cx/design-build');

module.exports = WebpackConfigBuilder.fromConfigs(
  new BuildConfig()
    .withName('landingpage')
    .withRootPath(path.resolve(__dirname, 'templates', 'landingpage'))
    .withModule('main', path.resolve(__dirname, 'templates', 'landingpage', 'modules', 'main.js'))
);
