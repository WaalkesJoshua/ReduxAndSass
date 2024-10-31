const path = require('path');
const { DefinePlugin } = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {

  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist/'),
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
        }
      }),
    ]
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff2|woff|eot|ttf)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
        include: [ path.join(__dirname, '/node_modules/'), path.join(__dirname, 'src') ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss|css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
        include: [ path.join(__dirname, 'src'), /node_modules/ ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ]
  },
  watch: true
};