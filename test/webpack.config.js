const path = require('path');

const {BuildConfig, WebpackConfigBuilder, Version, DesignType} = require('@bsi-cx/design-build');

module.exports = WebpackConfigBuilder.fromConfigs(
  new BuildConfig()
    .withName('landingpage')
    .withVersion('1.0.0-alpha')
    .withDesignType(DesignType.LANDINGPAGE)
    .withTargetVersion(Version.STUDIO_1_2)
    .withRootPath(path.resolve(__dirname, 'templates', 'landingpage'))
    .withModule('main', path.resolve(__dirname, 'templates', 'landingpage', 'modules', 'main.js'))
);
