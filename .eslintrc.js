const { getESLintConfig } = require("@x.render/render-lint");
module.exports = getESLintConfig("common-ts", {
  rules: {
    "array-callback-return": "off",
  },
});
