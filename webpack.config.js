const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? 'eval-source-map' : 'eval',
  entry: {
    main: './app/index.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    index: 'index.html',
    clientLogLevel: 'warning',
    open: true,
    port: 9000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env'],
            plugins: ['babel-plugin-transform-runtime'],
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/, 
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true } },
        ]
      },
      { test: /\.san$/, loader: 'san-loader' },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'San Hello World!',
      filename: 'index.html',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      san: process.env.NODE_ENV === 'production'
        ? 'san/dist/san.js'
        : 'san/dist/san.dev.js'
    }
  }
};
