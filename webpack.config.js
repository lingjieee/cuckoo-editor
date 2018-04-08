const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfigs = require('./webpack.config.base');

module.exports = merge(baseConfigs,{
  devtool: 'cheap-module-source-map',
  entry:{
    index: './example/index.jsx'
  },
  output:{
    path: path.join(__dirname, './lib'),
    filename: '[name].js',
  },
  plugins:[
    new ExtractTextPlugin("cuckoo.css"),
    new HtmlWebpackPlugin({
      inject: true,
      template: './example/index.html'
    })
  ],
  devServer: {
    stats: { chunks:false },
    contentBase: './example',
    watchContentBase: true,
    inline: true,
    historyApiFallback: true,
    progress: true,
    port: 3200
  }
})