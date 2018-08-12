const webpack = require('webpack');
const path = require('path');
const ReactTwistPlugin = require('@twist/react-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  
  context: __dirname,
  
  mode: 'production',
  
  entry: [ __dirname + '/src/index.ts' ],

  watchOptions: {
    // aggregateTimeout: 1000, // wait for a second before firing a new build
    ignored: /node_modules/
  },

  module: {
    rules: [
      {
        test: /\.es6\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
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
    path: __dirname + '/dist',
    publicPath: '',
    filename: '[name].js'
  },
  
  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',

  plugins: [

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),}),
    new webpack.ProvidePlugin({"React": "react",}),
    new ReactTwistPlugin(),
  ]

};
