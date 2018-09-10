const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');
const quote = require('./models/quote');

mongoose.connect('mongodb://localhost:27017/hair',{ useNewUrlParser: true })
.then(() => {
    console.log("Connected to MongoDB")
}).catch(err => {
    console.error(err)
})


app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})