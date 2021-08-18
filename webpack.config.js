const path = require('path');

let index = path.resolve(__dirname, 'index.js');
let templateLoader = path.resolve(__dirname, 'src', 'template-loader.js');
let twingEnvironment = path.resolve(__dirname, 'src', 'twing-environment.js');

module.exports = {
  entry: {
    bundle: {
      import: index
    },
    'template-loader': {
      import: templateLoader
    },
    'twing-environment': {
      import: twingEnvironment
    }
  },
  target: 'node',
  externals: [
    ({ request }, callback) => {
      let skipFiles = [
        index,
        templateLoader,
        twingEnvironment
      ];

      if (!/^\.\//.test(request) && skipFiles.indexOf(request) === -1) {
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
