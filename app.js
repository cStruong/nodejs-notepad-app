const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Post Title: ' + argv.title);
        console.log('Post Body: ' + argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    handler: function () {
        console.log('removing a new note...')
    }
})

yargs.command({
    command: 'list',
    describe: 'list of all notes',
    handler: function () {
        console.log('listing all notes...')
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function () {
        console.log('reading a note...')
    }
})

yargs.parse();