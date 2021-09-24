import RawValue from './raw-value';
import ObjectCloner from './object-cloner';

/**
 * @abstract
 */
export default class AbstractBuilder {
  /**
   * Build the configuration. Normally, there is no need to invoke this method manually.
   *
   * @abstract
   * @returns {{}}
   */
  build() {
    throw new Error('not implemented');
  }

  /**
   * @param {string} property
   * @param {{}} targetObj
   * @param {function} extractFunc
   * @param {boolean} [arrayToObject=false]
   * @param {boolean} [setMetaProperty=false]
   * @protected
   */
  _applyPropertyIfDefined(property, targetObj, extractFunc, arrayToObject, setMetaProperty) {
    if (typeof this[property] === 'undefined') {
      return;
    }

    let value = this[property];
    let computedValue;
    let isRawValue = value instanceof RawValue;

    switch (true) {
      case isRawValue:
        computedValue = value.value;
        break;
      case value instanceof Array:
        computedValue = value.map(item => extractFunc(item));
        break;
      default:
        computedValue = extractFunc(value);
        break;
    }

    if (!!arrayToObject && !isRawValue) {
      computedValue = this._applyArrayToObject(computedValue);
    }

    if (!!setMetaProperty && !isRawValue) {
      this._applyMetaPropertyFromValue(property, targetObj, value);
    }

    targetObj[property] = computedValue;
  }

  /**
   * @param {string} property
   * @param {{}} targetObj
   * @param {AbstractBuilder|AbstractBuilder[]} value
   * @private
   */
  _applyMetaPropertyFromValue(property, targetObj, value) {
    let computedValue;
    let metaProperty = `_${property}`;

    if (value instanceof Array) {
      computedValue = value.map(item => item.build());
    } else {
      computedValue = value.build();
    }

    targetObj[metaProperty] = computedValue;
  }

  /**
   * @param {{}[]} arr
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
   * @returns {T}
   * @protected
   */
  _clone(newObj, shallow) {
    return ObjectCloner.clone(this, newObj, shallow);
  }
}
