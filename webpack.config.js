const path = require('path');
const prod = require('./enviorment/enviorment.prod');

module.exports = {
    mode: prod ? 'production' : 'development',  // process.env.NODE_ENV
    devtool: prod ? 'eval-source-map' : 'eval',
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                    }
            } },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.san$/, loader: 'san-loader' },
        ],
    }
}
