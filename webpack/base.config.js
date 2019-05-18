const CONSTANTS = require('./constants');

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
	]
};

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
};

module.exports = config;
