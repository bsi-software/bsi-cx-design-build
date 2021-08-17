module.exports = function (sourceToConvert) {
  let source = sourceToConvert.trim().replace(/\;$/, '');
  let resource = JSON.stringify(this.resource);

  return `
  ${source};
  module.exports = {
    content: module.exports,
    path: ${resource}
  };
  `.trim();
};
