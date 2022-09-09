const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const DiscussionsSchema = new Schema({

    username: {
        type: String,
        required: true
    },

    timestamps: {
        type: Date,
        default: Date.now,
        required: true
    },

    subjectMovie: {
        type: String,
        required: true
    },

    rating: {
        type: String,
        enum: ["1","2", "3", "4", "5"],
        required: true
    },

    spoilerMarker: {
        type: Boolean,
        default: false,
        required: false
    },

    message: {
        type: String,
        required: true
    }
});

const Discussions = model("Discussions", DiscussionsSchema);
module.exports = {"Discussions" : Discussions};
