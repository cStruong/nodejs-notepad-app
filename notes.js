const fs = require('fs');

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
        console.log("New Note added.")
    } else {
        console.log("Title already exists. Choose a new title.")
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
    addNote: addNote
}