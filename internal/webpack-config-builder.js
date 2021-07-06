const fs = require('fs');
const path = require('path');

const ZipWebpackPlugin = require('zip-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        test: /\.(html|hbs)$/,
        use: [
          templateLoader,
          'ref-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name]-[hash][ext]'
        }
      },
      {
        resource: /static.+\.js$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name]-[hash][ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/styles.css',
    }),
    new BsiCxWebpackPlugin(),
    new ZipWebpackPlugin({
      filename: `${name}.zip`
    })
  ],
  stats: {
    children: true,
    errorDetails: true
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist', name),
    publicPath: '{{designBaseUrl}}/',
    library: {
      type: 'var',
      name: '[name]'
    },
    clean: true
  }
});
