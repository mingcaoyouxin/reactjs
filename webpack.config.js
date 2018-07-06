var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
            test: /\.css/,
            loader: 'style!css'
        }, {
            test: /\.(png|jpe?g|gif|svg)$/,
            loader: 'url',
            query: {
                limit: 10240, // 10KB 以下使用 base64
                name: 'img/[name]-[hash:6].[ext]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)$/,
            loader: 'url-loader?limit=10240&name=[name]-[hash:6].[ext]'
        }]
  }
};
