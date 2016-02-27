var path = require('path');
var webpack = require("webpack");


module.exports = {
  entry: "./scripts/app.js",
  output: {
    path: "./dist/",
    filename: "scripts/bundle.js"
  },
  module: {
    loaders: [
      { test: path.join(__dirname, "scripts"), exclude: /node_modules/, loader: "babel-loader", query: {presets: 'es2015'} },
      { test: /\.html$/, loader: 'file-loader?name=[name].[ext]'},
      { test: /\.jpg$/, loader: 'file-loader?name=img/[name].[ext]'},
      { test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader']},
      { test: /\.css$/, loaders: ['style-loader', 'css-loader']},
      { test: /\.(otf|ttf)$/, loader: 'file-loader?name=styles/fonts/[name].[ext]'}
    ]
  },
  devtool: 'source-map'
};
