const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@images": path.resolve(__dirname, "src/images"),
        "@util": path.resolve(__dirname, "src/util"),
        "@pages": path.resolve(__dirname, "src/pages"),
      }
    }
  });
}