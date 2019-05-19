const CONSTANTS = require('./constants');
const base = require('./base.config');


const output = {
	path: CONSTANTS.BUILD_PATH,
	filename: 'index.full.js',
};

module.exports = () => {
	return {
		...base,
		output,
		mode: CONSTANTS.MODE_ENUM.DEVELOPMENT,
	}
};
