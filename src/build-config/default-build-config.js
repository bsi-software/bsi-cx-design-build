import {CX_22_0} from '../version';
import {LANDINGPAGE} from '../design-type';

/**
 * @implements {BuildConfigInterface}
 */
export default class DefaultBuildConfig {
  get additionalFilesToCopy() {
    return [];
  }

  get copyAssetsFolderPath() {
    return 'assets';
  }

  get designType() {
    return LANDINGPAGE;
  }

  get devServerPort() {
    return 9000;
  }

  get hashZipFiles() {
    return true;
  }

  get modules() {
    return [];
  }

  get modulesRootPath() {
    return 'modules';
  }

  get name() {
    return undefined;
  }

  get outputPath() {
    return 'dist';
  }

  get propertiesFilePath() {
    return undefined;
  }

  get rootPath() {
    return undefined;
  }

  get sourceMapEnabled() {
    return true;
  }

  get staticFileFolderPath() {
    return 'static';
  }

  get targetVersion() {
    return CX_22_0;
  }

  get version() {
    return '1.0.0';
  }

  get webpackPlugins() {
    return [];
  }

  get webpackRules() {
    return [];
  }
}
