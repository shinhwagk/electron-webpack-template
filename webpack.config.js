const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "main.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  module: {
    loaders: [{ test: /\.ts$/, loader: 'awesome-typescript-loader' }]
  },
  // target: 'electron-main',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    open: true,
    openPage: "index.html",
    hot:true
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'assets', to: '' }, { from: 'index.html', to: 'index.html' }])
  ]
}