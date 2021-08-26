const {HtmlEditorConfig, EnterMode, Feature, FontSizeUnit} = require('@bsi-cx/design-build');

module.exports = new HtmlEditorConfig()
  .withIdentifier('normal')
  .withFeatures(
    Feature.BOLD,
    Feature.ITALIC,
    Feature.UNDERLINE,
    Feature.STRIKE_THROUGH,
    Feature.SUBSCRIPT,
    Feature.SUPERSCRIPT,
    Feature.TEXT_COLOR,
    Feature.BACKGROUND_COLOR,
    Feature.FORMAT_OL,
    Feature.FORMAT_UL,
    Feature.OUTDENT,
    Feature.INDENT,
    Feature.INSERT_LINK,
    Feature.CLEAR_FORMATTING,
    Feature.UNDO,
    Feature.REDO,
    Feature.FULLSCREEN,
    Feature.SELECT_ALL,
    Feature.HTML,
    Feature.HELP)
  .withFontSizeUnit(FontSizeUnit.PX)
  .withFontSizeDefault(13)
  .withEnterMode(EnterMode.P)
  .build();
