const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/js", "index.js"),
  output: {
    filename: "[name].[hash].js",
    clean: true,
    path: path.resolve(__dirname, "dist"),
    sourceMapFilename: "[file].map",
    chunkFilename: "[id].chunk.js",
    assetModuleFilename: "./assets/[name][ext]",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimize: isProd,
    minimizer: [new TerserWebpackPlugin(), new CssMinimizerPlugin()],
  },
  devServer: {
    port: 4200,
    static: {
      directory: path.join(__dirname, "/dist"),
    },
    hot: isDev,
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: path.resolve(__dirname, "dist/index.html"),
      template: "./src/index.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "style.[hash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ttf|woff|woff2|eot)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
    ],
  },
};
