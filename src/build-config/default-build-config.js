import { CX_22_0 } from '../version';
import { LANDINGPAGE } from '../design-type';
import DistFolder from '../dist-folder';

/** @typedef {import('./build-config-interface').default} BuildConfigInterface */

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

  get assetResourceRuleFilename() {
    return `${DistFolder.STATIC}/[name]-[pathhash][ext]`;
  }

  get additionalStaticAssetFileExtensions() {
    return [];
  }

  get designType() {
    return LANDINGPAGE;
  }

  get devServerPort() {
    return 'auto';
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
    return false;
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

  get postcssEnabled() {
    return false;
  }
}
