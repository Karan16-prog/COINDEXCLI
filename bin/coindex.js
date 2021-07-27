#!/usr/bin/envnode
const program = require('commander');
const pkg = require('../package.json')
program
  .command('key', 'Manage API Key -- https://nomics.com ')
  .parse(process.argv)
//program.version('1.2.3').parse(process.argv);
console.log('hello from coindex');
//console.log(process.argv)
