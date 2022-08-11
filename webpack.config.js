const path = require('path');
const { EnvironmentPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const PatchHtmlWebpackPluginPlugin = require('./PatchHtmlWebpackPluginPlugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: { 'index-en': './index-en.jsx' },
  mode: NODE_ENV,
  devtool: NODE_ENV === 'production' ? 'source-map' : 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime',
    },
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        oneOf: [
          {
            test: /\.(jpe?g|png|gif|svg|webp|avif)$/,
            resourceQuery: /inline/,
            type: 'asset/inline',
          },
          {
            test: /\.(jpe?g|png|gif|svg|webp|avif)$/,
            type: 'asset/resource',
          },
        ],
      },
    ],
  },
  plugins: [
    // About CONTEXT: https://docs.netlify.com/configure-builds/environment-variables/#build-metadata
    new EnvironmentPlugin({ NODE_ENV: 'development', CONTEXT: 'development' }),
    new PatchHtmlWebpackPluginPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `./webpack-templates/index.js`,
      chunks: ['index-en'],
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
        { from: /./, to: '/404.html' },
      ],
    },
  },
};
