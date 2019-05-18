const path = require('path');
const CONSTANTS = require('./constants');

module.exports = {
	entry: 'src/index.ts',
	output: {
		path: CONSTANTS.BUILD_PATH,
		filename: 'index.js',
	},

	module: {
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
						useBabel: true,
					},
				},
			},
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			'@': CONSTANTS.SRC_PATH,
		},
	},
};
