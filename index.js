import 'source-map-support/register';

import Version from './src/version';
import DesignType from './src/design-type';
import BuildConfig from './src/build-config';
import WebpackConfigBuilder from './src/webpack-config-builder';
import BsiCxWebpackPlugin from './src/bsi-cx-webpack-plugin';
import BsiCxWebpackZipHashPlugin from './src/bsi-cx-webpack-zip-hash-plugin';
import BsiCxWebpackLegacyDesignPlugin from './src/bsi-cx-webpack-legacy-design-plugin';

export {
  Version,
  DesignType,
  BuildConfig,
  WebpackConfigBuilder,
  BsiCxWebpackPlugin,
  BsiCxWebpackZipHashPlugin,
  BsiCxWebpackLegacyDesignPlugin
};
