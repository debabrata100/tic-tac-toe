/* global __dirname, require, module*/

const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
let libraryName = 'game-lib';

let plugins = [], outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}
const config = {
    entry: ['./app/index.js'],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: outputFile
    },
    module: {
      loaders: [
        {
          loader:'babel-loader',
          test: /\.js$/,
          exclude:  /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.js']
    },
    devServer:{
      port: 3000,
      contentBase: __dirname + '/build',
      inline: true
    },
    plugins: plugins
}
module.exports = config;
