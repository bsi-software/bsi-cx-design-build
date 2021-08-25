const path = require('path');
const webpack = require('webpack');

const nodeExternals = require('webpack-node-externals');

let index = path.resolve(__dirname, 'index.js');
let templateLoader = path.resolve(__dirname, 'src', 'template-loader.js');
let twingEnvironment = path.resolve(__dirname, 'src', 'twing-environment.js');

/**
 * @param {string} modulePath
 * @param {string|undefined} [output=undefined]
 * @returns {{}}
 */
function addCommonJsEntry(modulePath, output) {
  let filename = modulePath + '.js';
  let entryConfig = {};

  entryConfig[modulePath] = {
    import: path.resolve(__dirname, 'src', filename),
    filename: output || filename,
    library: {
      type: 'commonjs'
    }
  };

  return entryConfig;
}

module.exports = {
  entry: {
    bundle: {
      import: index,
      library: {
        type: 'commonjs'
      }
    },
    'style': {
      import: path.resolve(__dirname, 'src', 'style', 'style-builder.js'),
      filename: 'style.js',
      library: {
        type: 'commonjs2',
        export: 'default'
      }
    },
    'html-editor-config/index': {
      import: path.resolve(__dirname, 'src', 'html-editor-config', 'html-editor-config-builder.js'),
      filename: 'html-editor-config/index.js',
      library: {
        type: 'commonjs2',
        export: 'default'
      }
    },
    ...addCommonJsEntry('html-editor-config/enter-mode'),
    ...addCommonJsEntry('html-editor-config/feature'),
    ...addCommonJsEntry('html-editor-config/font-size-unit'),
    ...addCommonJsEntry('html-editor-config/format'),
    'template-loader': {
      import: templateLoader,
      library: {
        type: 'commonjs'
      }
    },
    'twing-environment': {
      import: twingEnvironment,
      library: {
        type: 'commonjs2',
        export: 'default'
      }
    }
  },
  module: {
    rules: []
  },
  externalsPresets: {
    node: true
  },
  externals: [
    nodeExternals()
  ],
  optimization: {
    minimize: false
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      noSources: true,
      sourceRoot: '../',
      moduleFilenameTemplate: '[resource-path]'
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  }
};
