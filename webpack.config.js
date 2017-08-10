const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      { test: /\.js|\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
