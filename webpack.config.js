const path = require('path');

let index = path.resolve(__dirname, 'index.js');

module.exports = {
  entry: index,
  target: 'node',
  externals: [
    ({ request }, callback) => {
      if (!/^\.\//.test(request) && request !== index) {
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
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    library: {
      type: 'umd'
    }
  }
};
