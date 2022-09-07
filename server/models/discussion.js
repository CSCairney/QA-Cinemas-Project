const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const DiscussionSchema = new Schema({

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
        required: false
    },

    message: {
        type: String,
        required: true
    }
   


})

const Discussion = model("Discussion", DiscussionSchema);

module.exports = {"Discussion" : Discussion};