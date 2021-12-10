const mongoose = require("mongoose");


const appointment = new mongoose.Schema({
    name: String,
    email: String,
    description: String,
    nutente: Number,
    date: Date,
    time: String,
    finished: Boolean,
    notified: Boolean

})

module.exports = appointment;