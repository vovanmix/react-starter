const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');

const dev = process.env.NODE_ENV !== 'production';
const extractCSS = dev ?
  new ExtractTextPlugin('[name].bundle.css') :
  new ExtractTextPlugin('[name].bundle.[hash].min.css');

const extractCommons = new webpack.optimize.CommonsChunkPlugin({
  name: 'commons',
  filename: 'commons.js'
});

module.exports = {
  devtool: dev ? 'inline-sourcemap' : false,
  entry: {
    app: [
      `${__dirname}/src/styles/app.less`,
      `${__dirname}/src/js/bootstrap.jsx`
    ],
    head: [
      `${__dirname}/src/styles/head.less`,
      `${__dirname}/src/js/head.js`
    ]
  },
  output: dev ? {
    path: `${__dirname}/build`,
    publicPath: '/assets/',
    filename: '[name].bundle.js'
  } : {
    path: `${__dirname}/dist`,
    filename: '[name].bundle.[hash].min.js'
  },
  plugins: dev ?
  [
      extractCommons,
      extractCSS,
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin()
  ]
  : [
      extractCommons,
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
        test: /src\/js\/client\/.*\.js$/,
        use: 'imports-loader?define=>false'
      },
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
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url-loader'
      },
      {
        test: /\.(jpeg|jpg|png?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'file-loader?name=[path][name].[ext]'
      }
    ]
  },
  node: { fs: 'empty' },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  }
};
