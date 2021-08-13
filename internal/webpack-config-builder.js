import path from 'path';

import ZipPlugin from 'zip-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import BsiCxWebpackPlugin from './bsi-cx-webpack-plugin';
import Constant from './constant';
import { evaluateEntryTemplate, getJavaScriptModuleEntries, getTwingLoaderOptions, StaticJavaScriptCondition } from './utility';

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
 * @param {{}} [modules={}]
 * @param {{}} [model={}]
 * @param {number} [devServerPort=9000]
 * @returns 
 */
module.exports = (name, rootPath, modules, model, devServerPort) => ({
  entry: () => ({
    ...getJavaScriptModuleEntries(modules || {}),
    json: {
      import: path.resolve(rootPath, 'design.js'),
      filename: 'design.json'
    },
    design: evaluateEntryTemplate(rootPath, 'design'),
    preview: evaluateEntryTemplate(rootPath, 'preview')
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
          {
            loader: 'twing-loader',
            options: getTwingLoaderOptions(model || {})
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
        test: /\.less$/i,
        use: [
          ...cssLoaderChain,
          {
            loader: 'less-loader',
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          ...cssLoaderChain,
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          ...cssLoaderChain
        ]
      },
      {
        test: /\.(png|jpg|jpeg|webp|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name]-[contenthash][ext]'
        }
      },
      {
        resource: (file) => StaticJavaScriptCondition.test(rootPath, file),
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name]-[contenthash][ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/styles-[contenthash].css',
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
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: (module, _, cacheGroupKey) => {
        return cacheGroupKey !== 'vendors' ? false : (module.rawRequest || false);
      },
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          reuseExistingChunk: true,
          filename: 'vendors/[name]-[chunkhash].js'
        },
        styles: {
          name: 'styles',
          type: 'css/mini-extract',
          chunks: 'all',
          priority: 20,
          enforce: true,
        },
      }
    }
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist', name),
    publicPath: `${Constant.BSI_CX_DESIGN_BASE_URL}/`,
    clean: true,
    library: {
      type: 'var',
      name: '[name]'
    }
  }
});
