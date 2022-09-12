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

    expiryMonth: {
        type: Number,
        enum: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12],
        required: true
    },

    expiryYear: {
        type: Number,
        enum: [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2040, 2041, 2042],
        required: true
    },

    securityCode: {
        type: Number,
        required: true
    },

    timestamp: {
        type: Date,
        default: Date.now
    }
});


const Payments = model("Payments", PaymentSchema);
module.exports = { "Payments": Payments };
