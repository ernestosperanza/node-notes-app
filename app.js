const getNotes = require('./notes.js');
const yargs = require('yargs');
const chalk = require('chalk');


// Create Add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    }
})

// Create Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note');
    }
})

// Create Read command
yargs.command({
    command: 'read',
    describe: 'Read the note',
    handler: function () {
        console.log('Reading the notes');
    }
})

// Create List command
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler: function () {
        console.log('Listing the notes');
    }
})

yargs.parse();
//console.log(yargs.argv);