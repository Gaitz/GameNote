const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "docs"),
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "src/components"),
      Containers: path.resolve(__dirname, "src/containers"),
      Services: path.resolve(__dirname, "src/services"),
      Hooks: path.resolve(__dirname, "src/hooks"),
      Store: path.resolve(__dirname, "src/store"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Game Note App",
      template: path.resolve(__dirname, "./public/index_template.html"),
      icon: path.resolve(__dirname, "./public/icon.png"),
    }),
  ],
}
