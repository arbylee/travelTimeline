path = require('path');

module.exports = {
  entry: "./scripts/app.js",
  output: {
    path: "./scripts/build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: path.join(__dirname, "scripts"),
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {presets: 'es2015'}}
    ]
  },
  devtool: 'source-map'
};
