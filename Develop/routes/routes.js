const router = require('express').Router();
const Exercises = require('../models/exercises.js');
const Workout = require('../models/workout.js');

router.post('/api/workouts', ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post('/api/workouts', ({ body }, res) => {
    Exercises.create(body)
    .then(dbExercises => {
        res.json(dbExercises);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get('/api/workouts', (req, res) => {
    Workout.findOne({ date: -1 })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;