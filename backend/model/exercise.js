const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exercise = new Schema({
    name:        String,
    description: String,
    duration:    Number
});

module.exports = mongoose.model("exerciseapp_exercise", exercise);