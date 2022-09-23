const path = require("path");

module.exports = {
    module: {
        rules: [
            {test: /\.css$/, 
            use: ["style-loader", "css-loader"],
            exclude: /node_modules/},
            {test: /\.ts$/, use: "ts-loader"},
        ],
    },
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },

};