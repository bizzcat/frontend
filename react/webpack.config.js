var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/meta/meta-index.html',
  filename: 'index.html',
  inject: 'body',
})

// var globalizePlugin = require( "globalize-webpack-plugin" );
// var globalizePluginConfig = new globalizePlugin({
//     production: ,
//     developmentLocale: "en",
//     supportedLocales: ["en"],
//     output: "globalize-compiled-data-[locale].[hash].js",
// })


module.exports = {
  entry: [
    './meta/meta-index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig
  ]
};
