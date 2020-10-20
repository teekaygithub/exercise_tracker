const userModel = require("../model/users.js");
const exerciseModel = require("../model/exercise.js");

let createUser = (req, res) => {
    console.log("request: ", req.body);
    let newUser = new userModel({
        "name": req.body.name
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
        console.log("New exercise successfully logged: ", data); //debug
        return res.status(200).json(data);
    });
}

let getExerciseLog = async (req, res) => {
    console.log("request: ", req.query); // debug
    let limit = 0;
    let findQuery = {userId: req.query.userId}
    
    if (req.query.limit) {
        limit = parseInt(req.query.limit);
    }
    if (req.query.from && req.query.to) {
        findQuery.date = {
                $gte: new Date(req.query.from),
                $lte:  new Date(req.query.to)
            }
    }
    await exerciseModel.find(findQuery, null, {limit: limit}, function(err, data) {
        if(err) {
            console.log("server error: ", err); // debug
            return res.status(500).json({"server_error":err});
        }
        if (!data) {
            console.log("No logs found for user"); //debug
            return res.status(400).send("No logs found for user");
        }
        if (req.query.limit) {}
        console.log("Found log: ", data) // debug
        return res.status(200).json(data);
    });
}

let deleteExercise = async (req, res) => {
    console.log(req.params.userId);
    await exerciseModel.findOneAndDelete({userId: req.params.userId}, function(err, data) {
        if (err) {
            console.log("server error: ", err) //debug
            return res.status(500).json({"server_error":err});
        }
        if (!data) {
            return res.status(400).send("Could not find any exercises for the user ID.");
        }
        return res.status(200).send("Exercise deleted.");
    });
}

module.exports = {
    createUser,
    deleteUser,
    getUsers,
    createExercise,
    getExerciseLog,
    deleteExercise
}