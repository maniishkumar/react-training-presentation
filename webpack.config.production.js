/* eslint-disable */

var path = require("path");
var webpack = require("webpack");
const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: 'cheap-module-source-map',
  resolve: {
    modules: [
      'node_modules',
      path.join(__dirname, 'presentation')
    ],
    extensions: ['*', '.js', '.jsx', '.json']
  },
  module: {}
};
// ------------------------------------
// Entry Points
// ------------------------------------

webpackConfig.entry = [
  "babel-polyfill",
  "./index"
];

// ------------------------------------
// Bundle Output
// ------------------------------------
webpackConfig.output = {
  path: path.join(__dirname, "dist"),
  filename: "bundle.js",
  publicPath: "/dist",
};
webpackConfig.plugins = [
  new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
];
webpackConfig.module.rules = [{
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  
  loader: "babel-loader",
  include: __dirname
},
{
  test: /\.json$/,
  loader: 'json-loader'
},
{
  test: /\.css$/,
  loaders: ["style-loader", "raw-loader"],
  include: __dirname
},{
  test: /\.md$/,
  loader: "html-loader!markdown-loader?gfm=false"
}];
webpackConfig.module.rules.push(
  {
    test:  /\.woff(2)?(\?[a-z0-9]+)?$/,
    loader:  "url-loader?limit=10000&mimetype=application/font-woff"
  }, {
    test:  /\.(ttf|eot|svg)(\?[a-z0-9]+)?$/,
    loader:  "file-loader"
  },
  {
    test:  /\.woff(2)?(\@[a-z0-9]+)?$/,
    loader:  "url-loader?limit=10000&mimetype=application/font-woff"
  }, {
    test:  /\.(ttf|eot|svg)(\@[a-z0-9]+)?$/,
    loader:  "file-loader"
  },
  {
    test:  /\.(ttf|eot|svg)(\@)?$/,
    loader:  "file-loader"
  },
  {  test:  /\.(png|jpg|gif)$/,  loader:  'file-loader?limit=8192'  }
)

module.exports = webpackConfig;