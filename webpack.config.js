const path = require('path');

module.exports = {
    devtool: process.env.NODE_ENV === 'production' ? 'eval-source-map' : 'eval',
    entry: {
        main: './app/src/index.js',
        index: './app/index.html',
    },
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: '[ext]' === 'js' ? '[name].bundle.[ext]' : '[name].[ext]',
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
