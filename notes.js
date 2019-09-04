const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "Your notes...";
};

const addNote = (title, body) => {
    const notes = loadNotes();

    const dupeNotes = notes.filter(note => 
        title === note.title
    )

    if (!(dupeNotes.length)) {
        notes.push({
            title: title,
            body: body
        });
    
        saveNote(notes);
        console.log(chalk.green.inverse("New Note added."));
    } else {
        console.log(chalk.red.inverse("Title already exists. Choose a new title."));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();

    const filteredArray = notes.filter(note => 
         note.title !== title
    )
    
    if (notes.length === filteredArray.length) {
        console.log(chalk.red.inverse("Note doesn't exist.."));
    } else {
        saveNote(filteredArray);
        console.log(chalk.green.inverse("Note Removed.."));
    }
}

const saveNote = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = () => {
    try {
        return JSON.parse((fs.readFileSync('notes.json')).toString());
    } catch(e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}