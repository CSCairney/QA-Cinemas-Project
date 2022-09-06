const mongoose = require("mongoose");
const ShowingTimes = import("./showingtimes");
const Schema = mongoose.Schema;


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

    showing_times: {
        times: [ShowingTimes]
    },

    duration: {
        type: String,
        required: true
    },

    rating: {
        type: String,
        enum: ["Uc","U", "PG", "12", "12A", "15", "18", "R18"],
        required: true
    },

    poster: {
        type: String,
        required:true
    }   


})

module.exports = mongoose.model("Movies", MoviesSchema);

export default MoviesSchema;




