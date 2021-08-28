const {DesignType, Version, css} = require('@bsi-cx/design-build');

module.exports = {
  dirname: __dirname,
  filename: __filename,
  date: Date.now(),
  design: DesignType.LANDINGPAGE.value,
  version: Version.CX_22_0.value,
  test: {
    alternateColor: css.color('#abc'),
    mainColor: '#ff00ff',
    background: css.url(__dirname, 'content-elements', 'content', 'title', 'placeholder.png'),
    flag: true,
    margin: '10px'
  }
};
