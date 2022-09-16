const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PopcornSchema = new Schema({
    flavour: {
            type: String,
            enum: ["", "Sweet", "Salted", "Sweet & Salted"]
        },
        amount: Number
})

const NachosSchema = new Schema({
    flavour: {
        type: String,
        enum: ["", "Cheesy", "Salsa"]
    },
    amount: Number
})

const DrinkSchema = new Schema({
    flavour: {
        type: String,
        enum: ["", "Fanta", "Sprite", "Pepsi", "Pepsi Max", "J2O"]
    },
    amount: Number
})

const ConcessionSchema = new Schema({

    popcorn: [PopcornSchema],
    nachos: [NachosSchema],
    drink: [DrinkSchema]
});

const BookingsSchema = new Schema({

    movieTitle: {
        type: String,
        required: true
    },

    date: {
        type: String,
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

    email: {
        type: String,
        required: [true, "Email is required"]
    },

    phone: String,

    seats: {
        type: [String],
        required: true,
        min: 1
    },

    adult: Number,

    adultPremium: Number,

    child: Number,

    childPremium: Number,

    concessions: [{
        popcornFlavour: String,
        popcornAmount: Number,
        nachosFlavour: String,
        nachosAmount: Number,
        drinksFlavour: String,
        drinksAmount: Number
    }]
});

const Bookings = model("Bookings", BookingsSchema);
module.exports = { "Bookings": Bookings };
