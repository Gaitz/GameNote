const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!404.html"],
    }),
    new HtmlWebpackPlugin({
      title: "Game Note",
      template: path.resolve(__dirname, "./public/index_template.html"),
    }),
  ],
})
