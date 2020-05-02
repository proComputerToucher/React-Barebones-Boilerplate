const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // BASICS
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
  },
  // DEVELOPMENT
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
  devtool: "source-map",
  // MODULES
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "React Barebones Boilerplate",
      template: "assets/template.html",
    }),
  ],
};
