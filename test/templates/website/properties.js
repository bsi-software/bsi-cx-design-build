const { css } = require('@bsi-cx/design-build');

module.exports = {
  disableScssVariables: false,
  author: 'John Doe',
  date: Date.now(),
  other: require('./other-properties'),
  test: 'test',
  primaryColor: css.color('#b44444'),
  secondaryColor: '#aabb44',
  hrefLink: 'https://someLink',
  emptyProperty: '',
  wrong: false
};
