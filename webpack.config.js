const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: {
		'webpack-tutorial': './src/app.module.js',
		'vendor': [
			'angular-ui-router',
			'angular',
			'jquery'
		]
	},
	output: {
		filename: 'libs/[name].bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: ['ng-annotate-loader', 'babel-loader']
			},
			{
				test: /\.scss$/,
				use: ExtractTextWebpackPlugin.extract({
					use: [
							{
								loader: "css-loader"
							},
							{
								loader: "sass-loader"
							}
					]
				})
			},
			// for fixing of loading bootstrap icon files
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
				loader: 'url-loader?limit=10000',
				options: {
					name: './fonts/[name].[ext]'
				}
			},
			{
				test: /\.(eot|ttf)$/,
				loader: 'file-loader',
				options: {
					name: './fonts/[name].[ext]'
				}
			},
			{ test: /\.html$/, loader: 'html-loader' }
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(), // for mifiying js
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'libs/[name].bundle.js'
		}),
		new CleanWebpackPlugin('build'),
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
			jquery: 'jquery'
		}),
		new ExtractTextWebpackPlugin('styles/styles.css')
	],
	devServer: {
		port: 3000,
		contentBase: './src/'
	}
};

module.exports = config;
