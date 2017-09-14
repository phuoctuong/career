
var express = require('express')
var path = require('path')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpack = require('webpack')
var config = require('./webpack.config.js')
var chalk = require('chalk')
var app = express()
var compiler = webpack(config)

var listener = null

compiler.apply(new webpack.ProgressPlugin(function(percentage,msg) {
	if(percentage == 1) {
		if(!listener) {
			listener = app.listen(8088,console.log(chalk.blue.bold("Listening port 8088")))
		}
	}
}))

if(process.env.NODE_ENV === 'production') {
	console.log("Production Environment")
	app.use('/dist',express.static(path.resolve(__dirname,'dist')))
	app.get('*',function(req,res) {
		res.sendFile(path.resolve(__dirname,'dist/index.html'))
	})
	app.listen(8088,console.log(chalk.blue.bold("Listening port 8088")))
} else if(process.env.NODE_ENV === 'development') {
	console.log("Development Environment")
	app.use(webpackDevMiddleware(compiler,{
		publicPath:config.output.publicPath,
		stats:{
			colors:true
		},
		noInfo:false
	}))

	app.use(webpackHotMiddleware(compiler,{
		log:console.log
	}))
	app.get('*',function(req,res) {
		res.sendFile(path.resolve(__dirname,'view/index.dev.html'))
	})
}
