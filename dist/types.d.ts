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
         * @returns {string}
         */
        getValue(): string;
    }
}
declare module "src/design-type" {
    export class DesignType extends AbstractConstant {
    }
    /**
     * @type {DesignType}
     * @since Studio 1.0
     */
    export const LANDINGPAGE: DesignType;
    /**
     * @type {DesignType}
     * @since Studio 1.0
     */
    export const EMAIL: DesignType;
    /**
     * @type {DesignType}
     * @since BSI CX 1.3
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
         * @returns {*}
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
         * Build the configuration. Normally, there is no need to invoke this method manually.
         *
         * @abstract
         * @returns {{}}
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
         * @returns {T}
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
         * @returns {T}
         */
        static clone<T>(source: T, target: T, shallow?: boolean | undefined): T;
        /**
         * @template T
         * @param {T} value
         * @returns {T}
         */
        static cloneValue<T_1>(value: T_1): T_1;
        /**
         * @template T
         * @param {T} source
         * @param {T} target
         * @param {boolean} shallow
         * @returns {T}
         * @private
         */
        private _clone;
        /**
         * @template T
         * @param {T} value
         * @returns {T}
         * @private
         */
        private _cloneValue;
        /**
         * @param {[]} arr
         * @returns {[]}
         * @private
         */
        private _cloneArray;
        /**
         * @param {{}} obj
         * @returns {{}}
         * @private
         */
        private _cloneObject;
    }
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
    export function buildPublicPath(config: any, suffix?: string | undefined): string;
    /**
     * @param {*} obj
     * @returns {string}
     */
    export function toString(obj: any): string;
    /**
     * @see {@link https://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript#answer-3561711}
     * @param {string} input
     * @returns {string}
     */
    export function escapeRegex(input: string): string;
    /**
     * @param {string} str
     * @returns {string}
     */
    export function ucfirst(str: string): string;
    /**
     * @param {string} mayRelativePath
     * @param {string|undefined} [basePathWhenRelative=undefined]
     * @returns {string}
     */
    export function getAbsolutePath(mayRelativePath: string, basePathWhenRelative?: string | undefined): string;
    /**
     * @param {string} str1
     * @param {string} str2
     */
    export function findStringSimilarities(str1: string, str2: string): string;
    /**
     * @param {string} possibleWin32Path
     * @returns {string}
     */
    export function toPosixPath(possibleWin32Path: string): string;
}
declare module "src/build-config/module-config" {
    /**
     * @typedef {import('./build-config').default} BuildConfig
     */
    /**
     * This is the builder class for JavaScript module configurations.
     * Pass objects of this class to {@link BuildConfig#withModules}.
     *
     * @example
     * .withModules(
     *   new ModuleConfig()
     *     .withName('main')
     *     .withPath('main.js'),
     *   new ModuleConfig()
     *     .withName('app')
     *     .withPath(path.resolve(__dirname,'lib','app.js')))
     */
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
         * @returns {string|undefined}
         */
        get name(): string;
        /**
         * @returns {string|undefined}
         */
        get path(): string;
        /**
         * The name for your JavaScript module. The name specified here must be unique in your build configuration.
         * This means you can't configure two modules with the same name. This will be the name of the resulting entry
         * in the Webpack configuration.
         *
         * @param {string} name - The module name.
         * @returns {ModuleConfig}
         */
        withName(name: string): ModuleConfig;
        /**
         * Path to the entry module file. The path can either be an absolute one or relative to the path specified with {@link BuildConfig#withRootPath}.
         *
         * @param {string} path - The path to the module.
         * @returns {ModuleConfig}
         */
        withPath(path: string): ModuleConfig;
        /**
         * @returns {{}}
         */
        build(): {};
        /**
         * @param {boolean|undefined} [shallow=true]
         * @returns {ModuleConfig}
         */
        clone(shallow?: boolean | undefined): ModuleConfig;
    }
    export type BuildConfig = import("src/build-config/build-config").default;
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
         * @returns {string}
         */
        get staticFileFolderPath(): string;
        /**
         * @returns {string}
         */
        get copyAssetsFolderPath(): string;
        /**
         * @returns {{}[]}
         */
        get webpackRules(): {}[];
        /**
         * @returns {Object[]}
         */
        get webpackPlugins(): any[];
    }
}
declare module "src/build-config/validated-build-config" {
    /**
     * @typedef {import('./build-config-interface').default} BuildConfigInterface
     */
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
         * @type {{}[]}
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
         * @type {Object[]}
         * @private
         */
        private _webpackPlugins;
        /**
         * @type {{}[]}
         * @private
         */
        private _webpackRules;
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
         * @returns {{}[]}
         */
        get additionalFilesToCopy(): {}[];
        /**
         * @returns {boolean}
         */
        get sourceMapEnabled(): boolean;
        /**
         * @returns {string}
         */
        get staticFileFolderPath(): string;
        /**
         * @returns {string}
         */
        get copyAssetsFolderPath(): string;
        /**
         * @returns {Object[]}
         */
        get webpackPlugins(): any[];
        /**
         * @returns {{}[]}
         */
        get webpackRules(): {}[];
    }
    export type BuildConfigInterface = import("src/build-config/build-config-interface").default;
}
declare module "src/build-config/default-build-config" {
    /**
     * @typedef {import('./build-config-interface').default} BuildConfigInterface
     */
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
        get webpackPlugins(): any[];
        get webpackRules(): any[];
    }
    export type BuildConfigInterface = import("src/build-config/build-config-interface").default;
}
declare module "src/build-config/build-config-validator" {
    /**
     * @typedef {import('./build-config').default} BuildConfig
     */
    export default class BuildConfigValidator {
        /**
         * @param {BuildConfig} buildConfig
         * @returns {ValidatedBuildConfig}
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
         * @returns {DefaultBuildConfig}
         */
        get defaultBuildConfig(): DefaultBuildConfig;
        /**
         * @returns {BuildConfig}
         */
        get buildConfig(): import("src/build-config/build-config").default;
        /**
         * @returns {ValidatedBuildConfig}
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
         * @returns {string}
         * @private
         */
        private _validateName;
        /**
         * @param {string} version
         * @param {string} property
         * @returns {string}
         * @private
         */
        private _validateVersion;
        /**
         * @param {string} rootPath
         * @param {string} property
         * @returns {string}
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
         * @returns {string}
         * @private
         */
        private _validateRelativeOrAbsoluteFolderPath;
    }
    export type BuildConfig = import("src/build-config/build-config").default;
    import DefaultBuildConfig from "src/build-config/default-build-config";
    import ValidatedBuildConfig from "src/build-config/validated-build-config";
}
declare module "src/build-config/build-config" {
    /**
     * @typedef {import('./module-config').default} ModuleConfig
     * @typedef {import('./default-build-config').default} DefaultBuildConfig
     * @typedef {import('./build-config-interface').default} BuildConfigInterface
     * @typedef {import('./validated-build-config').default} ValidatedBuildConfig
     */
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
         * @type {{}[]}
         * @private
         */
        private _webpackRules;
        /**
         * @type {Object[]}
         * @private
         */
        private _webpackPlugins;
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
        get modules(): import("src/build-config/module-config").default[];
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
         * @returns {string}
         */
        get staticFileFolderPath(): string;
        /**
         * @returns {string}
         */
        get copyAssetsFolderPath(): string;
        /**
         * @returns {{}[]}
         */
        get webpackRules(): {}[];
        /**
         * @returns {Object[]}
         */
        get webpackPlugins(): any[];
        /**
         * The name of this template, e.g. landingpage. This will be included in the name of the resulting ZIP file in the dist folder.
         * Be aware, that you should use a normalized name without any umlauts, special chars, spaces or slashes.
         *
         * @param {string} name - The name of your template.
         * @returns {BuildConfig}
         */
        withName(name: string): BuildConfig;
        /**
         * The version of this template, e.g. 1.0.1. This will be included in the name of the resulting ZIP file in the dist folder.
         *
         * @see {@link https://semver.org/spec/v2.0.0.html}
         * @param {string} version - The version for this template. It is recommended to use a semantic version string.
         * @returns {BuildConfig}
         */
        withVersion(version: string): BuildConfig;
        /**
         * The application version of BSI CX (or BSI Studio) this design is built for.
         *
         * @see {@link Version} for available versions
         * @param {Version} version - The BSI CX version. Default will be {@link CX_22_0}
         * @returns {BuildConfig}
         */
        withTargetVersion(version: Version): BuildConfig;
        /**
         * The type of this design (e.g. email or landingpage).
         *
         * @see {@link DesignType} for available types
         * @param {DesignType} type - The design type to use. Default will be {@link LANDINGPAGE}
         * @returns {BuildConfig}
         */
        withDesignType(type: DesignType): BuildConfig;
        /**
         * The path to the root folder of this template. This folder contains the source code of your template.
         * An absolute path is recommended. If the path is relative, it will be resolved in relation to the current working directory.
         *
         * @param {string} rootPath - The path to your template root. An absolute path is recommended.
         * @returns {BuildConfig}
         */
        withRootPath(rootPath: string): BuildConfig;
        /**
         * A custom output folder path to use. Default: dist/{name}. An absolute path is recommended.
         * If the path is relative, it will be resolved in relation to the current working directory.
         * The folder does not have to exist, the build will create it for you. But it is recommended
         * to ignore the folder and its content in your VCS.
         *
         * @see {@link https://git-scm.com/docs/gitignore}
         * @param {string} outputPath - The path to your output folder. An absolute path is recommended.
         * @returns {BuildConfig}
         */
        withOutputPath(outputPath: string): BuildConfig;
        /**
         * The data properties file for your Twig templates. This file will be required and the contents of this file will be
         * available as "properties" variable inside your Twig templates and trough the <code>bsiProperty</code> functions inside
         * your LESS and SASS files. You can use a relative path. Relative paths will be resolved in relation to your {@link withRootPath|template root}.
         *
         * @param {string} propertiesFilePath - The path to your properties file.
         * @returns {BuildConfig}
         */
        withPropertiesFilePath(propertiesFilePath: string): BuildConfig;
        /**
         * A TCP port number to use for the development server. The default port is 9000. Be aware,
         * that you don't have to configure a separate port for each template of your build.
         * Only the first configuration will be considered.
         *
         * @param {number} devServerPort - The development server port number.
         * @returns {BuildConfig}
         */
        withDevServerPort(devServerPort: number): BuildConfig;
        /**
         * Add a unique hash value to the name of the resulting ZIP file, e.g. landingpage-1.0.0-alpha-089a9.zip.
         *
         * @param {boolean} hashZipFiles - Enable or disable this feature. Default is <code>true</code>.
         * @returns {BuildConfig}
         */
        withHashZipFiles(hashZipFiles: boolean): BuildConfig;
        /**
         * Add additional JavaScript modules. Each additional JavaScript module configuration will result in a separate
         * entry configuration. Be aware, that your modules must be placed inside the modules root path.
         * Use {@link withModulesRootPath} to set a custom modules root path.
         *
         * @param {...ModuleConfig} modules - Pass objects of the {@link BuildConfig} class.
         * @returns {BuildConfig}
         */
        withModules(...modules: ModuleConfig[]): BuildConfig;
        /**
         * Absolute or relative path to the modules root folder. Per default this will be the "modules" folder inside your template root.
         * Relative paths will be resolved in relation to your {@link withRootPath|template root} configuration.
         *
         * @param {string} modulesRootPath - The path to your modules root folder.
         * @returns {BuildConfig}
         */
        withModulesRootPath(modulesRootPath: string): BuildConfig;
        /**
         * Add additional files to copy to the output folder. The configuration here will be passed down to the
         * {@link https://github.com/webpack-contrib/copy-webpack-plugin|CopyWebpackPlugin}. Be aware, that you always
         * can put files inside the "assets" folder inside your template root without any configuration here.
         * You can change the path to the assets folder with the {@link withCopyAssetsFolderPath} method.
         *
         * @see {@link https://github.com/webpack-contrib/copy-webpack-plugin#patterns}
         * @param {...{}} additionalFilesToCopy - Pattern configuration object.
         * @returns {BuildConfig}
         */
        withAdditionalFilesToCopy(...additionalFilesToCopy: {}[]): BuildConfig;
        /**
         * Enable or disable source map generation. If enabled, source maps will be emitted for JavaScript, LESS and SASS
         * files. Enabling this feature will also emit an additional "dev" ZIP file. The generated .map files will only be
         * contained in this ZIP file. So upload the dev ZIP file if you want to debug a design in BSI CX. The dev ZIP file
         * should not be used in production environments. Enabling source maps will also have a slight performance impact.
         *
         * @param {boolean} sourceMapEnabled - Enable or disable the feature. Enabled by default.
         * @returns {BuildConfig}
         */
        withSourceMapEnabled(sourceMapEnabled: boolean): BuildConfig;
        /**
         * Set the folder for static assets (e.g. images or simple JavaScript files).
         * Can either be an absolute or relative path. Relative paths will be normalized in relation to the template root folder.
         * Use {@link withRootPath} to set the template root folder.
         *
         * @param {string} staticFileFolderPath - The path to the static assets folder.
         * @returns {BuildConfig}
         */
        withStaticFileFolderPath(staticFileFolderPath: string): BuildConfig;
        /**
         * Set the root folder to copy additional assets from. Use {@link withAdditionalFilesToCopy} to configure additional
         * assets for your bundle. This can either be an absolute or relative path.
         * Relative paths will be normalized in relation to the template root folder.
         * Use {@link withRootPath} to set the template root folder.
         *
         * @param {string} copyAssetsFolderPath - The path to the copy assets folder.
         * @returns {BuildConfig}
         */
        withCopyAssetsFolderPath(copyAssetsFolderPath: string): BuildConfig;
        /**
         * Configure additional rules for the Webpack configuration. Be aware, that this can clash with the existing rules.
         *
         * @see {@link https://webpack.js.org/configuration/module/#rule}
         * @param {...{}} rules - Webpack rules objects.
         * @returns {BuildConfig}
         */
        withWebpackRules(...rules: {}[]): BuildConfig;
        /**
         * Configure additional plugins for the Webpack configuration. Be aware, that this can clash with the existing plugins.
         *
         * @see {@link https://webpack.js.org/configuration/plugins/}
         * @param {...Object} plugins - Instances of Webpack plugins.
         * @returns {BuildConfig}
         */
        withWebpackPlugins(...plugins: any[]): BuildConfig;
        /**
         * Create a clone of this copy. Can be useful if different templates should be created from the same sources.
         * A shallow clone will be created by default. This means nested objects will still reference the same origin.
         *
         * @param {boolean} [shallow=true] - Create a shallow clone.
         * @returns {BuildConfig}
         */
        clone(shallow?: boolean): BuildConfig;
        /**
         * Validate the build configuration. <strong>There is no need to call this method.</strong>
         * The {@link WebpackConfigBuilder.fromConfigs|WebpackConfigBuilder} will do this for you.
         *
         * @returns {ValidatedBuildConfig} - The validated build config with {@link DefaultBuildConfig|defaults} applied where necessary.
         */
        validate(): ValidatedBuildConfig;
    }
    export type ModuleConfig = import("src/build-config/module-config").default;
    export type DefaultBuildConfig = import("src/build-config/default-build-config").default;
    export type BuildConfigInterface = import("src/build-config/build-config-interface").default;
    export type ValidatedBuildConfig = import("src/build-config/validated-build-config").default;
    import { Version } from "src/version";
    import { DesignType } from "src/design-type";
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
        static ID: string;
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
         * @returns {*}
         */
        static normalize(obj: any): any;
        /**
         * @param {*} obj
         * @returns {*}
         * @private
         */
        private _normalize;
        /**
         * @param {[*]} arr
         * @returns {[*]}
         * @private
         */
        private _normalizeArray;
        /**
         * @param {{}} obj
         * @returns {{}}
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
declare module "src/dist-folder" {
    export default class DistFolder {
        /**
         * @type {string}
         */
        static CONTENT_ELEMENTS: string;
        /**
         * @type {string}
         */
        static INCLUDES: string;
        /**
         * @type {string}
         */
        static ASSETS: string;
        /**
         * @type {string}
         */
        static MODULES: string;
        /**
         * @type {string}
         */
        static STATIC: string;
        /**
         * @type {string}
         */
        static VENDORS: string;
    }
}
declare module "src/browser-utility" {
    /**
     * @param {[string|number]} arr
     * @returns {string}
     */
    export function scalarArrayToList(arr: [string | number]): string;
    /**
     * @template T
     * @param {T} v
     * @returns {T}
     */
    export function identity<T>(v: T): T;
    /**
     * @param {AbstractConstant} constant
     * @returns {string}
     */
    export function constantObjectValue(constant: any): string;
    /**
     * @param {AbstractBuilder} builder
     * @returns {{}}
     */
    export function builderObjectValue(builder: any): {};
    /**
     * Very simple UUID v4 generator. Don't use the <code>crypto.getRandomValues()</code> or the uuid NPM package
     * (won't work in the browser context).
     *
     * @see {@link https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid#answer-2117523}
     * @returns {string}
     */
    export function uuid(): string;
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
        constructor(config: any);
        /**
         * @type {ValidatedBuildConfig}
         * @private
         */
        private _config;
        apply(compiler: any): void;
    }
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
         * @returns {JavaPropertyFileBuilder}
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
         * @returns {string}
         */
        static getContentElementGroupLabel(group: string): string;
        /**
         * @param {string} element
         * @returns {string}
         */
        static getContentElementLabel(element: string): string;
        /**
         * @param {string} element
         * @returns {string}
         */
        static getContentElementDescription(element: string): string;
        /**
         * @param {string} element
         * @returns {string}
         */
        static getContentElementIcon(element: string): string;
        /**
         * @param {string} element
         * @returns {string}
         */
        static getContentElementStyles(element: string): string;
        /**
         * @param {string} element
         * @param {string} part
         * @param {number} index
         * @returns {string}
         */
        static getContentElementPartLabel(element: string, part: string, index: number): string;
        /**
         * @param {string} element
         * @param {string} part
         * @param {number} index
         * @returns {string}
         */
        static getContentElementPartHtmlEditorConfig(element: string, part: string, index: number): string;
        /**
         * @param {string} element
         * @param {string} part
         * @param {number} index
         * @returns {string}
         */
        static _getContentElementPart(element: string, part: string, index: number): string;
        /**
         * @param {string} name
         * @returns {string}
         */
        static getStyleLabel(name: string): string;
        /**
         * @param {string} name
         * @param {string} cssClass
         * @returns {string}
         */
        static getStyleClassLabel(name: string, cssClass: string): string;
        /**
         * @param {string} name
         * @returns {string}
         */
        static getHtmlEditorConfigFeatures(name: string): string;
        /**
         * @param {string} name
         * @returns {string}
         */
        static getHtmlEditorConfigTextColors(name: string): string;
        /**
         * @param {string} name
         * @returns {string}
         */
        static getHtmlEditorConfigBackgroundColors(name: string): string;
        /**
         * @param {string} name
         * @returns {string}
         */
        static getHtmlEditorConfigFormats(name: string): string;
        /**
         * @param {string} name
         * @returns {string}
         */
        static getHtmlEditorConfigFontSizes(name: string): string;
        /**
         * @param {string} name
         * @returns {string}
         */
        static getHtmlEditorConfigFontSizeUnit(name: string): string;
        /**
         * @param {string} name
         * @returns {string}
         */
        static getHtmlEditorConfigFontSizeDefault(name: string): string;
        /**
         * @param {string} name
         * @returns {string}
         */
        static getHtmlEditorConfigLineHeights(name: string): string;
        /**
         * @param {string} name
         * @returns {string}
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
        constructor(config: any);
        /**
         * @type {ValidatedBuildConfig}
         * @private
         */
        private _config;
        apply(compiler: any): void;
    }
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
         * @returns {string}
         */
        get modulePath(): string;
        /**
         * @returns {Set<string>}
         */
        get dependencies(): Set<string>;
        /**
         *
         * @returns {Module}
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
         * @returns {string|undefined}
         */
        get propertiesFilePath(): string;
        /**
         * @returns {ModuleLoader}
         */
        get propertiesModule(): ModuleLoader;
        /**
         * Get the original properties object without the proxy.
         *
         * @returns {{}}
         */
        get properties(): {};
        /**
         * Get the properties object, guarded by a proxy.
         *
         * @returns {{}}
         */
        get propertiesProxy(): {};
        /**
         * @returns {boolean}
         */
        get propertiesReloadRequired(): boolean;
        forcePropertiesReload(): void;
        /**
         * @returns {boolean}
         */
        hasPropertiesFilePath(): boolean;
        /**
         * @returns {{}}
         * @private
         */
        private _getPropertiesProxy;
        /**
         * @returns {{}}
         * @private
         */
        private _getProxyHandler;
        /**
         * @param {{}} target
         * @param {string} property
         * @returns {*}
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
declare module "src/abstract-property-plugin" {
    /**
     * @abstract
     */
    export default class AbstractPropertyPlugin {
        /**
         * @param {BuildContext} context
         */
        constructor(context: any);
        /**
         * @type {CssPropertyResolver}
         * @protected
         */
        protected _propertyResolver: any;
        /**
         * @type {{}}
         * @protected
         */
        protected _properties: {};
        /**
         * @param {*} property
         * @returns {*}
         */
        getProperty(property: any): any;
    }
}
declare module "src/bsi-less-property-plugin" {
    export default class BsiLessPropertyPlugin extends AbstractPropertyPlugin {
        /**
         * @returns {number[]}
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
declare module "src/css/abstract-css-property" {
    export default class AbstractCssProperty {
        /**
         * @param {*} value
         * @returns {function(*):AbstractCssProperty|undefined}
         */
        static getParser(value: any): (arg0: any) => AbstractCssProperty | undefined;
        /**
         * @returns {*}
         * @abstract
         */
        getLessNode(): any;
        /**
         * @returns {*}
         * @abstract
         */
        getSassObject(): any;
        /**
         * Will be used in Twig files.
         *
         * @returns {string}
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
         * @returns {CssColor}
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
         * @returns {CssColor}
         */
        static fromRGBString(str: string): CssColor;
        /**
         * @param {string} color
         * @returns {CssColor}
         */
        static fromKeyword(color: string): CssColor;
        /**
         * @param {*} value
         * @returns {function(*):CssColor|undefined}
         */
        static getParser(value: any): (arg0: any) => CssColor | undefined;
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
         * @returns {number}
         */
        get red(): number;
        /**
         * @returns {number}
         */
        get green(): number;
        /**
         * @returns {number}
         */
        get blue(): number;
        /**
         * @returns {number}
         */
        get alpha(): number;
        /**
         * @returns {string}
         */
        get hex(): string;
        /**
         * @returns {string}
         */
        get rgb(): string;
        /**
         * @returns {string}
         */
        get rgba(): string;
        /**
         * @param {number} color
         * @returns {number}
         * @private
         */
        private _assertColor;
        /**
         * @param {number|undefined} [color=undefined]
         * @returns {string}
         * @private
         */
        private _toHex;
        /**
         * @returns {string}
         * @private
         */
        private _toRgb;
        /**
         * @returns {string}
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
         * @returns {CssDimension}
         */
        static fromNumber(num: number): CssDimension;
        /**
         * @param {*} value
         * @returns {function(*):CssDimension|undefined}
         */
        static getParser(value: any): (arg0: any) => CssDimension | undefined;
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
         * @returns {number}
         */
        get value(): number;
        /**
         * @returns {string|undefined}
         */
        get unit(): string;
    }
    import AbstractCssProperty from "src/css/abstract-css-property";
}
declare module "src/css/css-raw" {
    export default class CssRaw extends AbstractCssProperty {
        /**
         * @param {*} value
         * @returns {CssRaw}
         */
        static fromAny(value: any): CssRaw;
        /**
         * @param {*} value
         * @returns {function(*): CssRaw}
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
         * @returns {*}
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
         * @returns {undefined}
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
         * @returns {string}
         */
        get rawUrl(): string;
        /**
         * @returns {string}
         */
        get externalUrl(): string;
        /**
         * @returns {string}
         */
        get inlineUrl(): string;
        /**
         * @returns {string}
         */
        get url(): string;
        /**
         * @returns {string}
         */
        get ref(): string;
        /**
         * @returns {string}
         */
        get inlineRef(): string;
        /**
         * @returns {string}
         */
        get externalRef(): string;
        /**
         * @returns {string}
         */
        get css(): string;
        /**
         * @returns {string}
         */
        get inlineCss(): string;
        /**
         * @returns {string}
         */
        get inlineRefCss(): string;
        /**
         * @returns {string}
         */
        get externalCss(): string;
        /**
         * @returns {string}
         */
        get externalRefCss(): string;
        /**
         * @returns {boolean}
         */
        get inline(): boolean;
        /**
         * @returns {string}
         * @private
         */
        private _getInlineUrl;
        /**
         * @param {string} url
         * @returns {string}
         * @private
         */
        private _getRef;
        /**
         * @param {string} url
         * @returns {string}
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
         * @returns {CssBool}
         */
        static fromBoolean(value: boolean): CssBool;
        /**
         * @param {*} value
         * @returns {(function(*): CssBool)|undefined}
         */
        static getParser(value: any): ((arg0: any) => CssBool) | undefined;
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
         * @returns {boolean}
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
         * @returns {AbstractCssProperty|T}
         */
        resolve<T>(value: T): any;
        /**
         * @param {string|number} value
         * @returns {AbstractCssProperty}
         * @private
         */
        private _createProperty;
    }
}
declare module "src/build-context" {
    export default class BuildContext {
        /**
         * @param {ValidatedBuildConfig} config
         */
        constructor(config: any);
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
         * @returns {ValidatedBuildConfig}
         */
        get config(): any;
        /**
         * @returns {TwigContext}
         */
        get properties(): TwigContext;
        /**
         * @returns {CssPropertyResolver}
         */
        get cssPropertyResolver(): CssPropertyResolver;
    }
    import TwigContext from "src/twig-context";
    import CssPropertyResolver from "src/css/css-property-resolver";
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
        static fromConfigs(...configs: any[]): {
            entry: {};
            name: any;
            context: any;
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
        constructor(config: any);
        /**
         * @type {BuildContext}
         * @private
         */
        private _context;
        /**
         * @returns {BuildContext}
         */
        get context(): BuildContext;
        /**
         * @returns {ValidatedBuildConfig}
         */
        get config(): any;
        /**
         * @returns {TwigContext}
         */
        get twigContext(): any;
        build(): {
            entry: {};
            name: any;
            context: any;
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
         * @returns {string}
         * @private
         */
        private _getDesignJsFilePath;
        /**
         * Get the entry configurations for the Java Script modules.
         *
         * @returns {{}}
         */
        _getJavaScriptModuleEntries(): {};
        /**
         * @param {ModuleConfig} config
         * @returns {{filename: string, import: string, runtime: string}}
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
         * @returns {boolean}
         */
        _isStaticJavaScriptFile(fileToCheck: string): boolean;
        /**
         * Rule for regular Java Script file handling.
         *
         * @returns {[{}]}
         */
        _getRegularJavaScriptFileRuleConfig(): [{}];
        /**
         * @returns {{}[]}
         * @private
         */
        private _getAdditionalRules;
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
         * @returns {BsiCxTwigContextWebpackPlugin[]}
         * @private
         */
        private _getBsiCxTwigContextWebpackPlugin;
        /**
         * @returns {[BsiCxWebpackPlugin]}
         * @private
         */
        private _getBsiCxWebpackPluginConfig;
        /**
         * Webpack ZIP plugin configuration.
         *
         * @returns {[]}
         */
        _getZipPluginConfig(): [];
        /**
         * @returns {Object[]}
         * @private
         */
        private _getAdditionalPlugins;
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
    import BsiCxWebpackLegacyDesignPlugin from "src/bsi-cx-webpack-legacy-design-plugin";
}
declare module "src/css/helper" {
    /**
     * @param {...string} pathSegments
     * @returns {CssUrl}
     */
    export function url(...pathSegments: string[]): CssUrl;
    /**
     * @param {...string} pathSegments
     * @returns {CssUrl}
     */
    export function dataUri(...pathSegments: string[]): CssUrl;
    /**
     * @param {...string|number} channels
     * @returns {CssColor|string}
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
    import DefaultBuildConfig from "src/build-config/default-build-config";
    import WebpackConfigBuilder from "src/webpack-config-builder";
    import * as css from "src/css/helper";
    export { Version, DesignType, BuildConfig, ModuleConfig, DefaultBuildConfig, WebpackConfigBuilder, css };
}
declare module "src/content-element/part/part" {
    export class Part extends AbstractConstant {
    }
    /**
     * @type {Part}
     * @since Studio 1.0
     */
    export const PLAIN_TEXT: Part;
    /**
     * @type {Part}
     * @since Studio 1.0
     */
    export const FORMATTED_TEXT: Part;
    /**
     * @type {Part}
     * @since Studio 1.0
     */
    export const HTML: Part;
    /**
     * @type {Part}
     * @since Studio 1.0
     */
    export const VIDEO: Part;
    /**
     * @type {Part}
     * @since Studio 1.0
     */
    export const IMAGE: Part;
    /**
     * @type {Part}
     * @since Studio 1.0
     */
    export const BACKGROUND_IMAGE: Part;
    /**
     * @type {Part}
     * @since Studio 1.0
     */
    export const TABLE: Part;
    /**
     * @type {Part}
     * @since Studio 1.0
     */
    export const ITERATOR: Part;
    /**
     * @type {Part}
     * @since Studio 1.0
     */
    export const NEWS_SNIPPETS: Part;
    /**
     * @type {Part}
     * @since Studio 1.0
     */
    export const FORM: Part;
    /**
     * @type {Part}
     * @since Studio 1.0
     */
    export const FORM_FIELD: Part;
    /**
     * @type {Part}
     * @since Studio 1.0
     */
    export const FORM_CHECKBOX: Part;
    /**
     * @type {Part}
     * @since Studio 1.0
     */
    export const FORM_TEXTAREA: Part;
    /**
     * @type {Part}
     * @since Studio 1.0
     */
    export const FORM_SELECT: Part;
    /**
     * @type {Part}
     * @since Studio 1.0
     */
    export const FORM_RADIO: Part;
    /**
     * @type {Part}
     * @since Studio 1.0
     */
    export const LINK: Part;
    /**
     * @type {Part}
     * @since Studio 1.0
     */
    export const SOCIAL_FOLLOW: Part;
    /**
     * @type {Part}
     * @since Studio 1.0
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
         * @type {string}
         * @private
         */
        private _id;
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
         * @returns {string}
         */
        get id(): string;
        /**
         * @returns {Part}
         */
        get partId(): Part;
        /**
         * @returns {string|undefined}
         */
        get label(): string;
        /**
         * The ID of the part. You can apply an unique identifier to your content element part.
         * <strong>It is highly recommended to use a {@link https://duckduckgo.com/?q=uuid|UUID}.</strong>
         * This property is only for the design build and will not appear in the final build artifacts.
         * The advantage of using this property is, that you don't have to care about the order of your parts
         * in your specification. The build will reorder the part definitions in the order they appear in the
         * corresponding template. This can be very handy in large and complex elements with many parts.
         *
         * @example
         * // template.html
         * <div data-bsi-element="title">
         *   <h1 data-bsi-element-part="539a1787-7df2-43ab-9a67-e1f913ad5d7c">Lorem ipsum</h1>
         * </div>
         *
         * // title.js
         * module.exports = new ContentElement()
         *   .withElementId('title')
         *   .withLabel('Title')
         *   .withFile(require('./template.html')
         *   .withParts(
         *     new PlainTextPart()
         *       .withId('539a1787-7df2-43ab-9a67-e1f913ad5d7c')
         *       .withLabel('Title'));
         *
         * // dist/title-4026bb9f6ec6c2284775.html
         * <div data-bsi-element="title">
         *   <h1 data-bsi-element-part="plain-text">Lorem ipsum</h1>
         * </div>
         * @param {string} id - The ID to use.
         * @returns {AbstractPart}
         */
        withId(id: string): AbstractPart;
        /**
         * The set content element part's label.
         *
         * @param {string} label - The label to set.
         * @returns {AbstractPart}
         * @since Studio 1.0
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
     * This defines the fallback locale to ues.
     *
     * @see {@link Design#withDefaultLocale}
     * @see {@link Design#withLocales}
     * @type {Locale}
     */
    export const WILDCARD: Locale;
    /**
     * @see {@link Design#withDefaultLocale}
     * @see {@link Design#withLocales}
     * @type {Locale}
     */
    export const EN: Locale;
    /**
     * @see {@link Design#withDefaultLocale}
     * @see {@link Design#withLocales}
     * @type {Locale}
     */
    export const EN_GB: Locale;
    /**
     * @see {@link Design#withDefaultLocale}
     * @see {@link Design#withLocales}
     * @type {Locale}
     */
    export const EN_US: Locale;
    /**
     * @see {@link Design#withDefaultLocale}
     * @see {@link Design#withLocales}
     * @type {Locale}
     */
    export const DE: Locale;
    /**
     * @see {@link Design#withDefaultLocale}
     * @see {@link Design#withLocales}
     * @type {Locale}
     */
    export const DE_DE: Locale;
    /**
     * @see {@link Design#withDefaultLocale}
     * @see {@link Design#withLocales}
     * @type {Locale}
     */
    export const DE_CH: Locale;
    /**
     * @see {@link Design#withDefaultLocale}
     * @see {@link Design#withLocales}
     * @type {Locale}
     */
    export const FR: Locale;
    /**
     * @see {@link Design#withDefaultLocale}
     * @see {@link Design#withLocales}
     * @type {Locale}
     */
    export const FR_CH: Locale;
    /**
     * @see {@link Design#withDefaultLocale}
     * @see {@link Design#withLocales}
     * @type {Locale}
     */
    export const IT: Locale;
    /**
     * @see {@link Design#withDefaultLocale}
     * @see {@link Design#withLocales}
     * @type {Locale}
     */
    export const IT_CH: Locale;
    import AbstractConstant from "src/abstract-constant";
}
declare module "src/design/schema-version" {
    export class SchemaVersion extends AbstractConstant {
    }
    /**
     * Use this in website templates for BSI CX 1.3.
     *
     * @see {@link Design#withSchemaVersion}
     * @type {SchemaVersion}
     * @since BSI CX 1.3
     */
    export const V_1_0: SchemaVersion;
    /**
     * Use this in all templates for BSI CX 22.0.
     *
     * @see {@link Design#withSchemaVersion}
     * @type {SchemaVersion}
     * @since 22.0
     */
    export const V_22_0: SchemaVersion;
    import AbstractConstant from "src/abstract-constant";
}
declare module "src/design/design" {
    /**
     * This is the builder class to specify a design.
     *
     * @example
     * module.exports = new Design()
     *   .withSchemaVersion(SchemaVersion.V_22_0)
     *   .withTitle('My BSI CX Design')
     *   .withAuthor('John Doe')
     *   .withDate('18.8.2021')
     *   .withPreviewImage(require('./preview.png'))
     *   .withRawDefaultLocale('en')
     *   withHtmlEditorConfigs(
     *     require('./configs/html-editor/full.js'),
     *     require('./configs/html-editor/minimal.js'))
     *   .withContentElementGroups(
     *     new ContentElementGroup()
     *       .withGroupId('content')
     *       .withLabel('Content')
     *       .withContentElements(
     *         require('./content-elements/content/title'),
     *         require('./content-elements/content/text')));
     */
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
         * @returns {RawValue|SchemaVersion|undefined}
         */
        get schemaVersion(): RawValue | SchemaVersion;
        /**
         * @returns {string|undefined}
         */
        get title(): string;
        /**
         * @returns {string|undefined}
         */
        get author(): string;
        /**
         * @returns {string|undefined}
         */
        get date(): string;
        /**
         * @returns {{}|undefined}
         */
        get previewImage(): {};
        /**
         * @returns {RawValue|Locale|undefined}
         */
        get defaultLocale(): RawValue | Locale;
        /**
         * @returns {RawValue|[Locale]|undefined}
         */
        get locales(): RawValue | [Locale];
        /**
         * @returns {RawValue|ContentElementGroup[]|undefined}
         */
        get contentElementGroups(): any[] | RawValue;
        /**
         * @returns {RawValue|[Style]|undefined}
         */
        get styleConfigs(): RawValue | [any];
        /**
         * @returns {RawValue|[HtmlEditorConfig]|undefined}
         */
        get htmlEditorConfigs(): RawValue | [any];
        /**
         * @returns {RawValue|Website|undefined}
         */
        get website(): any;
        /**
         * @returns {RawValue|NLS[]|undefined}
         */
        get nls(): any[] | RawValue;
        /**
         * The schema version to use. This is relevant for website templates and all templates for BSI CX 22.0 onwards.
         *
         * @example
         * .withSchemaVersion(SchemaVersion.V_22_0)
         * @see {@link SchemaVersion} for available versions
         * @see {@link withRawSchemaVersion} to set a raw value
         * @param {SchemaVersion} schemaVersion - The schema version to use.
         * @returns {Design}
         */
        withSchemaVersion(schemaVersion: SchemaVersion): Design;
        /**
         * Supply a raw schema version.
         *
         * @example
         * .withRawSchemaVersion('22.0')
         * @see {@link withSchemaVersion}
         * @param {string} schemaVersion - The schema version to use.
         * @returns {Design}
         */
        withRawSchemaVersion(schemaVersion: string): Design;
        /**
         * The title for your design.
         *
         * @param {string} title - The design title.
         * @returns {Design}
         */
        withTitle(title: string): Design;
        /**
         * The author of your design.
         *
         * @param {string} author - The design author.
         * @returns {Design}
         */
        withAuthor(author: string): Design;
        /**
         * The creation date of your design e.g. 18.08.2021.
         *
         * @example
         * .withDate('18.08.2021')
         * @param {string} date - The design date.
         * @returns {Design}
         */
        withDate(date: string): Design;
        /**
         * The preview image of your design. Use in combination with require.
         *
         * @example
         * .withPreviewImage(require('./preview-image.png'))
         * @param {{}} previewImage
         * @returns {Design}
         */
        withPreviewImage(previewImage: {}): Design;
        /**
         * The default locale for your design. This is relevant for website templates and all templates for BSI CX 22.0 onwards.
         *
         * @example
         * .withDefaultLocale(Locale.EN)
         * @see {@link Locale} for available locales
         * @see {@link withRawDefaultLocale} to set a raw value
         * @param {Locale} defaultLocale - The design default locale.
         * @returns {Design}
         */
        withDefaultLocale(defaultLocale: Locale): Design;
        /**
         * Set the raw default locale as string.
         *
         * @example
         * .withRawDefaultLocale('en')
         * @see {@link withDefaultLocale}
         * @param {string} defaultLocale - The default locale.
         * @returns {Design}
         */
        withRawDefaultLocale(defaultLocale: string): Design;
        /**
         * The available locales for your design. This is relevant for website templates and all templates for BSI CX 22.0 onwards.
         *
         * @example
         * .withLocales(Locale.EN_GB,Locale.DE_CH)
         * @see {@link Locale} for available locales
         * @see {@link withRawLocales} to set a raw value
         * @param {...Locale} locales - The design locales.
         * @returns {Design}
         */
        withLocales(...locales: Locale[]): Design;
        /**
         * Set the raw locales as string.
         *
         * @example
         * .withRawLocales('en-GB','de-CH')
         * @see {@link withLocales}
         * @param {...string} locales - The design locales.
         * @returns {Design}
         */
        withRawLocales(...locales: string[]): Design;
        /**
         * Your design's content element groups.
         *
         * @see {@link withRawContentElementGroups} to set a raw value
         * @param {...ContentElementGroup} contentElementGroups - The content element groups.
         * @returns {Design}
         */
        withContentElementGroups(...contentElementGroups: any[]): Design;
        /**
         * Set the content element groups of your design as raw object.
         *
         * @example
         * .withRawContentElementGroups(
         *   {
         *     groupId: 'content',
         *     label: 'Content',
         *     contentElements: []
         *   },
         *   {
         *     groupId: 'advanced',
         *     label: 'Advanced',
         *     contentElements: []
         *   }
         * )
         * @see {@link withContentElementGroups}
         * @param {...{}} contentElementGroups - The content element groups.
         * @returns {Design}
         */
        withRawContentElementGroups(...contentElementGroups: {}[]): Design;
        /**
         * The style configurations of your design.
         *
         * @see {@link withRawStyleConfigs} to set a raw value
         * @param {...Style} styleConfigs - The style configurations.
         * @returns {Design}
         */
        withStyleConfigs(...styleConfigs: any[]): Design;
        /**
         * Set the style configurations of your design as raw object.
         *
         * @example
         * .withRawStyleConfigs({
         *   'background-color': {
         *     label: 'Background Color',
         *     cssClasses: [
         *       { cssClass: 'black-background', label: 'Black' },
         *       { cssClass: 'blue-background', label: 'Blue' }
         *     ]
         *   },
         *   'text-color': {
         *     label: 'Text Color',
         *     cssClasses: [
         *       { cssClass: 'black-text', label: 'Black' },
         *       { cssClass: 'blue-text', label: 'Blue' }
         *     ]
         *   }
         * })
         * @see {@link withStyleConfigs}
         * @param {{}} styleConfigs - The <code>styleConfigs</code> object.
         * @returns {Design}
         */
        withRawStyleConfigs(styleConfigs: {}): Design;
        /**
         * The HTML editor configurations of your design.
         *
         * @see {@link withRawHtmlEditorConfigs} to set a raw value
         * @param {...HtmlEditorConfig} htmlEditorConfigs
         * @returns {Design}
         */
        withHtmlEditorConfigs(...htmlEditorConfigs: any[]): Design;
        /**
         * Set the HTML editor configurations as raw object.
         *
         * @example
         * .withRawHtmlEditorConfigs({
         *   minimal: {
         *     features: ['italic','bold','underline','strikeThrough']
         *   }
         * })
         * @see {@link withHtmlEditorConfigs}
         * @param {{}} htmlEditorConfigs - The <code>htmlEditorConfigs</code> object.
         * @returns {Design}
         */
        withRawHtmlEditorConfigs(htmlEditorConfigs: {}): Design;
        /**
         * The website configuration of your design.
         *
         * @see {@link withRawWebsite} to set a raw value
         * @param {Website} website - The website object.
         * @returns {Design}
         * @since BSI CX 1.3
         */
        withWebsite(website: any): Design;
        /**
         * Set the raw website object of your design.
         *
         * @example
         * .withRawWebsite({
         *   maxNavigationLevel: 2,
         *   includes: {
         *     __page__: {
         *       editable: true,
         *       file: require('./includes/page.hbs'),
         *       name: 'Template for content pages'
         *     },
         *     footer: {
         *       editable: true,
         *       file: require('./includes/footer.html'),
         *       name: 'Footer'
         *     }
         *   }
         * })
         * @param {{}} website - The raw <code>website</code> object.
         * @returns {Design}
         * @since BSI CX 1.3
         */
        withRawWebsite(website: {}): Design;
        /**
         * Configure you design's translation support.
         *
         * @see {@link withRawNLS} to set a raw value
         * @param {...NLS} nls
         * @returns {Design}
         */
        withNLS(...nls: any[]): Design;
        /**
         * Set the raw value of the <code>nls</code> property.
         *
         * @example
         * .withRawNLS({
         *   action: { '*': 'action', de: 'Aktion' },
         *   name: { '*': 'name', de: 'Name' }
         * })
         * @see {@link withNLS}
         * @param {{}} nls - The raw value.
         * @returns {Design}
         */
        withRawNLS(nls: {}): Design;
        /**
         * Clone the configuration.
         *
         * @example
         * let design1 = new Design().withName('my first design');
         * let design2 = design1.clone().withName('my second design');
         * design1 === design2 // false
         * @param {boolean} [shallow=true] - Create a shallow clone.
         * @returns {Design}
         */
        clone(shallow?: boolean): Design;
    }
    import AbstractBuilder from "src/abstract-builder";
    import RawValue from "src/raw-value";
    import { SchemaVersion } from "src/design/schema-version";
    import { Locale } from "src/design/locale";
}
declare module "src/content-element/icon" {
    export class Icon extends AbstractConstant {
    }
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const HEADING: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const TEXT: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const TEXT_WITH_IMAGE: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const IMAGE: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const TABLE: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const LIST: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const VIDEO: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const MEGAPHONE: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const SOCIAL_FOLLOW: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const SOCIAL_SHARE: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const SNIPPET: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const QRCODE: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const PAPERCLIP: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const DOCUMENT: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const PHONE: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const COMMUNICATION: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const HANDSHAKE: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const HEART: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const INFO: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const ENVELOPE: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const FACEBOOK: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const YOUTUBE: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const PERSON_MALE: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const PERSON_FEMALE: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const ASTERISK: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const SMILEY: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const DIVIDER: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const PARAMETER: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const TWITTER: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const HEADSET: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const METADATA: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const PILE: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const CHAIN: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const SIGNPOST: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
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
     * @since Studio 1.0
     */
    export const RADIOBUTTON: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const CHECKBOX: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const TEXTAREA: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const FORMFIELD: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const DROPDOWN: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const ONE_COLUMN: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const TWO_COLUMNS: Icon;
    /**
     * @type {Icon}
     * @since Studio 1.0
     */
    export const THREE_COLUMNS: Icon;
    import AbstractConstant from "src/abstract-constant";
}
declare module "src/style/style" {
    /**
     * @since Studio 1.1
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
         * @returns {string|undefined}
         */
        get identifier(): string;
        /**
         * @returns {string|undefined}
         */
        get label(): string;
        /**
         * @returns {RawValue|[CssClass]|undefined}
         */
        get cssClasses(): RawValue | [any];
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
        withCssClasses(...cssClasses: any[]): Style;
        /**
         * @param {...{}} cssClasses
         * @returns {Style}
         */
        withRawCssClasses(...cssClasses: {}[]): Style;
        /**
         * @param {boolean} [shallow=true]
         * @returns {Style}
         */
        clone(shallow?: boolean): Style;
    }
    import AbstractBuilder from "src/abstract-builder";
    import RawValue from "src/raw-value";
}
declare module "src/content-element/content-element" {
    /**
     * @typedef {import('../style/style').default} Style
     * @typedef {import('./part/abstract-part').default} AbstractPart
     * @typedef {import('./content-element-group').default} ContentElementGroup
     */
    /**
     * This is the builder class for content elements. Pass objects of this class to {@link ContentElementGroup#withContentElements}.
     *
     * @example
     * .withContentElements(
     *   new ContentElement()
     *     .withElementId('image-with-text')
     *     .withLabel('Image with text')
     *     .withDescription('Displays an image with an optional text.')
     *     .withFile(require('./template.twig'))
     *     .withIcon(Icon.IMAGE)
     *     .withParts(
     *       new ImagePart()
     *         .withLabel('Image'),
     *       new PlainTextPart()
     *         .withLabel('Description')))
     */
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
         * @type {RawValue|Icon|undefined}
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
         * @returns {string|undefined}
         */
        get elementId(): string;
        /**
         * @returns {string|undefined}
         */
        get label(): string;
        /**
         * @returns {string|undefined}
         */
        get description(): string;
        /**
         * @returns {{}|undefined}
         */
        get file(): {};
        /**
         * @returns {RawValue|Icon|undefined}
         */
        get icon(): RawValue | Icon;
        /**
         * @returns {boolean|undefined}
         */
        get hidden(): boolean;
        /**
         * @returns {RawValue|Style[]|undefined}
         */
        get styleConfigs(): RawValue | import("src/style/style").default[];
        /**
         * @returns {RawValue|AbstractPart[]|undefined}
         */
        get parts(): RawValue | import("src/content-element/part/abstract-part").default[];
        /**
         * Set the ID of this content element.
         *
         * @param {string} elementId - The content element's ID.
         * @returns {ContentElement}
         * @since Studio 1.0
         */
        withElementId(elementId: string): ContentElement;
        /**
         * Set the label of the content element.
         *
         * @param {string} label - The label of the content element.
         * @returns {ContentElement}
         * @since Studio 1.0
         */
        withLabel(label: string): ContentElement;
        /**
         * Set the template to use for this content element. Be aware, that you have to require the template.
         *
         * @example
         * .withFile(require('./template.twig'))
         * @param {string} file - The reference to the required template.
         * @returns {ContentElement}
         * @since Studio 1.0
         */
        withFile(file: string): ContentElement;
        /**
         * Set the icon for this content element.
         *
         * @example
         * .withIcon(Icon.IMAGE)
         * @see {@link Icon} for available icons
         * @see {@link withRawIcon} to set a raw value
         * @param {Icon} icon - The icon for this content element.
         * @returns {ContentElement}
         * @since Studio 1.0
         */
        withIcon(icon: Icon): ContentElement;
        /**
         * Set the icon for this content element as raw value.
         *
         * @example
         * .withRawIcon('image')
         * @see {@link withIcon}
         * @param {string} icon - The raw icon for this content element.
         * @returns {ContentElement}
         */
        withRawIcon(icon: string): ContentElement;
        /**
         * Declare this content element as hidden.
         *
         * @example
         * .withHidden(true)
         * @param {boolean} hidden - The hidden state.
         * @returns {ContentElement}
         * @since BSI CX 1.3
         */
        withHidden(hidden: boolean): ContentElement;
        /**
         * Declare the styles for this content element.
         *
         * @example
         * let textColorStyle = new Style()
         *   .withIdentifier('text-color')
         *   .withLabel('Text Color')
         *   .withCssClasses(
         *     new CssClass()
         *       .withCssClass('blue-text')
         *       .withLabel('Blue'),
         *     new CssClass()
         *       .withCssClass('red-text')
         *       .withLabel('Red'))
         *  let textElement = new ContentElement()
         *    .withStyleConfigs(
         *      textColorStyle,
         *      require('./styles/background-color'))
         * @see {@link withRawStyleConfigs} to set a raw value
         * @param {...Style} styleConfigs - Styles for this content element.
         * @returns {ContentElement}
         * @since Studio 1.1
         */
        withStyleConfigs(...styleConfigs: Style[]): ContentElement;
        /**
         * Declare the styles for this content element as raw value. Be aware, that you just pass the name of the referenced
         * style rather than the style configuration itself (which is specified in the <code>styleConfigs</code> section
         * in your design specification.
         *
         * @example
         * .withRawStyleConfigs('text-color', 'background-color')
         * @see {@link withStyleConfigs}
         * @param {...string} styleConfigs - Style config identifiers.
         * @returns {ContentElement}
         * @since Studio 1.1
         */
        withRawStyleConfigs(...styleConfigs: string[]): ContentElement;
        /**
         * Specify the parts of your content element.
         *
         * @example
         * .withParts(
         *   new ImagePart()
         *     .withLabel('Image'),
         *   new PlainTextPart()
         *     .withLabel('Description'))
         * @see {@link withRawParts} to set a raw value
         * @param {...AbstractPart} parts - The parts to use.
         * @returns {ContentElement}
         * @since Studio 1.0
         */
        withParts(...parts: AbstractPart[]): ContentElement;
        /**
         * Set the parts of your content element as raw value.
         *
         * @example
         * .withRawParts(
         *   {
         *     partId: 'image',
         *     label: 'Image'
         *   },
         *   {
         *     partId: 'plain-text',
         *     label: 'Description'
         *   }
         * )
         * @see {@link withParts}
         * @param {...{}} parts - The parts as raw value.
         * @returns {ContentElement}
         * @since Studio 1.0
         */
        withRawParts(...parts: {}[]): ContentElement;
        /**
         * @param {boolean} [shallow=true]
         * @returns {ContentElement}
         */
        clone(shallow?: boolean): ContentElement;
    }
    export type Style = import("src/style/style").default;
    export type AbstractPart = import("src/content-element/part/abstract-part").default;
    export type ContentElementGroup = import("src/content-element/content-element-group").default;
    import AbstractBuilder from "src/abstract-builder";
    import RawValue from "src/raw-value";
    import { Icon } from "src/content-element/icon";
}
declare module "src/content-element/content-element-group" {
    /**
     * @typedef {import('./content-element').default} ContentElement
     */
    /**
     * This is the builder class to specify content element groups.
     *
     * @example
     * module.exports = new ContentElementGroup()
     *   .withGroupId('content')
     *   .withLabel('Content')
     *   .withContentElements(
     *     require('./content-elements/content/title'),
     *     require('./content-elements/content/text')));
     */
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
         * @returns {string|undefined}
         */
        get groupId(): string;
        /**
         * @returns {string|undefined}
         */
        get label(): string;
        /**
         * @returns {boolean|undefined}
         */
        get hidden(): boolean;
        /**
         * @returns {RawValue|[ContentElement]|undefined}
         */
        get contentElements(): RawValue | [import("src/content-element/content-element").default];
        /**
         * Set an unique identifier for the content element group. If not set, a UUID v4 will be used.
         * <strong>It is recommended to set the group identifier.</strong>
         *
         * @param {string} groupId - The group ID.
         * @returns {ContentElementGroup}
         */
        withGroupId(groupId: string): ContentElementGroup;
        /**
         * The label for this content element group.
         *
         * @param {string} label - The group label.
         * @returns {ContentElementGroup}
         */
        withLabel(label: string): ContentElementGroup;
        /**
         * Declare this content element group as hidden. It is not required to set this property.
         * Groups are visible per default.
         *
         * @param {boolean} hidden - Hide this group.
         * @returns {ContentElementGroup}
         */
        withHidden(hidden: boolean): ContentElementGroup;
        /**
         * Set the content elements of your group.
         *
         * @example
         * .withContentElements(
         *   new ContentElement()
         *     .withElementId('image-with-text')
         *     .withLabel('Image with text')
         *     .withDescription('Displays an image with an optional text.')
         *     .withFile(require('./template.twig'))
         *     .withIcon(Icon.IMAGE)
         *     .withParts(
         *       new ImagePart()
         *         .withLabel('Image'),
         *       new PlainTextPart()
         *         .withLabel('Description')))
         * @see {@link withRawContentElements} to set a raw value
         * @see {@link ContentElement}
         * @param {...ContentElement} contentElements - The content elements to use.
         * @returns {ContentElementGroup}
         */
        withContentElements(...contentElements: ContentElement[]): ContentElementGroup;
        /**
         * Set the content elements of your group as raw value.
         *
         * @example
         * .withRawContentElements({
         *   elementId: 'title',
         *   file: require('./title/template.twig'),
         *   icon 'heading',
         *   label: 'Title',
         *   parts: [
         *     {
         *       partId: 'plain-text',
         *       label: 'Title'
         *     }
         *   ]
         * })
         * @see {@link withContentElements}
         * @param {...{}} contentElements - The content elements as raw value.
         * @returns {ContentElementGroup}
         */
        withRawContentElements(...contentElements: {}[]): ContentElementGroup;
        /**
         * @param {boolean} [shallow=true]
         * @returns {ContentElementGroup}
         */
        clone(shallow?: boolean): ContentElementGroup;
    }
    export type ContentElement = import("src/content-element/content-element").default;
    import AbstractBuilder from "src/abstract-builder";
    import RawValue from "src/raw-value";
}
declare module "src/html-editor-config/feature" {
    export class Feature extends AbstractConstant {
    }
    /**
     * Bold formatting option.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const BOLD: Feature;
    /**
     * Italic formatting option.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const ITALIC: Feature;
    /**
     * Underline formatting option.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const UNDERLINE: Feature;
    /**
     * Strike trough formatting option.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const STRIKE_THROUGH: Feature;
    /**
     * Subscript formatting option.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const SUBSCRIPT: Feature;
    /**
     * Superscript formatting option.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const SUPERSCRIPT: Feature;
    /**
     * Set the font size in the editor.
     *
     * @see {@link HtmlEditorConfig#withFontSizes}
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const FONT_SIZE: Feature;
    /**
     * Set the line height in the editor.
     *
     * @see {@link HtmlEditorConfig#withLineHeights}
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const LINE_HEIGHT: Feature;
    /**
     * Set the text color in the editor.
     *
     * @see {@link HtmlEditorConfig#withTextColors}
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const TEXT_COLOR: Feature;
    /**
     * Set the background color in the editor.
     *
     * @see {@link HtmlEditorConfig#withBackgroundColors}
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const BACKGROUND_COLOR: Feature;
    /**
     * Align the text left.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const ALIGN_LEFT: Feature;
    /**
     * Align the text center.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const ALIGN_CENTER: Feature;
    /**
     * Align the text right.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const ALIGN_RIGHT: Feature;
    /**
     * Align the text justify.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const ALIGN_JUSTIFY: Feature;
    /**
     * Create an ordered list.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const FORMAT_OL: Feature;
    /**
     * Create an unordered list.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const FORMAT_UL: Feature;
    /**
     * Outdent the text.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const OUTDENT: Feature;
    /**
     * Indent the text.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const INDENT: Feature;
    /**
     * Enable paragraph format options.
     *
     * @see {@link HtmlEditorConfig#withFormats}
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const PARAGRAPH_FORMAT: Feature;
    /**
     * Quote the text.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const QUOTE: Feature;
    /**
     * Insert special characters.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const SPECIAL_CHARACTERS: Feature;
    /**
     * Insert emoticons.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const EMOTICONS: Feature;
    /**
     * Insert a link.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const INSERT_LINK: Feature;
    /**
     * Clear all applied styles and formatting.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const CLEAR_FORMATTING: Feature;
    /**
     * Undo the previous action.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const UNDO: Feature;
    /**
     * Redo the previous action.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const REDO: Feature;
    /**
     * Show the editor in fullscreen mode.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const FULLSCREEN: Feature;
    /**
     * Select all text.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const SELECT_ALL: Feature;
    /**
     * Edit the raw HTML code.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const HTML: Feature;
    /**
     * Show the editor help.
     *
     * @see {@link HtmlEditorConfig#withFeatures}
     * @type {Feature}
     */
    export const HELP: Feature;
    import AbstractConstant from "src/abstract-constant";
}
declare module "src/html-editor-config/enter-mode" {
    export class EnterMode extends AbstractConstant {
    }
    /**
     * Wrap paragraphs with <code>&lt;p&gt;&lt;/p&gt;</code> on a line feed in the HTML editor.
     *
     * @see {@link HtmlEditorConfig#withEnterMode}
     * @type {EnterMode}
     */
    export const P: EnterMode;
    /**
     * Add a <code>&lt;/br&gt;</code> on a line feed in the HTML editor.
     *
     * @see {@link HtmlEditorConfig#withEnterMode}
     * @type {EnterMode}
     */
    export const BR: EnterMode;
    /**
     * Wrap paragraphs with <code>&lt;div&gt;&lt;/div&gt;</code> on a line feed in the HTML editor.
     *
     * @see {@link HtmlEditorConfig#withEnterMode}
     * @type {EnterMode}
     */
    export const DIV: EnterMode;
    import AbstractConstant from "src/abstract-constant";
}
declare module "src/html-editor-config/font-size-unit" {
    export class FontSizeUnit extends AbstractConstant {
    }
    /**
     * Font sizes as pixel values.
     *
     * @see {@link HtmlEditorConfig#withFontSizeUnit}
     * @type {FontSizeUnit}
     */
    export const PX: FontSizeUnit;
    /**
     * Font sizes as em values.
     *
     * @see {@link HtmlEditorConfig#withFontSizeUnit}
     * @type {FontSizeUnit}
     */
    export const EM: FontSizeUnit;
    /**
     * Font sizes as rem values.
     *
     * @see {@link HtmlEditorConfig#withFontSizeUnit}
     * @type {FontSizeUnit}
     */
    export const REM: FontSizeUnit;
    /**
     * Font sizes as pt values.
     *
     * @see {@link HtmlEditorConfig#withFontSizeUnit}
     * @type {FontSizeUnit}
     */
    export const PT: FontSizeUnit;
    /**
     * Font sizes as cm values.
     *
     * @see {@link HtmlEditorConfig#withFontSizeUnit}
     * @type {FontSizeUnit}
     */
    export const CM: FontSizeUnit;
    /**
     * Font sizes as mm values.
     *
     * @see {@link HtmlEditorConfig#withFontSizeUnit}
     * @type {FontSizeUnit}
     */
    export const MM: FontSizeUnit;
    import AbstractConstant from "src/abstract-constant";
}
declare module "src/html-editor-config/format" {
    export class Format extends AbstractConstant {
    }
    /**
     * Allow <code>&lt;p&gt;</code> tags.
     *
     * @see {@link HtmlEditorConfig#withFormats}
     * @type {Format}
     */
    export const P: Format;
    /**
     * Allow <code>&lt;h1&gt;</code> tags.
     *
     * @see {@link HtmlEditorConfig#withFormats}
     * @type {Format}
     */
    export const H1: Format;
    /**
     * Allow <code>&lt;h2&gt;</code> tags.
     *
     * @see {@link HtmlEditorConfig#withFormats}
     * @type {Format}
     */
    export const H2: Format;
    /**
     * Allow <code>&lt;h3&gt;</code> tags.
     *
     * @see {@link HtmlEditorConfig#withFormats}
     * @type {Format}
     */
    export const H3: Format;
    /**
     * Allow <code>&lt;h4&gt;</code> tags.
     *
     * @see {@link HtmlEditorConfig#withFormats}
     * @type {Format}
     */
    export const H4: Format;
    /**
     * Allow <code>&lt;h5&gt;</code> tags.
     *
     * @see {@link HtmlEditorConfig#withFormats}
     * @type {Format}
     */
    export const H5: Format;
    /**
     * Allow <code>&lt;h6&gt;</code> tags.
     *
     * @see {@link HtmlEditorConfig#withFormats}
     * @type {Format}
     */
    export const H6: Format;
    /**
     * Allow <code>&lt;pre&gt;</code> tags.
     *
     * @see {@link HtmlEditorConfig#withFormats}
     * @type {Format}
     */
    export const PRE: Format;
    import AbstractConstant from "src/abstract-constant";
}
declare module "src/html-editor-config/html-editor-config" {
    /**
     * This is the builder class to specify a HTML editor configuration.
     *
     * @example
     * module.exports = new HtmlEditorConfig()
     *   .withIdentifier('minimal')
     *   .withRawEnterMode('p')
     *   .withFeatures(
     *     Feature.BOLD,
     *     Feature.ITALIC,
     *     Feature.UNDERLINE);
     */
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
         * Set an unique identifier for the editor configuration. If not set, a UUID v4 will be used.
         * It is recommended to set the identifier.
         *
         * @param {string} identifier - The unique identifier for this editor config.
         * @returns {HtmlEditorConfig}
         */
        withIdentifier(identifier: string): HtmlEditorConfig;
        /**
         * The features enable in this HTML editor configuration.
         *
         * @example
         * .withFeatures(Feature.ITALIC, Feature.BOLD, Feature.UNDERLINE)
         * @see {@link Feature} for available features
         * @see {@link withRawFeatures} to set a raw value
         * @param {...Feature} features - The features to enable.
         * @returns {HtmlEditorConfig}
         */
        withFeatures(...features: Feature[]): HtmlEditorConfig;
        /**
         * Set the raw <code>features</code> property.
         *
         * @example
         * .withRawFeatures('bold', 'italic', 'underline')
         * @see {@link withFeatures}
         * @param {...string} features - The raw features to enable.
         * @returns {HtmlEditorConfig}
         */
        withRawFeatures(...features: string[]): HtmlEditorConfig;
        /**
         * Set the available text colors. Specify the colors in the hexadecimal format.
         *
         * @example
         * .withTextColors('#ff00ff', '#ff0000', '#00ff00')
         * @see {@link TEXT_COLOR} to enable the feature
         * @param {...string} textColors - The text colors to set.
         * @returns {HtmlEditorConfig}
         */
        withTextColors(...textColors: string[]): HtmlEditorConfig;
        /**
         * Set the available background colors. Specify the colors in the hexadecimal format.
         *
         * @example
         * .withBackgroundColors('#ff00ff', '#ff0000', '#00ff00')
         * @see {@link BACKGROUND_COLOR} to enable the feature
         * @param {...string} backgroundColors - The background colors to set.
         * @returns {HtmlEditorConfig}
         */
        withBackgroundColors(...backgroundColors: string[]): HtmlEditorConfig;
        /**
         * Specify the available formats.
         *
         * @example
         * .withFormats(Format.P, Format.PRE)
         * @see {@link Format} for available formats
         * @see {@link withRawFormats} to set a raw value
         * @param {...Format} formats - The formats to set.
         * @returns {HtmlEditorConfig}
         */
        withFormats(...formats: Format[]): HtmlEditorConfig;
        /**
         * Specify a raw value for the <code>formats</code> field.
         *
         * @example
         * .withRawFormats('p', 'pre')
         * @see {@link withFormats}
         * @param {...string} formats - The raw formats to set.
         * @returns {HtmlEditorConfig}
         */
        withRawFormats(...formats: string[]): HtmlEditorConfig;
        /**
         * Specify the available font sizes.
         *
         * @example
         * .withFontSizes(12, 13, 14, 15, 16)
         * @see {@link FONT_SIZE} to enable this feature
         * @param {...number} fontSizes - The font sizes to set.
         * @returns {HtmlEditorConfig}
         */
        withFontSizes(...fontSizes: number[]): HtmlEditorConfig;
        /**
         * Specify the font size unit to use.
         *
         * @example
         * .withFontSizeUnit(FontSizeUnit.PX)
         * @see {@link withRawFontSizeUnit} to set the raw value
         * @param {FontSizeUnit} fontSizeUnit - The font size unit to set.
         * @returns {HtmlEditorConfig}
         */
        withFontSizeUnit(fontSizeUnit: FontSizeUnit): HtmlEditorConfig;
        /**
         * Set the raw value for the <code>fontSizeUnit</code> property.
         *
         * @example
         * .withRawFontSizeUnit('px')
         * @see {@link withFontSizeUnit}
         * @param {string} fontSizeUnit - The raw font size unit to set.
         * @returns {HtmlEditorConfig}
         */
        withRawFontSizeUnit(fontSizeUnit: string): HtmlEditorConfig;
        /**
         * Set the default font size to use.
         *
         * @example
         * .withFontSizeDefault(16)
         * @param {number} fontSizeDefault - The default font size to set.
         * @returns {HtmlEditorConfig}
         */
        withFontSizeDefault(fontSizeDefault: number): HtmlEditorConfig;
        /**
         * Set the available line heights.
         *
         * @example
         * .withLineHeights(1, 1.15 , 1.5, 2)
         * @see {@link LINE_HEIGHT} to enable this feature
         * @param {...number} lineHeights - The line heights.
         * @returns {HtmlEditorConfig}
         */
        withLineHeights(...lineHeights: number[]): HtmlEditorConfig;
        /**
         * Define the enter mode to use.
         *
         * @example
         * .withEnterMode(EnterMode.P)
         * @see {@link withRawEnterMode} to set the raw value
         * @param {EnterMode} enterMode - The enter mode.
         * @returns {HtmlEditorConfig}
         */
        withEnterMode(enterMode: EnterMode): HtmlEditorConfig;
        /**
         * Set the raw enter mode.
         *
         * @example
         * .withRawEnterMode('p')
         * @param {string} enterMode - The raw enter mode.
         * @returns {HtmlEditorConfig}
         */
        withRawEnterMode(enterMode: string): HtmlEditorConfig;
        /**
         * @param {boolean} [shallow=true]
         * @returns {HtmlEditorConfig}
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
declare module "src/style/css-class" {
    export default class CssClass extends AbstractBuilder {
        /**
         * @param {string} cssClass
         * @param {string} label
         * @returns {CssClass}
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
         * @returns {string|undefined}
         */
        get cssClass(): string;
        /**
         * @returns {string|undefined}
         */
        get label(): string;
        /**
         * @param {string} cssClass
         * @returns {CssClass}
         */
        withCssClass(cssClass: string): CssClass;
        /**
         * @param {string} label
         * @returns {CssClass}
         */
        withLabel(label: string): CssClass;
        /**
         * @param {boolean} [shallow=true]
         * @returns {CssClass}
         */
        clone(shallow?: boolean): CssClass;
    }
    import AbstractBuilder from "src/abstract-builder";
}
declare module "src/content-element/part/plain-text-part" {
    /**
     * @since Studio 1.0
     */
    export default class PlainTextPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @returns {PlainTextPart}
         */
        clone(shallow?: boolean): PlainTextPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/formatted-text-part" {
    /**
     * @since Studio 1.0
     */
    export default class FormattedTextPart extends AbstractPart {
        constructor();
        /**
         * @type {HtmlEditorConfig|undefined}
         * @private
         */
        private _htmlEditorConfig;
        /**
         * @returns {HtmlEditorConfig|undefined}
         */
        get htmlEditorConfig(): any;
        /**
         * @param {HtmlEditorConfig} htmlEditorConfig
         * @returns {FormattedTextPart}
         */
        withHtmlEditorConfig(htmlEditorConfig: any): FormattedTextPart;
        /**
         * @param {boolean} [shallow=true]
         * @returns {FormattedTextPart}
         */
        clone(shallow?: boolean): FormattedTextPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/html-part" {
    /**
     * @since Studio 1.0
     */
    export default class HtmlPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @returns {HtmlPart}
         */
        clone(shallow?: boolean): HtmlPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/video-part" {
    /**
     * @since Studio 1.0
     */
    export default class VideoPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @returns {VideoPart}
         */
        clone(shallow?: boolean): VideoPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/image-part" {
    /**
     * @since Studio 1.0
     */
    export default class ImagePart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @returns {ImagePart}
         */
        clone(shallow?: boolean): ImagePart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/background-image-part" {
    /**
     * @since Studio 1.0
     */
    export default class BackgroundImagePart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @returns {BackgroundImagePart}
         */
        clone(shallow?: boolean): BackgroundImagePart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/table-part" {
    /**
     * @since Studio 1.0
     */
    export default class TablePart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @returns {TablePart}
         */
        clone(shallow?: boolean): TablePart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/iterator-part" {
    /**
     * @since Studio 1.0
     */
    export default class IteratorPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @returns {IteratorPart}
         */
        clone(shallow?: boolean): IteratorPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/news-snippets-part" {
    /**
     * @since Studio 1.0
     */
    export default class NewsSnippetsPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @returns {NewsSnippetsPart}
         */
        clone(shallow?: boolean): NewsSnippetsPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/form-part" {
    /**
     * @since Studio 1.0
     */
    export default class FormPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @returns {FormPart}
         */
        clone(shallow?: boolean): FormPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/form-field-part" {
    /**
     * @since Studio 1.0
     */
    export default class FormFieldPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @returns {FormFieldPart}
         */
        clone(shallow?: boolean): FormFieldPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/form-checkbox-part" {
    /**
     * @since Studio 1.0
     */
    export default class FormCheckboxPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @returns {FormCheckboxPart}
         */
        clone(shallow?: boolean): FormCheckboxPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/form-textarea-part" {
    /**
     * @since Studio 1.0
     */
    export default class FormTextareaPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @returns {FormTextareaPart}
         */
        clone(shallow?: boolean): FormTextareaPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/form-select-part" {
    /**
     * @since Studio 1.0
     */
    export default class FormSelectPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @returns {FormSelectPart}
         */
        clone(shallow?: boolean): FormSelectPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/form-radio-part" {
    /**
     * @since Studio 1.0
     */
    export default class FormRadioPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @returns {FormRadioPart}
         */
        clone(shallow?: boolean): FormRadioPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/link-part" {
    /**
     * @since Studio 1.0
     */
    export default class LinkPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @returns {LinkPart}
         */
        clone(shallow?: boolean): LinkPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/social-follow-part" {
    /**
     * @since Studio 1.0
     */
    export default class SocialFollowPart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @returns {SocialFollowPart}
         */
        clone(shallow?: boolean): SocialFollowPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/social-share-part" {
    /**
     * @since Studio 1.0
     */
    export default class SocialSharePart extends AbstractPart {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @returns {SocialSharePart}
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
         * @returns {UrlProviderPart}
         */
        clone(shallow?: boolean): UrlProviderPart;
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/website/website" {
    /**
     * @since BSI CX 1.3
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
         * @returns {number|undefined}
         */
        get maxNavigationLevel(): number;
        /**
         * @returns {RawValue|AbstractInclude[]|undefined}
         */
        get includes(): any[] | RawValue;
        /**
         * @param {number} maxNavigationLevel
         * @returns {Website}
         */
        withMaxNavigationLevel(maxNavigationLevel: number): Website;
        /**
         * @param {...AbstractInclude} includes
         * @returns {Website}
         */
        withIncludes(...includes: any[]): Website;
        /**
         * @param {{}} includes
         * @returns {Website}
         */
        withRawIncludes(includes: {}): Website;
        /**
         * @param {boolean} [shallow=true]
         * @returns {Website}
         */
        clone(shallow?: boolean): Website;
    }
    import AbstractBuilder from "src/abstract-builder";
    import RawValue from "src/raw-value";
}
declare module "src/website/abstract-include" {
    /**
     * @abstract
     * @since BSI CX 1.3
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
         * @returns {string|undefined}
         */
        get identifier(): string;
        /**
         * @returns {boolean|undefined}
         */
        get editable(): boolean;
        /**
         * @returns {{}|undefined}
         */
        get file(): {};
        /**
         * @returns {string|undefined}
         */
        get name(): string;
        /**
         * @param {string} identifier
         * @returns {AbstractInclude}
         */
        withIdentifier(identifier: string): AbstractInclude;
        /**
         * @param {boolean} editable
         * @returns {AbstractInclude}
         */
        withEditable(editable: boolean): AbstractInclude;
        /**
         * @param {{}} file
         * @returns {AbstractInclude}
         */
        withFile(file: {}): AbstractInclude;
        /**
         * @param {string} name
         * @returns {AbstractInclude}
         */
        withName(name: string): AbstractInclude;
    }
    import AbstractBuilder from "src/abstract-builder";
}
declare module "src/website/page-include" {
    /**
     * @since BSI CX 1.3
     */
    export default class PageInclude extends AbstractInclude {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @returns {PageInclude}
         */
        clone(shallow?: boolean): PageInclude;
    }
    import AbstractInclude from "src/website/abstract-include";
}
declare module "src/website/include" {
    /**
     * @since BSI CX 1.3
     */
    export default class Include extends AbstractInclude {
        constructor();
        /**
         * @param {boolean} [shallow=true]
         * @returns {Include}
         */
        clone(shallow?: boolean): Include;
    }
    import AbstractInclude from "src/website/abstract-include";
}
declare module "src/nls/translation" {
    export default class Translation extends AbstractBuilder {
        /**
         * @param {Locale} locale
         * @param {string} translation
         * @returns {Translation}
         */
        static create(locale: Locale, translation: string): Translation;
        /**
         * @param {string} translation
         * @returns {Translation}
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
         * @returns {Locale|undefined}
         */
        get locale(): Locale;
        /**
         * @returns {string|undefined}
         */
        get translation(): string;
        /**
         * @param {Locale} locale
         * @returns {Translation}
         */
        withLocale(locale: Locale): Translation;
        /**
         * @param {string} translation
         * @returns {Translation}
         */
        withTranslation(translation: string): Translation;
        /**
         * @param {boolean} [shallow=true]
         * @returns {Translation}
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
         * @returns {NLS}
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
         * @returns {string|undefined}
         */
        get identifier(): string;
        /**
         * @returns {[Translation]|undefined}
         */
        get translations(): [Translation];
        /**
         * @param {string} identifier
         * @returns {NLS}
         */
        withIdentifier(identifier: string): NLS;
        /**
         * @param {...Translation} translations
         * @returns {NLS}
         */
        withTranslations(...translations: Translation[]): NLS;
        /**
         * @param {boolean} [shallow=true]
         * @returns {NLS}
         */
        clone(shallow?: boolean): NLS;
    }
    import AbstractBuilder from "src/abstract-builder";
    import Translation from "src/nls/translation";
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