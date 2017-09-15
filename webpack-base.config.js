const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
	filename: '[name].css',
	disable: process.env.NODE_ENV === 'development'
});

module.exports = {
	context: path.resolve(process.cwd(), 'src'),
	entry: {
		vendor: ['react', 'jquery']
	},
	output: {
		path: path.resolve(process.cwd(), 'dist'),
		filename: '[name].bundle.js',
		publicPath: '/dist/'
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.(jsx|js)$/,
				include: path.resolve(process.cwd(),'src'),
				loader: 'eslint-loader',
			},
			{
				test: /\.(jsx|js)$/,
				include: path.resolve(process.cwd(), 'src'),
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true
						}
					}
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000,
						mimetype: 'application/font-woff'
					}
				}
			},
			{
				test: /\.json$/,
				use: 'json-loader'
			},
			{
				test: /\.scss$/,
				include: [path.resolve(__dirname, 'src/asset/stylesheet')],
				use: extractSass.extract({
					use: [
						{ loader: 'css-loader', options: { sourceMap: true } },
						{ loader: 'resolve-url-loader' },
						{ loader: 'sass-loader', options: { sourceMap: true } }
					],
					fallback: 'style-loader'
				})
			},
			{
				test: /\.css$/,
				use: extractSass.extract({
					use: [
						{ loader: 'css-loader', options: { sourceMap: true } }
					],
					fallback: 'style-loader'
				})
			},
			{
				test: /\.less$/,
				use: ["style-loader", { loader: 'css-loader', options: { sourceMap: 1 } }, "postcss-loader", "less-loader"]
			}
		]
	},
	resolve: {
		extensions: ['.', '.js', '.jsx'],
		alias: {
			public: path.resolve(process.cwd(), 'public')
		},
		modules: [
			path.resolve('./src'),
			path.resolve('./node_modules')
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'commons',
			filename: 'commons.js'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		//new webpack.NoEmitOnErrorsPlugin(), is not necessary for seeing eslint-warnings
		extractSass
	]
};
