/**
 * @interface
 */
export default class BuildConfigInterface {
  /**
   * @returns {string}
   */
  get name() {
  }

  /**
   * @returns {string}
   */
  get version() {
  }

  /**
   * @returns {Version}
   */
  get targetVersion() {
  }

  /**
   * @returns {DesignType}
   */
  get designType() {
  }

  /**
   * @returns {string}
   */
  get rootPath() {
  }

  /**
   * @returns {string}
   */
  get outputPath() {
  }

  /**
   * @returns {string|undefined}
   */
  get propertiesFilePath() {
  }

  /**
   * @returns {number}
   */
  get devServerPort() {
  }

  /**
   * @returns {boolean}
   */
  get hashZipFiles() {
  }

  /**
   * @returns {ModuleConfig[]}
   */
  get modules() {
  }

  /**
   * @returns {string}
   */
  get modulesRootPath() {
  }

  /**
   * @returns {[{}]}
   */
  get additionalFilesToCopy() {
  }

  /**
   * @returns {boolean}
   */
  get sourceMapEnabled() {
  }
}
