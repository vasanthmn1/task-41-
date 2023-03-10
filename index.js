const express = require('express')
const DB = require('./config/connateDB')
const dotenv = require('dotenv').config()
const colors = require('colors')
const port = 8000 || process.env.PORT
const app = express()
const mentorRoutes = require('./routes/mentoreRouter')
const studentRoute = require('./routes/studentRoute')

DB()
app.use(express.json())
app.use('/', mentorRoutes)
app.use('/', studentRoute)



app.listen(port, () => {
    console.log(`coonting port ${port}`);
})
