const Note = require("../models/note_model")

async function createNote(req, res){
    const {title, description} = req.body
    try{
        const note = await Note.create({
            title,
            description
        })
        res.json({
            success: true,
            message: 'Note created successfully',
            note
        })
    }catch(error){
        res.json({
            success: false,
            message: 'Sorry note cannot be created',
            error
        })
    }
}

async function readNotes(req, res){
    try{
        const notes = await Note.find()
        res.json({
            success: true,
            message: 'Successfully find',
            notes
        })

    }catch(error){
        res.json({
            success: false,
            message: 'Sorry',
            error
        })
    }
}

async function readSingleNote(req, res){
    const {id} = req.params
    try{
        const note = await Note.findById(id)
        res.json({
            success: true,
            message: 'Successfully read note by id',
            note
        })

    }catch(error){
        res.json({
            success: false,
            message: 'Sorry',
            error
        })
    }
}

module.exports = {createNote, readNotes, readSingleNote}