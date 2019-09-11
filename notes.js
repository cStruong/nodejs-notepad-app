const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const dupeNote = notes.find(note => note.title === title)

    if (!dupeNote) {
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

const listNotes = () => {
    let notes = loadNotes();
    notes.forEach(notes => console.log(notes.title));
}

const readNote = (title) => {
    const notes = loadNotes();
  
    let desiredNote = notes.find(note => 
        title === note.title
    );

    if (desiredNote) {
        console.log(chalk.green.inverse("Reading Note..."))
        console.log(chalk.bold(desiredNote.title))
        console.log(desiredNote.body)
    } else {
        console.log(chalk.red.inverse("Note does not exist."))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}