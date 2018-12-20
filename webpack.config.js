const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fontRule = require('./webpack/font-rule');
const imgRule = require('./webpack/img-rule');
const theme = require("./package.json").theme;

const optimization = {
  splitChunks: {
    chunks: 'async',
    minSize: 30000,
    maxSize: 100000,
    minChunks: 10,
    maxAsyncRequests: 50,
    maxInitialRequests: 30,
    automaticNameDelimiter: '*',
    name: true,
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10
      },
      default: {
        minChunks: 20,
        priority: -20,
        reuseExistingChunk: true
      }
    }
  }
}

module.exports = {
  resolve: {
    modules: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  // webpack module
  module:{
    rules:[
      // .js loader
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader:MiniCssExtractPlugin.loader
          },
          {
            loader:'css-loader'
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader:MiniCssExtractPlugin.loader
          },
          {
            loader:"css-loader"
          },
          { 
            loader: "less-loader",
            options: {
              exclude: /node_modules/,
              modifyVars: theme,
              javascriptEnabled:true 
            } 
          }
        ]
      },
      ...fontRule,
      ...imgRule
    ]
  },
  optimization,
  devtool: false,
  // webpack plugins
  plugins:[
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'./src/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['vendor.js']
    })
  ]
}