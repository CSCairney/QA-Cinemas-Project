const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ConcessionSchema = new Schema({

    popcorn: {
        type: String,
        enum: ["Sweet", "Salted", "Sweet & Salted"],
        amount: Number,
        size: {
            type: String,
            enum: ["Small", "Medium", "Large"]
        }
    },
    nachos: {
        type: String,
        enum: ["Cheesy", "Salsa"],
        amount: Number,
        size: {
            type: String,
            enum: ["Small", "Large"]
        }
    },
    drink: {
        type: String,
        enum: ["Fanta", "Sprite", "Pepsi", "Pepsi Max", "J2O"],
        amount: Number,
        size: {
            type: String,
            enum: ["Small", "Large"]
        }
    }
});

const BookingsSchema = new Schema({

    movieTitle: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },

    time: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    seats: {
        type: Number,
        required: true,
        min: 1
    },
    adult: Number,
    child: Number,
    concessions: ConcessionSchema
});

const Bookings = model("Bookings", BookingsSchema);
module.exports = { "Bookings": Bookings };
