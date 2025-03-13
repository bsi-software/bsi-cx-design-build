const { cx, Icon } = require('@bsi-cx/design-build');

const element = cx.contentElement;

module.exports = element;

element.withElementId('column-2')
  .withIcon(Icon.TWO_COLUMNS)
  .withLabel('2 Columns')
  .withFile(require('./template.twig'))
  .withDropzones(
    cx.dropzone
      .withDropzone('20816df1-f8c0-47d1-94a1-1cd124c2b348')
      .withAllowedElements(
        require('../column-1'),
        require('../title'),
        require('../text'),
        require('../image')),
    cx.dropzone
      .withDropzone('5971732b-bf41-493d-a678-0fce1a2b5771')
      .withAllowedElements(
        require('../column-1'),
        require('../title'),
        require('../text'),
        require('../image')));
