const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isDevelopment = process.env.NODE_ENV === "development";

const pluginsConfig = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    filename: "index.html",
    title: "PixiJS",
  }),
  new CopyPlugin({
    patterns: [{ from: "./src/assets" }],
  }),
];

if (!isDevelopment) {
  pluginsConfig.push(
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    })
  );
}

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: `[name]${isDevelopment ? "" : ".[contenthash]"}.js`,
    path: path.resolve(__dirname, "./docs"),
    publicPath: "",
  },
  devtool: "source-map",
  mode: process.env.NODE_ENV || "production",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      maxSize: Infinity,
    },
  },
  devServer: {
    port: 1300,
    static: {
      directory: path.resolve(__dirname, "./docs"),
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset",
      },
      {
        test: /\.css$/,
        use: [
          !isDevelopment ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          !isDevelopment ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
  plugins: pluginsConfig,
};
