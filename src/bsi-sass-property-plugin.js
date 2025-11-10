import AbstractPropertyPlugin from './abstract-property-plugin';

export default class BsiSassPropertyPlugin extends AbstractPropertyPlugin {
  /**
   * @param {*} property
   * @param {*} fallback
   * @returns {*}
   */
  getProperty([property, fallback = null]) {
    property = property.toString().replaceAll('"', '')
    let value = super.getProperty(property, fallback);
    return typeof value.getSassObject === 'function' ? value.getSassObject() : value;
  }

  getFunction() {
    return {
      'bsiProperty($property, $fallback: null)': this.getProperty.bind(this)
    }
  }
}
