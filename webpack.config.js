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
  { from: './audio-worklet-processors', to: './audio-worklet-processors' }, // relativa till output path !!!!
  { from: './src/index.html', to: './' }, // relativa till output path !!!!
  { from: './src/splash.html', to: './' }, // relativa till output path !!!!
]);

const fileLoaderRule = {
  include: /\.(jpg|png|ttf|woff|woff2|eot|svg)$/,
  use: ['file-loader']
};

const isTypeScriptFile = x => x.endsWith('.ts') || x.endsWith('.tsx');

const typescriptRule = {
  include: isTypeScriptFile,
  use: 'ts-loader'
};

const tslintRule = {
  include: isTypeScriptFile,
  enforce: 'pre',
  use: 'tslint-loader'
};

module.exports = {
  mode: 'development',
  // context: contextPath,
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.sass', '.ts', '.tsx'], // todo what effect does this have ???
    modules: ['node_modules', 'src']
  },
  entry: {
    app: path.join(__dirname, 'src/app.tsx'),
    'splash-app': path.join(__dirname, 'src/splash-app.js')
  },
  module: {
    rules: [
      fileLoaderRule,
      typescriptRule,
      tslintRule,
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
