const join = require('path').join
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: join(__dirname, 'build')
  },
  devtools: 'source-map',
  devServer: {
    port: 3001,
    contentBase: join(__dirname, 'build'),
    histryApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        excludes: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: false // 不将打包后的 js 文件通过 script 的方式插入到 html 文件中
    })
  ],
  externals: [
    'react',
    'react-dom',
    'react-router-dom'
  ]
}