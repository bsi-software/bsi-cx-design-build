import RawValue from './raw-value';
import ObjectCloner from './object-cloner';
import {STUDIO_1_0, TARGET} from './version';

/** @typedef {import('./version').Version} Version */

/**
 * @abstract
 */
export default class AbstractBuilder {
  /**
   * @returns {Version}
   */
  get minVersion() {
    return STUDIO_1_0;
  }

  /**
   * @returns {Version}
   */
  get maxVersion() {
    return undefined;
  }

  /**
   * Build the configuration. Normally, there is no need to invoke this method manually.
   *
   * @returns {{}|undefined}
   */
  build() {
    if (!this.isCompatible()) {
      return undefined;
    }

    return this._buildInternal();
  }

  /**
   * @abstract
   * @returns {{}}
   * @protected
   */
  _buildInternal() {
    throw new Error('not implemented');
  }

  /**
   * Check if this builder part is compatible with the defined target version.
   *
   * @returns {boolean}
   */
  isCompatible() {
    if (this.minVersion && TARGET < this.minVersion) {
      return false;
    }

    return this.maxVersion !== undefined ? TARGET > this.maxVersion : true;
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
        computedValue = value.filter(item => this._checkCompatibility(item))
          .map(item => extractFunc(item))
          .filter(item => item !== undefined);
        break;
      default:
        computedValue = this._checkCompatibility(value) ? extractFunc(value) : undefined;
        break;
    }

    if (!!arrayToObject && !isRawValue) {
      computedValue = this._applyArrayToObject(computedValue);
    }

    if (!!setMetaProperty && !isRawValue) {
      this._applyMetaPropertyFromValue(property, targetObj, value);
    }

    if (computedValue === undefined) {
      return;
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
      computedValue = value.map(item => item.build()).filter(item => item !== undefined);
    } else {
      computedValue = value.build();
    }

    if (computedValue !== undefined) {
      targetObj[metaProperty] = computedValue;
    }
  }

  /**
   * @param {{}[]} arr
   * @private
   */
  _applyArrayToObject(arr) {
    let obj = {};
    for (let item of arr ?? []) {
      obj = {
        ...obj,
        ...item
      };
    }
    return obj;
  }

  /**
   * @param {*} value
   * @return {boolean}
   * @private
   */
  _checkCompatibility(value) {
    return value instanceof AbstractBuilder ? value.isCompatible() : true;
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
