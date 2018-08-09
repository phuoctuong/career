var express = require('express');
var path = require('path');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpack = require('webpack');
var chalk = require('chalk');
var config = require('./webpack.config.js');

var app = express();
var compiler = webpack(config);

var listener = null;

compiler.apply(
  new webpack.ProgressPlugin(function(percentage, msg) {
    if (percentage == 1) {
      if (!listener) {
        listener = app.listen(
          8080,
          console.log(chalk.blue.bold('Listening port 8080'))
        );
      }
    }
  })
);

if (process.env.NODE_ENV === 'production') {
  app.use('/dist', express.static(path.resolve(__dirname, 'dist')));
  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
  });
  app.listen(8080, console.log(chalk.blue.bold('Listening port 8080')));

} else if (process.env.NODE_ENV === 'development') {
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
      stats: {
        colors: true
      },
      noInfo: false
    })
  );

  app.use(
    webpackHotMiddleware(compiler, {
      log: console.log
    })
  );
  
  app.use('*', function(req, res, next) {
    var filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, function(err, result){
      if (err) {
        return next(err);
      }
      res.set('content-type','text/html');
      res.send(result);
      res.end();
    });
  });
}
