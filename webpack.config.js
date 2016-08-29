var webpack = require('webpack')
var path = require('path')
var WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  entry: [
    'purecss',
    './client/vendor/jquery.jsonview.min.css',
    './client/vendor/jquery.jsonview.min.js',
    './client/index.css',
    './client/index.js'
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
      // 加载外部公共样式
      {
        test: /\.css$/,
        exclude: /client\/components/,
        loader: 'style!css'
      },
      // 加载前端组件的css
      {
        test: /\.css$/,
        include: /client\/components/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      React: 'react',
      ReactDOM: 'react-dom',
      QRCode: path.resolve('./client/vendor/qrcode.js')    // 注意，这个包改了源码了，注释掉了284到301行，因为直接使用会报错
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    }),
    new WebpackNotifierPlugin({ excludeWarnings: true, alwaysNotify: true })
  ]
}
