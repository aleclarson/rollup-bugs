const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const ignore = require('rollup-plugin-ignore');

module.exports = {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [
    ignore(['assert']),
    resolve(),
    commonjs(),
  ]
};
