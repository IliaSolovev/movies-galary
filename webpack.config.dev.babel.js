const path  =  require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: {
    main: [
      "./src/app.js",
    ],
  },
  output: {
    filename: "[name].js",
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/react"],
            cacheDirectory: true,
            plugins: ["react-hot-loader/babel"],
          },
        },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: [
                autoprefixer,
              ],
            },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
          "img-loader",
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        devServer: true,
      },
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: "[name].js.map",
      exclude: ["bundle.js"],
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      title: "Module 11",
      template: path.join(`${__dirname}/public/index.html`),
      filename: path.join(`${__dirname}/dist/index.html`),
      favicon: path.join(`${__dirname}/favicon.ico`)
    }),
    new ErrorOverlayPlugin()
  ],
};