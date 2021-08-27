import AbstractConstant from './abstract-constant';
import AbstractBuilder from './abstract-builder';

export default class BuilderObjectCloner {
  /**
   * @template T
   * @param {T} source
   * @param {T} target
   * @param {boolean} shallow
   * @return {T}
   * @private
   */
  _clone(source, target, shallow) {
    for (let [propertyName, valueToClone] of Object.entries(source)) {
      target[propertyName] = shallow ? valueToClone : this._cloneValue(valueToClone);
    }

    return target;
  }

  /**
   * @template T
   * @param {T} value
   * @return {T}
   * @private
   */
  _cloneValue(value) {
    switch (true) {
      case typeof value === 'undefined':
        return value;
      case typeof value === 'string' || value instanceof String:
        return value;
      case typeof value === 'number' || value instanceof Number:
        return value;
      case typeof value === 'boolean' || value instanceof Boolean:
        return value;
      case typeof value === 'bigint' || value instanceof BigInt:
        return value;
      case value instanceof AbstractBuilder:
        return value.clone();
      case value instanceof AbstractConstant:
        return value;
      case value instanceof Array || Array.isArray(value):
        return this._cloneArray(value);
      case value instanceof Object || typeof value === 'object':
        return this._cloneObject(value);
      default:
        throw new Error('unable to clone value');
    }
  }

  /**
   * @param {[]} arr
   * @return {[]}
   * @private
   */
  _cloneArray(arr) {
    return arr.map(item => this._cloneValue(item));
  }

  /**
   * @param {{}} obj
   * @return {{}}
   * @private
   */
  _cloneObject(obj) {
    let cloneObj = {};
    for (let [key, value] of Object.entries(obj)) {
      cloneObj[key] = this._cloneValue(value);
    }
    return cloneObj;
  }

  /**
   * @template T
   * @param {T} source
   * @param {T} target
   * @param {boolean} shallow
   * @return {T}
   */
  static clone(source, target, shallow) {
    return new BuilderObjectCloner()._clone(source, target, shallow);
  }
}
