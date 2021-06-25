const path = require('path');

const BsiCxWebpackPlugin = require('./bsi-cx-webpack-plugin');

module.exports = (name, rootPath) => {
  return {
    entry: {
      designJson: { import: path.resolve(rootPath, 'meta.js'), filename: 'design.json' }
    },
    name: name,
    target: 'web',
    module: {
      rules: [
        {
          test: /\.twig$/i,
          use: [
            'ref-loader',
            path.resolve(__dirname, 'template-loader.js'),
            {
              loader: 'twing-loader',
              options: {
                environmentModulePath: require.resolve('./environment.js'),
                renderContext: {}
              }
            }
          ]
        },
        {
          test: /\.(html|hbs)/i,
          use: [
            'ref-loader'
          ]
        },
        {
          test: /\.(png|jpg|jpeg)/i,
          type: 'asset/resource',
          generator: {
            publicPath: '{{designBaseUrl}}/',
            filename: 'assets/[name]-[hash][ext]'
          }
        },
        {
          resource: /static.+\.js$/i,
          type: 'asset/resource',
          generator: {
            publicPath: '{{designBaseUrl}}/',
            filename: 'assets/[name]-[hash][ext]'
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
