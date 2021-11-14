// const argv = require("yargs-parser")(process.argv.slice(2));
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
console.log(process.argv);
module.exports = merge(common, {
    mode: "production",
    devtool: false,
});
