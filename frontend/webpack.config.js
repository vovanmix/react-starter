const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const dev = process.env.NODE_ENV !== 'production';
const postfix = dev ? '' : '.[hash].min';

const extractCSS = new ExtractTextPlugin(`assets/[name].bundle${postfix}.css`);

const extractCommons = new webpack.optimize.CommonsChunkPlugin({
  name: 'commons',
  filename: `assets/commons${postfix}.js`
});

function setUpExtractCSS(loader) {
  const useLoaders = ['css-loader?sourceMap'];
  if (loader) {
    useLoaders.push(loader);
  }
  const extract = extractCSS.extract({
    fallback: 'style-loader',
    use: useLoaders
  });

  if (dev) {
    return ['css-hot-loader'].concat(extract);
  } else {
    return extract;
  }
}

module.exports = {
  devtool: dev ? 'inline-sourcemap' : false,
  entry: {
    app: [
      'babel-polyfill',
      `${__dirname}/src/styles/app.less`,
      `${__dirname}/src/js/bootstrap.jsx`
    ],
    head: [
      `${__dirname}/src/styles/head.less`,
      `${__dirname}/src/js/head.js`
    ]
  },
  output: {
    path: `${__dirname}/dist`,
    filename: `assets/[name].bundle${postfix}.js`
  },
  plugins: dev ?
  [
      extractCommons,
      extractCSS,
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        alwaysWriteToDisk: true,
        inject: false,
        template: 'index.ejs',
        someCustomVariable: 'someCustomVariableValue'
      }),
      new HtmlWebpackHarddiskPlugin(),
      new ProgressBarPlugin()
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
            JSON.stringify({
              hash: `${stats.hash}`,
              timestamp: new Date().toISOString()
            })
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
        use: setUpExtractCSS()
      },
      {
        test: /\.less$/,
        use: setUpExtractCSS('less-loader?sourceMap')
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url-loader'
      },
      {
        test: /\.(jpeg|jpg|png?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'file-loader?publicPath=../&name=./assets/[path][name].[ext]'
      }
    ]
  },
  node: { fs: 'empty' },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  }
};
