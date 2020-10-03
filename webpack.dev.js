const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")
const path = require("path")

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "docs"),
    publicPath: "/GameNote/",
    open: true,
    openPage: "GameNote/",
    hot: true,
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "__[local]--[hash:base64:5]",
              },
            },
          },
        ],
      },
    ],
  },
})
