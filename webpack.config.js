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
  'webpack-hot-middleware/client',
  "react-hot-loader/patch",
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
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin()
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
// module.exports = {
//   devtool: "cheap-module-source-map",
//   entry: [
//     "babel-polyfill",
//     'webpack-hot-middleware/client',
//     "react-hot-loader/patch",
//     "./index"
//   ],
//   output: {
//     path: path.join(__dirname, "dist"),
//     filename: "bundle.js",
//     publicPath: "/dist",
//   },
//   plugins: [
//     new webpack.NamedModulesPlugin(),
//     new webpack.HotModuleReplacementPlugin()
//   ],
//   module: {
//     loaders: [{
//       test: /\.md$/,
//       loader: "html-loader!markdown-loader?gfm=false"
//     }, {
//       test: /\.(js|jsx)$/,
//       exclude: /node_modules/,
//       loader: "babel-loader",
//       include: __dirname
//     }, {
//       test: /\.css$/,
//       loaders: ["style-loader", "raw-loader"],
//       include: __dirname
//     }, {
//       test: /\.svg$/,
//       loader: "url-loader?limit=10000&mimetype=image/svg+xml",
//       include: path.join(__dirname, "assets")
//     }, {
//       test: /\.png$/,
//       loader: "url-loader?limit=100000",
//       include: path.join(__dirname, "assets")
//     }, {
//       test: /\.gif$/,
//       loader: "url-loader?mimetype=image/gif",
//       include: path.join(__dirname, "assets")
//     }, {
//       test: /\.jpg$/,
//       loader: "file-loader?limit=8192",
//       include: path.join(__dirname, "assets")
//     }]
//   }
// };
module.exports = webpackConfig;