const webpack = require('webpack')
const merge = require('webpack-merge')
const conf = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(conf, {
  devtool: '#cheap-module-source-map',
  entry: {
    app: resolve('examples/app'),
    vendors: ['vue']
  },
  output: {
    path: resolve('examples/dist'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
      hljs: 'highlightjs/highlight.pack.js',
      buttons: '../src/index'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: [ 'vendors', 'app' ],
      template: resolve('examples/index.html'),
      filename: resolve('examples/dist/index.html')
    })
  ],
  devServer: {
    hot: true,
    quiet: false,
    open: true,
    inline: true,
    compress: true,
    contentBase: resolve('examples/dist'),
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: true
  }
})
