// var debug = process.env.NODE_ENV !== 'production';
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const webpack = require('webpack');

const nodeModules = path.resolve(__dirname, 'node_modules');

/**
 * Just used to output some text in the console when building.
 */
const outputPath = path.join(__dirname, 'build');

// Copy webpack plugin
const CopyWebpackPlugin = require('copy-webpack-plugin');

const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  // { from: './src/assets', to: 'assets' },
  // { from: './semantic/dist', to: './semantic' }, // relativa till output path !!!!
  { from: './node_modules/semantic-ui-css', to: './semantic' }, // relativa till output path !!!!
  { from: './audio-worklet-processors', to: './audio-worklet-processors' }, // relativa till output path !!!!
  { from: './src/index.html', to: './' }, // relativa till output path !!!!
  { from: './src/splash.html', to: './' }, // relativa till output path !!!!
]);

module.exports = {
  mode: 'development',
  // context: contextPath,
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.sass'], // todo what effect does this have ???
    modules: ['node_modules', 'src']
  },
  entry: {
    app: path.join(__dirname, 'src/app.js'),
    'splash-app': path.join(__dirname, 'src/splash-app.js')
  },
  module: {
    rules: [
      {
        include: x => x.endsWith('.js'),
        exclude: nodeModules,
        loader: ['babel-loader', 'eslint-loader']
      },
      {
        include: x => x.endsWith('.sass'),
        exclude: nodeModules,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        include: x => x.endsWith('.css'),
        exclude: nodeModules,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    path: outputPath,
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.join(__dirname, 'src/index.html')
    // }),
    CopyWebpackPluginConfig,
    // new webpack.optimize.ModuleConcatenationPlugin(), // makes build smaller!
    // new webpack.optimize.UglifyJsPlugin({ sourceMap: false }),
  ],
};
