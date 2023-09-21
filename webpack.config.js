const path = require('path');
const { DefinePlugin } = require('webpack');


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
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
  plugins:[
    new DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify('https://waalkesjoshua.github.io/ReduxAndSass/'),
    })
  ],
  watch: true
};