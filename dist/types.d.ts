/// <reference types="node" />
declare module "src/abstract-constant" {
    /**
     * @abstract
     */
    export default class AbstractConstant {
        /**
         * @param {string} value
         */
        constructor(value: string);
        /**
         * @type {string}
         * @private
         */
        private _value;
        /**
         * @returns {string}
         */
        get value(): string;
        /**
         * @return {string}
         */
        getValue(): string;
    }
}
declare module "src/design-type" {
    export class DesignType extends AbstractConstant {
    }
    /**
     * @type {DesignType}
     * @since 1.0
     */
    export const LANDINGPAGE: DesignType;
    /**
     * @type {DesignType}
     * @since 1.0
     */
    export const EMAIL: DesignType;
    /**
     * @type {DesignType}
     * @since 1.3
     */
    export const WEBSITE: DesignType;
    import AbstractConstant from "src/abstract-constant";
}
declare module "src/version" {
    export class Version extends AbstractConstant {
        /**
         *
         * @param {string} version
         * @param {DesignType[]} allowedTypes
         * @param {boolean} legacyFormat
         */
        constructor(version: string, allowedTypes: DesignType[], legacyFormat: boolean);
        _allowedTypes: DesignType[];
        _legacyFormat: boolean;
        /**
         * @returns {DesignType[]}
         */
        get allowedTypes(): DesignType[];
        /**
         * @returns {boolean}
         */
        get legacyFormat(): boolean;
    }
    /**
     * @type {Version}
     */
    export const STUDIO_1_0: Version;
    /**
     * @type {Version}
     */
    export const STUDIO_1_1: Version;
    /**
     * @type {Version}
     */
    export const STUDIO_1_2: Version;
    /**
     * @type {Version}
     */
    export const CX_1_3: Version;
    /**
     * @type {Version}
     */
    export const CX_22_0: Version;
    import AbstractConstant from "src/abstract-constant";
    import { DesignType } from "src/design-type";
}
declare module "src/raw-value" {
    export default class RawValue {
        /**
         * @param {*} value
         */
        constructor(value: any);
        /**
         * @type {*}
         * @private
         */
        private _value;
        /**
         * @return {*}
         */
        get value(): any;
    }
}
declare module "src/abstract-builder" {
    /**
     * @abstract
     */
    export default class AbstractBuilder {
        /**
         * @abstract
         * @return {{}}
         */
        build(): {};
        /**
         * @param {string} property
         * @param {{}} targetObj
         * @param {function} extractFunc
         * @param {boolean} [arrayToObject=false]
         * @protected
         */
        protected _applyPropertyIfDefined(property: string, targetObj: {}, extractFunc: Function, arrayToObject?: boolean): void;
        /**
         * @param {[{}]} arr
         * @private
         */
        private _applyArrayToObject;
        /**
         * @template T
         * @param {T} newObj
         * @param {boolean|undefined} [shallow=true]
         * @return {T}
         * @protected
         */
        protected _clone<T>(newObj: T, shallow?: boolean | undefined): T;
    }
}
declare module "src/object-cloner" {
    export default class ObjectCloner {
        /**
         * @template T
         * @param {T} source
         * @param {T} target
         * @param {boolean|undefined} [shallow=true]
         * @return {T}
         */
        static clone<T>(source: T, target: T, shallow?: boolean | undefined): T;
        /**
         * @template T
         * @param {T} value
         * @return {T}
         */
        static cloneValue<T_1>(value: T_1): T_1;
        /**
         * @template T
         * @param {T} source
         * @param {T} target
         * @param {boolean} shallow
         * @return {T}
         * @private
         */
        private _clone;
        /**
         * @template T
         * @param {T} value
         * @return {T}
         * @private
         */
        private _cloneValue;
        /**
         * @param {[]} arr
         * @return {[]}
         * @private
         */
        private _cloneArray;
        /**
         * @param {{}} obj
         * @return {{}}
         * @private
         */
        private _cloneObject;
    }
}
declare module "src/build-config/module-config" {
    export default class ModuleConfig {
        /**
         * @param {string|undefined} [name=undefined]
         * @param {string|undefined} [path=undefined]
         */
        constructor(name?: string | undefined, path?: string | undefined);
        /**
         * @type {string|undefined}
         * @private
         */
        private _name;
        /**
         * @type {string|undefined}
         * @private
         */
        private _path;
        /**
         * @return {string|undefined}
         */
        get name(): string;
        /**
         * @return {string|undefined}
         */
        get path(): string;
        /**
         * @param {string} name
         * @return {ModuleConfig}
         */
        withName(name: string): ModuleConfig;
        /**
         * Path to the entry module file. The path can either be an absolute one or relative to the path specified with {@link BuildConfig#withRootPath}.
         *
         * @param {string} path
         * @return {ModuleConfig}
         */
        withPath(path: string): ModuleConfig;
        /**
         * @return {{}}
         */
        build(): {};
        /**
         * @param {boolean|undefined} [shallow=true]
         * @return {ModuleConfig}
         */
        clone(shallow?: boolean | undefined): ModuleConfig;
    }
}
declare module "src/build-config/build-config-interface" {
    /**
     * @interface
     */
    export default class BuildConfigInterface {
        /**
         * @returns {string}
         */
        get name(): string;
        /**
         * @returns {string}
         */
        get version(): string;
        /**
         * @returns {Version}
         */
        get targetVersion(): any;
        /**
         * @returns {DesignType}
         */
        get designType(): any;
        /**
         * @returns {string}
         */
        get rootPath(): string;
        /**
         * @returns {string}
         */
        get outputPath(): string;
        /**
         * @returns {string|undefined}
         */
        get propertiesFilePath(): string;
        /**
         * @returns {number}
         */
        get devServerPort(): number;
        /**
         * @returns {boolean}
         */
        get hashZipFiles(): boolean;
        /**
         * @returns {ModuleConfig[]}
         */
        get modules(): any[];
        /**
         * @returns {string}
         */
        get modulesRootPath(): string;
        /**
         * @returns {[{}]}
         */
        get additionalFilesToCopy(): [{}];
        /**
         * @returns {boolean}
         */
        get sourceMapEnabled(): boolean;
        /**
         * @return {string}
         */
        get staticFileFolderPath(): string;
        /**
         * @return {string}
         */
        get copyAssetsFolderPath(): string;
    }
}
declare module "src/build-config/validated-build-config" {
    /**
     * @implements {BuildConfigInterface}
     */
    export default class ValidatedBuildConfig implements BuildConfigInterface {
        /**
         * @type {string}
         * @private
         */
        private _name;
        /**
         * @type {string}
         * @private
         */
        private _version;
        /**
         * @type {Version}
         * @private
         */
        private _targetVersion;
        /**
         * @type {DesignType}
         * @private
         */
        private _designType;
        /**
         * @type {string}
         * @private
         */
        private _rootPath;
        /**
         * @type {string}
         * @private
         */
        private _outputPath;
        /**
         * @type {string|undefined}
         * @private
         */
        private _propertiesFilePath;
        /**
         * @type {number}
         * @private
         */
        private _devServerPort;
        /**
         * @type {boolean}
         * @private
         */
        private _hashZipFiles;
        /**
         * @type {ModuleConfig[]}
         * @private
         */
        private _modules;
        /**
         * @type {string}
         * @private
         */
        private _modulesRootPath;
        /**
         * @type {[{}]}
         * @private
         */
        private _additionalFilesToCopy;
        /**
         * @type {boolean}
         * @private
         */
        private _sourceMapEnabled;
        /**
         * @type {string}
         * @private
         */
        private _staticFileFolderPath;
        /**
         * @type {string}
         * @private
         */
        private _copyAssetsFolderPath;
        /**
         * @returns {string}
         */
        get name(): string;
        /**
         * @returns {string}
         */
        get version(): string;
        /**
         * @returns {Version}
         */
        get targetVersion(): any;
        /**
         * @returns {DesignType}
         */
        get designType(): any;
        /**
         * @returns {string}
         */
        get rootPath(): string;
        /**
         * @returns {string}
         */
        get outputPath(): string;
        /**
         * @returns {string|undefined}
         */
        get propertiesFilePath(): string;
        /**
         * @returns {number}
         */
        get devServerPort(): number;
        /**
         * @returns {boolean}
         */
        get hashZipFiles(): boolean;
        /**
         * @returns {ModuleConfig[]}
         */
        get modules(): any[];
        /**
         * @returns {string}
         */
        get modulesRootPath(): string;
        /**
         * @returns {[{}]}
         */
        get additionalFilesToCopy(): [{}];
        /**
         * @returns {boolean}
         */
        get sourceMapEnabled(): boolean;
        /**
         * @return {string}
         */
        get staticFileFolderPath(): string;
        /**
         * @return {string}
         */
        get copyAssetsFolderPath(): string;
    }
    import BuildConfigInterface from "src/build-config/build-config-interface";
}
declare module "src/build-config/validation-error" {
    export default class ValidationError extends Error {
    }
}
declare module "src/constant" {
    export default class Constant {
        /**
         * @type {string}
         */
        static BSI_CX_CSS_HREF: string;
        /**
         * @type {string}
         */
        static BSI_CX_CSS_INLINE: string;
        /**
         * @type {string}
         */
        static BSI_CX_DESIGN_BASE_URL: string;
        /**
         * @type {string}
         */
        static BSI_CX_MODULE_RUNTIME_PATH: string;
        /**
         * @type {string}
         */
        static BSI_CX_MODULE_RUNTIME_HREF: string;
        /**
         * @type {string}
         */
        static BSI_CX_MODULE_RUNTIME_INLINE: string;
        /**
         * @type {string}
         */
        static BSI_CX_JS_MODULE_START: string;
        /**
         * @type {string}
         */
        static BSI_CX_JS_MODULE_END: string;
    }
}
declare module "src/utility" {
    /**
     *
     * @param {string} name
     * @param {string} version
     * @param {string} [suffix='']
     */
    export function getZipArchiveName(name: string, version: string, suffix?: string): string;
    /**
     * @param {ValidatedBuildConfig} config
     * @param {string|undefined} [suffix=undefined]
     */
    export function buildPublicPath(config: ValidatedBuildConfig, suffix?: string | undefined): string;
    /**
     * @param {*} obj
     * @return {string}
     */
    export function toString(obj: any): string;
    /**
     * @see {@link https://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript#answer-3561711}
     * @param {string} input
     * @return {string}
     */
    export function escapeRegex(input: string): string;
    /**
     * @param {string} str
     * @return {string}
     */
    export function ucfirst(str: string): string;
    /**
     * @param {string} mayRelativePath
     * @param {string|undefined} [basePathWhenRelative=undefined]
     * @return {string}
     */
    export function getAbsolutePath(mayRelativePath: string, basePathWhenRelative?: string | undefined): string;
    /**
     * @param {string} str1
     * @param {string} str2
     */
    export function findStringSimilarities(str1: string, str2: string): string;
    /**
     * @param {string} possibleWin32Path
     * @return {string}
     */
    export function toPosixPath(possibleWin32Path: string): string;
    import ValidatedBuildConfig from "src/build-config/validated-build-config";
}
declare module "src/build-config/default-build-config" {
    /**
     * @implements {BuildConfigInterface}
     */
    export default class DefaultBuildConfig implements BuildConfigInterface {
        get additionalFilesToCopy(): any[];
        get copyAssetsFolderPath(): string;
        get designType(): import("src/design-type").DesignType;
        get devServerPort(): number;
        get hashZipFiles(): boolean;
        get modules(): any[];
        get modulesRootPath(): string;
        get name(): any;
        get outputPath(): string;
        get propertiesFilePath(): any;
        get rootPath(): any;
        get sourceMapEnabled(): boolean;
        get staticFileFolderPath(): string;
        get targetVersion(): import("src/version").Version;
        get version(): string;
    }
}
declare module "src/build-config/build-config-validator" {
    export default class BuildConfigValidator {
        /**
         * @param {BuildConfig} buildConfig
         * @return {ValidatedBuildConfig}
         */
        static validate(buildConfig: BuildConfig): ValidatedBuildConfig;
        /**
         * @param {BuildConfig} buildConfig
         */
        constructor(buildConfig: BuildConfig);
        /**
         * @type {DefaultBuildConfig}
         * @private
         */
        private _defaultBuildConfig;
        /**
         * @type {BuildConfig}
         * @private
         */
        private _buildConfig;
        /**
         * @type {ValidatedBuildConfig}
         * @private
         */
        private _validatedConfig;
        /**
         * @return {DefaultBuildConfig}
         */
        get defaultBuildConfig(): DefaultBuildConfig;
        /**
         * @return {BuildConfig}
         */
        get buildConfig(): BuildConfig;
        /**
         * @return {ValidatedBuildConfig}
         */
        get validatedConfig(): ValidatedBuildConfig;
        /**
         * @private
         */
        private _validate;
        /**
         * @param {string} name
         * @param {object} type
         */
        _validateProperty(name: string, type: object): void;
        /**
         * @param {string} name
         * @param {string} property
         * @return {string}
         * @private
         */
        private _validateName;
        /**
         * @param {string} version
         * @param {string} property
         * @return {string}
         * @private
         */
        private _validateVersion;
        /**
         * @param {string} rootPath
         * @param {string} property
         * @return {string}
         * @private
         */
        private _validateRootPath;
        /**
         * @param {string|undefined} outputPath
         * @param {string} property
         * @private
         */
        private _validateOutputPath;
        /**
         * @param {string|undefined} propertiesFilePath
         * @param {string} property
         * @private
         */
        private _validatePropertiesFilePath;
        /**
         * @param {string} modulesRootPath
         * @param {string} property
         * @private
         */
        private _validateModulesRootPath;
        /**
         * @param {ModuleConfig[]} modules
         * @param {string} property
         * @private
         */
        private _validateModules;
        /**
         * @param {string} staticFileFolderPath
         * @param {string} property
         * @private
         */
        private _validateStaticFileFolderPath;
        /**
         * @param {string} copyAssetsFolderPath
         * @param {string} property
         * @private
         */
        private _validateCopyAssetsFolderPath;
        /**
         * @param {string|undefined} originalPath
         * @param {string} configuredPath
         * @param {string} property
         * @return {string}
         * @private
         */
        private _validateRelativeOrAbsoluteFolderPath;
    }
    import DefaultBuildConfig from "src/build-config/default-build-config";
    import BuildConfig from "src/build-config/build-config";
    import ValidatedBuildConfig from "src/build-config/validated-build-config";
}
declare module "src/build-config/build-config" {
    /**
     * The configuration object for the build of one template.
     *
     * @implements {BuildConfigInterface}
     */
    export default class BuildConfig implements BuildConfigInterface {
        /**
         * @type {string}
         * @private
         */
        private _name;
        /**
         * @type {string}
         * @private
         */
        private _version;
        /**
         * @type {Version}
         * @private
         */
        private _targetVersion;
        /**
         * @type {DesignType}
         * @private
         */
        private _designType;
        /**
         * @type {string}
         * @private
         */
        private _rootPath;
        /**
         * @type {string}
         * @private
         */
        private _outputPath;
        /**
         * @type {string|undefined}
         * @private
         */
        private _propertiesFilePath;
        /**
         * @type {number}
         * @private
         */
        private _devServerPort;
        /**
         * @type {boolean}
         * @private
         */
        private _hashZipFiles;
        /**
         * @type {ModuleConfig[]}
         * @private
         */
        private _modules;
        /**
         * @type {string}
         * @private
         */
        private _modulesRootPath;
        /**
         * @type {[{}]}
         * @private
         */
        private _additionalFilesToCopy;
        /**
         * @type {boolean}
         * @private
         */
        private _sourceMapEnabled;
        /**
         * @type {string}
         * @private
         */
        private _staticFileFolderPath;
        /**
         * @type {string}
         * @private
         */
        private _copyAssetsFolderPath;
        /**
         * @returns {string}
         */
        get name(): string;
        /**
         * @returns {string}
         */
        get version(): string;
        /**
         * @returns {Version}
         */
        get targetVersion(): Version;
        /**
         * @returns {DesignType}
         */
        get designType(): DesignType;
        /**
         * @returns {string}
         */
        get rootPath(): string;
        /**
         * @returns {string}
         */
        get outputPath(): string;
        /**
         * @returns {string|undefined}
         */
        get propertiesFilePath(): string;
        /**
         * @returns {number}
         */
        get devServerPort(): number;
        /**
         * @returns {boolean}
         */
        get hashZipFiles(): boolean;
        /**
         * @returns {ModuleConfig[]}
         */
        get modules(): ModuleConfig[];
        /**
         * @returns {string}
         */
        get modulesRootPath(): string;
        /**
         * @returns {[{}]}
         */
        get additionalFilesToCopy(): [{}];
        /**
         * @returns {boolean}
         */
        get sourceMapEnabled(): boolean;
        /**
         * @return {string}
         */
        get staticFileFolderPath(): string;
        /**
         * @return {string}
         */
        get copyAssetsFolderPath(): string;
        /**
         * The name of this template, e.g. landingpage. This will be included in the name of the resulting ZIP file in the dist folder.
         *
         * @param {string} name
         * @returns {BuildConfig}
         */
        withName(name: string): BuildConfig;
        /**
         * The version of this template, e.g. 1.0.1. This will be included in the name of the resulting ZIP file in the dist folder.
         *
         * @param {string} version
         * @returns {BuildConfig}
         */
        withVersion(version: string): BuildConfig;
        /**
         * The application version of BSI CX (or BSI Studio) this design is built for.
         *
         * @see Checkout {@link Version} for available versions.
         * @param {Version} version
         * @returns
         */
        withTargetVersion(version: Version): BuildConfig;
        /**
         * The type of this design (e.g. email or landingpage).
         *
         * @see Checkout {@link DesignType} for available types.
         * @param {DesignType} type
         * @returns
         */
        withDesignType(type: DesignType): BuildConfig;
        /**
         * The path to the root folder of this template. This folder contains the source code of your template.
         *
         * @param {string} rootPath
         * @returns {BuildConfig}
         */
        withRootPath(rootPath: string): BuildConfig;
        /**
         * A custom output path to use. Default: dist/{name}.
         *
         * @param {string} outputPath
         * @returns {BuildConfig}
         */
        withOutputPath(outputPath: string): BuildConfig;
        /**
         * The data properties file for your Twig templates. This file will be required and the contents of this file will be
         * available as "properties" variable inside your Twig templates.
         *
         * @param {string} propertiesFilePath
         * @returns {BuildConfig}
         */
        withPropertiesFilePath(propertiesFilePath: string): BuildConfig;
        /**
         * A TCP port number to use for the development server. The default port is 9000. Be aware,
         * that you don't have to configure a separate port for each template.
         *
         * @param {number} devServerPort
         * @returns {BuildConfig}
         */
        withDevServerPort(devServerPort: number): BuildConfig;
        /**
         * Add a unique hash value to the name of the resulting ZIP file.
         *
         * @param {boolean} hashZipFiles
         * @returns {BuildConfig}
         */
        withHashZipFiles(hashZipFiles: boolean): BuildConfig;
        /**
         * Add additional Java Script modules.
         *
         * @param {...ModuleConfig} modules
         * @returns {BuildConfig}
         */
        withModules(...modules: ModuleConfig[]): BuildConfig;
        /**
         * Absolute path to the modules folder.
         *
         * @param {string} modulesRootPath
         * @returns {BuildConfig}
         */
        withModulesRootPath(modulesRootPath: string): BuildConfig;
        /**
         * Add additional files to copy to the output folder.
         *
         * @see {@link https://github.com/webpack-contrib/copy-webpack-plugin#patterns}
         * @param {...{}} additionalFilesToCopy
         * @returns {BuildConfig}
         */
        withAdditionalFilesToCopy(...additionalFilesToCopy: {}[]): BuildConfig;
        /**
         * Enable or disable source maps.
         *
         * @param {boolean} sourceMapEnabled
         * @returns {BuildConfig}
         */
        withSourceMapEnabled(sourceMapEnabled: boolean): BuildConfig;
        /**
         * Set the folder for static assets (e.g. images or simple JavaScript files).
         * Can either be an absolute or relative path. Relative paths will be normalized in relation to the template root folder.
         * Use {@link withRootPath} to set the template root folder.
         *
         * @param {string} staticFileFolderPath
         * @return {BuildConfig}
         */
        withStaticFileFolderPath(staticFileFolderPath: string): BuildConfig;
        /**
         * Set the root folder to copy additional assets from. Use {@link withAdditionalFilesToCopy} to configure additional
         * assets for your bundle. This can either be an absolute or relative path.
         * Relative paths will be normalized in relation to the template root folder.
         * Use {@link withRootPath} to set the template root folder.
         *
         * @param {string} copyAssetsFolderPath
         * @return {BuildConfig}
         */
        withCopyAssetsFolderPath(copyAssetsFolderPath: string): BuildConfig;
        /**
         * Create a clone of this copy. Can be useful if different templates should be created from the same sources.
         * A shallow clone will be created by default. This means nested objects will still reference the same origin.
         *
         * @param {boolean} [shallow=true]
         * @return {BuildConfig}
         */
        clone(shallow?: boolean): BuildConfig;
        /**
         * @return {ValidatedBuildConfig}
         */
        validate(): ValidatedBuildConfig;
    }
    import BuildConfigInterface from "src/build-config/build-config-interface";
    import { Version } from "src/version";
    import { DesignType } from "src/design-type";
    import ModuleConfig from "src/build-config/module-config";
    import ValidatedBuildConfig from "src/build-config/validated-build-config";
}
declare module "src/handlebars-helpers" {
    var _default: {
        'bsi.nls': (key: any) => any;
    };
    export default _default;
}
declare module "src/design-json-property" {
    export default class DesignJsonProperty {
        /**
         * @type {string}
         */
        static SCHEMA_VERSION: string;
        /**
         * @type {string}
         */
        static TITLE: string;
        /**
         * @type {string}
         */
        static AUTHOR: string;
        /**
         * @type {string}
         */
        static DATE: string;
        /**
         * @type {string}
         */
        static PREVIEW_IMAGE: string;
        /**
         * @type {string}
         */
        static DEFAULT_LOCALE: string;
        /**
         * @type {string}
         */
        static LOCALES: string;
        /**
         * @type {string}
         */
        static CONTENT_ELEMENT_GROUPS: string;
        /**
         * @type {string}
         */
        static GROUP_ID: string;
        /**
         * @type {string}
         */
        static CONTENT_ELEMENTS: string;
        /**
         * @type {string}
         */
        static ELEMENT_ID: string;
        /**
         * @type {string}
         */
        static FILE: string;
        /**
         * @type {string}
         */
        static ICON: string;
        /**
         * @type {string}
         */
        static PARTS: string;
        /**
         * @type {string}
         */
        static PART_ID: string;
        /**
         * @type {string}
         */
        static HTML_EDITOR_CONFIG: string;
        /**
         * @type {string}
         */
        static LABEL: string;
        /**
         * @type {string}
         */
        static DESCRIPTION: string;
        /**
         * @type {string}
         */
        static HIDDEN: string;
        /**
         * @type {string}
         */
        static STYLE_CONFIGS: string;
        /**
         * @type {string}
         */
        static CSS_CLASSES: string;
        /**
         * @type {string}
         */
        static CSS_CLASS: string;
        /**
         * @type {string}
         */
        static HTML_EDITOR_CONFIGS: string;
        /**
         * @type {string}
         */
        static FEATURES: string;
        /**
         * @type {string}
         */
        static TEXT_COLORS: string;
        /**
         * @type {string}
         */
        static BACKGROUND_COLORS: string;
        /**
         * @type {string}
         */
        static FORMATS: string;
        /**
         * @type {string}
         */
        static FONT_SIZES: string;
        /**
         * @type {string}
         */
        static FONT_SIZE_UNIT: string;
        /**
         * @type {string}
         */
        static FONT_SIZE_DEFAULT: string;
        /**
         * @type {string}
         */
        static LINE_HEIGHTS: string;
        /**
         * @type {string}
         */
        static ENTER_MODE: string;
        /**
         * @type {string}
         */
        static WEBSITE: string;
        /**
         * @type {string}
         */
        static NLS: string;
        /**
         * @type {string}
         */
        static MAX_NAVIGATION_LEVEL: string;
        /**
         * @type {string}
         */
        static INCLUDES: string;
        /**
         * @type {string}
         */
        static EDITABLE: string;
        /**
         * @type {string}
         */
        static PAGE_INCLUDE: string;
    }
}
declare module "src/builder-object-normalizer" {
    export default class BuilderObjectNormalizer {
        /**
         * Convert a builder object into a standard object by invoking the build method on a builder object or just return the provided object.
         * This method normally operates on imported values from executed Java Script assets, see {@link _BsiCxWebpackPlugin#_loadAssets}.
         * Such values cannot be checked with instanceof.
         *
         * @param {*} obj
         * @return {*}
         */
        static normalize(obj: any): any;
        /**
         * @param {*} obj
         * @return {*}
         * @private
         */
        private _normalize;
        /**
         * @param {[*]} arr
         * @return {[*]}
         * @private
         */
        private _normalizeArray;
        /**
         * @param {{}} obj
         * @return {{}}
         * @private
         */
        private _normalizeObject;
    }
}
declare module "src/file" {
    export default class File {
        /**
         * @type {string}
         */
        static DESIGN_JSON: string;
        /**
         * @type {string}
         */
        static DESIGN_JSON_CHUNK: string;
        /**
         * @type {string}
         */
        static DESIGN_JS: string;
        /**
         * @type {string}
         */
        static DESIGN_HTML: string;
        /**
         * @type {string}
         */
        static CONTENT_ELEMENTS_HTML: string;
        /**
         * @type {string}
         */
        static DESIGN_PROPERTIES: string;
    }
}
declare module "src/bsi-cx-webpack-plugin" {
    export default class BsiCxWebpackPlugin {
        /**
         * @type {string}
         */
        static PLUGIN_NAME: string;
        /**
         * @param {ValidatedBuildConfig} config
         */
        constructor(config: ValidatedBuildConfig);
        /**
         * @type {ValidatedBuildConfig}
         * @private
         */
        private _config;
        apply(compiler: any): void;
    }
    import ValidatedBuildConfig from "src/build-config/validated-build-config";
}
declare module "src/java-property-file-builder" {
    export default class JavaPropertyFileBuilder {
        _properties: any[];
        /**
         * @param {string} key
         * @param {string} value
         * @returns {JavaPropertyFileBuilder}
         */
        append(key: string, value: string): JavaPropertyFileBuilder;
        /**
         * @param {string} comment
         * @returns {JavaPropertyFileBuilder}
         */
        appendComment(comment: string): JavaPropertyFileBuilder;
        /**
         * @param {string} section
         * @return {JavaPropertyFileBuilder}
         */
        appendCommentSection(section: string): JavaPropertyFileBuilder;
        /**
         * @returns {JavaPropertyFileBuilder}
         */
        appendBlank(): JavaPropertyFileBuilder;
        /**
         * @returns {string}
         */
        build(): string;
        /**
         * @param {string} line
         * @returns {string}
         */
        _printLine(line: string): string;
        /**
         * @param {string} key
         * @returns {string}
         */
        _escapeKey(key: string): string;
        /**
         * @param {string} value
         * @returns {string}
         */
        _escapeValue(value: string): string;
    }
}
declare module "src/extractor" {
    /**
     * @param {[string|number]} arr
     * @return {string}
     */
    export function scalarArrayToList(arr: [string | number]): string;
    /**
     * @template T
     * @param {T} v
     * @return {T}
     */
    export function identity<T>(v: T): T;
    /**
     * @param {AbstractConstant} constant
     * @return {string}
     */
    export function constantObjectValue(constant: AbstractConstant): string;
    /**
     * @param {AbstractBuilder} builder
     * @return {{}}
     */
    export function builderObjectValue(builder: AbstractBuilder): {};
    import AbstractConstant from "src/abstract-constant";
    import AbstractBuilder from "src/abstract-builder";
}
declare module "src/legacy-design-property" {
    export default class LegacyDesignProperty {
        /**
         * @type {string}
         */
        static TEMPLATE_NAME: string;
        /**
         * @type {string}
         */
        static TEMPLATE_AUTHOR: string;
        /**
         * @type {string}
         * @private
         */
        private static _LABEL;
        /**
         * @type {string}
         * @private
         */
        private static _DESCRIPTION;
        /**
         * @type {string}
         * @private
         */
        private static _GROUP;
        /**
         * @type {string}
         * @private
         */
        private static _ELEMENT;
        /**
         * @type {string}
         * @private
         */
        private static _PARTS;
        /**
         * @type {string}
         * @private
         */
        private static _ICON;
        /**
         * @type {string}
         * @private
         */
        private static _STYLES;
        /**
         * @type {string}
         * @private
         */
        private static _STYLE;
        /**
         * @type {string}
         * @private
         */
        private static _CLASS;
        /**
         * @type {string}
         * @private
         */
        private static _HTML_EDITOR_CONFIG;
        /**
         * @type {string}
         * @private
         */
        private static _FEATURES;
        /**
         * @type {string}
         * @private
         */
        private static _TEXT_COLORS;
        /**
         * @type {string}
         * @private
         */
        private static _BACKGROUND_COLORS;
        /**
         * @type {string}
         * @private
         */
        private static _FORMATS;
        /**
         * @type {string}
         * @private
         */
        private static _FONT_SIZES;
        /**
         * @type {string}
         * @private
         */
        private static _FONT_SIZE_UNIT;
        /**
         * @type {string}
         * @private
         */
        private static _FONT_SIZE_DEFAULT;
        /**
         * @type {string}
         * @private
         */
        private static _LINE_HEIGHTS;
        /**
         * @type {string}
         * @private
         */
        private static _ENTER;
        /**
         * @param {string} group
         * @return {string}
         */
        static getContentElementGroupLabel(group: string): string;
        /**
         * @param {string} element
         * @return {string}
         */
        static getContentElementLabel(element: string): string;
        /**
         * @param {string} element
         * @return {string}
         */
        static getContentElementDescription(element: string): string;
        /**
         * @param {string} element
         * @return {string}
         */
        static getContentElementIcon(element: string): string;
        /**
         * @param {string} element
         * @return {string}
         */
        static getContentElementStyles(element: string): string;
        /**
         * @param {string} element
         * @param {string} part
         * @param {number} index
         * @return {string}
         */
        static getContentElementPartLabel(element: string, part: string, index: number): string;
        /**
         * @param {string} element
         * @param {string} part
         * @param {number} index
         * @return {string}
         */
        static getContentElementPartHtmlEditorConfig(element: string, part: string, index: number): string;
        /**
         * @param {string} element
         * @param {string} part
         * @param {number} index
         * @return {string}
         */
        static _getContentElementPart(element: string, part: string, index: number): string;
        /**
         * @param {string} name
         * @return {string}
         */
        static getStyleLabel(name: string): string;
        /**
         * @param {string} name
         * @param {string} cssClass
         * @return {string}
         */
        static getStyleClassLabel(name: string, cssClass: string): string;
        /**
         * @param {string} name
         * @return {string}
         */
        static getHtmlEditorConfigFeatures(name: string): string;
        /**
         * @param {string} name
         * @return {string}
         */
        static getHtmlEditorConfigTextColors(name: string): string;
        /**
         * @param {string} name
         * @return {string}
         */
        static getHtmlEditorConfigBackgroundColors(name: string): string;
        /**
         * @param {string} name
         * @return {string}
         */
        static getHtmlEditorConfigFormats(name: string): string;
        /**
         * @param {string} name
         * @return {string}
         */
        static getHtmlEditorConfigFontSizes(name: string): string;
        /**
         * @param {string} name
         * @return {string}
         */
        static getHtmlEditorConfigFontSizeUnit(name: string): string;
        /**
         * @param {string} name
         * @return {string}
         */
        static getHtmlEditorConfigFontSizeDefault(name: string): string;
        /**
         * @param {string} name
         * @return {string}
         */
        static getHtmlEditorConfigLineHeights(name: string): string;
        /**
         * @param {string} name
         * @return {string}
         */
        static getHtmlEditorConfigEnter(name: string): string;
    }
}
declare module "src/bsi-cx-webpack-legacy-design-plugin" {
    export default class BsiCxWebpackLegacyDesignPlugin {
        /**
         * @type {string}
         */
        static PLUGIN_NAME: string;
        /**
         * @param {ValidatedBuildConfig} config
         */
        constructor(config: ValidatedBuildConfig);
        /**
         * @type {ValidatedBuildConfig}
         * @private
         */
        private _config;
        apply(compiler: any): void;
    }
    import ValidatedBuildConfig from "src/build-config/validated-build-config";
}
declare module "src/bsi-cx-webpack-zip-hash-plugin" {
    export default class BsiCxWebpackZipHashPlugin {
        /**
         * @type {string}
         */
        static PLUGIN_NAME: string;
        /**
         * @param {string} name
         * @param {string} version
         * @param {boolean} enabled
         */
        constructor(name: string, version: string, enabled: boolean);
        /**
         * @type {string}
         * @private
         */
        private _name;
        /**
         * @type {string}
         * @private
         */
        private _version;
        /**
         * @type {boolean}
         * @private
         */
        private _enabled;
        /**
         * @type {string}
         * @private
         */
        private _prodZipFileName;
        /**
         * @type {string}
         * @private
         */
        private _devZipFileName;
        /**
         * @param {Compilation} compilation
         * @param {Asset} asset
         */
        _handleZipAsset(compilation: any, asset: any): void;
        /**
         * @param {Compiler} compiler
         * @private
         */
        private _removeOldZipAssets;
        apply(compiler: any): void;
    }
}
declare module "src/module-loader" {
    export class ModuleLoader {
        static NODE_MODULES: RegExp;
        /**
         * @param {string} modulePath
         */
        constructor(modulePath: string);
        /**
         * @type {string}
         * @private
         */
        private _modulePath;
        /**
         * @type {Set<string>}
         * @private
         */
        private _dependencies;
        /**
         * @return {string}
         */
        get modulePath(): string;
        /**
         * @return {Set<string>}
         */
        get dependencies(): Set<string>;
        /**
         *
         * @return {Module}
         */
        load(): Module;
        /**
         * @param {Set<string>} visited,
         * @param {Dict<NodeModule>} cache
         * @param {string} id
         * @param {number} level
         * @private
         */
        private _deleteRelatedModuleCache;
    }
    import Module from "module";
}
declare module "src/twig-context" {
    export default class TwigContext {
        /**
         * @param {string|undefined} propertiesFilePath
         */
        constructor(propertiesFilePath: string | undefined);
        /**
         * @type {string|undefined}
         * @private
         */
        private _propertiesFilePath;
        /**
         * @type {ModuleLoader}
         * @private
         */
        private _propertiesModule;
        /**
         * @type {{}}
         * @private
         */
        private _properties;
        /**
         * @type {{}}
         * @private
         */
        private _propertiesProxy;
        /**
         * @type {boolean}
         * @private
         */
        private _propertiesReloadRequired;
        /**
         * @return {string|undefined}
         */
        get propertiesFilePath(): string;
        /**
         * @return {ModuleLoader}
         */
        get propertiesModule(): ModuleLoader;
        /**
         * Get the original properties object without the proxy.
         *
         * @return {{}}
         */
        get properties(): {};
        /**
         * Get the properties object, guarded by a proxy.
         *
         * @return {{}}
         */
        get propertiesProxy(): {};
        /**
         * @return {boolean}
         */
        get propertiesReloadRequired(): boolean;
        forcePropertiesReload(): void;
        /**
         * @return {boolean}
         */
        hasPropertiesFilePath(): boolean;
        /**
         * @return {{}}
         * @private
         */
        private _getPropertiesProxy;
        /**
         * @return {{}}
         * @private
         */
        private _getProxyHandler;
        /**
         * @param {{}} target
         * @param {string} property
         * @return {*}
         * @private
         */
        private _get;
        /**
         * @private
         */
        private _reloadPropertiesIfRequired;
    }
    import { ModuleLoader } from "src/module-loader";
}
declare module "src/bsi-cx-twig-context-webpack-plugin" {
    export default class BsiCxTwigContextWebpackPlugin {
        /**
         * @type {string}
         */
        static PLUGIN_NAME: string;
        /**
         * @param {TwigContext} twigContext
         */
        constructor(twigContext: TwigContext);
        /**
         * @type {TwigContext}
         * @private
         */
        private _twigContext;
        apply(compiler: any): void;
    }
    import TwigContext from "src/twig-context";
}
declare module "src/css/abstract-css-property" {
    export default class AbstractCssProperty {
        /**
         * @param {string|number} value
         * @return {function(string|number):AbstractCssProperty|undefined}
         */
        static getParser(value: string | number): (arg0: string | number) => AbstractCssProperty | undefined;
        /**
         * @return {Node}
         * @abstract
         */
        getLessNode(): any;
        /**
         * @return {*}
         * @abstract
         */
        getSassObject(): any;
        /**
         * Will be used in Twig files.
         *
         * @return {string}
         * @abstract
         */
        toString(): string;
    }
}
declare module "src/css/css-color" {
    export default class CssColor extends AbstractCssProperty {
        /**
         * @type {RegExp}
         */
        static RGBA: RegExp;
        /**
         * @type {RegExp}
         */
        static HEX: RegExp;
        /**
         * @type {{}}
         */
        static COLORS: {};
        /**
         * @param {string} hex
         * @return {CssColor}
         */
        static fromHex(hex: string): CssColor;
        /**
         * @param {number} red
         * @param {number} green
         * @param {number} blue
         * @param {number} [alpha=255]
         */
        static fromRGB(red: number, green: number, blue: number, alpha?: number): CssColor;
        /**
         * @param {string} str
         * @return {CssColor}
         */
        static fromRGBString(str: string): CssColor;
        /**
         * @param {string} color
         * @return {CssColor}
         */
        static fromKeyword(color: string): CssColor;
        /**
         * @param {string|number} value
         * @return {function(string|number):CssColor|undefined}
         */
        static getParser(value: string | number): (arg0: string | number) => CssColor | undefined;
        /**
         * @param {number} red
         * @param {number} green
         * @param {number} blue
         * @param {number} alpha
         */
        constructor(red: number, green: number, blue: number, alpha: number);
        /**
         * @type {number}
         * @private
         */
        private _red;
        /**
         * @type {number}
         * @private
         */
        private _green;
        /**
         * @type {number}
         * @private
         */
        private _blue;
        /**
         * @type {number}
         * @private
         */
        private _alpha;
        /**
         * @return {number}
         */
        get red(): number;
        /**
         * @return {number}
         */
        get green(): number;
        /**
         * @return {number}
         */
        get blue(): number;
        /**
         * @return {number}
         */
        get alpha(): number;
        /**
         * @return {string}
         */
        get hex(): string;
        /**
         * @return {string}
         */
        get rgb(): string;
        /**
         * @return {string}
         */
        get rgba(): string;
        /**
         * @param {number} color
         * @return {number}
         * @private
         */
        private _assertColor;
        /**
         * @param {number|undefined} [color=undefined]
         * @return {string}
         * @private
         */
        private _toHex;
        /**
         * @return {string}
         * @private
         */
        private _toRgb;
        /**
         * @return {string}
         * @private
         */
        private _toRgba;
    }
    import AbstractCssProperty from "src/css/abstract-css-property";
}
declare module "src/css/css-dimension" {
    export default class CssDimension extends AbstractCssProperty {
        /**
         * @type {RegExp}
         */
        static VALUE_UNIT: RegExp;
        static fromString(str: any): CssDimension;
        /**
         * @param {number} num
         * @return {CssDimension}
         */
        static fromNumber(num: number): CssDimension;
        /**
         * @param {string|number} value
         * @return {function(string|number):CssDimension|undefined}
         */
        static getParser(value: string | number): (arg0: string | number) => CssDimension | undefined;
        /**
         * @param {number} value
         * @param {string|undefined} [unit=undefined]
         */
        constructor(value: number, unit?: string | undefined);
        /**
         * @type {number}
         * @private
         */
        private _value;
        /**
         * @type {string|undefined}
         * @private
         */
        private _unit;
        /**
         * @return {number}
         */
        get value(): number;
        /**
         * @return {string|undefined}
         */
        get unit(): string;
    }
    import AbstractCssProperty from "src/css/abstract-css-property";
}
declare module "src/css/css-raw" {
    export default class CssRaw extends AbstractCssProperty {
        /**
         * @param {*} value
         * @return {CssRaw}
         */
        static fromAny(value: any): CssRaw;
        /**
         * @param {*} value
         * @return {function(*): CssRaw}
         */
        static getParser(value: any): (arg0: any) => CssRaw;
        /**
         * @param {*} value
         */
        constructor(value: any);
        /**
         * @type {*}
         * @private
         */
        private _value;
        /**
         * @return {*}
         */
        get value(): any;
    }
    import AbstractCssProperty from "src/css/abstract-css-property";
}
declare module "src/query-constant" {
    export default class QueryConstant {
        /**
         * @type {string}
         */
        static INLINE: string;
    }
}
declare module "src/css/css-url" {
    export default class CssUrl extends AbstractCssProperty {
        /**
         * @param {string|number} value
         * @return {undefined}
         */
        static getParser(value: string | number): undefined;
        /**
         * @param {string} url
         * @param {boolean} [inline=false]
         */
        constructor(url: string, inline?: boolean);
        /**
         * @type {string}
         * @private
         */
        private _url;
        /**
         * @type {boolean}
         * @private
         */
        private _inline;
        /**
         * @return {string}
         */
        get rawUrl(): string;
        /**
         * @return {string}
         */
        get externalUrl(): string;
        /**
         * @return {string}
         */
        get inlineUrl(): string;
        /**
         * @return {string}
         */
        get url(): string;
        /**
         * @return {string}
         */
        get ref(): string;
        /**
         * @return {string}
         */
        get inlineRef(): string;
        /**
         * @return {string}
         */
        get externalRef(): string;
        /**
         * @return {string}
         */
        get css(): string;
        /**
         * @return {string}
         */
        get inlineCss(): string;
        /**
         * @return {string}
         */
        get inlineRefCss(): string;
        /**
         * @return {string}
         */
        get externalCss(): string;
        /**
         * @return {string}
         */
        get externalRefCss(): string;
        /**
         * @return {boolean}
         */
        get inline(): boolean;
        /**
         * @return {string}
         * @private
         */
        private _getInlineUrl;
        /**
         * @param {string} url
         * @return {string}
         * @private
         */
        private _getRef;
        /**
         * @param {string} url
         * @return {string}
         * @private
         */
        private _getCss;
    }
    import AbstractCssProperty from "src/css/abstract-css-property";
}
declare module "src/css/css-bool" {
    export default class CssBool extends AbstractCssProperty {
        /**
         * @param {boolean} value
         * @return {CssBool}
         */
        static fromBoolean(value: boolean): CssBool;
        /**
         * @param {string|number|boolean} value
         * @return {(function(boolean): CssBool)|undefined}
         */
        static getParser(value: string | number | boolean): ((arg0: boolean) => CssBool) | undefined;
        /**
         * @param {boolean} value
         */
        constructor(value: boolean);
        /**
         * @type {boolean}
         * @private
         */
        private _value;
        /**
         * @return {boolean}
         */
        get value(): boolean;
    }
    import AbstractCssProperty from "src/css/abstract-css-property";
}
declare module "src/css/css-property-resolver" {
    export default class CssPropertyResolver {
        /**
         * @type {Map<string|number, AbstractCssProperty>}
         * @private
         */
        private _cache;
        clearCache(): void;
        /**
         * @template T
         * @param {T} value
         * @return {AbstractCssProperty|T}
         */
        resolve<T>(value: T): AbstractCssProperty | T;
        /**
         * @param {string|number} value
         * @return {AbstractCssProperty}
         * @private
         */
        private _createProperty;
    }
    import AbstractCssProperty from "src/css/abstract-css-property";
}
declare module "src/build-context" {
    export default class BuildContext {
        /**
         * @param {ValidatedBuildConfig} config
         */
        constructor(config: ValidatedBuildConfig);
        /**
         * @type {ValidatedBuildConfig}
         * @private
         */
        private _config;
        /**
         * @type {TwigContext}
         * @private
         */
        private _properties;
        /**
         * @type {CssPropertyResolver}
         * @private
         */
        private _cssPropertyResolver;
        /**
         * @return {ValidatedBuildConfig}
         */
        get config(): ValidatedBuildConfig;
        /**
         * @return {TwigContext}
         */
        get properties(): TwigContext;
        /**
         * @return {CssPropertyResolver}
         */
        get cssPropertyResolver(): CssPropertyResolver;
    }
    import ValidatedBuildConfig from "src/build-config/validated-build-config";
    import TwigContext from "src/twig-context";
    import CssPropertyResolver from "src/css/css-property-resolver";
}
declare module "src/abstract-property-plugin" {
    /**
     * @abstract
     */
    export default class AbstractPropertyPlugin {
        /**
         * @param {BuildContext} context
         */
        constructor(context: BuildContext);
        /**
         * @type {CssPropertyResolver}
         * @protected
         */
        protected _propertyResolver: CssPropertyResolver;
        /**
         * @type {{}}
         * @protected
         */
        protected _properties: {};
        /**
         * @template T
         * @param {T} property
         * @return {AbstractCssProperty|T}
         */
        getProperty<T>(property: T): AbstractCssProperty | T;
    }
    import CssPropertyResolver from "src/css/css-property-resolver";
    import AbstractCssProperty from "src/css/abstract-css-property";
    import BuildContext from "src/build-context";
}
declare module "src/bsi-less-property-plugin" {
    export default class BsiLessPropertyPlugin extends AbstractPropertyPlugin {
        /**
         * @return {number[]}
         */
        get minVersion(): number[];
        /**
         * @param lessInstance
         * @param pluginManager
         * @param functions
         */
        install(lessInstance: any, pluginManager: any, functions: any): void;
    }
    import AbstractPropertyPlugin from "src/abstract-property-plugin";
}
declare module "src/bsi-sass-property-plugin" {
    export default class BsiSassPropertyPlugin extends AbstractPropertyPlugin {
        getFunction(): {
            'bsiProperty($property)': any;
        };
    }
    import AbstractPropertyPlugin from "src/abstract-property-plugin";
}
declare module "src/webpack-config-builder" {
    export default class WebpackConfigBuilder {
        /**
         * @type {string}
         */
        static DESIGN_LAYER: string;
        /**
         * @type {RegExp}
         */
        static STATIC_JS_FILE_EXTENSION: RegExp;
        /**
         * Build the configuration for webpack from {@link BuildConfig} objects.
         *
         * @param  {...BuildConfig} configs
         */
        static fromConfigs(...configs: BuildConfig[]): {
            entry: {};
            name: string;
            context: string;
            target: string;
            module: {
                rules: {}[];
            };
            plugins: any[];
            devtool: string | boolean;
            devServer: {};
            stats: {};
            performance: {};
            optimization: {
                minimize: boolean;
                minimizer: [any];
                splitChunks: {
                    chunks: string;
                    name: Function;
                    cacheGroups: {};
                };
            };
            output: {};
            experiments: {
                layers: boolean;
            };
        }[];
        /**
         * @param {ValidatedBuildConfig} config
         */
        constructor(config: ValidatedBuildConfig);
        /**
         * @type {BuildContext}
         * @private
         */
        private _context;
        /**
         * @return {BuildContext}
         */
        get context(): BuildContext;
        /**
         * @returns {ValidatedBuildConfig}
         */
        get config(): ValidatedBuildConfig;
        /**
         * @return {TwigContext}
         */
        get twigContext(): TwigContext;
        build(): {
            entry: {};
            name: string;
            context: string;
            target: string;
            module: {
                rules: {}[];
            };
            plugins: any[];
            devtool: string | boolean;
            devServer: {};
            stats: {};
            performance: {};
            optimization: {
                minimize: boolean;
                minimizer: [any];
                splitChunks: {
                    chunks: string;
                    name: Function;
                    cacheGroups: {};
                };
            };
            output: {};
            experiments: {
                layers: boolean;
            };
        };
        /**
         * The default output path: dist/{name}
         *
         * @returns {string}
         * @private
         */
        private _getDefaultOutputPath;
        /**
         * The entry configuration.
         *
         * @returns {{}}
         */
        _getEntryConfig(): {};
        /**
         * Get the entry configuration for a template.
         *
         * @param {string} name
         * @returns {{}}
         */
        _evaluateEntryTemplate(name: string): {};
        /**
         * @return {string}
         * @private
         */
        private _getDesignJsFilePath;
        /**
         * Get the entry configurations for the Java Script modules.
         *
         * @returns {[{}]}
         */
        _getJavaScriptModuleEntries(): [{}];
        /**
         * @param {ModuleConfig} config
         * @return {{filename: string, import: string, runtime: string}}
         * @private
         */
        private _getJavaScriptModuleEntry;
        /**
         * Rules for Twig file handling.
         *
         * @returns {[{}]}
         */
        _getTwigRuleConfig(): [{}];
        /**
         * Rule for HTML and Handlebars file handling.
         *
         * @returns {[{}]}
         */
        _getHtmlAndHbsRuleConfig(): [{}];
        /**
         * Rules for LESS, SASS/SCSS and CSS file handling.
         *
         * @returns {[{}]}
         */
        _getStyleRulesConfig(): [{}];
        /**
         * Get all file extensions that should be handled as static assets (e.g. images and fonts).
         *
         * @returns {[string]}
         */
        _getStaticAssetFileExtensions(): [string];
        /**
         * Rule for static assets handling.
         *
         * @returns {[{}]}
         */
        _getStaticAssetsRuleConfig(): [{}];
        /**
         * Rule for static Java Script file handling.
         *
         * @returns {[{}]}
         */
        _getStaticJavaScriptFileRuleConfig(): [{}];
        /**
         * @param {string} fileToCheck
         * @return {boolean}
         */
        _isStaticJavaScriptFile(fileToCheck: string): boolean;
        /**
         * Rule for regular Java Script file handling.
         *
         * @returns {[{}]}
         */
        _getRegularJavaScriptFileRuleConfig(): [{}];
        /**
         * @returns {string}
         */
        _getTemplateLoader(): string;
        /**
         * @returns {[{}]}
         */
        _getCssLoaderChain(): [{}];
        /**
         * Mini CSS extract plugin configuration.
         *
         * @returns {[MiniCssExtractPlugin]}
         */
        _getMiniCssExtractPluginConfig(): [any];
        /**
         * Copy plugin configuration.
         *
         * @returns {[CopyPlugin]}
         */
        _getCopyPluginConfig(): [any];
        /**
         *
         * @return {BsiCxTwigContextWebpackPlugin[]}
         * @private
         */
        private _getBsiCxTwigContextWebpackPlugin;
        /**
         * @return {[BsiCxWebpackPlugin]}
         * @private
         */
        private _getBsiCxWebpackPluginConfig;
        /**
         * Webpack ZIP plugin configuration.
         *
         * @returns {[ZipPlugin|BsiCxWebpackZipHashPlugin]}
         */
        _getZipPluginConfig(): [any | BsiCxWebpackZipHashPlugin];
        /**
         * BSI CX legacy design format plugin config.
         *
         * @returns {[BsiCxWebpackLegacyDesignPlugin]}
         */
        _getBsiCxWebpackLegacyDesignPluginConfig(): [BsiCxWebpackLegacyDesignPlugin];
        /**
         * The dev tool configuration.
         *
         * @returns {string|boolean}
         */
        _getDevToolConfig(): string | boolean;
        /**
         * Development server configuration.
         *
         * @returns {{}}
         */
        _getDevServerConfig(): {};
        /**
         * The stats configuration.
         *
         * @returns {{}}
         */
        _getStatsConfig(): {};
        /**
         * The performance configuration.
         *
         * @returns {{}}
         */
        _getPerformanceConfig(): {};
        /**
         * The minimizer configuration.
         *
         * @returns {[TerserPlugin]}
         */
        _getOptimizationMinimizerConfig(): [any];
        /**
         * The split chunks name configuration.
         *
         * @returns {function}
         */
        _getOptimizationSplitChunksNameConfig(): Function;
        /**
         * The chache groups configuration.
         *
         * @returns {{}}
         */
        _getOptimizationCacheGroupsConfig(): {};
        /**
         * The output configuration.
         *
         * @returns {{}}
         */
        _getOutputConfig(): {};
    }
    import BuildContext from "src/build-context";
    import ValidatedBuildConfig from "src/build-config/validated-build-config";
    import TwigContext from "src/twig-context";
    import BsiCxWebpackZipHashPlugin from "src/bsi-cx-webpack-zip-hash-plugin";
    import BsiCxWebpackLegacyDesignPlugin from "src/bsi-cx-webpack-legacy-design-plugin";
    import BuildConfig from "src/build-config/build-config";
}
declare module "src/css/helper" {
    /**
     * @param {...string} pathSegments
     * @return {CssUrl}
     */
    export function url(...pathSegments: string[]): CssUrl;
    /**
     * @param {...string} pathSegments
     * @return {CssUrl}
     */
    export function dataUri(...pathSegments: string[]): CssUrl;
    /**
     * @param {...string|number} channels
     * @return {CssColor|string}
     */
    export function color(...channels: (string | number)[]): CssColor | string;
    import CssUrl from "src/css/css-url";
    import CssColor from "src/css/css-color";
}
declare module "export/main" {
    import * as Version from "src/version";
    import * as DesignType from "src/design-type";
    import BuildConfig from "src/build-config/build-config";
    import ModuleConfig from "src/build-config/module-config";
    import WebpackConfigBuilder from "src/webpack-config-builder";
    import * as css from "src/css/helper";
    export { Version, DesignType, BuildConfig, ModuleConfig, WebpackConfigBuilder, css };
}
declare module "src/content-element/part/part" {
    export class Part extends AbstractConstant {
    }
    /**
     * @type {Part}
     * @since 1.0
     */
    export const PLAIN_TEXT: Part;
    /**
     * @type {Part}
     * @since 1.0
     */
    export const FORMATTED_TEXT: Part;
    /**
     * @type {Part}
     * @since 1.0
     */
    export const HTML: Part;
    /**
     * @type {Part}
     * @since 1.0
     */
    export const VIDEO: Part;
    /**
     * @type {Part}
     * @since 1.0
     */
    export const IMAGE: Part;
    /**
     * @type {Part}
     * @since 1.0
     */
    export const BACKGROUND_IMAGE: Part;
    /**
     * @type {Part}
     * @since 1.0
     */
    export const TABLE: Part;
    /**
     * @type {Part}
     * @since 1.0
     */
    export const ITERATOR: Part;
    /**
     * @type {Part}
     * @since 1.0
     */
    export const NEWS_SNIPPETS: Part;
    /**
     * @type {Part}
     * @since 1.0
     */
    export const FORM: Part;
    /**
     * @type {Part}
     * @since 1.0
     */
    export const FORM_FIELD: Part;
    /**
     * @type {Part}
     * @since 1.0
     */
    export const FORM_CHECKBOX: Part;
    /**
     * @type {Part}
     * @since 1.0
     */
    export const FORM_TEXTAREA: Part;
    /**
     * @type {Part}
     * @since 1.0
     */
    export const FORM_SELECT: Part;
    /**
     * @type {Part}
     * @since 1.0
     */
    export const FORM_RADIO: Part;
    /**
     * @type {Part}
     * @since 1.0
     */
    export const LINK: Part;
    /**
     * @type {Part}
     * @since 1.0
     */
    export const SOCIAL_FOLLOW: Part;
    /**
     * @type {Part}
     * @since 1.0
     */
    export const SOCIAL_SHARE: Part;
    /**
     * @type {Part}
     * @since 22.0
     */
    export const URL_PROVIDER: Part;
    import AbstractConstant from "src/abstract-constant";
}
declare module "src/content-element/part/abstract-part" {
    /**
     * @abstract
     */
    export default class AbstractPart extends AbstractBuilder {
        /**
         * @param {Part} partId
         */
        constructor(partId: Part);
        /**
         * @type {Part}
         * @private
         */
        private _partId;
        /**
         * @type {string|undefined}
         * @private
         */
        private _label;
        /**
         * @return {Part}
         */
        get partId(): Part;
        /**
         * @return {string|undefined}
         */
        get label(): string;
        /**
         * @param {string} label
         * @return {AbstractPart}
         * @since 1.0
         */
        withLabel(label: string): AbstractPart;
    }
    import AbstractBuilder from "src/abstract-builder";
    import { Part } from "src/content-element/part/part";
}
declare module "src/design/locale" {
    export class Locale extends AbstractConstant {
    }
    /**
     * @type {Locale}
     */
    export const WILDCARD: Locale;
    /**
     * @type {Locale}
     */
    export const EN: Locale;
    /**
     * @type {Locale}
     */
    export const EN_GB: Locale;
    /**
     * @type {Locale}
     */
    export const EN_US: Locale;
    /**
     * @type {Locale}
     */
    export const DE: Locale;
    /**
     * @type {Locale}
     */
    export const DE_DE: Locale;
    /**
     * @type {Locale}
     */
    export const DE_CH: Locale;
    /**
     * @type {Locale}
     */
    export const FR: Locale;
    /**
     * @type {Locale}
     */
    export const FR_CH: Locale;
    /**
     * @type {Locale}
     */
    export const IT: Locale;
    /**
     * @type {Locale}
     */
    export const IT_CH: Locale;
    import AbstractConstant from "src/abstract-constant";
}
declare module "src/design/schema-version" {
    export class SchemaVersion extends AbstractConstant {
    }
    /**
     * @type {SchemaVersion}
     * @since 1.3
     */
    export const V_1_0: SchemaVersion;
    /**
     * @type {SchemaVersion}
     * @since 22.0
     */
    export const V_22_0: SchemaVersion;
    import AbstractConstant from "src/abstract-constant";
}
declare module "src/style/css-class" {
    export default class CssClass extends AbstractBuilder {
        /**
         * @param {string} cssClass
         * @param {string} label
         * @return {CssClass}
         */
        static create(cssClass: string, label: string): CssClass;
        /**
         * @type {string|undefined}
         * @private
         */
        private _cssClass;
        /**
         * @type {string|undefined}
         * @private
         */
        private _label;
        /**
         * @return {string|undefined}
         */
        get cssClass(): string;
        /**
         * @return {string|undefined}
         */
        get label(): string;
        /**
         * @param {string} cssClass
         * @return {CssClass}
         */
        withCssClass(cssClass: string): CssClass;
        /**
         * @param {string} label
         * @return {CssClass}
         */
        withLabel(label: string): CssClass;
        /**
         * @param {boolean} [shallow=true]
         * @return {CssClass}
         */
        clone(shallow?: boolean): CssClass;
    }
    import AbstractBuilder from "src/abstract-builder";
}
declare module "src/style/style" {
    /**
     * @since 1.1
     */
    export default class Style extends AbstractBuilder {
        /**
         * @type {string|undefined}
         * @private
         */
        private _identifier;
        /**
         * @type {string|undefined}
         * @private
         */
        private _label;
        /**
         * @type {RawValue|CssClass[]|undefined}
         * @private
         */
        private _cssClasses;
        /**
         * @return {string|undefined}
         */
        get identifier(): string;
        /**
         * @return {string|undefined}
         */
        get label(): string;
        /**
         * @return {RawValue|[CssClass]|undefined}
         */
        get cssClasses(): RawValue | [CssClass];
        /**
         * @param {string} identifier
         * @returns {Style}
         */
        withIdentifier(identifier: string): Style;
        /**
         * @param {string} label
         * @returns {Style}
         */
        withLabel(label: string): Style;
        /**
         * @param {...CssClass} cssClasses
         * @returns {Style}
         */
        withCssClasses(...cssClasses: CssClass[]): Style;
        /**
         * @param {...{}} cssClasses
         * @returns {Style}
         */
        withRawCssClasses(...cssClasses: {}[]): Style;
        /**
         * @param {boolean} [shallow=true]
         * @return {Style}
         */
        clone(shallow?: boolean): Style;
    }
    import AbstractBuilder from "src/abstract-builder";
    import RawValue from "src/raw-value";
    import CssClass from "src/style/css-class";
}
declare module "src/content-element/icon" {
    export class Icon extends AbstractConstant {
    }
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const HEADING: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const TEXT: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const TEXT_WITH_IMAGE: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const IMAGE: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const TABLE: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const LIST: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const VIDEO: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const MEGAPHONE: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const SOCIAL_FOLLOW: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const SOCIAL_SHARE: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const SNIPPET: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const QRCODE: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const PAPERCLIP: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const DOCUMENT: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const PHONE: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const COMMUNICATION: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const HANDSHAKE: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const HEART: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const INFO: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const ENVELOPE: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const FACEBOOK: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const YOUTUBE: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const PERSON_MALE: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const PERSON_FEMALE: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const ASTERISK: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const SMILEY: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const DIVIDER: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const PARAMETER: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const TWITTER: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const HEADSET: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const METADATA: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const PILE: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const CHAIN: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const SIGNPOST: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const COMPASS: Icon;
    /**
     * @type {Icon}
     * @since 22.0
     */
    export const DIAGRAM_LINE: Icon;
    /**
     * @type {Icon}
     * @since 22.0
     */
    export const DIAGRAM_AREA: Icon;
    /**
     * @type {Icon}
     * @since 22.0
     */
    export const DIAGRAM_BAR: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const RADIOBUTTON: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const CHECKBOX: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const TEXTAREA: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const FORMFIELD: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const DROPDOWN: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const ONE_COLUMN: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const TWO_COLUMNS: Icon;
    /**
     * @type {Icon}
     * @since 1.0
     */
    export const THREE_COLUMNS: Icon;
    import AbstractConstant from "src/abstract-constant";
}
declare module "src/content-element/content-element" {
    export default class ContentElement extends AbstractBuilder {
        /**
         * @type {string|undefined}
         * @private
         */
        private _elementId;
        /**
         * @type {string|undefined}
         * @private
         */
        private _label;
        /**
         * @type {string|undefined}
         * @private
         */
        private _description;
        /**
         * @type {{}|undefined}
         * @private
         */
        private _file;
        /**
         * @type {Icon|undefined}
         * @private
         */
        private _icon;
        /**
         * @type {boolean|undefined}
         * @private
         */
        private _hidden;
        /**
         * @type {RawValue|[Style]|undefined}
         * @private
         */
        private _styleConfigs;
        /**
         * @type {RawValue|[AbstractPart]|undefined}
         * @private
         */
        private _parts;
        /**
         * @return {string|undefined}
         */
        get elementId(): string;
        /**
         * @return {string|undefined}
         */
        get label(): string;
        /**
         * @return {string|undefined}
         */
        get description(): string;
        /**
         * @return {{}|undefined}
         */
        get file(): {};
        /**
         * @return {Icon|undefined}
         */
        get icon(): Icon;
        /**
         * @return {boolean|undefined}
         */
        get hidden(): boolean;
        /**
         * @return {RawValue|Style[]|undefined}
         */
        get styleConfigs(): RawValue | Style[];
        /**
         * @return {RawValue|AbstractPart[]|undefined}
         */
        get parts(): RawValue | AbstractPart[];
        /**
         * @param {string} elementId
         * @return {ContentElement}
         * @since 1.0
         */
        withElementId(elementId: string): ContentElement;
        /**
         * @param {string} label
         * @return {ContentElement}
         * @since 1.0
         */
        withLabel(label: string): ContentElement;
        /**
         * @param {string} file
         * @return {ContentElement}
         * @since 1.0
         */
        withFile(file: string): ContentElement;
        /**
         * @param {Icon} icon
         * @return {ContentElement}
         * @since 1.0
         */
        withIcon(icon: Icon): ContentElement;
        /**
         * @param {boolean} hidden
         * @return {ContentElement}
         * @since 1.3
         */
        withHidden(hidden: boolean): ContentElement;
        /**
         * @param {...Style} styleConfigs
         * @return {ContentElement}
         * @since 1.1
         */
        withStyleConfigs(...styleConfigs: Style[]): ContentElement;
        /**
         * @param {...string} styleConfigs
         * @return {ContentElement}
         * @since 1.1
         */
        withRawStyleConfigs(...styleConfigs: string[]): ContentElement;
        /**
         * @param {...AbstractPart} parts
         * @return {ContentElement}
         * @since 1.0
         */
        withParts(...parts: AbstractPart[]): ContentElement;
        /**
         * @param {...{}} parts
         * @return {ContentElement}
         * @since 1.0
         */
        withRawParts(...parts: {}[]): ContentElement;
        /**
         * @param {boolean} [shallow=true]
         * @return {ContentElement}
         */
        clone(shallow?: boolean): ContentElement;
    }
    import AbstractBuilder from "src/abstract-builder";
    import { Icon } from "src/content-element/icon";
    import RawValue from "src/raw-value";
    import Style from "src/style/style";
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/content-element-group" {
    export default class ContentElementGroup extends AbstractBuilder {
        /**
         * @type {string|undefined}
         * @private
         */
        private _groupId;
        /**
         * @type {string|undefined}
         * @private
         */
        private _label;
        /**
         * @type {boolean|undefined}
         * @private
         */
        private _hidden;
        /**
         * @type {RawValue|[ContentElement]|undefined}
         * @private
         */
        private _contentElements;
        /**
         * @return {string|undefined}
         */
        get groupId(): string;
        /**
         * @return {string|undefined}
         */
        get label(): string;
        /**
         * @return {boolean|undefined}
         */
        get hidden(): boolean;
        /**
         * @return {RawValue|[ContentElement]|undefined}
         */
        get contentElements(): RawValue | [ContentElement];
        /**
         * @param {string} groupId
         * @return {ContentElementGroup}
         */
        withGroupId(groupId: string): ContentElementGroup;
        /**
         * @param {string} label
         * @return {ContentElementGroup}
         */
        withLabel(label: string): ContentElementGroup;
        /**
         * @param {boolean} hidden
         * @return {ContentElementGroup}
         */
        withHidden(hidden: boolean): ContentElementGroup;
        /**
         * @param {...ContentElement} contentElements
         * @return {ContentElementGroup}
         */
        withContentElements(...contentElements: ContentElement[]): ContentElementGroup;
        /**
         * @param {...{}} contentElements
         * @return {ContentElementGroup}
         */
        withRawContentElements(...contentElements: {}[]): ContentElementGroup;
        /**
         * @param {boolean} [shallow=true]
         * @return {ContentElementGroup}
         */
        clone(shallow?: boolean): ContentElementGroup;
    }
    import AbstractBuilder from "src/abstract-builder";
    import RawValue from "src/raw-value";
    import ContentElement from "src/content-element/content-element";
}
declare module "src/html-editor-config/enter-mode" {
    export class EnterMode extends AbstractConstant {
    }
    /**
     * @type {EnterMode}
     */
    export const P: EnterMode;
    /**
     * @type {EnterMode}
     */
    export const BR: EnterMode;
    /**
     * @type {EnterMode}
     */
    export const DIV: EnterMode;
    import AbstractConstant from "src/abstract-constant";
}
declare module "src/html-editor-config/feature" {
    export class Feature extends AbstractConstant {
    }
    /**
     * @type {Feature}
     */
    export const BOLD: Feature;
    /**
     * @type {Feature}
     */
    export const ITALIC: Feature;
    /**
     * @type {Feature}
     */
    export const UNDERLINE: Feature;
    /**
     * @type {Feature}
     */
    export const STRIKE_THROUGH: Feature;
    /**
     * @type {Feature}
     */
    export const SUBSCRIPT: Feature;
    /**
     * @type {Feature}
     */
    export const SUPERSCRIPT: Feature;
    /**
     * @type {Feature}
     */
    export const FONT_SIZE: Feature;
    /**
     * @type {Feature}
     */
    export const LINE_HEIGHT: Feature;
    /**
     * @type {Feature}
     */
    export const TEXT_COLOR: Feature;
    /**
     * @type {Feature}
     */
    export const BACKGROUND_COLOR: Feature;
    /**
     * @type {Feature}
     */
    export const ALIGN_LEFT: Feature;
    /**
     * @type {Feature}
     */
    export const ALIGN_CENTER: Feature;
    /**
     * @type {Feature}
     */
    export const ALIGN_RIGHT: Feature;
    /**
     * @type {Feature}
     */
    export const ALIGN_JUSTIFY: Feature;
    /**
     * @type {Feature}
     */
    export const FORMAT_OL: Feature;
    /**
     * @type {Feature}
     */
    export const FORMAT_UL: Feature;
    /**
     * @type {Feature}
     */
    export const OUTDENT: Feature;
    /**
     * @type {Feature}
     */
    export const INDENT: Feature;
    /**
     * @type {Feature}
     */
    export const PARAGRAPH_FORMAT: Feature;
    /**
     * @type {Feature}
     */
    export const QUOTE: Feature;
    /**
     * @type {Feature}
     */
    export const SPECIAL_CHARACTERS: Feature;
    /**
     * @type {Feature}
     */
    export const EMOTICONS: Feature;
    /**
     * @type {Feature}
     */
    export const INSERT_LINK: Feature;
    /**
     * @type {Feature}
     */
    export const CLEAR_FORMATTING: Feature;
    /**
     * @type {Feature}
     */
    export const UNDO: Feature;
    /**
     * @type {Feature}
     */
    export const REDO: Feature;
    /**
     * @type {Feature}
     */
    export const FULLSCREEN: Feature;
    /**
     * @type {Feature}
     */
    export const SELECT_ALL: Feature;
    /**
     * @type {Feature}
     */
    export const HTML: Feature;
    /**
     * @type {Feature}
     */
    export const HELP: Feature;
    import AbstractConstant from "src/abstract-constant";
}
declare module "src/html-editor-config/format" {
    export class Format extends AbstractConstant {
    }
    /**
     * @type {Format}
     */
    export const P: Format;
    /**
     * @type {Format}
     */
    export const H1: Format;
    /**
     * @type {Format}
     */
    export const H2: Format;
    /**
     * @type {Format}
     */
    export const H3: Format;
    /**
     * @type {Format}
     */
    export const H4: Format;
    /**
     * @type {Format}
     */
    export const H5: Format;
    /**
     * @type {Format}
     */
    export const H6: Format;
    /**
     * @type {Format}
     */
    export const PRE: Format;
    import AbstractConstant from "src/abstract-constant";
}
declare module "src/html-editor-config/font-size-unit" {
    export class FontSizeUnit extends AbstractConstant {
    }
    /**
     * @type {FontSizeUnit}
     */
    export const PX: FontSizeUnit;
    /**
     * @type {FontSizeUnit}
     */
    export const EM: FontSizeUnit;
    /**
     * @type {FontSizeUnit}
     */
    export const REM: FontSizeUnit;
    /**
     * @type {FontSizeUnit}
     */
    export const PT: FontSizeUnit;
    /**
     * @type {FontSizeUnit}
     */
    export const CM: FontSizeUnit;
    /**
     * @type {FontSizeUnit}
     */
    export const MM: FontSizeUnit;
    import AbstractConstant from "src/abstract-constant";
}
declare module "src/html-editor-config/html-editor-config" {
    export default class HtmlEditorConfig extends AbstractBuilder {
        /**
         * @type {string|undefined}
         * @private
         */
        private _identifier;
        /**
         * @type {RawValue|Feature[]|undefined}
         * @private
         */
        private _features;
        /**
         * @type {string[]|undefined}
         * @private
         */
        private _textColors;
        /**
         * @type {string[]|undefined}
         * @private
         */
        private _backgroundColors;
        /**
         * @type {RawValue|Format[]|undefined}
         * @private
         */
        private _formats;
        /**
         * @type {number[]|undefined}
         * @private
         */
        private _fontSizes;
        /**
         * @type {RawValue|FontSizeUnit|undefined}
         * @private
         */
        private _fontSizeUnit;
        /**
         * @type {number|undefined}
         * @private
         */
        private _fontSizeDefault;
        /**
         * @type {number[]|undefined}
         * @private
         */
        private _lineHeights;
        /**
         * @type {RawValue|EnterMode|undefined}
         * @private
         */
        private _enterMode;
        /**
         * @returns {string|undefined}
         */
        get identifier(): string;
        /**
         * @returns {RawValue|Feature[]|undefined}
         */
        get features(): RawValue | Feature[];
        /**
         * @returns {string[]|undefined}
         */
        get textColors(): string[];
        /**
         * @returns {string[]|undefined}
         */
        get backgroundColors(): string[];
        /**
         * @returns {RawValue|Format[]|undefined}
         */
        get formats(): RawValue | Format[];
        /**
         * @returns {number[]|undefined}
         */
        get fontSizes(): number[];
        /**
         * @returns {RawValue|FontSizeUnit|undefined}
         */
        get fontSizeUnit(): RawValue | FontSizeUnit;
        /**
         * @returns {number|undefined}
         */
        get fontSizeDefault(): number;
        /**
         * @returns {number[]|undefined}
         */
        get lineHeights(): number[];
        /**
         * @returns {RawValue|EnterMode|undefined}
         */
        get enterMode(): RawValue | EnterMode;
        /**
         * @param {string} identifier
         * @returns {HtmlEditorConfig}
         */
        withIdentifier(identifier: string): HtmlEditorConfig;
        /**
         * @param {...Feature} features
         * @returns {HtmlEditorConfig}
         */
        withFeatures(...features: Feature[]): HtmlEditorConfig;
        /**
         * @param {...string} features
         * @returns {HtmlEditorConfig}
         */
        withRawFeatures(...features: string[]): HtmlEditorConfig;
        /**
         * @param {...string} textColors
         * @returns {HtmlEditorConfig}
         */
        withTextColors(...textColors: string[]): HtmlEditorConfig;
        /**
         * @param {...string} backgroundColors
         * @returns {HtmlEditorConfig}
         */
        withBackgroundColors(...backgroundColors: string[]): HtmlEditorConfig;
        /**
         * @param {...Format} formats
         * @returns {HtmlEditorConfig}
         */
        withFormats(...formats: Format[]): HtmlEditorConfig;
        /**
         * @param {...string} formats
         * @returns {HtmlEditorConfig}
         */
        withRawFormats(...formats: string[]): HtmlEditorConfig;
        /**
         * @param {...number} fontSizes
         * @returns {HtmlEditorConfig}
         */
        withFontSizes(...fontSizes: number[]): HtmlEditorConfig;
        /**
         * @param {FontSizeUnit} fontSizeUnit
         * @returns {HtmlEditorConfig}
         */
        withFontSizeUnit(fontSizeUnit: FontSizeUnit): HtmlEditorConfig;
        /**
         * @param {string} fontSizeUnit
         * @returns {HtmlEditorConfig}
         */
        withRawFontSizeUnit(fontSizeUnit: string): HtmlEditorConfig;
        /**
         * @param {number} fontSizeDefault
         * @returns {HtmlEditorConfig}
         */
        withFontSizeDefault(fontSizeDefault: number): HtmlEditorConfig;
        /**
         * @param {...number} lineHeights
         * @returns {HtmlEditorConfig}
         */
        withLineHeights(...lineHeights: number[]): HtmlEditorConfig;
        /**
         * @param {EnterMode} enterMode
         * @returns {HtmlEditorConfig}
         */
        withEnterMode(enterMode: EnterMode): HtmlEditorConfig;
        /**
         * @param {string} enterMode
         * @returns {HtmlEditorConfig}
         */
        withRawEnterMode(enterMode: string): HtmlEditorConfig;
        /**
         * @param {boolean} [shallow=true]
         * @return {HtmlEditorConfig}
         */
        clone(shallow?: boolean): HtmlEditorConfig;
    }
    import AbstractBuilder from "src/abstract-builder";
    import RawValue from "src/raw-value";
    import { Feature } from "src/html-editor-config/feature";
    import { Format } from "src/html-editor-config/format";
    import { FontSizeUnit } from "src/html-editor-config/font-size-unit";
    import { EnterMode } from "src/html-editor-config/enter-mode";
}
declare module "src/website/abstract-include" {
    /**
     * @abstract
     * @since 1.3
     */
    export default class AbstractInclude extends AbstractBuilder {
        /**
         * @param {string|undefined} identifier
         */
        constructor(identifier: string | undefined);
        /**
         * @type {string|undefined}
         * @protected
         */
        protected _identifier: string | undefined;
        /**
         * @type {boolean|undefined}
         * @protected
         */
        protected _editable: boolean | undefined;
        /**
         * @type {{}|undefined}
         * @protected
         */
        protected _file: {} | undefined;
        /**
         * @type {string|undefined}
         * @protected
         */
        protected _name: string | undefined;
        /**
         * @return {string|undefined}
         */
        get identifier(): string;
        /**
         * @return {boolean|undefined}
         */
        get editable(): boolean;
        /**
         * @return {{}|undefined}
         */
        get file(): {};
        /**
         * @return {string|undefined}
         */
        get name(): string;
        /**
         * @param {string} identifier
         * @return {AbstractInclude}
         */
        withIdentifier(identifier: string): AbstractInclude;
        /**
         * @param {boolean} editable
         * @return {AbstractInclude}
         */
        withEditable(editable: boolean): AbstractInclude;
        /**
         * @param {{}} file
         * @return {AbstractInclude}
         */
        withFile(file: {}): AbstractInclude;
        /**
         * @param {string} name
         * @return {AbstractInclude}
         */
        withName(name: string): AbstractInclude;
    }
    import AbstractBuilder from "src/abstract-builder";
}
declare module "src/website/website" {
    /**
     * @since 1.3
     */
    export default class Website extends AbstractBuilder {
        /**
         * @type {number|undefined}
         * @private
         */
        private _maxNavigationLevel;
        /**
         * @type {RawValue|AbstractInclude[]|undefined}
         * @private
         */
        private _includes;
        /**
         * @return {number|undefined}
         */
        get maxNavigationLevel(): number;
        /**
         * @return {RawValue|AbstractInclude[]|undefined}
         */
        get includes(): RawValue | AbstractInclude[];
        /**
         * @param {number} maxNavigationLevel
         * @return {Website}
         */
        withMaxNavigationLevel(maxNavigationLevel: number): Website;
        /**
         * @param {...AbstractInclude} includes
         * @return {Website}
         */
        withIncludes(...includes: AbstractInclude[]): Website;
        /**
         * @param {{}} includes
         * @return {Website}
         */
        withRawIncludes(includes: {}): Website;
        /**
         * @param {boolean} [shallow=true]
         * @return {Website}
         */
        clone(shallow?: boolean): Website;
    }
    import AbstractBuilder from "src/abstract-builder";
    import RawValue from "src/raw-value";
    import AbstractInclude from "src/website/abstract-include";
}
declare module "src/nls/translation" {
    export default class Translation extends AbstractBuilder {
        /**
         * @param {Locale} locale
         * @param {string} translation
         * @return {Translation}
         */
        static create(locale: Locale, translation: string): Translation;
        /**
         * @param {string} translation
         * @return {Translation}
         */
        static wildcard(translation: string): Translation;
        /**
         * @type {Locale|undefined}
         * @private
         */
        private _locale;
        /**
         * @type {string|undefined}
         * @private
         */
        private _translation;
        /**
         * @return {Locale|undefined}
         */
        get locale(): Locale;
        /**
         * @return {string|undefined}
         */
        get translation(): string;
        /**
         * @param {Locale} locale
         * @return {Translation}
         */
        withLocale(locale: Locale): Translation;
        /**
         * @param {string} translation
         * @return {Translation}
         */
        withTranslation(translation: string): Translation;
        /**
         * @param {boolean} [shallow=true]
         * @return {Translation}
         */
        clone(shallow?: boolean): Translation;
    }
    import AbstractBuilder from "src/abstract-builder";
    import { Locale } from "src/design/locale";
}
declare module "src/nls/nls" {
    export default class NLS extends AbstractBuilder {
        /**
         * @param {string} identifier
         * @param {...Translation}translations
         * @return {NLS}
         */
        static create(identifier: string, ...translations: Translation[]): NLS;
        /**
         * @param {string} identifier
         * @param {Map<Locale,string>} map
         */
        static fromMap(identifier: string, map: Map<any, string>): NLS;
        /**
         * @type {string|undefined}
         * @private
         */
        private _identifier;
        /**
         * @type {[Translation]|undefined}
         * @private
         */
        private _translations;
        /**
         * @return {string|undefined}
         */
        get identifier(): string;
        /**
         * @return {[Translation]|undefined}
         */
        get translations(): [Translation];
        /**
         * @param {string} identifier
         * @return {NLS}
         */
        withIdentifier(identifier: string): NLS;
        /**
         * @param {...Translation} translations
         * @return {NLS}
         */
        withTranslations(...translations: Translation[]): NLS;
        /**
         * @param {boolean} [shallow=true]
         * @return {NLS}
         */
        clone(shallow?: boolean): NLS;
    }
    import AbstractBuilder from "src/abstract-builder";
    import Translation from "src/nls/translation";
}
declare module "src/design/design" {
    export default class Design extends AbstractBuilder {
        /**
         * @type {RawValue|SchemaVersion|undefined}
         * @private
         */
        private _schemaVersion;
        /**
         * @type {string|undefined}
         * @private
         */
        private _title;
        /**
         * @type {string|undefined}
         * @private
         */
        private _author;
        /**
         * @type {string|undefined}
         * @private
         */
        private _date;
        /**
         * @type {{}|undefined}
         * @private
         */
        private _previewImage;
        /**
         * @type {RawValue|Locale|undefined}
         * @private
         */
        private _defaultLocale;
        /**
         * @type {RawValue|[Locale]|undefined}
         * @private
         */
        private _locales;
        /**
         * @type {RawValue|[ContentElementGroup]|undefined}
         * @private
         */
        private _contentElementGroups;
        /**
         * @type {RawValue|[Style]|undefined}
         * @private
         */
        private _styleConfigs;
        /**
         * @type {RawValue|[HtmlEditorConfig]|undefined}
         * @private
         */
        private _htmlEditorConfigs;
        /**
         * @type {RawValue|Website|undefined}
         * @private
         */
        private _website;
        /**
         * @type {RawValue|NLS[]|undefined}
         * @private
         */
        private _nls;
        /**
         * @return {RawValue|SchemaVersion|undefined}
         */
        get schemaVersion(): RawValue | SchemaVersion;
        /**
         * @return {string|undefined}
         */
        get title(): string;
        /**
         * @return {string|undefined}
         */
        get author(): string;
        /**
         * @return {string|undefined}
         */
        get date(): string;
        /**
         * @return {{}|undefined}
         */
        get previewImage(): {};
        /**
         * @return {RawValue|Locale|undefined}
         */
        get defaultLocale(): RawValue | Locale;
        /**
         * @return {RawValue|[Locale]|undefined}
         */
        get locales(): RawValue | [Locale];
        /**
         * @return {RawValue|ContentElementGroup[]|undefined}
         */
        get contentElementGroups(): RawValue | ContentElementGroup[];
        /**
         * @return {RawValue|[Style]|undefined}
         */
        get styleConfigs(): RawValue | [Style];
        /**
         * @return {RawValue|[HtmlEditorConfig]|undefined}
         */
        get htmlEditorConfigs(): RawValue | [HtmlEditorConfig];
        /**
         * @return {RawValue|Website|undefined}
         */
        get website(): RawValue | Website;
        /**
         * @return {RawValue|NLS[]|undefined}
         */
        get nls(): RawValue | NLS[];
        /**
         * @param {SchemaVersion} schemaVersion
         * @return {Design}
         */
        withSchemaVersion(schemaVersion: SchemaVersion): Design;
        /**
         * @param {string} schemaVersion
         * @return {Design}
         */
        withRawSchemaVersion(schemaVersion: string): Design;
        /**
         * @param {string} title
         * @return {Design}
         */
        withTitle(title: string): Design;
        /**
         * @param {string} author
         * @return {Design}
         */
        withAuthor(author: string): Design;
        /**
         * @param {string} date
         * @return {Design}
         */
        withDate(date: string): Design;
        /**
         * @param {{}} previewImage
         * @return {Design}
         */
        withPreviewImage(previewImage: {}): Design;
        /**
         * @param {Locale} defaultLocale
         * @return {Design}
         */
        withDefaultLocale(defaultLocale: Locale): Design;
        /**
         * @param {string} defaultLocale
         * @return {Design}
         */
        withRawDefaultLocale(defaultLocale: string): Design;
        /**
         * @param {...Locale} locales
         * @return {Design}
         */
        withLocales(...locales: Locale[]): Design;
        /**
         * @param {...string} locales
         * @return {Design}
         */
        withRawLocales(...locales: string[]): Design;
        /**
         * @param {...ContentElementGroup} contentElementGroups
         * @return {Design}
         */
        withContentElementGroups(...contentElementGroups: ContentElementGroup[]): Design;
        /**
         * @param {...{}} contentElementGroups
         * @return {Design}
         */
        withRawContentElementGroups(...contentElementGroups: {}[]): Design;
        /**
         * @param {...Style} styleConfigs
         * @return {Design}
         */
        withStyleConfigs(...styleConfigs: Style[]): Design;
        /**
         * @param {{}} styleConfigs
         * @return {Design}
         */
        withRawStyleConfigs(styleConfigs: {}): Design;
        /**
         * @param {...HtmlEditorConfig} htmlEditorConfigs
         * @return {Design}
         */
        withHtmlEditorConfigs(...htmlEditorConfigs: HtmlEditorConfig[]): Design;
        /**
         * @param {{}} htmlEditorConfigs
         * @return {Design}
         */
        withRawHtmlEditorConfigs(htmlEditorConfigs: {}): Design;
        /**
         * @param {Website} website
         * @return {Design}
         * @since 1.3
         */
        withWebsite(website: Website): Design;
        /**
         * @param {{}} website
         * @return {Design}
         * @since 1.3
         */
        withRawWebsite(website: {}): Design;
        /**
         * @param {...NLS} nls
         * @return {Design}
         */
        withNLS(...nls: NLS[]): Design;
        /**
         * @param {{}} nls
         * @return {Design}
         */
        withRawNLS(nls: {}): Design;
        /**
         * @param {boolean} [shallow=true]
         * @return {Design}
         */
        clone(shallow?: boolean): Design;
    }
    import AbstractBuilder from "src/abstract-builder";
    import RawValue from "src/raw-value";
    import { SchemaVersion } from "src/design/schema-version";
    import { Locale } from "src/design/locale";
    import ContentElementGroup from "src/content-element/content-element-group";
    import Style from "src/style/style";
    import HtmlEditorConfig from "src/html-editor-config/html-editor-config";
    import Website from "src/website/website";
    import NLS from "src/nls/nls";
}
declare module "src/content-element/part/plain-text-part" {
    /**
     * @since 1.0
     */
    export default class PlainTextPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @return {PlainTextPart}
         */
        clone(shallow?: boolean): PlainTextPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/formatted-text-part" {
    /**
     * @since 1.0
     */
    export default class FormattedTextPart extends AbstractPart {
        constructor();
        /**
         * @type {HtmlEditorConfig|undefined}
         * @private
         */
        private _htmlEditorConfig;
        /**
         * @return {HtmlEditorConfig|undefined}
         */
        get htmlEditorConfig(): HtmlEditorConfig;
        /**
         * @param {HtmlEditorConfig} htmlEditorConfig
         * @return {FormattedTextPart}
         */
        withHtmlEditorConfig(htmlEditorConfig: HtmlEditorConfig): FormattedTextPart;
        /**
         * @param {boolean} [shallow=true]
         * @return {FormattedTextPart}
         */
        clone(shallow?: boolean): FormattedTextPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
    import HtmlEditorConfig from "src/html-editor-config/html-editor-config";
}
declare module "src/content-element/part/html-part" {
    /**
     * @since 1.0
     */
    export default class HtmlPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @return {HtmlPart}
         */
        clone(shallow?: boolean): HtmlPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/video-part" {
    /**
     * @since 1.0
     */
    export default class VideoPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @return {VideoPart}
         */
        clone(shallow?: boolean): VideoPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/image-part" {
    /**
     * @since 1.0
     */
    export default class ImagePart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @return {ImagePart}
         */
        clone(shallow?: boolean): ImagePart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/background-image-part" {
    /**
     * @since 1.0
     */
    export default class BackgroundImagePart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @return {BackgroundImagePart}
         */
        clone(shallow?: boolean): BackgroundImagePart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/table-part" {
    /**
     * @since 1.0
     */
    export default class TablePart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @return {TablePart}
         */
        clone(shallow?: boolean): TablePart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/iterator-part" {
    /**
     * @since 1.0
     */
    export default class IteratorPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @return {IteratorPart}
         */
        clone(shallow?: boolean): IteratorPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/news-snippets-part" {
    /**
     * @since 1.0
     */
    export default class NewsSnippetsPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @return {NewsSnippetsPart}
         */
        clone(shallow?: boolean): NewsSnippetsPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/form-part" {
    /**
     * @since 1.0
     */
    export default class FormPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @return {FormPart}
         */
        clone(shallow?: boolean): FormPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/form-field-part" {
    /**
     * @since 1.0
     */
    export default class FormFieldPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @return {FormFieldPart}
         */
        clone(shallow?: boolean): FormFieldPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/form-checkbox-part" {
    /**
     * @since 1.0
     */
    export default class FormCheckboxPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @return {FormCheckboxPart}
         */
        clone(shallow?: boolean): FormCheckboxPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/form-textarea-part" {
    /**
     * @since 1.0
     */
    export default class FormTextareaPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @return {FormTextareaPart}
         */
        clone(shallow?: boolean): FormTextareaPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/form-select-part" {
    /**
     * @since 1.0
     */
    export default class FormSelectPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @return {FormSelectPart}
         */
        clone(shallow?: boolean): FormSelectPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/form-radio-part" {
    /**
     * @since 1.0
     */
    export default class FormRadioPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @return {FormRadioPart}
         */
        clone(shallow?: boolean): FormRadioPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/link-part" {
    /**
     * @since 1.0
     */
    export default class LinkPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @return {LinkPart}
         */
        clone(shallow?: boolean): LinkPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/social-follow-part" {
    /**
     * @since 1.0
     */
    export default class SocialFollowPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @return {SocialFollowPart}
         */
        clone(shallow?: boolean): SocialFollowPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/social-share-part" {
    /**
     * @since 1.0
     */
    export default class SocialSharePart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @return {SocialSharePart}
         */
        clone(shallow?: boolean): SocialSharePart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/url-provider-part" {
    /**
     * @since 22.0
     */
    export default class UrlProviderPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @return {UrlProviderPart}
         */
        clone(shallow?: boolean): UrlProviderPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/website/page-include" {
    /**
     * @since 1.3
     */
    export default class PageInclude extends AbstractInclude {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @return {PageInclude}
         */
        clone(shallow?: boolean): PageInclude;
    }
    import AbstractInclude from "src/website/abstract-include";
}
declare module "src/website/include" {
    /**
     * @since 1.3
     */
    export default class Include extends AbstractInclude {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @return {Include}
         */
        clone(shallow?: boolean): Include;
    }
    import AbstractInclude from "src/website/abstract-include";
}
declare module "export/browser" {
    import DesignJsonProperty from "src/design-json-property";
    import AbstractBuilder from "src/abstract-builder";
    import AbstractConstant from "src/abstract-constant";
    import BuilderObjectNormalizer from "src/builder-object-normalizer";
    import ObjectCloner from "src/object-cloner";
    import RawValue from "src/raw-value";
    import AbstractPart from "src/content-element/part/abstract-part";
    import * as Locale from "src/design/locale";
    import * as SchemaVersion from "src/design/schema-version";
    import Design from "src/design/design";
    import ContentElementGroup from "src/content-element/content-element-group";
    import * as Version from "src/version";
    import * as DesignType from "src/design-type";
    import * as Feature from "src/html-editor-config/feature";
    import * as EnterMode from "src/html-editor-config/enter-mode";
    import * as FontSizeUnit from "src/html-editor-config/font-size-unit";
    import * as Format from "src/html-editor-config/format";
    import HtmlEditorConfig from "src/html-editor-config/html-editor-config";
    import Style from "src/style/style";
    import CssClass from "src/style/css-class";
    import * as Icon from "src/content-element/icon";
    import ContentElement from "src/content-element/content-element";
    import * as Part from "src/content-element/part/part";
    import PlainTextPart from "src/content-element/part/plain-text-part";
    import FormattedTextPart from "src/content-element/part/formatted-text-part";
    import HtmlPart from "src/content-element/part/html-part";
    import VideoPart from "src/content-element/part/video-part";
    import ImagePart from "src/content-element/part/image-part";
    import BackgroundImagePart from "src/content-element/part/background-image-part";
    import TablePart from "src/content-element/part/table-part";
    import IteratorPart from "src/content-element/part/iterator-part";
    import NewsSnippetsPart from "src/content-element/part/news-snippets-part";
    import FormPart from "src/content-element/part/form-part";
    import FormFieldPart from "src/content-element/part/form-field-part";
    import FormCheckboxPart from "src/content-element/part/form-checkbox-part";
    import FormTextareaPart from "src/content-element/part/form-textarea-part";
    import FormSelectPart from "src/content-element/part/form-select-part";
    import FormRadioPart from "src/content-element/part/form-radio-part";
    import LinkPart from "src/content-element/part/link-part";
    import SocialFollowPart from "src/content-element/part/social-follow-part";
    import SocialSharePart from "src/content-element/part/social-share-part";
    import UrlProviderPart from "src/content-element/part/url-provider-part";
    import Website from "src/website/website";
    import PageInclude from "src/website/page-include";
    import Include from "src/website/include";
    import NLS from "src/nls/nls";
    import Translation from "src/nls/translation";
    export { DesignJsonProperty, AbstractBuilder, AbstractConstant, BuilderObjectNormalizer, ObjectCloner, RawValue, AbstractPart, Locale, SchemaVersion, Design, ContentElementGroup, Version, DesignType, Feature, EnterMode, FontSizeUnit, Format, HtmlEditorConfig, Style, CssClass, Icon, ContentElement, Part, PlainTextPart, FormattedTextPart, HtmlPart, VideoPart, ImagePart, BackgroundImagePart, TablePart, IteratorPart, NewsSnippetsPart, FormPart, FormFieldPart, FormCheckboxPart, FormTextareaPart, FormSelectPart, FormRadioPart, LinkPart, SocialFollowPart, SocialSharePart, UrlProviderPart, Website, PageInclude, Include, NLS, Translation };
}
declare module "@bsi-cx/design-build" {
    export * from "export/main";
    export * from "export/browser";
}
//# sourceMappingURL=types.d.ts.map