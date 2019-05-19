const path = require('path');

const MODE = process.env.MODE || 'production';
const MODE_ENUM = {
	PRODUCTION: 'production',
	DEVELOPMENT: 'development',
};

const IS_PRODUCTION = MODE === MODE_ENUM.PRODUCTION;

const ROOT_PATH = path.resolve(__dirname, '..');
const SRC_PATH = path.join(ROOT_PATH, 'src');
const BUILD_PATH = path.join(ROOT_PATH, 'dist');


module.exports = {
	MODE,
	MODE_ENUM,
	ROOT_PATH,
	SRC_PATH,
	BUILD_PATH,
	IS_PRODUCTION,
};
