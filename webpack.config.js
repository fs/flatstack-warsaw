const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './main.js',
  mode: NODE_ENV,
  devtool: NODE_ENV === 'production' ? 'source-map' : 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `./pages/index.jsx`,
    }),
    new HtmlWebpackPlugin({
      filename: 'ru.html',
      template: `./pages/ru.jsx`,
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'static', to: '../dist' }],
    }),
  ],
  devServer: {
    host: 'localhost',
  },
  module: {
    rules: [{ test: /pages\/.*\.jsx$/, use: ['babel-loader'] }],
  },
};
