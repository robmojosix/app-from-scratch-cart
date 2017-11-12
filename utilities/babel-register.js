/* eslint-disable import/no-dynamic-require, global-require */
const path = require('path');

// Teach Node how to use babel compilation, using babelrc config defined in root
require('babel-register')(require('../babelrc'));

// Run a specified file when optional argument `--run` is given
const options = process.argv.slice(2);
if (options[0] === '--run') {
  require(path.resolve(process.cwd(), options[1]));
}
