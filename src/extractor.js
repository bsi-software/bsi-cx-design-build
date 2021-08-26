/**
 * @param {[string|number]} arr
 * @return {string}
 */
export function scalarArrayToList(arr) {
  return arr.join(',');
}

/**
 * @param {*} v
 * @return {*}
 */
export function identity(v) {
  return v;
}

/**
 * @param {string|number|boolean} v
 * @return {string|number|boolean}
 */
export function scalarIdentity(v) {
  return v;
}

/**
 * @param {AbstractConstant} constant
 * @return {string}
 */
export function constantObjectValue(constant) {
  return constant.value;
}
