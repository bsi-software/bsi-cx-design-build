declare module "src/abstract-constant" {
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
declare module "src/build-config" {
    /**
     * The configuration object for the build of one template.
     */
    export default class BuildConfig {
        /**
         * @type {string}
         */
        _name: string;
        /**
         * @type {string}
         */
        _version: string;
        /**
         * @type {Version}
         */
        _targetVersion: Version;
        /**
         * @type {DesignType}
         */
        _designType: DesignType;
        /**
         * @type {string}
         */
        _rootPath: string;
        /**
         * @type {string}
         */
        _outputPath: string;
        /**
         * @type {{}}
         */
        _properties: {};
        /**
         * @type {number}
         */
        _devServerPort: number;
        /**
         * @type {boolean}
         */
        _hashZipFiles: boolean;
        /**
         * @type {{}}
         */
        _modules: {};
        /**
         * @type {string}
         */
        _modulesRootPath: string;
        /**
         * @type {[{}]}
         */
        _additionalFilesToCopy: [{}];
        /**
         * @type {boolean}
         */
        _sourceMapEnabled: boolean;
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
         * @returns {string|undefined}
         */
        get outputPath(): string;
        /**
         * @returns {{}}
         */
        get properties(): {};
        /**
         * @returns {number}
         */
        get devServerPort(): number;
        /**
         * @returns {boolean}
         */
        get hashZipFiles(): boolean;
        /**
         * @returns {{}}
         */
        get modules(): {};
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
         * The data properties for your Twig templates. This object will be available as "properties" variable inside your Twig templates.
         *
         * @param {{}} properties
         * @returns {BuildConfig}
         */
        withProperties(properties: {}): BuildConfig;
        /**
         * A TCP port number to use for the development server. The default port is 9000. Be aware, that you don't have to configure a separate port for each template.
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
         * @param {{}} modules
         * @returns {BuildConfig}
         */
        withModules(modules: {}): BuildConfig;
        /**
         * Add one additional Java Script module.
         *
         * @param {string} name
         * @param {string} path
         * @returns {BuildConfig}
         */
        withModule(name: string, path: string): BuildConfig;
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
         * @param {[{}]} additionalFilesToCopy
         * @returns {BuildConfig}
         */
        withAdditionalFilesToCopy(additionalFilesToCopy: [{}]): BuildConfig;
        /**
         * Add a single configuration for additional files to copy to the output folder.
         *
         * @param {{}} additionalFileToCopy
         * @returns {BuildConfig}
         */
        withAdditionalFileToCopy(additionalFileToCopy: {}): BuildConfig;
        /**
         * Enable or disable source maps.
         *
         * @param {boolean} sourceMapEnabled
         * @returns {BuildConfig}
         */
        withSourceMapEnabled(sourceMapEnabled: boolean): BuildConfig;
        /**
         * @returns {BuildConfig}
         */
        validate(): BuildConfig;
        /**
         * @param {string} name
         * @param {object} type
         * @param {boolean} required
         */
        _checkInstanceofAndRequired(name: string, type: object, required: boolean): void;
    }
    import { Version } from "src/version";
    import { DesignType } from "src/design-type";
}
declare module "src/handlebars-helpers" {
    var _default: {
        'bsi.nls': (key: any) => any;
    };
    export default _default;
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
     * @param {BuildConfig} config
     * @param {string|undefined} [suffix=undefined]
     */
    export function buildPublicPath(config: BuildConfig, suffix?: string | undefined): string;
    /**
     * @param {*} obj
     * @return {string}
     */
    export function toString(obj: any): string;
    export class StaticJavaScriptCondition {
        /**
         * @type {RegExp}
         */
        static FILE_EXTENSION: RegExp;
        /**
         * @param {string} root
         * @param {string} file
         * @returns {boolean}
         */
        static isInsideStaticFolder(root: string, file: string): boolean;
        /**
         * @param {string} root
         * @param {string} file
         * @returns {boolean}
         */
        static test(root: string, file: string): boolean;
    }
    import BuildConfig from "src/build-config";
}
declare module "src/bsi-cx-webpack-plugin" {
    export default class BsiCxWebpackPlugin {
        /**
         * @type {string}
         */
        static PLUGIN_NAME: string;
        /**
         * @param {BuildConfig} config
         */
        constructor(config: BuildConfig);
        _config: BuildConfig;
        apply(compiler: any): void;
    }
    import BuildConfig from "src/build-config";
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
     * @param {*} v
     * @return {*}
     */
    export function identity(v: any): any;
    /**
     * @param {string|number|boolean} v
     * @return {string|number|boolean}
     */
    export function scalarIdentity(v: string | number | boolean): string | number | boolean;
    /**
     * @param {AbstractConstant} constant
     * @return {string}
     */
    export function constantObjectValue(constant: any): string;
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
declare module "src/design-json-property" {
    export default class DesignJsonProperty {
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
    }
}
declare module "src/bsi-cx-webpack-legacy-design-plugin" {
    export default class BsiCxWebpackLegacyDesignPlugin {
        /**
         * @type {string}
         */
        static PLUGIN_NAME: string;
        /**
         * @param {BuildConfig} config
         */
        constructor(config: BuildConfig);
        _config: BuildConfig;
        apply(compiler: any): void;
    }
    import BuildConfig from "src/build-config";
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
        _name: string;
        _version: string;
        _enabled: boolean;
        _prodZipFileName: string;
        _devZipFileName: string;
        /**
         * @param {Compilation} compilation
         * @param {Asset} asset
         */
        _handleZipAsset(compilation: any, asset: any): void;
        apply(compiler: any): void;
    }
}
declare module "src/webpack-config-builder" {
    export default class WebpackConfigBuilder {
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
        }[];
        /**
         * @param {BuildConfig} config
         */
        constructor(config: BuildConfig);
        _config: BuildConfig;
        /**
         * @returns {BuildConfig}
         */
        get config(): BuildConfig;
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
        };
        /**
         * The default output path: dist/{name}
         *
         * @returns {string}
         * @private
         */
        private _getDefaultOutputPath;
        /**
         * The output path to use.
         *
         * @returns {string}
         */
        _getOutputPath(): string;
        /**
         * The default modules path: ./modules
         *
         * @returns {string}
         */
        _getDefaultModulesRootPath(): string;
        /**
         * The modules path to use.
         *
         * @returns {string}
         */
        _getModulesRootPath(): string;
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
        _getDesignJsFilePath(): string;
        /**
         * Get the entry configurations for the Java Script modules.
         *
         * @returns {[{}]}
         */
        _getJavaScriptModuleEntries(): [{}];
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
         * BSI CX Webpack plugin.
         *
         * @returns {[BsiCxWebpackPlugin]}
         */
        _getBsiCxWebpackPluginConfig(): [BsiCxWebpackPlugin];
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
    import BuildConfig from "src/build-config";
    import BsiCxWebpackPlugin from "src/bsi-cx-webpack-plugin";
    import BsiCxWebpackZipHashPlugin from "src/bsi-cx-webpack-zip-hash-plugin";
    import BsiCxWebpackLegacyDesignPlugin from "src/bsi-cx-webpack-legacy-design-plugin";
}
declare module "export/main" {
    import * as Version from "src/version";
    import * as DesignType from "src/design-type";
    import BuildConfig from "src/build-config";
    import WebpackConfigBuilder from "src/webpack-config-builder";
    import BsiCxWebpackPlugin from "src/bsi-cx-webpack-plugin";
    import BsiCxWebpackZipHashPlugin from "src/bsi-cx-webpack-zip-hash-plugin";
    import BsiCxWebpackLegacyDesignPlugin from "src/bsi-cx-webpack-legacy-design-plugin";
    export { Version, DesignType, BuildConfig, WebpackConfigBuilder, BsiCxWebpackPlugin, BsiCxWebpackZipHashPlugin, BsiCxWebpackLegacyDesignPlugin };
}
declare module "src/abstract-builder" {
    export default class AbstractBuilder {
        /**
         * @return {{}}
         */
        build(): {};
        /**
         * @param {string} property
         * @param {{}} targetObj
         * @param {function} extractFunc
         * @protected
         */
        protected _applyPropertyIfDefined(property: string, targetObj: {}, extractFunc: Function): void;
    }
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
declare module "src/html-editor-config/html-editor-config" {
    export default class HtmlEditorConfig extends AbstractBuilder {
        /**
         * @type {string|undefined}
         * @private
         */
        private _identifier;
        /**
         * @type {Feature[]|undefined}
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
         * @type {Format[]|undefined}
         * @private
         */
        private _formats;
        /**
         * @type {number[]|undefined}
         * @private
         */
        private _fontSizes;
        /**
         * @type {FontSizeUnit|undefined}
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
         * @type {EnterMode|undefined}
         * @private
         */
        private _enterMode;
        /**
         * @returns {string|undefined}
         */
        get identifier(): string;
        /**
         * @returns {Feature[]|undefined}
         */
        get features(): Feature[];
        /**
         * @returns {string[]|undefined}
         */
        get textColors(): string[];
        /**
         * @returns {string[]|undefined}
         */
        get backgroundColors(): string[];
        /**
         * @returns {Format[]|undefined}
         */
        get formats(): Format[];
        /**
         * @returns {number[]|undefined}
         */
        get fontSizes(): number[];
        /**
         * @returns {FontSizeUnit|undefined}
         */
        get fontSizeUnit(): FontSizeUnit;
        /**
         * @returns {number|undefined}
         */
        get fontSizeDefault(): number;
        /**
         * @returns {number[]|undefined}
         */
        get lineHeights(): number[];
        /**
         * @returns {EnterMode|undefined}
         */
        get enterMode(): EnterMode;
        /**
         * @param {string} identifier
         * @returns {HtmlEditorConfig}
         */
        withIdentifier(identifier: string): HtmlEditorConfig;
        /**
         * @param {Feature} features
         * @returns {HtmlEditorConfig}
         */
        withFeatures(...features: Feature): HtmlEditorConfig;
        /**
         * @param {string} textColors
         * @returns {HtmlEditorConfig}
         */
        withTextColors(...textColors: string): HtmlEditorConfig;
        /**
         * @param {string} backgroundColors
         * @returns {HtmlEditorConfig}
         */
        withBackgroundColors(...backgroundColors: string): HtmlEditorConfig;
        /**
         * @param {Format} formats
         * @returns {HtmlEditorConfig}
         */
        withFormats(...formats: Format): HtmlEditorConfig;
        /**
         * @param {number} fontSizes
         * @returns {HtmlEditorConfig}
         */
        withFontSizes(...fontSizes: number): HtmlEditorConfig;
        /**
         * @param {FontSizeUnit} fontSizeUnit
         * @returns {HtmlEditorConfig}
         */
        withFontSizeUnit(fontSizeUnit: FontSizeUnit): HtmlEditorConfig;
        /**
         * @param {number} fontSizeDefault
         * @returns {HtmlEditorConfig}
         */
        withFontSizeDefault(fontSizeDefault: number): HtmlEditorConfig;
        /**
         * @param {number} lineHeights
         * @returns {HtmlEditorConfig}
         */
        withLineHeights(...lineHeights: number): HtmlEditorConfig;
        /**
         * @param {EnterMode} enterMode
         * @returns {HtmlEditorConfig}
         */
        withEnterMode(enterMode: EnterMode): HtmlEditorConfig;
    }
    import AbstractBuilder from "src/abstract-builder";
    import { Feature } from "src/html-editor-config/feature";
    import { Format } from "src/html-editor-config/format";
    import { FontSizeUnit } from "src/html-editor-config/font-size-unit";
    import { EnterMode } from "src/html-editor-config/enter-mode";
}
declare module "src/style/style" {
    /**
     * @since 1.1
     */
    export default class Style extends AbstractBuilder {
        _identifier: string;
        _label: string;
        _cssClasses: any[];
        /**
         * @returns {string|undefined}
         */
        get identifier(): string;
        /**
         * @returns {string|undefined}
         */
        get label(): string;
        /**
         * @returns {[{label:string,cssClass:string}]}
         */
        get cssClasses(): [{
            label: string;
            cssClass: string;
        }];
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
         * @param {string} label
         * @param {string} cssClass
         * @returns {Style}
         */
        withCssClass(label: string, cssClass: string): Style;
    }
    import AbstractBuilder from "src/abstract-builder";
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
         * @type {string|undefined}
         * @private
         */
        private _icon;
        /**
         * @type {boolean|undefined}
         * @private
         */
        private _hidden;
        /**
         * @type {[Style]|undefined}
         * @private
         */
        private _styleConfigs;
        /**
         * @type {[AbstractPart]|undefined}
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
         * @return {Style[]|undefined}
         */
        get styleConfigs(): Style[];
        /**
         * @return {AbstractPart[]|undefined}
         */
        get parts(): AbstractPart[];
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
         * @param {Style} styleConfigs
         * @return {ContentElement}
         * @since 1.1
         */
        withStyleConfigs(...styleConfigs: Style): ContentElement;
        /**
         * @param {AbstractPart} parts
         * @return {ContentElement}
         * @since 1.0
         */
        withParts(...parts: AbstractPart): ContentElement;
    }
    import AbstractBuilder from "src/abstract-builder";
    import { Icon } from "src/content-element/icon";
    import Style from "src/style/style";
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/plain-text-part" {
    /**
     * @since 1.0
     */
    export default class PlainTextPart extends AbstractPart {
        constructor();
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
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/video-part" {
    /**
     * @since 1.0
     */
    export default class VideoPart extends AbstractPart {
        constructor();
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/image-part" {
    /**
     * @since 1.0
     */
    export default class ImagePart extends AbstractPart {
        constructor();
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/background-image-part" {
    /**
     * @since 1.0
     */
    export default class BackgroundImagePart extends AbstractPart {
        constructor();
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/table-part" {
    /**
     * @since 1.0
     */
    export default class TablePart extends AbstractPart {
        constructor();
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/iterator-part" {
    /**
     * @since 1.0
     */
    export default class IteratorPart extends AbstractPart {
        constructor();
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/news-snippets-part" {
    /**
     * @since 1.0
     */
    export default class NewsSnippetsPart extends AbstractPart {
        constructor();
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/form-part" {
    /**
     * @since 1.0
     */
    export default class FormPart extends AbstractPart {
        constructor();
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/form-field-part" {
    /**
     * @since 1.0
     */
    export default class FormFieldPart extends AbstractPart {
        constructor();
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/form-checkbox-part" {
    /**
     * @since 1.0
     */
    export default class FormCheckboxPart extends AbstractPart {
        constructor();
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/form-textarea-part" {
    /**
     * @since 1.0
     */
    export default class FormTextareaPart extends AbstractPart {
        constructor();
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/form-select-part" {
    /**
     * @since 1.0
     */
    export default class FormSelectPart extends AbstractPart {
        constructor();
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/form-radio-part" {
    /**
     * @since 1.0
     */
    export default class FormRadioPart extends AbstractPart {
        constructor();
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/link-part" {
    /**
     * @since 1.0
     */
    export default class LinkPart extends AbstractPart {
        constructor();
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/social-follow-part" {
    /**
     * @since 1.0
     */
    export default class SocialFollowPart extends AbstractPart {
        constructor();
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/social-share-part" {
    /**
     * @since 1.0
     */
    export default class SocialSharePart extends AbstractPart {
        constructor();
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "src/content-element/part/url-provider-part" {
    /**
     * @since 22.0
     */
    export default class UrlProviderPart extends AbstractPart {
        constructor();
    }
    import AbstractPart from "src/content-element/part/abstract-part";
}
declare module "export/browser" {
    import AbstractBuilder from "src/abstract-builder";
    import AbstractPart from "src/content-element/part/abstract-part";
    import * as Version from "src/version";
    import * as DesignType from "src/design-type";
    import * as Feature from "src/html-editor-config/feature";
    import * as EnterMode from "src/html-editor-config/enter-mode";
    import * as FontSizeUnit from "src/html-editor-config/font-size-unit";
    import * as Format from "src/html-editor-config/format";
    import HtmlEditorConfig from "src/html-editor-config/html-editor-config";
    import Style from "src/style/style";
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
    export { AbstractBuilder, AbstractPart, Version, DesignType, Feature, EnterMode, FontSizeUnit, Format, HtmlEditorConfig, Style, Icon, ContentElement, Part, PlainTextPart, FormattedTextPart, HtmlPart, VideoPart, ImagePart, BackgroundImagePart, TablePart, IteratorPart, NewsSnippetsPart, FormPart, FormFieldPart, FormCheckboxPart, FormTextareaPart, FormSelectPart, FormRadioPart, LinkPart, SocialFollowPart, SocialSharePart, UrlProviderPart };
}
declare module "@bsi-cx/design-build" {
    export * from "export/main";
    export * from "export/browser";
}
//# sourceMappingURL=types.d.ts.map