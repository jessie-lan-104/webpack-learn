const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
    entry: { main: "./src/index.js" },
    output: {
        filename: "[name][contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.md$/,
                use: ["html-loader", "markdown-loader"],
            }
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 5656,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CopyWebpackPlugin( {
            patterns: [
                { from: "./src/assets/static", to: "./assets/static" }
            ]
        }),
    ],
};

module.exports = (env, args) => {
    return config;
}