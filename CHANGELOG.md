# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Support for inline assets with data-uri
- Boolean support for CSS properties
- URL support for CSS properties
- Build config option for copy assets folder
- Build config option for static assets folder

## [1.0.0-rc.13] - 28.08.2021
### Added
- Clone method for all builders
- Build config validation
- Properties file support for LESS and SASS files
- CSS Property classes to use in design properties files

### Fixed
- Rest parameter types in JSDoc

## [1.0.0-rc.12] - 27.08.2021
### Fixed
- Don't split chunks from design.json layer

## [1.0.0-rc.11] - 27.08.2021
### Added
- Code style configuration for IntelliJ
- Legacy design format converter
- Content element builder
- Constants for icons and content element parts
- Content element part builder
- Content element group builder
- Design JSON builder
- Website builder
- Include builder
- NLS builder
- Constants for properties used in the design.json file
- Remove old ZIP files when watcher is enabled

### Fixed
- Various code inspection issues

## [1.0.0-rc.10] - 2021-08-25
### Fixed
- IntelliSense support for IntelliJ and vscode

## [1.0.0-rc.9] - 2021-08-25
### Added
- Constants for design type and target application version
- HTML editor config builder
- CSS style builder

## [1.0.0-rc.8] - 2021-08-24
### Added
- Basic test template
- Types declaration for vscode IntelliSense

## [1.0.0-rc.7] - 2021-08-24
### Added
- Source map support for generated files

### Fixed
- Import error

## [1.0.0-rc.6] - 2021-08-18
### Fixed
- Twing environment module resolution

## [1.0.0-rc.5] - 2021-08-18
### Fixed
- Template loader module resolution

## [1.0.0-rc.4] - 2021-08-18
### Fixed
- Template loader module resolution

## [1.0.0-rc.3] - 2021-08-18
### Fixed
- Handlebars helper import

## [1.0.0-rc.2] - 2021-08-18
### Fixed
- Template loader module resolution

## [1.0.0-rc.1] - 2021-08-18
### Added
- BSI CX Webpack plugin
- BSI CX Webpack ZIP hash plugin
- Build config and Webpack config builder
- BSI CX Twig helpers
- General Webpack configuration
- Handle LESS and SASS
- Preview template parser
- ES6 imports
- Custom JS module support
- Basic setup to publish project as NPM package

[Unreleased]: https://github.com/bsi-software/bsi-cx-design-build/compare/1.0.0-rc.13...HEAD
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
