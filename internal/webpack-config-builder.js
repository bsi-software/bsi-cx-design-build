const path = require('path');

const BsiCxWebpackPlugin = require('./bsi-cx-webpack-plugin');

module.exports = (name, rootPath) => {
  return {
    entry: {
      designJson: { import: path.resolve(rootPath, 'design.js'), filename: 'design.json.js' },
      designHtml: { import: path.resolve(rootPath, 'design.twig'), filename: 'design.html.js' }
    },
    name: name,
    target: 'web',
    module: {
      rules: [
        {
          test: /\.twig$/i,
          use: [
            ({ realResource }) => /(design|preview)\.twig$/.test(realResource) ? path.resolve(__dirname, 'pass-loader.js') : path.resolve(__dirname, 'template-loader.js'),
            'ref-loader',
            ({ realResource }) => /(design|preview)\.twig$/.test(realResource) ? path.resolve(__dirname, 'pass-loader.js') : path.resolve(__dirname, 'apply-loader.js'),
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
            path.resolve(__dirname, 'template-loader.js'),
            'ref-loader',
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
        type: 'commonjs',
        name: '[name]'
      },
      clean: true
    }
  };
};
