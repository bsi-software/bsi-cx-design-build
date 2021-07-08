const fs = require('fs');
const path = require('path');

const ZipWebpackPlugin = require('zip-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const BsiCxWebpackPlugin = require('./bsi-cx-webpack-plugin');

const templateLoader = path.resolve(__dirname, 'template-loader.js');

/**
 * 
 * @param {string} rootPath 
 * @param {string} name 
 * @returns {{import:string,filename:string}}
 */
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

const cssLoaderChain = [
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
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          'postcss-preset-env',
          'cssnano'
        ]
      }
    }
  }
];

/**
 * @param {string} name 
 * @param {string} rootPath 
 * @param {{}} [model={}]
 * @param {number} [devServerPort=9000]
 * @returns 
 */
module.exports = (name, rootPath, model, devServerPort) => ({
  entry: () => ({
    json: {
      import: path.resolve(rootPath, 'design.js'),
      filename: 'design.json'
    },
    design: evaluateEntryTemplate(rootPath, 'design'),
    preview: evaluateEntryTemplate(rootPath, 'preview'),
  }),
  name: name,
  target: 'web',
  module: {
    rules: [
      {
        test: /\.twig$/,
        use: [
          templateLoader,
          'ref-loader',
          {
            loader: 'twing-loader',
            options: {
              environmentModulePath: require.resolve('./twing-environment.js'),
              renderContext: model || {}
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
          ...cssLoaderChain,
          {
            loader: 'less-loader',
            options: {
              additionalData: ''
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          ...cssLoaderChain,
          {
            loader: 'sass-loader',
            options: {
              additionalData: ''
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          ...cssLoaderChain
        ]
      },
      {
        test: /\.(png|jpg|jpeg|webp)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name]-[contenthash][ext]'
        }
      },
      {
        resource: /static.+\.js$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name]-[contenthash][ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/styles-[contenthash].css'
    }),
    new BsiCxWebpackPlugin(),
    new ZipWebpackPlugin({
      filename: `${name}.zip`
    })
  ],
  devtool: 'source-map',
  devServer: {
    port: devServerPort || 9000,
    contentBase: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/',
    compress: true,
    writeToDisk: filePath => /\.zip$/.test(filePath),
    inline: false
  },
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
