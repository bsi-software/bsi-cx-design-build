# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.8.2] - 12.05.2022

### Changed

* The predefined context variables `properties`, `cx` and `designBaseUrl` inside Twig templates are now available in
  templates and macros.

## [1.8.1] - 06.05.2022

### Fixed

* Static assets will be copied to `/assets/**/*` instead of `/assets/assets/**/*`.

## [1.8.0] - 06.05.2022

### Added

* Version check inside Twig templates with `cx.version.TARGET` and in design specifications with `Version.TARGET`.
  Version object is comparable: `cx.version.CX_1_3 < cx.version.CX_22_0` equals `true`.
* Design type check inside Twig templates with `cx.design.TARGET` and in design specifications with `DesignType.TARGET`.
* Content elements with incompatible parts will be excluded from the build. Introduced `minVersion`, `maxVersion`
  and `allowedTypes` property on `AbstractBuilder` to determine compatible version and design types.

### Changed

* Don't include `design.json` in legacy templates (except websites in CX 1.3).
* Made `withSchemaVersion()` obsolete, correct version will be determined by the value from `withTargetVersion()` in
  the `webpack.config.js` file.

### Fixed

* Don't prefix paths with `{{designBaseUrl}}` in landingpage and email templates.

## [1.7.0] - 01.04.2022

### Added

* Support for `bsiProperty()` function in JavaScript files.

### Fixed

* Updated dependencies to the latest versions.

## [1.6.0] - 17.02.2022

### Added

* Fallback value support for `bsiProperty()` function in LESS and SASS files.

### Fixed

* Updated dependencies to the latest versions.

## [1.5.2] - 16.02.2022

### Added

* Setter `withDescription` for content element description.

### Fixed

* Updated dependencies to the latest versions.

## [1.5.1] - 03.02.2022

### Fixed

* Adjusted Webpack Dev Server configuration to always write files to disk.
* Updated dependencies to the latest versions.

## [1.5.0] - 01.02.2022

### Added

* Add file system loader to Twing environment to load from `node_modules/@bsi-cx/*`.

### Fixed

* Updated dependencies to the latest versions.

## [1.4.5] - 21.01.2022

### Fixed

* Updated dependencies to fix various vulnerabilities.
* Updated webpack-dev-server to the latest version.
* Fix development web server.

## [1.4.4] - 29.10.2021

### Fixed

* Handle `json5` files as static files

## [1.4.3] - 29.09.2021

### Fixed

* Visibility for `BuildConfig#postcssEnabled` attribute
* Fix return type of chainable methods with `@returns {this}` in the super class.

## [1.4.2] - 26.09.2021

### Fixed

* Don't log template not found errors during twig compilation twice.
* Correct output path: `dist/{template}` instead of `dist`.

## [1.4.1] - 26.09.2021

### Fixed

* Error handling in twing loader.

## [1.4.0] - 26.09.2021

### Added

* Lorem ipsum placeholder text generator.

## [1.3.2] - 26.09.2021

### Fixed

* Removed twig template cache and configured `twing-loader` as not cacheable.
* Dropzone control attributes with correct values.

## [1.3.1] - 26.09.2021

### Fixed

* Twig template cache replaced with own implementation (to cope with webpack require).

## [1.3.0] - 26.09.2021

### Fixed

* Return type of formatted text part `withId` method.
* Removal of dropzone control buttons.

### Changed

* Include `<script>` tags with `data-bsi-remove-if="draft"` attribute.

### Added

* Build cache configuration for twig templates.

## [1.2.5] - 26.09.2021

### Fixed

* Handle dropzone attributes on website includes.

## [1.2.4] - 25.09.2021

### Fixed

* Downgraded `webpack-dev-server` to temporary fix removed config properties.

## [1.2.3] - 25.09.2021

### Fixed

* Adjusted chunk optimization and cache group configuration to fix import of 3th party libraries.

## [1.2.2] - 25.09.2021

### Fixed

* Replaced twing loader with own implementation to solve issues with Webpack 5.

## [1.2.1] - 25.09.2021

### Changed

* Source maps generation is disabled by default.

### Added

* Option to disable post CSS (is disabled by default).

## [1.2.0] - 25.09.2021

### Added

* Builder for dropzones
* Set dropzone attributes in templates according to the corresponding dropzone builder object.

## [1.1.1] - 24.09.2021

### Fixed

* NPE in BSI CX webpack plugin when content element has no parts
* Missing name property for website includes

## [1.1.0] - 24.09.2021

### Changed

* Auto register used HTML editor and style configurations in the design object (except for raw values).

## [1.0.1] - 01.09.2021

### Changed

* Updated the `README.md`

## [1.0.0] - 31.08.2021

### Added

* Factory classes
* Helper classes
* More JSDoc

## [1.0.0-rc.14] - 31.08.2021

### Added

* Support for inline assets with `data-uri`
* Boolean support for CSS properties
* URL support for CSS properties
* Build config option for copy assets folder
* Build config option for static assets folder
* Build config option for additional Webpack rules
* Build config option for additional Webpack plugins
* JSDoc strings for various classes
* Sort content element parts in correct order using a unique part ID

### Fixed

* NPM install problem with the project itself as dev dependency for tests

## [1.0.0-rc.13] - 28.08.2021

### Added

* Clone method for all builders
* Build config validation
* Properties file support for LESS and SASS files
* CSS Property classes to use in design properties files

### Fixed

* Rest parameter types in JSDoc

## [1.0.0-rc.12] - 27.08.2021

### Fixed

* Don't split chunks from design.json layer

## [1.0.0-rc.11] - 27.08.2021

### Added

* Code style configuration for IntelliJ
* Legacy design format converter
* Content element builder
* Constants for icons and content element parts
* Content element part builder
* Content element group builder
* Design JSON builder
* Website builder
* Include builder
* NLS builder
* Constants for properties used in the design.json file
* Remove old ZIP files when watcher is enabled

### Fixed

* Various code inspection issues

## [1.0.0-rc.10] - 2021-08-25

### Fixed

* IntelliSense support for IntelliJ and vscode

## [1.0.0-rc.9] - 2021-08-25

### Added

* Constants for design type and target application version
* HTML editor config builder
* CSS style builder

## [1.0.0-rc.8] - 2021-08-24

### Added

* Basic test template
* Types declaration for vscode IntelliSense

## [1.0.0-rc.7] - 2021-08-24

### Added

* Source map support for generated files

### Fixed

* Import error

## [1.0.0-rc.6] - 2021-08-18

### Fixed

* Twing environment module resolution

## [1.0.0-rc.5] - 2021-08-18

### Fixed

* Template loader module resolution

## [1.0.0-rc.4] - 2021-08-18

### Fixed

* Template loader module resolution

## [1.0.0-rc.3] - 2021-08-18

### Fixed

* Handlebars helper import

## [1.0.0-rc.2] - 2021-08-18

### Fixed

* Template loader module resolution

## [1.0.0-rc.1] - 2021-08-18

### Added

* BSI CX Webpack plugin
* BSI CX Webpack ZIP hash plugin
* Build config and Webpack config builder
* BSI CX Twig helpers
* General Webpack configuration
* Handle LESS and SASS
* Preview template parser
* ES6 imports
* Custom JS module support
* Basic setup to publish project as NPM package

[Unreleased]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.8.2...HEAD

[1.8.2]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.8.1...1.8.2

[1.8.1]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.8.0...1.8.1

[1.8.0]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.7.0...1.8.0

[1.7.0]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.6.0...1.7.0

[1.6.0]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.5.2...1.6.0

[1.5.2]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.5.1...1.5.2

[1.5.1]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.5.0...1.5.1

[1.5.0]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.4.5...1.5.0

[1.4.5]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.4.4...1.4.5

[1.4.4]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.4.3...1.4.4

[1.4.3]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.4.2...1.4.3

[1.4.2]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.4.1...1.4.2

[1.4.1]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.4.0...1.4.1

[1.4.0]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.3.2...1.4.0

[1.3.2]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.3.1...1.3.2

[1.3.1]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.3.0...1.3.1

[1.3.0]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.2.5...1.3.0

[1.2.5]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.2.4...1.2.5

[1.2.4]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.2.3...1.2.4

[1.2.3]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.2.2...1.2.3

[1.2.2]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.2.1...1.2.2

[1.2.1]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.2.0...1.2.1

[1.2.0]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.1.1...1.2.0

[1.1.1]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.1.0...1.1.1

[1.1.0]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.0.1...1.1.0

[1.0.1]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.0.0...1.0.1

[1.0.0]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.0.0-rc.14...1.0.0

[1.0.0-rc.14]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.0.0-rc.13...1.0.0-rc.14

[1.0.0-rc.13]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.0.0-rc.12...1.0.0-rc.13

[1.0.0-rc.12]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.0.0-rc.11...1.0.0-rc.12

[1.0.0-rc.11]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.0.0-rc.10...1.0.0-rc.11

[1.0.0-rc.10]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.0.0-rc.9...1.0.0-rc.10

[1.0.0-rc.9]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.0.0-rc.8...1.0.0-rc.9

[1.0.0-rc.8]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.0.0-rc.7...1.0.0-rc.8

[1.0.0-rc.7]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.0.0-rc.6...1.0.0-rc.7

[1.0.0-rc.6]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.0.0-rc.5...1.0.0-rc.6

[1.0.0-rc.5]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.0.0-rc.4...1.0.0-rc.5

[1.0.0-rc.4]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.0.0-rc.3...1.0.0-rc.4

[1.0.0-rc.3]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.0.0-rc.2...1.0.0-rc.3

[1.0.0-rc.2]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.0.0-rc.1...1.0.0-rc.2

[1.0.0-rc.1]: https://github.com/bsi-software/bsi-cx-design-build/releases/tag/1.0.0-rc.1
