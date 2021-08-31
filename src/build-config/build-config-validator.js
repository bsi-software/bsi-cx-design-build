import ValidationError from './validation-error';
import {getAbsolutePath, ucfirst} from '../utility';
import ObjectCloner from '../object-cloner';
import slugify from 'slugify';
import fs from 'fs';
import path from 'path';
import ModuleConfig from './module-config';
import ValidatedBuildConfig from './validated-build-config';
import {Version} from '../version';
import {DesignType} from '../design-type';
import DefaultBuildConfig from './default-build-config';

/**
 * @typedef {import('./build-config').default} BuildConfig
 */

export default class BuildConfigValidator {
  /**
   * @type {DefaultBuildConfig}
   * @private
   */
  _defaultBuildConfig = new DefaultBuildConfig();
  /**
   * @type {BuildConfig}
   * @private
   */
  _buildConfig = undefined;
  /**
   * @type {ValidatedBuildConfig}
   * @private
   */
  _validatedConfig = undefined;

  /**
   * @param {BuildConfig} buildConfig
   */
  constructor(buildConfig) {
    /**
     * @type {DefaultBuildConfig}
     * @private
     */
    this._defaultBuildConfig = new DefaultBuildConfig();
    /**
     * @type {BuildConfig}
     * @private
     */
    this._buildConfig = buildConfig;
    /**
     * @type {ValidatedBuildConfig}
     * @private
     */
    this._validatedConfig = new ValidatedBuildConfig();
  }

  /**
   * @returns {DefaultBuildConfig}
   */
  get defaultBuildConfig() {
    return this._defaultBuildConfig;
  }

  /**
   * @returns {BuildConfig}
   */
  get buildConfig() {
    return this._buildConfig;
  }

  /**
   * @returns {ValidatedBuildConfig}
   */
  get validatedConfig() {
    return this._validatedConfig;
  }

  /**
   * @private
   */
  _validate() {
    // invocation order is relevant
    this._validateProperty('name', String);
    this._validateProperty('version', String);
    this._validateProperty('targetVersion', Version);
    this._validateProperty('designType', DesignType);
    this._validateProperty('rootPath', String);
    this._validateProperty('outputPath', String);
    this._validateProperty('propertiesFilePath', String);
    this._validateProperty('devServerPort', Number);
    this._validateProperty('hashZipFiles', Boolean);
    this._validateProperty('modulesRootPath', String);
    this._validateProperty('modules', Array);
    this._validateProperty('additionalFilesToCopy', Array);
    this._validateProperty('sourceMapEnabled', Boolean);
    this._validateProperty('staticFileFolderPath', String);
    this._validateProperty('copyAssetsFolderPath', String);
    this._validateProperty('webpackPlugins', Array);
    this._validateProperty('webpackRules', Array);
  }

  /**
   * @param {string} name
   * @param {object} type
   */
  _validateProperty(name, type) {
    let property = '_' + name;
    let value = this.buildConfig[name];
    let defaultValue = this.defaultBuildConfig[name];
    let required = defaultValue === undefined;

    if (value !== undefined && !value instanceof type) {
      throw new ValidationError(`${name} must be ${type.constructor.name}`);
    }

    if (required && !value) {
      throw new ValidationError(`${name} is required and can not be empty`);
    }

    if (value === undefined) {
      value = defaultValue;
    }

    let validatedValue = value;
    let propertyValidator = `_validate${ucfirst(name)}`;
    if (typeof this[propertyValidator] === 'function') {
      validatedValue = this[propertyValidator](validatedValue, name);
    }

    this.validatedConfig[property] = ObjectCloner.cloneValue(validatedValue);
  }

  /**
   * @param {string} name
   * @param {string} property
   * @returns {string}
   * @private
   */
  _validateName(name, property) {
    let slug = slugify(name);

    if (slug !== name) {
      throw new ValidationError(`The configuration for ${property} contains invalid characters. Recommendation: Use ${slug} instead of "${name}"`);
    }

    return slug;
  }

  /**
   * @param {string} version
   * @param {string} property
   * @returns {string}
   * @private
   */
  _validateVersion(version, property) {
    let slug = slugify(version);

    if (slug !== version) {
      throw new ValidationError(`The configuration for ${property} contains invalid characters. Recommendation: Use ${slug} instead of "${version}"`);
    }

    return slug;
  }

  /**
   * @param {string} rootPath
   * @param {string} property
   * @returns {string}
   * @private
   */
  _validateRootPath(rootPath, property) {
    let validatedPath = getAbsolutePath(rootPath);

    if (!fs.existsSync(validatedPath)) {
      throw new ValidationError(`The configuration for ${property} points to a unknown location: ${validatedPath}`);
    }

    if (!fs.statSync(validatedPath).isDirectory()) {
      throw new ValidationError(`The configuration for ${property} should point to a directory: ${validatedPath}`);
    }

    return validatedPath;
  }

  /**
   * @param {string|undefined} outputPath
   * @param {string} property
   * @private
   */
  _validateOutputPath(outputPath, property) {
    let defaultOutputPath = path.resolve(process.cwd(), this._defaultBuildConfig.outputPath, this.validatedConfig.name);
    let validatedPath = outputPath || defaultOutputPath;

    return getAbsolutePath(validatedPath);
  }

  /**
   * @param {string|undefined} propertiesFilePath
   * @param {string} property
   * @private
   */
  _validatePropertiesFilePath(propertiesFilePath, property) {
    if (!propertiesFilePath) {
      return undefined;
    }

    let validatedPath = getAbsolutePath(propertiesFilePath, this.validatedConfig.rootPath);

    if (!fs.existsSync(validatedPath)) {
      throw new ValidationError(`The configuration for ${property} points to a unknown location: ${validatedPath}`);
    }

    if (!fs.statSync(validatedPath).isFile()) {
      throw new ValidationError(`The configuration for ${property} should point to a file: ${validatedPath}`);
    }

    return validatedPath;
  }

  /**
   * @param {string} modulesRootPath
   * @param {string} property
   * @private
   */
  _validateModulesRootPath(modulesRootPath, property) {
    let validatedPath = getAbsolutePath(modulesRootPath, this.validatedConfig.rootPath);

    if (this._buildConfig.modulesRootPath === undefined && this._buildConfig.modules.length === 0) {
      return validatedPath;
    }

    if (!fs.existsSync(validatedPath)) {
      throw new ValidationError(`The configuration for ${property} points to a unknown location: ${validatedPath}`);
    }

    if (!fs.statSync(validatedPath).isDirectory()) {
      throw new ValidationError(`The configuration for ${property} should point to a directory: ${validatedPath}`);
    }

    return validatedPath;
  }

  /**
   * @param {ModuleConfig[]} modules
   * @param {string} property
   * @private
   */
  _validateModules(modules, property) {
    /**
     * @type {Set<string>}
     */
    let moduleNames = new Set();
    /**
     * @type {ModuleConfig[]}
     */
    let validatedModules = [];

    for (let module of modules) {
      let validatedName = module.name;
      if (moduleNames.has(validatedName)) {
        throw new ValidationError(`The configuration for ${property} contains an invalid module name: "${module.name}" is already in use for ${module.path}, use a different name.`);
      }

      moduleNames.add(validatedName);

      let validatedPath = getAbsolutePath(module.path, this.validatedConfig.modulesRootPath);
      if (!fs.existsSync(validatedPath)) {
        throw new ValidationError(`The module configuration for "${validatedName}" points to a unknown location: ${validatedPath}`);
      }

      if (!fs.statSync(validatedPath).isFile()) {
        throw new ValidationError(`The module configuration for "${validatedName}" should point to a file: ${validatedPath}`);
      }

      let validatedModule = new ModuleConfig()
        .withName(validatedName)
        .withPath(validatedPath);

      validatedModules.push(validatedModule);
    }

    return validatedModules;
  }

  /**
   * @param {string} staticFileFolderPath
   * @param {string} property
   * @private
   */
  _validateStaticFileFolderPath(staticFileFolderPath, property) {
    return this._validateRelativeOrAbsoluteFolderPath(this._buildConfig.staticFileFolderPath, staticFileFolderPath, property);
  }

  /**
   * @param {string} copyAssetsFolderPath
   * @param {string} property
   * @private
   */
  _validateCopyAssetsFolderPath(copyAssetsFolderPath, property) {
    return this._validateRelativeOrAbsoluteFolderPath(this._buildConfig.copyAssetsFolderPath, copyAssetsFolderPath, property);
  }

  /**
   * @param {string|undefined} originalPath
   * @param {string} configuredPath
   * @param {string} property
   * @returns {string}
   * @private
   */
  _validateRelativeOrAbsoluteFolderPath(originalPath, configuredPath, property) {
    let validatedPath = getAbsolutePath(configuredPath, this.validatedConfig.rootPath);

    if (originalPath === undefined) {
      return validatedPath;
    }

    if (!fs.existsSync(validatedPath)) {
      throw new ValidationError(`The configuration for ${property} points to a unknown location: ${validatedPath}`);
    }

    if (!fs.statSync(validatedPath).isDirectory()) {
      throw new ValidationError(`The configuration for ${property} should point to a directory: ${validatedPath}`);
    }

    return validatedPath;
  }

  /**
   * @param {BuildConfig} buildConfig
   * @returns {ValidatedBuildConfig}
   */
  static validate(buildConfig) {
    let validator = new BuildConfigValidator(buildConfig);

    validator._validate();

    return validator.validatedConfig;
  }
}
