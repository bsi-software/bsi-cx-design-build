import sass from 'sass';

import AbstractPropertyPlugin from './abstract-property-plugin';

export default class BsiSassPropertyPlugin extends AbstractPropertyPlugin {
  /**
   * @param {sass.types.String} property
   * @return {AbstractCssProperty|T}
   */
  getProperty(property) {
    let propertyName = property.getValue();

    let value = super.getProperty(propertyName);

    return value.getSassObject();
  }

  getFunction() {
    return {
      'bsiProperty($property)': this.getProperty.bind(this)
    }
  }
}
