const CONSTANTS = require('./constants');
const base = require('./base.config');

const output = {
	path: CONSTANTS.BUILD_PATH,
	filename: 'editor.js',
};

const externals = [
	'react',
	'react-dom',
];

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
