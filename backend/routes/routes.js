const express = require('express');
const ExerciseCtrl = require("../controller/exercise-app-ctrl");

const router = express.Router();

router.get("/api/users", ExerciseCtrl.getUsers);
// router.post("/api/exercise/new-user", ExerciseCtrl.createUser);
router.delete("/api/users/:name", ExerciseCtrl.deleteUser);
// router.post("/api/exercise/add", ExerciseCtrl.logExercise);

module.exports = router;