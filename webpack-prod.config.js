const baseConfig = require('./webpack-base.config.js')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = webpackMerge.strategy(
	{
		entry:'append',
		plugins:'append'
	}
)(baseConfig,{
	devtool:'cheap-module-source-map',
	entry:{
		main:'./Main.jsx'
	},
	plugins:[
		new HtmlWebpackPlugin({
			filename:'index.html',
			template:path.resolve(process.cwd(),'view/index.html')
		})
	]
})
