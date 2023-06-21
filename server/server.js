require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express')
const app = express();
const port = 8000

//step 2 - configure express
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//one way
const Routes = require('./routes/joke.routes')
Routes(app)

require('./config/mongoose.config')

app.listen(port, () => console.log(`Connected to port ${port}`))