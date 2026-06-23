const express = require('express');
const connectDb = require('./config/db');
const dotenv = require('dotenv')
const app = express()
dotenv.config()

app.get('/', (req, res) => {

})

app.listen(process.env.PORT, () =>{
    console.log('Server is running at', process.env.BASE_URL);
    connectDb()
})