const chalk = require('chalk');
const { getNotes } = require('./notes');

const notes = getNotes();
console.log(chalk.black.bgWhite(notes));

console.log(chalk.green.bold.underline('Success!'));