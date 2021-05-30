const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge"); // webpack合并配置
const webpackBaseConfig = require("./webpack.base.js");

process.env.NODE_ENV = "production";

module.exports = merge(webpackBaseConfig, {
  devtool: "source-map",
  mode: "production",
  entry: {
    main: path.resolve(__dirname, "../src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "../lib"),
    publicPath: "/lib/", // cpx:todo 了解一下这个是干嘛的
    filename: "bysking-ui.min.js", // // cpx:todo
    library: "bysking-ui", // cpx:todo
    libraryTarget: "umd", // cpx:todo 打包的模块有哪些类型？？？梳理一下
    umdNamedDefine: true, // cpx:todo
  },
  externals: {
    // 这个是啥意思？对象的方式
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"production"',
    }),
  ],
});
