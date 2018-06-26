const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const baseConfig = require('./webpack-base.config.js');

module.exports = webpackMerge.strategy({
	entry: 'append',
	plugins: 'append'
})(baseConfig, {
	cache: true,
	devtool: 'inline-source-map',
	entry: {
		main: [
			'react-hot-loader/patch',
			'webpack-hot-middleware/client',
			'./Main.jsx'
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(), // only for dev env
		new ProgressBarPlugin({
			// eslint-disable-next-line prefer-template
			format: chalk.blue.bold(' build') + '[:bar] ' + chalk.green.bold(':percent') + '(:elapsed seconds)',
			clear: false
		})
	]
});

