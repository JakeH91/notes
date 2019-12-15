const chalk = require('chalk');
const yargs = require('yargs');
const { getNotes, addNote, removeNote } = require('./notes');
const fs = require('fs');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Body of note',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    addNote(argv.title, argv.body);
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove an existing note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    }
  },
  handler: (argv) => {
    removeNote(argv.title);
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List existing notes',
  handler: () => {
    console.log('Listing out all notes...');
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read an existing note',
  handler: () => {
    console.log('Reading note...');
  }
})

yargs.parse();