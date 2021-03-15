const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main1: './src/app.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js'
    }
}