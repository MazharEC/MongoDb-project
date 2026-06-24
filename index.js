const express = require('express');
const connectDb = require('./config/db');
const dotenv = require('dotenv');
const noteRoutes = require('./routes/note_routes');
const app = express()
app.use(express.json());
dotenv.config()

app.use('/notes', noteRoutes)

app.listen(process.env.PORT, () =>{
    console.log('Server is running at', process.env.BASE_URL);
    connectDb()
})