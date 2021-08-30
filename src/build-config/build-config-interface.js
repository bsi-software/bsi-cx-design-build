/**
 * @interface
 */
export default class BuildConfigInterface {
  /**
   * @return {string}
   */
  get name() {
  }

  /**
   * @return {string}
   */
  get version() {
  }

  /**
   * @return {Version}
   */
  get targetVersion() {
  }

  /**
   * @return {DesignType}
   */
  get designType() {
  }

  /**
   * @return {string}
   */
  get rootPath() {
  }

  /**
   * @return {string}
   */
  get outputPath() {
  }

  /**
   * @return {string|undefined}
   */
  get propertiesFilePath() {
  }

  /**
   * @return {number}
   */
  get devServerPort() {
  }

  /**
   * @return {boolean}
   */
  get hashZipFiles() {
  }

  /**
   * @return {ModuleConfig[]}
   */
  get modules() {
  }

  /**
   * @return {string}
   */
  get modulesRootPath() {
  }

  /**
   * @return {[{}]}
   */
  get additionalFilesToCopy() {
  }

  /**
   * @return {boolean}
   */
  get sourceMapEnabled() {
  }

  /**
   * @return {string}
   */
  get staticFileFolderPath() {
  }

  /**
   * @return {string}
   */
  get copyAssetsFolderPath() {
  }

  /**
   * @return {{}[]}
   */
  get webpackRules() {
  }

  /**
   * @return {Object[]}
   */
  get webpackPlugins() {
  }
}
