const express = require('express')
const { createNote, readNotes, readSingleNote, updateNote, deleteNote } = require('../controllers/notes_controller')
const noteRoutes = express.Router()

noteRoutes.post('/create', createNote)

noteRoutes.get('/read', readNotes)

noteRoutes.get('/read/:id', readSingleNote)

noteRoutes.put('/update/:id', updateNote)

noteRoutes.delete('/delete/:id', deleteNote)

module.exports = noteRoutes