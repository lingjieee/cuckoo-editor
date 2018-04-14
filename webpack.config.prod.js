const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const baseConfigs = require('./webpack.config.base');

module.exports = merge(baseConfigs,{
  context: path.join(__dirname, './src'),
  entry: {
    index: './index.tsx'
  },
  output: {
    path: path.join(__dirname, './lib'),
    filename: 'cuckoo.js',
    publicPath: '/',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'draft-js': 'draft-js'
  },
  plugins: [
    new ExtractTextPlugin("cuckoo.css"),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /.css$/,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        },
        zindex: false,
        safe: true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: false,
        comparisons: false
      },
      mangle:{
        safari10: true
      },
      output: {
        comments: false,
        ascii_only: true
      },
      sourceMap: true
    })
  ]
})