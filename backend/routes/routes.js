const express = require('express');
const ExerciseCtrl = require("../controller/exercise-app-ctrl");

const router = express.Router();

router.get("/api/users", ExerciseCtrl.getUsers);
router.post("/api/exercise/new-user", ExerciseCtrl.createUser);
router.delete("/api/users/:name", ExerciseCtrl.deleteUser);
router.post("/api/exercise/add", ExerciseCtrl.createExercise);
router.get("/api/exercise/log", ExerciseCtrl.getExerciseLog);
router.delete("/api/exercise/:userId", ExerciseCtrl.deleteExercise);

module.exports = router;