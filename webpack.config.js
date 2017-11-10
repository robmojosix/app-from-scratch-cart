const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build', 'client'),
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
         loaders: ['babel-loader']
      }
     ]
  }
};
