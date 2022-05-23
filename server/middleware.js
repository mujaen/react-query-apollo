const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const path = require('path');

function createWebpackMiddleware(compiler, publicPath) {
    return webpackDevMiddleware(compiler, {});
}

module.exports = function devMiddleware(app, webpackConfig) {
    const compiler = webpack(webpackConfig());
    const middleware = createWebpackMiddleware(compiler, '/');

    app.use(middleware);

    app.get('*', (req, res) => {
        const filename = path.join(compiler.outputPath, 'index.html');
        compiler.outputFileSystem.readFile(filename, (err, result) => {
            res.set('content-type', 'text/html').end(result);
        });
    });
};
