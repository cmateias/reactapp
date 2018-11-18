const path = require('path');

const config = {
  resolve:{
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules'),
    ]
  },
  entry: ['@babel/polyfill', './lib/renderers/dom.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [{
            'plugins': ['@babel/plugin-proposal-class-properties']}]
        }
      }
    ]
  }
};

module.exports = config;
