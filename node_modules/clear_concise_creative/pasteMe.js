const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path")
module.exports = {
    entry: { app: './src' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-library.js',
        // specifies the name of the library that will be used in other module enviornemnts
        library: 'myLibrary',
        // library target allows you to speicfy how the module will be exposed
        libraryTarget: 'umd',
        // to make it available in both browser and node, you have to specify option to this
        globalObject: 'this'
    },
    externals: {
        moment: {
            commonjs: 'moment',
            commonjs2: 'moment',
            amd: 'moment',
            root: 'moment',
        }
    },
    module: {
        rules: [{
            // specify whihc files shoulde be loaded
            test: /\.js?$/,
            // specify which to exclude
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [require('@babel/plugin-proposal-class-properties')],
                },
            }],
        }],
    },
    plugins: [
        // new CopyWebpackPlugin({
        //     patterns: [{ from: "src/index.html" }]
        // })
    ],
};