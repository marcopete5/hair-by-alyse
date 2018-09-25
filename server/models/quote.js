const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    fName: String,
    lName: String,
    events: [{
        event: String
    }],
    dates: [{
        date: Date
    }],
    length: String,
    thickness: String,
    hasExtension: Boolean,
    extension: String,
    style: [String],
    time: String,
    needsTravel: Boolean,
    travel: String,
    email: String,
    cell: String,
    comments: String
})

module.exports = mongoose.model("Quote", quoteSchema)