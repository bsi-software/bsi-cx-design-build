const {cx, Icon} = require('@bsi-cx/design-build');
const {Locale} = require('../../../../../../export/browser');

/**
 * @type {ContentElement}
 */
const element = cx.contentElement;
const nls = require('../../../nls');

module.exports = element;

element.withElementId('column-1')
  .withIcon(Icon.ONE_COLUMN)
  .withLabel(nls.column)
  .withFile(require('./template.twig'))
  .withDropzones(
    cx.dropzone
      .withDropzone('b6608fe9-4815-4ef1-a118-6e945ead513f')
      .withAllowedElements(
        require('../column-2')));
