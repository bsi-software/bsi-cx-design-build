const path = require('path');

module.exports = (name, rootPath) => {
  return {
    entry: path.resolve(rootPath, 'index.js'),
    name: name,
    module: {
      rules: [
        {
          test: /(design|preview)\.twig$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].html'
              }
            },
            {
              loader: 'extract-loader'
            },
            {
              loader: 'twing-loader',
              options: {
                environmentModulePath: path.resolve(__dirname, 'environment.js'),
                renderContext: {}
              }
            }
          ]
        },
        {
          test: /template\.twig$/,
          use: [
            {
              loader: 'twing-loader',
              options: {
                environmentModulePath: path.resolve(__dirname, 'environment.js'),
                renderContext: {}
              }
            }
          ]
        },
        {
          test: require.resolve(`${rootPath}/design.js`),
          use: [
            {
              loader: path.resolve(__dirname, 'design-loader.js')
            }
          ]
        },
        {
          test: /template\.hbs$/,
          use: [
            {
              loader: 'raw-loader',
              options: {
                esModule: false,
              }
            }
          ]
        }
      ]
    },
    plugins: [
    ],
    stats: {
      children: true
    },
    output: {
      path: path.resolve(__dirname, '..', 'dist', name),
      clean: true
    }
  };
};
