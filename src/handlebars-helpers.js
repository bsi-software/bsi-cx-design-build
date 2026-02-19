const capitalized = (text) => text.charAt(0).toUpperCase() + text.slice(1);

const createFunction = (elementPart, elementPartValue) => [
  `bsi.${elementPart}${capitalized(elementPartValue)}`,
  (partId) => `{{ ${partId}.${elementPartValue} }}`,
];

const functions = Object.fromEntries(
  [
    ["text", "value"],
    ["formattedText", "language"],
    ["link", "url"],
    ["link", "text"],
    ["link", "description"],
    ["link", "openInNewWindow"],
    ["image", "srcUrl"],
    ["image", "altText"],
    ["image", "srcset"],
    ["image", "placeholderSrcUrl"],
    ["image", "decorative"],
    ["checkbox", "value"],
    ["option", "value"],
    ["checkbox", "value"],
    ["checkbox", "value"],
  ].map(([part, partValue]) => createFunction(part, partValue)),
);


export default {
  "bsi.nls": (key) => key,
  ...functions,
  "bsi.formattedTextHtml": (partId) => `{{{ ${partId}.html }}}`,
  "bsi.dynamicDataModelValue": (partId) =>
    `{{ ${partId}.dataModelValue.value }}`,
  "bsi.dynamicDataModelType": (partId) => `{{ ${partId}.dataModelValue.type }}`,
  "bsi.dynamicDisplayText": (partId) => `{{ ${partId}.displayText }}`,
};
