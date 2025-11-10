import AbstractPropertyPlugin from './abstract-property-plugin';

export default class BsiSassPropertyPlugin extends AbstractPropertyPlugin {
  /**
   * @param {*} property
   * @param {*} fallback
   * @returns {*}
   */
  getProperty([property, fallback = null]) {
    console.log('\nSCSS')
    console.log('original property: ' + property)
    console.log('original fallback: ' + fallback)
    property = property.toString().replaceAll('"', '')
    // fallback = !!fallback ? this._propertyResolver.resolve(fallback) : null;

    console.log('fancy new property: ' + property)
    console.log('fancy new fallback: ' + fallback)
    let value = super.getProperty(property, fallback);
    console.log('value: ' + value);
    return typeof value.getSassObject === 'function' ? value.getSassObject() : value;
  }

  getFunction() {
    return {
      'bsiProperty($property, $fallback: null)': this.getProperty.bind(this)
    }
  }
}
