const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routeUrls = require('./routes/routes')
const cors = require('cors')
// Config the dotenv file
dotenv.config()

// Connect to database
mongoose.connect(process.env.DATABASE_ACCESS, ()=> console.log("Database connected successfully"))

// Intitalise JSON package
app.use(express.json())
// Intialise Cors
app.use(cors())
// Append the urls to route
app.use('/app', routeUrls)
// allot port
app.listen(4000, () => console.log("server setup at port 4000"))
