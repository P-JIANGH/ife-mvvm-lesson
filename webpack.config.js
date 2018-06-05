const path = require('path');
const prod = require('./enviorment/enviorment.prod');

module.exports = {
    mode: prod ? 'production' : 'development',
    entry: './src/index.js',
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        ],
    }
}
