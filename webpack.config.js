const path = require('path');
const webpack = require('webpack');

const nodeExternals = require('webpack-node-externals');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

// noinspection WebpackConfigHighlighting
module.exports = {
  entry: {
    'main': {
      import: path.resolve(__dirname, 'export', 'main.js'),
      library: {
        type: 'commonjs'
      }
    },
    'browser': {
      import: path.resolve(__dirname, 'export', 'browser.js'),
      library: {
        type: 'commonjs'
      }
    },
    'template-loader': {
      import: path.resolve(__dirname, 'src', 'template-loader.js'),
      library: {
        type: 'commonjs'
      }
    },
    'twing-environment': {
      import: path.resolve(__dirname, 'src', 'twing-environment.js'),
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
    }),
    new WebpackShellPluginNext({
      onDoneWatch: {
        scripts: ['tsc'],
        blocking: true,
        parallel: false
      },
      onBuildEnd: {
        scripts: ['tsc'],
        blocking: true,
        parallel: false
      }
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  }
};
