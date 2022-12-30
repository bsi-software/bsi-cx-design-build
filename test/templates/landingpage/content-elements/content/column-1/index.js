const {cx, Icon} = require('@bsi-cx/design-build');

/**
 * @type {ContentElement}
 */
const element = cx.contentElement;

module.exports = element;

element.withElementId('column-1')
  .withIcon(Icon.ONE_COLUMN)
  .withLabel('1 Column')
  .withFile(require('./template.twig'))
  .withDropzones(
    cx.dropzone
      .withDropzone('b6608fe9-4815-4ef1-a118-6e945ead513f')
      .withAllowedElements(
        require('../column-2')));
