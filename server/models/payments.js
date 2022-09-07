const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PaymentSchema = new Schema({


    firstName: {
        type: String,                                                                                           
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    cardNumber: {
        type: Number,
        required: true
    },

    expiryDate: {
        type: Date,
        required: true
    },

    SecurityCode: {
        type: Number,
        required: true
    },

    timestamp: {
        type: Date,
        default: Date.now
    }
    


})


const Payments = model("Payments", PaymentSchema);

module.exports = {"Payments" : Payments};