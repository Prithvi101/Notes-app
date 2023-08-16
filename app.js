const chalk = require('chalk')
const yargs = require('yargs')
const {getNotes,addNote,removeNote,listNotes,readNote} = require('./notes.js')
const fs = require('fs')
const command = process.argv[2]


// add , remove , read , list
//add
yargs.command({
    command:'add',
    describe:'Adding a Note',
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type:'string',
        },
        body:{
            describe:"Note Body",
            demandOption:true,
            type:'string',
        }
    },
    handler: function(argv){
        addNote(argv.title,argv.body)
    }
})
//remove
yargs.command({
    command:'remove',
    describe:'removing a Note',
    builder:{
        title:{
            describe:"select not to remove",
            demandOption:true
        }
    },
    handler: function(argv){
        removeNote(argv.title)
    }
})
//read
yargs.command({
    command:'read',
    describe:'Reading a Note',
    builder:{
        title:{
            describe:"select note to read",
            demandOption:true
        }
    },
    handler: function(argv){
        readNote(argv.title)
    }
})
//list
yargs.command({
    command:'list',
    describe:'Listing a Note',
    builder:{
        title:{
            describe:""
        }
    },
    handler: function(){
        listNotes();
    }
})
yargs.parse()