const CONSTANTS = require('./constants');
const base = require('./base.config');

const output = {
	path: CONSTANTS.BUILD_PATH,
	filename: 'editor.js',
	library: 'editor',
	libraryTarget: 'commonjs2' // очень важно указать таргет
};

// какие либы мы не добавляем в бандл
const externals = {
	'react': 'commonjs react'
};

const devtool = false;

const mode = CONSTANTS.MODE_ENUM.DEVELOPMENT;

const optimization = {
	minimize: false,
};

module.exports = () => {
	return {
		...base,
		output,
		externals,
		mode,
		devtool,
		optimization
	}
};
