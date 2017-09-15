const webpack = require('webpack')
const merge = require('webpack-merge')
const conf = require('./webpack.config')
const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = merge(conf, {
  devtool: '#source-map',
  entry: {
    index: path.resolve(__dirname, '../src/index')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].min.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    },
    axios: 'axios'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false
      }
    }),
    // 在 plugin 中添加
    new CompressionWebpackPlugin({ // gzip 压缩
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(js|css)$'    // 压缩 js 与 css
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  ]
})
