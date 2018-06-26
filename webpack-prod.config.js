const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const baseConfig = require('./webpack-base.config.js');

module.exports = webpackMerge.strategy(
	{
		entry: 'append',
		plugins: 'append'
	}
)(baseConfig, {
	devtool: 'cheap-module-source-map',
	entry: {
		main: './Main.jsx'
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(), // will not build bundle folder if there are error or warning msgs
	]
});

