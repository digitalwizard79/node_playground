const fs = require('fs')
const chalk = require('chalk')

// Add new note
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.white.bgGreen("New note added"))
    } else {
        console.log(chalk.white.bgRed('New note not added. Duplicate found.'))
    }
}

// Remove note
const removeNote = (title) => {
    const notes = loadNotes();
    const remainingNotes = notes.filter((note) => note.title !== title)

    // Note not removed
    if (notes.length === remainingNotes.length) {
        console.log(chalk.white.bgRed("The note was not removed!"))
    // Note removed
    } else {
        saveNotes(remainingNotes)
        console.log(chalk.white.bgGreen("The note was removed"))
    }
}

// List notes
const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.bold.blue("Your notes:"))
    let x = 1
    notes.forEach((note) => {
        console.log("Note " + x + ":")
        readNote(note.title)
        x++
    })
}

// Read a note
const readNote = (title) => {
    const notes = loadNotes()
    const foundNote = notes.find((note) => note.title === title)
    
    if (foundNote) {
        console.log(chalk.bgGreen.black("Title: " + foundNote.title))
        console.log(chalk.bgBlue.white("Body: " + foundNote.body))
    } else {
        console.log(chalk.bgRed.white("No note was found!"))
    }
}

// Save notes
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON);
}

// Load notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}