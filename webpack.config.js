var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './client/index.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-1', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      React: 'react',
      ReactDOM: 'react-dom',
      QRCode: path.resolve('./client/vendor/qrcode.js')    // 注意，这个包改了源码了，因为直接使用会报错
    })
  ]
}
