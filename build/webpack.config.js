/******************************************
 *  Author : niuzz niuzz@hotmail.com   
 *  Created On : Tue Mar 06 2018
 *  File : webpack.config.js.js
 *******************************************/
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
	entry: {
		app: path.join(__dirname + '/../src/app.js'),
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(scss)$/,
				use: [{
					loader: 'style-loader', // inject CSS to page
				}, {
					loader: 'css-loader', // translates CSS into CommonJS modules
				}, {
					loader: 'postcss-loader', // Run post css actions
					options: {
						plugins: function () { // post css plugins, can be exported to postcss.config.js
							return [
								require('precss'),
								require('autoprefixer')
							];
						}
					}
				}, {
					loader: 'sass-loader' // compiles Sass to CSS
				}]
			},
			{
				test: /\.(png|jpg|jpeg)$/,
				loader: 'url-loader',
				options: {
							name: '[name].[md5:hash:base64:6].[ext]',
							outputPath: 'public/img',
							limit: 1024
					}
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			  },
			{
				test: /\.(js)$/,
				loader: 'babel-loader',
				exclude: [
					path.join(__dirname, '../node_modules'),
				]
			} 
		]
	},
	output: {
		path: path.join(__dirname, '../dist'),
		filename: '[name].[hash].js',
		publicPath: ''     					
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: '111',
			filename: 'index.shtml',
			hash: true,
			template: path.join(__dirname, '../src/templete.html'),
		})
	]
}
if (isDev) {
	config.devServer = {
		host: '0.0.0.0',
		port: '9000',
		contentBase: path.join(__dirname + '/../dist'),
		overlay: {
			errors: true
		},
		publicPath: '/public',
		historyApiFallback: {
			index: '/public/index.html'
		}
	}
}
module.exports = config