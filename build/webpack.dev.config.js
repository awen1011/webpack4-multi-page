const { merge } = require("webpack-merge");
const base = require("./webpack.base.config");
const webpack = require("webpack");

module.exports = merge(base, {
    mode: "development",
    devServer: {
        contentBase: "./dist",
        port: 8099,
        hot: true,
    },
});
