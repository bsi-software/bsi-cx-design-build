const {DesignType, Version} = require('@bsi-cx/design-build');

module.exports = {
  dirname: __dirname,
  filename: __filename,
  date: Date.now(),
  design: DesignType.LANDINGPAGE.value,
  version: Version.CX_22_0.value,
  test: {
    mainColor: '#789456'
  }
};
