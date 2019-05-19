const CONSTANTS = require('./constants');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const entry = './src/index.tsx';

const moduleConfig = {
	rules: [
		{
			test: /\.tsx?$/,
			enforce: 'pre',
			use: {
				loader: 'tslint-loader',
			},
			exclude: /(node_modules)/,
		},
		{
			test: /\.tsx?$/,
			use: {
				loader: 'awesome-typescript-loader',
				options: {
					useBabel: !CONSTANTS.IS_PRODUCTION,
				},
			},
		},
		{
			test: /\.css$/,
			use: [
				MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
					options: {
						modules: true,
						importLoaders: 1
					}
				}
			]
		}
	]
};

const plugins = [
	new MiniCssExtractPlugin({
		filename: `editor.css`,
	}),
];

const resolve = {
	extensions: ['.tsx', '.ts', '.js'],
	alias: {
		'@': CONSTANTS.SRC_PATH,
	},
};

const config = {
	entry,
	module: moduleConfig,
	resolve,
	plugins,
};

module.exports = config;
