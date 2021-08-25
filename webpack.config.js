const path = require('path');
const webpack = require('webpack');

const nodeExternals = require('webpack-node-externals');
const TypescriptDeclarationPlugin = require('typescript-declaration-webpack-plugin');

let index = path.resolve(__dirname, 'export', 'index.ts');
let htmlEditorConfig = path.resolve(__dirname, 'export', 'html-editor-config.ts');
let templateLoader = path.resolve(__dirname, 'src', 'template-loader.js');
let twingEnvironment = path.resolve(__dirname, 'src', 'twing-environment.js');

module.exports = {
  entry: {
    bundle: {
      import: index,
      library: {
        type: 'commonjs'
      }
    },
    'html-editor-config': {
      import: htmlEditorConfig,
      library: {
        type: 'commonjs'
      }
    },
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
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          reportFiles: []
        }
      }
    ]
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
    new TypescriptDeclarationPlugin({
      out: 'types.d.ts',
      removeMergedDeclarations: true,
      removeComments: true
    }),
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
