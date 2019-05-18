const path = require('path');

const MODE = process.env.MODE || 'production';
const MODE_ENUM = {
	PRODUCTION: 'production',
	DEVELOPMENT: 'development',
};

const ROOT_PATH = path.resolve(__dirname, '..');
const SRC_PATH = path.join(ROOT_PATH, 'src');
const BUILD_PATH = 'dist';


module.exports = {
	MODE,
	MODE_ENUM,
	ROOT_PATH,
	SRC_PATH,
	BUILD_PATH,
};
