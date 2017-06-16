const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');

const dev = process.env.NODE_ENV !== 'production';
const extractCSS = dev ?
  new ExtractTextPlugin('app.css') :
  new ExtractTextPlugin('app.[hash].min.css');

module.exports = {
  devtool: dev ? 'inline-sourcemap' : false,
  entry: [
    `${__dirname}/src/styles/app.sass`,
    `${__dirname}/src/js/bootstrap.jsx`
  ],
  output: dev ? {
    path: `${__dirname}/build`,
    publicPath: '/assets/',
    filename: 'bundle.js'
  } : {
    path: `${__dirname}/dist`,
    filename: 'bundle.[hash].min.js'
  },
  plugins: dev ?
  [
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      extractCSS
  ]
  : [
      extractCSS,
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.DefinePlugin({ 'process.env': { NODE_ENV: "'production'" } }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: cssnano,
        cssProcessorOptions: {
          discardComments: { removeAll: true },
          safe: true
        },
        canPrint: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        mangle: false,
        sorcemap: false,
        compressor: { warnings: false }
      }),
      function manifest() {
        this.plugin('done', (stats) => {
          fs.writeFileSync(
            path.join(__dirname, './dist', 'manifest.json'),
            JSON.stringify({ postfix: `.${stats.hash}.min` })
          );
        });
      }
  ],
  module: {
    rules: [
     {
       test: /\.jsx?$/,
       loaders: ['babel-loader'],
       exclude: /node_modules/
     },
     {
       test: /\.css$/,
       use: extractCSS.extract({
         fallback: 'style-loader',
         use: ['css-loader?sourceMap']
       })
     },
     {
       test: /\.(less)$/,
       use: extractCSS.extract({
         fallback: 'style-loader',
         use: ['css-loader?sourceMap', 'less-loader?sourceMap']
       })
     },
     {
       test: /\.(jpg|png|eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
       loader: 'file-loader?name=[path][name].[ext]'
     }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  }
};
