const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return "Your notes...";
}

const addNote = (title, body) => {
  const notes = loadNotes();
  const noteExists = notes.some(note => note.title === title)

  if(!noteExists){
    notes.push({
      title: title,
      body: body,
      dateCreated: Date.now()
    })

    saveNotes(notes);
    console.log(chalk.green.inverse(' Note added! '));
  } else {
    console.log(chalk.red.inverse(' Note with same title already exists. Use different title. '))
  }
}
const removeNote = (title) => {
  const notes = loadNotes();
  const notesWithRemoved = notes.filter(note => note.title !== title)

  if(notes.length !== notesWithRemoved.length){
    saveNotes(notesWithRemoved);
    console.log(chalk.green.inverse(' Note removed! '));
  } else {
    console.log(chalk.red.inverse(' No note with that title exists. '))
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
  } catch (error) {
      return [];
  } 
}

module.exports = {
  getNotes,
  addNote,
  removeNote,
}