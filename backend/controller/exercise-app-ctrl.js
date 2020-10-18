const userModel = require("../model/users.js");
const exerciseModel = require("../model/exercise.js");

// let createUser = function(name, age, done) {
    // let newUser = new userModel({
        // "name": name,
        // "age": age
    // });
    
    // newUser.save(function(err, data){
        // if (err) {
            // console.log(err);
            // done(err);
        // }
        // done(null, data);
    // });
// }

let getUsers = async (req, res) => {
    await userModel.find({}, function(err, data) {
        if (err) {
            console.log("error:", err);
            return res.status(500).send(err);
        }
        console.log("getUsers successful: ", data);
        if(!data.length){
            return res.status(404).send("No users found in database");
        }
        return res.status(200).json(data);
    }).catch(e => console.log("Exception caught: ", e));
}

let deleteUser = async (req, res) => {
    console.log("delete parameter: ", req.params.name);
    await userModel.findOneAndDelete({name: req.params.name}, function(err, data) {
        if (err) {
            console.log("error:", err);
            return res.status(500).json({"server_error": err});
        }
        console.log("delete data:", data);
        if(!data) {
            return res.status(404).send("Input invalid, please enter a valid user name.");
        }
        return res.status(200).send("User successfully deleted");
    }).catch(e => console.log("Exception caught: ", e));
}

module.exports = {
    // createUser,
    deleteUser,
    getUsers
}