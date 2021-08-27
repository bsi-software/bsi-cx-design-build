import 'source-map-support/register';

import * as Version from '../src/version';
import * as DesignType from '../src/design-type';
import BuildConfig from '../src/build-config/build-config';
import ModuleConfig from '../src/build-config/module-config';
import WebpackConfigBuilder from '../src/webpack-config-builder';

export {
  Version,
  DesignType,
  BuildConfig,
  ModuleConfig,
  WebpackConfigBuilder,
};
