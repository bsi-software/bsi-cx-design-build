const fs = require('fs');
const path = require('path');

const BsiCxWebpackPlugin = require('./bsi-cx-webpack-plugin');

const passLoader = path.resolve(__dirname, 'pass-loader.js');
const applyLoader = path.resolve(__dirname, 'apply-loader.js');
const templateLoader = path.resolve(__dirname, 'template-loader.js');

const evaluateEntryTemplate = (rootPath, name) => {
  let twigFilePath = path.resolve(rootPath, `${name}.twig`);
  let hbsFilePath = path.resolve(rootPath, `${name}.hbs.twig`);
  let isTwig = fs.existsSync(twigFilePath);
  let extension = isTwig ? 'html' : 'hbs';
  return {
    import: isTwig ? twigFilePath : hbsFilePath,
    filename: `${name}.${extension}`
  };
};

module.exports = (name, rootPath) => ({
  entry: () => ({
    json: { import: path.resolve(rootPath, 'design.js'), filename: 'design.json' },
    design: evaluateEntryTemplate(rootPath, 'design'),
    preview: evaluateEntryTemplate(rootPath, 'preview'),
  }),
  name: name,
  target: 'web',
  module: {
    rules: [
      {
        test: /\.twig$/i,
        use: [
          templateLoader,
          'ref-loader',
          ({ realResource }) => /(design|preview)\.(hbs\.twig|twig)$/.test(realResource) ? passLoader : applyLoader,
          {
            loader: 'twing-loader',
            options: {
              environmentModulePath: require.resolve('./twing-environment.js'),
              renderContext: {}
            }
          }
        ]
      },
      {
        test: /\.(html|hbs)$/i,
        use: [
          templateLoader,
          'ref-loader',
        ]
      },
      {
        test: /\.(png|jpg|jpeg)$/i,
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
    children: true,
    errorDetails: true
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist', name),
    publicPath: '',
    library: {
      type: 'var',
      name: '[name]'
    },
    clean: true
  }
});
