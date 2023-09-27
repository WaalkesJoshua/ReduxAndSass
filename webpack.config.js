const path = require('path');
const { DefinePlugin } = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {},
          compress: {},
          mangle: true,
      }}),
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  watch: true
};