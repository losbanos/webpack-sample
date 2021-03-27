const path = require('path');

module.exports = {
    mode: 'development',
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
                test: /\.js$/,
                use: [path.resolve('./module/my-webpack-loader.js')]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpe?g|gif|png)$/,
                loader: 'url-loader',
                options: {
                    limit: 20000,
                    publicPath: './dist/',
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    }
}
