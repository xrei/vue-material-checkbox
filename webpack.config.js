const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'vue-material-checkbox.js',
    library: 'vue-material-checkbox',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.styl(us)?$/,
        use: [
            'vue-style-loader',
            'css-loader',
            'stylus-loader'
          ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

// if (process.env.NODE_ENV === 'production') {
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new CompressionPlugin({
//       asset: "[path].gz[query]",
//       algorithm: "gzip",
//       test: /\.js$/,
//       threshold: 10240,
//       minRatio: 0.8
//     })
//   ])
// }
