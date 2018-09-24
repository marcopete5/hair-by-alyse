const express = require('express');
const app = express();
const config = require('./config')
// const PORT = 8000 || process.env.PORT;
const mongoose = require('mongoose');
const morgan = require('morgan')
const nodemailer = require('nodemailer');


app.use(morgan('dev'))
app.use(express.json())
app.use('/api/quotes', require('./quoteRouter'))


mongoose.connect('mongodb://localhost:27017/hair',{ useNewUrlParser: true })
.then(() => {
    console.log("Connected to MongoDB")
}).catch(err => {
    console.error(err)
})

app.listen(config.port, () => {
    console.log(`server listening on port ${config.port}`)
})