const {HtmlEditorConfigBuilder, Feature, Format} = require('@bsi-cx/design-build');

module.exports = new HtmlEditorConfigBuilder()
  .withIdentifier('full')
  .withFeatures(
    Feature.ITALIC,
    Feature.BOLD,
    Feature.UNDERLINE,
    Feature.STRIKE_THROUGH,
    Feature.TEXT_COLOR,
    Feature.BACKGROUND_COLOR,
    Feature.FORMAT_OL,
    Feature.FORMAT_UL,
    Feature.CLEAR_FORMATTING,
    Feature.UNDO,
    Feature.REDO,
    Feature.FULLSCREEN,
    Feature.SELECT_ALL,
    Feature.INSERT_LINK)
  .withTextColors('#0082a1', '#bb9f84', '#fe9915', '#ffffff', '#666666')
  .withBackgroundColors('#0082a1', '#bb9f84', '#fe9915', '#ffffff', '#666666')
  .withFormats(Format.P, Format.H1, Format.H2, Format.H3, Format.H4, Format.H5, Format.H6, Format.PRE)
  .withFontSizes(8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 72)
  .build();
