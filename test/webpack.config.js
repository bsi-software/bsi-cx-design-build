const path = require('path');
const webpack = require('webpack');

const {BuildConfig, ModuleConfig, WebpackConfigBuilder, Version, DesignType} = require('@bsi-cx/design-build');

module.exports = WebpackConfigBuilder.fromConfigs(
  new BuildConfig()
    .withName('landingpage')
    .withVersion('1.0.0-alpha')
    .withDesignType(DesignType.WEBSITE)
    .withTargetVersion(Version.CX_1_3)
    .withRootPath(path.resolve(__dirname, 'templates', 'landingpage'))
    .withPropertiesFilePath('properties.js')
    .withWebpackPlugins(new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }))
    .withModules(
      new ModuleConfig()
        .withName('main')
        .withPath('main.js'),
      new ModuleConfig()
        .withName('alternate')
        .withPath('alternate.js')));
