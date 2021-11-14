const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBar = require("webpackbar");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
    entry: {
        index: {
            import: [
                "@babel/polyfill",
                path.resolve(__dirname, "../src/web/index.tsx"),
            ],
            dependOn: "shared",
        },
        shared: "lodash",
    },
    output: {
        filename: "[name].bundle.js?t=[chunkhash]",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/",
        clean: true,
    },
    module: {
        rules: [
            // {
            //     test: /\.tsx?$/,
            //     use: [
            //         {
            //             loader: "ts-loader",
            //             options: {
            //                 // transpileOnly: true,
            //             },
            //         },
            //     ],
            //     exclude: /node_modules/,
            // },
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "swc-loader",
                },
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: "postcss-loader",
                    },
                ],
            },
            { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: "asset/resource" },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        // new ForkTsCheckerWebpackPlugin({
        //     eslint: {
        //         files: "./src/**/*.{ts,tsx,js,jsx}",
        //     },
        // }),
        new HtmlWebpackPlugin({
            title: "React Typescript Generation",
            template: path.resolve(__dirname, "../public/index.html"),
        }),
        new WebpackBar(),
        new FriendlyErrorsWebpackPlugin(),
    ],
    resolve: {
        extensions: [".tsx", ".js", ".ts"],
    },
    optimization: {
        usedExports: true,
        moduleIds: "deterministic",
        runtimeChunk: "single", // If we're going to use multiple entry points on a single HTML page,
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
    },
    // devtool: "eval-cheap-module-source-map",
};
