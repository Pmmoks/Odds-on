/* Production builds usually strip out non essential outputs e.g. console.logs(), and are usually minimised to save space

We can also use new production specific config files
*/

/* This file should be an extension ontop of webpack.config, by requiring in the webpack.config file
*/


var WebpackStrip = require('strip-loader')
var devConfig = require('./webpack.config.js')

/* The added functionality to strip-out unnecessary functionality from the production build
*/
var stripLoader = {
  test: [/\.js$/, /\.jsx$/],
  exclude: /node_modules/,
  loader: WebpackStrip.loader('console.log')
}

devConfig.module.loaders.push(stripLoader)

/* Now we have duplicated the functionality of webpack.config file, while adding production specific functionality
*/
module.exports = devConfig
