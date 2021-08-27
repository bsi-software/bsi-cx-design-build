import {DesignType, LANDINGPAGE} from '../design-type';
import {CX_22_0, Version} from '../version';
import ObjectCloner from '../object-cloner';
import ModuleConfig from './module-config';
import BuildConfigInterface from './build-config-interface';
import ValidatedBuildConfig from './validated-build-config';
import BuildConfigValidator from './build-config-validator';

/**
 * The configuration object for the build of one template.
 *
 * @implements {BuildConfigInterface}
 */
export default class BuildConfig {
  /**
   * @type {string}
   * @private
   */
  _name = undefined;
  /**
   * @type {string}
   * @private
   */
  _version = '1.0.0';
  /**
   * @type {Version}
   * @private
   */
  _targetVersion = CX_22_0;
  /**
   * @type {DesignType}
   * @private
   */
  _designType = LANDINGPAGE;
  /**
   * @type {string}
   * @private
   */
  _rootPath = undefined;
  /**
   * @type {string}
   * @private
   */
  _outputPath = undefined;
  /**
   * @type {string|undefined}
   * @private
   */
  _propertiesFilePath = undefined;
  /**
   * @type {number}
   * @private
   */
  _devServerPort = 9000;
  /**
   * @type {boolean}
   * @private
   */
  _hashZipFiles = true;
  /**
   * @type {ModuleConfig[]}
   * @private
   */
  _modules = [];
  /**
   * @type {string}
   * @private
   */
  _modulesRootPath = undefined;
  /**
   * @type {[{}]}
   * @private
   */
  _additionalFilesToCopy = [];
  /**
   * @type {boolean}
   * @private
   */
  _sourceMapEnabled = true;

  /**
   * @returns {string}
   */
  get name() {
    return this._name;
  }

  /**
   * @returns {string}
   */
  get version() {
    return this._version;
  }

  /**
   * @returns {Version}
   */
  get targetVersion() {
    return this._targetVersion;
  }

  /**
   * @returns {DesignType}
   */
  get designType() {
    return this._designType;
  }

  /**
   * @returns {string}
   */
  get rootPath() {
    return this._rootPath;
  }

  /**
   * @returns {string}
   */
  get outputPath() {
    return this._outputPath;
  }

  /**
   * @returns {string|undefined}
   */
  get propertiesFilePath() {
    return this._propertiesFilePath;
  }

  /**
   * @returns {number}
   */
  get devServerPort() {
    return this._devServerPort;
  }

  /**
   * @returns {boolean}
   */
  get hashZipFiles() {
    return this._hashZipFiles;
  }

  /**
   * @returns {ModuleConfig[]}
   */
  get modules() {
    return this._modules;
  }

  /**
   * @returns {string}
   */
  get modulesRootPath() {
    return this._modulesRootPath;
  }

  /**
   * @returns {[{}]}
   */
  get additionalFilesToCopy() {
    return this._additionalFilesToCopy;
  }

  /**
   * @returns {boolean}
   */
  get sourceMapEnabled() {
    return this._sourceMapEnabled;
  }

  /**
   * The name of this template, e.g. landingpage. This will be included in the name of the resulting ZIP file in the dist folder.
   *
   * @param {string} name
   * @returns {BuildConfig}
   */
  withName(name) {
    this._name = name;
    return this;
  }

  /**
   * The version of this template, e.g. 1.0.1. This will be included in the name of the resulting ZIP file in the dist folder.
   *
   * @param {string} version
   * @returns {BuildConfig}
   */
  withVersion(version) {
    this._version = version;
    return this;
  }

  /**
   * The application version of BSI CX (or BSI Studio) this design is built for.
   *
   * @see Checkout {@link Version} for available versions.
   * @param {Version} version
   * @returns
   */
  withTargetVersion(version) {
    this._targetVersion = version;
    return this;
  }

  /**
   * The type of this design (e.g. email or landingpage).
   *
   * @see Checkout {@link DesignType} for available types.
   * @param {DesignType} type
   * @returns
   */
  withDesignType(type) {
    this._designType = type;
    return this;
  }

  /**
   * The path to the root folder of this template. This folder contains the source code of your template.
   *
   * @param {string} rootPath
   * @returns {BuildConfig}
   */
  withRootPath(rootPath) {
    this._rootPath = rootPath;
    return this;
  }

  /**
   * A custom output path to use. Default: dist/{name}.
   *
   * @param {string} outputPath
   * @returns {BuildConfig}
   */
  withOutputPath(outputPath) {
    this._outputPath = outputPath;
    return this;
  }

  /**
   * The data properties file for your Twig templates. This file will be required and the contents of this file will be
   * available as "properties" variable inside your Twig templates.
   *
   * @param {string} propertiesFilePath
   * @returns {BuildConfig}
   */
  withPropertiesFilePath(propertiesFilePath) {
    this._propertiesFilePath = propertiesFilePath;
    return this;
  }

  /**
   * A TCP port number to use for the development server. The default port is 9000. Be aware,
   * that you don't have to configure a separate port for each template.
   *
   * @param {number} devServerPort
   * @returns {BuildConfig}
   */
  withDevServerPort(devServerPort) {
    this._devServerPort = devServerPort;
    return this;
  }

  /**
   * Add a unique hash value to the name of the resulting ZIP file.
   *
   * @param {boolean} hashZipFiles
   * @returns {BuildConfig}
   */
  withHashZipFiles(hashZipFiles) {
    this._hashZipFiles = !!hashZipFiles;
    return this;
  }

  /**
   * Add additional Java Script modules.
   *
   * @param {...ModuleConfig} modules
   * @returns {BuildConfig}
   */
  withModules(...modules) {
    this._modules = modules;
    return this;
  }

  /**
   * Absolute path to the modules folder.
   *
   * @param {string} modulesRootPath
   * @returns {BuildConfig}
   */
  withModulesRootPath(modulesRootPath) {
    this._modulesRootPath = modulesRootPath;
    return this;
  }

  /**
   * Add additional files to copy to the output folder.
   *
   * @param {[{}]} additionalFilesToCopy
   * @returns {BuildConfig}
   */
  withAdditionalFilesToCopy(additionalFilesToCopy) {
    this._additionalFilesToCopy = additionalFilesToCopy;
    return this;
  }

  /**
   * Add a single configuration for additional files to copy to the output folder.
   *
   * @param {{}} additionalFileToCopy
   * @returns {BuildConfig}
   */
  withAdditionalFileToCopy(additionalFileToCopy) {
    this._additionalFilesToCopy.push(additionalFileToCopy);
    return this;
  }

  /**
   * Enable or disable source maps.
   *
   * @param {boolean} sourceMapEnabled
   * @returns {BuildConfig}
   */
  withSourceMapEnabled(sourceMapEnabled) {
    this._sourceMapEnabled = sourceMapEnabled;
    return this;
  }

  /**
   * Create a clone of this copy. Can be useful if different templates should be created from the same sources.
   * A shallow clone will be created by default. This means nested objects will still reference the same origin.
   *
   * @param {boolean|undefined} [shallow=true]
   * @return {BuildConfig}
   */
  clone(shallow) {
    return ObjectCloner.clone(this, new BuildConfig(), shallow);
  }

  /**
   * @return {ValidatedBuildConfig}
   */
  validate() {
    return BuildConfigValidator.validate(this);
  }
}
