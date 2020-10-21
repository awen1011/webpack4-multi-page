const { merge } = require("webpack-merge");
const base = require("./webpack.base.config");
const webpack = require("webpack");
const isAnalyzer = process.env.NODE_ENV === "analyzer";
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(base, {
    mode: "production",
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    priority: 10, // 优先级
                },
            },
        },
    },
    plugins: isAnalyzer
        ? [
              new BundleAnalyzerPlugin({
                  analyzerPort: 8889,
              }),
          ]
        : [],
    output: {
        publicPath: "./",
    },
});
