// var debug = process.env.NODE_ENV !== 'production';
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/**
 * Just used to output some text in the console when building.
 */
const entryPath = path.join(__dirname, 'src/script.js');
const outputPath = path.join(__dirname, 'build');
// const indexHtmlPath = path.join(__dirname, 'src/index.html');

// Copy webpack plugin
/* const CopyWebpackPlugin = require('copy-webpack-plugin');

const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  // { from: './src/assets', to: 'assets' },
  { from: './semantic/dist', to: './semantic' }, // relativa till output path !!!!
]); */

module.exports = {
  // context: contextPath,
  devtool: 'source-map',
  /* devServer: {
    historyApiFallback: true,
  }, */
  resolve: {
    // changed from extensions: [".js", ".jsx"]
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  // devtool: false,
  // entry: './js/client.js',
  entry: [entryPath],
  module: {
    rules: [
      // changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' } },
      { test: /\.(t|j)sx?$/, use: { loader: 'awesome-typescript-loader' } },
      // addition - add source-map support 
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  output: {
    // path: __dirname + '/src/',
    path: outputPath,
    filename: 'script.bundle.js',
    publicPath: '/',
  },
  plugins: [
    // new HtmlWebpackPlugin({ template: indexHtmlPath }),
    // CopyWebpackPluginConfig,
    /* new (require('circular-dependency-plugin'))({
      // exclude detection of files based on a RegExp
      exclude: /node_modules/,
      // add errors to webpack instead of warnings
      failOnError: true,
    }), */
    // new webpack.optimize.UglifyJsPlugin({ sourceMap: false }),
  ],
};
