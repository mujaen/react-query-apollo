const { ESBuildMinifyPlugin } = require('esbuild-loader');
const path = require("path");

module.exports = (options) => ({
  mode: options.NODE_ENV,
  entry: path.join(process.cwd(), 'src/app.tsx'),
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(process.cwd(), 'build'),
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
});