const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.templateElement
  .withElementId("column-2")
  .withIcon(Icon.TWO_COLUMNS)
  .withLabel("2 Columns")
  .withFile(require("./template.hbs.twig"))
  .withDropzones(
    cx
      .Dropzone(
        "20816df1-f8c0-47d1-94a1-1cd124c2b348"[
          (require("../column-1"),
          require("../title"),
          require("../text"),
          require("../image"))
        ],
      )
      .withScopePrefills(
        cx
          .ScopePrefill("B4", require("../template-button"))
          .withOverrideValue("multiline-plain-text-wmiRti", "Benni"),
      ),
    cx.dropzone
      .withDropzone("5971732b-bf41-493d-a678-0fce1a2b5771")
      .withAllowedElements(
        require("../column-1"),
        require("../title"),
        require("../text"),
        require("../image"),
      ),
  );
