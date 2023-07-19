const _import = require("postcss-import");
const importUrl = require('postcss-import-url');
const postcssNested = require("postcss-nested");
const advancedVariables = require("postcss-advanced-variables");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    _import(),
    importUrl(),
    postcssNested(),
    advancedVariables(),
    cssnano({
      preset: "default",
    }),
  ],
};
