  function calculateHashCode(filePath) {
  let hash = 0,
    i, chr;
  if (filePath.length === 0) return hash;
  for (i = 0; i < filePath.length; i++) {
    chr = filePath.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

/**
 * @param {string} filePath
 * @returns {number}
 */
export function createPathHash(filePath) {
  let hash = calculateHashCode(filePath);
  if (hash < 0) {
    hash *= -1;
    hash = hash + '1';
  }
  return hash;
}
