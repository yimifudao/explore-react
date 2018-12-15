const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fontRule = require('./webpack/font-rule');
const imgRule = require('./webpack/img-rule');
const theme = require("./package.json").theme;
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
        loader:'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", 
          "css-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          { loader: "less-loader", options: { modifyVars: theme,javascriptEnabled:true } }
        ]
      },
      ...fontRule,
      ...imgRule
    ]
  },
  // webpack plugins
  plugins:[
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'./src/index.html')
    })
  ]
}