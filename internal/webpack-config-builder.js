import path from 'path';

import ZipPlugin from 'zip-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import BsiCxWebpackPlugin from './bsi-cx-webpack-plugin';
import constants from './constant';
import { evaluateEntryTemplate } from './utility';

const templateLoader = path.resolve(__dirname, 'template-loader.js');

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
    new ZipPlugin({
      filename: `${name}.zip`
    })
  ],
  devtool: false,
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
    errorDetails: true,
  },
  performance: {
    hints: false
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist', name),
    publicPath: `${constants.BSI_CX_DESIGN_BASE_URL}/`,
    library: {
      type: 'var',
      name: '[name]'
    },
    clean: true
  }
});
