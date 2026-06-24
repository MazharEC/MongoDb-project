const express = require('express')
const { createNote } = require('../controllers/notes_controller')
const noteRoutes = express.Router()

noteRoutes.post('/create', createNote)