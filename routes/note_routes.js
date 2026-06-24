const express = require('express')
const { createNote, readNotes, readSingleNote } = require('../controllers/notes_controller')
const noteRoutes = express.Router()

noteRoutes.post('/create', createNote)

noteRoutes.get('/read', readNotes)

noteRoutes.get('/read/:id', readSingleNote)

module.exports = noteRoutes