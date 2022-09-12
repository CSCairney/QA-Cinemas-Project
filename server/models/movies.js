const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const MoviesSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    release_date: {
        type: Date,
        required: true
    },

    directors: {
        type: Array,
        required: true
    },

    actors: {
        type: Array,
        required: true
    },

    showingDates: {
        type: Array,
        required: true
    },

    showingTimes: {
        type: Array,
        required: true
    },

    duration: {
        type: String,
        required: true
    },

    rating: {
        type: String,
        enum: ["Uc", "U", "PG", "12", "12A", "15", "18", "R18"],
        required: true
    },

    poster: {
        type: String,
        required: true
    }
});

const Movies = model("Movies", MoviesSchema);
module.exports = { "Movies": Movies };
