'use strict';

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var IS_PROD = (process.env.NODE_ENV === 'production');
console.log("Working directory:" + __dirname);

const PATHS = {
  app: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  assets: path.join(__dirname, 'src/assets/'),
  images: path.join(__dirname, 'src/assets/images'),
  node_modules: path.join(__dirname, 'node_modules')
};

console.log("Dist Folder:" + PATHS.dist + "\n");

function getPlugins() {
  return [
    new HtmlWebpackPlugin({ template: 'index.html', inject: 'body' }),
    new ExtractTextPlugin('app.[contenthash:10].css')
  ];
}

module.exports = {
  context: PATHS.app,
  devtool: "source-map",
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", "scss"],
    modules: [
      PATHS.node_modules,
      PATHS.app
    ]
  },
  entry: {
    bundle: ['index.tsx']
  },
  output: {
    path: PATHS.dist,
    filename: "[name].js",
    publicPath: '/'
  },
  plugins: getPlugins(),
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: !IS_PROD,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: "expanded",
              sourceMap: !IS_PROD,
              sourceMapContents: true,
              includePaths: [path.resolve(__dirname, 'src', 'scss')]
            }
          }]
        })
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader", "ts-loader"] // First use Ts-loader and then babel (.babelrc) is the config
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};