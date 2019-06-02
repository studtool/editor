const path = require('path');
const devWebpack = require('../webpack/dev.config')();

// module.exports = async ({ config }) => {
//   Object.assign(config, {
//     resolve: devWebpack.resolve,
//     module: devWebpack.module,
//     plugins: devWebpack.plugins,
//   });
//
//   return config;
// };

module.exports = devWebpack;
