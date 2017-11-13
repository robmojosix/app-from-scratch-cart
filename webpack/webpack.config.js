const babelOptions = require('../babelrc');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

export default {
  context: process.cwd(),
  entry: {
    main: '../src/client/index.js'
  },
  output: {
    path: path.resolve(process.cwd(), 'build', 'client'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.scss']
  },
  module: {
    loaders: [
      {
         test: /\.js$/,
         exclude: /node_modules/,
         use: {
           loader: 'babel-loader',
           options: babelOptions
         }
      }
    ]
  }
};
