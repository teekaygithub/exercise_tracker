const mongoose = require('mongoose');
const Schema = mongoose.schema;

const exercise = new Schema({
    name:       String,
    duration:   Number
});

module.exports = mongoose.model("exerciseapp_exercise", exercise);