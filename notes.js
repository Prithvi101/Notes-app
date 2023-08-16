const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}
//add note
const addNote = function (title, body) {
    const notes = loadNotes()
    if(notes.every((note)=>(note.title!=title))){
        notes.push({
            title:title,
            body:body,
        })
        saveNote(notes)
        console.log("Note Added Sucessfully !!!")
    }
    else{
        console.log("Note title taken!")
    }
}
// remove note
const removeNote = function(title){
    console.log(title + ' selected for removing')
    deleteNote(title)
}
const deleteNote = function(title){
    const notes = loadNotes()
    if(notes.some((note)=>{
        if(note.title===title){
            notes.pop(note)
            return true;
        }
        else  return false;
        
    })){
        console.log(chalk.green.inverse("Note Removed Sucessfully..."))
        saveNote(notes)
    }
    else{
        console.log(chalk.red.inverse("Note Doesnot Exist"))
    }

}
const listNotes = function(){
    const notes = loadNotes()
    notes.forEach(element => {
        console.log(element.title)
    });
}


const saveNote = function(notes){
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json',data)
}
const loadNotes = function () {
    try {
        const db = JSON.parse(fs.readFileSync('notes.json').toString())
        //console.log(db)
        return db
    } catch (error) {
        console.log("creating new File")
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote,
    listNotes:listNotes
}