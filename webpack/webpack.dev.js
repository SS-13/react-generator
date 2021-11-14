const { join } = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: join(__dirname, "../dist"),
        historyApiFallback: true,
        proxy: {
            "/api": "http://localhost:3000",
        },
        hot: true,
        port: 3000,
    },
    plugins: [
        // Plugin for hot module replacement
        new webpack.HotModuleReplacementPlugin(),
    ],
});
