const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exercise = new Schema({
    userId:      String,
    description: String,
    duration:    Number,
    date:        Date
});

module.exports = mongoose.model("exerciseapp_exercise", exercise);