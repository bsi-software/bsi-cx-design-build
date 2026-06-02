import BuildConfig from '../src/webpack-config-builder'

const buildConfig = new BuildConfig()
  .withName('website')
  .withVersion('1.0.0-alpha')
  .withDesignType(DesignType.WEBSITE)
  .withTargetVersion(Version.CX_22_0)
  .withRootPath(path.resolve(__dirname, 'templates', 'website'))
  .withPropertiesFilePath('properties.js')
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
      .withPath('alternate.js'));
  console.log(buildConfig);
