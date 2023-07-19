const PostCSSPlugin = require("eleventy-plugin-postcss");
module.exports = function (config) {
  // plugins
  config.addPlugin(PostCSSPlugin);

  // filters
  config.addFilter("responsiveImageUrls", () =>
    // This is just an example of valid output
    // I can handle all the style rules of the responsive background images
    "background: url('../images/mael-balland-HwByimIPq-c-unsplash.jpg');"
  );

  config.addPassthroughCopy("./src/images");

  // Set custom directories for input, output, includes, and data
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "includes",
      data: "_data",
      output: "_site",
    },
  };
};
