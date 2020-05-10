const fs = require('fs');
const chalk = require('chalk');


// Chalk string error and success
const success = chalk.green.inverse;
const error = chalk.red.inverse;
const yellow = chalk.inverse.yellow;
const blue = chalk.inverse.blue;

const addNote = (title, body) => {

    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {

        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log(success(`New note added!`));
    } else {
        console.log(error(`Note title taken!`));
    }

}

const removeNote = (title) => {

    const notes = loadNotes();
    const notesToSave = notes.filter((note) => note.title !== title);
    
    if (notes.length > notesToSave.length) {
        console.log(success(`The note with the title ${title} was removed`));
        saveNotes(notesToSave);
    } else {
        console.log(error('No note found'));
    }

}

const listNotes = () => {

    console.log(yellow('Your notes: '));
    const notes = loadNotes();
    notes.forEach(note => console.log(blue(note.title)));

}

const readNote = (title) => {

    const notes = loadNotes();
    const noteToRead = notes.find((note) => note.title === title);

    if (noteToRead) {
        console.log(chalk.inverse(noteToRead.title));
        console.log(noteToRead.body);
    } else {
        console.log(error('Note was found'));
    }
    
}

const saveNotes = (notes) => {

    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);

}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }

}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}

