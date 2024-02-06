const path = require('path');
const webpack = require('webpack');

const {BuildConfig, ModuleConfig, WebpackConfigBuilder, Version, DesignType} = require('@bsi-cx/design-build');

module.exports = WebpackConfigBuilder.fromConfigs(
  new BuildConfig()
    .withName('website')
    .withVersion('1.0.0-alpha')
    .withDesignType(DesignType.WEBSITE)
    .withTargetVersion(Version.CX_22_0)
    .withRootPath(path.resolve(__dirname, 'templates', 'website'))
    .withPropertiesFilePath('properties.js')
    .withAssetResourceRuleFilename('static/[name]-xxx-[contenthash][ext]')
    .withAdditionalStaticAssetFileExtensions('md')
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
        .withPath('alternate.js')),
  new BuildConfig()
    .withName('landingpage')
    .withVersion('1.0.0-alpha')
    .withDesignType(DesignType.LANDINGPAGE)
    .withTargetVersion(Version.CX_23_2)
    .withRootPath(path.resolve(__dirname, 'templates', 'landingpage'))
    .withPropertiesFilePath('properties.js')
    .withAssetResourceRuleFilename('static/[name]-xxx-[pathhash][ext]')
    .withAdditionalStaticAssetFileExtensions('md')
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
