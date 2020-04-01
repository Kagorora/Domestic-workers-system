const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './index.js'
  }, 
  stats: 'errors-only',
  plugins: [

    new HtmlWebpackPlugin({
        template: './index.html'
    }),
    new ExtractTextPlugin({
      filename: './styleModules/signup.css'
    }),

],
  output: {
      path: path.join(__dirname, './dist'),
      filename: '[name]_bundle.js',
      path: path.resolve(__dirname, 'dist'),
  }, 
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    contentBase: path.join(__dirname, './dist'), 
    port: 8080,
    hot: true
 },
 performance: {
  hints: 'warning',
  maxEntrypointSize: 400000

},
  module:  {
      rules: [
            {
              test: /\.(js|jsx)$/, 
              exclude: /node_modules/,
              use: [
                  {loader: 'babel-loader'},
                ]
              },
              {
                test: /\.css$/,
                 use: [{loader: 'style-loader'}, {
                   loader: 'css-loader',
                   options: {
                    importLoaders: 1,
                    modules: {localIdentName: "[name]__[local]___[hash:base64:5]" }
                  }
                }]
              },
              {
                test: /\.(jpg|png|svg)$/,
                use:{
                  loader: 'url-loader',
                }
              }
          ]
  },
}
