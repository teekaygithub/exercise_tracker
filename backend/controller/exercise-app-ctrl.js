const userModel = require("../model/users.js");
const exerciseModel = require("../model/exercise.js");

let createUser = (req, res) => {
    console.log("request: ", req.body);
    let newUser = new userModel({
        "name": req.body.name,
        "age": req.body.age
    });
    
    if(!newUser) {
        return res.status(400).send("Failed to create new user");
    }
    
    newUser.save(function(err, data){
        if (err) {
            console.log(err);
            return res.status(500).json({"server_error": err});
        }
        console.log("New user successfully added: ", data);
        return res.status(200).json(data);
    });
}

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

let createExercise = async (req, res) => {
    console.log(req.body); //debug
    let newExercise = new exerciseModel({
        "userId": req.body.userId,
        "description": req.body.description,
        "duration": req.body.duration,
        "date": req.body.date
    });
    
    if(!newExercise) {
        return res.status(400).send("Failed to log exercise!");
    }
    
    newExercise.save(function(err, data) {
        if (err) {
            console.log("error: ", err);
            return res.status(500).json({"server_error": err});
        }
        console.log("New exercise successfully logged: ", data);
        return res.status(200).json(data);
    });
}

module.exports = {
    createUser,
    deleteUser,
    getUsers,
    createExercise
}