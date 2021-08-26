declare module "src/design-type" {
    export class DesignType {
        /**
         * @param {string} type
         */
        constructor(type: string);
        _type: string;
        /**
         * @returns {string}
         */
        get type(): string;
    }
    /**
     * @type {DesignType}
     */
    export const LANDINGPAGE: DesignType;
    /**
     * @type {DesignType}
     */
    export const EMAIL: DesignType;
    /**
     * @type {DesignType}
     */
    export const WEBSITE: DesignType;
}
declare module "src/version" {
    export class Version {
        /**
         *
         * @param {string} version
         * @param {DesignType[]} allowedTypes
         * @param {boolean} legacyFormat
         */
        constructor(version: string, allowedTypes: DesignType[], legacyFormat: boolean);
        _version: string;
        _allowedTypes: DesignType[];
        _legacyFormat: boolean;
        /**
         * @returns {string}
         */
        get version(): string;
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
declare module "src/html-editor-config/feature" {
    export class Feature {
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
}
declare module "src/html-editor-config/enter-mode" {
    export class EnterMode {
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
}
declare module "src/html-editor-config/font-size-unit" {
    export class FontSizeUnit {
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
}
declare module "src/html-editor-config/format" {
    export class Format {
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
}
declare module "src/html-editor-config/html-editor-config-builder" {
    export default class HtmlEditorConfigBuilder {
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
         * @returns {HtmlEditorConfigBuilder}
         */
        withIdentifier(identifier: string): HtmlEditorConfigBuilder;
        /**
         * @param {Feature} features
         * @returns {HtmlEditorConfigBuilder}
         */
        withFeatures(...features: Feature): HtmlEditorConfigBuilder;
        /**
         * @param {string} textColors
         * @returns {HtmlEditorConfigBuilder}
         */
        withTextColors(...textColors: string): HtmlEditorConfigBuilder;
        /**
         * @param {string} backgroundColors
         * @returns {HtmlEditorConfigBuilder}
         */
        withBackgroundColors(...backgroundColors: string): HtmlEditorConfigBuilder;
        /**
         * @param {Format} formats
         * @returns {HtmlEditorConfigBuilder}
         */
        withFormats(...formats: Format): HtmlEditorConfigBuilder;
        /**
         * @param {number} fontSizes
         * @returns {HtmlEditorConfigBuilder}
         */
        withFontSizes(...fontSizes: number): HtmlEditorConfigBuilder;
        /**
         * @param {FontSizeUnit} fontSizeUnit
         * @returns {HtmlEditorConfigBuilder}
         */
        withFontSizeUnit(fontSizeUnit: FontSizeUnit): HtmlEditorConfigBuilder;
        /**
         * @param {number} fontSizeDefault
         * @returns {HtmlEditorConfigBuilder}
         */
        withFontSizeDefault(fontSizeDefault: number): HtmlEditorConfigBuilder;
        /**
         * @param {number} lineHeights
         * @returns {HtmlEditorConfigBuilder}
         */
        withLineHeights(...lineHeights: number): HtmlEditorConfigBuilder;
        /**
         * @param {EnterMode} enterMode
         * @returns {HtmlEditorConfigBuilder}
         */
        withEnterMode(enterMode: EnterMode): HtmlEditorConfigBuilder;
        build(): {};
        /**
         * @param {string} property
         * @param {{}} config
         * @param {function} extractFunc
         * @private
         */
        private _applyPropertyToConfig;
    }
    import { Feature } from "src/html-editor-config/feature";
    import { Format } from "src/html-editor-config/format";
    import { FontSizeUnit } from "src/html-editor-config/font-size-unit";
    import { EnterMode } from "src/html-editor-config/enter-mode";
}
declare module "src/style/style-builder" {
    export default class StyleBuilder {
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
         * @returns {StyleBuilder}
         */
        withIdentifier(identifier: string): StyleBuilder;
        /**
         * @param {string} label
         * @returns {StyleBuilder}
         */
        withLabel(label: string): StyleBuilder;
        /**
         * @param {string} label
         * @param {string} cssClass
         * @returns {StyleBuilder}
         */
        withCssClass(label: string, cssClass: string): StyleBuilder;
        build(): {};
    }
}
declare module "export/browser" {
    import * as Feature from "src/html-editor-config/feature";
    import * as EnterMode from "src/html-editor-config/enter-mode";
    import * as FontSizeUnit from "src/html-editor-config/font-size-unit";
    import * as Format from "src/html-editor-config/format";
    import HtmlEditorConfigBuilder from "src/html-editor-config/html-editor-config-builder";
    import StyleBuilder from "src/style/style-builder";
    export { Feature, EnterMode, FontSizeUnit, Format, HtmlEditorConfigBuilder, StyleBuilder };
}
declare module "@bsi-cx/design-build" {
    export * from "export/main";
    export * from "export/browser";
}
//# sourceMappingURL=types.d.ts.map