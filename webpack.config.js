const path = require("path");
// const MyWebpackPlugin = require('./my-webpack-plugin');
const webpack = require("webpack");
const childProcess = require("child_process");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const apiMocker = require("connect-api-mocker");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const mode = process.env.NODE_ENV || "development";

module.exports = {
  mode: mode,
  entry: {
    main: "./src/app.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    port: 3000,
    stats: "normal",
    open: true,
    before: (app) => {
      app.use(apiMocker("/api", "mocks/api"));
    },
    hot: true,
  },
  optimization: {
    minimizer:
      process.env.NODE_ENV === "production"
        ? [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin({
              terserOptions: {
                compress: {
                  drop_console: true,
                },
              },
            }),
          ]
        : [],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|gif|png)$/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]?[hash]",
          publicPath: "./",
          limit: 20000,
        },
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `
                Build Date: ${new Date().toLocaleDateString()}
                Commit Version: ${childProcess.execSync(
                  "git rev-parse --short HEAD"
                )}
                Author: ${childProcess.execSync("git config user.name")}
            `,
    }),
    new webpack.DefinePlugin({
      TWO: "1 + 4",
      "api.domain": JSON.stringify("https://api-dev.domain.com"),
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      templateParameters: {
        env_title:
          process.env.NODE_ENV === "development" ? "개발용" : "릴리즈용",
      },
      minify:
        process.env.NODE_ENV === "production"
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
    }),
    new CleanWebpackPlugin(),
    ...(process.env.NODE_ENV === "production"
      ? [
          new MiniCssExtractPlugin({
            filename: "[name].css",
          }),
        ]
      : []),
  ],
};
