const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {
        type: String,
        required: "Please select an exerecise type."
    },
    name: {
        type: String,
        required: "Please enter an exercise name."
    },
    duration: {
        type: Number,
        required: "Please enter the exercise duration in minutes."
    },
    distance: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    },
});

const Exercises = mongoose.model("Exercises", exerciseSchema);

module.exports = Exercises;