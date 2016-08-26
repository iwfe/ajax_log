var webpack = require('webpack')
var path = require('path')
var WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  entry: [
    './client/index.js',
    './node_modules/bulma/css/bulma.css'
  ],
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-1', 'react'],
          plugins: ['transform-object-assign']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      React: 'react',
      ReactDOM: 'react-dom',
      QRCode: path.resolve('./client/vendor/qrcode.js')    // 注意，这个包改了源码了，注释掉了284到301行，因为直接使用会报错
    }),
    new WebpackNotifierPlugin({ excludeWarnings: true, alwaysNotify: true })
  ]
}
