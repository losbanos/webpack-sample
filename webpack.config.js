const path = require('path');
const MyWebpackPlugin = require('./my-webpack-plugin');
const webpack = require('webpack');
const childProcess = require('child_process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: './src/app.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    publicPath: '.',
                    name: '[name].[ext]?[hash]',
                    limit: 16000
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: (str) => {
                return `Build Date: ${new Date().toLocaleDateString()}
                Commit Version: ${childProcess.execSync('git rev-parse --short HEAD')}
                Author: ${childProcess.execSync('git config user.name')}
                `;
            }
        }),
        new webpack.DefinePlugin({
            buildVersion: JSON.stringify(true),
            'api.domain': JSON.stringify('https://domain.develop.com')
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            templateParameters: {
                env: process.env.NODE_ENV === 'development'? 'Development Title': 'Production Title'
            },
            minify: process.env.NODE_ENV === 'production' ? {
                collapseWhitespace: true,
                removeComments: true
            }: false
        }),
        new CleanWebpackPlugin()
    ]
}