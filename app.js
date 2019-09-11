const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notesFncs = require('./notes.js');

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
    handler(argv) {
        notesFncs.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesFncs.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'list of all notes',
    handler() {
        console.log(chalk.blue.inverse('listing all notes...'));
        notesFncs.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: "read a note",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notesFncs.readNote(argv.title);
    }
})

yargs.parse();