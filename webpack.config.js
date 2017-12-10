const path = require('path');
const DIR_SRC = path.join(__dirname, 'app/client/src');
const DIR_DIST = path.join(__dirname, 'app/client/dist');
const webpack = require('webpack');

module.exports = {
  entry: `${DIR_SRC}/App.jsx`, // the starting point for our program
  output: {
    // the absolute path for the directory where we want the output to be placed
    path: DIR_DIST,
    // the name of the file that will contain our output - we could name this whatever we want, but bundle.js is typical
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', 'css']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000&minetype=image/png'
      },
      {
        test: /\.jpg/,
        loader: 'file-loader'
      },
      {
        test : /\.jsx?/,
        include : DIR_SRC,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015']
       }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
