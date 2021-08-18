import path from 'path';

import WebpackConfigBuilder from './src/webpack-config-builder';
import BuildConfig from './src/build-config';


export default WebpackConfigBuilder.fromConfigs(
  new BuildConfig()
    .withName('landingpage')
    .withVersion('1.0.0')
    .withRootPath(path.resolve(__dirname, 'template', 'landingpage'))
    .withModule('main', path.resolve(__dirname, 'template', 'landingpage', 'modules', 'main.js'))
    .withModule('additional', path.resolve(__dirname, 'template', 'landingpage', 'modules', 'additional.js'))
);
