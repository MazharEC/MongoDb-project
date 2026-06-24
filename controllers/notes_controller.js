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

const updateNote = async (req, res) => {
    try {
        const { title, description } = req.body; // req.body is undefined without express.json()
        const note = await Note.findByIdAndUpdate(
            req.params.id,
            { title, description },
            { new: true }
        );
        res.status(200).json({ success: true, message: "Note updated", note });
    } catch (error) {
        res.status(500).json({ success: false, message: "Sorry", error: error.message }); // pass error.message!
    }
}

async function deleteNote(req, res){
    const {id} = req.params
    try{
        const note = await Note.findByIdAndDelete(id)
        res.json({
            success: true,
            message: 'Successfully deleted note',
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


module.exports = {createNote, readNotes, readSingleNote, updateNote, deleteNote}