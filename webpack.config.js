const path = require('path');

let index = path.resolve(__dirname, 'index.js');
let templateLoader = path.resolve(__dirname, 'src', 'template-loader.js');

module.exports = {
  entry: {
    bundle: {
      import: index
    },
    'template-loader': {
      import: templateLoader
    }
  },
  target: 'node',
  externals: [
    ({ request }, callback) => {
      if (!/^\.\//.test(request) && request !== index && request !== templateLoader) {
        callback(null, {
          root: request,
          commonjs: request,
          commonjs2: request,
          amd: request,
        });
      } else {
        callback();
      }
    }
  ],
  optimization: {
    minimize: false
  },
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    library: {
      type: 'umd'
    }
  }
};
