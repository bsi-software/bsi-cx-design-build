import RawValue from './raw-value';
import ObjectCloner from './object-cloner';
import {STUDIO_1_0, CX_23_2, TARGET as TARGET_VERSION} from './version';
import {ALL_TYPES, TARGET as TARGET_TYPE} from './design-type';
import DesignJsonProperty from './design-json-property';
import Constant from './constant';

/** @typedef {import('./version').Version} Version */
/** @typedef {import('./design-type').DesignType} DesignType */

/**
 * @abstract
 */
export default class AbstractBuilder {
  /**
   * @type {Version|undefined}
   * @private
   */
  _minVersion = STUDIO_1_0;
  /**
   * @type {Version|undefined}
   * @private
   */
  _maxVersion = undefined;
  /**
   * @type {DesignType[]}
   * @private
   */
  _allowedTypes = ALL_TYPES;

  /**
   * @return {Version}
   */
  get minVersion() {
    return this._minVersion;
  }

  /**
   * @return {Version|undefined}
   */
  get maxVersion() {
    return this._maxVersion;
  }

  /**
   * @returns {DesignType[]}
   */
  get allowedTypes() {
    return [...this._allowedTypes];
  }

  /**
   * Define a minimum CX version. Will be excluded from builds targeting a lower version.
   *
   * @example
   * .withMinVersion(Version.CX_22_0)
   * @see {@link withMaxVersion}
   * @param {Version} minVersion
   * @returns {this}
   */
  withMinVersion(minVersion) {
    this._minVersion = minVersion;
    return this;
  }

  /**
   * Define a maximum CX version. Will be excluded from builds targeting a higher version.
   *
   * @example
   * .withMaxVersion(Version.CX_22_0)
   * @see {@link withMinVersion}
   * @param {Version} maxVersion
   * @returns {this}
   */
  withMaxVersion(maxVersion) {
    this._maxVersion = maxVersion;
    return this;
  }

  /**
   * Define allowed template types. Will be excluded from builds targeting other types.
   *
   * @example
   * .withAllowedTypes(DesignType.EMAIL,DesignType.LANDINGPAGE)
   * @param {...DesignType} types
   * @returns {this}
   */
  withAllowedTypes(...types) {
    this._allowedTypes = types;
    return this;
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
    if (this.minVersion && TARGET_VERSION < this.minVersion) {
      return false;
    }

    if (this.maxVersion && TARGET_VERSION > this.maxVersion) {
      return false;
    }

    return this.allowedTypes !== undefined ? this.allowedTypes.findIndex(type => type.value === TARGET_TYPE.value) !== -1 : true;
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
        computedValue = value
          .filter(item => this._checkCompatibility(item))
          .map(item => extractFunc(item))
          .filter(item => item !== undefined);
        break;
      default:
        computedValue = this._checkCompatibility(value) ? extractFunc(value) : undefined;
        break;
    }

    if (typeof value.nlsMarker !== 'undefined' &&
      (property === DesignJsonProperty.LABEL || property === DesignJsonProperty.DESCRIPTION || property === DesignJsonProperty.NAME)) {
      if (TARGET_VERSION.valueOf() >= CX_23_2.valueOf()) {
        computedValue = '${nlsKey:' + computedValue.identifier + '}';
      } else {
        for (let item of computedValue.translations) {
          if (item.locale === global[Constant.BSI_CX_DEFAULT_LOCALE] || item.locale.value === '*') {
            computedValue = item.translation;
          }
        }
      }
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
