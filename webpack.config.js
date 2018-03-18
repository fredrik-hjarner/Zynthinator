// var debug = process.env.NODE_ENV !== 'production';
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/**
 * Just used to output some text in the console when building.
 */
const entryPath = path.join(__dirname, 'src/app.js');
const outputPath = path.join(__dirname, 'build');
const indexHtmlPath = path.join(__dirname, 'src/index.html');

// Copy webpack plugin
const CopyWebpackPlugin = require('copy-webpack-plugin');

const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  // { from: './src/assets', to: 'assets' },
  { from: './semantic/dist', to: './semantic' }, // relativa till output path !!!!
  { from: './audio-worklet-processors', to: './audio-worklet-processors' }, // relativa till output path !!!!
]);

module.exports = {
  // context: contextPath,
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.sass'],
    modules: [
      'node_modules',
      'src'
    ],
  },
  // devtool: false,
  // entry: './js/client.js',
  entry: entryPath,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // for SASS
      {
        test: /\.sass$/,
        use: [
          { loader: 'style-loader' }, 
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options:
              { includePaths: [path.join(__dirname, 'src')] },
          }
        ],
      },
      // for CSS
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
  },
  output: {
    // path: __dirname + '/src/',
    path: outputPath,
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: indexHtmlPath }),
    CopyWebpackPluginConfig,
    new (require('circular-dependency-plugin'))({
      // exclude detection of files based on a RegExp
      exclude: /node_modules/,
      // add errors to webpack instead of warnings
      failOnError: true,
    }),
    // new webpack.optimize.UglifyJsPlugin({ sourceMap: false }),
  ],
};
