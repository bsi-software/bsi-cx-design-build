const {cx, Icon, ContentElement} = require('@bsi-cx/design-build');

/**
 * @type {ContentElement}
 */
module.exports = cx.templateElement
  .withElementId('dynamic-value-list')
  .withIcon(Icon.DROPDOWN)
  .withContextFile(require('./context.json'))
  .withLabel('Wertelisten Input')
  .withFile(require('./template.hbs'))
  .withTemplateParts(
    cx.templatePart.DynamicValueList('Werteliste', 'dynamic-value-b4')
  );
