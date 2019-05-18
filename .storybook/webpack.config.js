const path = require('path');
const devWebpack = require('../webpack/dev.config');

module.exports = async ({ config }) => {
  Object.assign(config, {
    resolve: devWebpack.resolve,
    module: devWebpack.module,
  });

  return config;
};
