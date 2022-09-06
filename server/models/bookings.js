const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const BookingsSchema = new Schema({
    movieTitle: {
        type: String,
        required: [true,"Title is required"]
    },

    date: {
        type: Date,
        required: [true,"Date is required"]
    },

    time:{
        type:String,
        required:[true,"ShowTime is Required"]
    },

    name: {
        type:String,
        required: [true,"Name is required"]
    },

    seats: {
        type: Number,
        required: [true,"Number of Seats Required"],
        min:[1,"Must Choose at Least 1 seat"],
        max:[10,"You can't book more than 10 seats. Contact Cinema. "]
    },

   adults: Number,
   child:Number,
   email:String,
   billingDetails:BillingsDetailsSchema,
   paymentInfo:PaymentInfoSchema,
})