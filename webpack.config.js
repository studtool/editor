const constants = require('./webpack/constants');
const dev = require('./webpack/dev.config');
const external = require('./webpack/external.config');

module.exports = () => {
	switch (constants.MODE) {
		case constants.MODE_ENUM.DEVELOPMENT:
			console.log(dev());
			return dev();
		case constants.MODE_ENUM.PRODUCTION:
			return external();
	}
};
