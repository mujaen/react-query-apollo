const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const path = require('path');


module.exports = function devMiddleware(app, webpackConfig) {
    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler));
};
