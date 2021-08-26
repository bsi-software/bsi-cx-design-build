import AbstractBuilder from './abstract-builder';
import AbstractConstant from './abstract-constant';

/**
 * @param {[string|number]} arr
 * @return {string}
 */
export function scalarArrayToList(arr) {
  return arr.join(',');
}

/**
 * @template T
 * @param {T} v
 * @return {T}
 */
export function identity(v) {
  return v;
}

/**
 * @param {AbstractConstant} constant
 * @return {string}
 */
export function constantObjectValue(constant) {
  return constant.value;
}

/**
 * @param {AbstractBuilder} builder
 * @return {{}}
 */
export function builderObjectValue(builder) {
  return builder.build();
}
