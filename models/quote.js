const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    event: [String],
    date: [Date],
    hairLength: String,
    thickness: String,
    hasExtension: Boolean,
    extensionType: String,
    style: [String],
    time: String,
    location: String,
    emailAddress: String,
    cellPhone: String,
    comments: String
})

module.exports = mongoose.model("Quote", quoteSchema)