const { ESBuildMinifyPlugin } = require('esbuild-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJSON = require('../package.json');
const path = require('path');
const webpack = require('webpack');

module.exports = (options) => ({
  mode: 'development',
  entry: path.join(process.cwd(), 'src/app.tsx'),
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  },
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2015',
      })
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: {
          loader: 'esbuild-loader',
          options: {
            loader: 'tsx',
            target: 'es2015',
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DIST_ENV: JSON.stringify(process.env.DIST_ENV),
      RELEASE: JSON.stringify(packageJSON.version),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
    }),
  ]
});