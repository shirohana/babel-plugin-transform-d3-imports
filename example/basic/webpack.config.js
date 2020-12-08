'use strict'
const { join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = p => join(__dirname, p)

const usePlugin = !/^true$/i.test(process.env.DISABLE_D3_IMPORT_PLUGIN)

module.exports = {
  target: 'web',
  entry: {
    app: resolve('src/main.js')
  },
  output: {
    path: resolve('dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('src/index.html'),
      inject: 'body',
      minify: { collapseWhitespace: true }
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/env', { useBuiltIns: false }]
          ],
          plugins: [
            ['@babel/proposal-do-expressions'],
            usePlugin && ['babel-plugin-transform-d3-imports']
          ].filter(Boolean)
        }
      }]
    }]
  }
}
