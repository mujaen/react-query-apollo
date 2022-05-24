/**
 *  Connect Middleware to Express Server.
 */
const express = require('express');
const app = express();
const devMiddleware = require('./middleware');
const webpackConfig = require('../webpack/webpack.config');

// Setup middleware.
devMiddleware(app, webpackConfig);

// Start app.
app.listen('5000');