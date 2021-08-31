/**
 * @param {[string|number]} arr
 * @returns {string}
 */
export function scalarArrayToList(arr) {
  return arr.join(',');
}

/**
 * @template T
 * @param {T} v
 * @returns {T}
 */
export function identity(v) {
  return v;
}

/**
 * @param {AbstractConstant} constant
 * @returns {string}
 */
export function constantObjectValue(constant) {
  return constant.value;
}

/**
 * @param {AbstractBuilder} builder
 * @returns {{}}
 */
export function builderObjectValue(builder) {
  return builder.build();
}

/**
 * Very simple UUID v4 generator. Don't use the <code>crypto.getRandomValues()</code> or the uuid NPM package
 * (won't work in the browser context).
 *
 * @see {@link https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid#answer-2117523}
 * @returns {string}
 */
export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
