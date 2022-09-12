//This is the enter of webpack debug
const devWebpackConfig = require("./build/webpack.dev");
const prodWebpackConfig = require("./build/webpack.prod");

// module.exports = devWebpackConfig;

module.exports = prodWebpackConfig;