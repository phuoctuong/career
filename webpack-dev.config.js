const webpack = require('webpack')
const path = require('path')
const baseConfig = require('./webpack-base.config.js')
const webpackMerge = require('webpack-merge')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')

module.exports = webpackMerge.strategy({
	entry:'append',
	plugins:'append'
})(baseConfig,{
	cache:true,
	devtool:'eval-source-map',
	entry:{
		main:[
			'react-hot-loader/patch',
			'webpack-hot-middleware/client',
			'./Main.jsx'
		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new ProgressBarPlugin({
			format:chalk.blue.bold(' build') + '[:bar] ' + chalk.green.bold(':percent') + '(:elapsed seconds)',
			clear:false
		})
	]

})
