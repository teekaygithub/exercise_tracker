const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const users = new Schema({
    name:   String
});

module.exports = mongoose.model("exerciseapp_users", users);