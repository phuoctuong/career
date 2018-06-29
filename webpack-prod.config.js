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
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new webpack.optimize.UglifyJsPlugin({ // minify bundle
			compress: {
				warnings: false // remove warning messages in third-party.
			}
		}),
		new webpack.NoEmitOnErrorsPlugin(), // will not build bundle folder if there are error or warning msgs
	]
});

