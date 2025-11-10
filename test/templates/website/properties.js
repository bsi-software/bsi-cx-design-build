const { css } = require('@bsi-cx/design-build');

module.exports = {
  author: 'John Doe',
  date: Date.now(),
  other: require('./other-properties'),
  test: 'test',
  primaryColor: css.color('#b44444'),
  secondaryColor: '#aabb44'
};
