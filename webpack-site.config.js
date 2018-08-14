/**
 * This is the configuration to run the documentation and test
 * site for the twist-lib libary.
 * 
 * @author sangupta
 */

const webpack = require('webpack');
const path = require('path');
const ReactTwistPlugin = require('@twist/react-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  
  context: __dirname,
  
  mode: 'development',
  
  entry: {
    // the reason we use JSX for the App site is because we don't
    // want to get into the complications of typescript errors
    twistlibsite: [ __dirname + '/site/DocSiteMain.tsx' ],

    // extract all dependencies into a vendor file
    vendor: ['react', 'react-dom', '@twist/core', '@twist/react', 
             'babel-runtime/core-js', 'babel-runtime/regenerator', 'babel-polyfill']
  },

  watchOptions: {
    // aggregateTimeout: 1000, // wait for a second before firing a new build
    ignored: /(node_modules|bower_components)/
  },

  devServer: {
    contentBase: path.join(__dirname, 'site/assets'),
    compress: true,
    port: 1309,
    hot: true,
    https: false,
    noInfo: false,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.(gif|png|jpg|svg|eot|woff|woff2|ttf|mp4|cur|ico)$/,
        loader: 'file-loader'
      }
    ]
  },

  resolve: {
    // needed to not use relative paths in imports
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ],

    // extensions that are handled by webpack
    extensions: [
      '*', '.js', '.jsx', '.ts', '.tsx'
    ],
    
    alias: {
      src: './src'
    }
  },

  output: {
    path: __dirname + '/docs',
    publicPath: '',
    filename: '[name].js'
  },
  
  // devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',

  plugins: [
    new HtmlWebpackPlugin({ title: 'Twist-Lib Component Library', template: 'site/index.ejs', inject: 'body' }),
    new webpack.DefinePlugin({'process.env.NODE_ENV': process.env.NODE_ENV }),
    new webpack.ProvidePlugin({"React": "react",}),
    new ReactTwistPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]

};
