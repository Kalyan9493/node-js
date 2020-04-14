// use --title in command line  args

const yargs = require('yargs');

const args =  process.argv;
const usingyargs=yargs.argv;

console.log(args);
console.log(usingyargs);