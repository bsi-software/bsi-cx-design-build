import 'source-map-support/register';

export default function (sourceToConvert) {
  let source = sourceToConvert.trim().replace(/;$/, '');
  // noinspection JSUnresolvedVariable
  let resource = JSON.stringify(this.resource);

  return `
  ${source};
  module.exports = {
    content: module.exports,
    path: ${resource}
  };
  `.trim();
};
