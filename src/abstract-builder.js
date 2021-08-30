import RawValue from './raw-value';
import ObjectCloner from './object-cloner';

/**
 * @abstract
 */
export default class AbstractBuilder {
  /**
   * Build the configuration.
   *
   * @abstract
   * @return {{}}
   */
  build() {
    throw new Error('not implemented');
  }

  /**
   * @param {string} property
   * @param {{}} targetObj
   * @param {function} extractFunc
   * @param {boolean} [arrayToObject=false]
   * @protected
   */
  _applyPropertyIfDefined(property, targetObj, extractFunc, arrayToObject) {
    if (typeof this[property] === 'undefined') {
      return;
    }

    let value = this[property];
    let computedValue;

    switch (true) {
      case value instanceof RawValue:
        computedValue = value.value;
        break;
      case value instanceof Array:
        computedValue = value.map(item => extractFunc(item));
        break;
      default:
        computedValue = extractFunc(value);
        break;
    }

    if (!!arrayToObject && !(value instanceof RawValue)) {
      computedValue = this._applyArrayToObject(computedValue);
    }

    targetObj[property] = computedValue;
  }

  /**
   * @param {[{}]} arr
   * @private
   */
  _applyArrayToObject(arr) {
    let obj = {};
    for (let item of arr) {
      obj = {
        ...obj,
        ...item
      };
    }
    return obj;
  }

  /**
   * @template T
   * @param {T} newObj
   * @param {boolean|undefined} [shallow=true]
   * @return {T}
   * @protected
   */
  _clone(newObj, shallow) {
    return ObjectCloner.clone(this, newObj, shallow);
  }
}
