const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const PatchHtmlWebpackPluginPlugin = require('./PatchHtmlWebpackPluginPlugin');

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
  module: {
    rules: [{ test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ }],
  },
  plugins: [
    new PatchHtmlWebpackPluginPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `./webpack-templates/index.js`,
    }),
    new HtmlWebpackPlugin({
      filename: 'ru.html',
      template: `./webpack-templates/ru.js`,
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'static', to: '../dist' }],
    }),
  ],
  devServer: {
    host: 'localhost',
    open: true,
    historyApiFallback: {
      rewrites: [
        {
          from: /^\/ru$/,
          to: '/ru.html',
        },
        { from: /./, to: '/404.html' },
      ],
    },
  },
};
