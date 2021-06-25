const path = require('path');

const BsiCxWebpackPlugin = require('./bsi-cx-webpack-plugin');

module.exports = (name, rootPath) => {
  return {
    entry: path.resolve(rootPath, 'index.js'),
    name: name,
    target: 'web',
    module: {
      rules: [
        {
          test: /\.twig$/i,
          use: [
            {
              loader: 'html-loader',
              options: {
                esModule: false,
              }
            },
            {
              loader: 'extract-loader'
            },
            {
              loader: 'twing-loader',
              options: {
                environmentModulePath: path.resolve(__dirname, 'environment.js'),
                renderContext: {}
              }
            }
          ]
        },
        {
          test: /\.(html|hbs)/i,
          type: 'asset/resource',
          generator: {
            publicPath: '',
            filename: '[name]-[hash][ext]'
          }
        },
        {
          test: /\.(png|jpg|jpeg)/i,
          type: 'asset/resource',
          generator: {
            publicPath: '{{designBaseUrl}}/',
            filename: '[name]-[hash][ext]'
          }
        },
        {
          resource: /(static).*\.js$/i,
          type: 'asset/resource',
          generator: {
            publicPath: '{{designBaseUrl}}/',
            filename: '[name]-[hash][ext]'
          }
        }
      ]
    },
    plugins: [
      new BsiCxWebpackPlugin()
    ],
    stats: {
      children: true
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
    },
    output: {
      path: path.resolve(__dirname, '..', 'dist', name),
      publicPath: '',
      library: {
        type: 'commonjs'
      },
      clean: true
    }
  };
};
