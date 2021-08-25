const HtmlEditorConfigBuilder = require('@bsi-cx/design-build/dist/html-editor-config');
const {ITALIC, BOLD, UNDERLINE, STRIKE_THROUGH, TEXT_COLOR, BACKGROUND_COLOR, FORMAT_OL, FORMAT_UL, CLEAR_FORMATTING, UNDO, REDO, FULLSCREEN, SELECT_ALL, INSERT_LINK} = require('@bsi-cx/design-build/dist/html-editor-config/feature');
const {P, H1, H2, H3, H4, H5, H6, PRE} = require('@bsi-cx/design-build/dist/html-editor-config/format');

module.exports = new HtmlEditorConfigBuilder()
  .withFeatures(ITALIC, BOLD, UNDERLINE, STRIKE_THROUGH, TEXT_COLOR, BACKGROUND_COLOR, FORMAT_OL, FORMAT_UL, CLEAR_FORMATTING, UNDO, REDO, FULLSCREEN, SELECT_ALL, INSERT_LINK)
  .withTextColors('#0082a1', '#bb9f84', '#fe9915', '#ffffff', '#666666')
  .withBackgroundColors('#0082a1', '#bb9f84', '#fe9915', '#ffffff', '#666666')
  .withFormats(P, H1, H2, H3, H4, H5, H6, PRE)
  .withFontSizes(8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 72)
  .build();
