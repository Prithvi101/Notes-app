const fs = require('fs')
const getNotes = function () {
    return 'Your notes...'
}
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
    addNote: addNote
}